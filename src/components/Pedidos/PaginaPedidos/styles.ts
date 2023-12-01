import styled, { css } from "styled-components";


export const Container = styled.div`
  top: 10rem;
  padding: 15vh 0px 70px 0px;
  background-color: #f2f2f2;
  min-height: 100vh;
  width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const InputButton = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1280px;
  width: 100%;
  > input {
    flex: 1;
    background: #d9d9d9;
    height: 45px;
    border-radius: 4px;
    border: none;
    padding-left: 1rem;
    color: black;
  }

  > button {
    color: white;
    background: #327AD9;
    width: 228px;
    height: 45px;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    margin-left: 3rem;
  }
`;

export const FieldNames = styled.div`
  max-width: 1280px;
  width: 100%;
  display: grid;
  grid-template-columns: 0.5fr 0.8fr 0.8fr 0.5fr 0.5fr 0.5fr 0.5fr 0.3fr;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  margin: 0 auto;
  padding-left: 1rem;
  >p{
    text-align: left;
    width: 100%;
    color: black;
    font-size: 14px;
  }
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1280px;
  p:nth-child(1){
    width: 100%;
    color: black;
    font-size: 20px;
  }
  p:nth-child(2){
    width: 100%;
    color: gray;
    font-size: 14px;
  }
`

export const Formulario = styled.div`
  padding: 0 0 3rem 0;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > p {
    font-size: 2rem;
    color: black;
  }

  > input {
    max-width: 50%;
    min-width: 50%;
    padding: 1rem 2rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    color: #3f4373;
  }
  >select{
    background-color:red;
  }

  > div {
    display: flex;
    gap: 1rem;
    > button {
      margin-top: 1rem;
      padding: 8px;
      border-radius: 5%;

      width: 13rem;
      font-size: 1.5rem;

      outline: 0;
      cursor: pointer;

      background-color: #6c63ff;
      color: #ffffff;

      &:hover {
        background: #594fff;
      }
    }
  }
`;
