import React, { useState } from 'react';
import { MapPin, Mail, Phone, Calendar, Star, Edit, LogOut, Lock, Plane as Plants, Users, Clock } from 'lucide-react';
import "./MyProfile.scss"
import PropTypes from 'prop-types';


const DUMMY_USER = {
  id: 1,
  name: "Alex Thompson",
  role: "Plant Sitter",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60",
  location: "San Francisco, CA",
  email: "alex.thompson@example.com",
  phone: "(555) 123-4567",
  joinedDate: "2023-09-15",
  bio: "Passionate plant enthusiast with 5+ years of experience caring for various species. Specialized in tropical plants and succulents.",
  stats: {
    plantsSat: 24,
    activeBookings: 3,
    averageRating: 4.8,
    totalReviews: 45
  }
};

const DUMMY_REVIEWS = [
  {
    id: 1,
    author: "Emily Chen",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=60",
    rating: 5,
    date: "2024-02-15",
    comment: "Alex took amazing care of my monstera while I was away. The plant looked even healthier when I returned!"
  },
  {
    id: 2,
    author: "James Wilson",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=60",
    rating: 4,
    date: "2024-01-28",
    comment: "Very reliable and professional. Would definitely book again."
  }
];


const StatCard = ({ icon: Icon, label, value }) => (
  <div className="stat-card">
    <Icon size={24} className="stat-icon" />
    <div className="stat-content">
      <h3>{value}</h3>
      <p>{label}</p>
    </div>
  </div>
);

StatCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

const ReviewCard = ({ review }) => (
  <div className="review-card">
    <div className="review-header">
      <img src={review.avatar} alt={review.author} className="review-avatar" />
      <div className="review-info">
        <h4>{review.author}</h4>
        <div className="review-rating">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < review.rating ? 'star-filled' : 'star-empty'}
            />
          ))}
        </div>
      </div>
      <span className="review-date">{new Date(review.date).toLocaleDateString()}</span>
    </div>
    <p className="review-comment">{review.comment}</p>
  </div>
);

ReviewCard.propTypes = {
  review: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
  }).isRequired,
};



const MyProfile = () => {
  const [activeTab, setActiveTab] = useState('bookings');
  const user = DUMMY_USER;

  const handleEditProfile = () => {
    // Handle edit profile logic
    console.log('Edit profile clicked');
  };

  const handleChangePassword = () => {
    // Handle password change logic
    console.log('Change password clicked');
  };

  const handleLogout = () => {
    // Handle logout logic
    console.log('Logout clicked');
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-info">
          <img src={user.avatar} alt={user.name} className="profile-avatar" />
          <div className="profile-details">
            <h1>{user.name}</h1>
            <div className="profile-meta">
              <span className="role-badge">{user.role}</span>
              <div className="info-item">
                <MapPin size={16} />
                <span>{user.location}</span>
              </div>
              <div className="info-item">
                <Calendar size={16} />
                <span>Joined {new Date(user.joinedDate).toLocaleDateString()}</span>
              </div>
            </div>
            <p className="bio">{user.bio}</p>
            <div className="contact-info">
              <div className="info-item">
                <Mail size={16} />
                <span>{user.email}</span>
              </div>
              <div className="info-item">
                <Phone size={16} />
                <span>{user.phone}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="profile-actions">
          <button className="action-button edit" onClick={handleEditProfile}>
            <Edit size={16} />
            Edit Profile
          </button>
          <button className="action-button password" onClick={handleChangePassword}>
            <Lock size={16} />
            Change Password
          </button>
          <button className="action-button logout" onClick={handleLogout}>
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </div>

      <div className="stats-grid">
        <StatCard 
          icon={Plants} 
          label="Plants Sat" 
          value={user.stats.plantsSat} 
        />
        <StatCard 
          icon={Clock} 
          label="Active Bookings" 
          value={user.stats.activeBookings} 
        />
        <StatCard 
          icon={Star} 
          label="Average Rating" 
          value={user.stats.averageRating} 
        />
        <StatCard 
          icon={Users} 
          label="Total Reviews" 
          value={user.stats.totalReviews} 
        />
      </div>

      <div className="profile-tabs">
        <button 
          className={`tab-button ${activeTab === 'bookings' ? 'active' : ''}`}
          onClick={() => setActiveTab('bookings')}
        >
          My Bookings
        </button>
        <button 
          className={`tab-button ${activeTab === 'requests' ? 'active' : ''}`}
          onClick={() => setActiveTab('requests')}
        >
          Booking Requests
        </button>
        <button 
          className={`tab-button ${activeTab === 'reviews' ? 'active' : ''}`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews
        </button>
      </div>

      {activeTab === 'reviews' && (
        <div className="reviews-section">
          <h2>Recent Reviews</h2>
          <div className="reviews-grid">
            {DUMMY_REVIEWS.map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProfile;