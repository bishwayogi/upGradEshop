import React, { createContext, useState } from 'react';

export const ProdContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productItem, setproductItem] = useState([]);
  const [orderdDtl, setorderdDtl] = useState([]);
  const [delAddress, setdelAddress] = useState([{name:"User" ,
    ContactNo: "2204520",
    addType: "Home",
    address: "Mumbai",
    State: "Maharashtra",
    city: "Mumbai",
    zipcode: 400083}]);
  
  const getProduct = (data) => {
    setproductItem(data);
  }; 
  const getorderdDtl = (dtl) => {
    setorderdDtl(dtl);
  }; 

  const getdelAddress = (adddtl) => {
    setdelAddress(adddtl);
  }; 
  
  return (
    <ProdContext.Provider value={{ productItem,orderdDtl,delAddress,getProduct,getorderdDtl,getdelAddress }}>
      {children}
    </ProdContext.Provider>
  );
};