import React, { useState, useEffect } from "react";
// custom tools
import apiHandler from "../api/APIHandler";
import CardAlbum from "../components/card/CardAlbum";
import List from "../components/List";
// styles
import "../styles/card.css";
import "../styles/icon-favorite.css";

export default function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    apiHandler.get("/albums").then(apiRes => {
      setAlbums(apiRes.data.albums);
    });

    return () => {};
  }, []);

  return (
    <React.Fragment>
      <h1 className="title diy">D.I.Y</h1>
      <p>
        Fetch all Albums from the database.
        <br />
        Display a card for each album.
        <br />
        On click, provide a router {`<Link>`} to albums/album.id.
        <br />
        This view should be rendered by a separate component.
        <br />
        If the albums list is empty, provide a default view.
      </p>
      <h1 className="title diy">D.I.Y</h1>
      <p>
        Import a custom {`<IconFavorite />`} on each album card.
        <br />
        When clicked, send an axios.patch request to add the album to the
        user's favorites.
      </p>
      <hr />
      <h1 className="title">All albums</h1>
      <List
        data={albums}
        Component={CardAlbum}
        cssList="cards"
        cssItem="card album"
      />
    </React.Fragment>
  );
}
