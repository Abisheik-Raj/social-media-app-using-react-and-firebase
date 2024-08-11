import { useEffect, useRef, useState } from "react";
import "./chat.css"
import EmojiPicker from "emoji-picker-react";

function Chat() {

    const [emojiOpen,setEmojiOpen] = useState(false);
    const [text,setText] = useState("");

    const endRef = useRef(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({behavior:"smooth"})
    },[])


    function handleEmojiClick(e) {
        console.log(e.emoji);
        setText((prev) => prev + e.emoji)
        setEmojiOpen(false);
    }

    return <div className="chat">
        <div className="top">
            <div className="user">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>someone</span>
                    <p>user description</p>
                </div>
            </div>
            <div className="icons">
                <img src="./phone.png" alt="" />
                <img src="./video.png" alt="" />
                <img src="./info.png" alt="" />
            </div>
        </div>
        <div className="center">
            <div className="message">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi adipisci debitis totam </p>
                    <span>1 m1in ago</span>
                </div>
            </div>
            <div className="message-own">
                <div className="texts">
                    <img src="./naruto-image.png" alt="" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi adipisci debitis totam </p>
                    <span>1 min ago</span>
                </div>
            </div>

            <div className="message">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi adipisci debitis totam </p>
                    <span>1 m1in ago</span>
                </div>
            </div>
            <div className="message-own">
                <div className="texts">
                    <img src="./naruto-image.png" alt="" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi adipisci debitis totam </p>
                    <span>1 min ago</span>
                </div>
            </div>

            <div className="message">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi adipisci debitis totam </p>
                    <span>1 m1in ago</span>
                </div>
            </div>
            <div className="message-own">
                <div className="texts">
                    <img src="./naruto-image.png" alt="" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi adipisci debitis totam </p>
                    <span>1 min ago</span>
                </div>
            </div>

            <div ref={endRef}></div>
        </div>
        <div className="bottom">
            <div className="icons">
                <img src="./img.png" alt="" />
                <img src="./camera.png" alt="" />
                <img src="./mic.png" alt="" />
            </div>
            <input type="text" placeholder="Type a message" onChange={(e) => {
                setText(e.target.value);
                }
            }
            value={text}
            />
            <div className="emoji-container">
                <img src="./emoji.png" alt="" onClick={() => {setEmojiOpen((prev) => !prev)}}/>
               
                <div className="picker">
                    <EmojiPicker open = {emojiOpen} onEmojiClick={(e) => handleEmojiClick(e)} ></EmojiPicker>
                </div> 
            </div>
            <button className="send-button">Send</button>
        </div>
    </div>
}

export default Chat;