import React, { useState } from 'react';
import { MapPin, Calendar, Search } from 'lucide-react';
import PlantSitterCard from './PlantSitterCard';
import './PlantSitterListing.scss';

const DUMMY_SITTERS = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
    experience: 3,
    description: "Passionate about indoor plants and succulents. Experienced in caring for various tropical species.",
    availability: "Available weekdays and weekends",
    location: "San Francisco, CA",
    rating: 4.8,
    reviews: 45,
    specialties: ["Indoor Plants", "Succulents", "Tropical Plants"],
    hourlyRate: 25
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60",
    experience: 5,
    description: "Plant enthusiast specializing in rare plants and orchids. Certified in botanical care.",
    availability: "Flexible schedule, available most days",
    location: "San Francisco, CA",
    rating: 4.9,
    reviews: 62,
    specialties: ["Rare Plants", "Orchids", "Bonsai"],
    hourlyRate: 30
  },
  {
    id: 3,
    name: "Emma Wilson",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60",
    experience: 2,
    description: "Specializing in outdoor gardens and balcony plants. Experienced in seasonal plant care.",
    availability: "Available weekends and evenings",
    location: "Oakland, CA",
    rating: 4.7,
    reviews: 28,
    specialties: ["Outdoor Plants", "Herbs", "Vegetable Gardens"],
    hourlyRate: 22
  }
];

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

const PlantSitterListing = () => {
  const [searchParams, setSearchParams] = useState({
    location: '',
    type: 'All Categories',
    searchTerm: ''
  });

  const [filteredSitters, setFilteredSitters] = useState(DUMMY_SITTERS);

  const handleSearch = () => {
    const filtered = DUMMY_SITTERS.filter(sitter => {
      const matchesLocation = sitter.location.toLowerCase().includes(searchParams.location.toLowerCase());
      const matchesType = searchParams.type === 'All Categories' || 
        sitter.specialties.some(specialty => specialty.toLowerCase().includes(searchParams.type.toLowerCase()));
      const matchesSearch = sitter.name.toLowerCase().includes(searchParams.searchTerm.toLowerCase()) ||
        sitter.description.toLowerCase().includes(searchParams.searchTerm.toLowerCase());

      return matchesLocation && matchesType && matchesSearch;
    });

    setFilteredSitters(filtered);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="plant-sitter-listing">
      {/* Search Sidebar */}
      <aside className="search-sidebar">
        <h2>Find a Plant Sitter</h2>
        <div className="search-form">
          <div className="form-group">
            <label htmlFor="location">
              <MapPin size={16} />
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Enter city or area"
              value={searchParams.location}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="type">
              <Calendar size={16} />
              Plant Sitting Type
            </label>
            <select
              id="type"
              name="type"
              value={searchParams.type}
              onChange={handleInputChange}
            >
              {SITTER_TYPES.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="searchTerm">
              <Search size={16} />
              Search
            </label>
            <input
              type="text"
              id="searchTerm"
              name="searchTerm"
              placeholder="Search by name or keywords"
              value={searchParams.searchTerm}
              onChange={handleInputChange}
            />
          </div>

          <button className="search-button" onClick={handleSearch}>
            Search Plant Sitters
          </button>
        </div>
      </aside>

      {/* Main Listing Area */}
      <main className="sitter-listings">
        <div className="listings-header">
          <h1>Available Plant Sitters</h1>
          <p>{filteredSitters.length} sitters found</p>
        </div>

        <div className="sitters-grid">
          {filteredSitters.map(sitter => (
            <PlantSitterCard key={sitter.id} sitter={sitter} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default PlantSitterListing;