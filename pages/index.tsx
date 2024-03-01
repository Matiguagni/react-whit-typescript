import  {MouseEventHandler, useState } from 'react';
import { LazyImage } from "@/components/RandomFox";

import { random } from "lodash";


// generate a random function between 1 - 123
const myRandom = () => random(1, 123);



const generateId = () => Math.random().toString(36).substring(2,9)



export default function Home() {

    const [images, setImages] = useState<Array<IImageItem>>([])

    const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
        
      event.preventDefault()

      const target = event.target;


      const newImageItem = {
        id:generateId(), 
        url:`https://randomfox.ca/images/${myRandom()}.jpg`,
      };

      setImages([
        ...images,
        newImageItem
      ])

    }

  return (
    <main className="box-border  flex flex-col items-center justify-center ml-48 mr-48 pl-32 pr-32  max-w-screen-lg  ">

      <h1 className="text-l mt-4 font-sans font-medium leading-5 text-blue-500">
        CURSO DE REACT CON TYPESCRIPT
      </h1> 
      <h1 className=" mt-2 font-bold text-3xl flex justify-center align-middle">
        Componente Lazy Image
      </h1> 
      <h1 className="mt-2 text-m font-sans font-medium text-gray-500">
        Un componente generico de react para cargar imagenes con lazy loading
      </h1> 
      <span className='mt-4'>
         ⭐ ⭐ 
         </span>
      <h1 className="mt-4 text-m font-sans font-medium text-gray-500">
        Las imagenes agregadas no se cargaran hasta cargar en el viewPort de la pantalla
      </h1> 
      <span className='mt-4'>
         ⭐ ⭐ 
         </span>

      <button onClick={addNewFox} className='border border-white hover:bg-blue-700 hover:border-black py-2 px-4 text-white font-bold mt-6 rounded-md shadow-md transition duration-300 ease-in-out  bg-blue-500 '>
        Agregar nuevo zorro
      </button>
      
      {images.map(({id, url}) => (
        
        <div key= {id} className="p-4 mt-6">
          <LazyImage    /* gracias al spread operator podemos acceder en nuestro componente a todas las propiedades de un elemento image */
           width={320} 
           height="auto"
           src={url}
           className="rounded bg-gray-300" 
           onClick = {() => console.log("Hey")}
          />
        </div>

      ))}

        
      
      
    </main>
  );
}
