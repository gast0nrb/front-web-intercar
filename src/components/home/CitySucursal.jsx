const CitySucursal = ({sucursales, esSantiago}) => {
    return (
        <>
            <li>{esSantiago ? "Sucursales en santiago": "En regiones" }</li>
            {
                sucursales.map((sucursal) => 
                    <li>{sucursal.name}</li>
                )
            }

        </>
    )
}

export default CitySucursal;