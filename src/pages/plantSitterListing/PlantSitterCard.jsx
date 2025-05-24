import React from 'react';
import PropTypes from 'prop-types';
import { MapPin, Star, Clock, MessageCircle, ExternalLink } from 'lucide-react';

const PlantSitterCard = ({ sitter }) => {
  const handleMessage = () => {
    // Handle messaging logic
    console.log('Message sitter:', sitter.id);
  };

  const handleViewDetails = () => {
    // Handle view details logic
    console.log('View details:', sitter.id);
  };

  const handleBookNow = () => {
    // Handle booking logic
    console.log('Book now:', sitter.id);
  };

  return (
    <div className="sitter-card">
      <div className="sitter-header">
        <img src={sitter.avatar} alt={sitter.name} className="sitter-avatar" />
        <div className="sitter-info">
          <h3>{sitter.name}</h3>
          <div className="experience-badge">
            {sitter.experience} years experience
          </div>
        </div>
        <div className="rating">
          <Star size={16} className="star-icon" />
          <span>{sitter.rating}</span>
          <span className="reviews-count">({sitter.reviews} reviews)</span>
        </div>
      </div>

      <div className="sitter-body">
        <p className="sitter-description">{sitter.description}</p>
        
        <div className="info-row">
          <Clock size={16} />
          <span>{sitter.availability}</span>
        </div>
        
        <div className="info-row">
          <MapPin size={16} />
          <span>{sitter.location}</span>
        </div>

        <div className="specialties">
          {sitter.specialties.map(specialty => (
            <span key={specialty} className="specialty-tag">{specialty}</span>
          ))}
        </div>
      </div>

      <div className="sitter-actions">
        <button className="action-button message" onClick={handleMessage}>
          <MessageCircle size={16} />
          Message
        </button>
        <button className="action-button details" onClick={handleViewDetails}>
          <ExternalLink size={16} />
          Details
        </button>
        <button className="action-button book-now" onClick={handleBookNow}>
          Book Now
        </button>
      </div>
    </div>
  );
};

PlantSitterCard.propTypes = {
  sitter: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    experience: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    reviews: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    description: PropTypes.string.isRequired,
    availability: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    specialties: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default PlantSitterCard;