import React from 'react';
import './ProjectList.css';

function getAltFromUrl(url) {
  const path = url.split('/');
  return path.pop().split('.')[0];
}

export default function ProjectsList(props) {
  let projects = props.projects.map((item) => item);
  if (props.selected !== 'All') {
    projects = props.projects.filter((project) => project.category === props.selected);
  }

  return (
    <div className="project-list clearfix">
      {projects.map((item) => (
          <img
            className="project-list-item"
            src={item.img}
            alt={item.category}
            key={getAltFromUrl(item.img)}
          />
      ))}
    </div>
  );
}