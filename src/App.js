import React from "react";

// class Timer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { seconds: 0 };
//   }

//   tick() {
//     this.setState(state => ({
//       seconds: state.seconds + 1
//     }))
//   }

//   componentDidMount() {
//     this.interval = setInterval(() => this.tick(), 1000);
//   }
//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }
//   render() {
//     return <div>Seconds: {this.state.seconds}</div>;
//   }
// }

// export default Timer;


// class Square extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: null
//     }
//   }
//   render() {
//     return (
//       <button className="square" onClick={() => this.setState({
//         value: "X",
//       })}
//       >
//         {this.state.value}
//       </button >
//     )
//   }
// }

// class Board extends React.Component {
//   renderSquare(i) {
//     return <Square value={i} />
//   }

//   render() {
//     const status = "Next player: X"

//     return (
//       <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     )
//   }
// }

// class Game extends React.Component {
//   render() {
//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board />
//         </div>
//         <div className="game-info">
//           <div></div>
//           <ol></ol>
//         </div>
//       </div>
//     )
//   }
// }


class ColorChangingSquares extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      square1Color: 'red',
      square2Color: 'blue',
    };
  }

  handleSquareClick = () => {
    this.setState((prevState) => ({
      square1Color: prevState.square2Color,
      square2Color: prevState.square1Color,
    }));
  }

  render() {
    return (
      <div>
        <div
          onClick={this.handleSquareClick}
          className={`square ${this.state.square1Color === 'red' ? 'red-square' : 'blue-square'}`}
        ></div>
        <div
          onClick={this.handleSquareClick}
          className={`square ${this.state.square2Color === 'red' ? 'red-square' : 'blue-square'}`}
        ></div>
      </div>
    );
  }
}

export default ColorChangingSquares;

