import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import 'animate.css';

const HeaderContainer = styled.header`   
   height: 100vh;
   width: 100%;
   position: relative;
   overflow: auto;
`;
const Hero = styled.div`
    margin: auto;
    padding: 2rem;
    height: 100vh;
    width: 100%;
    background-color: red;
    background: url(${require("../assets/hero.jpg")});
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
    background-color: rgba(89,159,203,0.6);
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

const Title = styled.h1`
  color: rgba(0,0,0,0.4);
  font-weight: 900;
  font-size: 7.5rem;
  text-transform: uppercase;
  background-color: #fff;
  padding: .5rem 1.5rem;
  margin: 0;
  position: relative;
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
    display:flex;
    align-items: center;
    justify-content: center;
  }
  h5{
    font-weight: 500; 
    text-align: center;
    color: #df654a;
    margin: 0;
    margin-bottom: -1rem;
  }
`;

const Numero = styled.p`
    font-family: 'Archivo Black', sans-serif;
    font-size: 3.5rem;
    font-weight: 900;
    margin: 0;
    padding: 0;
    text-align: center;
    display: flex;
    align-items:center;
`;
const Separador = styled.span`
   margin: auto 8px;
   font-size: 30px;
   font-weight: 900;
`;

const Desliza = styled.div`
  position:absolute;
  bottom: 1rem;
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
    const [timerState, setTimerState] = useState({ dias: '00', horas: '00', minutos: '00', segundos: '00' });

    useEffect(() => {
        const actual = new Date();
        if (actual.getDate() >= 9) {
            //clearInterval(intervalo);
            setTimerState({
                segundos: "00",
                minutos: "00",
                horas: "00",
                dias: "0",
            })
        } else {
            let iteracion = 1000;
            const intervalo = setInterval(() => {
                setTimer(new Date(2023, 1, 25));
                if (iteracion === 1000) {
                    iteracion = 60000;
                }
            }, iteracion);
        }
    }, []);

    const setTimer = (fechaFin: any) => {
        const hoy: any = new Date();
        const diferencia = (fechaFin - hoy + 1000) / 1000;
        setTimerState({
            segundos: ("0" + Math.floor(diferencia % 60)).slice(-2),
            minutos: ("0" + Math.floor(diferencia / 60 % 60)).slice(-2),
            horas: ("0" + Math.floor(diferencia / 3600 % 24)).slice(-2),
            dias: Math.floor(diferencia / (3600 * 24)).toString(),
        })
    }
    return (
        <HeaderContainer>
            <Hero />
            <Contenido>
                <Subtitulo>Nuestro viaje</Subtitulo>
                <Title>Ushuaia
                    <FechaText>2023</FechaText>
                </Title>
                <Temporizador>
                    <h5>* Tiempo restante *</h5>
                    <div>
                        <Numero>{timerState.dias}<Separador>:</Separador></Numero>
                        <Numero>{timerState.horas}<Separador>:</Separador></Numero>
                        <Numero>{timerState.minutos}<Separador>:</Separador></Numero>
                        <Numero>{timerState.segundos}</Numero>
                    </div>
                </Temporizador>

            </Contenido>
            <Desliza>
                <IoIosArrowDown />
                <IoIosArrowDown />
                <IoIosArrowDown />
                <IoIosArrowDown />
                <IoIosArrowDown />
            </Desliza>
        </HeaderContainer>
    )
}
