import { useState } from "react";

const Nav = () => {
  const [show, setShow] = useState(true);
  return (
    <nav class="text-center bg-orange-400 text-neutral-500">
      <div class="md:text-4xl xs:text-2xl font-bold md:py-5 xs:py-3">
        <h1 class="text-black drop-shadow-2xl md:tracking-widest">
          INTERCAR CHILE SPA
        </h1>
      </div>
      <button
        onClick={(e) => setShow(!show)}
        class="md:hidden bg-black w-full"
        id="btn-hamburger"
      >
        Menu
      </button>
      <ul
        id="nav"
        class={`md:grid md:grid-cols-6 xs:grid-cols-2 text-sm border-t-2 bg-neutral-900 xs:${
          show ? "hidden" : "grid"
        }`}
      >
        <a href="/">
          <li class="hover:text-orange-500 border-b-2">Inicio</li>
        </a>
        <a href="/#nosotros">
          <li class="hover:text-orange-500 border-b-2">Nosotros</li>
        </a>
        <a href="/#contacto">
          <li class="hover:text-orange-500 border-b-2">Contactanos</li>
        </a>
        <a href="#">
          <li class="hover:text-orange-500 border-b-2">Ofertas</li>
        </a>
        <a href="/#sucursales">
          <li class="hover:text-orange-500 md:border-b-2">Sucursales</li>
        </a>
        <a href="/categorias">
          <li class="hover:text-orange-500 md:border-b-2">Categorias</li>
        </a>
      </ul>
    </nav>
  );
};
export default Nav;
