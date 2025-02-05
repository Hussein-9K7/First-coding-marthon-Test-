import React, { useState } from 'react';

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState(1);

  // إضافة عنصر إلى السلة
  const addItem = (e) => {
    e.preventDefault();
    if (itemName && quantity > 0) {
      const newItem = { itemName, quantity };
      setCart([...cart, newItem]);
      setItemName('');
      setQuantity(1);
    }
  };

  // تعديل الكمية
  const updateQuantity = (index, newQuantity) => {
    const updatedCart = cart.map((item, i) => 
      i === index ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  // حذف عنصر من السلة
  const deleteItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <form onSubmit={addItem}>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Item Name"
        />
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          placeholder="Quantity"
          min="1"
        />
        <button type="submit">Add Item</button>
      </form>
      
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.itemName} - Quantity: {item.quantity}
            <button onClick={() => updateQuantity(index, item.quantity + 1)}>Increase</button>
            <button onClick={() => updateQuantity(index, item.quantity - 1)} disabled={item.quantity <= 1}>Decrease</button>
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
