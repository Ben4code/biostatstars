import React, {useState} from "react";

export default function Contact() {
  const [formState, setFormState] = useState({name: '', email: '', message: ''})
  const [apiRes, setAPIRes] = useState({state: false, msg: ''})
  const [errors, setErrors] = useState({name: false, email: false, message: false})


  const handleInput = (e) => {
    setFormState({...formState, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setAPIRes({ state: false, msg: false })
    const {name, email, message} = formState
    if(name.trim() === '' || email.trim() === '' || message.trim() === ''){
      setErrors({
        ...errors,
        name: name.trim() === '' && 'Name field can not be empty',
        email: email.trim() === '' && 'Email field can not be empty',
        message: message.trim() === '' && 'Message field can not be empty',
      })
      return
    }

    if(!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
      setErrors({
        ...errors,
        email: 'Kindly enter a valid email address',
      })
      return
    }

    if(message.length < 3){
      setErrors({message: 'Message text is too short'})
      return
    }
    setErrors({name: false, email: false, message: false})
    const res = await fetch('/api/hello', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formState),
    })

    if(await res.ok){
      setErrors({
        name: false, email: false, message: false
      })
      setFormState({
        name: '', email: '', message: ''
      })
      const {msg} = await res.json()
      setAPIRes({state: true, msg })
    }
  }

  return (
    <div className="contact">
      <div>
        <h2>Contact</h2>
        <p>Drop us a message.</p>
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="contact-form__group">
          <label htmlFor="name">Name</label>
          <input 
            name="name"
            type="text" 
            placeholder="Enter Name"  
            value={formState.name} 
            onChange={handleInput}
          />
          {errors.name && <span className="form-error">{errors.name}</span>}
        </div>
        <div className="contact-form__group">
          <label htmlFor="email">Email</label>
          <input 
            name="email"
            type="text" 
            placeholder="Enter Email" 
            value={formState.email} 
            onChange={handleInput} 
          />
          {errors.email && <span className="form-error">{errors.email}</span>}
        </div>
        <div className="contact-form__group">
          <label htmlFor="email">Message</label>
          <textarea
            name="MESSAGE"
            value={formState.message} 
            onChange={handleInput}
            name="message"
            cols="30"
            rows="10"
            placeholder="Enter Message"
          ></textarea>
          {errors.message && <span className="form-error">{errors.message}</span>}
        </div>
        <div className="contact-form__group">
          <button className="btn btn__submit" type="submit">Send </button>
          {apiRes.state && <span className="form-success">{apiRes.msg}</span>}
        </div>
      </form> 
    </div>
  );
}
