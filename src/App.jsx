import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Home } from '../components/Home'
import { Elso } from '../questions/Elso'
import { Footer } from '../components/Footer'
import { PageUnderWork } from './components/PageUnderWork'


const router=createBrowserRouter([
  {path:'/',element:<Home />},
  {path:'/elsokerdessor', element: <Elso/>},
  {path:'/underwork',element:<PageUnderWork />},

])

function App() {
 
  return <>
  <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </div>
    </>
}

export default App
