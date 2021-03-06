import React from 'react'
import "./topbar.css"
import {Chat, Notifications, Person, Search} from "@material-ui/icons";

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarLeft">
                <span className="logo">Social</span>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <Search className="searchIcon"/>
                    <input type="text"
                           className="searchInput"
                           placeholder="Search for friend, post or video"/>
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <div className="topbarLink">Homepage</div>
                    <div className="topbarLink">Timeline</div>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">3</span>
                    </div>
                </div>
                <img src={"assets/avatar.jpg"} alt="" className="topbarImg"/>
            </div>
        </div>
    )
}
