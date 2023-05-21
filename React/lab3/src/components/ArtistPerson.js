import { NavLink } from "react-router-dom";

let ArtistPerson = (props) => {
    let { oneArtist } = props;
    return (
        <div>
            <div className="artist-card card">
                <img className="artist-img" src={`../covers/${oneArtist.cover}.jpg`} />
                <NavLink className="artist-name" to={`/artists/${oneArtist.id}`}>{oneArtist.name}</NavLink>
            </div>
        </div>
    )
}

export default ArtistPerson;