import React from 'react';
import './friends.css';

export default function Friend(props) {
    const { name, age, email } = props;

    return (
        <div>
            <span>{name}</span>
            <span>{age}</span>
            <span>{email}</span>
        </div>
    )
}