import { Puzzle } from './../src/backend.js';

describe('Puzzle', () => {
  test ('should create a puzzle with two arrays', () => {
    var puzzle = new Puzzle();
    expect(puzzle.solved).toEqual([1,5,2,4,8,9,3,7,6,7,3,9,2,5,6,8,4,1,4,6,8,3,7,1,2,9,5,3,8,7,1,2,4,6,5,9,5,9,1,7,6,3,4,2,8,2,4,6,8,9,5,7,1,3,9,1,4,6,3,7,5,8,2,6,2,5,9,4,8,1,3,7,8,7,3,5,1,2,9,6,4]);
    expect(puzzle.userInput).toEqual([0,5,2,4,8,9,3,7,6,7,3,9,2,5,6,8,4,1,4,6,8,3,7,1,2,9,5,3,8,7,1,2,4,6,5,9,5,9,1,7,0,3,4,2,8,2,4,6,8,9,5,7,1,3,9,1,4,6,3,7,5,8,2,6,2,5,9,4,8,1,3,7,8,7,3,5,1,2,0,6,4]);
  });
  test ('should check if userInput and solved arrays are equal', () => {
    var puzzle = new Puzzle();
    expect(puzzle.checkEqual()).toEqual("incorrect")


  });
});
