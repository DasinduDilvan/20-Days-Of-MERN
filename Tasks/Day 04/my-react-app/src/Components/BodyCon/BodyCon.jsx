import React from "react";
import "./BodyCon.css";

function BodyContent() {
  return (
    <div className="body">
      <h2>Welcome to the Main Content</h2>
      <p>Instead, React (often called React.js or ReactJS) is an open-source JavaScript library used for building user interfaces, primarily for web applications. It was developed by Meta (formerly Facebook) and is one of the most widely used front-end tools in web development. 

The freeCodeCamp Forum
 +1
To understand how React fits into the coding world, it helps to distinguish between the language itself and the tools built with it:
The Difference Between the Language and the Library
The Coding Language: JavaScript (or its strictly-typed sibling, TypeScript) is the actual programming language you use to write the code. JavaScript tells the browser how to behave, handles logic, and processes data. 

Stack Overflow
 +4
The Library (React): React is a collection of pre-written JavaScript code snippets and tools. Instead of writing raw JavaScript from scratch to manipulate a webpage, you use React's built-in shortcuts to build features much faster. 

YouTube
·Zero To Mastery
 +1
What is React Used For?
Building User Interfaces (UI): It manages everything the user sees and interacts with on a screen, such as buttons, forms, and menus. 

YouTube
·Codesmith
 +1
Component-Based Architecture: React allows you to split a webpage into small, reusable pieces called "components". For example, you can write the code for a search bar once and reuse it across multiple pages. 

YouTube
·Web Dev Simplified
 +2
Dynamic Updates: React handles state management efficiently. It uses a feature called the Virtual DOM to instantly update only the parts of a webpage that have changed, preventing the entire page from having to reload. 

Wikipedia
 +3
What You Need to Know to Learn It
If you want to study React via tutorials like ⁠W3Schools React Introduction, you must first learn the core building blocks of the web: HTML (for page structure), CSS (for styling), and JavaScript (the underlying language). 

W3Schools
When writing React, you will also use a special syntax extension called JSX (JavaScript XML). JSX looks almost identical to HTML but allows you to write HTML elements directly inside your JavaScript code.</p>
    </div>
  );
}

export default BodyContent;