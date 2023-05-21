import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";


let ArtistDetails = () => {
    let { id } = useParams();
    let [artist, setArtist] = useState({});
    useEffect(() => {
        fetch(`http://localhost:3500/artists/${id}`)
            .then((response) => { return response.json() })
            .then((data) => {
                setArtist(data);
            })
    }, [])
    let renderImages = function () {
        if (artist.albums) {
            return artist.albums.map(album => (
                <img key={album.id} className="album-cover" src={`../albums/${album.cover}.jpg`} alt={album.title} />
            ));
        }
    }
    console.log(artist.albums)
    return (
        <div className=" artist-dets">
            <div>
                <NavLink className="btn btn-outline-secondary btn-lg" to={"/artists"}> Back</NavLink>
            </div>
            <div className="details-card rounded">
                <h1>{artist.name}</h1>
                ({artist.genre})
                <hr></hr>
                <p>
                    {artist.bio}
                </p>
                <h3>Famous Albums</h3>
                <div className="covers">
                    {renderImages()}
                </div>
            </div>
            <div >
                <img src={`../covers/${artist.cover}.jpg`} />
            </div>

        </div>
    )
}

export default ArtistDetails;