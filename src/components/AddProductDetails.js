import React, { useState } from 'react';

const AddProductDetails = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // perform form validation here
    console.log(`Product Name: ${name}\nProduct Description: ${description}\nProduct Price: ${price}\nProduct Quantity: ${quantity}`);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const validateForm = () => {
    // perform form validation here
    // return true if form is valid, false otherwise
  };

  const isNameValid = () => {
    // check if name is valid
    // return true if valid, false otherwise
  };

  const isDescriptionValid = () => {
    // check if description is valid
    // return true if valid, false otherwise
  };

  const isPriceValid = () => {
    // check if price is valid
    // return true if valid, false otherwise
  };

  const isQuantityValid = () => {
    // check if quantity is valid
    // return true if valid, false otherwise
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="product-name">
          Product Name
        </label>
        <input
          className={`${
            isNameValid() ? 'border-green-500' : 'border-red-500'
          } border-2 w-full px-3 py-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
          id="product-name"
          type="text"
          placeholder="Enter product name"
          value={name}
          onChange={handleNameChange}
        />
        {!isNameValid() && (
          <p className="text-red-500 text-xs italic">Please enter a valid product name.</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="product-description">
          Product Description
        </label>
        <textarea
          className={`${
            isDescriptionValid() ? 'border-green-500' : 'border-red-500'
          } border-2 w-full px-3 py-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
          id="product-description"
          placeholder="Enter product description"
          value={description}
          onChange={handleDescriptionChange}
        ></textarea>
        {!isDescriptionValid() && (
          <p className="text-red-500 text-xs italic">
            Please enter a valid product description.
          </p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="product-price">
          Product Price
        </label>
        <input  className={`${isPriceValid() ? 'border-green-500' : null }`} />
        </div>
    </form>
  )
}

export default AddProductDetails;
