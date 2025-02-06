// filepath: /c:/Users/Laptop/Desktop/Cinema1/Frontend/vite-project/src/components/ui/Carousel.jsx
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styles from './Carousel.module.css';
import ArrowLeft from '../../assets/LeftArrow.svg';

const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);
    const imageRef = useRef(null);
    const carouselRef = useRef(null);

    const prevSlide = useMemo(() => {
        return () => {
            setIndex((index - 1 + images.length) % images.length);
        };
    }, [index, images.length]);

    const nextSlide = useMemo(() => {
        return () => {
            setIndex((index + 1) % images.length);
        };
    }, [index, images.length]);

  const openFullscreen = () => {
    if (carouselRef.current.requestFullscreen) {
      carouselRef.current.requestFullscreen();
    } else if (carouselRef.current.mozRequestFullScreen) { /* Firefox */
      carouselRef.current.mozRequestFullScreen();
    } else if (carouselRef.current.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      carouselRef.current.webkitRequestFullscreen();
    } else if (carouselRef.current.msRequestFullscreen) { /* IE/Edge */
      carouselRef.current.msRequestFullscreen();
    }
  };

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  }, [prevSlide, nextSlide]);


  useEffect(() => {
document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
  }
}, [handleKeyDown]);



  return (
<div className={styles.container}>
    <h3>Top Picks of the month</h3>
    <div ref={carouselRef} className={styles.carousel}>
      <button className={styles.button} onClick={prevSlide}>
        <img src={ArrowLeft} alt="Left arrow" />
      </button>
      <div className={styles.imageContainer}>
        <img 
        ref={imageRef}
        className={styles.image} src={images[index].src} alt={images[index].title}
        onClick={openFullscreen}
        />
      </div>
      <button className={styles.button} onClick={nextSlide}>
      <img src={ArrowLeft} alt="rightt arrow"/>
      </button>
    </div>
</div>
  );
};

export default Carousel;