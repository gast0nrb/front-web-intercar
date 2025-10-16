import {useEffect, useState} from 'react';

const SelectDisplay = ({currentValue, setCurrentValue, url, nameValue}) => {
  useEffect(()=> {
       async function fetchValues(){
            try{
              const getValues = await fetch(url,
              {
               method : 'GET',
               mode : 'cors'
              });
               if(getValues.status == 404){
                  setError({exist : true, dataError : 'No se encontraron datos', message : 'No encontramos datos :('})
                     return;
               }
               const data = await getValues.json();
               setValues([...data.data])
            }catch(err){
               setError(true);
               return {
               error: true,
               dataError : err,
               message : 'Error fetching categories'
            }
         }
      }
     fetchValues(); 
   }, [])
   const [values, setValues] = useState([]);
   const [error, setError] = useState({exist : false, dataError : '', message : ''});

   if(error.exist){
      return <h3>Ups, tuvimos un problema cargando los datos</h3>
   }

   return (
         <div class="text-left flex-1 my-6">
         <label for="select-display" class="text-xl text-left mb-1">{nameValue}</label>
         <select
          name="select-display"
          id="categoria"
          className="p-2 
          rounded px-2 py-auto w-12/12
          text-center
          text-zinc-600
          hover:text-zinc-800
          hover:opacity-100
          duration-150
          border-1 border-zinc-300
          text-sm
         "
           onChange={(e)=> {
               setCurrentValue(e.target.value);
           }}
         key={`${nameValue}${currentValue}`}
         >
            {
              values?.map((ct)=> 
                 <option selected={ct?.id == currentValue}
                 name={ct.id}
                 value={ct.id}
                 key={ct?.id}>{ct?.name}</option>
              ) 
            }
          </select>
      </div>
         )
};

export default SelectDisplay;
