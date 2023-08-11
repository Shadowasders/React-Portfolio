import React from 'react'

const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting me! I'll get back to you as soon as possible")
}
export default function Contact() {
  return (
    <div className=''>
        <h1>Contact Me!</h1>
        <form className='' onSubmit={handleFormSubmit}>
            <input name='fullName' type='text' placeholder='Enter your name here!'/>
            <input name='email' type='email' placeholder='Enter your email here!'/>
            <input name='message' type='text'placeholder='What is your situation? Need help, want advice? Let me know!'/>
            <button type='submit'>Submit!</button>
        </form>
    </div>
  )
}
