import './CartWidget.css'
import cart from './assets/cart.png'


const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt='cart-widget' className='cartImg'/>
            0
        </div>
    )
}

export default CartWidget