import React, { useMemo } from "react";
import { nanoid } from 'nanoid';
import SubmitContacts from '../SubmitContacts/SubmitContacts'
import Filter from '../Filter/Filter'
import RenderContacts from '../RenderContacts/RenderContacts'
import { useDispatch, useSelector } from 'react-redux';
import { nameAction, numberAction, addContactAction, deleteContactAction, filterContactAction } from "redux/contacts/contacts.actions";
// class Contacts extends Component {
//     state = {
//      contacts: [],
//        filter: ''
//     }


    
   
//     addContacts = data => {
//      if(this.state.contacts.find(contact => contact.name === data.name))
//      {
//        alert(`${data.name} is already in contacts`)
//      }
//       else {
//        const contact = {
//          id: nanoid(),
//          name: data.name,
//          number: data.number
//        }
//       this.setState(update => ({
//        contacts: [contact, ...update.contacts]
//       }))
//       console.log(this.state)
//      }
//      };

//     contactsDelete = contactsID => {
       
//        this.setState(update => ({
//         contacts: update.contacts.filter(contact => contact.id !== contactsID)
//        }))
       
//      }

//     changeFilter = e => {
//      this.setState({filter: e.currentTarget.value})
//     }
    
//     componentDidUpdate(prevProps, prevState) {
//       if(this.state.contacts !== prevState.contacts) {
//         localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//         console.log("Saved localStorage")
//       }
//     }

//     componentDidMount() {
//       const local = localStorage.getItem('contacts');
//       const contacts = JSON.parse(local)

//       if(contacts) {
//         this.setState({
//           contacts: contacts
//         })
//       }
     
//     }

//     render() {
//      const normFilter = this.state.filter.toLowerCase();
//      const filterContacts = this.state.contacts.filter(contact => 
//        contact.name.toLowerCase().includes(normFilter))
//      return(
//        <>
//          <SubmitContacts onSubmit={this.addContacts}></SubmitContacts>
//          <Filter value={this.state.filter} onChange={this.changeFilter}></Filter>
//          <RenderContacts items={filterContacts} contactsDelete={this.contactsDelete}></RenderContacts>
//          </>
//      )
//     }
//    }


export default function Contacts() {
    const dispatch = useDispatch();
    const name = useSelector(state => state.usersContacts.name);
    const number = useSelector(state => state.usersContacts.number);
    const contacts = useSelector(state => state.usersContacts.contacts);
    const filter = useSelector(state => state.usersContacts.filter);


  
  
  const handleName = event => {
      dispatch(nameAction(event.target.value))
      
  }
  
  const handleNumber = event => {
    dispatch(numberAction(event.target.value))
}
  
//   useEffect( ()=> {
//   window.localStorage.setItem('contacts', JSON.stringify(contacts))
//   }, [contacts])

  const handleSubmit= e => {
      e.preventDefault();
      const contact = {id: nanoid(), name: name, number: number}
      if(contacts.find(contact => contact.name === name)){
          alert(`${name} is already in contacts`)
      }
      else {
        dispatch(addContactAction(contact))
        dispatch(nameAction(''))
        dispatch(numberAction(''))

      console.log(contacts)
      }
      
  }

  const contactsDelete = contactsID => {
    dispatch(deleteContactAction(contactsID))
  }
  
//   const changeFilter = e => {
//       setFilter(filter = e.currentTarget.value)
//   }

  const nameFilter = event => {
    dispatch(filterContactAction(event.target.value))
  }
  const changeFilter =useMemo(() => {
    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  }, [contacts, filter]);



  return (
      <>
      
      
      <SubmitContacts name={name} number={number} handleSubmit={handleSubmit} handleName={handleName} handleNumber={handleNumber}></SubmitContacts>
      <Filter value={filter} onChange={nameFilter}></Filter>
      {changeFilter.length >0 ? (<RenderContacts items={changeFilter} contactsDelete={contactsDelete}></RenderContacts>) : (<div>Nema</div>)}

     </>
     
    
      )
}
   