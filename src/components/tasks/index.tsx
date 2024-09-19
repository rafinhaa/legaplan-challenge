'use client';

import './styles.scss';
import { FiTrash } from 'react-icons/fi';
import { Checkbox } from '@/components/checkbox';

export const Tasks = () => {

  return (
    <div className="tasks">
      <h2>Suas tarefas de hoje</h2>
      <ul>
          <li className="task">
            <Checkbox
              checked={false}
              onChange={() => {}}
            />
            <p onClick={() => {}}>task</p>
            <FiTrash
              className="trash-icon"
              onClick={() => {}}
            />
          </li>
      </ul>
      <h2>Tarefas finalizadas</h2>
      <ul>
          <li className="task">
            <Checkbox
              checked={true}
              onChange={() => {}}
            />
            <p
              className="completed-task-text"
              onClick={() => {}}
            >
              task
            </p>
            <FiTrash
              className="trash-icon"
              onClick={() => {}}
            />
          </li>
      </ul>
    </div>
  );
};

