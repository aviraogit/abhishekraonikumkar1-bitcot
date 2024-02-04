import { createSlice } from "@reduxjs/toolkit";

const ContactPSlice = createSlice({
    name: "contacts",
    initialState: {
        contacts: [


            {
                "id": 1,
                "name": "Aaron",
                "mobile": "5785664545",
                "email": "aaron@gmail.com"
            },
            {
                "id": 2,
                "name": "Buincy Hanson",
                "mobile": "5785664545",
                "email": "hanson@gmail.com"
            }

        ],

        viewContact: {

        },

        edit: {
            contact: {},
            isEdit: false
        }

    },
    reducers: {

        //add data
        add: (state, action) => {
            state.contacts.push(action.payload)
        },

        //remove data
        remove: (state, action) => {
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
        },


        //view data
        view: (state, action) => {
            return {
                ...state,
                viewContact: action.payload
            }
        },


        //edit data
        edit: (state, action) => {
            return {
                ...state,
                edit: {
                    contacts: action.payload,
                    isEdit: true
                }
            }
        },


        //update data
        update: (state, action) => {
            console.log(action.payload)
            return {
                ...state,
                contacts: state.contacts.map(contact => contact.id === action.payload.id ? 
                    { ...contact, 
                        name: action.payload.name,
                        mobile: action.payload.mobile,
                        email: action.payload.email,
                     } : contact),
                edit: {
                    contact: {},
                    isEdit: false
                }
            }
        }
    }
})
export const { add, remove, edit, update, view, contacts } = ContactPSlice.actions
export default ContactPSlice.reducer