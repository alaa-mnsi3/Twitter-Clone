import React from 'react'
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import TweetDisc from './Components/TweetDisc/TweetDisc';
import Home from "./Pages/Home/Home";
import Interface from "./Pages/Interface Page/InterfaceView";

function App() 
{
  return (
    <BrowserRouter>
      <div className="App">
        <iframe width="0px" title='music for twitter' height="0px" type="text/html" frameBorder='0' src="http://www.youtuberepeater.com/watch?v=7wtfhZwyrcc&name=Imagine+Dragons+Believer?autoplay=1#gsc.tab=0&origin=http://localhost:3000" allowFullScreen allow='acceleromete; autoplay; encrypted-media; gyroscope;'></iframe>
        <Routes>
          <Route  path='/' element={<Interface/>}/>
        </Routes>
        <Home/>
      </div>
    </BrowserRouter>  
  );
}

export default App;
