import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import { Container, Navbar, SelectWrapper, Select, Logo } from "./styles";

const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getData();
    getCategories();
  }, []);

  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products/");
    const data = await response.json();
    setProducts(data);
  };

  const getCategories = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories/"
    );
    const data = await response.json();
    setCategories(data);
  };

  const selectCategory = async (event) => {
    if (event.target.value === "all") {
      getData();
      return;
    }

    const response = await fetch(
      `https://fakestoreapi.com/products/category/${event.target.value}`
    );
    const data = await response.json();
    setProducts(data);
  };

  return (
    <Container>
      <Navbar>
        <Logo href="/">
          <h1>Store</h1>
        </Logo>
        <SelectWrapper>
          <Select
            onChange={selectCategory}
            name="categories"
            id=""
            defaultValue="default"
          >
            <option value="default" disabled hidden>
              Select Category
            </option>
            {categories?.map((category, idx) => (
              <option key={idx} value={category}>
                {category}
              </option>
            ))}
            <option value="all">all products</option>
          </Select>
        </SelectWrapper>
      </Navbar>
      <section>
        <ProductCard products={products} />
      </section>
    </Container>
  );
};

export default App;
