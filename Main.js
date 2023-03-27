
import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span id="head2">React Element 🚀</span>

const firstTest = <p>Hello there this is mhy firstTest section that I put into the virtual DOM 🚀 </p>

const title = (
     <h1 id="head"
          className="head"
          tabIndex="1"
     >{elem}
          Namaste React Using element JSX 🚀</h1>
);
const Title = () => (
     <h1 id="head"
          className="head"
          tabIndex="1"
     >
          {elem}
          {firstTest}
          Namaste React Using JSX 🚀</h1>

);

//React Components

//Functional Components
//Component Composition
const HeadingComponenet = () => (

     <div id="container">
          {title}
          <Title />
          <h1 id="head" className="heading">Namaste React Functional Component 🚀</h1>
     </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(head);
root.render(<HeadingComponenet />);



