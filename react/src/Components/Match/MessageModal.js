import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import Chatbox from './Chatbox';

const MessageModal = ({ MessageModal, setMessageModal }) => {
    const convoStyle = {
        height: "100px",
        overflow: "hidden",
        margin: "0px",
        backgroundColor: "#FFF4E0",
        border: "solid gray 1px"
    }

    const [messages, setMessages] = useState([]);
    const [activeChat, setActiveChat] = useState(false);
    const [chats, setChats] = useState(false);
    const [matchedUsers, setMatchedUsers] = useState([]);

    useEffect(() => {
        const unique = new Set();
        const users = [];
        axios.get("/api/get-matched-users", { headers: { "X-CSRFTOKEN": Cookies.get("csrftoken") } })
            .then(res => {
                setMatchedUsers(res.data);
            }).catch(err => {
                console.log(err)
            })
    }, [])

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

                        {matchedUsers.map(match => {
                            return (
                                <li class="list-group-item" style={convoStyle} onClick={(e) => {
                                    console.log(match)
                                    setActiveChat(match);
                                }}>
                                    <p class="font-weight-bold">Name:</p>
                                    <p>Previous message:</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>


            {activeChat ? (
                <Chatbox activeChat={activeChat} />) : ""}





        </div>
    )
        ;
};

export default MessageModal;
