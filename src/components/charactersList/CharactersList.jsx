import styles from './index.module.scss';
import { CharactersItem } from '../charactersItem/CharactersItem';
import { Container } from '../container/Container';

export function CharactersList({characters, setPopUpActive}) {

  return (
    <Container>
      <div className={styles.list}>
        {characters && characters.map((character) => (
          <CharactersItem setPopUpActive={setPopUpActive}  name={character.name} 
            status={character.status} gender={character.gender} id={character.id}/>
        ))}
      </div>

    </Container>
        
  );
}