(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let {Phrase} = require("golden-palindrome");

let string = prompt("Please enter a string for palindrome testing:");
let phrase = new Phrase(string);

if (phrase.palindrome()) {
  alert(`"${phrase.content}" is a palindrome!`);
} else {
  alert(`"${phrase.content}" is not a palindrome.`);
}

},{"golden-palindrome":2}],2:[function(require,module,exports){
module.exports = {
  Phrase: Phrase,
  TranslatedPhrase: TranslatedPhrase
}

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

String.prototype.blank = function() {
  if (this.search(/\s+/g) === -1){return false}
  else {return this.search(/\s+/g) === this.search(/^\s+$/g)} ;
}

Array.prototype.last = function() {
  return this.slice(-1)[0];
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  this.letters = function letters(string) {
    return Array.from(string).filter(c => c.match(/[a-z]/i)).join("");
  }

  this.processor = function(string) {
    return this.letters(string).toLowerCase();
  }

  this.processedContent = function processedContent(string) {
    return this.processor(string);
  }

  this.palindrome = function palindrome() {
    return this.processedContent(this.content) === this.processedContent(this.content).reverse();
  }
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  this.palindrome = function palindrome() {
    return this.processedContent(this.translation) === this.processedContent(this.translation).reverse();
  }
}

TranslatedPhrase.prototype = new Phrase();

},{}]},{},[1]);
