import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTech } from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = ({ addTech }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onsubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please Enter a First and Last Name' });
    } else {
      addTech({
        firstName,
        lastName,
      });

      M.toast({ html: `${firstName} ${lastName} was addes as Tech` });

      // Clear Fields
      setFirstName('');
      setLastName('');
    }
  };

  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>New Technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="lastName" className="active">
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <div className="left" style={buttonStyle}>
          <a
            href="#!"
            onClick={onsubmit}
            className="modal-close waves-effect waves-light blue btn"
          >
            Enter
          </a>
        </div>
      </div>
    </div>
  );
};

const buttonStyle = {
  marginLeft: '1.8%',
};

AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired,
};

export default connect(null, { addTech })(AddTechModal);