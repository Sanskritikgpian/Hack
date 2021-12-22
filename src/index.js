import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app"

const divstyle={
  
  backgroundImage: 'url("https://media.istockphoto.com/photos/award-sparkling-background-picture-id1220754002?b=1&k=20&m=1220754002&s=170667a&w=0&h=pV5JKXJ7DmdJM8i662txIBFdG2pYrr-my4HlXqPFPNU=")',
  height:"100%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
}
ReactDOM.render(
    <div classname="main" style={divstyle}>
      <h1 className="heading">Events</h1>
      <img id="quote1" src="https://www.azquotes.com/picture-quotes/quote-when-i-was-a-teenager-i-began-to-settle-into-school-because-i-d-discovered-the-extracurricular-morgan-freeman-10-24-55.jpg" alt="quote" />
      <img id="quote2" src="https://www.azquotes.com/picture-quotes/quote-the-extra-curricular-activity-in-which-i-was-most-engaged-debating-helped-shape-my-interests-joseph-stiglitz-87-22-09.jpg" alt="quote" />
      <App />
      
    </div>,
  document.getElementById("root")
);