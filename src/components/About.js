import React from "react";


function About({image,about}) {
   
    return(
        <div>
            <aside>
                <img src={image || "https://via.placeholder.com/215"} 
                     alt="blog logo">   
                </img>
                <p>{about}</p>
            </aside>
        </div>
)}

export default About