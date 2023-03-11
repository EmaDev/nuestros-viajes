export interface ViajeInterface {
    id: string,
    fecha: Date;
    lugar: string;
    imagen: string;
    miniImg: string;
    colorFondo: string;
    data: PolaroidViaje[];
}

export interface PolaroidViaje {
    imagenes: string[];
    descripcion: string;
    titulo: string;
} 