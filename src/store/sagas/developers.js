import { call, put, select } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import api from '../../services/api';

import { Creators as DeveloperActions } from '../ducks/developers';
import { Creators as ModalActions } from '../ducks/modal';

export function* addDeveloper(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.developer}`);

    const isDuplicated = yield select(state => state.developers.data.find(developer => developer.id === data.id));

    if (isDuplicated) {
      yield put(
        DeveloperActions.addDeveloperFailure('Desenvolvedor já adicionado'),
      );
      toast.warn('Desenvolvedor já adicionado');
    } else {
      const developerData = {
        id: data.id,
        name: data.name,
        login: data.login,
        avatar: data.avatar_url,
        cordinates: action.payload.coordinates,
      };

      yield put(DeveloperActions.addDeveloperSuccess(developerData));
      toast.success('Desenvolvedor adicionado com sucesso');
    }
  } catch (err) {
    yield put(
      DeveloperActions.addDeveloperFailure('Erro ao adicionar Desenvolvedor'),
    );
    toast.error('Erro ao adicionar Desenvolvedor');
  } finally {
    yield put(ModalActions.hideModal());
  }
}
