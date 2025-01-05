// src/components/SearchBar.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchSnippets } from '../services/apiService'; // Import the service
import './styles.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    // Fetch snippets or search based on the query
    try {
      const snippets = await fetchSnippets();
      // Optionally filter snippets based on the query
      const filteredSnippets = snippets.filter(snippet =>
        snippet.title.includes(query) || snippet.description.includes(query)
      );
      console.log(filteredSnippets); // Handle your filtered snippets
      navigate(`/search?q=${encodeURIComponent(query)}`);
    } catch (error) {
      console.error('Error fetching snippets:', error.message);
    }
  };

  return (
    <form onSubmit={handleSearch} className="search-form">
      <div className="input-group">
        <input
          type="text"
          className="form-control search-input"
          placeholder="Search snippets or categories..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
