import React, { useEffect, useState } from 'react'
// import NavBar from './NavBar'
import './NQueen.css'
// import n_queen from '../algorithm/algorithm';

const SpeedTIme = 600;

const NQueen = () => {

    const [grid, setGrid] = useState([]);
    const [gridSize, setGridSize] = useState(4);
    const [speed, setSpeed] = useState(600);

    useEffect(() => {
        gridInit();
    }, [gridSize]);


    const gridInit = () => {
        grid.forEach((row, rowIdx) => {
            row.forEach((column, colIdx) => {
                if ((rowIdx + colIdx) % 2 === 0) {
                    document.getElementById(`cell-${rowIdx}-${colIdx}`).classList = 'queen-cell gray-cell';
                } else {
                    document.getElementById(`cell-${rowIdx}-${colIdx}`).classList = "queen-cell";
                }
            })
        });

        let gridX = new Array(gridSize);
        for (let i = 0; i < gridSize; i++) {
            gridX[i] = new Array(gridSize).fill(false);
        }
        setGrid(gridX);
    }





    var isSafe = async (r, c) => {
        var flag = 1;

        // row-wise check
        for (let j = 0; j < c; j++) {
            if (grid[r][j]) {
                flag = 0;
                document.getElementById(`cell-${r}-${j}`).classList = 'queen-cell queen-img red-cell'
            } else {
                document.getElementById(`cell-${r}-${j}`).classList = 'queen-cell blue-cell'
            }
        }
        for (let j = c + 1; j < gridSize; j++) {
            if (grid[r][j]) {
                flag = 0;
                document.getElementById(`cell-${r}-${j}`).classList = 'queen-cell queen-img red-cell'
            } else {
                document.getElementById(`cell-${r}-${j}`).classList = 'queen-cell blue-cell'
            }
        }


        // column-wise check
        for (let i = 0; i < r; i++) {
            if (grid[i][c]) {
                flag = 0;
                document.getElementById(`cell-${i}-${c}`).classList = 'queen-cell queen-img red-cell'
            } else {
                document.getElementById(`cell-${i}-${c}`).classList = 'queen-cell blue-cell'
            }
        }
        for (let i = r + 1; i < gridSize; i++) {
            if (grid[i][c]) {
                flag = 0;
                document.getElementById(`cell-${i}-${c}`).classList = 'queen-cell queen-img red-cell'
            } else {
                document.getElementById(`cell-${i}-${c}`).classList = 'queen-cell blue-cell'
            }
        }



        // right-diagonal check
        for (let i = r + 1, j = c + 1; i < gridSize && j < gridSize; i++, j++) {
            if (grid[i][j]) {
                flag = 0;
                document.getElementById(`cell-${i}-${j}`).classList = 'queen-cell queen-img red-cell'
            } else {
                document.getElementById(`cell-${i}-${j}`).classList = 'queen-cell blue-cell'
            }
        }
        for (let i = r - 1, j = c - 1; i >= 0 && j >= 0; i--, j--) {
            if (grid[i][j]) {
                flag = 0;
                document.getElementById(`cell-${i}-${j}`).classList = 'queen-cell queen-img red-cell'
            } else {
                document.getElementById(`cell-${i}-${j}`).classList = 'queen-cell blue-cell'
            }
        }


        // left-diagonal check
        for (let i = r + 1, j = c - 1; i < gridSize && j >= 0; i++, j--) {
            if (grid[i][j]) {
                flag = 0;
                document.getElementById(`cell-${i}-${j}`).classList = 'queen-cell queen-img red-cell'
            } else {
                document.getElementById(`cell-${i}-${j}`).classList = 'queen-cell blue-cell'
            }
        }
        for (let i = r - 1, j = c + 1; i >= 0 && j < gridSize; i--, j++) {
            if (grid[i][j]) {
                flag = 0;
                document.getElementById(`cell-${i}-${j}`).classList = 'queen-cell queen-img red-cell'
            } else {
                document.getElementById(`cell-${i}-${j}`).classList = 'queen-cell blue-cell'
            }
        }

        await waitForAnimation(SpeedTIme);

        // <----------------UNDO-------------------->

        // row-wise check
        for (let j = 0; j < c; j++) {
            if (grid[r][j]) {
                document.getElementById(`cell-${r}-${j}`).classList = "queen-cell queen-img green-cell";
            } else if ((r + j) % 2 === 0) {
                document.getElementById(`cell-${r}-${j}`).classList = "queen-cell gray-cell";
            } else {
                document.getElementById(`cell-${r}-${j}`).classList = "queen-cell";
            }
        }
        for (let j = c + 1; j < gridSize; j++) {
            if (grid[r][j]) {
                document.getElementById(`cell-${r}-${j}`).classList = "queen-cell queen-img green-cell";
            } else if ((r + j) % 2 === 0) {
                document.getElementById(`cell-${r}-${j}`).classList = "queen-cell gray-cell";
            } else {
                document.getElementById(`cell-${r}-${j}`).classList = "queen-cell";
            }
        }

        // column-wise check
        for (let i = 0; i < r; i++) {
            if (grid[i][c]) {
                document.getElementById(`cell-${i}-${c}`).classList = "queen-cell queen-img green-cell";
            } else if ((i + c) % 2 === 0) {
                document.getElementById(`cell-${i}-${c}`).classList = "queen-cell gray-cell";
            } else {
                document.getElementById(`cell-${i}-${c}`).classList = "queen-cell";
            }
        }
        for (let i = r + 1; i < gridSize; i++) {
            if (grid[i][c]) {
                document.getElementById(`cell-${i}-${c}`).classList = "queen-cell queen-img green-cell";
            } else if ((i + c) % 2 === 0) {
                document.getElementById(`cell-${i}-${c}`).classList = "queen-cell gray-cell";
            } else {
                document.getElementById(`cell-${i}-${c}`).classList = "queen-cell";
            }
        }


        // right-diagonal check
        for (let i = r + 1, j = c + 1; i < gridSize && j < gridSize; i++, j++) {
            if (grid[i][j]) {
                document.getElementById(`cell-${i}-${j}`).classList = "queen-cell queen-img green-cell";
            } else if ((i + j) % 2 === 0) {
                document.getElementById(`cell-${i}-${j}`).classList = "queen-cell gray-cell";
            } else {
                document.getElementById(`cell-${i}-${j}`).classList = "queen-cell";
            }
        }
        for (let i = r - 1, j = c - 1; i >= 0 && j >= 0; i--, j--) {
            if (grid[i][j]) {
                document.getElementById(`cell-${i}-${j}`).classList = "queen-cell queen-img green-cell";
            } else if ((i + j) % 2 === 0) {
                document.getElementById(`cell-${i}-${j}`).classList = "queen-cell gray-cell";
            } else {
                document.getElementById(`cell-${i}-${j}`).classList = "queen-cell";
            }
        }


        // left-diagonal check
        for (let i = r + 1, j = c - 1; i < gridSize && j >= 0; i++, j--) {
            if (grid[i][j]) {
                document.getElementById(`cell-${i}-${j}`).classList = "queen-cell queen-img green-cell";
            } else if ((i + j) % 2 === 0) {
                document.getElementById(`cell-${i}-${j}`).classList = "queen-cell gray-cell";
            } else {
                document.getElementById(`cell-${i}-${j}`).classList = "queen-cell";
            }
        }
        for (let i = r - 1, j = c + 1; i >= 0 && j < gridSize; i--, j++) {
            if (grid[i][j]) {
                document.getElementById(`cell-${i}-${j}`).classList = "queen-cell queen-img green-cell";
            } else if ((i + j) % 2 === 0) {
                document.getElementById(`cell-${i}-${j}`).classList = "queen-cell gray-cell";
            } else {
                document.getElementById(`cell-${i}-${j}`).classList = "queen-cell";
            }
        }

        return flag;
    }








    var n_queen = async (c, q) => {
        if (c >= gridSize || q >= gridSize) {
            return q >= gridSize;
        }

        for (var r = 0; r < gridSize; r++) {
            document.getElementById(`cell-${r}-${c}`).classList = 'queen-cell queen-img yellow-cell';
            await waitForAnimation(SpeedTIme);

            if (await isSafe(r, c)) {
                document.getElementById(`cell-${r}-${c}`).classList = "queen-cell queen-img green-cell";
                grid[r][c] = true;
                if (await n_queen(c + 1, q + 1)) return true;


                // backtrack
                grid[r][c] = false;
                if ((r + c) % 2 === 0) {
                    document.getElementById(`cell-${r}-${c}`).classList = "queen-cell gray-cell";
                } else {
                    document.getElementById(`cell-${r}-${c}`).classList = 'queen-cell';
                }
            } else if ((r + c) % 2 === 0) {
                document.getElementById(`cell-${r}-${c}`).classList = "queen-cell gray-cell";
            } else {
                document.getElementById(`cell-${r}-${c}`).classList = "queen-cell";
            }
        }
        return false;
    }







    const HandleVisualize = async () => {
        // await n_queen(0, 0, grid, gridSize, SpeedTIme);
        await n_queen(0, 0);
    }

    const timeHandle = (e) => {
        let value = parseInt(e.target.value);
        SpeedTIme = value;
        setSpeed(value);
    }



    return (
        <>
            {/* <NavBar msg={"N Queen Visualizer"} /> */}

            <div className="queen-container">
                <div className="queen-header">
                    <div>
                        <div className="flex gap-3">
                            {/* <Button onClick={ClickHandler} label="Start Visaulize" isBgColor/> */}
                            <button onClick={HandleVisualize} >Start Visualization</button>
                        </div>
                    </div>

                    <div>
                        <div className="queen-range">
                            <div className="queenlabe">Size: {gridSize} X {gridSize}</div>
                            <div>
                                <input
                                    onChange={(e) => setGridSize(parseInt(e.target.value))}
                                    type="range"
                                    value={gridSize}
                                    min='4'
                                    max="12"
                                    step='1'
                                    id='gridSizeRange'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {
                    grid.map((row, rowIdx) => {
                        return (
                            <div key={rowIdx} className='queen-row'>
                                {
                                    row.map((column, colIdx) => {
                                        if ((rowIdx + colIdx) % 2 === 0)
                                            return (
                                                <div
                                                    id={`cell-${rowIdx}-${colIdx}`}
                                                    key={colIdx}
                                                    className='queen-cell gray-cell'
                                                ></div>
                                            );

                                        return (
                                            <div
                                                id={`cell-${rowIdx}-${colIdx}`}
                                                key={colIdx}
                                                className='queen-cell'
                                            ></div>
                                        );
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

async function waitForAnimation(times) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("");
        }, times);
    })
}

export default NQueen
