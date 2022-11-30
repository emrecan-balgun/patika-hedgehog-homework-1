import React from 'react'

function CardItem(props) {
  return (   
    <div className="w-full md:w-1/2 xl:w-1/3 lg:px-4 xl:px-4 2xl:px-4 md:px-4">
        <div className="bg-white rounded-lg overflow-hidden mb-10">
        <img
            src={props.photo}
            alt="image"
            className="w-full"
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
            <a
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
                hover:border-primary hover:bg-primary hover:text-white
                transition
                "
                >
            Delete
            </a>
        </div>
        </div>
    </div>
  )
}

export default CardItem