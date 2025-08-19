import { useState } from "react";
import SelectSubcategory from "./SelectSubcategory";
import SelectCategory from "./SelectCategory";

//Filter se utiliza para ver si es que es categoria o subcategoria de donde estamos filtrando
const Order = ({ idCategory, filter, idSubCategory  }) => {
  const [currentCategory, setCurrentCategory] = useState(idCategory);
  const [currentSubcategory, setCurrentSubcategory] = useState(idSubCategory);
  const [apiUrl, setApiUrl] = useState("http://localhost:4321/categorias?filter=0&id=1&page=0");
  return (
    <>
      <div className="bg-neutral-50 w-11/12 mx-auto mt-5 p-2 rounded-xs drop-shadow-sm">
        <h3 className="font-semibold text-center text-xl">Filtros</h3>
        <form action={apiUrl} className="grid grid-cols-2 gap-5 w-11/12 mx-auto" method="post">
          <SelectCategory name={"Categorias"} url={"http://localhost:8080/api/intercar/category"} setCurrentCategory={setCurrentCategory} idCategory={idCategory} setApiUrl={setApiUrl} currentCategory={currentCategory}/>
          <SelectSubcategory name={"Subcategorias"} url={`http://localhost:8080/api/intercar/category/${idCategory}/subcategories`}  setApiUrl={setApiUrl}  apiUrl={apiUrl} currentSubcategory={currentSubcategory}/>
          <button type="submit" className=" w-fit px-5 rounded-y-xs bg-neutral-100 drop-shadow-lg text-xs ml-auto -mr-5 col-span-2 text-orange-500 duration-100 border-x-1 border-orange-500 opacity-60 hover:opacity-100 ">Aplicar</button>
        </form>
      </div>
    </>
  )
}

export default Order;