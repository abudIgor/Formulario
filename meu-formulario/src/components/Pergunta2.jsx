import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ebc8b2;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #000000;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 12px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  margin-bottom: 15px;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: #6c6d7380;
  color: #000000;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #ebc8b2;
  }
`;

const Pagina2 = ({ setRespostas, respostas }) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    setRespostas({ ...respostas, idade: e.target.value });
  };

  return (
    <Container>
      <Title>Qual é a sua idade?</Title>
      <Input type="number" placeholder="Digite sua idade" value={respostas.idade} onChange={handleChange} />
      <Button onClick={() => navigate("/resumo")}>Finalizar</Button>
    </Container>
  );
};

export default Pagina2;