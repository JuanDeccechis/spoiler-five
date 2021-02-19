import { functionalities } from '../sagas/flow'


export const actions = {
    initRequest() {
        return functionalities.init();
    },
    initSuccess() {
        return 2;
    }
}