import React, { Suspense } from 'react'
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Interface from "./Pages/Interface Page/InterfaceView";

function App() 
{
  const localId=localStorage.getItem("persist:root")
  const id=JSON.parse(localId).userIdSlice.slice(1,-1)
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <div className="App">
          <iframe width="0px" title='music for twitter' height="0px" type="text/html" frameBorder='0' src="http://www.youtuberepeater.com/watch?v=7wtfhZwyrcc&name=Imagine+Dragons+Believer?autoplay=1#gsc.tab=0&origin=http://localhost:3000" allowFullScreen allow='acceleromete; autoplay; encrypted-media; gyroscope;'></iframe>
          
          {/* if user is founded */}
          <Routes>
          {id?
              <Route  path='/Home' element={<Home feed={true}/>}/>
          :
              <Route  path='/Twitter-Clone' element={<Interface/>}/>
          }
            <Route path='/tweets/:id' element={<Home discTweet={true}/>}/>

          </Routes>


          <Routes>
          </Routes>
        </div>
      </BrowserRouter>  
    </Suspense>
  );
}

export default App;
