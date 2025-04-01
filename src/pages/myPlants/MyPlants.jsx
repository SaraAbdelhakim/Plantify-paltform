import {React, useState} from 'react'
import "./MyPlants.scss"
import PlantCard from '../../components/plantCard/PlantCard'
import {plants} from '../../data'


const MyPlants = () => {
  const [open, setOpen] = useState(false)
      const [sort, setSort] = useState("createdAt")
  
      const reSort = (type) => {
          setSort(type)
          setOpen(false)
      }

  return (
    <div className='myPlants'>
      <div className='container'>
        <h1>🌿 My Plants</h1>
        <p>Manage your plants and find sitters!</p>
        <div className='sort'>
            <div className='left'>
                <span>Duration</span>
                <input type='text' placeholder='from'/>
                <input type='text' placeholder='to'/>
                <button>Apply</button>
            </div>
            <div className='right'>
                <span className='sortBy'>SortBy</span>
                <span className='sortType'>{sort === "createdAt" ? "Recently Added" : "Location"}</span>
                <img src="./img/down.png" alt="sort-down" onClick={()=>setOpen(!open)}/>
                {open && (
                    <div className='rightMenu'>
                        {sort === "createdAt" ? (
                            <span onClick={()=>reSort("location")}>Location</span>
                        ) : (
                            <span onClick={()=>reSort("createdAt")}>Recently Added</span> 
                        )}
                    </div>
            )}
            </div>
            </div>
            <div className='cards'>
                {plants.map(plant=>(
                    <PlantCard key={plant.id} item={plant}/>
                ))}
            </div>
      </div>
    </div>
  )
}

export default MyPlants