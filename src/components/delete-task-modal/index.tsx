'use client';

import { Modal } from '@/components/modal';
import './styles.scss';
import { Button } from '@/components/button';

export type DeleteTaskModalProps = {
  onCancel: () => void;
}

export const DeleteTaskModal = ({ onCancel }: DeleteTaskModalProps) => {
  return (
    <Modal>
      <h2>Deletar tarefa</h2>
        <p>Tem certeza que você deseja deletar esta tarefa?</p>
      <div className="div-buttons">
        <Button variant="tertiary" onClick={onCancel}>
          Cancelar
        </Button>
        <Button
          variant="secondary"
        >
          Deletar
        </Button>
      </div>
    </Modal>
  );
};