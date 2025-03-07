import './styles.css';
import { startTimer, pauseTimer, resetTimer } from './timer.js';
import {removTask,addTask} from './ui.js'
document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('setting').addEventListener('click', resetTimer);
document.getElementById('addTask').addEventListener('click',addTask);
