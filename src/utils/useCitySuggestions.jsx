import { useState, useEffect, useRef } from 'react';
import { BASE_URL } from '../api/api';

export const useCitySuggestions = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const abortControllerRef = useRef(null);

  const fetchCities = async (cityName) => {
    if (!cityName || cityName.length < 2) {
      setSuggestions([]);
      return;
    }

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();
    
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${BASE_URL}/routes/cities?name=${encodeURIComponent(cityName)}`,
        { signal: abortControllerRef.current.signal }
      );
      
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }
      
      const data = await response.json();
      setSuggestions(data.slice(0, 10)); 
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError('Ошибка при загрузке городов');
        console.error('Error fetching cities:', err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const clearSuggestions = () => {
    setSuggestions([]);
    setError(null);
  };

  
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  return {
    suggestions,
    isLoading,
    error,
    fetchCities,
    clearSuggestions
  };
};