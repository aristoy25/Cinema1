import { useEffect, useState } from "react";
import { useRef } from "react";

export default function Movie ({ movie }) {
    const { title, date, image, id } = movie;

    const ref= useRef(null);
    const imgRef = useRef(null);

    const [width, setWidth] = useState(0);

    useEffect(() => {
       setWidth( ref.current.offsetWidth );

       ref.current.style.transition = "width 0.5s ease-in-out";
         imgRef.current.style.transition = "width 0.5s ease-in-out";
    }, []);

    const handleMouseEnter = () => {
        ref.current.style.width = `${width + 10}px`;
        imgRef.current.style.width = `${width + 10}px`;
    };

    const handleMouseLeave = () => {
        ref.current.style.width = `${width}px`;
        imgRef.current.style.width = `${width}px`;
    };

    return (
    <li id="liid" ref={ref} key={id} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div className="movie">
                    <h3>{title}</h3>
                    <p>Date: {date}</p>
                    <button>Trailer</button>
                    </div>
                    <img src={image} ref={imgRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
                </li>
    )
};