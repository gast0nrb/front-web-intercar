const Nav = () => {
  return (
    <header class="text-center bg-neutral-100">
      <div class="md:py-5 xs:py-3 flex justify-between px-5 gap-2">
        <a className="w-20" href="/"><img src="/logo.png" alt="" className="md:w-20 xs:w-12"/></a>
        <h1 className="font-extrabold flex tracking-widest xs:text-md md:text-2xl xl:text-3xl my-auto text-orange-400 xs:text-shadow-zinc-300 md:text-shadow-purple-100 text-shadow-lg"><span className="xs:hidden xl:block mx-1">VENTA DE </span>ACCESORIOS <span className="mx-1 xs:hidden xl:block">Y REPUESTOS</span> AUTOMOTRICES</h1>
        <a className="w-20" href="/"><img src="/logo.png" alt="" className="md:w-20 xs:w-12"/></a>
      </div>
    </header>
  );
};
export default Nav;
