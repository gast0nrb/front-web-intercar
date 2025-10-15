import {useEffect, useState} from 'react';

const SelectSubcategory = ({currentSubcategory, setCurrentSubcategory, currentCategory}) => {
  useEffect(()=> {
       async function fetchSubcategories(){
            try{
              const getSubcategories = await fetch(
                 `http://localhost:8080/api/intercar/category/${currentCategory}/subcategories`,
              {
               method : 'GET',
               mode : 'cors'
              });
            
               if(getSubcategories.status == '200' || getSubcategories.status == '201'){
                  const data = await getSubcategories.json();
                  setSubcategories([...data.data])
                  return;
               }
               setError({exist : true, status : 404, dataError : 'doesnt found subcategories', message : 'no se encontraron subcategories'});
            }catch(err){
               console.log(err);
               setError({
               exist : true,
               status: 500,
               dataError : err,
               message : 'Error fetching subcategories'
            })
         }
      }
     fetchSubcategories(); 
   }, [])
 
   const [subcategories, setSubcategories] = useState([]);
   const [error, setError] = useState({exist : false, status: 0, dataError : '', message : ''});

   if(error.status == 404){
      return (
         <label class="text-left">
         Subcategorias
         <select
          class="
          rounded py-auto w-12/12
          duration-100 p-2
          text-center
          text-zinc-600
          opacity-20
          duration-150
          border-1 border-red-500
          text-sm"
          disabled 
         >
            <option defautValue class="">-- No hay asociados --</option>
         </select>
         </label>
      )
   }

   if(error.status == 500){
      return <h3 class="text-xs mt-auto">¡Algo exploto :o! No pudimos cargar subcategorias</h3>
   }

   return(
      <div class="text-left flex-1">
         <label for="select-subcategory" class="text-sm mb-1">Subcategorias</label> 
         <select name="select-subcategory" class="
          p-2
          rounded px-2 py-auto w-12/12
          focus:flex-1
          duration-100
          text-center
          text-zinc-600
          hover:text-zinc-800
          hover:opacity-100
          duration-150
          border-1 border-zinc-300
          text-sm">
            {
               subcategories.map((subcategory)=> <option
                  key={subcategory?.id}
                  >{subcategory?.name}</option>)   
            }
         </select>
      </div>
   )
};

export default SelectSubcategory;
