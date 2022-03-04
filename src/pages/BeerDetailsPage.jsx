import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";

export default function BeerDetailsPage(){

    const {beerId} = useParams();
    const [beer, setBeer] = useState({});

    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then((response)=>{setBeer(response.data)})
    }, [beerId])

    return(beer._id ?
        <section>
            <Header/>
            <div>
                <img src={beer.image_url} alt="beerImg"/>
                <div>
                    <h1>{beer.name}</h1>
                    <h1>{beer.attenuation_level}</h1>
                </div>
                <div>
                    <h2>{beer.tagline}</h2>
                    <h3><b>{beer.first_brewed}</b></h3>
                </div>
                <p>{beer.description}</p>
                <h3>{beer.contributed_by}</h3>
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