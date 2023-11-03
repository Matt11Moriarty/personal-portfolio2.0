import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import './App.css'

function App() {
  return (
    <>
      <main className='font' >
        <Header />
        <Outlet />
      </main>
    </>
  );
}

export default App
