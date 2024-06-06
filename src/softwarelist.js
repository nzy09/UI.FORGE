import React from 'react';
import { Link } from 'react-router-dom';

function SoftwareList() {
  const softwareByCategory = {
    "3D Design Software": ["CATIA V5R17", "CATIA V5R16", "SOLIDWORKS 3D CAD", "AutoCAD", "Blender"],
    "Office Suites": ["Microsoft Office", "Google Workspace", "LibreOffice", "WPS Office"],
    "Graphic Design Software": ["Adobe Photoshop", "GIMP", "CorelDRAW", "Inkscape", "Sketch"],
    "Video Editing Software": ["Adobe Premiere Pro", "Final Cut Pro", "DaVinci Resolve", "Sony Vegas Pro"],
    "Productivity Tools": ["Trello", "Asana", "Notion", "Evernote", "Microsoft OneNote"],
    
    // Add more categories and software
  };

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
          <div className="Subscribe" style={{ width: 250.61, height: 33, left: 74.89, top: -200, position: 'absolute', textAlign: 'center', color: '#005463', fontSize: 28, fontFamily: 'Public Sans', fontWeight: '400', wordWrap: 'break-word' }}>Software List</div>
        </div>

        {/* Software List Section */}
        <div className="SoftwareList" style={{ width: 600, height: 800, left: 200, top: 200, position: 'absolute' }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {Object.entries(softwareByCategory).map(([category, softwareList], index) => (
              <li key={index} style={{ marginBottom: 20 }}>
                <h2 style={{ color: '#005463', fontSize: 24, fontFamily: 'Public Sans', fontWeight: '400', marginBottom: 10 }}>{category}</h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {softwareList.map((software, index) => (
                    <li key={index} style={{ marginBottom: 5 }}>
                      <Link to={`/software/${software}`} style={{ color: '#005463', fontFamily: 'Public Sans', fontWeight: '400', textDecoration: 'none' }}>{software}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SoftwareList;
