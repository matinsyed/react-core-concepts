import { Suspense, use } from "react";



export default function Users({fetchUser}){
    const userList = use(fetchUser);
    return(
        <div className="card"><h2>User: {userList.length}</h2></div>
        
    )
}