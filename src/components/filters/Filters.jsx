import styles from './index.module.scss';
import { useState } from 'react';
import { Container } from '../container/Container';

export function Filters({setName, setStatus, setGender, setSpecies, setType, setCurrentPage}) {

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
            <input  type="checkbox"
              defaultChecked={false}
              onChange={() => {if(nameFilter) {setNameFilter(false); setName('');} 
              else {setNameFilter(true); setCurrentPage(1);}}}/>
          </label>  
          {
            nameFilter && (
              <input className={styles.filters_item__userInput} type="text" 
                onChange={(event) => setName(event.target.value)}/>
            )
          } 
        </div>
        <div className={styles.filters_item}>
          <label className={styles.filters_item__label}>Отфильтровать по статусу:
            <input type="checkbox"
              defaultChecked={false}
              onChange={() =>  {if(statusFilter) {setStatusFilter(false); setStatus('');} 
              else {setStatusFilter(true); setCurrentPage(1);}}} />
          </label> 
          {
            statusFilter && (
              <select onChange={(event) => setStatus(event.target.value)} className={styles.filters_item__userInput}>
                <option selected value=""></option>
                <option value="Alive">Alive</option>
                <option value="Dead">Dead</option>
                <option  value="unknown">unknown</option>
              </select>
                   
            )
          }   
        </div>
        <div className={styles.filters_item}>
          <label className={styles.filters_item__label}>Отфильтровать по виду:
            <input type="checkbox"
              defaultChecked={false}
              onChange={() =>  {if(speciesFilter) {setSpeciesFilter(false); setSpecies('');} 
              else {setSpeciesFilter(true); setCurrentPage(1);}}}/>
          </label>  
          {
            speciesFilter && (
              <input type="text" className={styles.filters_item__userInput}
                onChange={(event) => setSpecies(event.target.value)}/>
            )
          }  
        </div>
        <div className={styles.filters_item}>
          <label className={styles.filters_item__label}>Отфильтровать по типу:
            <input type="checkbox"
              defaultChecked={false}
              onChange={() =>  {if(typeFilter) {setTypeFilter(false); setType('');} 
              else {setTypeFilter(true); setCurrentPage(1);}}}/>
          </label> 
          {
            typeFilter && (
              <input type="text" className={styles.filters_item__userInput}
                onChange={(event) => setType(event.target.value)}/>
            )
          }   
        </div>
        <div className={styles.filters_item}>
          <label className={styles.filters_item__label}>Отфильтровать по полу:
            <input type="checkbox"
              defaultChecked={false}
              onChange={() =>  {if(genderFilter) {setGenderFilter(false); setGender('');}
              else {setGenderFilter(true); setCurrentPage(1);}}}/>
          </label>
          {
            genderFilter && (
              <select onChange={(event) => setGender(event.target.value)} className={styles.filters_item__userInput}>
                <option selected value=""></option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option  value="Genderless">Genderless</option>
                <option  value="unknown">unknown</option>
              </select>
            )
          }    
        </div>

      </section>

    </Container>
      
        
  );
}