import styles from './index.module.scss';
import { CharactersItem } from '../charactersItem/CharactersItem';

export function CharactersList({characters}) {

    return (
        <div>
            {characters && characters.map((character) => (
                <CharactersItem name={character.name} status={character.status} gender={character.gender} id={character.id}/>
            ))}
        </div>
    )
}