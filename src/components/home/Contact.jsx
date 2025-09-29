export default function Contact() {
    return (
        <section className="fixed bottom-1 right-3 z-20">
            <button className="rounded-xl hover:scale-110 block mx-auto hover:bg-orange-400 mb-1 duration-150">
                <img src="/close.svg" alt="close" className="w-5" />
            </button>
            <section className="text-xs w-fit bg-white rounded-sm text-center shadow-2xl opacity-95 border-orange-400">
                <h2 className="bg-neutral-800 w-full text-white text-sm mx-auto rounded-xs border-b-2 border-orange-500">¡Ponte en contacto!</h2>
                <form action="" className="grid grid-cols-1 p-1">
                    <label htmlFor="" className="flex flex-col">
                        ¿Cómo te ayudamos?
                        <select name="" id="" className="text-center w-11/12 mx-auto border-1 rounded-xs">
                            <option value=""> -- Seleccione -- </option>
                            <option value="">Comprar mayorista</option>
                            <option value="">Cotizar productos</option>
                            <option value="">Devoluciones/cambios</option>
                            <option value="">Otros</option>
                        </select>
                    </label>
                    <label htmlFor="" className="flex flex-col mx-auto">
                        Número de teléfono
                        <input type="tel" placeholder="Ej:924152116" className="text-center w-11/12 mx-auto border-1 rounded-xs" />
                    </label>
                    <label htmlFor="" className="flex flex-col mx-auto">
                        Correo electronico
                        <input type="email" className="text-center mx-auto w-11/12 border-1 rounded-xs" placeholder="example@intercarchile.cl"/>
                    </label>
                    <label htmlFor="" className="flex flex-col mx-auto">
                        Nombre y apellido
                        <input type="text" className="text-center w-11/12 mx-auto border-1 rounded-xs" placeholder="Michael Jordan"/>
                    </label>
                    <label htmlFor="" className="flex flex-col mx-auto">
                        Rut (opcional)
                        <input type="text" className="text-center w-11/12 mx-auto border-1 rounded-xs" placeholder="19183293-k"/>
                    </label>
                    <label htmlFor="" className="flex flex-col mx-auto">
                        Comentarios
                        <textarea name="" id="" className="text-center w-12/12 mx-auto border-1 rounded-xs"
                        placeholder="(opcional)"
                        ></textarea>
                    </label>
                    <button type="submit" className="hover:opacity-100 opacity-70 bg-orange-500 w-fit mx-auto rounded-xs my-2 px-1">¡Contactar!</button>
                </form>
            </section>
        </section>
    )
}