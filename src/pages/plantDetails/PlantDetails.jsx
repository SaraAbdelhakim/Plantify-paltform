import {React, useState} from 'react'
import { useParams } from "react-router-dom";
import { plants } from "../../data";
import "./PlantDetails.scss"

const PlantDetails = () => {
  const { id } = useParams();
  const plant = plants.find((p) => p.id === parseInt(id));

  const [activeTab, setActiveTab] = useState("description");

  if (!plant) {
    return <h2>Plant not found!</h2>;
  }

  return (
  <div className="plant-details">
      {/* Plant Header */}
      <div className="plant-header">
        <img src={plant.image} alt={plant.name} />
        <div className="info">
          <h1>{plant.name}</h1>
          <p className='plant-type'>Type: {plant.type}</p>
          <p>Location: {plant.location}</p>
          <p>Owner: {plant.ownerName}</p>
          <p className='description'> {plant.description}</p>
          <button className="apply-btn">Apply to Sit</button>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <span 
          className={activeTab === "description" ? "active" : ""}
          onClick={() => setActiveTab("description")}
        >
          Description
        </span>
        <span 
          className={activeTab === "care" ? "active" : ""}
          onClick={() => setActiveTab("care")}
        >
          Care Instructions
        </span>
        <span 
          className={activeTab === "sitting" ? "active" : ""}
          onClick={() => setActiveTab("sitting")}
        >
          Sitting Details
        </span>
      </div>

      {/* Content Section */}
      <div className="tab-content">
        {activeTab === "description" && <p>{plant.description}</p>}
        {activeTab === "care" && (
          <ul>
            <li><strong>Watering:</strong> {plant.watering}</li>
            <li><strong>Sunlight:</strong> {plant.sunlight}</li>
            <li><strong>Additional Notes:</strong> {plant.notes}</li>
          </ul>
        )}
        {activeTab === "sitting" && <p><strong>Duration:</strong> {plant.duration}</p>}
      </div>

      {/* About the Owner Section */}
      <div className="owner-section">
        <h2>About the Owner</h2>
        <div className="owner-info">
          <img src="/img/profile-picture.jpg" alt="Owner" className="owner-img"/>
          <div>
            <h3>John Doe</h3>
            <p>Plant enthusiast and urban gardener from New York. Loves sharing his plants with fellow nature lovers!</p>
            <button className="contact-btn">Contact Owner</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlantDetails


