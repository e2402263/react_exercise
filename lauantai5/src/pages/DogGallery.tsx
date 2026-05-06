import React, { useState, useEffect } from 'react';

export function DogGallery() {
  const [dogUrl, setDogUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random') 
      .then((response) => response.json())           
      .then((data) => {
        setDogUrl(data.message);
        setIsLoading(false);
      })       
      .catch((error) => console.error(error));       
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-black mb-6 text-gray-800">Random Dog 🐶</h2>
      {isLoading ? (
        <p className="text-blue-500 animate-pulse font-bold">Loading dog...</p>
      ) : (
        <img src={dogUrl} alt="Dog" className="rounded-2xl shadow-xl w-64 h-64 object-cover" />
      )}
    </div>
  );
}