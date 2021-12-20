import {useState} from 'react' 
import data from './data'

function App() {
  const [count,setCount] = useState(0)
  const [text,setText] = useState([])
  const handleSubmit=(e) => {
    e.preventDefault()
    let amount = parseInt(count)
    if(count <= 0){
      amount=1
    }
    if(count>8){
      amount =8
    }
    setText(data.slice(0,amount))
  }
  return (
    <section>
      <h3>tired of boring lorem ipsum ?</h3>
      <form onSubmit={handleSubmit}>
        <label>paragraphs : </label>
        <input
        type="number"
        value={count}
        onChange={(e)=>setCount(e.target.value)}
        />
        <button>generate</button>
      </form>
      <article>
        {text.map((item,index)=>{
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  );
}

export default App;
