
import './App.css'
import './Counter'
import Counter from './Counter'
import Batsman from './Batsman'
import Bowlers from './Bowlers'
import Users from './Users'
import { Suspense } from 'react'
import Friends from './Friends'
import Posts from './Posts'

// const fetchUser = fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json())

const fetchFriends = async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

const fetchPosts = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json();
}


function App() {

  const friendsResponse  = fetchFriends();
  // console.log(friendsResponse)

  const postsResponse = fetchPosts();

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

      <Suspense fallback="Loading Posts........">
        <Posts postsResponse={postsResponse}>
          
        </Posts>  

      </Suspense>

      {/* <Suspense fallback="User is loading.........">
        <Users fetchUser={fetchUser}></Users>
      </Suspense>
      <Suspense fallback="Friends are coming soon.......">
        <Friends friendsResponse={friendsResponse}></Friends>
      </Suspense> */}
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
