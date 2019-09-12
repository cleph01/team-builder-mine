import React from "react";

import styled from 'styled-components';


const MemberCard = styled.div`
    margin: .5rem auto;
    width: 25%;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 1px 6px -2px #000;
    background-color: #FFF;
    margin-bottom: 30px;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-around;
`;


function MemberList(props) {
  return (
    <>
      {props.members.map((member, index) => (

        !member.name ?  
        
            <MemberCard key={index}>
                <h2>No Members</h2>
            </MemberCard>
        :
            <MemberCard key={index}>
            <h2>{member.name}</h2>
            <h5>{member.role}</h5>
            <p>{member.email}</p>
            </MemberCard>
        

      ))}
    </>
  );
}

export default MemberList;