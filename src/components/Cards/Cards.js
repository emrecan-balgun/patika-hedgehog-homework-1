import CardItem from '../../components/CardItem/CardItem'
import React, {useEffect } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { changePhotos } from '../../app/gallerySlice'

function Cards() {
    const dispatch = useDispatch();
    const searchItem = useSelector((state) => state.gallery.searchItem)
    const photos = useSelector((state) => state.gallery.photos)

    const fetchData = () => {
        try {
            axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10').then(response => {
                dispatch(changePhotos(response.data));
            })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
      fetchData();
    }, [])

    const filteredPhotos = photos.filter(photo => photo.title.toLowerCase().includes(searchItem.toLowerCase()));

  return (
    <section className="pt-[20px] pb-[10px] bg-[#F3F4F6]">
        <div className="container">
            <div className="flex flex-wrap -mx-4">
                {filteredPhotos.map(photo => (
                <CardItem key={photo.id} id={photo.id} albumId={photo.albumId} photo={photo.url} title={photo.title} thumbnail={photo.thumbnailUrl} />
                ))}
            </div>
         </div>
     </section>
  )
}

export default Cards;