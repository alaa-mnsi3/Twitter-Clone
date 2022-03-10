import React, { Suspense } from 'react'
import { useSelector } from 'react-redux';
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Interface from "./Pages/Interface Page/InterfaceView";

function App() 
{
  const id=useSelector(state=>state.userIdSlice)

  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <div className="App">
          <iframe width="0px" title='music for twitter' height="0px" type="text/html" frameBorder='0' src="http://www.youtuberepeater.com/watch?v=7wtfhZwyrcc&name=Imagine+Dragons+Believer?autoplay=1#gsc.tab=0&origin=http://localhost:3000" allowFullScreen allow='acceleromete; autoplay; encrypted-media; gyroscope;'></iframe>
          
          {/* if user is founded */}
            <Routes>
              {id ?
                <Route  path='/Home' element={<Home feed={true}/>}/>
              :
                <Route  path='/Twitter-Clone' element={<Interface/>}/>
              }
              <Route path='/tweets/:id' element={<Home discTweet={true}/>}/>
              <Route  path='/' element={<Interface/>}/>
            </Routes>

        </div>
      </BrowserRouter>  
    </Suspense>
  );
}

export default App;
