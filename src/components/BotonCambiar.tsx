import React, { useContext } from 'react';
import { MdOutlineChangeCircle } from 'react-icons/md';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { ViajeContext } from '../context/ViajeContext';


const Boton = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 50px;
height: 50px;
border-radius: 50%;
background-color: #ae70c7;
color: white;
font-size: 1.5rem;
font-weight: bold;
position: fixed;
bottom: 10px;
right: 10px;
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
transition: all 0.2s ease-in-out;
z-index: 9999;
border-style: none;

:hover{
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    background-color: #8b5eb1;
}
`;
export const BotonCambiar = () => {

    const { seleccionarViajePorId } = useContext(ViajeContext);

    const lanzarAlerta = () => {
        Swal.fire({
            title: "Queres seleccionar otro de nuestros viajes",
            showCancelButton: true,
            confirmButtonText: 'Si',
            cancelButtonText: `No`,
        }).then((resp) => {
            if (resp.isConfirmed) {
                seleccionarViajePorId("");
            }
        });
    }
    return (
        <Boton onClick={lanzarAlerta}>
            <MdOutlineChangeCircle size={"4rem"} />
        </Boton>
    )
}
