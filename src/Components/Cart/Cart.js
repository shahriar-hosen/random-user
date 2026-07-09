import React from 'react';

const Cart = (props) => {
   console.log(props)
    const totalAge = props.cart.reduce((total, current)=> 
        total + Number (current.dob.age)
    ,0)
    return (
        <div>
            <h2>User Added: {props.cart.length}</h2>
            <h3>Addition of Ages:{totalAge} </h3>
        </div>
    );
};

export default Cart;