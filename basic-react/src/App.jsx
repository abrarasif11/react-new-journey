import Todo from "../Todo";
import "./App.css";

function App() {
  return (
    <>
      <h1>Let's Begin TAANDOB</h1>

      <Todo learn="C++" isDone={true} />
      <Todo learn="React " isDone={false} />
      <Todo learn="JS" isDone={true} />
      <Person />
      <Student />
    </>
  );
}
function Person() {
  const age = 12;
  const sport = { fav: "football" };
  return (
    <h2>
      MY fav is {sport.fav} with age :{age} years old
    </h2>
  );
}
function Student() {
  const Name = "messi";
  const Club = "miami";
  return (
    <h1>
      Name {Name} is playing {Club} club
    </h1>
  );
}
export default App;
