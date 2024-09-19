'use client';

import { Header } from "@/components/header/header";
import { Tasks } from "@/components/tasks";

const Home = () => {

  return (
    <>
      <Header />
      <main>
        <Tasks />
      </main>
    </>
  );
};

export default Home;
