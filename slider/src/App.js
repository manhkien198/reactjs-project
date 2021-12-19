import {useState,useEffect} from 'react'
import data from './data'
function App() {
  const [people,setPeople] = useState(data)
  const [index,setIndex] = useState(0)
  useEffect(() => {
    const lastIndex= people.length - 1
    if(index<0){
      setIndex(lastIndex)
    }
    if(index>lastIndex){
      setIndex(0)
    }
  },[index,people])
  useEffect(() => {
    const slider = setInterval(() =>{
      setIndex(index+1)
    },5000)
    return ()=>{
      clearInterval(slider)
    }
  },[index])
  return (
  <section>
   <div className="title">
   <h2>
      <span>/</span> Reviews
    </h2>
   </div>
    <div className="section-center">
    {people.map((person, personIndex)=>{
      const {id,image,name,title,quote} = person
      let position = 'nextSlide'
      if(personIndex===index){
        position = 'activeSlide'
      }
      if(personIndex===index-1||(index===0 && personIndex===people.length-1)){
        position='lastSlide'
      }
      return(
        <article key={id} className={position}>
          <img src={image} alt={name}/>
          <h4>{name}</h4>
          <p>{title}</p>
          <p className="quote">{quote}</p>
          <i className="icon fas fa-quote-right"></i>
        </article>
      )
    })}
    <button className="prev" onClick={()=>setIndex(index-1)}><i className="fas fa-chevron-left"></i></button>
    <button className="next" onClick={()=>setIndex(index+1)}><i className="fas fa-chevron-right"></i></button>

    </div>
  </section>
  );
}

export default App;
