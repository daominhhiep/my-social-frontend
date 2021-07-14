import React from 'react'
import "./rightbar.css"
import {Cake} from "@material-ui/icons";

export default function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <Cake htmlColor={"tomato"} className="birthdayImg"/>
                    <span className="birthdayText">
                        <b>Hiep</b> and <b>3 other friends</b> have birthday today
                    </span>
                </div>
                <img src={"assets/ads.jpg"} alt="" className="rightbarAd"/>
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src={"assets/avatar.jpg"} alt="" className="rightbarProfileImg"/>
                            <span className="rightbarOnline"/>
                        </div>
                        <span className="rightbarUsername">Hiep</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src={"assets/avatar.jpg"} alt="" className="rightbarProfileImg"/>
                            <span className="rightbarOnline"/>
                        </div>
                        <span className="rightbarUsername">Hiep</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src={"assets/avatar.jpg"} alt="" className="rightbarProfileImg"/>
                            <span className="rightbarOnline"/>
                        </div>
                        <span className="rightbarUsername">Hiep</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src={"assets/avatar.jpg"} alt="" className="rightbarProfileImg"/>
                            <span className="rightbarOnline"/>
                        </div>
                        <span className="rightbarUsername">Hiep</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src={"assets/avatar.jpg"} alt="" className="rightbarProfileImg"/>
                            <span className="rightbarOnline"/>
                        </div>
                        <span className="rightbarUsername">Hiep</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src={"assets/avatar.jpg"} alt="" className="rightbarProfileImg"/>
                            <span className="rightbarOnline"/>
                        </div>
                        <span className="rightbarUsername">Hiep</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src={"assets/avatar.jpg"} alt="" className="rightbarProfileImg"/>
                            <span className="rightbarOnline"/>
                        </div>
                        <span className="rightbarUsername">Hiep</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
