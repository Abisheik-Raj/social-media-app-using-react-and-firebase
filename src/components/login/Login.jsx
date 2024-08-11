import { useState } from "react";
import "./login.css"
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { auth, firestore } from "../../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import upload from "../../lib/upload";

function Login() {

    const [avatar,setAvatar] = useState({file:null,url:""});
    const [loading,setLoading] = useState(false);

    function handleAvatar(e) {
        if(e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            });
        }
    }

    async function handleLogin(e) {
        setLoading(true);
        e.preventDefault();

        const formData = new FormData(e.target);
        const {username,email,password} = Object.fromEntries(formData);

        try {
            const response = await signInWithEmailAndPassword(auth,email,password);
            toast.success("User logged in Successfully")
        }catch(err) {
            console.log("Error during logging in: " + err);
            toast.error(err.message);
        }finally{
            setLoading(false);
        }
    }
    
    async function handleRegister(e) {
        setLoading(true);
        e.preventDefault();
        const formData = new FormData(e.target);
        const {username,email,password} = Object.fromEntries(formData);

        try {
            const response = await createUserWithEmailAndPassword(auth,email,password);
            const imgUrl = await upload(avatar.file);

            await setDoc(doc(firestore,"users",response.user.uid), {
                "id" : response.user.uid,
                "avatar" : imgUrl,
                "username" : username,
                "email" : email,
                "blocked" : []
            });

            await setDoc(doc(firestore,"userchats",response.user.uid), {
                "chats" : [],
            });

            toast.success("User Registered Successfully")

        }catch(err) {
            console.log("Error during registration: " + err);
            toast.error(err.message)
        }finally {
            setLoading(false);
        }
    }

    return <div className="login">
        <div className="item">
            <h2>Welcome Back!</h2>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Email" name="email"/>
                <input type="password" placeholder="Password" name="password"/>
                <button disabled = {loading}> {loading ? "Loading" : "Sign In"}</button>
            </form>
        </div>
        <div className="separator"></div>
        <div className="item">
            <h2>Create an Account</h2>
            <form onSubmit={handleRegister}>
                <div className="avatar-container">
                    <label htmlFor="file">Upload an image</label>
                    <img src={avatar.url || "./avatar.png"} alt="" />
                </div>
                <input type="file" id="file" style={{display:"none"}} onChange={handleAvatar}/>
                <input type="text" placeholder="Username" name="username"/>
                <input type="text" placeholder="Email" name="email"/>
                <input type="password" placeholder="Password" name="password"/>
                <button disabled = {loading}>{loading ? "Loading" : "Sign In"}</button>
            </form>
        </div>
    </div>
}

export default Login;