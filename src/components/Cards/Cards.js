import CardItem from '../../components/CardItem/CardItem'
import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Cards() {
    const [photos, setPhotos] = useState([]);

    const fetchData = () => {
        try {
            axios.get('https://jsonplaceholder.typicode.com/photos?_limit=50').then(response => {
                setPhotos(response.data);
            })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
      fetchData();
    }, [])

  return (
    <div className="flex flex-wrap">
    {photos.map(photo => (
      <CardItem key={photo.id} photo={photo.url} title={photo.title} />
    ))}
  </div>
  )
}

export default React.memo(Cards);