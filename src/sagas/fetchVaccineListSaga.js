import { call, put, takeEvery } from '@redux-saga/core/effects'
import Axios from 'axios'


export function* fetchVaccineListSaga() {
    yield takeEvery('SAGA_BENEFICIARY_LIST', fetchVaccineList);
}


function* fetchVaccineList() {
    yield put({ type: 'SAGA_BENEFICIARY_LOAD' })
    try {
        const uri = 'http://localhost:4000/vaccine';
        const response = yield call(Axios.get, uri);
        yield put({ type: 'SAGA_BENEFICIARY_SUCCESS', payload: response.data });
    } catch (err) {
        yield put({ type: 'SAGA_BENEFICIARY_FAILURE', payload: err.message });
    }
}