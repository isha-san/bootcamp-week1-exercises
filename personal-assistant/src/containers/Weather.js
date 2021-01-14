import React from 'react';
function Weather() {
    const [weather, setWeather] = useState('');
    useEffect(() => {
        const fetchData = async () => {
          const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=naples&appid=3e4c1b9fbad33eada931b5d86494a268');
          const data = await res.json();
          setWeather(data.weather[0].description)
        }
    fetchData();
    }, [])
  
  return (
    <div>
      This is the weather today: 
      {weather}
    </div>
  );
}
