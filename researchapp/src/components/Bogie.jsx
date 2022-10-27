import React,{useState} from "react";
export const Bogie=()=>{
    const [bg,setbg]=useState(["Kaveri","Sarita"])
    const [name,setName]=useState("hello")
    const handleRemove=(item)=>{
        const filtered=bg.filter(elem=> elem !== item);
        setbg(filtered)
    }
    const handleSearch=(e)=>{
    const filtered=bg.filter((item)=>item.includes(e.target.value))
    setbg(filtered)}
    return(
            <div className="sub">

            <div>
                search:<input onChange={handleSearch} type="text" />
            </div>
    <div>   
        Bogie Name:<input className="bginput" type="text" onChange={e=>setName(e.target.value)}/>
        <button onClick={()=> bg.length<5 && setbg([...bg,name])}>Add+</button>
        <button onClick={()=> bg.length<5 && setbg([name,...bg])}>+Add</button>
        

    </div>

            

    <marquee behavior="" direction=""> 

            <img src="Engine/engine.jpg" width={200} alt="" />
            {bg.map(item=>
            <>
            <img src="Engine/bogie.jpg" width={200} alt="" />
            <span className="bgtitle">{item}</span>
            <button className="bgremove" onClick={()=>handleRemove(item)}>D</button>
            </>
            )}
        </marquee>

            
        </div>

    );
}