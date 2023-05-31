import "./App.css";
import {Provider} from 'react-redux';
import { createStore } from "redux";
import reducers from "./reducers";
import Controls from "./components/controls/controls.component";
import GridBoard from "./components/grid-board/grid-board.component";
import MessagePopup from "./components/message-popup/message-popup.component";
import NextBlock from "./components/next-block/next-block.component";
import ScoreBoard from "./components/score-board/score-board.component";

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Tetris</h1>
        </header>
        <GridBoard />
        <NextBlock />
        <ScoreBoard />
        <Controls />
        <MessagePopup />
      </div>
    </Provider>
  );
}

export default App;
