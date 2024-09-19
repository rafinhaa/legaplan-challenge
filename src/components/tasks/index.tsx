"use client";

import "./styles.scss";
import { FiTrash } from "react-icons/fi";
import { Checkbox } from "@/components/checkbox";
import { Button } from "@/components/button";
import { useTasks } from "@/context/tasks";

export const Tasks = () => {

  const { tasks, completedTasks, updateTaskStatus, handleClickShowModal, handleClickAddTask } = useTasks();

  const hasTasks = tasks.length > 0;
  const hasCompletedTasks = completedTasks.length > 0;

  return (
    <>
      <div className="tasks">
        <h2>Suas tarefas de hoje</h2>
        <ul>
          {hasTasks ? (
            tasks.map((task) => (
              <li className="task" key={task.id}>
                <Checkbox
                  checked={false}
                  onChange={() => updateTaskStatus(task.id, !task.completed)}
                />
                <p onClick={() => {}}>{task.title}</p>
                <FiTrash
                  className="trash-icon"
                  onClick={() => handleClickShowModal(task.id)}
                />
              </li>
            ))
          ) : (
            <p className="no-task">Você ainda não tem tarefas.</p>
          )}
        </ul>
        <h2>Tarefas finalizadas</h2>
        <ul>
          {hasCompletedTasks ? (
            completedTasks.map((task) => (
              <li className="task" key={task.id}>
                <Checkbox
                  checked={task.completed}
                  onChange={() => updateTaskStatus(task.id, !task.completed)}
                />
                <p className="completed-task-text" onClick={() => {}}>
                  {task.title}
                </p>
                <FiTrash
                  className="trash-icon"
                  onClick={() => handleClickShowModal(task.id)}
                />
              </li>
            ))
          ) : (
            <p className="no-task">Você ainda não finalizou nenhuma tarefa.</p>
          )}
        </ul>
      </div>
      <Button variant="primary" onClick={handleClickAddTask}>
        Adicionar nova tarefa
      </Button>
    </>
  );
};
