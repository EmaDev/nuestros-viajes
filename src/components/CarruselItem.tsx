import React from 'react';
import styled from 'styled-components';
import { AiOutlineFileImage } from "react-icons/ai";
import Swal from 'sweetalert2';


const Contenedor = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 1rem;
  background-color: #e1e1e1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Titulo = styled.h2`
  text-align: center;
  color: rgba(0,0,0,0.6);
  margin: 1rem;
`;

const Polaroid = styled.div`
  width: 370px;
  height: 450px;
  background-color: #fff;
  box-shadow: 4px 6px 6px rgba(0,0,0,0.3);
  display: flex;
  justify-content: center;
  align-items:center;
`;
const PolaroirInterno = styled.div`
  width: 320px;
  height: 390px;
  background-color: #e1e1e1;
  margin: auto;
  margin-top: 2rem;
  display: flex;
  justify-content:center;
  align-items:center;

  img{
    width: 100%;
    height: 100%;
  }
`;

const Descripcion = styled.div`
  height: 90px;
  background-color: #fff;
  width: 90%;
  margin: 2rem;
  overflow: auto;
  p{
    font-size: 1.7rem;
    margin: .5rem;

    span{
        font-weight: 700;
        color: #007aff;
    }
  }
`;

const SinImagen = styled.div`
  font-size: 1.6rem;
  color: #575757;
`;

interface Props {
  titulo: string;
  imagenes: string[];
  descripcion: string;
}
export const CarruselItem = ({ titulo, imagenes, descripcion }: Props) => {

  const generarSubcadenaDescripcion = () => {
    let subcadena = descripcion; 
    if(subcadena.length > 100){
      subcadena = subcadena.substring(0, 99) + "..";
    }
    return subcadena;
  }

  const abrirModal = () => {
    return Swal.fire({
      title: titulo,
      html: `<p style="font-size: 1.6rem">${descripcion}</p>`,
      confirmButtonText: "cerrar",
    })
  }
  return (
    <Contenedor>
      <Titulo>{titulo}</Titulo>
      <Polaroid>
        <PolaroirInterno>
          {imagenes ?
            <img src={imagenes[0]} />
            :
            <SinImagen>
              <p>Todavia no hay imagen</p>
              <AiOutlineFileImage size={"4rem"} />
            </SinImagen>
          }
        </PolaroirInterno>
      </Polaroid>
      <Descripcion>
        <p>
          {generarSubcadenaDescripcion()}
          <span onClick={abrirModal}> ver mas</span>
        </p>
      </Descripcion>
    </Contenedor>
  )
}
