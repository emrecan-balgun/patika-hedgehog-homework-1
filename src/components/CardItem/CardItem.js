import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changePhotos } from '../../app/gallerySlice'
import { toast } from 'react-toastify';

function CardItem(props) {
    const dispatch = useDispatch();
    const photos = useSelector((state) => state.gallery.photos)

    const successNotify = () => toast.success('Başarıyla silindi!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const cancelNotify = () => toast.info('Silme işlemi iptal edildi!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const deleteItem = (id) => {
        if (window.confirm("Gerçekten silmek istiyor musunuz?")) {
            const newPhotos = photos.filter(photo => photo.id !== id);
            dispatch(changePhotos(newPhotos));
            successNotify();
        } else {
            cancelNotify();
        }
    }

  return (   
    <div className="w-full md:w-1/2 xl:w-1/3 lg:px-4 xl:px-4 2xl:px-4 md:px-4">
        <div className="bg-white rounded-lg overflow-hidden mb-10">
        <img
            src={props.photo}
            className="w-96 h-96 object-cover hover:scale-90 hover:ease-in hover:duration-200"
            />
        <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
            <h3 
                className="
                    font-semibold
                    text-dark text-xl
                    sm:text-[22px]
                    md:text-xl
                    lg:text-[22px]
                    xl:text-xl
                    2xl:text-[22px]
                    mb-4
                    block
                    hover:text-primary
                    ">
                {props.title}
            </h3>
            <button
                className="
                inline-block
                py-2
                px-7
                bg-red-500
                text-white
                border border-[#E5E7EB]
                rounded-full
                cursor-pointer
                text-base text-body-color
                font-medium
                hover:border-primary hover:bg-red-600 hover:text-white
                transition
                "
                onClick={() => deleteItem(props.id)}
                >
                Delete
            </button>
        </div>
        </div>
    </div>
  )
}

export default CardItem