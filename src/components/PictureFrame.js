import React from 'react'
import Tilt from 'react-tilt'

const PictureFrame = ({image, alt, orientation}) => {
    
    return (
        <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12 flex-none px-8">
            <Tilt
                options={{
                reverse: false,
                max: 8,
                perspective: 1000,
                scale: 1,
                speed: 300,
                transition: true,
                axis: null,
                reset: true,
                easing: 'cubic-bezier(.03,.98,.52,.99)',
                }}
            >
                <div className="Tilt-inner relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className={({orientation}) ? (console.log("orientation is true"), 'absolute inset-0 bg-gradient-to-r from-red-300 via-pink-300 to-yellow-300 shadow-lg transform -skew-y-6 sm:skew-y-0 -rotate-6 sm:rounded-3xl') : (console.log("orientation is false"), 'absolute inset-0 bg-gradient-to-r from-yellow-300 via-red-300 to-pink-300 shadow-lg transform -skew-y-6 sm:skew-y-0 rotate-6 sm:rounded-3xl')}></div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <img src={image} className="rounded-lg" alt={alt} />
                        </div>
                    </div>  
                </div>
                
            </Tilt>
        </div>
    )
}

export default PictureFrame
