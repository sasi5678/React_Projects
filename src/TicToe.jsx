import React, { useState } from 'react'
import OImage from './assets/o-solid-full.svg'
import XImage from './assets/x-solid-full.svg'


let data = ["", "", "", "", "", "", "", ""]
const TicToe = () => {

    const [message, setMessage] = useState("TICTACTOE GAME")
    const [count, setCount] = useState(0)




    function showImage(e, index) {

        if (count % 2 === 0) {
            const imgElement = document.createElement('img')
            imgElement.src = XImage;
            e.target.innerHTML = ""
            e.target.appendChild(imgElement)
            data[index] = 'x';
            setCount(c => c + 1)
        }
        else {
            const imgElement = document.createElement('img')
            imgElement.src = OImage;
            e.target.innerHTML = ""
            e.target.appendChild(imgElement)
            data[index] = 'O';
            setCount(c => c + 1)
        }

        if ((data[0] === 'x' && data[1] === 'x' && data[2] === 'x') ||
            (data[3] === 'x' && data[4] === 'x' && data[5] === 'x') ||
            (data[6] === 'x' && data[7] === 'x' && data[8] === 'x') ||
            (data[0] === 'O' && data[1] === 'O' && data[2] === 'O') ||
            (data[3] === 'O' && data[4] === 'O' && data[5] === 'O') ||
            (data[6] === 'O' && data[7] === 'O' && data[8] === 'O') ||
            (data[0] === 'x' && data[3] === 'x' && data[6] === 'x') ||
            (data[1] === 'x' && data[4] === 'x' && data[7] === 'x') ||
            (data[2] === 'x' && data[5] === 'x' && data[8] === 'x') ||
            (data[0] === 'O' && data[3] === 'O' && data[6] === 'O') ||
            (data[1] === 'O' && data[4] === 'O' && data[7] === 'O') ||
            (data[2] === 'O' && data[5] === 'O' && data[8] === 'O')) {


            setMessage("Congratulation you win!!!")
            setTimeout(() => {
                resetGame()
            }, 1000)

        } else if (count === 8) {

            setMessage("Draw the Match!!!")
            setTimeout(() => {
                resetGame()
            }, 1000)


        }
    }


    function resetGame() {
        data = ["", "", "", "", "", "", "", ""]
        const boxes = document.querySelectorAll(".box")
        boxes.forEach(box => box.innerHTML = "")
        setMessage("TICTACTOE GAME")
        setCount(0)
    }




    return (

        <div className='main'>
            <h2>{message}</h2>
            <div className='container'>

                <div className="box" onClick={(e) => showImage(e, 0)}></div>
                <div className="box" onClick={(e) => showImage(e, 1)}></div>
                <div className="box" onClick={(e) => showImage(e, 2)}></div>
                <div className="box" onClick={(e) => showImage(e, 3)}></div>
                <div className="box" onClick={(e) => showImage(e, 4)}></div>
                <div className="box" onClick={(e) => showImage(e, 5)}></div>
                <div className="box" onClick={(e) => showImage(e, 6)}></div>
                <div className="box" onClick={(e) => showImage(e, 7)}></div>
                <div className="box" onClick={(e) => showImage(e, 8)}></div>


            </div>

            <button onClick={resetGame}>Reset</button>
        </div>

    )
}

export default TicToe
