import React from 'react';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

const display = (props) => (
    <JSONPretty id="json-pretty" data={props.teams}></JSONPretty>
);

export default display;