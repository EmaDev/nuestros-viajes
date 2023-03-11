import { createContext, useContext, useEffect, useState } from "react";
import { PolaroidViaje, ViajeInterface } from "../interfaces/viaje";
import {app} from "./firebaseConfig";
import {collection, doc, getDoc, getDocs, getFirestore, query} from "firebase/firestore";
const db = getFirestore(app);

interface ViajeContextInterface {
    isLoading: boolean;
    viajeSeleccionado: ViajeInterface;
    dataViajes: ViajeInterface[];
    seleccionarViajePorId: (idDelViaje: string) => void;
    salirDelViajeSeleccionado: () => void;
}

const viajeInicial: ViajeInterface = {
    id: "",
    data: [],
    imagen: "",
    colorFondo: "",
    fecha: new Date(2023, 2, 12),
    lugar: "Proximo Destino?",
    miniImg: ""
}

export const ViajeContext = createContext({} as ViajeContextInterface);

export const ViajeContextProvider = ({ children }: any) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [dataViajes, setDataViajes] = useState<ViajeInterface[]>([]);
    const [viajeSeleccionado, setViajeSeleccionado] = useState<ViajeInterface>(viajeInicial);

    useEffect(() => {
       getTodosLosViajes();
    }, []);

    const salirDelViajeSeleccionado = () => {
        setViajeSeleccionado(viajeInicial);
    }
    
    const seleccionarViajePorId = async (id:string) => {
        setIsLoading(true);
        const buscado = dataViajes.find( viaje => viaje.id === id);
        if(buscado){
            setViajeSeleccionado(buscado);
        }else{
            setViajeSeleccionado(viajeInicial);
        }
        setIsLoading(false);
    }

    const getTodosLosViajes = async() => {
        setIsLoading(true);
        const q = query(collection(db, "viajes-app"));
        const resp = await getDocs(q);
        const arrData:ViajeInterface[] = [];
        resp.forEach( (viaje) => {
            arrData.push({
                ...viaje.data(),
                fecha: viaje.data().fecha.toDate(),
                id: viaje.id,
            } as ViajeInterface)
        });
        setDataViajes(arrData);
        setIsLoading(false);
    }
    return (
        <ViajeContext.Provider value={{
            isLoading,
            viajeSeleccionado,
            dataViajes,
            seleccionarViajePorId,
            salirDelViajeSeleccionado
        }}>
            {children}
        </ViajeContext.Provider>
    )
}
