"use client"

import { useState } from 'react';

type ApodData = {
  date: string;
  explanation: string;
  title: string;
  url: string;
};

export default function ApodForm() {
  const [date, setDate] = useState<string>('');
  const [apodData, setApodData] = useState<ApodData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/apod?date=${date}`);
      const data: ApodData | { error: string } = await response.json();

      if (!response.ok) {
        setError((data as { error: string }).error);
      } else {
        setApodData(data as ApodData);
        setError(null);
      }
    } catch (err) {
      setError('Hiba történt a lekérés során');
    }
  };

  return (
    <div className='w-full mt-5'>
      <form onSubmit={handleSubmit} className='flex gap-5 mx-auto w-max'>
        <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className='border border-gray-300 p-2 rounded'
          />
        <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Lekérés</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {apodData && (
        <div>
          <h2>{apodData.title}</h2>
          <p>{apodData.explanation}</p>
          <img src={apodData.url} alt={apodData.title} />
        </div>
      )}
    </div>
  );
}
