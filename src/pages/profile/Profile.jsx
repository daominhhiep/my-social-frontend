import React from 'react'
import "./profile.css"
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import Info from "../../components/info/info";

export default function Profile(){
    return (
        <>
        <Topbar/>
        <div className="profile">
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img src={"assets/cover.jpeg"} alt="" className="profileCoverImg"/>
                        <img src={"assets/avatar.jpg"} alt="" className="profileUserImg"/>
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Minh Hiep</h4>
                        <span className="profileInfoDesc">Hello</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Info/>
                    <Feed/>
                </div>
            </div>

        </div>
        </>
    )
}
