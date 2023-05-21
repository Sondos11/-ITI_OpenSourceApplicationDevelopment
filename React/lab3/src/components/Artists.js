import { Component } from "react";
import ArtistPerson from "./ArtistPerson";

class Artists extends Component {

    constructor() {
        super();
        this.state = {
            Artists: []
        }
    }
    RenderArtists = () => {

        

        return this.state.Artists.map((artist) => {
            return (
                <ArtistPerson oneArtist={artist} key={artist.id} />
            )
        })
    }
    componentDidMount() {
        fetch("http://localhost:3500/artists")
            .then((response) => { return response.json() })
            .then((data) => {
                this.setState({ Artists: data });
            })
            .catch((err) => { console.log(err) });
    }
    render() {
        return (
            <div className="artist">
                {this.RenderArtists()}
            </div>
        )
    }
}

export default Artists;