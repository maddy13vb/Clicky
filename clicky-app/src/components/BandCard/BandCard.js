import React from "react";
import "./style.css";

function BandCard(props) {

    const handleClick = () => {
        console.log("Clicked!")

    }

    return (
        <div className="card">
            <div className="img-container">
                <img onClick={handleClick} className="img" alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    {/* <li>
                        <strong>Occupation:</strong> {props.occupation}
                    </li>
                    <li>
                        <strong>Location:</strong> {props.location}
                    </li> */}
                </ul>
            </div>
            <span onClick={() => props.removeBand(props.id)} className="remove">

            </span>
        </div>
    );
}

export default BandCard;
