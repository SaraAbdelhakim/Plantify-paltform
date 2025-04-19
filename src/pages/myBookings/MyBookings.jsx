import React, { useState } from 'react';
import { Calendar, MapPin, Droplets, Sun, MessageCircle, X } from 'lucide-react';
import { format } from 'date-fns';
import "./MyBookings.scss"
import PropTypes from 'prop-types';


const DUMMY_BOOKINGS = [
  {
    id: 1,
    plantName: "Fiddle Leaf Fig",
    plantType: "Indoor Tree",
    plantImage: "/img/monstera.jpg",
    startDate: "2024-03-20",
    endDate: "2024-04-05",
    location: "San Francisco, CA",
    wateringNeeds: "Every 3 days",
    sunlight: "Indirect light",
    status: "upcoming",
    owner: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=60",
      area: "Mission District"
    }
  },
  {
    id: 2,
    plantName: "Monstera Deliciosa",
    plantType: "Tropical",
    plantImage: "/img/monstera.jpg",
    startDate: "2024-02-01",
    endDate: "2024-02-15",
    location: "San Francisco, CA",
    wateringNeeds: "Weekly",
    sunlight: "Bright indirect light",
    status: "completed",
    owner: {
      name: "Mike Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=60",
      area: "SOMA"
    }
  }
];

const BookingCard = ({ booking, onCancel }) => {
  const isUpcoming = booking.status === 'upcoming';
  
  return (
    <div className="booking-card">
      <div className="booking-card-header">
        <img src={booking.plantImage} alt={booking.plantName} className="plant-image" />
        <div className="status-badge" data-status={booking.status}>
          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
        </div>
      </div>
      
      <div className="booking-card-content">
        <h3 className="plant-name">{booking.plantName}</h3>
        <p className="plant-type">{booking.plantType}</p>
        
        <div className="info-row">
          <Calendar size={16} />
          <span>
            {format(new Date(booking.startDate), 'MMM d')} - {format(new Date(booking.endDate), 'MMM d, yyyy')}
          </span>
        </div>
        
        <div className="info-row">
          <MapPin size={16} />
          <span>{booking.location}</span>
        </div>
        
        <div className="care-info">
          <div className="info-row">
            <Droplets size={16} />
            <span>{booking.wateringNeeds}</span>
          </div>
          <div className="info-row">
            <Sun size={16} />
            <span>{booking.sunlight}</span>
          </div>
        </div>
        
        <div className="owner-info">
          <img src={booking.owner.avatar} alt={booking.owner.name} className="owner-avatar" />
          <div>
            <p className="owner-name">{booking.owner.name}</p>
            <p className="owner-area">{booking.owner.area}</p>
          </div>
        </div>
        
        <div className="booking-actions">
          <button className="action-button primary">
            <MessageCircle size={16} />
            Contact Owner
          </button>
          {isUpcoming && (
            <button className="action-button danger" onClick={() => onCancel(booking.id)}>
              <X size={16} />
              Cancel Booking
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
BookingCard.propTypes = {
  booking: PropTypes.shape({
    id: PropTypes.number.isRequired,
    plantName: PropTypes.string.isRequired,
    plantType: PropTypes.string.isRequired,
    plantImage: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    wateringNeeds: PropTypes.string.isRequired,
    sunlight: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      area: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onCancel: PropTypes.func.isRequired,
};

const MyBookings = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [bookings, setBookings] = useState(DUMMY_BOOKINGS);

  const filteredBookings = activeFilter === 'all' 
    ? bookings 
    : bookings.filter(booking => booking.status === activeFilter);

  const handleCancel = (bookingId) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      setBookings(bookings.map(booking => 
        booking.id === bookingId 
          ? { ...booking, status: 'cancelled' }
          : booking
      ));
    }
  };
  return (
    <div className="my-bookings-container">
      <div className="page-header">
        <h1>My Bookings</h1>
        <p>These are the plants you&apos;re currently sitting or have already taken care of.</p>
      </div>

      <div className="filters">
        <button 
          className={`filter-button ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          All
        </button>
        <button 
          className={`filter-button ${activeFilter === 'upcoming' ? 'active' : ''}`}
          onClick={() => setActiveFilter('upcoming')}
        >
          Upcoming
        </button>
        <button 
          className={`filter-button ${activeFilter === 'completed' ? 'active' : ''}`}
          onClick={() => setActiveFilter('completed')}
        >
          Completed
        </button>
      </div>

      <div className="bookings-grid">
        {filteredBookings.map(booking => (
          <BookingCard 
            key={booking.id} 
            booking={booking} 
            onCancel={handleCancel}
          />
        ))}
      </div>
    </div>
  );
};

export default MyBookings;