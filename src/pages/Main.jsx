import { useEffect, useState } from "react";
import { getAllCharacters } from "../apiServices";
import { Filters } from "../components/filters/Filters";
import { CharactersList } from "../components/charactersList/CharactersList";

export function Main() {

    const [characters, setCharacters] = useState();
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [gender, setGender] = useState('');
    const[species, setSpecies] = useState('');
    const [status, setStatus] = useState('');

    

    useEffect(() => {
        const getCharacters = async() => {
            const data = await getAllCharacters({
                name,
                type,
                gender,
                species,
                status
            });
            setCharacters(data.results);
    
        }
        getCharacters();

    },[gender, name, status, type, species]);

    console.log(characters);

    return(
        <div>
            <Filters setName={setName} setGender={setGender} setSpecies={setSpecies} setStatus={setStatus} setType={setType}/>
            <CharactersList characters={characters}/>
            

        </div>
    )
}