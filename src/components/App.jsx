import { Component } from "react";
import { ContactForm } from "./ContactForm";
import { ContactList } from "./ContactList";
import { Filter } from "./ContactFilter";

export class App extends Component {   
    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filters: '',
    };

    addContact = newContact => {
        this.setState(prevState => {
            return {
                contacts: [...prevState.contacts, newContact]
            }
        });
        console.log(newContact)
    };

    changeTopicFilter = (newTopic) => {
        this.setState({
            filters: newTopic
        });
    };

    handleDelete = (userId) => {
        this.setState(prevState => {
            return {
                contacts: prevState.contacts.filter(contact => contact.id !== userId),
            };
        });
    };

    render() {
        const { contacts, filters } = this.state;

        const visibleContacts = contacts.filter(contact =>
            contact.name.toLowerCase().includes(filters.toLowerCase()));
        
        return (
            <div>
                <h1>Phonebook</h1>
                <ContactForm onAdd={this.addContact} />
                <h2>Contacts</h2>
                <Filter
                    value={this.state.filters}
                    onChange={this.changeTopicFilter}
                />
                <ContactList
                    contacts={visibleContacts}
                    onClick={this.handleDelete}
                />
            </div>
        );
    };
}







// import { Formik, Field, Form } from "formik";
// import { Section, ButtomStyle } from "./DivStyle.styled";
// import * as Yup from 'yup';
// import { nanoid } from "nanoid";


// const initialValue = {
//   contacts: [],
//   name: 'user Name',
// };

// const schema = Yup.object().shape({
//   contacts: Yup.array().required(),
//   name: Yup.string().required(),
// });

// <h1>Contacts</h1>
// <ul>
//     <li></li>
// </ul>

