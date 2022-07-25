import Header from '../Header'
import './index.css'
const Cart = () => {
    return (
        <>
        <Header/>
        <div className='cart-container'>
            <img 
            className='cart-img'
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png" 
            alt="cart" />
        </div>
        </>
    )
}

export default Cart