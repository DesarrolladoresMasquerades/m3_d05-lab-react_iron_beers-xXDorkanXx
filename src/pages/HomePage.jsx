import { Link } from "react-router-dom";

export default function HomePage(){
    return(
        <div>
            <Link to="/beers">
                <img src="./assets/beers.png" alt="beers"/>
            </Link>
            <h1>All Beers</h1>
            <p>Some text here...</p>
            <Link to="/random-beer">
                <img src="./assets/random-beer.png" alt="random-beer"/>
            </Link>
            <h1>Random Beer</h1>
            <p>Some text here...</p>
            <Link to="/new-beer">
                <img src="./assets/new-beer.png" alt="new-beer"/>
            </Link>
            <h1>New Beer</h1>
            <p>Some text here...</p>
        </div>
    )
}