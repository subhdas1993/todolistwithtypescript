import './App.css'
import AddToDoList from './components/AddToDoList'
import Navbar from './components/Navbar'
import Todos from './components/Todos'


function App() {
  const color = {
    backgroundImage: 'radial-gradient(#fed7aa 4%, #fdba74 20%, #fb923c 60%)'
  }
  return (
    <div style={color} className='flex justify-center items-center h-screen text-orange-900'>
      <div>
      <h1 className='text-[3vmax] font-[Merriweather] font-black italic mb-8'>ToDo List with TypeScript</h1>
      <AddToDoList />
      <Navbar />
      <Todos />      
      </div>
    </div>
  )
}

export default App
