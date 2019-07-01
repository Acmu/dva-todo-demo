import uuidv4 from 'uuid/v4';

const getPureObj = (...arg) => Object.assign({}, ...arg);

export default {
  namespace: 'todo',

  state: {
    todoList: [],
    searchVal: ''
  },

  reducers: {
    setTodoList({ todoList, searchVal }, { inputValue }) {
      const obj = {
        text: inputValue,
        marked: false,
        uuid: uuidv4(),
        searched: inputValue.indexOf(searchVal) !== -1
      };
      return {
        todoList: [obj, ...todoList],
        searchVal
      };
    },

    setToggleMarked({ todoList, searchVal }, { uuid }) {
      const newArr = [];
      let lastObj = null;
      const getComputedObj = item => getPureObj(item, { marked: !item.marked });

      todoList.forEach(listItem => {
        if (uuid === listItem.uuid) {
          if (!listItem.marked) {
            lastObj = getComputedObj(listItem);
          } else {
            newArr.unshift(getComputedObj(listItem));
          }
        } else {
          newArr.push(listItem);
        }
      });

      if (lastObj) {
        newArr.push(lastObj);
      }

      return {
        todoList: newArr,
        searchVal
      };
    },

    setAllSearchedTrue({ todoList }) {
      return {
        todoList: todoList.map(item => getPureObj(item, { searched: true })),
        searchVal: ''
      };
    },

    setNoneSearched({ todoList }, { searchVal }) {
      return {
        todoList: todoList.reduce((acc, cur) => {
          let searched = true;
          if (cur.text.indexOf(searchVal) === -1) searched = false;
          return [...acc, getPureObj(cur, { searched })];
        }, []),
        searchVal
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
