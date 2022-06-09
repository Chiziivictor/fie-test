import styled from "styled-components";

export const Container = styled.div`
  padding: 0 2rem;

  @media screen and (min-width: 768px) {
    padding: 0 5rem;
  }
`;
export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5vh;
`;
export const Logo = styled.a`
  cursor: pointer;
  color: inherit;
  text-decoration: none;
`;
export const SelectWrapper = styled.div`
  width: 160px;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 5px 10px;
`;
export const Select = styled.select`
  width: 100%;
  border: none;
  outline: none;
  background-color: inherit;
  cursor: pointer;
`;
export const Cards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
`;
export const Card = styled.div`
  border: 1px solid gray;
  border-radius: 10px;
  padding: 30px;
  width: 200px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const Title = styled.h2`
  margin-top: 2rem;
  font-size: 1rem;
`;
export const Image = styled.img`
  width: 150px;
  height: 200px;
  object-fit: contain;
  align-self: center;
`;
export const Price = styled.p`
  padding: 5px;
  border: 1px solid gray;
  width: 80px;
  text-align: center;
`;
