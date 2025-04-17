import React from "react";
import { name, city } from "../data/data.js";
const name ="lynn";
const city ="new york"

function Home() {
  // update the JSX being returned!
  return(
<div id="home">
  <h1 style={{color:'firebrick'}}>{name} is a web developer from new york {city}</h1>

</div>
  );
}

export default Home;
