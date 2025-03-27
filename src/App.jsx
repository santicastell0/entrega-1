import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer"
import NavBar from "./componentes/NavBar/NavBar"

function App() {

  const Msj =(props) => {
    const { saludo } = props
    return (
      <h1>{props.saludo}</h1>
    )
  }

  return (
  <>
    <NavBar/>
    <ItemListContainer/>
    <Msj saludo="Proyecto React"/>
  </>
  )
}



export default App
