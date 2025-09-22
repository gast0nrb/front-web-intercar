import { useState } from "react";

const Finder = () => {
  const [textFind, setText] = useState('');
  return (
    <div className="grow">
      <form
        action={`/busqueda?text=${textFind}`}
        method="POST"
        className="flex gap-3"
        id="form-busqueda"
      >
        <input
          className="xs:w-2/4 md:w-2/3 xs:text-xs md:text-lg text-center border-1 border-zinc-300 hover:border-orange-500 rounded-sm px-2 focus:outline-none focus:ring-1 focus:ring-orange-400"
          type="text"
          placeholder=" ¿Que buscas hoy? "
          name="text-finder"
          id="text-product"
          required="true"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-xs drop-shadow-sm bg-neutral-50 md:px-2 xs:px-2 h-5 my-auto text-neutral-400 hover:text-black text-xs border-x-1 border-orange-400 w-fit">
          ¡Buscar!</button>
      </form>
    </div>
  )
}

export default Finder;
