import React, {useEffect, useState} from "react";
import axios from "axios";
import "../css/cards.css"
// url: https://gateway.marvel.com:443/v1/public/characters?apikey=802930c0215eb6994186769aa02ae7f4
//Private key: 802930c0215eb6994186769aa02ae7f4
//Public key: b08bfc196ffce6addc13b6a63f3eead9ceeb9287
// ts: 1
// hash: 11826b3f0269252edc8f12e8866824b8   

const Personajes = () => {
    
    const [characters, setCharacters]=useState([])
    const url = "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=802930c0215eb6994186769aa02ae7f4&hash=11826b3f0269252edc8f12e8866824b8";
    

    useEffect(() => {
        axios
        .get(url)
        .then(res => {
            setCharacters(res.data.data.results)
        }).catch(error => console.log(error))
    }, [])

    console.log(characters)


    return (
        <div className="cards container grid">
                {characters.map(per => (
                    <div className="card" key={per.id}>
                        <h3>{per.name}</h3>
                        <img src={`${per.thumbnail.path}.${per.thumbnail.extension}`} className="card-image"></img>
                    </div>
                ))}
        </div>
    )
}

export default Personajes
