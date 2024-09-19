"use client";

import { Button } from "@/components/button";
import { Header } from "@/components/header/header";
import { TaskModal } from "@/components/task-modal";
import { Tasks } from "@/components/tasks";
import { useState } from "react";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClickShowModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <Header />
      <main>
        <Tasks />
        <Button variant="primary" onClick={handleClickShowModal}>
          Adicionar nova tarefa
        </Button>
      </main>

      {showModal && <TaskModal onCancel={() => setShowModal(false)} />}
    </>
  );
};

export default Home;
