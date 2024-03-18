import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './home.css'; // Import Home CSS
import './nicepage.css'
const Homepage = () => {
  return (
    <>
      {/* <div className="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
        <div className="bg-dark p-4">
          <h5 className="text-body-emphasis h4">Collapsed content</h5>
          <span className="text-body-secondary">Toggleable via the navbar brand.</span>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top me-2" />
            Bootstrap
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav> */}
      {/* <div class="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
  <div class="bg-dark p-4">
    <h5 class="text-body-emphasis h4">Collapsed content</h5>
    <span class="text-body-secondary">Toggleable via the navbar brand.</span>
  </div>
</div> */}
      {/* <nav role="navigation" class="navbar navbar-inverse navbar-fixed-top topnav">
    <div class="container-fluid">
    <button class="navbar-toggler" style={{backgroundColor:'#dccfcf'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      <div class="navbar-header">
       
          <span class="sr-only">
         
          </span>
         
        <a href="#home" class="navbar-brand"><span class="glyphicon glyphicon-fire"></span> <strong>Luis Brito</strong></a>
      </div>
      
      <div id="navbarCollapse" class="collapse navbar-collapse">
        <img src=""/>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav> */}
  <section class="u-clearfix u-palette-1-base u-section-1" id="sec-56bb">
      <div class="u-clearfix u-sheet u-valign-middle-xs u-sheet-1" style={{margin: "54px"}}>
        <div class="data-layout-selected u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-1">
          <div class="u-layout">
            <div class="u-layout-row">
              <div class="u-align-left u-container-style u-image u-layout-cell u-left-cell u-size-30 u-image-1">
                <img class="u-container-layout u-container-layout-1" src="https://img.freepik.com/premium-vector/clean-india-is-english-meaning-swachh-bharat-writtten-hindi-poster-design-2-october-clean-india-campaign_695987-1046.jpg"/>
                </div>
              <div class="u-align-left u-container-style u-layout-cell u-palette-2-base u-right-cell u-size-30 u-layout-cell-2">
                <div class="u-container-layout u-valign-middle u-container-layout-2" style={{padding: "83px"}}>
                  <h1 class="u-text u-text-palette-1-base u-title u-text-1">Waste Identifier </h1>
                  <p class="u-text u-text-2">Eating out is an essential part of our lives and we spend much of our time choosing between places that offer the best of cuisine and a desirable ambiance.</p>
                  <a href="#" class="u-btn u-button-style u-palette-1-base u-btn-1">learn more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <section class="u-align-center u-clearfix u-palette-1-base u-section-2" id="sec-089b">
      <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
        <div class="u-expanded-width u-list u-list-1">
          <div class="u-repeater u-repeater-1">
            <div class="u-container-style u-list-item u-repeater-item">
              <div class="u-container-layout u-similar-container u-valign-middle u-container-layout-1"><span class="u-icon u-icon-circle u-palette-2-light-1 u-text-palette-1-base u-icon-1"><svg class="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 512.136 512.136" style=""><use xlink:href="#svg-621e"></use></svg>
              <svg class="u-svg-content" viewBox="0 0 512.136 512.136" id="svg-621e"><g><path d="m494.705 145.448-51.24-123.706-123.706 51.241c-23.516 9.741-44.882 23.077-63.691 39.737-18.81-16.66-40.176-29.996-63.691-39.737l-123.706-51.241-51.24 123.706c-23.241 56.108-23.241 117.91 0 174.018 23.241 56.109 66.941 99.809 123.05 123.05l115.587 47.877 115.587-47.877c56.109-23.241 99.809-66.941 123.05-123.05 23.241-56.108 23.241-117.91 0-174.018zm-163.465-44.749 76.39-31.642-76.658 185.069c-5.585-43.699-23.87-85.57-53.766-120.038 16.015-13.941 34.134-25.146 54.034-33.389zm-85.819 43.214.898.905c55.482 56.628 71.74 140.45 41.402 213.724l-31.654 76.418-151.561-365.903 76.39 31.641c24.379 10.1 46.089 24.639 64.525 43.215zm-200.274 164.073c-20.174-48.705-20.174-102.352 0-151.057l31.642-76.39 151.562 365.904-76.39-31.642c-48.706-20.176-86.639-58.11-106.814-106.815zm421.842 0c-20.175 48.706-58.108 86.64-106.814 106.814l-76.39 31.642 31.642-76.39c.004-.009.008-.019.011-.028l119.909-289.486 31.642 76.39c20.174 48.706 20.174 102.353 0 151.058z">
</path></g></svg>
                </span>
                <h3 class="u-align-center u-text u-text-1">Organic</h3>
                <p class="u-align-center u-text u-text-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
              </div>
            </div>
            <div class="u-container-style u-list-item u-repeater-item">
              <div class="u-container-layout u-similar-container u-valign-middle u-container-layout-2"><span class="u-file-icon u-icon u-icon-circle u-palette-2-light-1 u-text-palette-1-base u-icon-2">
                <img src="images/2929646-14059612.png" alt=""/></span>
                <h3 class="u-align-center u-text u-text-3">Reduce</h3>
                <p class="u-align-center u-text u-text-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
              </div>
            </div>
            <div class="u-container-style u-list-item u-repeater-item">
              <div class="u-container-layout u-similar-container u-valign-middle u-container-layout-3"><span class="u-file-icon u-icon u-icon-circle u-palette-2-light-1 u-text-palette-1-base u-icon-3">
                <img src="images/672740-da1ec56e.png" alt=""/></span>
                <h3 class="u-align-center u-text u-text-5">Products</h3>
                <p class="u-align-center u-text u-text-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
  <a name="home"></a>
  <div class="home">
    <div class="container-fluid text-center" id="welcome">
      <h1 id="wtext">Welcome</h1>
      <h3 id="subtext">Learn more about my work and contact me visiting:</h3>
      <div class="container-fluid">
        <a href="https://twitter.com/britobluis" target="_blank" class="btn btn-default btn-lg">Twitter</a>
        <a href="https://github.com/britobluis" target="_blank" class="btn btn-default btn-lg">Github</a>
        <a href="#" target="_blank" class="btn btn-default btn-lg">LinkedIn</a>
      </div>
    </div>
  </div>
  
  <a name="portfolio"></a>
  <div class="portfolio">
    <div class="container-fluid">
      <h1>Portfolio</h1>
      <h3>They will just be placeholders for now</h3>
      <div class="container-fluid">
        <div class="row">
          <div class="col-xs-4 thumbnail">
            <img src="http://www.pacinno.eu/wp-content/uploads/2014/05/placeholder1.png" class="img-rounded" alt="placeholder"/>
            <h4>Placeholder 1</h4>
            <p>This is a placeholder for future projects</p>
          </div>
          <div class="col-xs-4 thumbnail">
            <img src="http://www.pacinno.eu/wp-content/uploads/2014/05/placeholder1.png" class="img-rounded" alt="placeholder"/>
            <h4>Placeholder 2</h4>
            <p>This is a placeholder for future projects</p>
          </div>
          <div class="col-xs-4 thumbnail">
            <img src="http://www.pacinno.eu/wp-content/uploads/2014/05/placeholder1.png" class="img-rounded" alt="placeholder"/>
            <h4>Placeholder 2</h4>
            <p>This is a placeholder for future projects</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <a name="contact"></a>
  <div class="contact">
    <div class="container-fluid">
      <h1>Contact</h1>
      <h3>They will just be a placeholder for now</h3>
    </div>
  </div>
  
    </>
  );
};

export default Homepage;
