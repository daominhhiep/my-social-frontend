import React from 'react'
import "./post.css"
import {MoreVert, Public} from "@material-ui/icons";

export default function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="../../../public/assets/avatar.jpg" alt="" className="postProfileImg"/>
                        <span className="postUsername">Hiep</span>
                        <span className="postDate">5 min ago</span>
                        <Public className="postPrivacy"/>
                    </div>
                    <div className="postTopRight">
                        <MoreVert className="postMenu"/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hello</span>
                    <img src={"assets/post.jpeg"} alt="" className="postImg"/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src={"assets/like.png"} alt="" className="icon"/>
                        <img src={"assets/heart.png"} alt="" className="icon"/>
                        <span className="postLikeCounter">32 like</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">90 Comment</span>
                        <span className="postCommentText">10 Share</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
