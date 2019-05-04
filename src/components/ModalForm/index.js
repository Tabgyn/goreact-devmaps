import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import { Creators as ModalActions } from '../../store/ducks/modal';
import { Creators as DeveloperActions } from '../../store/ducks/developers';

import './styles.css';
import {
  Form, ButtonContainer, CancelButton, SubmitButton,
} from './styles';

Modal.setAppElement(document.getElementById('root'));

class ModalForm extends Component {
  state = {
    developerInput: '',
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    const { developerInput } = this.state;

    const {
      addDeveloperRequest,
      modal: { coordinates },
    } = this.props;

    addDeveloperRequest(developerInput, coordinates);
    this.setState({ developerInput: '' });
  };

  handleHideModal = () => {
    const { hideModal } = this.props;
    hideModal();
    this.setState({ developerInput: '' });
  };

  render() {
    const { modal, loading } = this.props;
    const { developerInput } = this.state;
    return (
      <Modal
        isOpen={modal.isVisible}
        onRequestClose={this.handleHideModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        <Form onSubmit={this.handleFormSubmit}>
          <strong>Adicionar novo usuário</strong>
          <input
            placeholder="Usuário do Github"
            value={developerInput}
            onChange={e => this.setState({ developerInput: e.target.value })}
          />
          <ButtonContainer>
            <CancelButton type="button" onClick={this.handleHideModal}>
              Cancelar
            </CancelButton>
            <SubmitButton type="submit">
              {loading ? <i className="fa fa-spinner fa-pulse" /> : 'Salvar'}
            </SubmitButton>
          </ButtonContainer>
        </Form>
      </Modal>
    );
  }
}

ModalForm.propTypes = {
  addDeveloperRequest: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  modal: PropTypes.shape({
    isVisible: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.string]),
    coordinates: PropTypes.oneOfType([
      PropTypes.oneOf([null]),
      PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number,
      }),
    ]),
  }).isRequired,
};

const mapStateToProps = state => ({
  modal: state.modal,
  loading: state.developers.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ModalActions, ...DeveloperActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalForm);
