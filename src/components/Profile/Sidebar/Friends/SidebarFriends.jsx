import React from 'react'
import SidebarFriendsItem from "./FriendsItem/SidebarFriendsItem";

const SidebarFriends = (props) => {
    return(
        <div className="sidebar__friends">
            <div className="sidebar__friends__header">Friends</div>

            <div className="sidebar__friends__items">
                {props.friends.map(friend => <SidebarFriendsItem key={friend.id} name={friend.name}/>)}
            </div>
        </div>
    )
}

export default SidebarFriends