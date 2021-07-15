import React from 'react'
import "./info.css"

export default function Info() {
    return (
        <div className="infoContainer">
            <div className="infoWrapper">
                <h4 className="title">User information</h4>
                <div className="info">
                    <div className="barInfoItem">
                        <span className="infoKey">City: </span>
                        <span className="infoValue">Hanoi</span>
                    </div>
                    <div className="infoItem">
                        <span className="infoKey">School: </span>
                        <span className="infoValue">THPT Ly Thuong Kiet</span>
                    </div>
                </div>
                <h4 className="title">User Friends</h4>
                <div className="followings">
                    <div className="following">
                        <img src="assets/avatar2.jpeg" alt="" className="followingImg"/>
                        <span className="followingName">Trang Truong</span>
                    </div>
                    <div className="following">
                        <img src="assets/avatar2.jpeg" alt="" className="followingImg"/>
                        <span className="rightbarFollowingName">Trang Truong</span>
                    </div>
                    <div className="following">
                        <img src="assets/avatar2.jpeg" alt="" className="followingImg"/>
                        <span className="rightbarFollowingName">Trang Truong</span>
                    </div>
                    <div className="following">
                        <img src="assets/avatar2.jpeg" alt="" className="followingImg"/>
                        <span className="rightbarFollowingName">Trang Truong</span>
                    </div>
                    <div className="following">
                        <img src="assets/avatar2.jpeg" alt="" className="followingImg"/>
                        <span className="rightbarFollowingName">Trang Truong</span>
                    </div>
                    <div className="following">
                        <img src="assets/avatar2.jpeg" alt="" className="followingImg"/>
                        <span className="rightbarFollowingName">Trang Truong</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
