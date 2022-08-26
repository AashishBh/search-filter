import './App.css';
import React, { setState, useState } from 'react';
import JSONData from './mockdata.json'

function App() {
  // const [list, setList] = setState(...array)
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div className="container">
      {/* form starts here  */}
      <form action="" className="m-auto" style={{ maxWidth: 600 }}>
        <h3 className="my-4">Contact Form</h3>
        <hr className="my-4" />
        <div className="form-group mb-3 row">
          <label htmlFor="your-name2" className="col-md-5 col-form-label">
            Your Name
          </label>
          <div className="col-md-7">
            <input
              type="text"
              className="form-control form-control-lg"
              id="userInput"
              name="your-name"
              required=""
              autoComplete='off'
              onChange={event => {setSearchTerm(event.target.value)}}
            />
          </div>
        </div>
      </form>
      {/* form ends here  */}
      {/* name list starts here  */}
      {JSONData.filter((val) => {
        if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase()))
        return val.first_name
      }).map((val, key) => {
        return <p className='nameList'>{val.first_name}</p>
      })}
      {/* name list ends here  */}
    </div>

  );
}

export default App;
