import React from 'react';
import Cart from './Cart';

class CartItem extends React.Component{
    render(){
        const {product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct} =this.props;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.images} />
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{this.props.product.title}</div>
                    <div style={{color:'777'}}>Rs:{this.props.product.price}</div>
                    <div style={{fontSize:25}}>Qty:{this.props.product.qty}</div>
                    <div className="cart-item-actions">
                        <img alt="increase" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/992/992651.svg" 
                            onClick={()=>onIncreaseQuantity(product)}   
                        />
                        <img alt="decrease" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/992/992683.svg"
                            onClick={()=>onDecreaseQuantity(product)} />
                        <img alt="delete" 
                            className="action-icons"
                            src="https://image.flaticon.com/icons/svg/1345/1345823.svg"
                            onClick={()=>onDeleteProduct(product.id)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles ={
    images:{
        height:110,
        width:110,
        borderRadius:4,
        background: '#ccc'
    }
}


export default CartItem;