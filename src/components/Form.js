import React, { useState } from "react";

import styled from 'styled-components';


const FormWrapper = styled.div`
    margin: 5rem auto;
    width: 25%;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 1px 6px -2px #000;
    background-color: #FFF;
    margin-bottom: 30px;
`;

const FormDiv = styled.form`
    height:10rem;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

const Form = props => {

  const initialEntry = { name: "", email: "", role: "" };

  const [newMember, setNewMember] = useState(initialEntry);

  const handleChange = event => {
    setNewMember({
      ...newMember,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!newMember.name || !newMember.email || !newMember.role) {
      alert("Please fill out both fields!");
    } else {

        // if (!props.members.name){

        //     props.setMember([newMember]);

        // } else {

            props.setMember([newMember, ...props.members]);

        // }

      
      resetForm();
    }
  };

  const resetForm = () => {
    setNewMember(initialEntry);
  };


  console.log(newMember);

  return (

    <FormWrapper>
        <FormDiv onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                value={newMember.name}
            />

            <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={newMember.email}
            />

            <select name="role" onChange={handleChange}>
                <option value="null">- Select A Role -</option>
                <option value="Backend Engineer">Backend Engineer</option>
                <option value="Frontend Engineer">Frontend Engineer</option>
                <option value="Designer">Designer</option>
            </select>

            
            <button type="submit">Submit</button>
            <button type="button" onClick={resetForm}>
                Reset
            </button>
        </FormDiv>
    </FormWrapper>
  );
};

export default Form;