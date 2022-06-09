import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import {
  Container,
  Navbar,
  SelectWrapper,
  Select,
  Logo,
  Loading,
} from "./styles";

const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
    getCategories();
  }, []);

  const getData = async () => {
    setLoading(true);
    const response = await fetch("https://fakestoreapi.com/products/");
    const data = await response.json();
    setProducts(data);
    setLoading(false);
  };

  const getCategories = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories/"
    );
    const data = await response.json();
    setCategories(data);
  };

  const selectCategory = async (event) => {
    setLoading(true);
    if (event.target.value === "all") {
      getData();
      return;
    }

    const response = await fetch(
      `https://fakestoreapi.com/products/category/${event.target.value}`
    );
    const data = await response.json();
    setProducts(data);
    setLoading(false);
  };

  return (
    <Container>
      <Navbar>
        <Logo href="/">
          <h1>Demo Shop</h1>
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
        {loading ? (
          <Loading>Loading, please wait...</Loading>
        ) : (
          <ProductCard products={products} />
        )}
      </section>
    </Container>
  );
};

export default App;
