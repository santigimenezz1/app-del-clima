import './App.css'
import TarjetaFavorito from './Components/TarjetaFavorito/TarjetaFavorito'

function App() {

  return (
    <>
    <TarjetaFavorito urlVideo={"https://res.cloudinary.com/dcf9eqqgt/video/upload/v1697403666/APP%20del%20tiempo/production_id_4562023_720p_pejcs1.mp4"} cuidad={"Valencia"} grados={24} />
    <TarjetaFavorito urlVideo={"https://res.cloudinary.com/dcf9eqqgt/video/upload/v1697406318/APP%20del%20tiempo/video_360p_mgvcqh.mp4"} cuidad={"Barcelona"} grados={20} />
    <TarjetaFavorito urlVideo={"https://res.cloudinary.com/dcf9eqqgt/video/upload/v1697406590/APP%20del%20tiempo/soleado_nkqpac.mp4"} cuidad={"Rosario"} grados={11} />
   
    </>

  )
}

export default App
