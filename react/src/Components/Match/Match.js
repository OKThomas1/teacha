import React from 'react';
import { useState, useEffect } from 'react';
import { MdFavorite, MdCancel, MdArrowBackIosNew } from 'react-icons/md';
import { AiFillStar } from 'react-icons/ai';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';
import { ImCancelCircle } from 'react-icons/im';
import { BiMessageDetail, BiNoEntry } from 'react-icons/bi';
import { BsFillSkipBackwardCircleFill } from 'react-icons/bs';
import MessageModal from './MessageModal';
import { Link } from 'react-router-dom';

export const Match = () => {
    const image = {
        width: "100%", // note to change picture height based on display size, implement if time allows
        objectFit: "cover",
        overflow: "hidden",
        maxHeight: "40rem"
    }

    const matchButton = {
        width: "100px",
        height: "100px",
        padding: "10px 16px",
        borderRadius: "50px",
        border: "black solid 2px"
    }

    const messageButtonDiv = {
        backgroundColor: "none",
        border: "none",
        position: "absolute",
        right: "25%",
        top: "1%",
        fontSize: "60px",

    }

    const backButtonDiv = {
        backgroundColor: "none",
        border: "none",
        position: "absolute",
        left: "23%",
        top: "1%",
        fontSize: "60px",

    }

    const menuButton = {
        border: "none",
        position: "absolute"
    }


    const [messageModal, setMessageModal] = useState(false);

    return (
        <div className="vh-100 w-100 text-center d-flex justify-center" style={{ backgroundColor: "#FFF4E0" }} >
            {messageModal ? (<MessageModal MessageModal={MessageModal} setMessageModal={setMessageModal} />) : " "}



            <div className=" w-75 m-auto" style={{ height: "90%", borderRadius: "2rem", overflow: "hidden", backgroundColor: "#8ac6d1" }}>

                <button style={messageButtonDiv} onClick={(e) => {
                    e.preventDefault();
                    setMessageModal(true);
                }}>
                    <BiMessageDetail style={menuButton} />
                </button>

                <button style={backButtonDiv}>
                    <Link to="/home">
                        <MdArrowBackIosNew style={menuButton} />
                    </Link>

                </button>



                <div className="">
                    <img src="https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg" style={image} />
                </div>
                <div className="lowerPanel d-flex flex-column justify-content-around mx-5 my-3">
                    <div className="intro text-left" >
                        <h1>Emily</h1>
                        <p className="introText overflow-hidden" style={{ maxHeight: 110, height: 110 }}>
                            <p className="font-weight-bold">Description: </p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>

                    </div>

                    <div className="buttons d-flex justify-content-around mt-2">
                        <div class="buttonDiv d-flex flex-column text-center" >
                            <button class="btn btn-light" style={matchButton}>
                                < BsFillSkipBackwardCircleFill style={{ width: "100%", fontSize: "40px", color: "blue" }} />
                            </button>

                        </div>
                        <div class="buttonDiv d-flex flex-column" >
                            <button class="btn btn-light" style={matchButton}>
                                <MdCancel style={{ width: "100%", fontSize: "40px", color: "red" }} />
                            </button>

                        </div>
                        <div class="buttonDiv d-flex flex-column text-center" >
                            <button class="btn btn-light" style={matchButton}>
                                <IoCheckmarkCircleSharp style={{ width: "100%", fontSize: "40px", color: "green" }} />
                            </button>

                        </div>
                        <div class="buttonDiv d-flex flex-column text-center pb-2" >
                            <button class="btn btn-light " style={matchButton}>
                                <AiFillStar style={{ width: "100%", fontSize: "40px", color: "orange" }} /> </button>

                        </div>

                    </div>

                </div>


            </div>
        </div >

    )
};