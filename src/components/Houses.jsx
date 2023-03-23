import React from "react";
import img1 from "../assets/image_1.png";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img_3.jpg";
import img4 from "../assets/img_4.jpg";
import { useState } from "react";
import "./styles.css"

const Houses = () => {
    const [Obj, setObj] = useState ([
      {
        id: "1",
        image: img1,
        Location: "New York",
        Price: 100,
        Property_type: "House",
      },
      {
        id: "2",
        image: img2,
        Location: "Texas",
        Price: 300,
        Property_type: "House",
      },
      {
        id: "3",
        image: img3,
        Location: "Arizona",
        Price: 600,
        Property_type: "House",
      },
      {
        id: "4",
        image: img4,
        Location: "Columbia",
        Price: 900,
        Property_type: "House",
      },
      {
        id: "5",
        image: img2,
        Location: "Utah",
        Price: 1200,
        Property_type: "House",
      },
      {
        id: "6",
        image: img3,
        Location: "California",
        Price: 1500,
        Property_type: "House",
      },
    ])
  const [Location, setLocation] = useState("");
  const [selectedOption, setSelectedOption] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const filteredHouses = Obj.filter(div => (div.Location.includes(Location)) && (div.Price >= parseInt(selectedOption,10) - 500 && div.Price <= parseInt(selectedOption,10)) ); 
    setObj(filteredHouses);
  }
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} className="Form">
        <p>Location:</p>
        <input type="text" placeholder="Location" value={Location} onChange= {(event) => setLocation(event.target.value)} />
        <p>Price Range</p>
        <select value={selectedOption} onChange= {(event) => setSelectedOption(event.target.value)}>
        <option value="">Choose the price</option>
        <option value="500">less than $500</option>
        <option value="1000">$500 - $1000</option>
        <option value="1500">$1000 - $1500</option>
      </select>
        <button style={{background: "lightblue", padding: "6px"}}>Search</button>
        </form>
      </div>
      <div className="middle">
      {Obj.map(house => (
        <div key={house.id} className="EachHouse">
            <img src= {house.image} alt="hou_1" />
            <p>{house.Location}</p>
            <p>{house.Price} $</p>
      
            
        </div>
      ))}
      
      </div>
    </div>
  );
};

export default Houses;
