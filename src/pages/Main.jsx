import { useEffect, useState } from 'react';
import { getAllCharacters } from '../apiServices';
import { Filters } from '../components/filters/Filters';
import { CharactersList } from '../components/charactersList/CharactersList';
import { Title } from '../components/title/Title';
import { PopUp } from '../components/popUp/PopUp';
import { Error } from '../components/error/Error';
import { Pagination } from '../components/pagination/Pagination';

export function Main() {

  const [characters, setCharacters] = useState();
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [gender, setGender] = useState('');
  const[species, setSpecies] = useState('');
  const [status, setStatus] = useState('');
  const [popUpActive, setPopUpActive] = useState('');
  const [currentPage, setCurrentPage] = useState('1');
  const [allPages, setAllPages] = useState('');
  console.log(popUpActive);
  console.log(currentPage);
    

  useEffect(() => {
    const getCharacters = async() => {
      const data = await getAllCharacters({
        name,
        type,
        gender,
        species,
        status, 
        page: currentPage,
      });
      setCharacters(data.results);
      setAllPages(data.info.pages);
    
    };
    getCharacters();

  },[currentPage, gender, name, status, type, species]);

  console.log(characters);
  console.log(allPages);

  const paginate = page => setCurrentPage(page);

  return(
    <div>
      <Title />
      <Filters setCurrentPage={setCurrentPage} setName={setName} setGender={setGender} 
        setSpecies={setSpecies} setStatus={setStatus} setType={setType}/>
      {
        characters && (
          <>
            <CharactersList setPopUpActive={setPopUpActive} characters={characters}/>
            <Pagination paginate={paginate} currentPage={currentPage} allPages={allPages} 
              setCurrentPage={setCurrentPage}/></>
        )
      }

      {
        !characters && (
          <Error />
        )
      }
      {
        popUpActive && (
          <PopUp id={popUpActive} setPopUpActive={setPopUpActive} allPages={allPages}/>
        )
      }

    </div>
  );
}