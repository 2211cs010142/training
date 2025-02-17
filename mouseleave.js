import React ,{useState}from "react";
function App(){
  const[islovered ,setIslovered]=useState(false);
  const handleMouseEnter=()=>{
    setIslovered(true);
  }
  const handleMouseLeave=()=>{
    setIslovered(false);
  };
  return(
    <div>
      <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
      style={{backgroundcolor:"isHovered ?' lightblue' : lightgray , color:isHovered? 'white':'black' " }}>Hover Me</button>
      {islovered && <p>Mouse is over the button!</p>}
     </div>

  )
}
export default App;