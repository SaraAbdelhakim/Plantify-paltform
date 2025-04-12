import React, { useState } from 'react';
import { Plane as Plant, Calendar, MapPin, Plus, MessageSquare, Edit3, Trash2, ChevronDown, Leaf } from 'lucide-react';
import "./MyRequests.scss"
import {mockRequests} from '../../data'

const MyRequests = () => {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const formatDateRange = (start, end) => {
    const startDate = new Date(start).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const endDate = new Date(end).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    return `${startDate} - ${endDate}`;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'available':
        return 'status-available';
      case 'booked':
        return 'status-booked';
      case 'completed':
        return 'status-completed';
      default:
        return 'status-default';
    }
  };

  return (
    <div className="my-requests">
      <div className="container">
        <div className="header">
          <div>
            <h1>My Plant Sitting Requests</h1>
            <p>
              Manage your current and past requests, and track sitter responses.
            </p>
          </div>
          <button className="create-button">
            <Plus size={20} />
            Create New Request
          </button>
        </div>

        <div className="requests-container">
          <div className="filters">
            <div className="select-wrapper">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="available">Available</option>
                <option value="booked">Booked</option>
                <option value="completed">Completed</option>
              </select>
              <ChevronDown size={16} />
            </div>
            <div className="select-wrapper">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
              <ChevronDown size={16} />
            </div>
          </div>

          {mockRequests.length > 0 ? (
            <div className="requests-list">
              {mockRequests.map((request) => (
                <div key={request.id} className="request-card">
                  <div className="request-content">
                    <div className="plant-image">
                      <img
                        src={request.image}
                        alt={request.plantName}
                      />
                    </div>
                    <div className="request-details">
                      <div className="request-header">
                        <div>
                          <h3>{request.plantName}</h3>
                          <div className="plant-type">
                            <Plant size={16} />
                            <span>{request.plantType}</span>
                          </div>
                        </div>
                        <span className={`status-badge ${getStatusColor(request.status)}`}>
                          {request.status}
                        </span>
                      </div>

                      <div className="request-info">
                        <div className="info-item">
                          <Calendar size={16} />
                          <span>{formatDateRange(request.startDate, request.endDate)}</span>
                        </div>
                        <div className="info-item">
                          <MapPin size={16} />
                          <span>{request.location}</span>
                        </div>
                      </div>

                      {request.sitter && (
                        <div className="sitter-info">
                          <p>Sitter: {request.sitter.name}</p>
                          <div className="sitter-actions">
                            <button>
                              <MessageSquare size={14} />
                              Message
                            </button>
                          </div>
                        </div>
                      )}

                      <div className="request-actions">
                        <button className="edit-button">
                          <Edit3 size={16} />
                          Edit
                        </button>
                        <button className="delete-button">
                          <Trash2 size={16} />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">
                <Leaf />
              </div>
              <h3>No plant sitting requests yet</h3>
              <p>Click &quot;Create New Request&quot; to get started!</p>
              <button className="create-button">
                <Plus size={20} />
                Create New Request
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyRequests;