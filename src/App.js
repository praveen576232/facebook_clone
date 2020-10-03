import React,{useEffect} from 'react';
import './App.css';
import Header from './Header/Header';
import Siderbar from './Siderbar/Siderbar';
import Feed from './Feed/Feed';
import FacebookWidget from './Widget/FacebookWidget';
import {useStateValue} from './StateProvider/StateProvider'
import Login from './Login/Login';
import {auth} from './Firebase/firebase';
function App() {
  const[{user},dispatch] =useStateValue();
  useEffect(() => {
    const unsubscrib =auth.onAuthStateChanged(authUser =>{
      console.log(authUser);
      if(authUser){
        dispatch(
          {
            type:"SET_USER",
            user:authUser
          }
        )
      }else{
        dispatch(
          {
            type:"SET_USER",
            user:null
          }
        )
      }
    })
    return () => {
     unsubscrib()
    }
  }, [])
  return (
    <div className="app">
     
    {!user ?(
     <Login></Login>
    ):(
      <>
      <Header></Header>
    <div className="app_body">

    <Siderbar></Siderbar>
    <Feed></Feed>
    <FacebookWidget></FacebookWidget>
    </div>
      </>
    )
  }
  </div>
  );
}

export default App;
