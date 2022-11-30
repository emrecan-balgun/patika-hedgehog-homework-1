import { useState, useEffect } from 'react'
import CardItem from '../../components/CardItem/CardItem'
import SearchBar from '../../components/SearchBar/SearchBar';
import Welcome from '../../components/Welcome/Welcome';
import axios from 'axios';

function Home() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    try {
      axios.get('https://jsonplaceholder.typicode.com/photos?_limit=50').then(response => {
        setPhotos(response.data);
      })
    } catch (error) {
      console.log(error);
    }
  }, [])

  return (
    <div className="container mx-auto">
      <Welcome message="Welcome to the Photo Gallery" />
      <SearchBar />
      <div className="flex flex-wrap">
        {photos.map(photo => (
          <CardItem key={photo.id} photo={photo.url} title={photo.title} />
        ))}
      </div>
    </div>
  )
}

export default React.memo(Home);