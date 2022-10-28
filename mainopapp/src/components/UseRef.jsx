 import { Button } from "@mui/material"

 import React, { useRef, useState } from "react"
 // import {Grid} from "@mui/icons-material"

 export const UseRef=()=>{
     const[playing,setPlaying]=useState(false)
     const in1=useRef()

     // const handleStart=()=>{
     //     in1.current.play()
     // }
     // const handlePause=()=>{
     //     in1.current.pause()
     // }
     const handlePlay=()=>{
         if(playing){
             in1.current.pause()
             setPlaying(false)
         }else{
             in1.current.play()
             setPlaying(true)
         }
     }


     return(
         <div>
             <h1 className="h11" >attuboss47</h1>
            <video  src="./videos/kesariya.mp4" width={250} onClick={handlePlay} height={350} ref={in1}/>
             {/* <video  src="./videos/295.mp4" width={250} onClick={handlePlay} height={350} ref={in1}/> */}
             {/* <video  src="./videos/ninjahattori.mp4" width={350} height={350} ref={in1}/> */}
             {/* <video  src="./videos/ninjahattori.mp4" width={350} height={350} ref={in1}/> */}
             {/* <video  src="./videos/ninjahattori.mp4" width={350} height={350} ref={in1}/> */}
             {/* <br />
             <Button variant="contained" onClick={handleStart}>start</Button>
             <Button variant="contained"  onClick={handlePause}>pause</Button> */}
             {/* <button>Start</button>
            <button onClick={handlePause}>Pause</button> */}
            {/* <input type="range"  /> */}         </div>
    )
}