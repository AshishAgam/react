import React from "react";

const UserCart = (props) => {
    console.log(props.data);
    
    return (
        <div className="user-cart">
            <img className="user-image"/>
            <h3>{props.data.name.first}</h3>
            <p>{props.data.phone}</p>
            <p>{props.data.location.city}, {props.data.location.state}</p>
        </div>
    );
};

export default UserCart;