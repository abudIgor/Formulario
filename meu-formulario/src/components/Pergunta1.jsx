import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #dfe6e9;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #2d3436;
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
  background-color: #0984e3;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #0652dd;
  }
`;

const Pagina1 = ({ setRespostas, respostas }) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    setRespostas({ ...respostas, nome: e.target.value });
  };

  return (
    <Container>
      <Title>Qual é o seu nome?</Title>
      <Input type="text" placeholder="Digite seu nome" value={respostas.nome} onChange={handleChange} />
      <Button onClick={() => navigate("/pagina2")}>Próximo</Button>
    </Container>
  );
};

export default Pagina1;