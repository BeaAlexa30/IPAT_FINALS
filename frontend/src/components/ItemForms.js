import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemForm = ({ item, onSuccess }) => {
    const [first_name, setFirstName] = useState('');
    const [middle_name, setMiddleName] = useState('');
    const [surname, setSurname] = useState('');
    const [name_ext, setNameExtension] = useState('');
    const [email, setEmail] = useState('');
    const [date_of_birth, setDateofBirth] = useState('');
    const [place_of_birth, setPlaceofBirth] = useState('');
    const [gender, setGender] = useState('');
    const [civil_status, setCivilStatus] = useState('');
    const [height_m, setHeigt] = useState('');
    const [weight_kg, setWeight] = useState('');
    const [blood_type, setBloodType] = useState('');
    const [citizenship, setCitizenship] = useState('');
    const [permanent_house_no, setHouseNo] = useState('');
    const [permanent_street, setStreet] = useState('');
    const [permanent_subd, setSubdivision] = useState('');
    const [permanent_brgy, setBarangay] = useState('');
    const [permanent_city, setCity] = useState('');
    const [permanent_province, setProvince] = useState('');
    const [permanent_zipcode, setZipCode] = useState('');
    const [mobile_number, setMobileNumber] = useState('');
    const [father_first_name, setFatherFirstName] = useState('');
    const [father_middle_name, setFatherMiddleName] = useState('');
    const [father_surname, setFatherSurname] = useState('');
    const [father_name_ext, setFatherNameExtension] = useState('');
    const [mother_first_name, setMotherFirstName] = useState('');
    const [mother_middle_name, setMotherMiddleName] = useState('');
    const [mother_surname, setMotherSurname] = useState('');

    
    useEffect(() => {
        if (item) {
            setFirstName(item.first_name);
            setMiddleName(item.middle_name);
            setSurname(item.surname);
            setNameExtension(item.name_ext);
            setEmail(item.email);
            setDateofBirth(item.date_of_birth);
            setPlaceofBirth(item.place_of_birth);
            setGender(item.gender);
            setCivilStatus(item.civil_status);
            setHeigt(item.height_m);
            setWeight(item.weight_kg);
            setBloodType(item.blood_type);
            setCitizenship(item.citizenship);
            setHouseNo(item.permanent_house_no);
            setStreet(item.permanent_street);
            setSubdivision(item.permanent_subd);
            setBarangay(item.permanent_brgy);
            setCity(item.permanent_city);
            setProvince(item.permanent_province);
            setZipCode(item.permanent_zipcode);
            setMobileNumber(item.mobile_number);
            setFatherFirstName(item.father_first_name);
            setFatherMiddleName(item.father_middle_name);
            setFatherSurname(item.father_surname);
            setFatherNameExtension(item.father_name_ext);
            setMotherFirstName(item.mother_first_name);
            setMotherMiddleName(item.mother_middle_name);
            setMotherSurname(item.mother_surname);
        }
    }, [item]);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = { first_name, middle_name, surname, name_ext, email, date_of_birth, place_of_birth,
            gender, civil_status, height_m, weight_kg, blood_type, citizenship, permanent_house_no, permanent_street,
            permanent_subd, permanent_brgy, permanent_city, permanent_province, permanent_zipcode, mobile_number, father_first_name,
            father_middle_name, father_surname, father_name_ext, mother_first_name, mother_middle_name, mother_surname
        };
        try {
            if (item) {
                await
                axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } else {
                await
                axios.post('http://localhost:8000/api/items/', data);
            }  
            onSuccess();
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
 };
 
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name:</label>
                <input type="text" value={first_name} onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            <div>
                <label>Middle Name:</label>
                <input type="text" value={middle_name} onChange={(e) => setMiddleName(e.target.value)}/>
            </div>
            <div>
                <label>Surname:</label>
                <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)}/>
            </div>
            <div>
                <label>Name Extension:</label>
                <input type="text" value={name_ext} onChange={(e) => setNameExtension(e.target.value)}/>
            </div>
            <div>
                <label>Email:</label>
                <textarea value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Date of Birth:</label>
                <input type="date" value={date_of_birth} onChange={(e) => setDateofBirth(e.target.value)}/>
            </div>
            <div>
                <label>Place of Birth:</label>
                <input type="text" value={place_of_birth} onChange={(e) => setPlaceofBirth(e.target.value)}/>
            </div>
            <div>
                <label>Gender:</label>
                <input type="text" value={gender} onChange={(e) => setGender(e.target.value)}/>
            </div>
            <div>
                <label>Civil Status:</label>
                <input type="text" value={civil_status} onChange={(e) => setCivilStatus(e.target.value)}/>
            </div>
            <div>
                <label>Height:</label>
                <input type="number" value={height_m} onChange={(e) => setHeigt(e.target.value)}/>
            </div>
            <div>
                <label>Weight:</label>
                <input type="number" value={weight_kg} onChange={(e) => setWeight(e.target.value)}/>
            </div>
            <div>
                <label>Blood Type:</label>
                <input type="text" value={blood_type} onChange={(e) => setBloodType(e.target.value)}/>
            </div>
            <div>
                <label>Citizenship:</label>
                <input type="text" value={citizenship} onChange={(e) => setCitizenship(e.target.value)}/>
            </div>
            <div>
                <label>House Number:</label>
                <input type="text" value={permanent_house_no} onChange={(e) => setHouseNo(e.target.value)}/>
            </div>
            <div>
                <label>Street:</label>
                <input type="text" value={permanent_street} onChange={(e) => setStreet(e.target.value)}/>
            </div>
            <div>
                <label>Subdivision:</label>
                <input type="text" value={permanent_subd} onChange={(e) => setSubdivision(e.target.value)}/>
            </div>
            <div>
                <label>Barangay:</label>
                <input type="text" value={permanent_brgy} onChange={(e) => setBarangay(e.target.value)}/>
            </div>
            <div>
                <label>City:</label>
                <input type="text" value={permanent_city} onChange={(e) => setCity(e.target.value)}/>
            </div>
            <div>
                <label>Province:</label>
                <input type="text" value={permanent_province} onChange={(e) => setProvince(e.target.value)}/>
            </div>
            <div>
                <label>Zip Code:</label>
                <input type="number" value={permanent_zipcode} onChange={(e) => setZipCode(e.target.value)}/>
            </div>
            <div>
                <label>Mobile Number:</label>
                <input type="number" value={mobile_number} onChange={(e) => setMobileNumber(e.target.value)}/>
            </div>
            <div>
                <label>Father's First Name:</label>
                <input type="text" value={father_first_name} onChange={(e) => setFatherFirstName(e.target.value)}/>
            </div>
            <div>
                <label>Father's Middle Name:</label>
                <input type="text" value={father_middle_name} onChange={(e) => setFatherMiddleName(e.target.value)}/>
            </div>
            <div>
                <label>Father's Surname:</label>
                <input type="text" value={father_surname} onChange={(e) => setFatherSurname(e.target.value)}/>
            </div>
            <div>
                <label>Father's Name Extension:</label>
                <input type="text" value={father_name_ext} onChange={(e) => setFatherNameExtension(e.target.value)}/>
            </div>
            <div>
                <label>Mother's First Name:</label>
                <input type="text" value={mother_first_name} onChange={(e) => setMotherFirstName(e.target.value)}/>
            </div>
            <div>
                <label>Mother's Middle Name:</label>
                <input type="text" value={mother_middle_name} onChange={(e) => setMotherMiddleName(e.target.value)}/>
            </div>
            <div>
                <label>Mother's Surname:</label>
                <input type="text" value={mother_surname} onChange={(e) => setMotherSurname(e.target.value)}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    );

};

export default ItemForm;