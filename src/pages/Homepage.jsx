import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import PlaceCard from '../components/PlaceCard'; 

import muhangaImage from '../images/muhanga.png';
import kigaliImage from '../images/Kigali.png';
import rubavuImage from '../images/rubavu.png';
import nyanzaImage from '../images/nyanza.png';
import nyamagabeImage from '../images/nyamagabe.png';
import karongiImage from '../images/karongi.png';
import musanzeImage from '../images/musanze.png';
import rwamaganaImage from '../images/rwamagana.png';
import kayonzaImage from '../images/kayonza.png';
import nyaruguruImage from '../images/nyaruguru.png';
import kamonyiImage from '../images/kamonyi.png';
import huyeImage from '../images/huye.png';

const HomePage = () => {
  const places = [
    { name: 'Muhanga', image: muhangaImage },
    { name: 'Kigali City', image: kigaliImage },
    { name: 'Rubavu', image: rubavuImage },
    { name: 'Nyanza', image: nyanzaImage },
    { name: 'Nyamagabe', image: nyamagabeImage },
    { name: 'Karongi', image: karongiImage },
    { name: 'Musanze', image: musanzeImage },
    { name: 'Rwamagana', image: rwamaganaImage },
    { name: 'Kayonza', image: kayonzaImage },
    { name: 'Nyaruguru', image: nyaruguruImage },
    { name: 'Kamonyi', image: kamonyiImage },
    { name: 'Huye', image: huyeImage },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="py-12 mr-[400px]">
          <div className="container mx-auto ml-[200px]">
            <h2 className="text-2xl mt-[30px] mb-[30px] ml-[400px]">KNOW SOME PLACES WE TRAVEL TO</h2>
            <h2 className="text-2xl ml-[500px] mb-[30px]"> PLACES</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {places.map((place, index) => (
                <PlaceCard 
                  key={index}
                  placeName={place.name}
                  imageUrl={place.image}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
