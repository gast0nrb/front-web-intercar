import SelectCategory from './SelectCategory'
import SelectSubcategory from './SelectSubcategory'
import {useState} from 'react';

const Sort = ({categoryParam, subcategoryParam}) => {
  const [currentCategory, setCurrentCategory] = useState(categoryParam);
  const [currentSubcategory, setCurrentSubcategory] = useState(subcategoryParam);
   return (
    <section
        class=" xs:w-10/12 md:w-8/12 mx-10 my-8">
        <h2 class="text-left pl-4 pb-2 text-xl font-bold">Filtrar por</h2>
        <form
            id="categoriaForm"
            action={`http://localhost:4321/categorias/1`}
            method="post"
            class="flex w-10/12 gap-4 px-5 text-center py-2">
               <SelectCategory currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}/>
               <SelectSubcategory currentCategory={currentCategory}/>
               <button
                   class="h-fit mt-auto py-1 px-3
                   rounded-sm
                   text-zinc-600
                   mx-auto
                   opacity-50
                   border-1 border-orange-200 opacity-50
                   hover:opacity-100 duration-150
                   hover:border-orange-300
                   text-sm"
                   type="submit">Buscar
                </button>
        </form>
      </section>
   )
}


export default Sort;
