import React, { useState } from 'react'

const Home = () => {


  const [message, setmessage] = useState('');
  const [countryList, setCountryList] = useState([]);
  // console.log('message', message)

  const handlechange = (e) => {
    setmessage(e.target.value);
  }

  const buttonclick = (e) => {
    e.preventDefault();

    if (message.trim() !== '') {
      setCountryList([...countryList, message]);
      setmessage('');
    }
  }

  return (
    <>
      <div style={{ margin: "30px" }}>
        <input type="text" id="fname" name="message" value={message} onChange={handlechange} />
        <button style={{ marginLeft: "20px" }} onClick={buttonclick}>click me</button>

        <ul>
          {countryList.map((country, index) => (
            <li key={index}>{country}</li>
          ))}
        </ul>

      </div>
    </>
  )
}

export default Home
