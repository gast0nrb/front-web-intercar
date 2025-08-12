import { useState } from "react";

const Finder = () => {
  const [textFind, setText] = useState('');
  return (
    <form
      action={`/busqueda?text=${textFind}`}
      method="POST"
      class="flex w-full px-2 py-1 xs:gap-4 pb-2 justify-center bg-neutral-100"
      id="form-busqueda"
    >
      <input
        class="text-center md:w-6/12 xs:w-6/12 rounded-t-xs drop-shadow-sm border-b-1 border-orange-500 bg-neutral-50 px-1 text-black xs:text-xs md:text-sm"
        type="text"
        placeholder=" ¿Que buscas hoy? "
        name="text-finder"
        id="text-product"
        required="true"
        onChange={(e)=> setText(e.target.value)}
      />
      <button
        type="submit"
        class="drop-shadow-sm bg-neutral-50 px-4 text-neutral-400 hover:text-black text-xs border-x-1 border-orange-400 "
      >¡Buscar!</button
      >
    </form>

  )
}

export default Finder;