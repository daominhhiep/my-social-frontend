import React from 'react'
import "./feed.css"
import Post from "../share/Share";

export default function Feed() {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Post/>
            </div>
        </div>
    )
}
