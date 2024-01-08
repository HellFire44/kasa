import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './logement.scss';
import { Collapse } from '../../components/Collapse/Collapse';
import datas from '../../data/data.json';
import { SlideShow } from '../../components/SlideShow/SlideShow';
import ApartmentHeader from '../../components/LogementHeader/LogementHeader';
import { useParams } from 'react-router-dom';

function Logement() {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const { id } = useParams();
  const currentApartment = datas.filter(data => data.id === id);

  useEffect(() => {
    const currentApartment = datas.filter(data => data.id === id);
    setImages(currentApartment[0]?.pictures || []);
  }, [id]);

  useEffect(() => {
    // Vérifiez si l'appartement existe, sinon redirigez vers la page 404
    if (!currentApartment.length) {
      navigate('../ErrorPage/ErrorPage.jsx');
    }
  }, [currentApartment, navigate]);

  // Ajoutez une vérification pour s'assurer que currentApartment[0] existe
  if (!currentApartment.length || !currentApartment[0]) {
    // Vous pouvez également afficher un message d'erreur ou une page de chargement ici
    return <div>Appartement non trouvé</div>;
  }

  return (
    <div className='logement-page'>
      <SlideShow pictures={images} numberPhotos={currentApartment[0]?.pictures.length || 0} />
      <ApartmentHeader currentApartment={currentApartment[0]} />
      <div className='logement__desc__area'>
        <Collapse title="Description" content={currentApartment[0].description} />
        <Collapse title="Équipements" content={currentApartment[0].equipments.map((eq, index) => (
          <li key={index}>{eq}</li>
        ))} />
      </div>
    </div>
  );
}

export default Logement;

