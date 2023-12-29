import React from 'react';

interface RatingProps {
  rate: number;
  count: number;
}

const Rating: React.FC<RatingProps> = ({ rate, count }) => {
  const renderStars = () => {
    const fullStars = Math.floor(rate);
    const partialStar = rate - fullStars;

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="fa fa-star checked" />
      );
    }

    if (partialStar > 0) {
      stars.push(
        <span key="partial" className="fa fa-star-half checked" />
      );
    }

    return stars;
  };

  return (
    <div className="rating">
      {renderStars()}
      <span className="count">({count} reviews)</span>
    </div>
  );
};

export default Rating;
