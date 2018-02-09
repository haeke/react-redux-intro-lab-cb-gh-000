
import React from 'react';

const InventoryList = (props) => {
  return (
    <ul className="list-group">
      {props.inventoryItems.map((item, index) => {
        return <li key={index} className="list-group-item">item: {item.description}, quantity: {item.quantity}</li>
      })}
    </ul>
  );
};

export default InventoryList;
