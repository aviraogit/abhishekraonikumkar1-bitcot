import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, update } from "../features/ContactPSlice";
import { Link, useNavigate } from "react-router-dom";


const AddContact = () => {

  const dispatch = useDispatch()
  const navigate  = useNavigate()

  const { edit } = useSelector(state => state.contacts)
 

  //add data

const [form, setForm]= useState({
  id:crypto.randomUUID(),
  name:"",
  mobile:"",
  email:"",
  address:""
})

const {name, mobile, email, address} = form


const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]:e.target.value
  })
}

  const handleSubmit = (e) => {
    e.preventDefault()
    // const newcontact = {
    //   id: crypto.randomUUID(),
    //   name: name,
    //   email: email,
    //   mobile: mobile,
    //   address: address


    // }


    //update data
    
    if (edit.isEdit) {
  console.log(form)
      const updateContact = {
        id: edit.contacts.id,
        name: form.name,
        mobile: form.mobile,
        email: form.email,
        address: form.address




      }
      dispatch(update(updateContact))
      setForm({
        name:"",
        mobile:"",
        email:"",
      })
   navigate("/")
      // dispatch(update({ id: edit.contact.id, name, email, mobile, address }))

      //reseted
    } else {
      dispatch(add(form))
      setForm({
        name:"",
        mobile:"",
        email:""
      })
      console.log(form)
      navigate("/")
    }
    // setName('')
  };

  useEffect(() => {
    if(edit.isEdit){
      setForm(edit.contacts)
    }
    // setName(edit.contact.text)

  }, [edit])



  return (
    <center>
      <div className="form">


        <form className="p-5" onSubmit={handleSubmit}>





          <div class="mb-1">



            <input
              type="text"
              class="form-control rounded-0 mt-1 p-1"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Name"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>




          <div class="mb-1">
            <input
              type="email"
              class="form-control rounded-0 mt-1 p-1"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>



          <div class="mb-1">
            <input
              type="number"
              class="form-control rounded-0 mt-1 p-1"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Mobile no."
              name="mobile"
              value={mobile}
              onChange={handleChange}
            />
          </div>


          <div class="mb-1">



            <input
              type="text"
              class="form-control rounded-0 mt-1 p-1"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Address"
              name="address"
              value={address}
              onChange={handleChange}
            />
          </div>



          <button type="submit" className="btn btn-dark p-0 rounded-0 w-25 mx-2 ">
            Submit
          </button>
          <Link to={"/"}>
          <button type="submit" className="btn btn-dark p-0 rounded-0  w-25">Cancel</button>
          </Link>
        </form>
      </div>
    </center>
  );
};

export default AddContact;
