import {useEffect , useState} from 'react'

export const useScreenWidth = () => {
    let [width, setWidth]= useState(window.innerWidth || 0)
    useEffect(() => {
      window.addEventListener('resize', (() => {
        setWidth(window.innerWidth)
      }));
    }, [width]);
    if(width<=630){
       return width = 630
    }else if(width <= 992){
        return width = 992
    }else if(width <= 1024){
        return width = 1024
    }else if(width <= 1440){
        return width = 1440
    }else{
        width=2560
    }
}
