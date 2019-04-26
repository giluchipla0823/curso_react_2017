import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Home from "../pages/containers/home.js";

import data from '../api.json';

const homeContainer = document.getElementById('home-container');

render(
    <Home data={data} />
    , homeContainer
);