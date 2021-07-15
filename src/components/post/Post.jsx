import React from 'react'
import "./post.css"
import {MoreVert, Public} from "@material-ui/icons";

export default function Post(props) {
    const { post } = props
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={"assets/avatar.jpg"} alt="" className="postProfileImg"/>
                        <span className="postUsername">Hiep</span>
                        <span className="postDate">{post.date}</span>
                        <Public className="postPrivacy"/>
                    </div>
                    <div className="postTopRight">
                        <MoreVert className="postMenu"/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.desc}</span>
                    <img src={post.photo} alt="" className="postImg"/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src={"assets/like.png"} alt="" className="icon"/>
                        <img src={"assets/heart.png"} alt="" className="icon"/>
                        <span className="postLikeCounter">{post.like} like</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} Comment</span>
                        <span className="postCommentText">{post.share} Share</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
