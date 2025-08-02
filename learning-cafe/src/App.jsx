import "./App.css";
import Blogs from "./Component/Blogs/Blogs";
import Bookmarks from "./Component/Bookmark/Bookmarks";
import Header from "./Component/Header/Header";

function App() {
  return (
    <>
      <Header />
      <div className="md:flex max-w-7xl mx-auto">
      <Blogs/>
      <Bookmarks/>
      </div>
    </>
  );
}

export default App;
