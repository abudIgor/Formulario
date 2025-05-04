import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #74b9ff;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: white;
  margin-bottom: 20px;
`;

const Info = styled.p`
  font-size: 18px;
  color: #fff;
`;

const Button = styled.button`
  background-color: #ff7675;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #d63031;
  }
`;

const Resumo = ({ respostas }) => {
  const [mensagem, setMensagem] = useState("");

  const handleEnviar = async () => {
    try {
      await fetch("https://script.google.com/macros/s/AKfycbwXA60g-9clCmNyPmwt6FqkUVQev-GrIZSnfBGysKNrUtsugp_D7pC3c94q_gkC_uHXAQ/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(respostas),
      });

      setMensagem("Respostas enviadas com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar:", error);
      setMensagem("Erro ao enviar respostas.");
    }
  };

  return (
    <Container>
      <Title>Resumo das Respostas</Title>
      <Info><strong>Nome:</strong> {respostas.nome}</Info>
      <Info><strong>Idade:</strong> {respostas.idade}</Info>
      <Button onClick={handleEnviar}>Enviar ao Google Sheets</Button>
      {mensagem && <Info>{mensagem}</Info>}
    </Container>
  );
};

export default Resumo;