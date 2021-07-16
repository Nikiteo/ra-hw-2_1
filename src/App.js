import './App.css';
import React, { useState } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import getProjects from './getProjects'
import ProjectList from './components/ProjectList/ProjectList';

export default function App() {
  const filtres = ['All', 'Websites', 'Flayers', 'Business Cards'];
  const [selected, setSelected] = useState('All');

  const onSelectFilter = (filter) => {
    setSelected(() => filter);
  }

  return (
    <div className="app">
      <Toolbar
        filters={filtres}
        selected={selected}
        onSelectFilter={onSelectFilter}
      />
      <ProjectList
        projects={getProjects()}
        selected={selected}
      />
    </div>
  );

}