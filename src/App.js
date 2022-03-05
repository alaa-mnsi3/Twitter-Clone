import React from 'react'
import { useSelector } from 'react-redux';
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Interface from "./Pages/Interface Page/InterfaceView";

function App() 
{
  const id=useSelector(state=>state.userIdSlice)
  localStorage.clear()
  return (
    <BrowserRouter>
      <div className="App">
        <iframe width="0px" title='music for twitter' height="0px" type="text/html" frameBorder='0' src="http://www.youtuberepeater.com/watch?v=7wtfhZwyrcc&name=Imagine+Dragons+Believer?autoplay=1#gsc.tab=0&origin=http://localhost:3000" allowFullScreen allow='acceleromete; autoplay; encrypted-media; gyroscope;'></iframe>
        {id?
          <Home/>:
        <Routes>
          <Route  path='/' element={<Interface/>}/>
        </Routes>
        }
      </div>
    </BrowserRouter>  
  );
}

export default App;
