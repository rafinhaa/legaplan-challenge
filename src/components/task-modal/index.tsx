'use client';

import { Modal } from '@/components/modal';
import './styles.scss';
import { Button } from '@/components/button';

export type TaskModalProps = {
  onCancel: () => void;
}

export const TaskModal = ({ onCancel }: TaskModalProps) => {
  return (
    <Modal>
      <h2>Nova tarefa</h2>
      <label>
        <p>Título</p>
        <input
          type="text"
          placeholder="Digite"
        />
      </label>
      <div className="div-buttons">
        <Button variant="tertiary" onClick={onCancel}>
          Cancelar
        </Button>
        <Button
        >
          Adicionar
        </Button>
      </div>
    </Modal>
  );
};