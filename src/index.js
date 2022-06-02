import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css';
import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'
const container = document.getElementById('root')
const root = createRoot(container)


const App = () => {
  
  
  return (
    
    <div>
     <Header/>
     <Content/>
     <Total/>
     
    
    </div>
  )
}

 
root.render(<App />)
