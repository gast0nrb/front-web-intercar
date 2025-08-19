const Nav = () => {
  return (
    <header class="text-center bg-neutral-100 mx-auto w-full">
      <div class="md:py-5 xs:py-3 flex md:justify-between items-center xs:justify-center md:px-5">

      <a href="/"><img src="/logo.png" alt="" className="md:w-20 xs:w-12 mx-auto" /></a>
        <div class="text-center my-auto">
          <h1 class="font-[Rajdhani] block xs:text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-wide xs:text-zinc-800 text-shadow-xs text-shadow-orange-300 text-nowrap">
            INTERCAR CHILE SPA
          </h1>
          <p class="font-[Rajdhani] block text-xs my-auto font-extrabold uppercase text-zinc-700 xs:text-shadow-xs md:text-lg  text-shadow-orange-200 text-nowrap">
            VENTA DE ACCESORIOS AUTOMOTRICES
          </p>
        </div>
      <a href="/"><img src="/logo.png" alt="" className="md:w-20 xs:w-12 mx-auto" /></a>
      </div>
    </header>
  );
};

export default Nav;
