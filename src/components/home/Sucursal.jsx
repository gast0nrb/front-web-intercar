import { useEffect, useState } from "react";
const Sucursal = ({ sucursalName }) => {
  return (
    <article className="mx-auto w-11/12">
      <h3 className="text-lg">{sucursalName}</h3>
      <div className="w-full">
        <iframe className="w-11/12"
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.1420914860723!2d-70.65002710000002!3d-33.4716512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c53ebeb80f7f%3A0x3aa1b3d04efaf08d!2sNataniel%20Cox%201935%2C%208320000%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1759150928924!5m2!1ses!2scl"
          allowfullscreen="" 
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
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
