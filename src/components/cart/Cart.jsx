import React from 'react';
import { StyledCart, Button } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem } from '../../actions/cartActions';

const Cart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <StyledCart>
      <h2>Number of items in Cart {state.numOfItems}</h2>
      <Button onClick={() => dispatch(addItem())}>Add item to Cart</Button>
      <Button
        bgColor="red"
        onClick={() => dispatch(deleteItem())}
        disabled={state.numOfItems > 0 ? false : true}
      >
        Remove item to Cart
      </Button>
    </StyledCart>
  );
};

export default Cart;
