import{useState,useEffect} from 'react'
import Loading from './Loading'
const url="https://course-api.com/react-tours-project"
function App() {
 const [data,setData]=useState([])
 const [readMore,setReadMore]=useState(false)
 const [loading,setLoading]=useState(true)
 const removeTours=(id)=>{
  const newTours = data.filter(tour=>tour.id!==id)
  setData(newTours)
 }
 const fetchTour= async ()=>{
  setLoading(true)
  try{
    const response = await fetch(url)
    const tours= await response.json()
    setLoading(false)
    setData(tours)
  }
  catch(e){
    setLoading(false)
    console.log(e);
  }
 }
 useEffect(()=>{
  fetchTour()
 },[])
 if(loading){
  return (
    <main>
      <Loading />
    </main>
  )
 }
 if(data.length ===0){
   return (
     <div>
       <h1 className="no-tour">No Tours</h1>
       <button className="response" onClick={()=>{fetchTour()}}>Refresh</button>
     </div>
   )
 }
 
  return (
  <div className="wrapper">
    <div className="title">
    <h1>Our Tours</h1>
    <div className="underline"></div>
    </div>
    {
      data.map(tour=>{
        const {id,name,info,image,price} = tour
       return(
         <article key={id}>
           <img src={image} alt='Tour'/>
          <div className="desc">
          <div className="tour">
          <h4>{name}</h4>
           <h4 className="tour-price">${price}</h4>
          </div>
          <p>
            {readMore?info: `${info.substring(0,200)}...`}
            <button className="btn-more" onClick={()=>setReadMore(!readMore)}>
              {readMore ? 'Show Less':'Read More'}
            </button>
          </p>
          <button className="response" onClick={()=>{removeTours(id)}}>No Interested</button>
          </div>
         </article>
       )
      })
      
    }
    </div>)
}

export default App;
