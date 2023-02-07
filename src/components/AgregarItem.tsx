import React from 'react';
import styled from 'styled-components';
import {HiPlusCircle} from "react-icons/hi";
import Swal from 'sweetalert2';

const Contenedor = styled.section`
   height: 100vh;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items:center;
   flex-direction:column;
   background-color: #e1e1e1;
` 

export const AgregarItem = () => {
  
    const agregarItem = () => {
        return Swal.fire({
            icon: "error",
            title: "Todavia no se pueden agregar excursiones"
        })
    }

    return (
    <Contenedor>
        <HiPlusCircle size={"10rem"} onClick={agregarItem}/>
        <p>Agregar excursion</p>
    </Contenedor>
  )
}
