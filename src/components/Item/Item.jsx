import { Link } from 'react-router-dom'
import './Item.css'
import '../../asyncMock'

const Item = ({ id, name, img, price, stock }) => {

    return (
        <div className="CardContainer">
            <article className="CardItem">
                <header className="Header">
                    <h2 className="ItemHeader">
                        {name}
                    </h2>
                </header>
                <picture>
                    <img src={img} alt={name} className='ItemImg' />
                </picture>
                <section>
                    <p className="Info">
                        Precio: U$D{price}
                    </p>
                    <p className="Info">
                        Stock Disponible: {stock}
                    </p>
                    <footer className="ItemFooter">
                        <Link to={`/item/${id}`} className='Option'>Ver detalle</Link>
                    </footer>
                </section>
            </article>
        </div>
    )
}

export default Item