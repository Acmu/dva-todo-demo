import React, { Component } from 'react';

export default class TodoList extends Component {
  render() {
    const {
      inputValue,
      todoList,
      handleInputChange,
      handleDelete,
      addItem,
      addItemAsync
    } = this.props;

    return (
      <div id='todo-list'>
        <h2>todo list</h2>
        <input
          type='text'
          value={inputValue}
          onChange={e => handleInputChange(e.target.value)}
        />
        <button onClick={addItem}>sync +</button>
        <button onClick={addItemAsync}>async +</button>
        <ul>
          {todoList.map((item, index) => (
            <li key={String(Math.random())} onClick={() => handleDelete(index)}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
