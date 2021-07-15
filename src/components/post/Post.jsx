import React, {useState} from 'react'
import "./post.css"
import {MoreVert, Public} from "@material-ui/icons";
import {Users} from "../../../dummyData";

export default function Post(props) {
    const {post} = props
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);
    const user = Users.filter(u => u.id === post.userId)[0]

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={user.profilePicture} alt="" className="postProfileImg"/>
                        <span className="postUsername">{user.username}</span>
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
                        <img src={"assets/like.png"} alt="" className="icon" onClick={likeHandler}/>
                        <img src={"assets/heart.png"} alt="" className="icon" onClick={likeHandler}/>
                        <span className="postLikeCounter">{like} like</span>
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
