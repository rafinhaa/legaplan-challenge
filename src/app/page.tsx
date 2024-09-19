"use client";

import { Header } from "@/components/header/header";
import { Tasks } from "@/components/tasks";
import { TaskProvider } from "@/context/tasks";

const Home = () => {


  return (
    <>
      <Header />
      <TaskProvider>
      <main>
        <Tasks />
      </main>
      </TaskProvider>
    </>
  );
};

export default Home;
