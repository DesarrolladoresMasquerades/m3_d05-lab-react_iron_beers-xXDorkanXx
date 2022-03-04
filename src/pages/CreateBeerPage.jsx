import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateBeerPage() {

  const [formData, setFormData] = useState({
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: 0,
      contributed_by: ""
  });
  

  const navigate = useNavigate();

  function handleDataChange(event){
    const key = event.target.name;
    const value = event.target.value;

    setFormData(formData=> ({...formData, [key]: value}))
    console.log(formData)
  }

  function handleSubmit(event){
    event.preventDefault();

    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", formData)
    .then((response)=>{navigate("/beers")})
    .catch((error)=>{navigate("/new-beer");
    })
  }

  return (
    <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleDataChange} />

        <label>Tagline</label>
        <input type="text" name="tagline" value={formData.tagline} onChange={handleDataChange} />

        <label>Description</label>
        <input type="text" name="description" value={formData.description} onChange={handleDataChange} />

        <label>First_brewed</label>
        <input type="text" name="first_brewed" value={formData.first_brewed} onChange={handleDataChange} />

        <label>Brewers_tips</label>
        <input type="text" name="brewers_tips" value={formData.brewers_tips} onChange={handleDataChange} />

        <label>Attenuation_level</label>
        <input type="number" name="attenuation_level" value={formData.attenuation_level} onChange={handleDataChange} />

        <label>Contributed_by</label>
        <input type="text" name="contributed_by" value={formData.contributed_by} onChange={handleDataChange} />

        <button type="submit">ADD NEW</button>
    </form>
  );
}