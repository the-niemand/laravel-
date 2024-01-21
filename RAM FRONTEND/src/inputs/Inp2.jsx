import React from 'react'
import { next, add } from './reducer'
import { useDispatch } from 'react-redux';
import styles from  '../css/inp2.module.css';

import google from '../imgs/search.png'
import fcb from '../imgs/facebook.png'
import x from '../imgs/twitter.png'

const Inp2 = () => {
     const dispatch = useDispatch()
     const first_name = (e) => {
          dispatch(add('first_name', e.target.value));
     };
     const last_name = (e) => {
          dispatch(add('last_name', e.target.value));
     };
     const email = (e) => {
          dispatch(add('email', e.target.value));
     };
     const password = (e) => {
          dispatch(add('password', e.target.value));
     };
     const country = (e) => {
          dispatch(add('country_id', e.target.value));
     };

     const elms = (
          <div className={styles.ctn}>
               <h1>SIGN UP</h1>
               <div className={styles.fname}>
                    <input className={styles.input1} type="text" id="firstName" name="firstName" required onChange={first_name} placeholder='First Name' />
                    <input className={styles.input1} type="text" id="lastName" name="lastName" required onChange={last_name} placeholder='Last Name' />
               </div>
               <div className={styles.other}>
                    <input className={styles.input1} type="email" id="email" name="email" required onChange={email} placeholder='Email' />
                    <input className={styles.input1} type="password" id="password" name="password" required onChange={password} placeholder='Password' />
                    <input className={styles.input1} type="text" id="country" name="country" onChange={country} placeholder='Country' />
                    <div className={styles.check}>
                         <div className={styles.c_div} id='first'>
                              <input className={styles.input1} type="checkbox" name="first" />
                              <label className={styles.label} for="first">Envoyez-moi des e-mails utiles pour trouver un travail et des pistes d'emploi enrichissants.</label>
                         </div>
                         <div className={styles.c_div}>
                              <input className={styles.input1} type="checkbox" name="second" />
                              <label  className={styles.label} for="second">Oui, je comprends et j'accepte les conditions d'utilisation d'Upwork, y compris les termes de l'accord d'utilisation et de <a>la politique de confidentialité.</a></label>
                         </div>
                    </div>
               </div>

               <button onClick={() => { dispatch(next()) }} >créer mon compte</button>
               <div className={styles.or}>
                    <hr />
                    <p>or</p>
                    <hr />
               </div>
               <div className={styles.otr}>
                    <div className={styles.google}>
                         <img src={google} alt="" />
                         <p>Sign up with Google</p>
                    </div>
                    <div className={styles.facebook}>
                         <img src={fcb} alt="" />
                         <p>Sign up with Facebook</p>
                    </div>
                    <div className={styles.x}>
                         <img src={x} alt="" />
                         <p>Sign up with X</p>
                    </div>
               </div>
               <p>Vous avez déjà un compte ? <a href="#" className={styles.link}>Log in</a></p>
          </div>
     );

     return elms;
}


export default Inp2