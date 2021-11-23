import axios from "axios";
// import { phonebookApi } from "./phonebook-api";
import {
    getContactsRequest,
    getContactsSuccess,
    getContactsError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
} from "./phonebook-actions";

// axios.defaults.baseURL = 'https://619b80902782760017445631.mockapi.io/api/v1';

// async
// export const getData = () =>  async dispatch => {
//     dispatch(getContactsRequest())

//     try {
//         const { data } = await axios.get('https://619b80902782760017445631.mockapi.io/api/v1/contacts');
//          console.log(data);
//         dispatch(getContactsSuccess(data));
       
//     } catch (error) {
//         dispatch(getContactsError(error))
//     }
// };

export const getContacts = () => dispatch => {
    dispatch(getContactsRequest())
    axios.get('https://619b80902782760017445631.mockapi.io/api/v1/contacts')
        .then(data => {
        console.log('operation', data);
        dispatch(getContactsSuccess(data));
        })
        .catch (err => {
            console.log('operation', err);
            dispatch(getContactsError(err));
        });
    
};


export const addContact = contact => dispatch => {
    dispatch(addContactRequest())
    axios
        .post('https://619b80902782760017445631.mockapi.io/api/v1/contacts', contact)
        .then(data => {
            console.log('operation', data);
            dispatch(addContactSuccess(data));
        })
        .catch (err => {
            console.log('operation', err);
            dispatch(addContactError(err));
        });
};

export const deleteContact = (id) => dispatch => {
    dispatch(deleteContactRequest());
    axios.delete(`https://619b80902782760017445631.mockapi.io/api/v1/contacts'/${id}`)
        .then(() => dispatch(deleteContactSuccess(id)))
        .catch(error => dispatch(deleteContactError(error)))
}






// pending


//resolved


// rejected
