export default {
  namespace: 'todo',

  state: {
    todoList: []
  },

  reducers: {
    add({ todoList }, { inputValue }) {
      return {
        todoList: [...todoList, inputValue]
      };
    },
    delete({ todoList }, { index }) {
      return {
        todoList: todoList.filter((_, i) => i !== index)
      };
    }
  },

  effects: {
    *addEffect({ inputValue }, { call, put, select }) {
      const delay = ms =>
        new Promise(resolve => {
          setTimeout(resolve, ms);
        });
      // call的函数要返回promise
      yield call(delay, 1000);
      // 这里可以获取到store中的数据
      // yield select(store => {
      //   console.log(store.todo, 'select data')
      // })
      yield put({
        type: 'add',
        inputValue
      });
    }
  }
};
