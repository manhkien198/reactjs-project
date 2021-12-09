import React,{useState} from 'react'
const Question=({title,info})=>{
    const [showInfo,setShowInfo]=useState(false)
    return(
        <article>
         <header>   
             <h4>{title}</h4>
            <button onClick={()=>setShowInfo(!showInfo)}>
                {showInfo ? <i class="fas fa-minus"></i>  : <i class="fas fa-plus"></i>}
            </button>
            </header>
            {showInfo && <p>{info}</p>}
        </article>
    )
}
export default Question