import { useEffect, useState } from "react";
import Mensaje from "./Mensaje";

import CerrarModal from "../img/cerrar.svg";

const Modal = ({
  setModal,
  animarModal,
  setAnimarModal,
  guardarGasto,
  editarGasto,
  setEditarGasto,
}) => {
  const [mensaje, setMensaje] = useState("");
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [id, setId] = useState("");
  const [fecha, setFecha] = useState("");

  useEffect(() => {
    if (Object.keys(editarGasto).length > 0) {
      setNombre(editarGasto.nombre);
      setCantidad(editarGasto.cantidad);
      setCategoria(editarGasto.categoria);
      setId(editarGasto.id);
      setFecha(editarGasto.fecha);
    }
  }, []);

  const ocultarModal = () => {
    setAnimarModal(false);
    setEditarGasto({});

    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, cantidad, categoria].includes("")) {
      setMensaje("Todos los campos son obligatorios");

      setTimeout(() => {
        setMensaje("");
      }, 1500);
      return;
    }

    guardarGasto({ nombre, cantidad, categoria, id, fecha });
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarModal} alt={"cerrar modal"} onClick={ocultarModal} />
      </div>

      {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

      <form
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
      >
        <legend>{editarGasto ? "Editar gasto" : "Nuevo gasto"}</legend>

        <div className="campo">
          <label htmlFor="nombre">Nombre del Gasto</label>

          <input
            id="nombre"
            type="text"
            placeholder="Añade el nombre del gasto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>

          <input
            id="cantidad"
            type="text"
            placeholder="Añade la cantidad del gasto"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>

        <div className="campo">
          <label htmlFor="categoria">Categoría</label>

          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">--- Seleccione ---</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>

          <input
            type="submit"
            value={editarGasto ? "Guardar cambios " : "Añadir gasto"}
          />
        </div>
      </form>
    </div>
  );
};
export default Modal;
