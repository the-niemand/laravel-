import React, { useState, useEffect } from 'react'
import { next, add } from './reducer'
import { useDispatch, useSelector } from 'react-redux';
import styles from '../css/inp3.module.css'

const Inp3 = () => {
     const [professionalRole, setprofessionalRole] = useState('Basic');
     const dispatch = useDispatch()
     const client = useSelector((state) => state.client);

     const role = (e) => {
          dispatch(add('role', e.target.value));
     };
     const language = (e) => {
          dispatch(add('language', e.target.value));
     };
     const language_proficiency = (e) => {
          dispatch(add('language_proficiency', e.target.value));
          setprofessionalRole(e.target.value)
     };
     const Experience = (e) => {
          dispatch(add('Experience', e.target.value));
     };
     const Skills = (e) => {
          dispatch(add('Skills', e.target.value));
     };
     useEffect(() => {
          dispatch(add('language_proficiency', professionalRole));
     }, [professionalRole, dispatch]);

     const elms = (
          <div className={styles.ctn2}>
               <p>salut <span>{client.first_name} {client.last_name} </span>, prêt pour ton voyage indépendant </p>
               <div className={styles.role}>
                    <label htmlFor="professionalRole">Professional Role:</label>
                    <input className={styles.input2} type="text" id="professionalRole" name="professionalRole" onChange={role} />

               </div>
               <div className={styles.Languages}>
                    <div className={styles.L}>
                         <label htmlFor="languageType">Language Proficiency:</label>
                         <input className={styles.input2} type="text" id="languages" name="languages" onChange={language} />
                    </div>
                    <div className={styles.LP}>
                         <select id="languageProficiency" name="languageProficiency" className={styles.input2} onChange={language_proficiency} value={professionalRole}>
                              <option value="basic">Basic</option>
                              <option value="intermediate">Intermediate</option>
                              <option value="advanced">Advanced</option>
                              <option value="fluent">Fluent</option>
                         </select>
                    </div>

               </div>

               <div className={styles.Exp}>

                    <label htmlFor="experience">Experience:</label>
                    <input className={styles.input2} type="text" id="experience" name="experience" onChange={Experience} />

               </div>

               <div className={styles.skills}>
                    <label htmlFor="skills">Skills:</label>
                    <input className={styles.input2} type="text" id="skills" name="skills" onChange={Skills} />

               </div>

               <div className={styles.btn}>
                    <button onClick={() => { dispatch(next()) }} >next</button>
               </div>
          </div>
     );

     return elms;
}


export default Inp3