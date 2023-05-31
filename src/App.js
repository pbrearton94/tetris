import './App.css';
import GridBoard from './components/grid-board/grid-board.component';
import NextBlock from './components/next-block/next-block.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tetris</h1>
      </header>
      <GridBoard />
      <NextBlock />
    </div>
  );
}

export default App;
