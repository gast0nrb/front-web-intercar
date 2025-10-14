import {useEffect, useState} from 'react';

const SelectCategory = () => {
  useEffect(()=> {
       async function fetchCategories(){
            try{
              const getCategories = await fetch("http://localhost:8080/api/intercar/category?page=1&sort=name",
              {
               method : 'GET',
               mode : 'cors'
              });
               const data = await getCategories.json();
               console.log(data)
               setCategories([...data.data])
            }catch(err){
               return {
               error: true,
               dataError : err,
               message : 'Error fetching categories'
            }
         }
      }
     fetchCategories(); 
   }, [])
   const [categories, setCategories] = useState([]);
   const [error, setError] = useState(false);

   if(error){
      return <h3>Ups, tuvimos un problema cargando las categorias</h3>
   }

   return (
         <div class="text-left flex-1">
         <label for="select-subcategory" class="text-sm text-left mb-1">Categorias</label>
         <select
          name="select-subcategory"
          id="categoria"
          className="p-2 
          rounded px-2 py-auto w-12/12
          duration-100
          text-center
          text-zinc-600
          hover:text-zinc-800
          hover:opacity-100
          duration-150
          border-1 border-zinc-300
          text-sm
         ">
            {
              categories?.map((ct)=> 
                 <option>{ct?.name}</option>
              ) 
            }
          </select>
      </div>
         )
};

export default SelectCategory;
