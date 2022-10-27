    import React,{useState} from 'react';

    export const Dish = () => {
        const [name,setName]= useState(" Daal Roti")
        const [data,setData]=useState(["chaomin","chattu ki tahari","dal makhani","pizza"])
        return (
            <div className='sub'>
                <h1>{name}</h1>
                abcd <input type="text" className="bginput"  onChange={e=>setName(e.target.value)}/>
                <button onClick={()=> setData(...data,name)}>+add</button>
                
                
                  {  data.map((item)=>(
                    <button onClick={()=>setName(item)}>{item}</button>
                        
                    ) )
                }
                {<div>
                </div> }
            </div>

                
            
            );
    };

