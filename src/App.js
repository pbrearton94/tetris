import './App.css';
import GridBoard from './components/grid-board/grid-board.component';
import GridSquare from './components/grid-square/grid-square.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tetris</h1>
      </header>
      <GridBoard />
    </div>
  );
}

export default App;
