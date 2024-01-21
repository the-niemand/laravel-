import React from 'react'
import '../css/inp2.module.css';

import google from '../imgs/search.png'
import fcb from '../imgs/facebook.png'
import x from '../imgs/twitter.png'


const LOGIN = () => {
     const elms = (
          <div className='ctn'>
               <h1>LOG IN</h1>

               <div className='other'>
                    <input type="email" id="email" name="email" required  placeholder='Email' />
                    <input type="password" id="password" name="password" required  placeholder='Password' />
               </div>

               <button>log in</button>
               <div className='or'>
                    <hr />
                    <p>or</p>
                    <hr />
               </div>
               <div className='otr'>
                    <div className="google">
                         <img src={google} alt="" />
                         <p>Log in with Google</p>
                    </div>
                    <div className="facebook">
                         <img src={fcb} alt="" />
                         <p>Log in with Facebook</p>
                    </div>
                    <div className="x">
                         <img src={x} alt="" />
                         <p>Log in with X</p>
                    </div>
               </div>
               <p>vous n'avez pas de compte ? <a href="#" className='link'>Sign up</a></p>
          </div>
     );

     return elms;
}


export default LOGIN