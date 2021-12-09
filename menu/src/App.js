import {useState} from 'react' 
import items from './data'
import Menu from './Menu'
import Categories from './Categories'
const allCategories =['all',... new Set(items.map(item =>item.category))]
function App() {
  const [menuItems,setMenuItems] = useState(items)
  const [categories,setCategories] = useState(allCategories)
  const filterItems=(category)=>{
    if(category === 'all'){
      setMenuItems(items);
      return;
    }
    const newItem = items.filter(item => item.category === category)
    setMenuItems(newItem)
  }
  return (
    <main>
      <section>
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu items={menuItems}/>
      </section>
    </main>
    
  );
}

export default App;
