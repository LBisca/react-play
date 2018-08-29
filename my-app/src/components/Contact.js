import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../context";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteClick = () => {};

  onShowClick = e => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  render() {
    const { contact } = this.props;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          return (
            <div className="card card-body mb-3">
              <h4>
                {contact.name}

                <i
                  onClick={this.onShowClick}
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />

                <i
                  onClick={this.onDeleteClick}
                  className="float-right fas fa-window-close"
                  style={{ cursor: "pointer" }}
                />
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {contact.email}</li>
                  <li className="list-group-item">Phone: {contact.phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
