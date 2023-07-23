import Gasto from "./Gasto";

const ListadoGastos = ({ gastos }) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{gastos.length ? "Gastos" : "No hay gastos registrados"}</h2>
      {gastos.map((gasto) => {
        return <Gasto key={gasto.id} {...gasto} />;
      })}
    </div>
  );
};
export default ListadoGastos;
