import React, { Fragment } from 'react';

import Map from '../../components/Map';
import SideBar from '../../components/SideBar';
import ModalForm from '../../components/ModalForm';

const Main = () => (
  <Fragment>
    <Map />
    <SideBar />
    <ModalForm />
  </Fragment>
);

export default Main;
