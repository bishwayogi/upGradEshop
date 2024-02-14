import React, { createContext, useState } from 'react';

export const ProdContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productItem, setproductItem] = useState([]);
  const [orderdDtl, setorderdDtl] = useState([]);
  
  const getProduct = (data) => {
    setproductItem(data);
  }; 
  const getorderdDtl = (dtl) => {
    setorderdDtl(dtl);
  }; 
  
  return (
    <ProdContext.Provider value={{ productItem,orderdDtl,getProduct,getorderdDtl }}>
      {children}
    </ProdContext.Provider>
  );
};