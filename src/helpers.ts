export const formatearFecha = (fecha:Date) => {
    const dia = fecha.getDate();
    const mes = fecha.toLocaleString('default', { month: 'long' });
    const anio = fecha.getFullYear();
    return `${dia} de ${mes} de ${anio}`;
  }