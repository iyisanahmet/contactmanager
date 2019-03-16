import React, { Component } from 'react';
import uuid from 'uuid';
import Contact from './Contact';

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: uuid(),
          name: 'Ahmet IYISAN',
          email: 'iyisan.ahmet@gmail.com',
          phone: '444-444-44-44'
        },
        {
          id: uuid(),
          name: 'Ramazan KARA',
          email: 'ramazan.kara@gmail.com',
          phone: '444-444-44-44'
        },
        {
          id: uuid(),
          name: 'Samet YILDIRIM',
          email: 'samet.yildirim@gmail.com',
          phone: '444-444-44-4'
        }
      ],
      name: '',
      email: '',
      phone: '',
      showAddContactForm: false,
      showLoading: false
    };
  }

  //DELETE CONTACT
  onDeleteHandler = (id, e) => {
    const newArr = this.state.contacts.filter(contact => {
      return contact.id !== id;
    });

    this.setState({ contacts: newArr });
  };

  //GET THE FORM INPUTS
  nameChangeHandler = e => this.setState({ name: e.target.value });
  emailChangeHandler = e => this.setState({ email: e.target.value });
  phoneChangeHandler = e => this.setState({ phone: e.target.value });

  //SUBMIT HANDLER
  onSubmitHandler = e => {
    e.preventDefault();

    //DESTRUCTRING THE STATE
    const { name, email, phone, contacts } = this.state;

    //PREPARE THE STATE
    const newContact = {
      name,
      email,
      phone,
      id: uuid()
    };

    //CHECK FOR THE FORM INPUT
    if (name === '' || email === '' || phone === '') {
      alert('PLEASE FILL IN THE BLANKS');
    } else {
      this.setState({ showLoading: true });
      const newContacts = [newContact, ...contacts];
      setTimeout(() => {
        this.setState({
          contacts: newContacts,
          name: '',
          email: '',
          phone: '',
          showAddContactForm: !this.state.showAddContactForm,
          showLoading: false
        });
      }, 200);
      //CLEAR THE FIELDs
    }
  };

  //SHOW OR HIDE THE CONTACT FORM
  onShowAddContactHandler = () => {
    this.setState({
      showAddContactForm: !this.state.showAddContactForm
    });
  };

  render() {
    console.log(this);
    //DESTRUCTRING THE STATE
    const {
      contacts,
      name,
      email,
      phone,
      showAddContactForm,
      showLoading
    } = this.state;

    //PREPARE THE FADD NEW CONTACT FORM
    const form = (
      <div className="card card-body mb-3">
        <form onSubmit={this.onSubmitHandler}>
          <div className="form-group">
            <label htmlFor="">Name</label>
            <input
              onChange={this.nameChangeHandler}
              type="text"
              className="form-control"
              value={name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              onChange={this.emailChangeHandler}
              type="text"
              className="form-control"
              value={email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Phone</label>
            <input
              onChange={this.phoneChangeHandler}
              type="text"
              className="form-control"
              value={phone}
            />
          </div>
          <button type="submit">ADD CONTACT</button>
        </form>
      </div>
    );

    return (
      <div>
        <h5
          onClick={this.onShowAddContactHandler}
          style={{ cursor: 'pointer' }}
        >
          Add New Contact{' '}
          {showLoading ? (
            <i
              style={{ float: 'right' }}
              className="fa fa-cog fa-spin text-danger"
            />
          ) : null}
        </h5>

        {showAddContactForm ? form : null}

        {contacts.map(contact => {
          const { name, email, phone, id } = contact;
          return (
            <Contact
              key={id}
              name={name}
              email={email}
              phone={phone}
              onDeleteClick={this.onDeleteHandler.bind(this, id)}
            />
          );
        })}
      </div>
    );
  }
}

export default Contacts;
