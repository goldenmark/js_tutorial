// Reverses a string.
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  this.processedContent = function processedContent() {
    return this.content.toLowerCase();
  }

  this.palindrome = function palindrome() {
    return this.processedContent() === reverse(this.processedContent());
  }
}
