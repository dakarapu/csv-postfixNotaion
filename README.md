# node-es6-boilerplate

- Implemented ES6 functionality (dev has dependencies on babel).
- Configured babel to suit latest library versions.
- Nodemon for change monitoring and automatic app restart.
- Used Jest for basic unit testing.

# Installing app

- Checkout the code and run `npm install`

# Running Application

- Use `npm start` from terminal to start application.
- App will prompt you to enter input and output files to read and write data.
- Enter names seperated by space as below:
  ex: `input.csv output.csv`
- Hit enter and the script will execute.
- Tests can be run using `npm test` command, unit tests will be executed.

# Bugs

- This app can identify cell positions such as a1 = {a: column, 1: row} and pick the values of that cell, however it cannot evaluate such multiple cells.
  ex: `2 a1 + 4 - +` (In this situation it can identify cell positon of a1)
  ex: `2 b3 a4 + * 4` ((In this situation it can identify cell positon but cannot evalute the expression to a value)).

# Limitations

- There are few limitations in this app implementation:

ex: when the combination of cell position is aa2, this implementation cannot identify the cell.

- Need to improve tests suit.
