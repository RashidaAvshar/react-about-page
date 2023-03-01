import { Route, Routes } from "react-router-dom"
import Header from "./components/Header.jsx";
// ? ===========PAGES==============
import Form from "./pages/Form.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
// ?===============================

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/form" element={<Form/>}/>
      </Routes>
      

    </div>
  );
}

export default App;
