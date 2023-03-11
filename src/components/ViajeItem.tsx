import React from 'react';
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import 'animate.css';
import { formatearFecha } from '../helpers';

const ItemContainer = styled.div`
  width: 350px;
  height: 200px;
  background-color: ${ ({color}) => color };
  margin: 1rem 0;
  border-radius: 6px;
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  position:relative;
`;
const Contenido = styled.div`
  z-index: 999;
  color: ${ ({color}) => color || "#fff"};
`;
const Titulo = styled.h2`
   text-align: center;
   font-size: 4.4rem;
   margin: 0;
   padding: 0;
   text-transform: uppercase
`;
const Fecha = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0;
  text-align: center;
`;

const Imagen = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 8px;
  margin:auto;
  z-index: 998;
  opacity: 0.4;
  
  &:hover{
    transition: .8s;
    opacity: 0.9;
  }
`;

interface Props {
  id: string;
  img: {
    color: string;
    url: string;
  };
  titulo: string;
  fecha: Date;
  textColor?: string; 
  seleccionarViaje: any;
}
export const ViajeItem = ({img, titulo, fecha,textColor, seleccionarViaje}:Props) => {
  return (
    <ItemContainer color={img.color} onClick={seleccionarViaje}>
      <Imagen src={img.url} />
      <Contenido color={textColor}>
        <Titulo>{titulo}</Titulo>
        <Fecha>{formatearFecha(fecha)}</Fecha>
      </Contenido>
    </ItemContainer>
  )
}
