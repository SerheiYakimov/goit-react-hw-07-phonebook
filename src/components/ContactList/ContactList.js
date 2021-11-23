
import PropsType from "prop-types";
import s from "../ContactList/ContactList.module.css";
import { ContactListItem } from "../ContactListItem/ContactListItem";
import { useSelector } from "react-redux";
// import { useEffect } from 'react';
import { getAllContacts } from "../../redux/phonebook/phonebook-selectors";
// import { getData } from '../../redux/phonebook/phonebook-api';

export function ContactList() {
  const contacts = useSelector(getAllContacts);

  // const dispatch = useDispatch(getData);

  // useEffect(() => {
  //   dispatch(getData(contacts));
  // }, [dispatch, contacts]);
    
  
  
 
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
          />
        )
      )}
    </ul>
  );
}

ContactList.PropsType = {
  id: PropsType.number.isRequired,
  name: PropsType.string.isRequired,
  number: PropsType.number.isRequired,
};


