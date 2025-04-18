import React from 'react'
import ChromeIcon from '../assets/svgs/chrome.svg?react'
import VsCodeIcon from '../assets/svgs/vscode.svg?react'
import GitHubIcon from '../assets/svgs/github.svg?react'
import LinkedInIcon from '../assets/svgs/linkedin.svg?react';
import { useState } from 'react';
import { useRef } from 'react';
import Window from "./window.jsx";
import "./styles/footer.css"
const Footer = () => {
    const [isGithubOpen, setIsGithubOpen] = useState(false);
  const [isLinkedInOpen, setIsLinkedInOpen] = useState(false);
  const [isChromeOpen, setIsChromeOpen] = useState(false);
  const [isVsCodeOpen, setIsVsCodeOpen] = useState(false);
  return (
    <div>
        <div className="footer">
        <div className="navigation-list">
          <div className="visit-nodes">
            <GitHubIcon
              className="github-icon"
              style={{ height: '60px', padding: '2px 10px' }}
              onClick={() => setIsGithubOpen(true)}
            />



            <LinkedInIcon
              className="linkedin-icon"
              style={{ height: '60px', padding: '2px 10px' }}
              onClick={() => setIsLinkedInOpen(true)}
            />

            <ChromeIcon
              className="chrome-icon"
              style={{ height: '50px', padding: '4px 10px' }}
              onClick={() => setIsChromeOpen(true)}
            />

            <VsCodeIcon
              className="vscode-icon"
              style={{ height: '60px' }}
              onClick={() => setIsVsCodeOpen(true)}
            />


          </div>
        </div>

      </div>

      {isGithubOpen && <Window title="GitHub" setIsOpen={setIsGithubOpen} />}
      {isLinkedInOpen && <Window title="LinkedIn" setIsOpen={setIsLinkedInOpen} />}
      {isChromeOpen && <Window title="Chrome" setIsOpen={setIsChromeOpen} windowType={"Chrome"} />}
      {isVsCodeOpen && <Window title="VS Code" setIsOpen={setIsVsCodeOpen} windowType={'VsCode'} />}


      <div style={{ height: "500px", position: "absolute", top: '0', left: '0', width: '400px' }}>

      </div>
      
    </div>
  )
}

export default Footer
