export default {
  namespace: 'todo',

  state: [],

  reducers: {
    add(
      state,
      {
        payload: { val }
      }
    ) {
      return [...state, val];
    },
    delete(
      state,
      {
        payload: { index }
      }
    ) {
      return state.filter((_, i) => i !== index);
    }
  },

  effects: {
    *addEffect({ payload }, { call, put }) {
      const delay = ms =>
        new Promise(resolve => {
          setTimeout(resolve, ms);
        });
      // call的函数要返回promise
      yield call(delay, 1000);
      yield put({
        type: 'add',
        payload
      });
    }
  }
};
