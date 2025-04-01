// import React from "react";
import {use} from "react";
import Post from "./Post";

export default function Posts({postsResponse}){
    const allPost = use(postsResponse);
    // console.log(allPost);
    return(
        <div className="card">
            <h3>
                All Posts are here.
                {
                    allPost.map(post => <Post post={post}></Post>)
                }
            </h3>
        </div>
    )
}