import './App.css';
import GridBoard from './components/grid-board/grid-board.component';
import NextBlock from './components/next-block/next-block.component';
import ScoreBoard from './components/score-board/score-board.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tetris</h1>
      </header>
      <GridBoard />
      <NextBlock />
      <ScoreBoard />
    </div>
  );
}

export default App;
