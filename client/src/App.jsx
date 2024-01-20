import Canvas from './canvas'
import Costomizer from './pages/Costomizer'
import Home from './pages/Home'

export default function App() {
  return (
    <main className="transition-all ease-in app">
      <Home />
      <Canvas />
      <Costomizer />
    </main>
  )
}
