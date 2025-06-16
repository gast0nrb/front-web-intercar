import { useState } from "react";
import SelectSubcategory from "./SelectSubcategory";
import SelectCategory from "./SelectCategory";

const Order = ({ idCategory, filter }) => {
  const [currentCategory, setCurrentCategory] = useState(idCategory);
  const [changeSubcategories, setChangeSubcategories] = useState(false);
  const [currentUrl, setUrl] = useState('http://localhost:8080/api/intercar/category/${currentCategory}/products?page=0');
  return (
    <>
      <div class="bg-neutral-50 w-11/12 mx-auto mt-5 p-2 rounded-xs drop-shadow-sm">
        <h3 class="font-semibold text-center text-xl">Filtros</h3>
        <form action="/categorias?filter=0&id=2&page=0" class="grid grid-cols-2 gap-5 w-11/12 mx-auto" method="post">
          <SelectCategory name={"Categorias"} url={"http://localhost:8080/api/intercar/category"} setCurrentCategory={setCurrentCategory} setChangeSubcategories={setChangeSubcategories} currentCategory={currentCategory} idCategory={idCategory}/>
          <SelectSubcategory name={"Subcategorias"} url={`http://localhost:8080/api/intercar/category/${currentCategory}}/subcategories`} currentCategory={currentCategory} changeSubcategories={changeSubcategories} />
          <button type="submit" class=" w-fit px-5 rounded-y-xs bg-neutral-100 drop-shadow-lg text-xs ml-auto -mr-5 col-span-2 text-orange-500 duration-100 border-x-1 border-orange-500 opacity-60 hover:opacity-100 ">Aplicar</button>
        </form>
      </div>
    </>
  )
}

export default Order;