import { useEffect, useState } from "react";
import Sucursal from "./Sucursal";
import Problems from "./Problems";
import CitySucursal from "./CitySucursal";

async function getSucursales(){
      try{
          const getData = await fetch('http://localhost:8080/api/intercar/branch?page=1', {method : 'GET', mode: 'cors' });
          const data = await getData.json();
          return data;
      }catch(err){
      return {
            error : true, 
            dataError : err,
            message : 'Error fetching sucursales'
        }  
      }
   }
const WrapSucursal = () => {
   useEffect(()=> {
   async function getSucursales(){
      try{
          const getData = await fetch('http://localhost:8080/api/intercar/branch?page=1', {method : 'GET', mode: 'cors' });
          const data = await getData.json();
          setSucursales([...data.data])
      }catch(err){
         setError({error : true, dataError : err, message : 'Error fetching sucursales'})
      }
   }
   getSucursales();

  }, []);

  const [sucursales, setSucursales] = useState([]);
  const [sucursalId, setSucursalId] = useState(0);
  const [error, setError] = useState({});
  return (
     <>
     {
        (error.error) ? 
         <h2 className="text-center text-orange-500 opacity-50">¡Ups! Tuvimos un error obteniendo las sucursales :(</h2>
        :
    <section className="grid grid-cols-2 w-11/12 mx-auto my-10">
      <h2 className="col-span-2 text-center bg-neutral-800 w-fit px-2 border-x-2 border-orange-400 text-zinc-200 mx-auto rounded-xs my-5 text-xl">Nuestras sucursales</h2>
      <Sucursal key={sucursalId} sucursalName={sucursales?.at(sucursalId)?.name}/>
      <article className="mx-auto text-left md:text-lg xs:text-xs">
        <ul>
          <CitySucursal sucursalId={sucursalId} setSucursalId={setSucursalId} esSantiago={true} 
            sucursales={sucursales.filter((s)=> s.fk_district == 2)}/>
          <CitySucursal  sucursalId={sucursalId} setSucursalId={setSucursalId} esSantiago={false}
            sucursales={sucursales.filter((s)=> s.fk_district != 2 )}/>
        </ul>
      </article>
    </section>
     }
     </>
  )
};

export default WrapSucursal;
