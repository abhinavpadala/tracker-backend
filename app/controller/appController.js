"use strict";
import Task from "../model/appModel.js";

const list_all_tasks = (req, res) => {
  Task.getAllTask((err, task) => {
    if (err) {
      res.send(err);
      console.log("res", task);
    }
    res.send(task);
  });
};

const create_a_task = (req, res) => {
  const new_Task = new Task(req.body);
  if (!new_Task.tasks || !new_Task.status) {
    res
      .status(400)
      .send({ error: true, message: "Please provide task/status" });
  } else {
    Task.createTask(new_Task, (err, Task) => {
      if (err) {
        res.send(err);
        res.json(task);
      }
    });
  }
};

const read_a_task = (req, res) => {
  Task.getTaskById(req.params.taskId, (err, task) => {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};

const update_a_task = (req, res) => {
  Task.updateById(req.params.taskId, new Task(req.body), (err, task) => {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};

const delete_a_task = function (req, res) {
  Task.remove(req.params.taskId, function (err, task) {
    if (err) res.send(err);
    res.json({ message: "Task successfully deleted" });
  });
};

export default {
  list_all_tasks: list_all_tasks,
  create_a_task: create_a_task,
  read_a_task: read_a_task,
  update_a_task: update_a_task,
  delete_a_task: delete_a_task,
};
