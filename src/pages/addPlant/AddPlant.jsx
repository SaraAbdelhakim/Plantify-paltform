import React, { useState } from 'react';
import { Calendar, Upload, MapPin, Droplets, Sun, FileText, Leaf } from 'lucide-react';
import "./AddPlant.scss"

const plantTypes = [
  'Succulent',
  'Fern',
  'Orchid',
  'Cactus',
  'Palm',
  'Flowering Plant',
  'Herb',
  'Vine',
  'Bonsai',
  'Air Plant',
  'other',
];

const AddPlant = () => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    photo: '',
    startDate: '',
    endDate: '',
    location: '',
    watering: '',
    sunlight: '',
    notes: '',
    specialTools: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Plant name is required';
    if (!formData.type) newErrors.type = 'Plant type is required';
    if (!formData.startDate) newErrors.startDate = 'Start date is required';
    if (!formData.endDate) newErrors.endDate = 'End date is required';
    if (!formData.location) newErrors.location = 'Location is required';
    if (!formData.wateringNeeds) newErrors.wateringNeeds = 'Watering needs are required';
    if (!formData.sunlight) newErrors.sunlight = 'Sunlight requirements are required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Handle form submission here
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };


  return (
    <div className="add-plant-container">
      <div className="add-plant-header">
        <Leaf className="header-icon" size={32} />
        <h1>Add a New Plant Request</h1>
        <p>Tell us about your plant and what care it needs during your time away.</p>
      </div>

      <form onSubmit={handleSubmit} className="add-plant-form">
        <div className="form-section">
          <h2><Leaf size={20} /> Plant Information</h2>
          
          <div className="form-group">
            <label htmlFor="name">Plant Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="e.g., Fiddle Leaf Fig"
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="type">Plant Type</label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              className={errors.type ? 'error' : ''}
            >
              <option value="">Select plant type</option>
              {plantTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            {errors.type && <span className="error-message">{errors.type}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="photo">Plant Photo</label>
            <div className="upload-area">
              <Upload size={24} />
              <span>Drop your image here or click to browse</span>
              <input
                type="file"
                id="photo"
                name="photo"
                accept="image/*"
                onChange={(e) => console.log(e.target.files)}
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h2><Calendar size={20} /> Care Duration</h2>
          
          <div className="date-inputs">
            <div className="form-group">
              <label htmlFor="startDate">Start Date</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                className={errors.startDate ? 'error' : ''}
              />
              {errors.startDate && <span className="error-message">{errors.startDate}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="endDate">End Date</label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                className={errors.endDate ? 'error' : ''}
              />
              {errors.endDate && <span className="error-message">{errors.endDate}</span>}
            </div>
          </div>
        </div>

        <div className="form-section">
          <h2><MapPin size={20} /> Location</h2>
          
          <div className="form-group">
            <label htmlFor="location">City / Area</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="e.g., San Francisco"
              className={errors.location ? 'error' : ''}
            />
            {errors.location && <span className="error-message">{errors.location}</span>}
          </div>
        </div>

        <div className="form-section">
          <h2><FileText size={20} /> Care Instructions</h2>
          
          <div className="form-group">
            <label htmlFor="wateringNeeds">
              <Droplets size={16} /> Watering Needs
            </label>
            <input
              type="text"
              id="wateringNeeds"
              name="wateringNeeds"
              value={formData.wateringNeeds}
              onChange={handleInputChange}
              placeholder="e.g., Every 3 days"
              className={errors.wateringNeeds ? 'error' : ''}
            />
            {errors.wateringNeeds && <span className="error-message">{errors.wateringNeeds}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="sunlight">
              <Sun size={16} /> Sunlight Requirements
            </label>
            <input
              type="text"
              id="sunlight"
              name="sunlight"
              value={formData.sunlight}
              onChange={handleInputChange}
              placeholder="e.g., Indirect light near a window"
              className={errors.sunlight ? 'error' : ''}
            />
            {errors.sunlight && <span className="error-message">{errors.sunlight}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="notes">Additional Notes</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              placeholder="Any special care instructions or details..."
            />
          </div>
        </div>

        <div className="form-section">
          <h2>Optional Details</h2>
          
          <div className="form-group">
            <label htmlFor="specialTools">Special Tools or Fertilizers Required</label>
            <textarea
              id="specialTools"
              name="specialTools"
              value={formData.specialTools}
              onChange={handleInputChange}
              placeholder="List any special tools or fertilizers needed..."
            />
          </div>

        </div>

        <button type="submit" className="submit-button">
          Submit Plant Request
        </button>
      </form>
    </div>
  );
};

export default AddPlant;