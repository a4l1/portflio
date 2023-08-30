import React from 'react'
import '../Contact/Contact.css'


export const Contact = () => {
  return (
    <div className="Contact">
        <div className="form-head" about-txt>
            <h2 className="main-txt">
            Get in touch
            </h2>
        </div>
        <div className="footer">
            <div className="form-wrapper">
                <form action="#" className='form'>
                    <input type="text" className='form-input input-top' placeholder='Name' />
                    <input type="text" className='form-input input-top input-left' placeholder='Lastname' />
                    <input type="text" className='form-input' placeholder='Email' />
                    <input type="number" className='form-input input-left' placeholder='Phone number' />
                    <textarea className='text-aria' placeholder='Message'></textarea>
                </form>


            </div>

            <button class="form-button">Submit now</button>
            <p class="copyright">© Hafizov Azizbek 2023-yil</p>
        </div>
    </div>

    
 
  )
}
