import base64
import time
from flask import Flask, request, jsonify, send_file
import tensorflow as tf
import numpy as np
from PIL import Image
import io
import cv2
import os

app = Flask(__name__)

# Load the trained model
trained_detection_graph = tf.Graph()
with trained_detection_graph.as_default():
    od_graph_def = tf.compat.v1.GraphDef()
    with tf.io.gfile.GFile('D:/Python/Cruisers_AugenblickHackathon/flask/exported_model/frozen_inference_graph.pb', 'rb') as fid:
        serialized_graph = fid.read()
        od_graph_def.ParseFromString(serialized_graph)
        tf.import_graph_def(od_graph_def, name='')

# Define the label map manually
LABEL_MAP = {1: {'id': 1, 'name': 'Aluminium foil'}, 2: {'id': 2, 'name': 'Battery'}, 3: {'id': 3, 'name': 'Aluminium blister pack'}, 4: {'id': 4, 'name': 'Carded blister pack'}, 5: {'id': 5, 'name': 'Other plastic bottle'}, 6: {'id': 6, 'name': 'Clear plastic bottle'}, 7: {'id': 7, 'name': 'Glass bottle'}, 8: {'id': 8, 'name': 'Plastic bottle cap'}, 9: {'id': 9, 'name': 'Metal bottle cap'}, 10: {'id': 10, 'name': 'Broken glass'}, 11: {'id': 11, 'name': 'Food Can'}, 12: {'id': 12, 'name': 'Aerosol'}, 13: {'id': 13, 'name': 'Drink can'}, 14: {'id': 14, 'name': 'Toilet tube'}, 15: {'id': 15, 'name': 'Other carton'}, 16: {'id': 16, 'name': 'Egg carton'}, 17: {'id': 17, 'name': 'Drink carton'}, 18: {'id': 18, 'name': 'Corrugated carton'}, 19: {'id': 19, 'name': 'Meal carton'}, 20: {'id': 20, 'name': 'Pizza box'}, 21: {'id': 21, 'name': 'Paper cup'}, 22: {'id': 22, 'name': 'Disposable plastic cup'}, 23: {'id': 23, 'name': 'Foam cup'}, 24: {'id': 24, 'name': 'Glass cup'}, 25: {'id': 25, 'name': 'Other plastic cup'}, 26: {'id': 26, 'name': 'Food waste'}, 27: {'id': 27, 'name': 'Glass jar'}, 28: {'id': 28, 'name': 'Plastic lid'}, 29: {'id': 29, 'name': 'Metal lid'}, 30: {'id': 30, 'name': 'Other plastic'}, 31: {'id': 31, 'name': 'Magazine paper'}, 32: {'id': 32, 'name': 'Tissues'}, 33: {'id': 33, 'name': 'Wrapping paper'}, 34: {'id': 34, 'name': 'Normal paper'}, 35: {'id': 35, 'name': 'Paper bag'}, 36: {'id': 36, 'name': 'Plastified paper bag'}, 37: {'id': 37, 'name': 'Plastic film'}, 38: {'id': 38, 'name': 'Six pack rings'}, 39: {'id': 39, 'name': 'Garbage bag'}, 40: {'id': 40, 'name': 'Other plastic wrapper'}, 41: {'id': 41, 'name': 'Single-use carrier bag'}, 42: {'id': 42, 'name': 'Polypropylene bag'}, 43: {'id': 43, 'name': 'Crisp packet'}, 44: {'id': 44, 'name': 'Spread tub'}, 45: {'id': 45, 'name': 'Tupperware'}, 46: {'id': 46, 'name': 'Disposable food container'}, 47: {'id': 47, 'name': 'Foam food container'}, 48: {'id': 48, 'name': 'Other plastic container'}, 49: {'id': 49, 'name': 'Plastic glooves'}, 50: {'id': 50, 'name': 'Plastic utensils'}, 51: {'id': 51, 'name': 'Pop tab'}, 52: {'id': 52, 'name': 'Rope & strings'}, 53: {'id': 53, 'name': 'Scrap metal'}, 54: {'id': 54, 'name': 'Shoe'}, 55: {'id': 55, 'name': 'Squeezable tube'}, 56: {'id': 56, 'name': 'Plastic straw'}, 57: {'id': 57, 'name': 'Paper straw'}, 58: {'id': 58, 'name': 'Styrofoam piece'}, 59: {'id': 59, 'name': 'Unlabeled litter'}, 60: {'id': 60, 'name': 'Cigarette'}}

# Create category index from the label map
category_index = {value['id']: {'id': value['id'], 'name': value['name']} for value in LABEL_MAP.values()}

@app.route('/predict', methods=['POST'])
def predict():
    file = request.files['image']
    image = Image.open(io.BytesIO(file.read()))
    npim = np.array(image.getdata()).reshape((image.height, image.width, 3)).astype(np.uint8)
    npim = np.expand_dims(npim, axis=0)

    with trained_detection_graph.as_default():
        with tf.compat.v1.Session(graph=trained_detection_graph) as sess:
            image_tensor = trained_detection_graph.get_tensor_by_name('image_tensor:0')
            detection_boxes = trained_detection_graph.get_tensor_by_name('detection_boxes:0')
            detection_scores = trained_detection_graph.get_tensor_by_name('detection_scores:0')
            detection_classes = trained_detection_graph.get_tensor_by_name('detection_classes:0')
            num_detections = trained_detection_graph.get_tensor_by_name('num_detections:0')

            (boxes, scores, classes, num) = sess.run(
                [detection_boxes, detection_scores, detection_classes, num_detections],
                feed_dict={image_tensor: npim}
            )

            # Draw the detections on the image
            height, width, _ = npim[0].shape
            final_boxes, final_scores, final_classes = [], [], []
            for i in range(boxes.shape[1]):
                if scores[0][i] > 0.9:  # Change this line
                    box = boxes[0][i]
                    ymin, xmin, ymax, xmax = box
                    start_x, start_y, end_x, end_y = int(xmin * width), int(ymin * height), int(xmax * width), int(ymax * height)
                    cv2.rectangle(npim[0], (start_x, start_y), (end_x, end_y), (0, 255, 0), 2)
                    label = f"{category_index[int(classes[0][i])]['name']}: {scores[0][i]}"
                    cv2.putText(npim[0], label, (start_x, start_y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)
                    
                    # Add the box, score, and class to the final lists
                    final_boxes.append(box.tolist())
                    final_scores.append(float(scores[0][i]))  # Convert to float
                    final_classes.append(category_index[int(classes[0][i])]['name'])

    # Convert the image array to a PIL Image
    image_with_detections = Image.fromarray(npim[0])

    # Save the image to a file
    timestamp = time.strftime("%Y%m%d-%H%M%S")
    filename = f'image_with_detections_{timestamp}.jpg'
    image_path = os.path.join('D:/Python/Cruisers_AugenblickHackathon/flask/detections', filename)
    image_with_detections.save(image_path)

    # Save the image to a BytesIO object
    byte_io = io.BytesIO()
    image_with_detections.save(byte_io, 'JPEG')
    byte_io.seek(0)

    # Convert the image to base64
    image_str = base64.b64encode(byte_io.getvalue()).decode('utf-8')

    # Prepare and send the response
    response = {
        'image': image_str,
        'boxes': final_boxes,
        'scores': final_scores,
        'classes': final_classes,
    }

    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=False)