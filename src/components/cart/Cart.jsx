import React from 'react';
import { StyledCart, Button } from './styles';

const Cart = () => {
  return (
    <StyledCart>
      <h2>Number of items in Cart</h2>
      <Button>Add item to Cart</Button>
      <Button bgColor="red">Remove item to Cart</Button>
    </StyledCart>
  );
};

export default Cart;
