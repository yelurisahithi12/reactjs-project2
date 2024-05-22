import React from 'react';
import './HeroSection.css'; // Import your CSS file for styling

const HeroSection = () => {
  return (
    <section className="hero">
      <h2><b>The ultimate music accessory for your Mac.</b></h2>
      <p>
        Sleeve displays and controls your music on 
        <img src="https://replay.software/sleeve/images/AppMusic.png" alt="AppMusic" style={{ width: '50px', height: '40px' }} /> Apple Music, 
        <img src="https://replay.software/sleeve/images/AppSpotify.png" alt="AppSpotify" style={{ width: '50px', height: '40px' }} /> Spotify and 
        <img src="https://replay.software/sleeve/images/AppDoppler.png" alt="AppDoppler" style={{ width: '50px', height: '40px' }} /> Doppler.
      </p>
      <button className="mac-app-store-button" onClick={() => window.open("https://apps.apple.com/us/app/sleeve-for-spotify-music/id1606145041?mt=12", "_blank")}>
        Mac App store
      </button>
      <button className="buy-now-button">
        Buy Directly - $5.99
      </button>
      <br/>
      <br/>
      
      <p>Themes.Unlimited themes</p>
      <h6>Themes in Sleeve make creating and switching between customizations easy. Share your own creations with friends and install as many themes as you like with just a double-click.</h6>
      <br/>

      <div className="side-by-side-containers">
        <div className="container">
          <center>
            <h3>Change it up</h3>
          </center>
          <h6>Switch between themes with just a click. Modify the built-in themes or create your own using Sleeve’s extensive preferences.</h6>
          <img src="https://replay.software/sleeve/images/ThemeUI.png" alt="Theme UI" style={{height: '70px'}} />
        </div>
        <div className="container">
          <center>
            <h3>Shareable</h3>
          </center>
          <h6>Export your themes and share them with friends using the handy new Sleeve Theme file format.

Install themes from anywhere with a double-click or a drag and drop.</h6>
          <img src="https://replay.software/sleeve/images/ThemeExport.png" alt="Theme UI" style={{height: '60px'}}/>
        </div>
      </div>
     <br>
     </br>
     <p className='custom'> 
     <center> CUSTOMIZATION</center>
     </p>
    
      <p>Countless ways to customize.</p>
      <h6>Customization is at the core of the Sleeve experience — choose from any combination of design choices, behaviors and settings to make Sleeve at home on your desktop.</h6>
      <img src="https://replay.software/sleeve/images/IconArrayHotkeys.png" alt="img1" />
      <img src="https://replay.software/sleeve/images/IconArrayWindow.png" alt="Appimg" />
      <img src="https://replay.software/sleeve/images/IconArrayInterface.png" alt="img2" />
      <img src="https://replay.software/sleeve/images/IconArrayTheme.png" alt="img3" />
      <img src="https://replay.software/sleeve/images/IconArrayTrack.png" alt="img4" />
      <img src="https://replay.software/sleeve/images/IconArrayLayout.png" alt="img5" />
      <img src="https://replay.software/sleeve/images/IconArrayPosition.png" alt="img6" />
      <img src="https://replay.software/sleeve/images/IconArrayArtwork.png" alt="img7" />
      <img src="https://replay.software/sleeve/images/IconArraySettings.png" alt="img8" />
      <br/>
      <br/>
      <br>
      </br>
       <div className='artwork'>
      <img src="https://replay.software/sleeve/images/IconArrayArtwork.png" alt="Artwork" style={{height: '80px'}}/>
      <p><center><b>Artwork</b></center></p>
      <br/>
      Scale artwork all the way up or all the way down. Round the corners or leave them square.

       Choose shadow and lighting effects to bring your album artwork to life.

       Or hide it completely
      </div>
      
      <div className='artwork'>
      <img src="https://replay.software/sleeve/images/IconArrayTrack.png" alt="Artwork" style={{height: '80px'}}/>
      <p><center><b>Typography</b></center></p>
      <br/>
      Pick the track info you want to display, and then exactly how to display it.

Choose the fonts, weights, sizes, and transparency to use for each line, along with customizing color and shadow.
      </div>
      <br>
     </br>
     <br/>
     <div className='artwork'>
      <img src="https://replay.software/sleeve/images/IconArrayLayout.png" alt="Artwork" style={{height: '80px'}}/>
     
      <p><center><b>Interface</b></center></p>
      <br/>
      Customize the layout, alignment and position to fit your setup.

Show and hide playback controls. Add a backdrop layer and customize it.
      </div>
      <div className='artwork'>
      <img src="https://replay.software/sleeve/images/IconSettings.png" alt="Artwork" style={{height: '80px'}}/>
     
      <p><center><b>Settings</b></center></p>
      <br/>
      Decide if Sleeve stays out of the way, behind windows, or in front of them — or only when you need to see it.

Show it in the Dock, choose from custom icons, or keep it on the Desktop only.

Set your custom keyboard shortcuts and integrate with the apps you use.
      </div>
      <br/>
      <br/>
      <p className="integrations-text"><center>INTEGRATIONS</center></p>
     <b> <center>Like, Scrobble</center></b>
    </section>
  );
}

export default HeroSection;
