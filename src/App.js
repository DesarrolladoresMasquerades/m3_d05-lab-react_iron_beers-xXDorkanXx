import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BeersListPage from "./pages/BeersListPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import CreateBeerPage from "./pages/CreateBeerPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/beers/:beerId" element={<BeerDetailsPage/>}/>
        <Route exact path="/random-beer" element={<RandomBeerPage/>}/>
        <Route exact path="/new-beer" element={<CreateBeerPage/>}/>
        <Route exact path="/beers" element={<BeersListPage/>}/>
        <Route exact path="/" element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
