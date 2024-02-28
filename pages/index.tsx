import {MouseEventHandler, useState} from 'react';
import { RandomFox } from "@/components/RandomFox";


// generate a random function between 1 - 123
const random = () => Math.floor(Math.random() * 123) + 1;

type ImageItem = {id:string, url:string}

const generateId = () => Math.random().toString(36).substring(2,9)



export default function Home() {

    const [images, setImages] = useState<Array<ImageItem>>([])

    const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
        
      event.preventDefault()

      const target = event.target;


      const newImageItem = {
        id:generateId(), 
        url:`https://randomfox.ca/images/${random()}.jpg`,
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

      <button onClick={addNewFox}>
        Add new fox
      </button>
      
      {images.map(({id, url}) => (
        
        <div key= {id} className="p-4">
          <RandomFox image={url} />
        </div>

      ))}

        
      
      
    </main>
  );
}
