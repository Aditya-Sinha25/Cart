import React from 'react';

class CartItem extends React.Component{
    render(){
        return(
            <div className="card-item">
                <div className="left-block">

                </div>
                <div className="right-block">
                    <div>Phone</div>
                    <div>Rs 999</div>
                    <div>Qty:1</div>
                    <div className="cart-item-actions"></div>
                </div>
            </div>
        );
    }
}


export default CartItem;