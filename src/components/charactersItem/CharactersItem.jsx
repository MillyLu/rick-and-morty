import styles from './index.module.scss';


export function CharactersItem({name, status, gender, id}) {

    return(
        <div key={id} id={id}>
            <h3>{name}</h3>
            <p>{status}</p>
            <p>{gender}</p>

        </div>
    )
}