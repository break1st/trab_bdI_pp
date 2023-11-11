import styled, {css} from "styled-components";
import {PersonCircle} from "@styled-icons/bootstrap/PersonCircle";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: radial-gradient(circle, rgba(159, 146, 228, 1) 0%, rgba(28, 40, 126, 1) 100%);  
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: opacity 0.5s ease;
  >form{
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    background: white;
    padding:1rem;
    color: black;
    height:90vh;
    border-radius: 0rem 1rem 1rem 0rem;
    border: 1px solid rgba(0,0,0,0.2);
    z-index: 1;

    >h2{
      font-size:32px;
      display: flex;
      width: 300px;
      padding-bottom:1rem;
      position:relative;
      top: -3%;
      
    }

    >p{
      margin-top:1rem;
      font-size:14px;
    }
  }
`;
export const Profile = styled(PersonCircle)`
  color: white;
  width: 110px;
  
`

export const Input = styled.input`
  padding: 12px;
  margin: 10px;
  font-size: 16px;
  border:none;
  border-bottom: 2px solid #000;
  background-color:transparent;
  width: 300px;
  font-size:14px;
  color: black;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);


  &:focus {
    outline: none;
    border-color: rgba(159, 146, 228, 1); /* Cor da borda ao focar no input */
  }
`;

export const Button = styled.button`
  margin-top: 2rem;
  font-size: 18px;
  background-color: #4caf50;
  color: white;
  border: none; 
  border-radius: 2rem;
  cursor: pointer;
  transition: background-color 0.3s;
  width:300px;

  &:hover {
    background-color: #45a049;
  }
`;

export const Text = styled.p`
  color: white;
  font-size: 1.4rem;
  margin-top: 20px;
`;

export const Banner = styled.div`
    width:580px;
    height:90vh;
    background: radial-gradient(circle, rgba(159, 146, 228, 1) 0%, rgba(28, 40, 126, 1) 100%);
    border: 1px solid rgba(0,0,0,0.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 1rem 0rem 0rem 1rem;
    position: relative;
    >img{
      max-width: 340px;
      max-height: 340px;
      opacity: 0.5;
    }
`;


export const TextOverlay = styled.div`
>h1{
  text-align: center;
}
  width: 100%; 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  text-align: center;
  color: #FFFFFF;
  z-index: 1;
`;