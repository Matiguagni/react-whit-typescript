import { useRef, useEffect, useState } from "react";
import type { ImgHTMLAttributes } from "react";

type LazyImageProps = {src:string};

type ImageNative = ImgHTMLAttributes<HTMLImageElement>;

type Props = LazyImageProps & ImageNative;

export const LazyImage = ({src, ...imgProps}:Props): JSX.Element => { /* con el spread operator
 logro adquirir todas los metodos de un elemnto image, sin tener que aclarar cada uno que utilice */

    const node = useRef<HTMLImageElement>(null)

    const [currentSrc, setCurrentSrc] = useState(
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
    )

    useEffect(() => {
        //nuevo observador
        const observer = new IntersectionObserver((entries) =>{
            entries.forEach((entry)=> {
                //en la interseccion -> console.log
                if(entry.isIntersecting){
                    setCurrentSrc(src)
                }
            })
        })
        
        //observar nodo
        if(node.current){
            observer.observe(node.current)
        }
    
    
        //disconnect
        return() => {
            observer.disconnect();
        }
    
    
    }, [src]);


    return( 
    <img 
        ref={node}  
        src={currentSrc} 
        {...imgProps} /*con esto adquirimos todos los metodos posibles de un elemento image,
                      por lo tanto no hace falta definir aqui (heigh, title, onClick, etc),
                      directamente se le da su comportamiento/valor
                      en nuestro componente en el main*/
        
    />
    )
}

