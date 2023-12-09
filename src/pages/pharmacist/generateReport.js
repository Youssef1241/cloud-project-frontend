import React, { useState, useEffect } from 'react';
import CardActions from "../../UI/CardActions";
import CardBody from "../../UI/CardBody";
import CardHearder from "../../UI/CardHearder";
import Card from "../../UI/Card";
import Layout from "../../UI/Layout";

const productsData = [
 
];

const ProductsReport = () => {
  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {
    setProductInfo(productsData);
  }, []);

  return (
    <div>
      <h2>Products Report</h2>
      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Illness</th>
            <th>Price</th>
            <th>imgURL</th>
            <th>Quantity</th>
            <th>Supplier ID</th>
          </tr>
        </thead>
        <tbody>
          {productInfo.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.illness}</td>
              <td>{product.price}</td>
              <td>{product.imgURL}</td>
              <td>{product.quantity}</td>
              <td>{product.supplierId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsReport;