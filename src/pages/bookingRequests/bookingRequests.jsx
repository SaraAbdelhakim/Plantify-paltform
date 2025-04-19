import React, { useState } from 'react';
import { Calendar, MapPin, Droplets, Sun, Clock, Check, X, Filter } from 'lucide-react';
import { format, formatDistanceToNow } from 'date-fns';
import "./BookingRequests.scss"
import PropTypes from 'prop-types';

const DUMMY_REQUESTS = [
  {
    id: 1,
    plantName: "Snake Plant",
    plantType: "Succulent",
    plantImage: "/img/monstera.jpg",
    startDate: "2024-04-01",
    endDate: "2024-04-15",
    location: "San Francisco, CA",
    wateringNeeds: "Every 2 weeks",
    sunlight: "Low to bright indirect",
    requestTime: "2025-03-10T08:30:00",
    status: "pending",
    owner: {
      name: "Emma Wilson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=60",
      area: "Pacific Heights"
    }
  },
  {
    id: 2,
    plantName: "Peace Lily",
    plantType: "Flowering",
    plantImage: "/img/peace-lily.jpg",
    startDate: "2024-04-10",
    endDate: "2024-04-30",
    location: "San Francisco, CA",
    wateringNeeds: "Weekly",
    sunlight: "Medium indirect",
    requestTime: "2024-03-09T15:45:00",
    status: "pending",
    owner: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=60",
      area: "Hayes Valley"
    }
  }
];

const RequestCard = ({ request, onAccept, onDecline }) => {
  return (
    <div className="request-card">
      <div className="request-card-header">
        <img src={request.plantImage} alt={request.plantName} className="plant-image" />
        <div className="request-time">
          <Clock size={14} />
          <span>{formatDistanceToNow(new Date(request.requestTime))} ago</span>
        </div>
      </div>
      
      <div className="request-card-content">
        <h3 className="plant-name">{request.plantName}</h3>
        <p className="plant-type">{request.plantType}</p>
        
        <div className="info-row">
          <Calendar size={16} />
          <span>
            {format(new Date(request.startDate), 'MMM d')} - {format(new Date(request.endDate), 'MMM d, yyyy')}
          </span>
        </div>
        
        <div className="info-row">
          <MapPin size={16} />
          <span>{request.location}</span>
        </div>
        
        <div className="care-info">
          <div className="info-row">
            <Droplets size={16} />
            <span>{request.wateringNeeds}</span>
          </div>
          <div className="info-row">
            <Sun size={16} />
            <span>{request.sunlight}</span>
          </div>
        </div>
        
        <div className="owner-info">
          <img src={request.owner.avatar} alt={request.owner.name} className="owner-avatar" />
          <div>
            <p className="owner-name">{request.owner.name}</p>
            <p className="owner-area">{request.owner.area}</p>
          </div>
        </div>
        
        <div className="request-actions">
          <button className="action-button accept" onClick={() => onAccept(request.id)}>
            <Check size={16} />
            Accept
          </button>
          <button className="action-button decline" onClick={() => onDecline(request.id)}>
            <X size={16} />
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};


const BookingRequests = () => {
  const [requests, setRequests] = useState(DUMMY_REQUESTS);
  const [sortBy, setSortBy] = useState('newest');
  
  const handleAccept = (requestId) => {
    if (window.confirm('Are you sure you want to accept this request?')) {
      setRequests(requests.filter(request => request.id !== requestId));
      // Handle accept logic here
    }
  };

  const handleDecline = (requestId) => {
    if (window.confirm('Are you sure you want to decline this request?')) {
      setRequests(requests.filter(request => request.id !== requestId));
      // Handle decline logic here
    }
  };

  const sortedRequests = [...requests].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.requestTime) - new Date(a.requestTime);
      case 'startDate':
        return new Date(a.startDate) - new Date(b.startDate);
      case 'duration': {
        const aDuration = new Date(a.endDate) - new Date(a.startDate);
        const bDuration = new Date(b.endDate) - new Date(b.startDate);
        return bDuration - aDuration;
      }
      default:
        return 0;
    }
  });

  return (
    <div className="booking-requests-container">
      <div className="page-header">
        <h1>Booking Requests</h1>
        <p>Review new plant sitting requests and choose the ones you&apos;d like to accept.</p>
      </div>

      <div className="controls">
        <div className="sort-control">
          <Filter size={16} />
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="newest">Newest First</option>
            <option value="startDate">Start Date</option>
            <option value="duration">Duration</option>
          </select>
        </div>
      </div>

      <div className="requests-grid">
        {sortedRequests.map(request => (
          <RequestCard 
            key={request.id} 
            request={request}
            onAccept={handleAccept}
            onDecline={handleDecline}
          />
        ))}
      </div>
    </div>
  );
};
RequestCard.propTypes = {
  request: PropTypes.shape({
    id: PropTypes.number.isRequired,
    plantName: PropTypes.string.isRequired,
    plantType: PropTypes.string.isRequired,
    plantImage: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    wateringNeeds: PropTypes.string.isRequired,
    sunlight: PropTypes.string.isRequired,
    requestTime: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      area: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onAccept: PropTypes.func.isRequired,
  onDecline: PropTypes.func.isRequired,
};

export default BookingRequests;