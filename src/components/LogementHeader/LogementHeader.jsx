import React from 'react';
import './logementHeader.scss';

function LogementHeader({ currentApartment }) {
  if (!currentApartment) return <div>Appartement non disponible</div>;

  const name = currentApartment.host?.name.split(' ') || [];
  const firstName = name[0] || '';
  const lastName = name[1] || ''; 

  return (
    <section className="apartment__header">
      <div className='apartment__title'>
        <h1>{currentApartment.title}</h1>
        <p>{currentApartment.location}</p>
        <div className="apartment__tags">
          {currentApartment.tags.map((tag, index) => (
            <span key={tag + index}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="apartment__owner">
        <div className="apartment__owner__details">
          <h3>
            <span>{firstName}</span>
            <span>{lastName}</span>
          </h3>
          <div className="apartment__owner__badge">
            <img src={currentApartment.host.picture} alt="Photos de l'hôte" />
          </div>
        </div>
        <div className='apartment__owner__stars'>
          {[1, 2, 3, 4, 5].map((num) => (
            <span key={num} className={currentApartment.rating >= num ? "on" : ""}>★</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LogementHeader;
