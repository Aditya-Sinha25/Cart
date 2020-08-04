import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state= {
            price:999,
            title:'Phone',
            qty:1
        }
    }
        increaseQuantity = () =>{
            this.setState((prevState)=>{
                return{
                    qty:prevState.qty+1
                }
            });
        }
        decreaseQuantity = () =>{
            this.setState((prevState)=>{
                return{
                    qty:prevState.qty-1
                }
            });
        }
    render(){
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.images} />
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{this.state.title}</div>
                    <div style={{color:'777'}}>Rs:{this.state.price}</div>
                    <div style={{fontSize:25}}>Qty:{this.state.qty}</div>
                    <div className="cart-item-actions">
                        <img alt="increase" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/992/992651.svg" 
                            onClick={this.increaseQuantity} />
                        <img alt="decrease" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/992/992683.svg"
                            onClick={this.decreaseQuantity} />
                        <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/svg/1345/1345823.svg" />
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