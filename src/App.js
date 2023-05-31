import './App.css';
import Controls from './components/controls/controls.component';
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
      <Controls />
    </div>
  );
}

export default App;
