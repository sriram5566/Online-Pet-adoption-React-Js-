import React, { useState, useEffect } from 'react';
import './App.css';

function Register() {
  const [pets, setPets] = useState([]);
  const [newPet, setNewPet] = useState({
    name: '',
    breed: '',
    location: '',
    contact: '',
    deliveryLocation: '', // Added field
    age: '', // Added field
  });
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    // Fetch pets data from Spring Boot API when the component mounts
    fetch('http://localhost:8080/api/pets')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setPets(data);
      })
      .catch((error) => {
        console.error('Error fetching data from the API:', error);
      });
  }, []);

  const addPet = () => {
    // Send a POST request to create a new pet
    fetch('http://localhost:8080/api/pets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPet),
    })
      .then((response) => response.json())
      .then((data) => {
        setPets([...pets, data]);
        setNewPet({
          name: '',
          breed: '',
          location: '',
          contact: '',
          deliveryLocation: '', // Added field
          age: '', // Added field
        });
      })
      .catch((error) => {
        console.error('Error adding pet:', error);
      });
  };

  const editPet = (index) => {
    setEditIndex(index);
    setNewPet(pets[index]);
  };

  const updatePet = () => {
    if (editIndex !== null) {
      // Send a PUT request to update the pet
      fetch(`http://localhost:8080/api/pets/${pets[editIndex].id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPet),
      })
        .then((response) => response.json())
        .then((updatedPet) => {
          const updatedPets = [...pets];
          updatedPets[editIndex] = updatedPet;
          setPets(updatedPets);
          setNewPet({
            name: '',
            breed: '',
            location: '',
            contact: '',
            deliveryLocation: '', // Added field
            age: '', // Added field
          });
          setEditIndex(null);
        })
        .catch((error) => {
          console.error('Error updating pet:', error);
        });
    }
  };

  const deletePet = (index) => {
    // Send a DELETE request to delete the pet
    fetch(`http://localhost:8080/api/pets/${pets[index].id}`, {
      method: 'DELETE',
    })
      .then(() => {
        const updatedPets = [...pets];
        updatedPets.splice(index, 1);
        setPets(updatedPets);
      })
      .catch((error) => {
        console.error('Error deleting pet:', error);
      });
  };

  return (
    <div className="App">
      <h1>Online Pet Adoption</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Name"
          value={newPet.name}
          onChange={(e) => setNewPet({ ...newPet, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Breed Name"
          value={newPet.breed}
          onChange={(e) => setNewPet({ ...newPet, breed: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          value={newPet.location}
          onChange={(e) => setNewPet({ ...newPet, location: e.target.value })}
        />
        <input
          type="text"
          placeholder="Contact"
          value={newPet.contact}
          onChange={(e) => setNewPet({ ...newPet, contact: e.target.value })}
        />
        <input
          type="text"
          placeholder="Delivery Location"
          value={newPet.deliveryLocation}
          onChange={(e) => setNewPet({ ...newPet, deliveryLocation: e.target.value })}
        />
        <input
          type="text"
          placeholder="Age"
          value={newPet.age}
          onChange={(e) => setNewPet({ ...newPet, age: e.target.value })}
        />
        {editIndex === null ? (
          <button className="add-button" onClick={addPet}>
            Add
          </button>
        ) : (
          <button className="update-button" onClick={updatePet}>
            Update
          </button>
        )}
      </div>

      <table className="pet-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Breed Name</th>
            <th>Location</th>
            <th>Contact</th>
            <th>Delivery Location</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pets.map((pet, index) => (
            <tr key={index}>
              <td>{pet.name}</td>
              <td>{pet.breed}</td>
              <td>{pet.location}</td>
              <td>{pet.contact}</td>
              <td>{pet.deliveryLocation}</td>
              <td>{pet.age}</td>
              <td>
                <button className="edit-button" onClick={() => editPet(index)}>
                  Edit
                </button>
                <button className="delete-button" onClick={() => deletePet(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Register;
