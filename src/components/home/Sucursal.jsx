const Sucursal = ({ title, phone, addres, display, id, setDisplay }) => {
  return (
    <div class="text-center">
      <div class="bg-neutral-100 drop-shadow-xl flex-wrap p-0.5">
        <div class="" id="img-sucursal rounded-xs">
          <img class="rounded-t-xs" src="/image.png" alt="" />
        </div>
        <div
          class="text-center xs:text-xs md:text-sm border-b-2 border-orange-500 mb-1"
          id="title-sucursal"
        >
          <h3 class="overflow-hidden text-ellipsis text-nowrap font-bold bg-neutral-900 text-neutral-200 px-0.5">
            {title}
          </h3>
        </div>
        <div
          class="info-sucursal grid grid-cols-1 text-center text-xs gap-0.5"
          hidden={display == id ? false : true}
        >
          <div class="grid grid-cols-1 text-center">
            <p class="font-bold">Direccion</p>
            <p>{addres}</p>
          </div>
          <div class="text-center">
            <p class="font-bold">Contacto</p>
            <p>{phone}</p>
          </div>
          <div class="text-center pb-3">
            <button class="bg-neutral-200 w-fit flex mx-auto px-3 rounded-xs py-0.5 gap-1 text-neutral-500 border-b-2 border-orange-200 hover:border-orange-500 hover:text-neutral-950">
              Visitar
              <img src="/waze.svg" alt="" class="w-4 mx-auto" />
            </button>
          </div>
        </div>
        <button
          class="text-neutral-500 hover:text-black border-x-2 duration-150 border-transparent hover:border-orange-500 block mx-auto text-xs w-fit mb-2 px-2 bg-neutral-200 drop-shadow-lg"
          onClick={(e) => setDisplay(id)}
          hidden={display == id ? true : false}
        >
          Ver más
        </button>
      </div>
      <button
        class="text-xs rounded-xl hover:bg-neutral-300 mt-2 bg-neutral-100"
        id="collapse-card"
        onClick={(e) => setDisplay(-1)}
        hidden={display == id ? false : true}
      >
        <img className="w-5" src="/collapse.svg" alt="" />
      </button>
    </div>
  );
};

export default Sucursal;
