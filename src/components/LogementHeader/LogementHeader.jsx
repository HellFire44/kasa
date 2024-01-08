import React from 'react';
import PropTypes from 'prop-types'; // Assurez-vous d'installer PropTypes si ce n'est pas déjà fait
import './logementHeader.scss';

function LogementHeader({ currentApartment }) {
  if (!currentApartment) return <div>Appartement non disponible</div>;

  const name = currentApartment.host?.name.split(' ') || [];
  const firstName = name[0] || '';
  const lastName = name[1] || ''; // Gère le cas où il n'y a qu'une partie du nom

  return (
    <section className="apartment__header">
      <div className='apartment__title'>
        <h1>{currentApartment.title}</h1>
        <p>{currentApartment.location}</p>
        <div className="apartment__tags">
          {currentApartment.tags.map((tag, index) => (
            <span key={tag + index}>{tag}</span> // Ajout de l'index pour garantir l'unicité de la clé
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

LogementHeader.propTypes = {
  currentApartment: PropTypes.object.isRequired
};

export default LogementHeader;
