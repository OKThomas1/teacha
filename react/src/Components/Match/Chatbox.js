import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const Chatbox = ({ activeChat, user }) => {

    const [messages, setMessages] = useState([
        {
            sender: { username: "kouyingcheng" },
            receiver: { username: "kouyingcheng4" },
            message: "Hello nice to meet you!"
        }, {
            sender: { username: "kouyingcheng4" },
            receiver: { username: "kouyingcheng" },
            message: "Hey nice to meet you too!"
        },
        {
            sender: { username: "kouyingcheng" },
            receiver: { username: "kouyingcheng4" },
            message: "I would love to hear about your experiences"
        }, {
            sender: { username: "kouyingcheng4" },
            receiver: { username: "kouyingcheng" },
            message: "Sure let's grab a coffee and talk!"
        },

    ]);
    const [input, setInput] = useState("");

    const sendMessage = (e) => {
        e.preventDefault()
        axios({
            method: "POST", url: "api/send-message",
            data: {
                username: activeChat.username,
                message: input
            },
            headers: {
                "X-CSRFTOKEN": Cookies.get("csrftoken")
            }
        }).then()
            .catch(err => console.log(err.response))
    }

    // useEffect(() => {
    //     axios.get("/api/get-messages", { headers: { "X-CSRFTOKEN": Cookies.get("csrftoken") } })
    //         .then(res => {
    //             console.log(res.data);
    //             // const result = res.data.filter((msg) => {
    //             //     return msg.sender.username == activeChat.username || msg.receiver.username == activeChat.username
    //             // })
    //             setMessages(res.data)
    //             console.log(activeChat.username)
    //         }).catch(err => {
    //             console.log(err.response)
    //         })
    // }, [])

    return <div className="card bg-light d-flex "
        style={{ height: "70%", width: "35%", position: "absolute", right: "30%", top: "10%", zIndex: "5", overflow: "auto" }}
        onClick={(e) => e.stopPropagation()}>
        <div class="card-header " style={{ backgroundColor: "#FFF4E0" }}>
            <h1>{activeChat.first_name} {activeChat.last_name}</h1>
        </div>

        <div className="card-body d-flex flex-column overflow-auto" style={{ backgroundColor: "#FFF4E0" }} >
            {messages?.map((message) => {
                return (<button className={message.sender.username === user.username ? "btn btn-info align-self-end my-2" : "btn btn-secondary align-self-start"} onClick={(e) => {
                    e.preventDefault();
                }}>{message.message}</button>)
            })}

        </div>


        <div class="card-footer" style={{ backgroundColor: "#FFF4E0" }}>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Enter a message..." value={input}
                    onChange={(e) => {
                        setInput(e.target.value)
                    }} />
                <div class="input-group-append">
                    <button class="btn btn-info text-black" type="button" onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    </div>;
};

export default Chatbox;
