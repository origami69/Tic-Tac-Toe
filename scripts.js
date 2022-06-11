let gameBoard = ['', '', '', '', '', '', '', '', '']

let game = (function() {
    let blocks = document.querySelectorAll('.block')
    let gameDone = document.querySelector('.winner')
    let dumbLine = document.querySelector('.line')
    let reStart = document.querySelector('.reZero')

    let play_x = 'X'
    let play_O = 'O'
    let turn = play_x
    blocks.forEach(block => block.addEventListener('dblclick', userInput))

    function userInput(event) {
        const block = event.target;
        const blockNum = block.dataset.index

        function playerMove() {
            if (gameDone.classList.contains('visible')) {
                return
            } else if (document.querySelector('#changeName2') || document.querySelector("#changeName")) {
                return alert('Please enter your name Dude')
            }
            if (block.innerText != '') {
                return
            } else if (turn === play_x) {
                block.innerText = play_x
                gameBoard[blockNum - 1] = play_x
                turn = play_O
                winner()
            }

        }
        playerMove()

        function robotMove() {
            if (gameDone.classList.contains('visible')) {
                return
            } else if (document.querySelector('#changeName2') || document.querySelector("#changeName")) {
                return alert('Please enter your name Dude')
            }
            if (block.innerText != '') {
                return
            } else if (turn === play_O) {
                block.innerText = play_O
                gameBoard[blockNum - 1] = play_O
                turn = play_x
                winner()
            }
        }

        robotMove()

    }
    let nameChange = document.querySelector('.player')
    nameChange.addEventListener('click', changeName)

    function changeName() {
        let textEnter = document.createElement('input')
        textEnter.type = 'text'
        textEnter.placeholder = 'Press Enter'
        textEnter.id = 'changeName'
        textEnter.className = 'player'
        nameChange.replaceWith(textEnter)
        document.querySelector('.player').addEventListener('keypress', pressEnter)

        function pressEnter(event) {
            if (event.key === 'Enter') {
                let newNames = document.createElement('span')
                newNames.className = 'player'
                newNames.innerText = textEnter.value
                newNames.id = ''
                textEnter.replaceWith(newNames)
            }
        }
    }
    let nameChange2 = document.querySelector('.player2')
    nameChange2.addEventListener('click', changeMe)

    function changeMe() {
        let textEnt = document.createElement('input')
        textEnt.type = 'text'
        textEnt.placeholder = 'Press Enter'
        textEnt.id = 'changeName2'
        textEnt.className = 'player2'
        nameChange2.replaceWith(textEnt)

        document.querySelector('.player2').addEventListener('keypress', pressEnter2)

        function pressEnter2(eve) {
            if (eve.key === 'Enter') {
                let newName = document.createElement('span')
                newName.className = 'player2'
                newName.innerText = textEnt.value
                newName.id = ''
                textEnt.replaceWith(newName)
            }
        }
    }
    reStart.addEventListener('click', destroy)
        //restarts the array and the gameboard
    function destroy() {
        for (n = 0; n < blocks.length; n++) {
            gameBoard[n] = ''
            blocks[n].innerText = ''

        }
        dumbLine.id = ''
        gameDone.style.visibility = 'hidden'
        gameDone.classList.remove('visible')
        turn = play_x
    }

    function winner() {
        //checking horizontal
        if (gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') {
            gameDone.style.visibility = 'visible'
            gameDone.classList.add('visible')
            gameDone.innerText = document.querySelector('.player').innerText
            dumbLine.id = 'line-r1'
        } else if (gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O') {
            gameDone.style.visibility = 'visible'
            gameDone.classList.add('visible')
            gameDone.innerText = document.querySelector('.player2').innerText
            dumbLine.id = 'line-r1'
        }
        if (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') {
            gameDone.style.visibility = 'visible'
            gameDone.classList.add('visible')
            gameDone.innerText = document.querySelector('.player').innerText
            dumbLine.id = 'line-r2'
        } else if (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O') {
            gameDone.style.visibility = 'visible'
            gameDone.classList.add('visible')
            gameDone.innerText = document.querySelector('.player2').innerText
            dumbLine.id = 'line-r2'
        }
        if (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') {
            gameDone.style.visibility = 'visible'
            gameDone.classList.add('visible')
            gameDone.innerText = document.querySelector('.player').innerText
            dumbLine.id = 'line-r3'
        } else if (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O') {
            gameDone.style.visibility = 'visible'
            gameDone.classList.add('visible')
            gameDone.innerText = document.querySelector('.player2').innerText
            dumbLine.id = 'line-r3'
        }
        //checking verticle
        if (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') {
            gameDone.style.visibility = 'visible'
            gameDone.classList.add('visible')
            gameDone.innerText = document.querySelector('.player').innerText
            dumbLine.id = 'line-r6'
        } else if (gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O') {
            gameDone.style.visibility = 'visible'
            gameDone.classList.add('visible')
            gameDone.innerText = document.querySelector('.player2').innerText
            dumbLine.id = 'line-r6'
        }
        if (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') {
            gameDone.style.visibility = 'visible'
            gameDone.classList.add('visible')
            gameDone.innerText = document.querySelector('.player').innerText
            dumbLine.id = 'line-r5'
        } else if (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') {
            gameDone.style.visibility = 'visible'
            gameDone.classList.add('visible')
            gameDone.innerText = document.querySelector('.player2').innerText
            dumbLine.id = 'line-r5'
        }
        if (gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X') {
            gameDone.style.visibility = 'visible'
            gameDone.classList.add('visible')
            gameDone.innerText = document.querySelector('.player').innerText
            dumbLine.id = 'line-r4'
        } else if (gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O') {
            gameDone.style.visibility = 'visible'
            gameDone.classList.add('visible')
            gameDone.innerText = document.querySelector('.player2').innerText
            dumbLine.id = 'line-r4'
        }
        //across the board
        if (gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') {
            gameDone.style.visibility = 'visible'
            gameDone.classList.add('visible')
            gameDone.innerText = document.querySelector('.player').innerText
            dumbLine.id = 'line-r7'
        } else if (gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O') {
            gameDone.style.visibility = 'visible'
            gameDone.classList.add('visible')
            gameDone.innerText = document.querySelector('.player2').innerText
            dumbLine.id = 'line-r7'
        }
        if (gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X') {
            gameDone.style.visibility = 'visible'
            gameDone.classList.add('visible')
            gameDone.innerText = document.querySelector('.player').innerText
            dumbLine.id = 'line-r8'
        } else if (gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O') {
            gameDone.style.visibility = 'visible'
            gameDone.classList.add('visible')
            gameDone.innerText = document.querySelector('.player2').innerText
            dumbLine.id = 'line-r8'
        }
        //tie
        if (!gameBoard.includes('')) {
            gameDone.style.visibility = 'visible'
            gameDone.classList.add('visible')
            gameDone.innerText = 'What a Boring Match: Draw'
        }



    }

})();