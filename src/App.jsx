import React, { useState } from 'react';
import './App.css';
import productData from './products.json';
import ProductCard from './components/ProductCard';
import SearchInput from './components/SearchInput';
import AddProduct from './components/AddProduct';

function App() {
  const [products, setProducts] = useState(productData);
  const [searchValue, setSearchValue] = useState('');

  const handleDelete = (id) => {
    const filteredProducts = [...products].filter((elem) => elem._id !== id );
    setProducts(filteredProducts);
  }

  const handleSearch = (value) => {
    setSearchValue(value);
  }

  const handleNewProduct = (newProduct) => {
    const newProductWithId = {...newProduct, _id: products.length + 1}
    setProducts([...products, newProductWithId]);
  }

  return (
    <>
      <h1>My shopping cart</h1>
      <SearchInput handleSearch={handleSearch}/>
      <AddProduct handleNewProduct={handleNewProduct}/>
      <div className="cart">
        {products.filter(elem => elem.name.toLowerCase().includes(searchValue.toLowerCase())).map(elem => {
          return <ProductCard key={elem._id} product={elem} handleDelete={handleDelete} />
        })}

      </div>
    </>
  );
}

export default App;
