import "./detail.css"


function Detail() {
    return <div className="detail">
        <div className="user">
            <img src="./avatar.png" alt="" />
            <h2>Someone</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing </p>
        </div>
        <div className="info">
            <div className="option">
                <div className="title">
                    <span>Chat Settings</span>
                    <img src="./arrow-up.png" alt="" />
                </div>
            </div>
            <div className="option">
                <div className="title">
                    <span>Privacy & help</span>
                    <img src="./arrow-up.png" alt="" />
                </div>
            </div>
            <div className="option">
                <div className="title">
                    <span>Shared photos</span>
                    <img src="./arrow-down.png" alt="" />
                </div>
            </div>
            <div className="photos">
                <div className="photo-item">
                    <div className="photo-detail">
                        <img src="./naruto-image.png" alt="" />
                        <span>Photo_2024.png</span>
                    </div>
                    <img src="./download.png" className="download-img" alt="" />
                </div>

                <div className="photo-item">
                    <div className="photo-detail">
                        <img src="./naruto-image.png" alt="" />
                        <span>Photo_2024.png</span>
                    </div>
                    <img src="./download.png" className="download-img" alt="" />
                </div>
            </div>
                
            <div className="option">
                <div className="title">
                    <span>Shared Files</span>
                    <img src="./arrow-up.png" alt="" />
                </div>
            </div>
            <button>Block User</button>
            <button className="logout">Logout</button>
        </div>
    </div>
}

export default Detail;