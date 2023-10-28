import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #313131;
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  align-items: center;
  justify-content: start;
  position: fixed;
  top: 0;
  left: 0;
  gap: 1rem;
`;

export const TopTabBarNavigator = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  color: #fff;
  background: #262424;
`;

export const FlexDivTab = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

export const Greeting = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  color: #fff;
  margin: 0;
  gap: 0.3rem;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  margin: 0;
  color: #fff;
`;

export const Text = styled.p`
  font-size: 0.8rem;
  color: #b8b6b6;
  margin: 0;
`;

export const Form = styled.div`
  color: #fff;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  margin-top: 1rem;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 10vh;
  width: 80%;
`;

export const Input = styled.input`
  background: #434242;
  width: 80%;
  height: 3rem;
  border-radius:8px;
`;

export const InfoVeiculo = styled.div`
  background: #434242;
  display: flex;
  height: 10vh;
  width: 80%;
`;
export const FlexDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-height: 12vh;
`;
