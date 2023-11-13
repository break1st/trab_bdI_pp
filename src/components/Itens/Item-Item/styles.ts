import styled from "styled-components";

import { Edit } from "@styled-icons/boxicons-solid/Edit"
import { DeleteOutline } from "@styled-icons/typicons/DeleteOutline"

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 45px;
  background: #d9d9d9;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const InfoItem = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 0.5fr;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  margin: 0 auto;
  >p{
    text-align: left;
    color: gray;
    font-size: 14px;
  }
  >div{
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    margin: 0;
    font-size: 18px;
    font-weight: bold;
    width:100%;
    height: 5rem;
    >button{
      width: auto;
      background: #d9d9d9;
      border:none;
      padding:0;
      &:focus{
        outline: none;
      }
    }
  }
`

export const DeleteButton = styled(DeleteOutline)`
  color: red;
  width: 32px;
`;

export const EditButton = styled(Edit)`
  color: blue;
  width: 26px;
`;