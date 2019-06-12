import React from 'react';
import styled from 'styled-components';
import './friends.css';

const StyledFriend = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    margin-bottom: 1rem;
    background-color: blue;
    color: white;
    border-radius: 5px;
    height: 2rem;
    align-items: center;
    
    span {
        text-align: center;
        width: 30%;
    }
`;

export default function Friend(props) {
    const { name, age, email } = props;

    return (
        <StyledFriend>
            <span>{name}</span>
            <span>{age}</span>
            <span>{email}</span>
        </StyledFriend>
    )
}