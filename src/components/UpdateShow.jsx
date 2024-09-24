import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function UpdateShow() {
    const [vehicles, setVehicles] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchVehicles();
    }, []);

    const fetchVehicles = () => {
        axios.get('http://localhost:7000/pizzas/')
            .then(response => {
                setVehicles(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the vehicle data', error);
            });
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:7000/pizzas/${id}`)
            .then(response => {
                fetchVehicles(); // Refresh the list after deletion
            })
            .catch(error => {
                console.error('There was an error deleting the vehicle data', error);
            });
    };

    return (
        <div className="container mx-auto mt-8 px-4">
            <h2 className="text-2xl font-semibold mb-6">Vehicle List</h2>
            <div className="flex flex-wrap -mx-4">
                {vehicles.map(vehicle => (
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8" key={vehicle.id}>
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img src={vehicle.image} alt={vehicle.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h5 className="text-xl font-bold mb-2">{vehicle.name}</h5>
                                <p className="text-gray-700 mb-2">Price: ${vehicle.price}</p>
                                <p className="text-gray-700 mb-2">Size: {vehicle.size}</p>
                                <p className="text-gray-700 mb-2">Category: {vehicle.category}</p>
                                <p className="text-gray-700 mb-4">Description: {vehicle.description}</p>
                                <button
                                    className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 mr-2"
                                    onClick={() => navigate(`/update/${vehicle.id}`)}
                                >
                                    UPDATE
                                </button>
                                <button
                                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                                    onClick={() => handleDelete(vehicle.id)}
                                >
                                    DELETE
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UpdateShow;
