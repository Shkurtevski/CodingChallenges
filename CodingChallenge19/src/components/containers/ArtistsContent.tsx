import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../Navbar";
import backgroundImage from "../../images/raw/Girls-Listen-Music_0.jpg";
import ArtistsList from "../ArtistsList";
import ArtistPage from "../sub-components/ArtistPage";
import artists from "../../data/db";
import AlbumPage from "../sub-components/AlbumPage";

const ArtistsContent = () => {
  return (
    <React.Fragment>
      <Navbar
        backgroundImage={backgroundImage}
        altText="girl-listen-music"
        text="music db"
      />
      <Routes>
        <Route path="/" element={<ArtistsList title="Browse the artists" />} />
        <Route path="/artist/:id" element={<ArtistPage artists={artists} />} />
        <Route
          path="/artist/:id/:albumId"
          element={<AlbumPage artists={artists} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </React.Fragment>
  );
};

export default ArtistsContent;
