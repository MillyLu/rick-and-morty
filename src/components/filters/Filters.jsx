import styles from './index.module.scss';
import { useState } from 'react';
import { Container } from '../container/Container';

export function Filters({setName, setStatus, setGender, setSpecies, setType}) {

    const[nameFilter, setNameFilter] = useState(false);
    const[statusFilter, setStatusFilter] = useState(false);
    const[speciesFilter, setSpeciesFilter] = useState(false);
    const[typeFilter, setTypeFilter] = useState(false);
    const[genderFilter, setGenderFilter] = useState(false);

    return(
        <Container>
            <section className={styles.filters}>
            <div className={styles.filters_item}>
                <label className={styles.filters_item__label}>Отфильтровать по имени:
                <input  type='checkbox'
                defaultChecked={false}
                onChange={() => {setNameFilter((state) => !state)}}/>
                </label>  
                {
                    nameFilter && (
                        <input className={styles.filters_item__userInput} type='text' onChange={(event) => setName(event.target.value)}/>
                    )
                } 
            </div>
            <div className={styles.filters_item}>
                <label className={styles.filters_item__label}>Отфильтровать по статусу:
                <input type='checkbox'
                defaultChecked={false}
                onChange={() => setStatusFilter((state) => !state)}/>
                </label> 
                {
                    statusFilter && (
                        <input className={styles.filters_item__userInput} type='text' onChange={(event) => setStatus(event.target.value)}/>
                    )
                }   
            </div>
            <div className={styles.filters_item}>
                <label className={styles.filters_item__label}>Отфильтровать по виду:
                <input type='checkbox'
                defaultChecked={false}
                onChange={() => setSpeciesFilter((state) => !state)}/>
                </label>  
                {
                    speciesFilter && (
                        <input type='text' className={styles.filters_item__userInput} onChange={(event) => setSpecies(event.target.value)}/>
                    )
                }  
            </div>
            <div className={styles.filters_item}>
                <label className={styles.filters_item__label}>Отфильтровать по типу:
                <input type='checkbox'
                defaultChecked={false}
                onChange={() => setTypeFilter((state) => !state)}/>
                </label> 
                {
                    typeFilter && (
                        <input type='text' className={styles.filters_item__userInput} onChange={(event) => setType(event.target.value)}/>
                    )
                }   
            </div>
            <div className={styles.filters_item}>
                <label className={styles.filters_item__label}>Отфильтровать по полу:
                <input type='checkbox'
                defaultChecked={false}
                onChange={() => setGenderFilter((state) => !state)}/>
                </label>
                {
                    genderFilter && (
                        <input type='text' className={styles.filters_item__userInput} onChange={(event) => setGender(event.target.value)}/>
                    )
                }    
            </div>

        </section>

        </Container>
      
        
    )
}