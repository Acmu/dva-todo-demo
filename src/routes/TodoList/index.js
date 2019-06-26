import React, { Component } from 'react';
import { connect } from 'dva';

class TodoList extends Component {
  state = {
    val: 'list item'
  };

  addItem = () => {
    const { val } = this.state;
    const { dispatch } = this.props;
    dispatch({
      type: 'todo/add',
      payload: {
        val
      }
    });
  };

  addItemAsync = () => {
    const { val } = this.state;
    const { dispatch } = this.props;
    dispatch({
      type: 'todo/addEffect',
      payload: {
        val
      }
    });
  };

  handleLiClick = index => {
    const { dispatch } = this.props;
    dispatch({
      type: 'todo/delete',
      payload: {
        index
      }
    });
  };

  handleChange(val) {
    // console.log(e, e.target, e.target.value);
    this.setState(() => ({
      val
    }));
  }

  render() {
    const { val } = this.state;
    const { todo } = this.props;
    return (
      <div id='todo-list'>
        <h2>todo list</h2>
        <input
          type='text'
          value={val}
          onChange={e => this.handleChange(e.target.value)}
        />
        <button onClick={this.addItem}>sync +</button>
        <button onClick={this.addItemAsync}>async +</button>
        <ul>
          {todo.map((v, index) => (
            <li key={v} onClick={() => this.handleLiClick(index)}>
              {v}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(({ todo }) => ({
  todo
}))(TodoList);
