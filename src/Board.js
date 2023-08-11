import CustomSquare from "./CustomSquare";

const Board = ({ winner, xIsNext, square, addToHistory }) => {
  const handleClick = (index) => {
    if (square[index] || winner) return;
    const nextCustomSquares = [...square];
    if (xIsNext) {
      nextCustomSquares[index] = "X";
    } else {
      nextCustomSquares[index] = "O";
    }
    addToHistory(nextCustomSquares);
  };

  return (
    <section>
      <div className="board-row">
        <CustomSquare
          value={square[0]}
          handleClick={() => handleClick(0)}
          className="square"
        />
        <CustomSquare
          value={square[1]}
          handleClick={() => handleClick(1)}
          className="square"
        />
        <CustomSquare
          value={square[2]}
          handleClick={() => handleClick(2)}
          className="square"
        />
      </div>
      <div className="board-row">
        <CustomSquare
          value={square[3]}
          handleClick={() => handleClick(3)}
          className="square"
        />
        <CustomSquare
          value={square[4]}
          handleClick={() => handleClick(4)}
          className="square"
        />
        <CustomSquare
          value={square[5]}
          handleClick={() => handleClick(5)}
          className="square"
        />
      </div>
      <div className="board-row">
        <CustomSquare
          value={square[6]}
          handleClick={() => handleClick(6)}
          className="square"
        />
        <CustomSquare
          value={square[7]}
          handleClick={() => handleClick(7)}
          className="square"
        />
        <CustomSquare
          value={square[8]}
          handleClick={() => handleClick(8)}
          className="square"
        />
      </div>
    </section>
  );
};

export default Board;
