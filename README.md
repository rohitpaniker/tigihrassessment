
# **TDD JS Assessment for TIGI HR | Incubytes**

# **String Calculator \- TDD Implementation**

A Node.js implementation of the String Calculator kata using **Test-Driven Development (TDD)** methodology.

## **🎯 Project Overview**

This project demonstrates TDD principles by implementing a string calculator that:

* Handles empty strings  
* Adds single numbers  
* Adds comma-separated numbers  
* Validates against negative numbers  
* Provides both programmatic and console interfaces

## **📁 Project Structure**

```
string-calculator/
├── src/
│   └── StringCalculator.js    # Main calculator class with console interface
├── test/
│   └── StringCalculator.test.js    # Jest test suite
├── package.json               # Project dependencies and scripts
└── README.md                 # This file
```

## **🚀 Quick Start**

### **Prerequisites**

* Node.js (v14 or higher)  
* npm

### **Installation**

bash

```shell
# Clone the repository
git clone https://github.com/rohitpaniker/tigihrassessment.git
cd tigihrassessment

# Install dependencies
npm install
```

### **Running Tests**

bash

```shell
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch
```

## **📋 Features Implemented**

### **✅ Core Functionality**

* **Empty String**: Returns 0  
* **Single Number**: Returns the number itself  
* **Multiple Numbers**: Returns sum of comma-separated, newline and any delimiter separated numbers
* **Negative Validation**: Throws exception for negative numbers

### **✅ Test Coverage**

* Empty string handling  
* Single number processing  
* Multiple number addition  
* Handle comma-separated, newline and any delimiter separated numbers
* Negative number validation with proper error messages
