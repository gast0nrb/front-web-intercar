const Nav = () => {
  return (
    <header class="text-center bg-neutral-100">
      <div class="md:py-5 xs:py-3 flex justify-between px-5 gap-2">
        <a className="w-20" href="/"><img src="/logo.png" alt="" className="md:w-20 xs:w-12" /></a>
        <div class="text-center my-auto">
<h1 class="font-[Rajdhani] block xs:text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-wide xs:text-zinc-800 text-shadow-xs text-shadow-orange-300">
INTERCAR CHILE SPA
</h1>
<p class="font-[Rajdhani] block text-xs my-auto font-extrabold uppercase tracking-wide text-zinc-700 xs:text-shadow-xs md:text-lg  text-shadow-orange-200">
    VENTAS DE ACCESORIOS y REPUESTOS AUTOMOTRICES
</p>
        </div>
        <a className="w-20" href="/"><img src="/logo.png" alt="" className="md:w-20 xs:w-12" /></a>
      </div>
    </header>
  );
};

export default Nav;
