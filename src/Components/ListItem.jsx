import React from 'react'
import { useDispatch} from 'react-redux'
import { remove , edit, view} from '../features/ContactPSlice'
import { Link, useNavigate } from 'react-router-dom'

const ListItem = ({contact}) => {

  // const {remove } = useSelector(state=>state.contacts)
  // console.log(contact)
  // console.log("ab")

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleDelete = (id) =>{
    dispatch(remove(id))
    console.log(id)
  }


  
  const handleEdit = (contact) =>{
    dispatch(edit(contact));
    navigate("/Form")
    console.log(contact)
    
  }


  const handleView = (contact) => {
    dispatch(view(contact))
  }
  return (
  <>
  
  <li className="p-1 ps-5 pe-2 mb-2  rounded-1 d-flex justify-content-between align-items-center bg-light">
   
   <span>
    {/* <h6>{contact.id}</h6> */}
   </span>
   <span>

    <div className="nam">

    <h6>{contact.name}</h6>
    <p>{contact.mobile}</p>
    </div>
   </span>

    <span className="float-end">
    <button className='btn btn-danger btn-sm float-end' onClick={()=>handleDelete(contact.id)}>Delete</button>
   {/* <Link to={"/EditForm"}> */}
    <button className='btn btn-warning btn-sm float-end mx-1' onClick={()=>handleEdit(contact)}>Edit</button>
   {/* </Link> */}
  <Link to={"/View"}>
    <button className='btn btn-sky btn-sm float-end mx-1' onClick={()=>handleView(contact)}>View</button>
  </Link>

   
    {/* <button className="" onClick={handleDelete}>
            Delete
        </button> */}
       
        {/* <button className="" onClick={handleEdit}>
            Edit
        </button>
        */}
        {/* <button className="">
            View
        </button> */}
        
        
    </span>
  </li>
  
  
  </>
  )
}

export default ListItem
