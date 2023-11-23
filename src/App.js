import React, { useState } from 'react'
import "./App.css"
import lead from "./assets/Vector.png"
import map from "./assets/map.png"
import name from "./assets/Vector (1).png"
import mail from "./assets/Vector (2).png"
import number from "./assets/phone.png"
import add from "./assets/add.png"
import cal from "./assets/cal.png"
import sale from "./assets/rp.png"
import watch from "./assets/watch.png"
import menu from "./assets/menu.png"
import drop from "./assets/drop.png"
import sigma from "./assets/sigma.png"
const App = () => {
  const [leadName, setLeadName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [saleValue, setSaleValue] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [options, setOptions] = useState('');
  const [products, setProducts] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can perform further actions with the form data here, such as sending it to a server.

    // For now, let's just log the form data.
    console.log({
      leadName,
      email,
      phoneNumber,
      address,
      saleValue,
      date,
      time,
      options,
      products,
      note,
    });
  };
  return (
    <div className='main-box'>
      <header className='header'>
        <div>
          <h1>Magnabox Private limited</h1>
          <img src={sigma} />
        </div>
        <div>
          <h3>Add new lead form</h3>
          <span className='cancel-btn'>cancel</span>
        </div>
      </header>
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <label>
            Lead Name
            <img src={lead} />
          </label>
          <div className="input-box">
            <img src={name} />
            <input placeholder='Enter lead name' type="text" value={leadName} onChange={(e) => setLeadName(e.target.value)} />
          </div>



        </div>

        <div className='input-container'>
          <label>
            Email ID
            <img className="star" src={lead} />
          </label>
          <div className="input-box">
            <img src={mail} />
            <input placeholder='Example@anyemail.com' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          </div>

        </div>
        <div className='input-container'>
          <label>
            Phone number
            <img src={lead} />
          </label>
          <div className="input-box">
            <img src={number} />
            <input placeholder='+91 8800688763' type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </div>
        </div>

        <div className='input-container'>
          <label>
            Address
          </label>
          <div className="input-box">
            <img src={add} />
            <input placeholder="Gurugram ,India" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
        </div>



        <div className='map-box'>
          <img src={map} />
        </div>

        <div className='input-container'>
          <label>
            Sale Value </label>
          <div className="input-box">
            <img src={sale} />
            <input placeholder='50,00,000' type="text" value={saleValue} onChange={(e) => setSaleValue(e.target.value)} />
          </div>
        </div>

        <div className='input-container'>
          <label>
            Date </label>
          <div className="input-box">
            <img src={cal} />
            <input placeholder='29 August 2023' value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
        </div>


        <div className='input-container' >
          <label>
            Time  </label>
          <div className="input-box">
            <img src={watch} />
            <input placeholder='20:21 pm' value={time} onChange={(e) => setTime(e.target.value)} />
          </div>
        </div>


        <div className='input-container'>
          <label>
            Options </label>
          <div className="input-box">
            <img src={menu} />
            <select  value={options} onChange={(e) => setOptions(e.target.value)} >
              <option value="">Select option</option>
              <option value="option1">option1</option>
              <option value="option2">option2</option>
              <option value="option3">option3</option>
            </select>
           
            <img className='input-right' src={drop} />
          </div>
        </div>

   


        <div className='input-container products'>
          <label>
            Products </label>
          <div className="input-box">
            <img src={menu} />
            <select value={products} onChange={(e) => setProducts(e.target.value)}>
              <option value=""></option>
              <option value="tshirt">tshirt</option>
              <option value="pants">Shorts</option>
              <option value="jeans">Jeans</option>
            </select>

            <img className='input-right' src={drop} />
          </div>


        </div>



        <div className='input-container'>
          <label>
            Note </label>
          <textarea placeholder='Enter note' value={note} onChange={(e) => setNote(e.target.value)} />

        </div>


        <button className='add-lead' type="submit">Add lead</button>
      </form>
    </div>
  )
}

export default App