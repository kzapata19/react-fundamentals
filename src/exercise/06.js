// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  // function handleSubmit(event) {
  //   event.preventDefault()
  //   const value = event.target.elements.usernameInput.value
  //   onSubmitUsername(value)
  // }

//Use React.useRef to select user input for Extra Credit 1
  //const userInput = React.useRef(null)

  function handleSubmit(event) {
    event.preventDefault()
    //const value = userInput.current.value;
    //onSubmitUsername(value); for EXTRA CREDIT 3, we no longer need to select the input from the form's elements 
    //because we are already directly setting the input value. We set username to be the same as the event value   
    onSubmitUsername(username)
  }

  //Extra Credit 2
  // const [error, setError] = React.useState(null);

  // function handleChange(event) {
  //   const {value} = event.target
  //   const isValid = value === value.toLowerCase();
  //   setError(isValid ? null : 'Input should be lowercased')
  // }
//Extra Credit 3 - Control the input value
  const [username, setUsername] = React.useState('')//empty string as the default behavior

  function handleChange(event) {
    const {value} = event.target;
    setUsername(value.toLowerCase());
  }

  return (
   <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="usernameInput">Username:</label>
      <input 
        id="usernameInput" 
        type="text" 
        onChange={handleChange}
        value={username}
      />
    </div>
    <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
