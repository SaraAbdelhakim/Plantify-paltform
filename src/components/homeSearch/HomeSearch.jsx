import React, { useState } from 'react';
import { MapPin, Search } from 'lucide-react';
import './HomeSearch.scss';

const SITTER_TYPES = [
  "All Categories",
  "Indoor Plant Specialists",
  "Outdoor Garden Experts",
  "Succulent Care",
  "Tropical Plant Specialists",
  "Orchid Care Experts",
  "Bonsai Specialists",
  "Herb Garden Care",
  "Rare Plant Specialists"
];

const HomeSearch = () => {
  const [searchParams, setSearchParams] = useState({
    location: '',
    type: 'All Categories'
  });

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams({
      location: searchParams.location,
      type: searchParams.type
    });
    window.location.href = `/plantSitterListing?${params.toString()}`;
  };

  return (
    <div className="home-search">
      <div className="search-container">
        <h1>Find the Perfect Plant Sitter</h1>
        <p>Connect with experienced plant sitters in your area</p>
        
        <form onSubmit={handleSearch} className="search-form">
          <div className="input-group">
            <MapPin size={20} />
            <input
              type="text"
              placeholder="Enter your location"
              value={searchParams.location}
              onChange={(e) => setSearchParams(prev => ({ ...prev, location: e.target.value }))}
            />
          </div>
          
          <select
            value={searchParams.type}
            onChange={(e) => setSearchParams(prev => ({ ...prev, type: e.target.value }))}
          >
            {SITTER_TYPES.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          
          <button type="submit" className="search-button">
            <Search size={20} />
            Search Plant Sitter
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomeSearch;