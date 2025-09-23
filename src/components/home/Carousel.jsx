import { useState } from 'react';

const Carousel = () => {
    const images = [
        { id: 1, src: "/waze.svg", alt: "Waze" },
        { id: 2, src: "/wsp.png", alt: "WSP" },
        { id: 3, src: "/cars.png", alt: "Cars" }
    ];

    //chequear que no sobrepase los valores limitantes y realizar la operación de sumar o restar, sino reiniciar.
    const handlePrev = () => setCurrentIndex((currentIndex <= 0) ? images.length - 1 : currentIndex - 1);
    const handleNext = () => setCurrentIndex((currentIndex >= images.length - 1) ? 0 : currentIndex + 1);

    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <>
        <div className="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
                </div>
            </div>
            <button className="carouselPrev" onClick={handlePrev}>Anterior</button>
            <button className="carouselNext" onClick={handleNext}>Siguiente</button>
        </div>
        </>
    )
}

export default Carousel;