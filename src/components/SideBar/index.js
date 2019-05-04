import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as DeveloperActions } from '../../store/ducks/developers';

import {
  Container,
  List,
  ListItem,
  Avatar,
  UserInfo,
  RemoveButton,
  UserUrl,
} from './styles';

const SideBar = ({ developers, removeDeveloper }) => (
  <Container>
    <List>
      {developers.data.map(developer => (
        <ListItem>
          <Avatar src={developer.avatar} alt={developer.name} />
          <UserInfo>
            <strong>{developer.name}</strong>
            <span>{developer.login}</span>
          </UserInfo>
          <RemoveButton
            type="button"
            onClick={() => {
              removeDeveloper(developer);
            }}
          >
            <i className="fa fa-fw fa-times-circle remove" />
          </RemoveButton>
          <UserUrl
            href={`https://github.com/${developer.login}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-fw fa-angle-right go-to-page" />
          </UserUrl>
        </ListItem>
      ))}
    </List>
  </Container>
);

SideBar.propTypes = {
  developers: PropTypes.shape({}).isRequired,
  removeDeveloper: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  developers: state.developers,
});

const mapDispatchToProps = dispatch => bindActionCreators(DeveloperActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideBar);
