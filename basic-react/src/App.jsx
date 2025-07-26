import Actor from "../Actor";
import Todo from "../Todo";
import "./App.css";
import Book from "./Book";
import Singer from "./Singer";

function App() {
  const actors = ["Shakib", "Nisho", "Siam", "Raaj"];
  const singers = [
    { name: "sefu", age: 87 },
    { name: "Cfu", age: 27 },
    { name: "efu", age: 17 },
    { name: "pritom", age: 27 },
  ];
  const books = [
    {
      name:'physics', price: 100
    },
    {
      name:'Math', price: 180
    },
    {
      name:'Bangla', price: 50
    },
  ]
  return (
    <> 
     {
      books.map((book) =>(
        <Book book={book}/>
      ))
     }


      {singers.map((singer) => (
        <Singer singer={singer} />
      ))}

      <h1>Actor of BD </h1>
      <Actor name={"jayed"} />
      {actors.map((actor) => (
        <Actor name={actor} />
      ))}
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
