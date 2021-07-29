import React from 'react'

const PictureFrame = ({image, alt}) => {
    return (
        <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12 flex-none px-8">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-red-300 to-pink-300 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <img src={image} className="rounded-lg" alt={alt} />
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default PictureFrame
