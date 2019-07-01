import React, { Component } from 'react';
import { connect } from 'dva';

import TodoList from '../../components/TodoList';

class TodoPage extends Component {
  addItem = inputValue => {
    const { dispatch } = this.props;
    dispatch({
      type: 'todo/setTodoList',
      inputValue
    });
  };

  searchItem = searchValue => {
    const { dispatch } = this.props;
    dispatch({
      type: 'todo/setSearch',
      searchValue
    });
  };

  // addItemAsync = () => {
  //   const { inputValue } = this.state;
  //   const { dispatch } = this.props;
  //   dispatch({
  //     type: 'todo/addEffect',
  //     inputValue
  //   });
  // };

  toggleMarked = uuid => {
    const { dispatch } = this.props;
    dispatch({
      type: 'todo/setToggleMarked',
      uuid
    });
  };

  setNoneSearched = searchVal => {
    const { dispatch } = this.props;
    dispatch({
      type: 'todo/setNoneSearched',
      searchVal
    });
  };

  setAllSearchedTrue = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'todo/setAllSearchedTrue'
    });
  };

  render() {
    const {
      todo: { todoList }
    } = this.props;
    return (
      <TodoList
        setNoneSearched={this.setNoneSearched}
        setAllSearchedTrue={this.setAllSearchedTrue}
        todoList={todoList}
        toggleMarked={this.toggleMarked}
        addItem={this.addItem}
        addItemAsync={this.addItemAsync}
      />
    );
  }
}

export default connect(({ todo }) => ({
  todo
}))(TodoPage);
