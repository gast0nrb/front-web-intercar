import { useEffect, useState } from "react";
import Sucursal from "./Sucursal";

const data = [
  {
    id: 1,
    title: "Diez de julio 413-c",
    addres: "Avenida Diez de Julio 413-C, Santiago",
    phone: 942151261,
    url: "",
    District: {
      id: 1,
      name: "Santiago centro",
      City: {
        id: 1,
        name: "Santiago",
      },
    },
  },
  {
    id: 2,
    title: "Diez de julio 554",
    addres: "Avenida Diez de Julio 413-C, Santiago",
    phone: 942151261,
    url: "",
    District: {
      id: 1,
      name: "Santiago centro",
      City: {
        id: 1,
        name: "Santiago",
      },
    },
  },
  {
    id: 3,
    title: "Diez de julio 792",
    addres: "Avenida Diez de Julio 413-C, Santiago",
    phone: 942151261,
    url: "",
    District: {
      id: 1,
      name: "Santiago centro",
      City: {
        id: 1,
        name: "Santiago",
      },
    },
  },
  {
    id: 4,
    title: "Union latino americana 209",
    addres: "Avenida Diez de Julio 413-C, Santiago",
    phone: 942151261,
    url: "",
    District: {
      id: 1,
      name: "Santiago centro",
      City: {
        id: 1,
        name: "Santiago",
      },
    },
  },
  {
    id: 5,
    title: "San antonio 1301, Viña",
    addres: "Avenida San Antonio 1301, Viña del mar.",
    phone: 942151261,
    url: " ",
    District: {
      id: 1,
      name: "Viña del mar",
      City: {
        id: 2,
        name: "Viña",
      },
    },
  },
];

const WrapSucursal = () => {
  const [display, setDisplay] = useState(-1)
  const [sucursales, setSucursales] = useState([])
  const [error, setError] = useState("")
  useEffect(() => {
    (async function () {
      try {
        const fetchSucursales = await fetch("http://localhost:8080/api/intercar/branch?page=0", {
          method: 'GET',
          mode: 'cors'
        })
        const jsonSucursales = await fetchSucursales.json()
        console.log(jsonSucursales.data)
        setSucursales([...jsonSucursales.data])
      } catch (err) {
        setError("No se encontraron sucursales");
      }
    })();
  }, [])
  return (
    <section className="w-11/12 mx-auto my-20" id="sucursales">
      <h2 className="text-neutral-100 tracking-widest rounded-sm border-x-4 border-orange-500 px-2 bg-neutral-900 w-fit mx-auto">
        SUCURSALES
      </h2>
      <h3 className="font-bold">Sucursales en Santiago</h3>
      <div className="grid xs:grid-cols-2 md:grid-cols-4 gap-2">
        {sucursales
          .filter((s) => s.DISTRICT.CITY.name.toLowerCase() == "santiago")
          .map((sucursal) => (
            <Sucursal
              display={display}
              setDisplay={setDisplay}
              id={sucursal.id}
              title={sucursal.name}
              addres={sucursal.adress}
              phone={sucursal.phone}
            />
          ))}
      </div>
      <h3 className="font-bold mt-5">Sucursales en regiones</h3>
      <div className="grid xs:grid-cols-2 md:grid-cols-4 gap-2">
        {sucursales
          .filter((f) => f.DISTRICT.CITY.name.toLowerCase() != "santiago")
          .map((sucursal) => (
            <Sucursal
              display={display}
              setDisplay={setDisplay}
              id={sucursal.id}
              title={sucursal.name}
              phone={sucursal.phone}
              addres={sucursal.adress}
            />
          ))}
      </div>
    </section>
  );
};

export default WrapSucursal;
