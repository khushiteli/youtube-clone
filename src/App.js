import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Feed, ChannelDetail, Navbar, SearchFeed, VideoDetails} from './components';

function App() {
  return (
    <>
     <BrowserRouter>
      <div className="bg-[#000] text-[#fff]">
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Feed/>} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed/>} />
          <Route path="/video/:id" element={<VideoDetails/>} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;