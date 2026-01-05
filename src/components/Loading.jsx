import { useEffect, useState } from 'react';

export default function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);

  if (!loading) return null; 

  return (
    <div className="loader-container">
      <span className="loader"></span>
    </div>
  );
}
