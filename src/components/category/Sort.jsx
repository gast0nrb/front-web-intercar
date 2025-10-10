import SelectCategory from './SelectCategory'

const Sort = () => {
   return (
    <section
        class=" xs:w-10/12 md:w-4/12 mx-10 my-8">
        <h2 class="text-left pl-4 pb-2 text-xl font-bold">Seleccionar categoria</h2>
        <form
            id="categoriaForm"
            action={`http://localhost:4321/categorias/1`}
            method="post"
            class="flex
                   w-full 
                   gap-4 px-5 text-center py-2">
               <SelectCategory/>
                           <button
                  class="w-fit px-4
                         rounded-sm
                         text-zinc-600
                         mx-auto
                         opacity-50
                         border-1 border-orange-200 opacity-50
                         hover:opacity-100 duration-150
                         hover:border-orange-300
                         flex-1"
                         type="submit">Buscar</button>
        </form>
      </section>
   )
}


export default Sort;
