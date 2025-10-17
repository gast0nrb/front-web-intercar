import { useEffect, useState } from "react";
const Sucursal = ({ sucursalName }) => {
  return (
    <article className="mx-auto w-11/12">
      <h3 className="text-lg">{sucursalName}</h3>
      <div className="w-full">
        <iframe
         src="https://embed.waze.com/iframe?zoom=18&lat=-33.471651&lon=-70.650027&ct=livemap"
         width="100%" height="300"
          loading="lazy"></iframe>
      </div>
      <div className="text-center my-2 grid grid-cols-2 text-xs">
        <h4 className="col-span-2 text-sm ">Viajar con</h4>
        <div className="text-center mx-auto font-serif italic">
          <p>Waze</p>
          <a className="" href=""><img src="/waze.svg" alt="" className="w-6 mx-auto"/></a>
        </div>
        <div className="text-center mx-auto font-serif italic">
          <p>Maps</p>
          <a className="" href=""><img src="/maps.png" alt="" className="w-5 mx-auto"/></a>
        </div>
      </div>
    </article>
  )
   
};

export default Sucursal;
