
import './App.css'
import './Counter'
import Counter from './Counter'
import Batsman from './Batsman'
import Bowlers from './Bowlers'

function App() {

  function handleClick(){
    alert("Button Clicked")
  }

  const handleClick3 =()=> 
  {
    alert("Click through Arrow Function")
  }

  const handleAdd = (number)=>{
    number = number+5;
    alert(number);
  }

  return (
    <>
      
      <h1>Vite + React</h1>
      <Bowlers></Bowlers>
      <Batsman></Batsman>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={function handleClick2(){alert("Click 2")}}>Click Me2</button>
      <button onClick={handleClick3}>Click3 </button>
      <button onClick={()=>handleAdd(10)}>Add Number</button>
    </>
  )
}

export default App
