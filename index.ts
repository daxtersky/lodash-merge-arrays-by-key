// Import stylesheets
import './style.css';
import _ from 'lodash';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const arr1 = [
{days: 0, weight: 711},
{days: 1, weight: 723},
{days: 2, weight: 700},
{days: 3, weight: 705},
{days: 4, weight: 697},
{days: 5, weight: 698},
{days: 6, weight: 695},
{days: 7, weight: 689}
];
const arr2 = [
  {days: 0, max: 2.5, min: 2},
  {days: 3, min: 2.05, max: 2.55},
  {days: 6, min: 2.1, max: 2.6}
];
const arr3 = _.merge(_.keyBy(arr1, 'days'), _.keyBy(arr2, 'days'));
console.log(arr3);
// https://stackoverflow.com/questions/38612972/how-to-merge-two-array-of-object-by-using-lodash