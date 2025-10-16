import {useState, useEffect} from 'react';
import SelectDisplay from './SelectDisplay'

const FormDisplay = ({paramValue, url, nameValue, UrlQueryToSubcategory}) => {
   const [currentValue, setCurrentValue] = useState(paramValue);
   const formUrl = `${UrlQueryToSubcategory.length > 0 ?
         `/subcategoria/${currentValue}?category=${UrlQueryToSubcategory}`
         : `/categorias/${currentValue}`}`;
   return (
      <form className="xs:w-10/12 md:w-4/12 px-5 flex gap-4" action={`${formUrl}`} method="POST">
         <SelectDisplay currentValue={currentValue} setCurrentValue={setCurrentValue} url={url} nameValue={nameValue}/>
         <button className="text-sm border-1 border-zinc-300 h-fit py-1 px-3 mb-auto mt-14 rounded-sm opacity-50
            hover:text-zinc-800 hover:opacity-100 duration-200"
            >buscar</button>
      </form>
   )
};

export default FormDisplay;
