import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [playlists, setPlaylists] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [genres, setGenres] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Simulated fetch data (replace with actual API calls)
    const fetchPlaylists = async () => {
      // Mock playlists data
      const mockPlaylists = [
        { id: 1, name: "Chill Hits" },
        { id: 2, name: "Morning Acoustics" },
        { id: 3, name: "Workout Mix" },
      ];
      setPlaylists(mockPlaylists);
    };

    const fetchAlbums = async () => {
      // Mock albums data
      const mockAlbums = [
        { id: 101, title: "Greatest Hits" },
        { id: 102, title: "Top 50 Tracks" },
        { id: 103, title: "90s Throwback" },
      ];
      setAlbums(mockAlbums);
    };

    const fetchGenres = async () => {
      // Mock genres data
      const mockGenres = [
        { id: 201, name: "Pop" },
        { id: 202, name: "Rock" },
        { id: 203, name: "Electronic" },
      ];
      setGenres(mockGenres);
    };

    fetchPlaylists();
    fetchAlbums();
    fetchGenres();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    // Implement search functionality here if needed
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Spotify 2.0 Clone</h1>
        <input
          type="text"
          id="searchInput"
          placeholder="Search for music..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </header>
      <main className="App-main">
        <section>
          <h2>Playlists</h2>
          <ul>
            {playlists.map((playlist) => (
              <li key={playlist.id}>{playlist.name}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Albums</h2>
          <ul>
            {albums.map((album) => (
              <li key={album.id}>{album.title}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Genres</h2>
          <ul>
            {genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </section>
      </main>
      <footer className="App-footer">
        <audio id="audioPlayer" controls></audio>
      </footer>
    </div>
  );
}

export default App;
