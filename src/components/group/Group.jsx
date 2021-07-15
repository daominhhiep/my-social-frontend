import React from "react";
import "./group.css"

export default function Group({group}) {
    console.log(group)
    return (
        <li className="sidebarGroup">
            <img src={group.groupPicture} alt="" className="sidebarGroupImg"/>
            <span className="sidebarGroupName">{group.groupName}</span>
        </li>
    )
}
