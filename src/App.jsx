import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import Modal from './components/Modal'

function App() {
  const [showModal, setShowModal]=useState(false)
  const [itemNameValue, setItemNameValue] = useState("");
  const [ItemDesValue, setItemDesValue] = useState("");
  const [ItemDateValue, setItemDateValue] = useState("");
  const [selectedOption, setSelectedOption] = useState('Assigne');
  const [addData, setAddData] = useState({
    "title": itemNameValue,
    "description": ItemDesValue,
    "btnText": selectedOption,
    "date": ItemDateValue,
    // "avatarSrc": "https://s3-alpha-sig.figma.com/img/f65f/2adf/d838be479a2fce47ec58dedc680894b4?Expires=1698624000&Signature=Cz2HoDtyTYL9Bm-QFNcfXeCJyw5W62w-h13sXDDzZ2GROcmUJaIEFOrh2ng~Sr67T4OtCyZAxBYgfoF-tEowaPjvwNWil1SS2LF8PEksooBv~SfivHpy6LRCS95y2Mtsyu~cbHnEAotA2-soV2~RiKJfUEQ4wKHLM-Nljd2nYMaySWN7QStg4pyvo1931QiPHcc~K-GYiFbYDEAbPC0A~XZKqrWhXKkIaSX2VZW1WKUtLUUR5n17Gqc9NAQm-Jqj6xQ26nFMaHce3W04lLtw8doGFZ7~c741teJ~41jEko4ky90RK7mGrZlkuWfw1XkChvPSx-KSC8XY4B5eJZRjQQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
  })
  const save=()=>{
    useEffect(()=>{
      axios.post("http://localhost:3000/todo",addData)
       .then(res=>console.log(res))
       .catch(err=>console.log(err))
      },[addData])
      console.log(addData)
  }

  return (
    <>
    <Header  />
    <Content showModal={showModal} setShowModal={setShowModal}/>
    {showModal?  <Modal setShowModal={setShowModal} save={save} itemNameValue={itemNameValue} 
    setItemNameValue={setItemNameValue} ItemDesValue={ItemDesValue}
    setItemDesValue={setItemDesValue} ItemDateValue={ItemDateValue} setItemDateValue={setItemDateValue} 
    selectedOption={selectedOption} setSelectedOption={setSelectedOption} />:null}
    </>
  )
}

export default App
