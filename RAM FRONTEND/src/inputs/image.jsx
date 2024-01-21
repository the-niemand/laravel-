
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateImage , next } from './reducer'; // Import your action


const Image = () => {
     const [file, setFile] = useState(null);
     const [preview, setPreview] = useState('');
     const dispatch = useDispatch();

     const handleChange = (e) => {
          if (e.target.files && e.target.files[0]) {
               const selectedFile = e.target.files[0];
               setFile(selectedFile);
               setPreview(URL.createObjectURL(selectedFile));

               // Dispatch action to update Redux store
               dispatch(updateImage(URL.createObjectURL(selectedFile)));
          }
     };

     return (
          <>
               <input
                    type="file"
                    accept="image/jpg, image/jpeg, image/png, image/svg"
                    onChange={handleChange}
               />
               {preview && <img src={preview} alt="preview" />}
               <button onClick={() => { dispatch(next()) }} >next</button>
          </>
     );
};

export default Image;
