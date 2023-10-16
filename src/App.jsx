import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import Modal from './components/Modal'

function App() {
const [showModal, setShowModal]=useState(false)

  return (
    <>
    <Header  />
    <Content showModal={showModal} setShowModal={setShowModal}/>
    {showModal?  <Modal setShowModal={setShowModal} />:null}
    </>
  )
}

export default App
