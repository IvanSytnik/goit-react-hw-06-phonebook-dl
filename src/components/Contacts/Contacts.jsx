import React, { Component } from "react";
import { nanoid } from 'nanoid';
import SubmitContacts from '../SubmitContacts/SubmitContacts'
import Filter from '../Filter/Filter'
import RenderContacts from '../RenderContacts/RenderContacts'

class Contacts extends Component {
    state = {
     contacts: [    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
       {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
       {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
       {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
       filter: ''
    }
   
    addContacts = data => {
     if(this.state.contacts.find(contact => contact.name === data.name))
     {
       alert(`${data.name} is already in contacts`)
     }
      else {
       const contact = {
         id: nanoid(),
         name: data.name,
         number: data.number
       }
      this.setState(update => ({
       contacts: [contact, ...update.contacts]
      }))
      console.log(this.state)
     }
     };

    contactsDelete = contactsID => {
       
       this.setState(update => ({
        contacts: update.contacts.filter(contact => contact.id !== contactsID)
       }))
       
     }

    changeFilter = e => {
     this.setState({filter: e.currentTarget.value})
    }
    
    render() {
     const normFilter = this.state.filter.toLowerCase();
     const filterContacts = this.state.contacts.filter(contact => 
       contact.name.toLowerCase().includes(normFilter))
     return(
       <>
         <SubmitContacts onSubmit={this.addContacts}></SubmitContacts>
         <Filter value={this.state.filter} onChange={this.changeFilter}></Filter>
         <RenderContacts items={filterContacts} contactsDelete={this.contactsDelete}></RenderContacts>
         </>
     )
    }
   }

   export default Contacts;