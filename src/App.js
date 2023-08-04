import './App.css';
import './const.css'; 
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import Wrapper from './components/wraper';
import LoginMain from './components/loginpage/loginmain';

function App() {
  
  const logData= useSelector((state) => state.logInfo);
  useEffect(() => { 

    console.log('-------------------------------------------------')
    console.log( logData )
    console.log('-------------------------------------------------')
  });
  return (
    <div className="App">
      {logData.isLogin?   <Wrapper/> : <LoginMain/> }
      {/* <Wrapper/> */}
    </div>
  );
}

export default App;
