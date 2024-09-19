"use client";
import { DeleteTaskModal } from "@/components/delete-task-modal";
import { TaskModal } from "@/components/task-modal";
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
  useReducer,
} from "react";

interface Tasks {
  id: string;
  title: string;
  completed: boolean;
}

type TaskState = {
  tasks: Tasks[];
  completedTasks: Tasks[];
};

type TaskAction =
  | { type: "ADD_TASK"; payload: Tasks }
  | { type: "DELETE_TASK"; payload: string }
  | { type: "UPDATE_TASK_STATUS"; payload: { id: string; completed: boolean } }
  | { type: "LOAD_TASKS" };

const initialState: TaskState = {
  tasks: [],
  completedTasks: [],
};

const taskReducer = (state: TaskState, action: TaskAction): TaskState => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
        completedTasks: state.completedTasks.filter(
          (task) => task.id !== action.payload
        ),
      };
    case "UPDATE_TASK_STATUS":
      const { id, completed } = action.payload;

      const updatedAllTasks = state.tasks
        .concat(state.completedTasks)
        .map((task) => (task.id === id ? { ...task, completed } : task));

      const newTasks = updatedAllTasks.filter((task) => !task.completed);
      const newCompletedTasks = updatedAllTasks.filter(
        (task) => task.completed
      );

      return {
        ...state,
        tasks: newTasks,
        completedTasks: newCompletedTasks,
      };
    case "LOAD_TASKS":
      const allTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      return {
        ...state,
        tasks: allTasks.filter((task: Tasks) => !task.completed),
        completedTasks: allTasks.filter((task: Tasks) => task.completed),
      };
    default:
      return state;
  }
};

interface TaskContextType {
  tasks: Tasks[];
  completedTasks: Tasks[];
  addTask: (task: Tasks) => void;
  handleClickAddTask: () => void;
  deleteTask: () => void;
  handleClickShowModal: (taskId: string) => void;
  updateTaskStatus: (taskId: string, completed: boolean) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function TaskProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const [deleteTaskId, setDeleteTaskId] = useState("");

  const [showAddTaskModal, setAddTaskShowModal] = useState(false);
  const [showDeleteTaskModal, setDeleteTaskShowModal] = useState(false);

  const handleClickShowModal = (taskId: string) => {
    setDeleteTaskShowModal(true);
    setDeleteTaskId(taskId);
  };

  const handleClickAddTask = () => {
    setAddTaskShowModal(true);
  };

  const addTask = (task: Tasks) => {
    dispatch({ type: "ADD_TASK", payload: task });
  };

  const deleteTask = () => {
    dispatch({ type: "DELETE_TASK", payload: deleteTaskId });
  };

  const updateTaskStatus = (taskId: string, completed: boolean) => {
    dispatch({
      type: "UPDATE_TASK_STATUS",
      payload: { id: taskId, completed },
    });
  };

  useEffect(() => {
    dispatch({ type: "LOAD_TASKS" });
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        completedTasks: state.completedTasks,
        addTask,
        deleteTask,
        updateTaskStatus,
        handleClickShowModal,
        handleClickAddTask,
      }}
    >
      {children}
      {showAddTaskModal && (
        <TaskModal onCancel={() => setAddTaskShowModal(false)} />
      )}
      {showDeleteTaskModal && (
        <DeleteTaskModal onCancel={() => setDeleteTaskShowModal(false)} />
      )}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
}
