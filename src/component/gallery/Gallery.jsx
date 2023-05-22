import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
  const images = [
    'https://i.ibb.co/tMjmLSC/Weather-Science-Kit.jpg',
    'https://i.ibb.co/TK0NX6n/microscope-discovery.webp',
    'https://i.ibb.co/zb9Y5dT/Robotic-Engineering-Kit.webp',
    'https://i.ibb.co/JHK8hMg/Construction-Engineering-Set.jpg',
  ];

  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div className="mt-10 mb-24">
      <h2 className="font-bold text-2xl text-center mt-3 mb-14 text-amber-600">Gallery</h2>

      <div className="flex flex-wrap justify-center">
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-2"
            data-aos="zoom-in"
            data-aos-duration="4000"
            data-aos-delay={index * 100}
          >
            <img
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className="w-full h-auto rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
