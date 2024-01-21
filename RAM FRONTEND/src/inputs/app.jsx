import React from 'react';
import { useSelector } from 'react-redux';
import Inp1 from './Inp1';
import Inp2 from './Inp2';
import Inp3 from './Inp3';
import Inp4 from './Inp4';
import Inp5 from './inp5';
import LOGIN from './loging';
import Image from './image';
import { Provider } from 'react-redux';
import { initialState, next, reducer, store } from './reducer';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import styles from '../css/App.module.css'
import logo from '../imgs/HINGE.png'



const App = () => {
     const inp = useSelector((state) => state.inp);
     const client = useSelector((state) => state.client);
     console.log(inp);

     let selectedComponent;
     switch (inp) {
          case 1:
               selectedComponent = <Inp1 />;
               break;
          case 2:
               selectedComponent = <Inp2 />;
               break;
          case 3:
               selectedComponent = <Inp3 />;
               break;
          case 4:
               selectedComponent = <Inp4 />;
               break;
          case 5:
               selectedComponent = <Image />;
               break;
          case 6:
               selectedComponent = <Inp5 />;
               break;
          default:
               selectedComponent = <Inp1 />;
               break;
     }

     store.subscribe(() => {
          console.log(client);
     })

     return (
          <Provider store={store}>

               <div className={styles.body}>

                    <img src={logo} alt="logo" className={styles.logo} />
                    <div className={styles.inputs}>
                         {selectedComponent}
                         {/* <Router>
                              <Routes>
                                   <Route path="/" element={selectedComponent} ></Route>
                              </Routes>
                         </Router> */}
                         {/* <Inp3 /> */}
                    </div>

               </div>
          </Provider>
     );
};

export default App;


