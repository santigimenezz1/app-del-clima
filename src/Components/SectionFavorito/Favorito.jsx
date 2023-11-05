import '../SectionFavorito/favorito.css'
import TarjetaFavorito from '../TarjetaFavorito/TarjetaFavorito'
import Buscador from './Buscador/Buscador'
const Favorito = () => {
  return (
    <div className='favorito'> 
    <div className='favorito__buscador'>
    <Buscador />
    </div>
    </div>
  )
}

export default Favorito