import './App.css'
import Counter from './Counter';
import Post from './post';
import Team from './Team';
import Users from './Users';

function App() {
// function handleClick(){

//   alert("Thanks for Clicking")
// }
const handleClick = () =>{
  alert('Frank You');
}
//tricky
const counting = (num) =>{
  alert(num / 2);

}
  return (
    <>
     <h2>beginer react</h2>
     <Post/>
     <Users/>
     <Team/>
     <Counter/>

     <button onClick={() => counting(90)}>Click Here</button>
     <button onClick={handleClick}>click me</button>
    </>
  )
}

export default App
