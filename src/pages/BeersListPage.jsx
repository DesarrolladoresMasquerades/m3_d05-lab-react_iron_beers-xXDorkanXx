import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Header";

export default function BeersListPage(){

    const [beers, setBeers] = useState([]);

    useEffect(()=>{
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then((response)=>{setBeers(response.data)})
    }, [])

    return(beers.length ?
        <section>
            <Header/>
            {beers.map((beer)=>{
                return(
                    <Link key={beer._id} to={"/beers/" + beer._id}>
                        <div>
                            <img src={beer.image_url} alt="beerImg"/>
                            <div>
                                <h1>{beer.name}</h1>
                                <h2>{beer.tagline}</h2>
                                <p><b>Created by:</b>{beer.contributed_by}</p>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </section>
        :
        <section>
            <Header/>
            <img src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif" alt="loading-img" width={300}/>
            <p>Loading...</p>
        </section>
    )
}