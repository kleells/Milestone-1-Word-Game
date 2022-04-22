# Milestone-1-Word-Game

1) Inspiration for a word game
    I wanted to do a word game becasue I play a lot of them and have for a long time. I first thought of creating a crossword game but that seems more complicated and well beyond my coding abilities. I then started looking into building a word guess game and the game Wordle. Wordle has a simple layout and since I am not a designer, I could use CSS and make it look how I'd like without a lot of art skills. The words are generated randomly so writing code to generate them would be needed. The HTML document would need a few simple divs for the sections on the board.

2) How to play. 
    My version requires the keyboard for inputting letters into the tiles on the screen. After entering a word on a line , hit enter and it will reveal how many correct letters and in what postion they may be for the next guess. Green means you have the letter in the correct tile, yellow means you have a letter in the word but not in the correct spot, red-orange indicates that the letter is not in the word at all. You have up to 6 guesses. if you guess correclty all of the letters in the word will be green. If you are unable to solve the game, the solution word will appear in the space above the game board after your last word attempt and enter is hit.
    
3) Technologies used:
    - HTML
    - CSS: flex box, colors, fonts, applying styles to ids and classed from an external style sheet.
    - JavaScript: DOM, arrays, event.listeners, if/else statements, for loops, API(word generator)
    - localhost

4) Citations and reference material:
    - stackoverflow.com for grid styling and functions
    - Kenny Yip Coding on youTube for CSS ideas, array functions, gameboard and keyboard tile functionality
    - Ian Lenehan on youTube for keyboard layout and functionality
    - Ania Kubow on youTube for Random Word API functionality
    - rapidapi.com for Random Word API
    - nytimes.com/games/wordle/index.html for inspection of the actual game code
