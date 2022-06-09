import React from "react";
import { Cards, Card, Image, Title, Price } from "../styles";

const ProductCard = ({ products }) => {
  return (
    <Cards>
      {products?.map((product) => (
        <Card key={product.id}>
          <Image src={product?.image} alt="" />
          <Title>{product?.title}</Title>
          <Price>${product?.price}</Price>
        </Card>
      ))}
    </Cards>
  );
};

export default ProductCard;
