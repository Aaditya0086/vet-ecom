import React, { useState, useRef } from 'react'
// import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';


export default function ContactUS(props) {

    // const sendEmail = (e) => {
    //     e.preventDefault();
    
    //     emailjs.sendForm('service_08uc7a4', 'template_tn29ene', e.target, 'cgJVHUXjR3Yktv4DV')
    //       .then((result) => {
    //           console.log(result.text);
    //       }, (error) => {
    //           console.log(error.text);
    //       });
    //       e.target.reset()
    //   };

      const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    props.showAlert("Your details have been submitted", "success")
    emailjs.sendForm('service_08uc7a4', 'template_tn29ene', form.current, 'cgJVHUXjR3Yktv4DV')
      .then((result) => {
        // props.showAlert("Your details have been submitted", "success")
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const handleClearText = () => {
    let newText = '';
    // sendEmail()
    setText1(newText)
    setText2(newText)
    setText3(newText)
    // props.showAlert("Your details has been cleared", "success")

  }


  const handleOnChange1 = (event) => {
    setText1(event.target.value)
    
  }
  const handleOnChange2 = (event) => {
    setText2(event.target.value)
    
  }
  const handleOnChange3 = (event) => {
    setText3(event.target.value)
    
  }



  const [text1, setText1] = useState('Full Name');
  const [text2, setText2] = useState('name@gmail.com');
  const [text3, setText3] = useState('+91 xxxxxxxxxx');


  return (
    <div style={{margin: '0rem 2rem', marginTop: '1rem'}}>
      <h1 className="text-center">Contact Us</h1>
      <div className="input-group mb-3 container my-4">
  <label className="input-group-text" for="inputGroupSelect01">Options</label>
  <select className="form-select" id="inputGroupSelect01">
    <option selected>Plese Select Category</option>
    <option value="1">Individual</option>
    <option value="2">Retail</option>
    <option value="3">Distributor</option>
  </select>
  
</div>

<div className="mb-3 my-3 container">
<form ref={form} onSubmit={sendEmail}>
  <label for="1formGroupExampleInput" className="form-label">Name</label>
  <input type="text" className="form-control" id="1formGroupExampleInput" onChange={handleOnChange1} value={text1} name="from_name" />
  


    <br />
  <label for="2formGroupExampleInput" className="form-label">Email</label>
  <input type="email" className="form-control" id="2formGroupExampleInput" onChange={handleOnChange2} value={text2} name="email_id"/>
  


    <br />
  <label for="3formGroupExampleInput" className="form-label">Phone/Mobile</label>
  <input type="phone_no" className="form-control" id="3formGroupExampleInput" onChange={handleOnChange3} value={text3} name="phone_no"/>
  <div id="Help" class="form-text">Your details remain confidential.</div>
  

  <input disabled={text1.length===0} type="submit" className="btn btn-primary" value="send" />


<button type="clear_form" disabled={text1.length===0} className="btn btn-primary mx-3" onClick={handleClearText}  >Clear Form</button>

</form>
</div>
{/* <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="email_id" />
      <label>phone_no</label>
      <textarea name="phone_no" />
      <input type="submit" value="Send" />
    </form>
    );
) */}

    </div>
  )
}
