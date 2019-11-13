import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Puzzle } from "./backend.js";

$(document).ready(function() {
  $("#puzzle").submit(function(e){
    e.preventDefault();
    var puzzle = new Puzzle();
    var number1 = parseInt($("#number1").val());
    var number2 = parseInt($("#number2").val());
    var number3 = parseInt($("#number3").val());
    puzzle.userInput[0] += number1;
    puzzle.userInput[40] += number2;
    puzzle.userInput[78] += number3;
    console.log(puzzle.userInput);
    console.log(puzzle.solved);
    puzzle.checkEqual();
    $("#outcome").text(puzzle.checkEqual())
  });
});
