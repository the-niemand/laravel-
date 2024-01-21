import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { next, add } from './reducer';

const Inp5 = () => {
  const dispatch = useDispatch();
  const client = useSelector((state) => state.client);
  const imageData = useSelector((state) => state.imageData);

  const [userType, setUserType] = useState('freelancer'); // Default value 'freelancer'

  const handleChange = (e) => {
    setUserType(e.target.value);
  };

  useEffect(() => {
    // Dispatch the default value on component mount or change
    dispatch(add('type', userType));
  }, [userType, dispatch]);



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

  const elms2 = (
    <div>
      <label htmlFor="firstName">First Name:</label>
      <input type="text" id="firstName" name="firstName" required onChange={first_name} value={client.first_name} disabled /><br /><br />

      <label htmlFor="lastName">Last Name:</label>
      <input type="text" id="lastName" name="lastName" required onChange={last_name} value={client.last_name} disabled /><br /><br />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required onChange={email} value={client.email} disabled /><br /><br />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" required onChange={password} value={client.password} disabled /><br /><br />

      <label htmlFor="country">Country:</label>
      <input type="text" id="country" name="country" onChange={country} value={client.country_id} disabled /><br /><br />


    </div>)
  const [professionalRole, setprofessionalRole] = useState('Basic');

  const role = (e) => {
    dispatch(add('role', e.target.value));
  };
  const language = (e) => {
    dispatch(add('language', e.target.value));
  };
  const language_proficiency = (e) => {
    dispatch(add('language_proficiency', e.target.value));
  };
  const Experience = (e) => {
    dispatch(add('Experience', e.target.value));
  };
  const Skills = (e) => {
    dispatch(add('Skills', e.target.value));
  };
  useEffect(() => {
    dispatch(add('language_proficiency', client.language_proficiency));
  }, [client.language_proficiency, dispatch]);

  const elms3 = (
    <div>
      <label htmlFor="professionalRole">Professional Role:</label>
      <input type="text" id="professionalRole" name="professionalRole" onChange={role} value={client.role} disabled /><br /><br />

      <label htmlFor="languages">Languages:</label>
      <input type="text" id="languages" name="languages" onChange={language} value={client.language} disabled /><br /><br />

      <label htmlFor="languageType">Language Proficiency:</label>
      <select id="languageProficiency" name="languageProficiency" onChange={language_proficiency} value={client.language_proficiency} disabled>
        <option value="basic">Basic</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
        <option value="fluent">Fluent</option>
      </select><br /><br />

      <label htmlFor="experience">Experience:</label>
      <input type="text" id="experience" name="experience" onChange={Experience} value={client.Experience} disabled /><br /><br />

      <label htmlFor="skills">Skills:</label>
      <input type="text" id="skills" name="skills" onChange={Skills} value={client.Skills} disabled /><br /><br />


    </div>)
  const bio = (e) => {
    dispatch(add('bio', e.target.value));
  };
  const hourly_rate = (e) => {
    dispatch(add('hourly_rate', e.target.value));
  };
  const profile_photo = (e) => {
    dispatch(add('profile_photo', e.target.value));
  };

  const elms4 = (
    <div>
      <label htmlFor="bio">Bio:</label>
      <textarea id="bio" name="bio" onChange={bio} value={client.bio} disabled></textarea><br /><br />

      <label htmlFor="hourlyRate">Hourly Rate:</label>
      <input type="number" id="hourlyRate" name="hourlyRate" onChange={hourly_rate} value={client.hourly_rate} disabled /><br /><br />

      <label htmlFor="profilePhoto">Profile Photo:</label>

      <input type="file" id="profilePhoto" name="profilePhoto" onChange={profile_photo} value={client.profile_photo} disabled /><br /><br />
    </div>
  );
  return (
    <>
      <div style={{ width: '100px', height: '100px' }}>
        {imageData && <img src={imageData} alt="Stored Image" />}
      </div>
      {elms2}<br />
      {elms3}<br />
      {elms4}<br />
    </>
  )
}

export default Inp5;
