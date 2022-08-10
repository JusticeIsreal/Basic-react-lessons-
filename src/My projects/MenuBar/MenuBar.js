import React from "react";
import { useRef, useState, useEffect } from "react";

function MenuBar() {
  const [show, setShow] = useState(false);
  const toggleRef = useRef(null);

  const togglerFunc = () => {
    if (!show) {
      toggleRef.current.style.height = "0px";
    } else {
      toggleRef.current.style.height = "auto";
    }
  };
  useEffect(() => {
    togglerFunc();
  }, [show]);

  return (
    <div className="menuBar">
      <h1>Drop down Menu</h1>
      <div className="topbar">
        <h1>@</h1>
        <button onClick={() => setShow(!show)}>menu</button>
      </div>
      <nav className="nav" ref={toggleRef}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>FAQs</li>
        </ul>
      </nav>
      <p>
        this is the way you do a toggle menu feature using react js. iI made
        this for my students.
      </p>
    </div>
  );
}

export default MenuBar;
