//Dedine quiz objects and populate quizes array
//The questions were selected from:
//1) https://www.javatpoint.com/javascript-mcq

// use a function to populate and return the quizzes array 
function getAllQuizzes() {
    var quizes = [];
    //Q#1
    var quiz = {
        q: "Which type of JavaScript language is ___",
        options: ["Object-Oriented", "Object-Based", "Assembly language", "High-level"],
        correctAnswer: 1
    };
    quizes.push(quiz);
    //Q#2
    quiz = {
        q: "Which one of the following also known as Conditional Expression:",
        options: [
            "Alternative to if-else",
            "Switch statement",
            "If-then-else statement",
            "immediate if"],
        correctAnswer: 3
    };

    quizes.push(quiz);
    //Q#3
    quiz = {
        q: "In JavaScript, what is a block of statement?",
        options: [
            "Conditional block",
            "block that combines a number of statements into a single compound statement",
            "both conditional block and a single statement",
            "immediate if"],
        correctAnswer: 1
    };
    quizes.push(quiz);

    //Q#4
    quiz = {
        q: "When interpreter encounters an empty statements, what it will do:",
        options: [
            "Shows a warning",
            "Prompts to complete the statement",
            "Throws an error",
            "Ignores the statements"],
        correctAnswer: 2
    };
    quizes.push(quiz);

    //Q#5
    quiz = {
        q: 'The "function" and " var" are known as:',
        options: [
            "Keywords",
            "Data types",
            "Declarations statements",
            "Prototypes"],
        correctAnswer: 2
    };
    quizes.push(quiz);

    //Q#6
    quiz = {
        q: "Which of the following variables takes precedence over the others if the names are the same?:",
        options: [
            "Global variable",
            "The local element",
            "The two of the above",
            "None of the above"],
        correctAnswer: 1
    };
    quizes.push(quiz);

    //Q#7
    quiz = {
        q: "Which one of the following is the correct way for calling the JavaScript code?:",
        options: [
            "Preprocessor",
            "Triggering Event",
            "RMI",
            "Function/Method"],
        correctAnswer: 3
    };
    quizes.push(quiz);

    //Q#8
    quiz = {
        q: "Which of the following type of a variable is volatile?",
        options: [
            "Mutable variable",
            "Dynamic variable",
            "Volatile variable",
            "Immutable variable"],
        correctAnswer: 0
    };
    quizes.push(quiz);

    //Q#9
    quiz = {
        q: "Which of the following option is used as hexadecimal literal beginning?",
        options: [
            "00",
            "0x",
            "0X",
            "Bothe 0x and 0X"],
        correctAnswer: 3
    };
    quizes.push(quiz);

    //Q#10
    quiz = {
        q: "When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints______.",
        options: [
            "Prints an exception error",
            "Prints an overflow error",
            "Displays 'Infinity'",
            "Prints the value as such"],
        correctAnswer: 2
    };
    quizes.push(quiz);

    //Q#11
    quiz = {
        q: "In the JavaScript, which one of the following is not considered as an error:",
        options: [
            "Syntax error",
            "Missing of semicolons",
            "Division by zero",
            "Missing of Bracket"],
        correctAnswer: 2
    };
    quizes.push(quiz);

    //Q#12
    quiz = {
        q: "In the JavaScript, which one of the following is not considered as an error:",
        options: [
            "Syntax error",
            "Missing of semicolons",
            "Division by zero",
            "Missing of Bracket"],
        correctAnswer: 2
    };
    quizes.push(quiz);


    //Q#13
    quiz = {
        q: "Which of the following givenfunctions of the Number Object formats a number with a different number of digits to the right of the decimal?",
        options: [
            "toExponential()",
            "toFixed()",
            "toPrecision()",
            "toLocaleString()"],
        correctAnswer: 1
    };
    quizes.push(quiz);

    //Q#14
    quiz = {
        q: "Which of the following number object function returns the value of the number?",
        options: [
            "toString()",
            "valueOf()",
            "toLocaleString()",
            "toPrecision()"],
        correctAnswer: 1
    };
    quizes.push(quiz);

    //Q#15
    quiz = {
        q: "Which of the following function of the String object returns the character in the string starting at the specified position via the specified number of characters?",
        options: [
            "slice()",
            "split()",
            "substr()",
            "search()"],
        correctAnswer: 2
    };
    quizes.push(quiz);

    //Q#16
    quiz = {
        q: "In JavaScript the x===y statement implies that:",
        options: [
            "Both x and y are equal in value, type and reference address as well.",
            "Both are x and y are equal in value only.",
            "Both are equal in the value and data type.",
            "Both are not same at all."],
        correctAnswer: 2
    };
    quizes.push(quiz);

    //Q#17
    quiz = {
        q: "In JavaScript the x===y statement implies that:",
        options: [
            "Both x and y are equal in value, type and reference address as well.",
            "Both are x and y are equal in value only.",
            "Both are equal in the value and data type.",
            "Both are not same at all."],
        correctAnswer: 2
    };
    quizes.push(quiz);

    //Q#18
    quiz = {
        q: 'Choose the correct snippet from the following to check if the variable "a" is not equal the "NULL":',
        options: [
            "if(a!==null)",
            "if (a!)",
            "if(a!null)",
            "if(a!=null)"],
        correctAnswer: 0
    };
    quizes.push(quiz);

    //Q#19
    quiz = {
        q: 'Suppose we have a text "human" that we want to convert into string without using the "new" operator. Which is the correct way from the following to do so:',
        options: [
            "toString()",
            "String(human)",
            'String newvariable="human"',
            "Both human.toString() and String(human)"],
        correctAnswer: 3
    };
    quizes.push(quiz);

    //Q#20
    quiz = {
        q: "In JavaScript, what will be used for calling the function definition expression:",
        options: [
            "Function prototype",
            "Function literal",
            "Function calling",
            "Function declaration"],
        correctAnswer: 1
    };
    quizes.push(quiz);

    //Q#21
    quiz = {
        q: "Which of the following one is the property of the primary expression:",
        options: [
            "Contains only keywords",
            "basic expressions containing all necessary functions",
            "contains variable references alone",
            "stand-alone expressions"],
        correctAnswer: 3
    };
    quizes.push(quiz);

    //Q#22
    quiz = {
        q: "Which one of the following is used for the calling a function or a method in the JavaScript:",
        options: [
            "Property Access Expression",
            "Functional expression",
            "Invocation expression",
            "Primary expression"],
        correctAnswer: 2
    };
    quizes.push(quiz);

    //Q#23
    quiz = {
        q: 'The "new Point(3,2)", is a kind of _______ expression',
        options: [
            "Object Creation Expression",
            "Primary Expression",
            "Invocation Expression",
            "Constructor Calling Expression"],
        correctAnswer: 0
    };
    quizes.push(quiz);

    //Q#24
    quiz = {
        q: "Which one of the following operator is used to check weather a specific property exists or not:",
        options: [
            "Exists",
            "Exists",
            "within",
            "in"],
        correctAnswer: 3
    };
    quizes.push(quiz);

    //Q#25
    quiz = {
        q: "Which one of the following is an ternary operator:",
        options: [
            "?",
            ":",
            "-",
            ""],
        correctAnswer: 0
    };
    quizes.push(quiz);

    //Q#26
    quiz = {
        q: "Which one of the following is an ternary operator:",
        options: [
            "?",
            ":",
            "-",
            ""],
        correctAnswer: 0
    };
    quizes.push(quiz);

    //Q#27
    quiz = {
        q: 'An expression that can legally appear on the left side of an assignment expression." is a well known explanation for variables, properties of objects, and elements of arrays. They are called_____.',
        options: [
            "Properties",
            "Prototypes",
            "Definition",
            "Lvalue"],
        correctAnswer: 3
    };
    quizes.push(quiz);

    //Q#28
    quiz = {
        q: 'What we will get if we compare the "one" with "8" using the less than operator ("one"<8)?',
        options: [
            "False",
            "True",
            "NaN",
            "Undefined"],
        correctAnswer: 0
    };
    quizes.push(quiz);

    //Q#29
    quiz = {
        q: "Which one of the following is known as the Equality operator, which is used to check whether the two values are equal or not:",
        options: [
            "=",
            "===",
            "==",
            "&&"],
        correctAnswer: 2
    };
    quizes.push(quiz);

    //Q#30
    quiz = {
        q: "Which one of the following operator returns false if both values are equal?",
        options: [
            "!",
            "!==",
            "!=",
            "All the above"],
        correctAnswer: 2
    };
    quizes.push(quiz);

    //Q#31
    quiz = {
        q: "In a case, where the value of the operator is NULL , the typeof returned by the unary operator is___.",
        options: [
            "undefined",
            "string",
            "boolean",
            "object"],
        correctAnswer: 3
    };
    quizes.push(quiz);

    //Q#32
    quiz = {
        q: "Which one of the following is not a keyword:",
        options: [
            "if",
            "with",
            "debugger",
            "use strict"],
        correctAnswer: 3
    };
    quizes.push(quiz);

    //Q#33
    quiz = {
        q: 'Which one of the following is not considered as "statement" in the JavaScript?',
        options: [
            "use strict",
            "debugger",
            "if",
            "with"],
        correctAnswer: 0
    };
    quizes.push(quiz);

    //Q#34
    quiz = {
        q: 'What if we define a "for" loop and it removes one of the properties that has not yet been enumerated?',
        options: [
            "The removed property will be stored in a cache",
            "The loop will not run at all",
            "That property will be enumerated",
            "That specific property will not be enumerated"],
        correctAnswer: 3
    };
    quizes.push(quiz);

    //Q#35
    quiz = {
        q: "Which of the following is the correct response by the interpreter in a jump statement when an exception is thrown?",
        options: [
            "The interpreter will jump to the one of the nearest enclosing exception handler",
            "The interpreter will throw another exception",
            "The interpreter will stop working",
            "The interpreter throws an error"],
        correctAnswer: 0
    };
    quizes.push(quiz);

    //Q#36
    quiz = {
        q: 'What is the basic purpose of the "toLocateString()" method?',
        options: [
            "It returns a localised object representation",
            "It returns a localized string representation of the object",
            "It return a local time in the string format",
            "It return a parsed string"],
        correctAnswer: 1
    };
    quizes.push(quiz);

    //Q#37
    quiz = {
        q: "A set of unordered properties that, has a name and value is called______",
        options: [
            "String",
            "Array",
            "Serialised Object",
            "Object"],
        correctAnswer: 3
    };
    quizes.push(quiz);

    //Q#38
    quiz = {
        q: "Every object contains three object attributes that are _______.",
        options: [
            "Prototype, class, object's extensible flag",
            "Prototype, class, objects' parameters",
            "Class, parameters, object's extensible flag",
            "Native object, Classes and Interfaces and Object's extensible flag"],
        correctAnswer: 0
    };
    quizes.push(quiz);

    //Q#39
    quiz = {
        q: "The linkage of a set of prototype objects is known as______",
        options: [
            "prototype stack",
            "prototype",
            "prototype class",
            "prototype chain"],
        correctAnswer: 3
    };
    quizes.push(quiz);

    //Q#40
    quiz = {
        q: "The linkage of a set of prototype objects is known as______",
        options: [
            "prototype stack",
            "prototype",
            "prototype class",
            "prototype chain"],
        correctAnswer: 3
    };
    quizes.push(quiz);

    //Q#41
    quiz = {
        q: "To know about an object, whether the object is a prototype (or a part of a prototype chain) of another object, the user can use_______",
        options: [
            "==operator",
            "equals() method",
            "=== operator",
            "isPrototypeOf() method"],
        correctAnswer: 3
    };
    quizes.push(quiz);

    //Q#42
    quiz = {
        q: "Which one of the following method or operator is used for identification of the array?",
        options: [
            "Typeof",
            "==",
            "===",
            "isarrayType"],
        correctAnswer: 3
    };
    quizes.push(quiz);

    //Q#43
    quiz = {
        q: 'For which purpose the array "map()" methods is used ?',
        options: [
            "It used for mapping the elements of another array into itself.",
            "It passes each data-item of the array and returns the necessary mapped elements.",
            "It passes the data-items of an array into another array.",
            "It passes every element of the array on which it is invoked to the function you specify, and returns an array containing the values returned by that function."],
        correctAnswer: 3
    };
    quizes.push(quiz);

    //Q#44
    quiz = {
        q: 'Both the "reducedRight()" and "reduce()" methods follow which one of the following common operation?',
        options: [
            "inject and fold",
            "filter and fold",
            "finger and fold",
            "fold"],
        correctAnswer: 0
    };
    quizes.push(quiz);

    //Q#45
    quiz = {
        q: 'Which one of the following given task is performed by the "pop()" method of the array?',
        options: [
            "It updates the element of the array",
            "it increments the total length of the array by 1",
            "It prints the first element and made no impact on the length of the array",
            'updates the element removes one element of an array on each time the "pop()" function called'],
        correctAnswer: 3
    };
    quizes.push(quiz);

    //Q#46
    quiz = {
        q: 'What will happen if we use the "join()" method along with the "reverse()" method?',
        options: [
            "It will reverse and concatenates the elements of the array",
            "It will reverse the element and store the elements in the same array",
            "It will just reverse the element of the array",
            "It will store the elements of the specified array in the normal order"],
        correctAnswer: 0
    };
    quizes.push(quiz);

    //Q#47
    quiz = {
        q: 'What is the primary role of the "return ()" statement in a function body?',
        options: [
            "It returns the value and continues executing rest of the statements",
            "It returns the value and stops the program execution",
            "Stops executing the function and returns the value",
            "It returns the value and stops executing the function"],
        correctAnswer: 3
    };
    quizes.push(quiz);

    //Q#48
    quiz = {
        q: "If a function which does not return a value is known as _____",
        options: [
            "Static function",
            "Procedure",
            "Method",
            "Dynamic function"],
        correctAnswer: 1
    };
    quizes.push(quiz);


    //Q#49
    quiz = {
        q: "The execution of a function stops when the program control encounters the _________ in the body of the function.",
        options: [
            "return statement",
            "continue statement",
            "break statement",
            "goto statement"],
        correctAnswer: 0
    };
    quizes.push(quiz);

    //Q#50
    quiz = {
        q: "In which events/scenarios, A function name gets optional in JavaScript?",
        options: [
            "When a function is defined as a looping statement",
            "When the function is called",
            "When a function is defined as expressions",
            "When the function is predefined"],
        correctAnswer: 0
    };
    quizes.push(quiz);

    return quizes;
}

