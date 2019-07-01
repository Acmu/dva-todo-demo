import uuidv4 from 'uuid/v4';

const getPureObj = (...arg) => Object.assign({}, ...arg);

export default {
  namespace: 'todo',

  state: {
    todoList: [],
    searchVal: ''
  },

  reducers: {
    setTodoList(store, { obj }) {
      return {
        ...store,
        todoList: [obj, ...store.todoList]
      };
    },

    setToggleMarked(store, { todoList }) {
      return {
        ...store,
        todoList
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
    *addTodoListItem({ inputValue }, { put, select }) {
      const obj = yield select(({ todo }) => {
        return {
          text: inputValue,
          marked: false,
          uuid: uuidv4(),
          searched:
            todo.searchVal.length || inputValue.indexOf(todo.searchVal) !== -1
        };
      });
      yield put({
        type: 'setTodoList',
        obj
      });
    },

    *toggleMarked({ uuid }, { put, select }) {
      const todoList = yield select(({ todo: { todoList } }) => {
        const newArr = [];
        let lastObj = null;
        const getComputedObj = item =>
          getPureObj(item, { marked: !item.marked });
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
        return newArr;
      });
      yield put({
        type: 'setToggleMarked',
        todoList
      })
    }
  }
};
