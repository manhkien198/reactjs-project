import React from "react"
const Menu=({items}) =>{
   return(
    <div className="section-center">
    {items.map(menuItems=>{
        const {id,title,category,price,img,desc}=menuItems
        return(
            <article key={id}>
                <img src={img} alt={title}/>
                <div className="info">
                    <header>
                        <h4>{title}</h4>
                        <h4 className="price">${price}</h4>
                    </header>
                    <p>{desc}</p>
                </div>
            </article>
        )
    })}
</div>
   )
}


export default Menu