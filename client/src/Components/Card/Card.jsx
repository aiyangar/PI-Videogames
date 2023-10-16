import React from 'react';
import './Card.styles.css';

const Card = ({ name, platform, image, released, rating, genre, id }) => {
  const platformText = platform.join(', ');
  const genreText = genre.join(', ');

  return (
    <div className="cardContainer">
      <div className="frontCard">
        <div className="upperSection">
          <img src={image} alt={name} />
        </div>
        <div className="lowerSection">
          <h2>{name}</h2>
        </div>
      </div>
      <div className="backCard">
        <p>Platforms: {platformText}</p>
        <p>Released: {released}</p>
        <p>Rating: {rating}</p>
        <p>Genres: {genreText}</p>
      </div>
    </div>
  );
};

export default Card;





// import React from 'react'
// import './Card.styles.css'

// const Card = ({name, platform, image, released, rating, genre, id}) => {
//   return (
//     <div className="cardContainer">
//       <div className="frontCard">
//         <div className="upperSection">
//           <img src={image} alt={name} />
//         </div>
//         <div className="lowerSection">
//           <h2>{name}</h2>
//         </div>
//       </div>
//       <div className="backCard">
//         <p>{platform}</p>
//         <p>{released}</p>
//         <p>{rating}</p>
//         <p>{genre}</p>
//         {console.log(genre)}
//       </div>
//     </div>
//   )
// }

// export default Card