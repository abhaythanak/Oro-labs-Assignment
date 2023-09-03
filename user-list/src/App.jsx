import { useState } from 'react'
import Input from './components/Input/Input'
import Table from './components/Table/Table'
import './App.css'

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [getData, setGetData] = useState({
    name:"",
    email:"",
    phone:"",
  })
  // console.log(getData)

  const [getList, setGetList] = useState([
    {
      name: "John Singh",
      email: "johnsingh@yahoo.com",
      phone: "123456879",
    },
    {
      name: "Osama Binladen",
      email: "Osama@yahoo.com",
      phone: "8788645038",
    },
  ])
  const [getEdit, setEdit] = useState(false)
  const [getIndex, setIndex] = useState(0)

  // const onChangeHandler = (e) =>{
  //   setGetData({...getData,[e.target.name]:e.target.value})
  // } 
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setGetData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const onSubmit = () =>{
  //   setGetList([...getList,getData])
  //   setGetData({...getData,
  //   name:"",
  //   email:"",
  //   phone:""
  // })
  // }
  const onSubmit = () => {
    if (!getData.name || !getData.email || !getData.phone) {
      alert("Please fill in all fields before submitting.");
      return;
    }
    setGetList((prevList) => [...prevList, getData]);
    setGetData({
      name: "",
      email: "",
      phone: "",
    });
  };

  // const onDelete = (index) =>{
  //   let temp = getList;
  //   temp.splice(index,1)
  //   setGetList([...temp])
  // }
  // const onDelete = (index) => {
  //   setGetList((prevList) => prevList.filter((_, i) => i !== index));
  // }

  //'_' is a placeholder for the current element in the array (which we don't need), and i represents the index of the current element.
  const onDelete = (index) => {
    const userToDelete = getList[index];
    const confirmationMessage = `Are you sure you want to delete ${userToDelete.name}?`;
  
    if (window.confirm(confirmationMessage)) {
      setGetList((prevList) => prevList.filter((_, i) => i !== index));
    }
  };

  // const onEdit = (index)=> {
  //   setGetData({
  //     ...getData,
  //     name:getList[index].name,
  //     email:getList[index].email,
  //     phone:getList[index].name,
  //   })
  //   setEdit(true)
  //   setIndex(index)
  // }
  const onEdit = (index) => {
    const selectedUser = getList[index];
  
    setGetData({
      name: selectedUser.name,
      email: selectedUser.email,
      phone: selectedUser.phone,
    });
    setModalOpen(true);
    setEdit(true);
    setIndex(index);
  };

  // const onUpdate = () =>{
  //   let temp = getList;
  //   temp[getIndex] = getData
  //   setGetList([...getList])
  //   setGetData({...getData, name: "", email:"", phone:""})
  //   setEdit(false)
  // }
  const onUpdate = () => {
    const updatedList = [...getList];
    updatedList[getIndex] = getData;
    setGetList(updatedList);
    setGetData({
      name: "",
      email: "",
      phone: ""
    });
    setEdit(false);
  };
  return (
    <div className='App'>
      <button className='btn' onClick={()=>setModalOpen(true)}>AddUser</button>
       {modalOpen && <Input 
       getData={getData} 
       onChangeHandler={onChangeHandler} 
       onSubmit={onSubmit}
       getEdit={getEdit}
       onUpdate={onUpdate}
       closeModal = {()=>setModalOpen(false)}
       />}
       {getList.length > 0 && 
       <Table
       getList={getList} 
       onDelete={onDelete}
       onEdit={onEdit}
       />}
    </div>
  )
}

export default App
