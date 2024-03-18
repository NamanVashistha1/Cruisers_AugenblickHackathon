import React, { useState } from 'react';

function WasteClassification() {
  const [imgData, setImgData] = useState('');
  const [loading, setLoading] = useState(false);
  const [predictedValue, setPredictedValue] = useState('');
  const [details, setDetails] = useState('');
  const [video1, setVideo1] = useState('zO3jFKiqmHo');
  const [video2, setVideo2] = useState('I_fUpP-hq3A');
  const [showResults, setShowResults] = useState(false);

  const previewImage = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImgData(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const classifyWaste = () => {
    if (imgData) {
      setLoading(true);
      // Perform AJAX request to classify waste
      // Simulating the response
      setTimeout(() => {
        setPredictedValue('Plastic');
        setDetails('This is a plastic waste.');
        setVideo1('zO3jFKiqmHo');
        setVideo2('I_fUpP-hq3A');
        setLoading(false);
        setShowResults(true);
      }, 2000); // Simulated processing time of 2 seconds
    } else {
      alert('Please upload an image of your waste material.');
    }
  };

  return (
    <div className="container">
      <br />
      <div className="row">
        <div className="col-md-6 classy_frame" style={{ paddingTop: '0%' }}>
          <center><h3 style={{ textTransform: 'capitalize' }}>Classify Your Waste Material</h3></center>
          <img id="preview" src={imgData || 'images/reuse.png'} height="400px" width="100%" title="client pic" alt="Preview" />

          <center>
            <br />
            <div className="image-upload">
              <p style={{ color: 'wheat' }} id="upload-web">Click the image upload icon below to upload an image.</p>
              <p style={{ color: 'wheat' }} id="upload-mobile">Click the camera icon below to click an image.</p>

              <label htmlFor="file">
                <img id="upload-web" src="images/upload.png" alt="Upload Web" />
                <img id="upload-mobile" src="images/camera.png" alt="Upload Mobile" />
              </label>
              <input type="file" name="file" id="file" onChange={previewImage} />
            </div>

            <br />
            <button className="classify-button" onClick={classifyWaste}>Classify your waste material</button>
          </center>
          <br />
        </div>

        <div className="col-md-6 classy_frame" style={{ paddingTop: '0%' }} id="about">
          <center><h3 style={{ textTransform: 'capitalize' }}>About</h3></center>
          <h4>The world generates at least 3.5 million tons of waste per day and this number is still increasing day by day that's why we need to aware about waste.
            <br /><br />This app is help you to classify your waste with 9 different waste materials.
            The recycling process of these waste materials are very hard and even it's very difficult to classify these 9 different waste materials at recycling factory.
            <br /><br />But what if every people make 9 trash for 9 different waste materials and put the waste to the particular trash according to that waste materials this would be much more better for cleaners and recycling factory to classify and recycle the waste.
            Everyone should do this because around 70% of waste are not recycled just because that was not classified.
            <br /><br /><br /><br /><br /><br />
          </h4>
        </div>
      </div>

      {showResults && (
        <div>
          {/* Recycling Videos */}
          <div className="row" id="recycling-videos">
            <br />
            <hr />
            <h3 id="video-title">How {predictedValue} Recycling Works?</h3>
            <div className="col-md-6 col-xs-6 classy_frame" style={{ paddingTop: '0%', paddingBottom: '2%' }}>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe id="video1" width="560" height="315" src={`https://www.youtube.com/embed/${video1}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowFullScreen title="Video 1"></iframe>
              </div>
            </div>
            <div className="col-md-6 col-xs-6 classy_frame" style={{ paddingTop: '0%', paddingBottom: '2%' }}>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe id="video2" width="560" height="315" src={`https://www.youtube.com/embed/${video2}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowFullScreen title="Video 2"></iframe>
              </div>
            </div>
          </div>

          {/* What If */}
          <div className="row" id="what-if">
            <br />
            <hr />
            <div className="col-md-6 col-xs-6 classy_frame" style={{ paddingTop: '0%', paddingBottom: '2%' }}>
              <center><h2 style={{ textTransform: 'capitalize' }}>What If We Stopped Recycling?</h2></center>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/8fFJOzXxB54" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowFullScreen title="What If We Stopped Recycling"></iframe>
              </div>
            </div>
            <div className="col-md-6 col-xs-6 classy_frame" style={{ paddingTop: '0%', paddingBottom: '2%' }}>
              <center><h2 style={{ textTransform: 'capitalize' }}>What If We Created No Waste?</h2></center>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/wWbL7Mv2MFw" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowFullScreen title="What If We Created No Waste"></iframe>
              </div>
            </div>
          </div>

          {/* Motivation */}
          <div className="row" id="motivation">
            <br />
            <hr />
            <h3>Why We Need Awareness</h3>
            <div className="col-md-12 classy_frame" style={{ paddingTop: '0%', paddingBottom: '2%' }}>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/NhF4pXBNfq8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowFullScreen title="Why We Need Awareness"></iframe>
              </div>
            </div>
          </div>

          {/* Quotes */}
          <div className="row" id="quotes">
            <br />
            <hr />
            <div className="col-md-6 col-xs-6 classy_frame" style={{ paddingTop: '0%' }}>
              <h4>They don’t dive into the swimming pool they dive into the mud. We can't even imagine how they would feel.</h4>
            </div>
            <div className="col-md-6 col-xs-6 classy_frame" style={{ paddingTop: '0%' }}>
              <h4>Your one step to waste recycling can make a cleaner’s life 10 minutes better.<br /> &nbsp;</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WasteClassification;
