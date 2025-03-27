import "./CartWidget.css"

const CartWidget = () => {
    const imgCarro = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu645q5DXGTJMmq7BOORuA4SxmK5hTcaTA6w&s"
  return (
    <div>
    <img className='imgCarro' src={imgCarro} alt='Imagen carro de super' />
    </div>
  )
}

export default CartWidget