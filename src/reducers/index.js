import { combineReducers } from "redux";
import GameReducer from "./game-reducer";

const reducers = combineReducers({
    game: GameReducer
});

export default reducers;