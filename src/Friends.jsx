import { use } from "react"
import Friend from "./Friend"

export default function Friends({friendsResponse}){
    const friends = use(friendsResponse)
     
    // console.log(friends)
    return(
        <div className="card">
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend=><Friend friend={friend}></Friend>)

            }
        </div>
    )
}