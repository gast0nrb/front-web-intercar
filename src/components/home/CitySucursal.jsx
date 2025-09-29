import { useState } from "react";

const CitySucursal = ({ sucursales, esSantiago, setSucursalId, sucursalId }) => {
    const [stopWheel, setStopWheel] = useState(false)
    return (
        <>
            <li className="text-lg">{esSantiago ? "Santiago" : "Regiones"}</li>
            {
                sucursales.map((sucursal) =>
                    <li className="group font-serif italic hover:text-orange-600 flex gap-1" key={sucursal.id}>
                        <img src={`${sucursal.id - 1 == sucursalId ? "/wheel-orange.svg" : "/wheel-black.svg"}`}
                            className={`xs:w-5 md:w-6 ${sucursal.id - 1 == sucursalId ? "active:opacity-80 animate-spin" : "opacity-5"}}
                            group-hover:opacity-50`} alt="wheel-sucursal" />
                        <a href="#" className="" onClick={(e) => {
                            e.preventDefault();
                            setSucursalId(sucursal.id - 1)
                        }}>
                            {`${sucursal.direccion}, ${sucursal.city.name}`}</a>
                    </li>
                )
            }
        </>
    )
}

export default CitySucursal;