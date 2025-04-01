import React from 'react'
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import "./PlantCard.scss"



const PlantCard = ({item}) => {

    const navigate = useNavigate();

    const handleViewDetails = () => {
      navigate(`/plantDetails/${item.id}`)
    }

    return (
        <div className="plant-card">
          {/* Plant Image */}
          <img src={item.image} alt={item.name} className="plant-card__image" />
    
          {/* Plant Information */}
          <h2 className="plant-card__name">{item.name}</h2>
          <p className="plant-card__info">Type: {item.type}</p>
          <p className="plant-card__info">Care Duration: {item.duration}</p>
          <p className="plant-card__info">Location: {item.location}</p>

    
          {/* Actions */}
          <div className="plant-card__actions">
            <button onClick={handleViewDetails} className="plant-card__button view-details">View Details</button>

          </div>
        </div>
      )
}
PlantCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default PlantCard