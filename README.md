# select-year-with-offset
A small, simple npm package that gives you a certain number of years to be displayed in an html select box with an option for offset, i.e. if you need to display only the years up until now minus 'X' (e.g. give the user opportunity to register only if he has more than 18 years).

## Install
<pre>npm i --save-dev select-year-with-offset</pre>

## Usage
Import the package in your project:
<pre>
import { getYears } from 'select-year-with-offset'

const years = getYears(18, 100)
// This will give you the years from 1999 
till 1899 (if we are still in 2017 :)
</pre>

## Copyrights
Mihail Gaberov, © 2017<br>
[mihail-gaberov.eu](http://mihail-gaberov.eu)