import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Home } from '../components/Home'
import { Elso } from '../questions/Elso'
import { Footer } from '../components/Footer'


const router=createBrowserRouter([
  {path:'/',element:<Home />},
  {path:'/elsokerdessor', element: <Elso/>}

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
