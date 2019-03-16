import React from 'react';

class Contact extends React.Component {
  state = {
    showContactinfo: false
  };

  showClickHandler = () => {
    this.setState({ showContactinfo: !this.state.showContactinfo });
  };

  //##############RENDER METHOD//####################
  render() {
    const { name, email, phone, onDeleteClick } = this.props;
    const { trashStyle, sortDownStyle } = ContactStyle;

    return (
      <div className="card mb-3">
        <div
          onClick={this.showClickHandler}
          className="card-header bg-info text-white"
        >
          {name}{' '}
          <i
            onClick={this.showClickHandler}
            style={sortDownStyle}
            className="fa fa-sort-down"
          />
          <i
            onClick={onDeleteClick}
            style={trashStyle}
            className="fa fa-trash"
          />
        </div>
        {this.state.showContactinfo ? (
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item">{email}</li>
              <li className="list-group-item">{phone}</li>
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}

const ContactStyle = {
  trashStyle: {
    fontSize: '22px',
    color: 'black',
    float: 'right',
    cursor: 'pointer'
  },
  sortDownStyle: {
    fontSize: '22px',
    cursor: 'pointer'
  }
};
export default Contact;
