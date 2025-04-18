import React, { useState, useRef, useEffect } from "react";
import "./styles/footer.css";
import { Editor } from "@monaco-editor/react";
import GoogleLandingPage from "./google";

const Window = ({ setIsOpen , windowType}) => {
  const screenRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [position, setPosition] = useState({ x: 1000, y: 400 }); // Initial position
  const [code, setCode] = useState(`console.log("Hello World")`)
  const [originalSize, setOriginalSize] = useState(true);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX - position.x);
    setStartY(e.clientY - position.y);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const newX = e.clientX - startX;
    const newY = e.clientY - startY;
    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  const maximizeScreen = () => {
    if (screenRef.current) {
      screenRef.current.style.width = "100%";
      screenRef.current.style.height = "100%";
      screenRef.current.style.left = "0px";
      screenRef.current.style.top = "0px";
      screenRef.current.style.zIndex = 5;
      screenRef.current.style.left = "50%";
      screenRef.current.style.top = "50%";
    }
  }

  const restoreScreen = () => {
    if (screenRef.current) {
      screenRef.current.style.width = "50%";
      screenRef.current.style.height = "60%";
      screenRef.current.style.left = `${position.x}px`;
      screenRef.current.style.top = `${position.y}px`;
      screenRef.current.style.zIndex = 3;
    }
  }

  const minimize = () => {
    if (screenRef.current) {
      screenRef.current.style.width = "0%";
      screenRef.current.style.height = "0%";
      screenRef.current.style.left = "50%";
      screenRef.current.style.top = "100%";
      screenRef.current.style.zIndex = 1;
    }
  }

  useEffect(() => {
    console.log(originalSize);
    if (!originalSize){
      maximizeScreen();
    }

   if(originalSize){
    restoreScreen();
    }

  },[originalSize])


  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        console.log(true);
        try {
          eval(code);  // Now latest code value is used
        } catch (err) {
          console.error("Error in code execution:", err);
        }
      }
    };
  
    window.addEventListener("keydown", handleKeyDown);
  
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [code]);   // <-- Correctly works now
  

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        height: `60%`,
        width: `50%`,
        zIndex: 3,
      }}
      className="window"
      onMouseDown={handleMouseDown}
      ref={screenRef}
    >
      <div className="header">
        <div className="minimize" onClick = {() => setOriginalSize(!originalSize)} >🟢</div>
        <div className="maximize">🟡</div>
        <div className="close" onClick={() => setIsOpen(false)}>🔴</div>
      </div>

      <div className="screen">
        {windowType === "VsCode" && <Editor
        marginTop={10}
          height="100%"
          defaultLanguage="javascript"
          defaultValue={code}
          onChange={(value) => setCode(value)}
          theme="vs-dark"
          options={{
            fontSize: 20,
            padding: {
              top: 10,
              bottom: 10,
              left: 5,
            }
          }} />}
          { windowType === "Chrome" && <GoogleLandingPage />}
      </div>
    </div>
  );
};

export default Window;
