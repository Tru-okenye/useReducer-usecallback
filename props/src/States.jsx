// import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";

// function My_name() {
//   const [name, setName] = useState("stacy");
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//   });

//   return (
//     <>
//       <h1>My name is {name}?</h1>
//       <h1>I've said my name {count} times!</h1>
//       Click this button to find out:
//       <button
//         type="button"
//         onClick={() => setName("Kerubo")}
//       >Name</button>
    
//     </>
    
//   )
// }

// export default My_name






import React, { useState } from "react";
import { useGlobalContext } from "./context";


function students() {
 
  const { person} = useGlobalContext()
 
    return (
      <>
        <h1>hey {person} </h1>
        
      </>
    );
  }

export default students;


