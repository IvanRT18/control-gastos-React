export const generarID = () => {
  const random = Math.random().toString(36).substring(2);
  const fecha = Date.now().toString(36);
  return random + fecha;
};

export const formatearFecha = (fecha) => {
  const fechaTemp = new Date();
  const opciones = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  return fechaTemp.toLocaleDateString("es-ES", opciones);
};
