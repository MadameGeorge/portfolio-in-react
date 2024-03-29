import React from "react"
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CardGrid } from './components/CardGrid';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

function App() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <div className="App">
        <Header/>
        <CardGrid/>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
