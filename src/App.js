import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Link to="/">TOME PHONE</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product:slug" element={<ProductPage/>}/>
            <Route path="/" element={<HomePage/>}/>
          </Routes>         
        </main >
      </div >
    </BrowserRouter>
  );
}

export default App;
