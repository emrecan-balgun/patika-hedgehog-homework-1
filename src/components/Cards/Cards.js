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
    <section className="pt-[30px] pb-[10px] bg-[#F3F4F6]">
        <div className="container">
            <div className="flex flex-wrap -mx-4">
                {photos.map(photo => (
                <CardItem key={photo.id} albumId={photo.albumId} photo={photo.url} title={photo.title} thumbnail={photo.thumbnailUrl} />
                ))}
            </div>
         </div>
     </section>
  )
}

export default Cards;