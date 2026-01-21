import React from 'react';

const BuyMeACoffee: React.FC = () => {
  return (
    <div className="flex justify-center my-8">
      <a href="https://www.buymeacoffee.com/acrylis" target="_blank" rel="noopener noreferrer">
        <img 
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" 
          alt="Buy Me a Coffee" 
          style={{ height: '48px', width: '174px' }} 
        />
      </a>
    </div>
  );
};

export default BuyMeACoffee;
