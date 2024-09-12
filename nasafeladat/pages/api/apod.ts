import type { NextApiRequest, NextApiResponse } from 'next';

type ApodResponse = {
  date: string;
  explanation: string;
  title: string;
  url: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApodResponse | { error: string }>
) {
  const { date } = req.query;

  if (!date) {
    return res.status(400).json({ error: 'Dátum szükséges' });
  }

  const apiKey = 'YOUR_NASA_API_KEY'; // Cseréld ki a saját API kulcsodra
  const apiUrl = `http://localhost:3001/api/date=${date}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.error.message });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: 'Hiba történt a lekérés során' });
  }
}
