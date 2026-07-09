import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddBook from './components/AddBook'
import { Route, Routes } from 'react-router-dom'
import SearchBook from './SearchBook'
import ViewBook from './components/ViewBook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/add-book" element={<AddBook />} />
      <Route path="/add-book" element={<AddBook />} />
      <Route path="/search-book" element={<SearchBook />} />
      <Route path="/view-book" element={<ViewBook />} />


    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
