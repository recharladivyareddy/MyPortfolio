import React from 'react';
import {useState} from 'react';
import InputField from './InputField';
function Form() {
    const formConfig = [
        { id: 1, type: "text", name: "firstName", placeholder: "First Name" 
       },
        { id: 2, type: "text", name: "lastName", placeholder: "Last Name" },
        { id: 3, type: "email", name: "email", placeholder: "Email" },
       ];
    const [formData, setFormData] = useState({ firstName: "", lastName: 
   "", email: "" });
    function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prevState => ({
    ...prevState,
    [name]: value
    }));
    }
    function handleSubmit(event) {
    event.preventDefault(); // Prevents the default form submit action
    console.log('Submitted Data:', formData);
    }
    return (
    <form onSubmit={handleSubmit}>
    {formConfig.map(field => (
    <InputField
    key={field.id}
    type={field.type}
    name={field.name}
    placeholder={field.placeholder}
    value={formData[field.name]}
    onChange={handleChange}
    />
    ))}
    <button type="submit">Submit</button>
    </form>
    );
   }
   
export default Form;