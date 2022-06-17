import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  
  const { register, handleSubmit } = useForm();
  const onSubmit = data => alert(JSON.stringify(data));
  
  return (
    <div id="contact-form" className="content">
        <form className="contact-from-codematra" onSubmit={handleSubmit(onSubmit)} method="get" autoComplete="off" >
          <h3 className="fheading">Contact Form</h3>              

          <label>Name <span className="required">*</span></label>
          <input type="text" name="firstName" placeholder="Enter your name." required="required" {...register("firstName")} />
          
          <label>Email <span className="required">*</span></label>
          <input type="email" name="txtEmail" placeholder="Enter your email." required="required" {...register("txtEmail")} />
          
          <label>Contact Number (Optional)</label>
          <input type="text" name="contact" placeholder="Enter your contact number." {...register("contact")} />

          <label>Message <span className="required">*</span></label>
          <textarea name="message" rows="4" placeholder="Enter your message." required="required" {...register("message")}></textarea>
          
          <p className="submit-wr"><input type="submit" name="submit" value="Submit" /> </p>
        </form>
    </div>
  );
};

export default Contact;