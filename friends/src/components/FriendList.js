import React from 'react';
import './friends.css';
import Friend from './Friend';
export default function FriendList(props) {
    let { friends, deleteFriend, selectFriend } = props;

    return (
        <div>
            {
                friends.map((friend) => <Friend key={friend.id} deleteFriend={deleteFriend} selectFriend={selectFriend} {...friend} />)
            }
        </div>
    )

}