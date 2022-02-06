import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const Chatbox = () => {
    const sendMessage = (e) => {
        e.preventDefault();


    }
    return <div className="card bg-light d-flex "
        style={{ height: "70%", width: "35%", position: "absolute", right: "30%", top: "10%", zIndex: "5", overflow: "auto" }}
        onClick={(e) => e.stopPropagation()}>
        <div class="card-header " style={{ backgroundColor: "#FFF4E0" }}>
            <h1>Name here</h1>
        </div>

        <div className="card-body d-flex flex-column" style={{ backgroundColor: "#FFF4E0" }} >
            <button className="btn btn-dark align-self-end"> test </button>
            <button className="btn btn-dark align-self-start"> test </button>

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
