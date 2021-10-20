import React, { Component } from 'react'
import { DropTarget } from 'react-dnd'
import DisplayPhone from './DisplayPhone'
import { ItemTypes } from './Constants'

// DnD Spec 
const ShoppingCartSpec = { 
    drop () { 
        return {name: 'ShoppingCart'} 
    } 
}

// DnD DropTarget - collect
let collect = ( connect, monitor )=>{
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    };
}



class ShoppingCart extends Component{
    render(){
        const { canDrop, isOver, connectDropTarget } = this.props;
        const  isActive = canDrop && isOver;

        let backgroundColor = '#FFFFFF';
        if (isActive){
            backgroundColor ='#F7F7BD';
        } else if (canDrop){
            backgroundColor = '#F7F7F7';
        }
        const style={
            backgroundColor: backgroundColor
        };
        return connectDropTarget(
            <div className="shopping-cart" style={ style } >
                { !this.props.inCart_phones.length  &&
                    (isActive
                    ? 'Humm, phone!'
                    : 'Drag here to order!')
                }
                { this.props.inCart_phones.length
                ? <DisplayPhone displayPhones = {this.props.inCart_phones} />
                : null
                }
            </div>
        )
    }
}
export default DropTarget(ItemTypes.PHONE, ShoppingCartSpec, collect)(ShoppingCart);