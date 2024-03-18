import React, { useState } from 'react';
import './upload.css';

export default function Upload() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false); // State to track loading status

  const handleImageUpload = (event) => {
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setUploadedImage(imageUrl);
    setLoading(true); // Set loading to true when image is uploaded

    // Simulate processing time using setTimeout
    setTimeout(() => {
      // Perform classification or any other processing here and set the output
      // For now, setting output to a placeholder
      setOutput('Output placeholder');
      setLoading(false); // Set loading to false when output is ready
    }, 2000); // Simulated processing time of 2 seconds
  };

  return (
    <div style={{backgroundColor:"#fcebd4"}}>
      <div className="row form-container" style={{  backgroundImage: 'url("https://thumbs.dreamstime.com/b/sorting-waste-recycle-green-paper-recycling-sign-waste-paper-plastic-glass-polyethylene-white-sorting-waste-108347682.jpg?w=768")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div className="my-3 upload-files-container my-10">
          <div className="drag-file-area">
            <span className="material-icons-outlined upload-icon">
              Welcome to our Upload Section! Share your images for classification
            </span>
            <h3 className="dynamic-message">Drag & drop any file here</h3>
            <label className="label">
              or{' '}
              <span className="browse-files">
                <input type="file" accept="image/*" onChange={handleImageUpload} />
              </span>
            </label>
          </div>
        </div>
      </div>
      
      <div className="row p-2" style={{ backgroundColor: "#fff", textAlign: "center" }}>
        <div className="col-12">
          <div className="card shadow rounded" style={{ backgroundColor:"#209da0" }}>
            <div className="card-body">
            <div class="one">
                <h1>HERE IS THE RESULT</h1>
                </div>
              {/* <h3 className="card-title mb-4">HERE IS THE RESULT</h3> */}
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 m-0 p-0">
                  <div className="scrollable-box m-0">
                    <h4 style={{ color: 'rgb(0 0 0)', textAlign:'center' }}>Uploaded Image</h4>
                    {uploadedImage && (
                      <div className="card rounded">
                        <img src={uploadedImage} alt="Uploaded" style={{ width: '100%', borderRadius: '10px' }} />
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 m-0 p-0">
                  <div className="scrollable-box m-0">
                    <h4 style={{ color: 'rgb(0 0 0)', textAlign:'center' }}>Output</h4>
                    {loading ? ( // Display loading spinner or text if loading
                      <p>Loading...</p>
                    ) : (
                      <div className="card rounded">
                        <p style={{ color: 'cadetblue', padding: '10px' }}>{output}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card layout */}
      <div className="row align-items-center mt-4" style={{padding:"16px"}}>
      <div class="one">
        <h1>Things might help you!</h1>
        </div>
        <div className="col-3">
          <div className="card" style={{ maxWidth: '18rem' }}>
            <video src="https://codingyaar.com/wp-content/uploads/video-in-bootstrap-card.mp4" className="card-img-top" controls></video>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <video src="https://codingyaar.com/wp-content/uploads/video-in-bootstrap-card.mp4" className="card-img-top" muted autoplay loop></video>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card" style={{ maxWidth: '18rem' }}>
            <div className="ratio ratio-16x9">
              <iframe width="1424" height="652" src="https://www.youtube.com/embed/NAMvdbS4lk4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card" style={{ maxWidth: '18rem' }}>
            <div className="ratio ratio-16x9">
              <iframe width="1424" height="652" src="https://www.youtube.com/embed/NAMvdbS4lk4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
}
