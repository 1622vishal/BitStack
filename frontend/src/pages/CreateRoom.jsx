import React from 'react'
import logo from "../images/logo.png"
import {v4 as uuidV4} from 'uuid';

const CreateRoom = () => {

    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidV4();
        console.log(id);
    }

    return (
        <div className="createroomWrapper">
            <div className="formWrapper">
                <img className="homePageLogo" src={logo} alt="logo" />
                <h4 className="mainLabel">Paste Invitation ROOM ID</h4>
                <div className="inputGroup">
                    <input type="text" className="inputBox" placeholder="ROOM ID" />
                    <input type="text" className="inputBox" placeholder="USERNAME" />
                    <button className="btn joinBtn">Join</button>
                    <span className="createInfo">
                        If you don't have an invite then create &nbsp;
                        <a onClick={createNewRoom} href="" className="createNewBtn">New Room</a>
                    </span>
                </div>
            </div>
            <footer>
                <h4>Built with 💙 by <a href="https://github.com/1622vishal">Vishal</a></h4>
            </footer>
        </div>
    );
};

export default CreateRoom;