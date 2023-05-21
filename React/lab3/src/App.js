import Home from "./components/Home";
import ArtistDetails from "./components/ArtistDetails";
import Artists from "./components/Artists";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App(){
    return (
        <div className="body">
            <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/artists" element={<Artists/>}/>
                        <Route path="/artists/:id" element={<ArtistDetails/>}/>
                        {/* <Route path="*" element={<Error/>}/> */}
                    </Routes>
                
            </BrowserRouter>
        </div>
    )
}   
export default App;