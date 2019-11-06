import React from 'react';
import Card from './card';

class textField extends React.Component {
  state = {
    todos: []
  };
  // Handling the input event
  submitHandler = e => {
    e.preventDefault();
    let value = e.target.children[0].value;
    const finalValue = [...this.state.todos];
    finalValue.push({ id: Math.floor(Math.random() * 1000), task: value });
    this.setState({
      todos: finalValue
    });
    e.target.children[0].value = '';
  };
  // Handling the Delete button event
  clickHandler = e => {
    e.target.parentElement.parentElement.remove();
  };
  // Handling Editing task
  clickHandler2 = e => {
    const newValue = prompt('Enter the new todo');
    e.target.textContent = newValue;
  };
  //  Handling Finished Task
  clickHandler3 = e => {
    e.target.parentElement.parentElement.firstChild.style.textDecoration =
      'line-through';
  };

  render() {
    const todos = this.state.todos.map(todo => {
      return (
        <Card
          key={todo.id}
          todo={todo.task}
          click={this.clickHandler}
          click2={this.clickHandler2}
          click3={this.clickHandler3}
        />
      );
    });

    return (
      <div className='container'>
        <form onSubmit={this.submitHandler}>
          <input type='text' className='white-text' placeholder='Enter todos' />
        </form>

        <div className='container'>{todos}</div>
      </div>
    );
  }
}

export default textField;
