import React from 'react';
import Header from './Components/Header';
import Stats from './Components/Stats';
import TaskForm from './Components/TaskForm';
import TasksContainer from './Components/TasksContainer';
import { TaskContextProvider } from './Contexts/TaskContextProvider';

const App = () => {
  return (
    <>
      <TaskContextProvider>
        <div className="container min-h-screen max-w-5xl mx-auto p-4 pt-10 md:p-10">
          <Header />
          <Stats />
          <TaskForm />
          <TasksContainer />
        </div>
      </TaskContextProvider>
    </>
  );
};

export default App;
