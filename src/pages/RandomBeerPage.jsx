import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../components/Header";

export default function RandomBeerPage(){
    const [randomBeer, setRandomBeer] = useState({});

    useEffect(()=>{
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
        .then((response)=>{setRandomBeer(response.data)})
    }, [])

    return(randomBeer._id ?
        <section>
            <Header/>
            <div>
                <img src={randomBeer.image_url} alt="randomBeerImg"/>
                <div>
                    <h1>{randomBeer.name}</h1>
                    <h1>{randomBeer.attenuation_level}</h1>
                </div>
                <div>
                    <h2>{randomBeer.tagline}</h2>
                    <h3><b>{randomBeer.first_brewed}</b></h3>
                </div>
                <p>{randomBeer.description}</p>
                <h3>{randomBeer.contributed_by}</h3>
            </div>
        </section>
        :
        <section>
            <Header/>
            <img src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif" alt="loading-img" width={300}/>
            <p>Loading...</p>
        </section>
    )
}