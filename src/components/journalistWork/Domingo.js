import React from 'react'
import PictureFrame from '../PictureFrame'
import DM1 from '../../images/DM1.jpg'
import DM2 from '../../images/DM2.jpg'
import DM3 from '../../images/DM3.jpg'

const Domingo = () => {
    return (
            <div className="flex-col items-center font-mono">
            <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-red-300 via-red-300 to-transparent">
                <h2 className="tracking-wider text-5xl mb-2 p-10">
                    Como un básico se transforma en una prenda exótica
                </h2>
                <h2 className="tracking-widest text-3xl mb-1 p-4">Domingo Domingo</h2>
                <h4 className="tracking-wider text-2xl mb-1 p-4">De Argentina al Universo, el salto que define a Domingo es Domingo</h4>
            </div>
            <div className="flex flex-col justify-center items-center mb-5">
                <div className="flex flex-col-reverse lg:flex-row-reverse justify-around p-4">
                    <PictureFrame image={DM1} alt="modelo1" orientation={false}/>
                    <div className="content-p">
                        <p>
                        Teniendo América Latina y toda su exquisita cultura como referencia no dejamos  de pensar en Visión- Diseño – Función para describir a esta marca para hombres, que con cada temporada atemporal, nos hace respirar creatividad exponencial y liderazgo como producto nacional.
                        <br />
                        <b>Agustina Alvez</b>, diseñadora y emprendedora, es quien hace crecer esta marca hace ocho años. Cuando la conocimos nos transmitió una  vibra fresca y ese gran frenesí  que caracteriza a su marca. De tal palo, tal astilla. Durante la entrevista, Agus, hizo mucho hincapié en que no cualquiera usa Domingo.  Detrás de cada colección hay una búsqueda, un estudio.. una propuesta que va más allá de cualquier tendencia.
                        <br />
                        Todas las colecciones son extremadamente diferentes pero siempre sosteniendo la filosofía de <b>Domingo</b>: prendas de uso diario pero con un éxtasis de estampas y telas un tanto extravagantes. Es por esto que cada colección  tiene su propio packaging, su propia etiqueta y su propia estrategia de marketing.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-around p-4">
                <PictureFrame image={DM2} alt="modelo2" orientation={false}/>
                    <div className="content-p">
                        <p>
                            El cliente de <b>Domingo</b> la elige por lo diferente, el algodón de pima peruano,  la textura de un bordado, el detalle en cada avío y la estampa que tanto caracteriza  a esta marca; Pantalones cuadriculados con forrería floreada,  ponchos con guardas mapuches y pilotos acharolados con capucha. Domingo centra su diseño en morfologías básicas, tales como un jogging, pero con la vuelta Dominguera: Un jogging de terciopelo con un cordón trenzado de colores haciendo analogía a los colores del cerro de siete colores, Jujuy, Argentina.
                            <br />
                            Pero eso no es todo. En Domingo podemos encontrar diferentes colecciones, tales como la Colección Guayaquil, Mardel, Folklore, Atalaya y nuestra favorita, Río. Todas hacen referencia a un lugar o movimiento cultural latinoamericano.
                            <br />
                            Para darles un ejemplo, la Colección Río, Verano 2016, esta compuesta por prendas con grabados y determinaciones que hacen referencia a la palabra, RÍO, como Río de Janerio, con sus playas y sus avenidas, Rio Paraná y su vista desde Brasil o Argentina, o simplemente juega con el verbo Reír. Es una colección, como todas, rica por la diversidad y su key to success: llena de imágenes que transportan a un recorrido a través de las prendas.
                            <br />
                            Con 3.000 productos, mínimo, por colección, Domingo se caracteriza por la fidelidad en el proceso y el desarrollo del producto. Estamos hablando de una marca que respeta cada sector de elaboración fijando su distinción en la confección: El textil se busca y se crea una prenda especifica para poder transmitir la base principal de la marca,  multiplicidad y comodidad. 
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center bg-gradient-to-b from-transparent via-red-100 to-transparent">
                    <h2 className="text-2xl mb-1 p-4"><em>“El buen Diseñador es el que trabaja para el otro, nuestro objetivo es mostrar la impronta de uno para llegar a todos”</em></h2>
                    <h2 className="text-5xl mb-2 p-10">Agustina Alvez</h2>
                </div> 
                <div className="flex flex-col-reverse lg:flex-row-reverse justify-around p-4">
                    <PictureFrame image={DM3} alt="modelo3" orientation={false}/>
                    <div className="content-p">
                        <p>
                        Loco, no? Pero esta es la energía que maneja la marca. Una energía innovadora que te invita a romper con las estructuras y tendencias establecidas y te deja que seas vos el que marca su propia identidad con prendas pensadas. <em>“La idea es que se coman el mismo viaje que el diseñador”</em>
                        <br />
                        Hoy Domingo es Domingo es elegido por grandes bandas de la música Argentina y realiza colecciones capsulas para marcas fuera del rubro como Campari, Garibaildi y Negroni: la variedad de opciones no solo se ven en las prendas sino también en la filosofía y el estilo de vida de la marca.
                        <br />
                        Polifacético, hiperactivo y dinámico, Domingo prepara su próxima colección pero esta vez para mujeres. 
                        <br />
                        Sin salir de la ideología, se viene SABADO. Una línea especial para el equipo femenino que buscan ropa adaptable a cualquier situación y ajena a las tendencias masivas.
                        </p>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Domingo