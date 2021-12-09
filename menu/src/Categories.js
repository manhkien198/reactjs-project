import React from 'react';
const Categories=({categories,filterItems})=>{
    return(
        <div className="btn-container">
            {categories.map((category,index)=>{
               return(
                <button 
                type="button" 
                className="btn-filter" 
                key={index}
                onClick={()=>filterItems(category)}>
                    {category}
                    </button>
               )
            })}
        
    </div>
    )
}

export default Categories