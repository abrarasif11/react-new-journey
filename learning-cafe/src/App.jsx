import { useState } from "react";
import "./App.css";
import Blogs from "./Component/Blogs/Blogs";
import Bookmarks from "./Component/Bookmark/Bookmarks";
import Header from "./Component/Header/Header";

function App() {
  const [bookMarks, setBookmarks] = useState([]);
  const handleBookMark = (blog) => {
  const newBookmark = [...bookMarks, blog]
  setBookmarks(newBookmark);
  };
  return (
    <>
      <Header />
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs handleBookMark={handleBookMark} />
        <Bookmarks bookMarks={bookMarks} />
      </div>
    </>
  );
}

export default App;
