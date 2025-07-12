// controllers/controller.js

// In-memory code snippets
let examples = [
  {
    title: "1. Greet User",
    code: `function greet(name) {\n  return \`Hello, \${name}!\`;\n}`
  },
  {
    title: "2. Factorial (Recursive)",
    code: `function factorial(n) {\n  if (n <= 1) return 1;\n  return n * factorial(n - 1);\n}`
  },
  {
    title: "3. Find Maximum in Array",
    code: `const findMax = arr => Math.max(...arr);`
  },
  {
    title: "4. Reverse a String",
    code: `function reverseString(str) {\n  return str.split('').reverse().join('');\n}`
  },
  {
    title: "5. Check Palindrome",
    code: `function isPalindrome(str) {\n  const reversed = str.split('').reverse().join('');\n  return str === reversed;\n}`
  },
  {
    title: "6. Fibonacci Sequence",
    code: `function fibonacci(n) {\n  const fib = [0, 1];\n  for (let i = 2; i < n; i++) {\n    fib[i] = fib[i - 1] + fib[i - 2];\n  }\n  return fib;\n}`
  },
  {
    title: "7. Capitalize First Letter",
    code: `function capitalize(str) {\n  return str.charAt(0).toUpperCase() + str.slice(1);\n}`
  }
];


// GET /
exports.getHome = (req, res) => {
  res.render('index', { examples });
};

// POST /add-snippet
exports.postSnippet = (req, res) => {
  const { title, code } = req.body;
  if (title && code) {
    examples.push({ title, code });
  }
  res.redirect('/');
};
