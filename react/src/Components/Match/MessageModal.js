import React from 'react';
import { useState } from 'react';
const MessageModal = ({ MessageModal, setMessageModal }) => {
    const convoStyle = {
        height: "100px",
        overflow: "hidden",
        margin: "0px",
        backgroundColor: "#FFF4E0",
        border: "solid gray 1px"
    }

    const [activeChat, setActiveChat] = useState(false);
    return (
        <div class="vh-100 w-100" style={{ position: "absolute", backgroundColor: "rgba(0, 0, 0, 0.4)", zIndex: "4" }} onClick={(e) => {
            e.preventDefault();
            setMessageModal(false);
        }}>
            <div class="card bg-light" style={{ height: "100%", width: "15%", position: "absolute", zIndex: "5", overflow: "auto" }} onClick={(e) => e.stopPropagation()}>
                <div class="card-header" style={{ backgroundColor: "#FFF4E0" }}>
                    <h1>Messages</h1>
                </div>
                <div class="card-body " style={{ backgroundColor: "#FFF4E0", padding: "0" }}>
                    <ul class="list-group list-group-flush" >
                        <li class="list-group-item" style={convoStyle} onClick={(e) => {
                            setActiveChat(true);
                        }}>
                            <p class="font-weight-bold">Name:</p>
                            <p>Previous message:</p>
                        </li>

                    </ul>
                </div>
            </div>


            {activeChat ? (
                <div class="card bg-light d-flex " style={{ height: "70%", width: "35%", position: "absolute", right: "45%", top: "10%", zIndex: "5", overflow: "auto" }} onClick={(e) => e.stopPropagation()}>
                    <div class="card-header " style={{ backgroundColor: "#FFF4E0" }}>
                        <h1>Name here</h1>
                    </div>
                    <div class="card-body" style={{ backgroundColor: "#FFF4E0" }}>

                    </div>

                    <div class="card-footer" style={{ backgroundColor: "#FFF4E0" }}>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Enter a message..." />
                            <div class="input-group-append">
                                <button class="btn btn-info text-black" type="button">Send</button>
                            </div>
                        </div>


                    </div>
                </div>) : ""}





        </div>
    )
        ;
};

export default MessageModal;
