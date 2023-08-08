import styles from './index.module.scss';
import { getCharacterById } from '../../apiServices';
import { useEffect, useState } from 'react';


export function PopUp({id, setPopUpActive}) {

  const [characterInfo, setCharacterInfo] = useState([]);

  console.log(characterInfo);


  useEffect(() => {
    const fetchCharacterById = async() => {
      console.log(id.id);
      const data = await getCharacterById(id);
      setCharacterInfo(data);
    };
    fetchCharacterById();
  }, [id]);

  return(
    <section className={styles.modal} onClick={() => setPopUpActive(false)}>
      <div className={styles.modal_content}>
        <div className={styles.content_image}>
          <img className={styles.content_image__avatar} alt="avatar" src={characterInfo.image}/>
        </div>
        <div className={styles.content_text}>
          <h3 className={styles.content_text__name}>{characterInfo.name}</h3>
          <p className={styles.content_text__status}>Статус: 
            <span className={styles.content_text__all}>{characterInfo.status}</span></p>
          <p className={styles.content_text__all}>{characterInfo.type}</p>
          <p className={styles.content_text__all}>{characterInfo.gender}</p>
          <p className={styles.content_text__all}>{characterInfo.species}</p>
          <p className={styles.content_text__status}>Локация: 
            <span className={styles.content_text__all}>{characterInfo.location?.name}</span></p>
        </div>
      </div>
    </section>
  );

}