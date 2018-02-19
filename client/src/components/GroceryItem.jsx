import React from 'react';

const GroceryItem = (props) => (
  <div>{props.item.item} {props.item.quantity}</div>
);

export default GroceryItem;