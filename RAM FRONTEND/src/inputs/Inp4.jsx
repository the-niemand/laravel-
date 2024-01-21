import React from 'react'
import { next, add } from './reducer'
import { useDispatch } from 'react-redux';

const Inp4 = () => {
     const dispatch = useDispatch()
     const bio = (e) => {
          dispatch(add('bio', e.target.value));
     };
     const hourly_rate = (e) => {
          dispatch(add('hourly_rate', e.target.value));
     };


     const elms = (
          <div>
               <label htmlFor="bio">Bio:</label>
               <textarea id="bio" name="bio" onChange={bio}></textarea><br /><br />

               <label htmlFor="hourlyRate">Hourly Rate:</label>
               <input type="number" id="hourlyRate" name="hourlyRate" onChange={hourly_rate}/><br /><br />

               <button onClick={() => { dispatch(next()) }} >next</button>
          </div>
     );

     return elms;
}


export default Inp4