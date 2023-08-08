import styles from './index.module.scss';


export function CharactersItem({name, status, gender, id, setPopUpActive}) {

    return(
        <div className={styles.character} key={id} id={id} onClick={() => setPopUpActive(id)}>
            <h3 className={styles.character_name}>{name}</h3>
            <p className={styles.character_status}>Статус: {status}</p>
            <p className={styles.character_gender}>{gender}</p>

        </div>
    )
}