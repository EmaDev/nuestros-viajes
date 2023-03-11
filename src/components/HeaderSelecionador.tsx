import React, { useContext } from 'react';
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import 'animate.css';
import { ViajeItem } from './ViajeItem';
import { ViajeContext } from '../context/ViajeContext';
import Swal from 'sweetalert2';

const Container = styled.header`
  background-color: #e1e1e1; 
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  margin: auto;
  color: #373737;
  background: rgb(255,200,213);
  background: linear-gradient(180deg, rgba(255,200,213,1) 29%, rgba(255,235,255,1) 100%);
`;
const Titulo = styled.h1`
  max-width: 90%;
  margin:0 auto;
  text-align: center;
  font-size: 3rem;
  text-transform: uppercase;
  margin: 2rem 0;
  margin-bottom: 0;
`;
export const HeaderSelecionador = () => {

    const { seleccionarViajePorId, viajeSeleccionado, dataViajes } = useContext(ViajeContext);

    if (viajeSeleccionado.id != "") {
        return <></>
    }

    const lanzarMensaje = () => {
        return Swal.fire({
            title: 'No se cual sea el proximo viaje, pero ojala sea junto! ❤️❤️',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            confirmButtonText: "Cerrar"
        })
    }
    return (
        <Container>
            <Titulo>Selecciona uno de nuestros viajes</Titulo>
            <div style={{margin: "1rem 0"}}>
                {dataViajes.map(viaje => (
                    <ViajeItem key={viaje.id} img={{ color: viaje.colorFondo, url: viaje.miniImg }}
                        fecha={viaje.fecha} id={viaje.id} titulo={viaje.lugar}
                        seleccionarViaje={() => seleccionarViajePorId(viaje.id)}
                    />
                ))}

                <ViajeItem key={"proximo"} img={{ color: "#948f71", url: require("../assets/mapa.jpg") }}
                    fecha={new Date()} id={"proximo"} titulo={"Proximo viaje?"}
                    seleccionarViaje={lanzarMensaje}
                />
            </div>

        </Container>
    )
}
