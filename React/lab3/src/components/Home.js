import { NavLink } from "react-router-dom";

let Home = ()=>{
    return(
        <div className="homepage">
           <NavLink className="title" to={"/artists"}>Music DB</NavLink>
        </div>
    )
    
}

export default Home;