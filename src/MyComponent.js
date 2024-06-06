import React from 'react';
import { Link } from 'react-router-dom';

function MyComponent() {
  return (
    <div className="UiForge" style={{ width: '100vw', height: '100vh', position: 'relative', background: 'white' }}>
      {/* Logo Container */}
       <div className="DivLogoContainer" style={{ width: '50%', height: '100%', left: 0, top: 0, position: 'absolute', background: '#003D48' }}>
        <div className="B4e0e33c7a311bd4f6eaa04efc2d42e9SvgFill" style={{ width: '100%', height: '100%', left: 0, top: 0, position: 'absolute' }}>
        <div className="UiForge" style={{ width: 404, height: 123, left: 319.50, top: 500, position: 'absolute', color: 'white', fontSize: 71, fontFamily: 'Bauhaus 93', fontWeight: '400', wordWrap: 'break-word' }}>UI.FORGE</div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="DivMainContainer" style={{ width: 1000, height: 1080, left: 999.50, top: 0, position: 'absolute' }}>
        <div className="Heading3" style={{ width: 400, height: 33, left: 280, top: 303.50, position: 'absolute' }}>
          <div className="Subscribe" style={{ width: 250.61, height: 33, left: 74.89, top: 0, position: 'absolute', textAlign: 'center', color: '#005463', fontSize: 28, fontFamily: 'Public Sans', fontWeight: '400', wordWrap: 'break-word' }}>Subscription</div>
        </div>

        {/* Form Section */}
        <div className="Form" style={{ width: 400, height: 292, left: 280, top: 336.50, position: 'absolute' }}>
          <div className="Input" style={{ width: 400, height: 38, position: 'absolute', top: 76, background: 'white', boxShadow: '0px 1px 2px rgba(8, 44, 64, 0.30)', borderRadius: 2, border: '1px #05758A solid', boxSizing: 'border-box', padding: '0 10px' }}>
            <input type="text" placeholder="Monthly/on demand" style={{ width: 'calc(100% - 20px)', height: '100%', padding: 0, fontSize: 14, color: '#989898', fontFamily: 'Public Sans', fontWeight: 400, border: 'none', outline: 'none' }} />
          </div>
          <div className="Input" style={{ width: 400, height: 38, position: 'absolute', top: 158, background: 'white', borderRadius: 2, border: '1px #A4A4A4 solid', boxSizing: 'border-box', padding: '0 10px' }}>
            <input type="text" placeholder="€19.99" style={{ width: 'calc(100% - 20px)', height: '100%', padding: 0, fontSize: 14, color: '#989898', fontFamily: 'Public Sans', fontWeight: 400, border: 'none', outline: 'none' }} />
          </div>
          <div className="Input" style={{ width: 400, height: 38, position: 'absolute', top: 238.50, background: 'white', borderRadius: 2, border: '1px #A4A4A4 solid', boxSizing: 'border-box', padding: '0 10px' }}>
            <input type="text" placeholder="CATIA V5R17" style={{ width: 'calc(100% - 20px)', height: '100%', padding: 0, fontSize: 14, color: '#989898', fontFamily: 'Public Sans', fontWeight: 400, border: 'none', outline: 'none' }} />
          </div>
          <Link to="/payment">
            <button className="Button" style={{ width: 400, height: 34, position: 'absolute', top: 320, left: 0, background: '#05758A', borderRadius: 20, overflow: 'hidden', border: '1px #05758A solid', color: 'white', fontSize: 14, fontFamily: 'Public Sans', fontWeight: 600 }}>subscribe</button>
          </Link>
          <Link to="/">
            <button className="BackButton" style={{ width: 400, height: 34, position: 'absolute', top: 380, left: 0, background: 'lightgray', borderRadius: 20, overflow: 'hidden', border: '1px lightgray solid', color: 'black', fontSize: 14, fontFamily: 'Public Sans', fontWeight: 600 }}>Back to Home</button>
            </Link>

        </div>
      </div>
    </div>
  );
}

export default MyComponent;
