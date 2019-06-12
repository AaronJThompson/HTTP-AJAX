import React from 'react';
import './friends.css';
import styled from 'styled-components';

export default function FriendForm(props) {
    let { addFriend, nameInput, nameValue, ageInput, ageValue, emailInput, emailValue, updating } = props;

    return (
        <form>
            <input
                type='text'
                placeholder='name'
                value={nameValue}
                onChange={nameInput}
            />
            <input
                type='text'
                placeholder='age'
                value={ageValue}
                onChange={ageInput}
            />
            <input
                type='text'
                placeholder='email'
                value={emailValue}
                onChange={emailInput}
            />
            <input
                type='submit'
                value={updating ? 'Update Friend' : 'Add Friend'}
                onClick={addFriend}
            />
        </form>
    )
}