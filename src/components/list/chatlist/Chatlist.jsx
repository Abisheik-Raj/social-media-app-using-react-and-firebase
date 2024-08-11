import { useState } from "react";
import "./chatlist.css"
import AddUser from "./adduser/AddUser";

function ChatList() {
    const [add,setAddMode] = useState(false);

    return <div className="chatlist">
        <div className="search">
            <div className="search-bar">
                <img src="./search.png" alt="" />
                <input type="text" placeholder="Search" />
            </div>
            <img src= { add ? "./minus.png" :  "./plus.png"} alt="" className="add-img"  onClick={ () => {
                setAddMode((prev) => !prev);
            }}/>
        </div>

        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>someone</span>
                <p>lorem</p>
            </div>
        </div>

        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>someone</span>
                <p>GoodBye</p>
            </div>
        </div>

        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>someone</span>
                <p>GoodBye</p>
            </div>
        </div>

        {add && <AddUser></AddUser>}
    </div>
}

export default ChatList;