import data from './data'
import {useState,useRef,useEffect} from 'react'
import List from './List'
import Popup from 'reactjs-popup'
function App() {
  const [people,setPeople]= useState(data)
 
  return (
   <main>
     <section>
       <h3>{people.length} birthdays today</h3>
       <List people={people}/>
       <Popup modal trigger={<button>Add</button>}>
        <div className="popup" style={{backgroundColor:'#ccc',padding:20,display:'flex',flexDirection:'column'}}>
          <input id="name" placeholder="Name"/>
          <input id="age"  placeholder="Age"/>
          <input id="image"  placeholder="Image link"/>
          <button onClick={()=>{
            const name = document.getElementById('name').value;
            const age = document.getElementById('age').value;
            const image = document.getElementById('image').value
            const id = people.length+1
            const newPeople=[...people,{id:id,
              name:name,
              age:age,
              image:image
            }]
            setPeople(newPeople)

            
             
          }}>Submit</button>
          
        </div>
      </Popup>
      
       <button onClick={()=>setPeople([])}>Clear all</button>
     </section>
   </main>
  );
}

export default App;
