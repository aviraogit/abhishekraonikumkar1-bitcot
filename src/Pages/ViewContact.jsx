

   import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const ViewContact = () => {
  const { viewContact } = useSelector(state => state.contacts)

  return (
    <>

      <div className="container bg-dark p-2">
        <h5 className='text-center'>View Contact</h5>
        
        <div className="card mb-3 mx-2 mr-0 rounded-0 ">
          <div className="row p-5">
            {/* <div className="col-md-4">
    </div> */}
            <div className="">
              <ul class="list-group rounded-0 mb-1">
                <li class="list-group-item mb-1">
                  Name : <span>{viewContact.name}</span>

                </li>
                <li class="list-group-item mb-1">
                  Mobile : <span>{viewContact.mobile}</span>
                </li>
                <li class="list-group-item mb-1">
                  Email : <span>{viewContact.email}</span>
                </li>
                <li class="list-group-item mb-1">
                  Address : <span>{viewContact.address}</span>
                </li>

              </ul>
            </div>
            <div className="row">
              <div className="col">
                <Link to={'/'}> <button className="btn btn-dark p-1 w-25 rounded-0 ">Back</button> </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewContact

   
  