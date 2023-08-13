import React from 'react'
//further updates once color scheme is decided
//make button fullwidth ezpz
const handleFormSubmit = (e) => {
  e.preventDefault();
  alert("Thank you for contacting me! I'll get back to you as soon as possible")
}
export default function Contact() {
  return (
  <section className='columns is-centered'>
    <div className='column is-half'>
      <h1 className='title has-text-centered has-text-white'>Contact Me!</h1>
      <form className='' onSubmit={handleFormSubmit}>
        <div className='field'>
          <label className='label has-text-white'>Name</label>
          <div className='control'>
            <input className='input' type='text' placeholder=''></input>
          </div>
        </div>

        <div className='field'>
          <label className='label'>Email</label>
          <div className='control'>
            <input className='input' type='text' placeholder=''></input>
          </div>
        </div>

        <div className='field'>
          <label className='label'>Message</label>
          <div className='control'>
            <textarea className='textarea' placeholder='What do ya need?'></textarea>
          </div>
        </div>

        <div className='field is-grouped'>
          <div className='control'>
            <button className='button'>Submit!</button>
          </div>
        </div>
      </form>
    </div>
    </section>
  )
}

//bulma form template
{/* <div className='field'>
  <label className='label'>Name</label>
  <div className='control'>
  <input className='input' type='text' placeholder=''></input>
  </div>
</div>

<div className='field'>
  <label className='label'>Email</label>
  <div className='control'>
    <input className='input' type='text' placeholder=''></input>
  </div>
</div>

<div className='field'>
  <label className='label'>Message</label>
  <div className='control'>
    <textarea className='textarea' placeholder='What do ya need?'></textarea>
  </div>
</div>

<div className='field is-grouped'>
  <div className='control'>
    <button className='button'>Submit!</button>
  </div>
</div> */}