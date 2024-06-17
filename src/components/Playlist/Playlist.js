import React from "react";
import "./Playlist.css";

function Playlist({ name }) {
  return (
    <div className="playlist">
      <h3>{name}</h3>
      {/* Additional content */}
    </div>
  );
}

export default Playlist;
