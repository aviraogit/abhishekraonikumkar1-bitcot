import React, { useState } from 'react'
// import { IoIosContact } from "react-icons/io";

// import { MdAddIcCall } from "react-icons/md";
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ListItem from './ListItem'

const Contact = () => {
  const {contacts} = useSelector( state => state.contacts)
  
  const [searchTerm, setSearchTerm] = useState('');
  return (
  <>
  
  <center>
<div className="contact ">

  <div className="contact-main">





 {/* //heading */}

  <Link to={"/"}>
   <h5 className='Navbar bg-primary p-2 text-light mb-0'>Conatact App   </h5>
   </Link>


  <div className="bg-dark p-5 pt-2 rounded-0">


{/* //heading */}
<h5 className="text-light">Welcome to bitcot Contact-Book</h5>
<Link to={"/Form"}>
   <button className="btn w-100 p-2 mt-3 bg-light text-dark fw-bold">

    Add Contact  
    
    </button>



    
</Link>

    {/* <input type="text" className="w-50 m-2 p-2 m-2" placeholder='Search here...' /> */}

{/* //search bar */}
<center>

    <input
  type="text"
  className="w-50 m-2 p-2 m-2"
  placeholder="Search here..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>
  </center>

//ListItem


<ul className="list-group">
  {contacts
    .filter((contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map((contact) => (
      <ListItem key={contact.id} contact={contact} />
    ))}
</ul>


  


  </div>
</div>
  
  </div>
  </center>
  
  </>
  )
}

export default Contact
