'use client';

import { Modal } from '@/components/modal';
import './styles.scss';
import { Button } from '@/components/button';
import { useTasks } from '@/context/tasks';
import { useState } from 'react';

export type TaskModalProps = {
  onCancel: () => void;
}

export const TaskModal = ({ onCancel }: TaskModalProps) => {
  const [taskTitle, setTaskTitle] = useState("");

  const { addTask } = useTasks();

  const handleClickAddTask = () => {
    addTask({ id: new Date().getTime().toString(), title: taskTitle, completed: false });
    onCancel();
  };

  return (
    <Modal>
      <h2>Nova tarefa</h2>
      <label>
        <p>Título</p>
        <input
          type="text"
          placeholder="Digite"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          required
        />
      </label>
      <div className="div-buttons">
        <Button variant="tertiary" onClick={onCancel}>
          Cancelar
        </Button>
        <Button
          onClick={handleClickAddTask}
        >
          Adicionar
        </Button>
      </div>
    </Modal>
  );
};