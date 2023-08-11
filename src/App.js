import { useState, useEffect } from "react";
import Board from "./Board";
import CustomSquare from "./CustomSquare";
import { calculateWinner } from "./helper-method";
import "./App.css";

const App = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [winner, setWinner] = useState(null);
  const [current, setCurrent] = useState(0);

  const handleBoardClick = (newState) => {
    setHistory([...history.slice(0, current + 1), newState]);
    setCurrent(current + 1);
    setXIsNext(!xIsNext);
  };

  const handleHistoryClick = (index) => {
    setCurrent(index);
    setXIsNext(index % 2 === 0);
  };

  const handleClickReset = () => {
    setCurrent(0);
    setXIsNext(true);
    setHistory([Array(9).fill(null)]);
    setWinner(null);
  };

  useEffect(() => {
    const winner = calculateWinner(history[current]);
    if (winner) {
      setWinner(winner);
    } else {
      setWinner(null);
    }
  }, [current]);

  return (
    <>
      <button className="button" type="button" onClick={handleClickReset}>
        Reset
      </button>
      <h2 style={{ marginBottom: "0.5rem" }}>
        {winner ? "Winner: " + winner : "Next Move: " + (xIsNext ? "X" : "O")}
      </h2>
      <div className="row">
        <Board
          winner={winner}
          xIsNext={xIsNext}
          square={history[current]}
          addToHistory={handleBoardClick}
        />
        <section>
          {history.map((_, index) => {
            let description;
            if (index > 0) {
              description = "Go to move #" + index;
            } else {
              description = "Go to game start";
            }
            return (
              <p key={index}>
                <CustomSquare
                  value={description}
                  className="button"
                  handleClick={() => handleHistoryClick(index)}
                ></CustomSquare>
              </p>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default App;
