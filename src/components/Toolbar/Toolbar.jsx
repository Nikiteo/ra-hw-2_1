import React from 'react';
import './Toolbar.css'

export default function Toolbar(props) {
  return (
    <ul className="toolbar">
      {props.filters.map((obj) => {
        const className = obj === props.selected ? 'toolbar-item selected' : 'toolbar-item';
        return (<li key={obj} className={className} onClick={() => props.onSelectFilter(obj)}>{obj}</li>);
      })}
    </ul>
  );
}