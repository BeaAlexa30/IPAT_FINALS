import React, { useEffect, useState } from 'react';
import axios from 'axios';


const ItemList = ({ onEdit, onDelete }) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetchItems();
    }, []);
 
    const fetchItems = async () => {
        try {
            const response = await
            axios.get('http://localhost:8000/api/items/');
            setItems(response.data);
        } catch (error) {
            console.error('There was an error fetching the items!', error);
        }
    };

    return (
        <div>
            <h1>Items</h1>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Surname</th>
                        <th>Name Extension</th>
                        <th>Email</th>
                        <th>Date of Birth</th>
                        <th>Place of Birth</th>
                        <th>Gender</th>
                        <th>Civil Status</th>
                        <th>Height (m)</th>
                        <th>Weight (kg)</th>
                        <th>Blood Type</th>
                        <th>Citizenship</th>
                        <th>Permanent Address</th>
                        <th>Mobile Number</th>
                        <th>Father's Name</th>
                        <th>Mother's Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.first_name}</td>
                            <td>{item.middle_name}</td>
                            <td>{item.surname}</td>
                            <td>{item.name_ext}</td>
                            <td>{item.email}</td>
                            <td>{item.date_of_birth}</td>
                            <td>{item.place_of_birth}</td>
                            <td>{item.gender}</td>
                            <td>{item.civil_status}</td>
                            <td>{item.height_m}</td>
                            <td>{item.weight_kg}</td>
                            <td>{item.blood_type}</td>
                            <td>{item.citizenship}</td>
                            <td>
                                {item.permanent_house_no} {item.permanent_street} {item.permanent_subd} {item.permanent_brgy}, {item.permanent_city}, {item.permanent_province} {item.permanent_zipcode}
                            </td>
                            <td>{item.mobile_number}</td>
                            <td>
                                {item.father_first_name} {item.father_middle_name} {item.father_surname} {item.father_name_ext}
                            </td>
                            <td>
                                {item.mother_first_name} {item.mother_middle_name} {item.mother_surname}
                            </td>
                            <td>
                                <button onClick={() => onEdit(item)}>Edit</button>
                                <button onClick={() => onDelete(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
    
};

export default ItemList;