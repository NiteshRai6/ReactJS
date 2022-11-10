import React, { useState } from "react";

function FormEx() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>

      <label>Enter your name :
        <input type="text" name="username" value={inputs.username || ""} onChange={handleChange}
        /> </label> <br /> <br />

      <label>Enter your age :
        <input type="number" name="age" value={inputs.age || ""} onChange={handleChange}
        /> </label> <br /> <br />

      <label> Address :
        <textarea name="address" value={inputs.address || ""} onChange={handleChange} />
      </label> <br /> <br />

      <label> Subject :
        <select name="subject" value={inputs.subject || ""} onChange={handleChange}>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="JavaScript">JavaScript</option>
          <option value="ReactJS">ReactJS</option>
        </select> </label> <br /> <br />

      <input type="submit" />
    </form>
  );
}

export default FormEx;
// Form Example
