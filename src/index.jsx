import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss' // Importing stylesheet to HTML

// TEST: Inserting "Hello world!" into div#root
ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
)