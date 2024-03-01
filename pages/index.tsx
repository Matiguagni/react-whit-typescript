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
    <main className="m-4">

      <h1 className="text-3xl font-bold underline">
        Hola mundo
      </h1> 

      <button onClick={addNewFox} className=' '>
        Add new fox
      </button>
      
      {images.map(({id, url}) => (
        
        <div key= {id} className="p-4">
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
