import React, { Component } from 'react';
import { connect } from 'dva';

import TodoList from '../../components/TodoList';

class TodoPage extends Component {
  state = {
    inputValue: 'list item'
  };

  addItem = () => {
    const { inputValue } = this.state;
    const { dispatch } = this.props;
    dispatch({
      type: 'todo/add',
      inputValue
    });
  };

  addItemAsync = () => {
    const { inputValue } = this.state;
    const { dispatch } = this.props;
    dispatch({
      type: 'todo/addEffect',
      inputValue
    });
  };

  handleDelete = index => {
    const { dispatch } = this.props;
    dispatch({
      type: 'todo/delete',
      index
    });
  };

  handleInputChange(inputValue) {
    this.setState(() => ({
      inputValue
    }));
  }

  render() {
    const { inputValue } = this.state;
    const {
      todo: { todoList }
    } = this.props;
    return (
      <TodoList
        inputValue={inputValue}
        todoList={todoList}
        handleInputChange={this.handleInputChange}
        handleDelete={this.handleDelete}
        addItem={this.addItem}
        addItemAsync={this.addItemAsync}
      />
    );
  }
}

export default connect(({ todo }) => ({
  todo
}))(TodoPage);
