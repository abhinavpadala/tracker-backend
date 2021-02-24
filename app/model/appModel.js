"use strict";

import sql from "./db.js";

// object constructor
const Task = function (task) {
  this.tasks = task.task;
  this.status = task.status;
  this.created_at = new Date();
};

Task.createTask = (newTask, result) => {
  console.log(newTask);
  sql.query("INSERT INTO tasks set ?", newTask, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Task.getTaskById = (taskId, result) => {
  sql.query("Select * from tasks where id =?", taskId, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Task.getAllTask = (result) => {
  sql.query("Select * from tasks", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("tasks: ", res);
      result(null, res);
    }
  });
};

Task.updateById = function (id, task, result) {
  sql.query(
    "UPDATE tasks SET tasks = ? WHERE id = ?",
    [task.tasks, id],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
Task.remove = function (id, result) {
  sql.query("DELETE FROM tasks WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

export default Task;
