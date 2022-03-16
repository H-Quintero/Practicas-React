import "./styles/main.scss";

import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SinglePost from "./pages/SinglePost/SinglePost";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
      
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="users" element={<Users />}/>
          <Route path="singlePost/:postId" element={<SinglePost />}/>
        </Routes>      
      </Router>
    </div>
  );
}

export default App;
