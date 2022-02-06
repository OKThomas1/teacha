import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const Chatbox = ({ activeChat }) => {

    const [messages, setMessages] = useState([]);

    const sendMessage = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        axios.get("/api/get-messages", { headers: { "X-CSRFTOKEN": Cookies.get("csrftoken") } })
            .then(res => {
                console.log(res.data);
                const result = res.data.filter((msg) => {
                    return msg.sender == activeChat.username || msg.receiver == activeChat.username
                })
                setMessages(result);

            }).catch(err => {
                console.log(err)
            })
    }, [])

    return <div className="card bg-light d-flex "
        style={{ height: "70%", width: "35%", position: "absolute", right: "30%", top: "10%", zIndex: "5", overflow: "auto" }}
        onClick={(e) => e.stopPropagation()}>
        <div class="card-header " style={{ backgroundColor: "#FFF4E0" }}>
            <h1>Name here</h1>
        </div>

        <div className="card-body d-flex flex-column overflow-hidden" style={{ backgroundColor: "#FFF4E0" }} >
            {messages?.map((message) => {
                <button className={message?.sender == activeChat?.username ? "btn btn-secondary align-self-start" : "btn btn-info align-self-end"} onClick={(e) => {
                    e.preventDefault();
                }}>{message.message}</button>
            })}
        </div>


        <div class="card-footer" style={{ backgroundColor: "#FFF4E0" }}>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Enter a message..." />
                <div class="input-group-append">
                    <button class="btn btn-info text-black" type="button">Send</button>
                </div>
            </div>
        </div>
    </div>;
};

export default Chatbox;
