import React from 'react';

const Chatbox = () => {
    return <div class="card bg-light d-flex "
        style={{ height: "70%", width: "35%", position: "absolute", right: "30%", top: "10%", zIndex: "5", overflow: "auto" }}
        onClick={(e) => e.stopPropagation()}>
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
    </div>;
};

export default Chatbox;
