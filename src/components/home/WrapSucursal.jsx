import { useEffect, useState } from "react";
import Sucursal from "./Sucursal";
import Problems from "./Problems";
import CitySucursal from "./CitySucursal";

const sucursales = [
  {
    id: 1,
    name: "Sucursal 413-C",
    direccion: "Avenida diez de julio 413-C",
    phone: "+56942161221",
    city: {
      id: 1,
      name: "Santiago",
      comuna: {
        id: 1,
        name: "Santiago centro"
      }
    }
  },
  {
    id: 2,
    name: "Sucursal 554",
    direccion: "Avenida diez de julio 554",
    phone: "+56942161221",
    city: {
      id: 1,
      name: "Santiago",
      comuna: {
        id: 1,
        name: "Santiago centro"
      }
    }
  },
  {
    id: 3,
    name: "Sucursal 1301",
    direccion: "Avenida san antonio 1301",
    phone: "+56942161221",
    city: {
      id: 2,
      name: "Viña del mar",
      comuna: {
        id: 1,
        name: "Viña del mar"
      }
    }
  },
];

const WrapSucursal = () => {
  const [sucursalId, setSucursalId] = useState(0);
  return (
    <section className="grid grid-cols-2 w-11/12 mx-auto my-10">
      <h2 className="col-span-2 text-center bg-neutral-800 w-fit px-2 border-x-2 border-orange-400 text-zinc-200 mx-auto rounded-xs my-5">Nuestras sucursales</h2>
      <Sucursal key={sucursalId} />
      <article className="mx-auto text-center">
        <ul>
          <CitySucursal esSantiago={true} sucursales={sucursales.filter((s)=> s.city.id == 1)}/>
          <CitySucursal esSantiago={false} sucursales={sucursales.filter((s)=> s.city.id != 1)}/>
        </ul>
      </article>
    </section>
  )
};

export default WrapSucursal;
