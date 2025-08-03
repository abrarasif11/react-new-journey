import { useState } from "react";
import "./App.css";
import Blogs from "./Component/Blogs/Blogs";
import Bookmarks from "./Component/Bookmark/Bookmarks";
import Header from "./Component/Header/Header";

function App() {
  const [bookMarks, setBookmarks] = useState([]);
  const [readingTime, setreadingTime] = useState(0)

  const handleBookMark = (blog) => {
  const newBookmark = [...bookMarks, blog]
  setBookmarks(newBookmark);
  };

  const handleMarkasRead = (id,time) => {
    const newReadingTime = readingTime + time;
    setreadingTime(newReadingTime);
    // console.log('remove bookmark',id)
    const remainingBookmarks = bookMarks.filter(bookMark => bookMark.id !== id);
    setBookmarks(remainingBookmarks); 
  }
  return (
    <>
      <Header />
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs handleBookMark={handleBookMark}
        handleMarkasRead={handleMarkasRead}
        />
        <Bookmarks bookMarks={bookMarks} readingTime={readingTime} />
      </div>
    </>
  );
}

export default App;
