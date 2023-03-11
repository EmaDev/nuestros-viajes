import React, { useEffect, useState, useContext } from 'react';
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import 'animate.css';
import { ViajeContext } from '../context/ViajeContext';
import { formatearFecha } from '../helpers';

const HeaderContainer = styled.header`   
   height: 95vh;
   width: 100%;
   position: relative;
   overflow: auto;
`;
const Hero = styled.div<any>`
    margin: auto;
    padding: 2rem;
    height: 95vh;
    width: 100%;
    background: url(${({ url }) => url});
    background-size: cover;
    background-repeat: no-repeat;
    background-position:center;
    position:absolute;
    
    ::after{
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: ${({ color }) => color || "#9f70c7"};
    }
`;

const Contenido = styled.div`
   position:absolute;
   width: 100%;
   height: 90vh;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`;

const Title = styled.h1<any>`
  color: rgba(0,0,0,0.4);
  font-weight: 900;
  font-size: 7.3rem;
  text-transform: uppercase;
  background-color: #fff;
  padding: .5rem;
  margin: 0 1rem;
  position: relative;
  text-align:center;
`;
const Subtitulo = styled.h3`
  font-size: 3rem;
  font-weight: 900;
  margin: 0;
  color: orange;
  -webkit-text-stroke: 1px grey;
  text-transform: uppercase;
`;
const FechaText = styled.div`
  font-size: 3rem;
  position: absolute;
  right: -1rem;
  bottom: -1rem;
  color: orange;
  rotate: 3deg;   
  -webkit-text-stroke: 1px grey;
`;

const Temporizador = styled.div`
  background-color: #fff;
  padding: .8rem 1rem;
  border-radius: 3px;
  margin: 1rem;
  color: rgba(0,0,0,0.4);
  div{
    margin-top: 1rem;
  }
  h5{
    font-weight: 500; 
    text-align: center;
    color: #df654a;
    margin: 0;
    margin-bottom: -1rem;
  }
  p{
    margin: 1rem 0;
    text-align:center;
    font-weight: 600;
    font-size: 2.2rem;
  }
`;

const Desliza = styled.div`
  position:absolute;
  bottom: 2rem;
  right: 0;
  left: 0;
  margin: auto;
  font-size: 2.5rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  color: #2F5553;

  animation: jello;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-delay: 2s;
`;
export const Header = () => {

  const { viajeSeleccionado } = useContext(ViajeContext);

  return (
    <HeaderContainer>
      <Hero url={viajeSeleccionado.imagen} color={viajeSeleccionado.colorFondo} />
      <Contenido>
        <Subtitulo>Nuestros viajes</Subtitulo>
        <Title>{viajeSeleccionado.lugar}
          <FechaText>{viajeSeleccionado.fecha.getFullYear()}</FechaText>
        </Title>
        <Temporizador>
          <h5>* Fecha del viaje *</h5>
          <p>{formatearFecha(viajeSeleccionado.fecha)}</p>
        </Temporizador>
      </Contenido>
      <Desliza>
        <IoIosArrowDown />
        <IoIosArrowDown />
        <IoIosArrowDown />
        <IoIosArrowDown />
        <IoIosArrowDown />
      </Desliza>
    </HeaderContainer >
  )
}
