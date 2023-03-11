import React, { useContext, useEffect } from 'react';
import Swal from 'sweetalert2';
import { BotonCambiar } from './components/BotonCambiar';
import { Carrusel } from './components/Carrusel';
import { Header } from './components/Header';
import { HeaderSelecionador } from './components/HeaderSelecionador';
import { Loading } from './components/Loading';
import { ViajeContext } from './context/ViajeContext';

const ViajesApp = () => {

    const { isLoading, viajeSeleccionado } = useContext(ViajeContext);

    useEffect(() => {
        const fecha = new Date();

        if(fecha.getDate() == 12 && fecha.getMonth() == 2){
            console.log("es el dia");
            setTimeout(() => {
                alertaMensjae()
            }, 30000);
        }
        
    })

    const alertaMensjae = () => {
        Swal.fire({
            title: 'Mensaje para Priscila',
            text: "Ingresa la clave",
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
            inputPlaceholder: "La fecha con la que me confundo tu cumple: dia/mes",
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                if (login == "13/3" || login == "13/marzo" || login == "13/03") {
                    Swal.fire({
                        title: "Mi Prisci hermosa",
                        html: `<p style="font-size: 1.8rem; margin: 0">
                        Muy feliz cumpleaños mi amor, sos la persona mas maravillosa que conocí en mi vida. Desde que llegaste a mi vida la cambiaste por completo, me hiciste tan feliz, por eso mi intención siempre fue y va seguir siendo darte todo el amor que tengo y nunca te voy a faltar. Sos el amor de mi vida y perfecta para mi. Espero que pases un muy feliz cumpleaños y lo disfrutes muchos.
                        </p>`,
                        confirmButtonText: "Cerrar"
                    });
                } else {
                    return Swal.showValidationMessage(
                        `Clave incorrecta`
                    )
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        })
    }
    if (isLoading) {
        return <Loading />
    }
    return (
        <>
            {(viajeSeleccionado.id != "")
                ?
                <>
                    <BotonCambiar />
                    <Header />
                    <Carrusel />
                </>
                :
                <HeaderSelecionador />
            }
        </>
    )
}

export default ViajesApp;
