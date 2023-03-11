import React, { useContext, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import styled from 'styled-components';
import { CarruselItem } from "./CarruselItem";
import { AgregarItem } from "./AgregarItem";
import { ViajeContext } from "../context/ViajeContext";

const Contendor = styled.section`
  width: 100%;
  height: 100vh;
  .swiper {
    width: 100%;
    height: 100%;
  }
  
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
  
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color: #000;
    opacity: 1;
    background: rgba(0, 0, 0, 0.2);
  }
  
  .swiper-pagination-bullet-active {
    color: #fff;
    background: #ae70c7;
  }
  
`;

export const Carrusel = () => {
  const { viajeSeleccionado } = useContext(ViajeContext);
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  if (viajeSeleccionado.data.length < 1) {
    return (<></>);
  }
  return (
    <Contendor>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper swipperContenedor"
      >

        {viajeSeleccionado.data.map((polaroid, i) => (
          <SwiperSlide key={i}>
            <CarruselItem
              titulo={polaroid.titulo}
              imagenes={polaroid.imagenes}
              descripcion={polaroid.descripcion}
            />
          </SwiperSlide>

        ))}

        <SwiperSlide>
          <AgregarItem />
        </SwiperSlide>
      </Swiper>
    </Contendor>
  );
}
