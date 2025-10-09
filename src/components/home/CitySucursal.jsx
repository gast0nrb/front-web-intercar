const CitySucursal = ({ sucursales, esSantiago, setSucursalId, sucursalId }) => {
    return (
        <>
            <li className="text-lg">{esSantiago ? "Santiago" : "Regiones"}</li>
               {sucursales.map((sucursal) =>
                    <li className="group font-serif italic hover:text-orange-600 flex gap-1" key={sucursal.id}>
                        <img src={`${sucursal.id - 1 == sucursalId ? "/wheel-orange.svg" : "/wheel-black.svg"}`}
                            className={`xs:w-5 md:w-6 opacity-10 ${sucursal.id - 1 == sucursalId ? "opacity-100" : ""}`} alt="wheel-sucursal" />
                        <a href="#" className="" onClick={(e) => {
                            e.preventDefault();
                            setSucursalId(sucursal.id - 1)
                        }}>
                            {`${sucursal?.adress}, ${sucursal?.DISTRICT?.CITY?.name}`}</a>
                    </li>
                )
               }
        </>
    )
}

export default CitySucursal;
