import React, { Component } from "react";

class TaskForm extends Component {
  state = {
    title: "",
    description: ""
  };

  onSubmit = event => {
    this.props.addTask(this.state.title, this.state.description);
    event.preventDefault();
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="write a task"
          onChange={this.onChange}
          value={this.state.title}
        />
        <br />
        <br />
        <textarea
          name="description"
          placeholder="Write a task"
          onChange={this.onChange}
          value={this.state.description}
        ></textarea>
        <input type="submit" />
      </form>
    );
  }
}

export default TaskForm;
