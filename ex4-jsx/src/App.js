import React from "react";

class Shape {
  constructor(color = "red") {
    this.color = color;
  }
  getArea() {
    return 0;
  }
  toString() {
    return `Shape[color=${this.color}]`;
  }
}

class Rectangle extends Shape {
  constructor(color, length = 1, width = 1) {
    super(color);
    this.length = length;
    this.width = width;
  }
  getArea() {
    return this.length * this.width;
  }
  toString() {
    return `Rectangle[${super.toString()}, length=${this.length}, width=${this.width}]`;
  }
}

class Triangle extends Shape {
  constructor(color, base = 1, height = 1) {
    super(color);
    this.base = base;
    this.height = height;
  }
  getArea() {
    return 0.5 * this.base * this.height;
  }
  toString() {
    return `Triangle[${super.toString()}, base=${this.base}, height=${this.height}]`;
  }
}


// Sum of unknown number of arguments
const sumNumbers = (...args) => args.reduce((acc, curr) => acc + curr, 0);

// Flatten arguments into an array
const collectArgs = (...args) => {
  let result = [];
  args.forEach((arg) => {
    if (Array.isArray(arg)) {
      result.push(...arg);
    } else {
      result.push(arg);
    }
  });
  return result;
};

// Counter function using Closure
const createCounter = () => {
  let count = 0;
  return () => count++;
};
const getNextNumber = createCounter();

// Parse Query Parameters from URL
const parseQueryParams = (url) => {
  const queryString = url.split("?")[1];
  if (!queryString) return {};
  const pairs = queryString.split("&");
  const result = {};
  pairs.forEach((pair) => {
    const [key, value] = pair.split("=");
    result[decodeURIComponent(key)] = decodeURIComponent(value || "");
  });
  return result;
};

// Promise function checking random number > 5
const checkRandomNumber = () => {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    if (randomNumber > 5) {
      resolve(`Success: Number is ${randomNumber}`);
    } else {
      reject(`Error: Number is ${randomNumber} (<= 5)`);
    }
  });
};

function App() {
  var people = [
    { name: "Jack", age: 50 },
    { name: "Michael", age: 9 },
    { name: "John", age: 40 },
    { name: "Ann", age: 19 },
    { name: "Elisabeth", age: 16 },
  ];

  const firstTeenager = people.find((p) => p.age >= 10 && p.age <= 20);
  const allTeenagers = people.filter((p) => p.age >= 10 && p.age <= 20);
  const isEveryTeenager = people.every((p) => p.age >= 10 && p.age <= 20);
  const isAnyTeenager = people.some((p) => p.age >= 10 && p.age <= 20);

  var array = [1, 2, 3, 4];
  const sumArray = array.reduce((acc, curr) => acc + curr, 0);
  const productArray = array.reduce((acc, curr) => acc * curr, 1);

  const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
  ];
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  // 1. Print company names started after 1987
  const companiesAfter1987 = companies.filter((c) => c.start > 1987);

  // 2. Retail companies incremented start by 1
  const retailCompaniesIncremented = companies
    .filter((c) => c.category === "Retail")
    .map((c) => ({ ...c, start: c.start + 1 }));

  // 3. Sort companies by end date ascending
  const sortedCompaniesByEnd = [...companies].sort((a, b) => a.end - b.end);

  // 4. Sort ages descending
  const sortedAgesDesc = [...ages].sort((a, b) => b - a);

  // 5. Sum of ages
  const sumAges = ages.reduce((acc, curr) => acc + curr, 0);

  // 6. New object from companies[0] using Restructuring
  const { name: compName, category: compCat } = companies[0];
  const companyObj = {
    name: compName,
    category: compCat,
    print() {
      return `Company Name: ${this.name}`;
    },
  };

  const person = {
    name: "Costas",
    address: {
      street: "Lalaland 12",
    },
  };
  const {
    address: { street },
  } = person;

  const myRect = new Rectangle("blue", 5, 4);
  const myTriangle = new Triangle("green", 6, 3);

  const [promiseResult, setPromiseResult] = React.useState("");
  const handleTestPromise = () => {
    checkRandomNumber()
      .then((res) => setPromiseResult(res))
      .catch((err) => setPromiseResult(err));
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>
          Hello <span style={{ color: "blue", fontWeight: "bold" }}>React</span>
        </h1>
      </div>

      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <img
          src="/logo512.png"
          alt="React Logo"
          style={{ width: "300px" }}
        />
        <p style={{ fontStyle: "italic", color: "#2b6cb0" }}>
          This is the React logo!
        </p>
        <p style={{ fontStyle: "italic", color: "#a0aec0", fontSize: "12px" }}>
          (I don't know why it is here either)
        </p>
        <p>
          The library for web and native user interfaces
        </p>
      </div>

      <hr />

      <div
        style={{
          backgroundColor: "#555",
          display: "flex",
          alignItems: "center",
          height: "50px",
        }}
      >
        <div
          style={{
            backgroundColor: "#2eaf6e",
            color: "white",
            padding: "0 20px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          Home
        </div>
        <div style={{ color: "white", padding: "0 20px" }}>Search</div>
        <div style={{ color: "white", padding: "0 20px" }}>Contact</div>
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "0 20px",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          Login
        </div>
      </div>

      <h1 style={{ color: "blue", fontSize: "40px", marginLeft: "20px" }}>
        This is JSX
      </h1>

      <div style={{ marginLeft: "20px" }}>
        <h2 style={{ fontSize: "28px" }}>Course names</h2>
        <ul style={{ fontSize: "22px" }}>
          <li>React</li>
          <li>ReactNative</li>
          <li>NodeJs</li>
        </ul>
      </div>

      <hr />

      <div style={{ padding: "0 20px" }}>
        <h2>ES6 Exercises Results</h2>

        <h3>1. People Array Operations:</h3>
        <p><b>First Teenager:</b> {firstTeenager ? `${firstTeenager.name} (${firstTeenager.age})` : "None"}</p>
        <p><b>All Teenagers:</b> {allTeenagers.map((p) => `${p.name} (${p.age})`).join(", ")}</p>
        <p><b>Is every person a teenager?</b> {isEveryTeenager.toString()}</p>
        <p><b>Is any person a teenager?</b> {isAnyTeenager.toString()}</p>

        <h3>2. Array Reduce & Arrow Functions:</h3>
        <p><b>Sum of [1, 2, 3, 4]:</b> {sumArray}</p>
        <p><b>Product of [1, 2, 3, 4]:</b> {productArray}</p>

        <h3>3. Companies & Ages Operations:</h3>
        <p><b>Companies started after 1987:</b> {companiesAfter1987.map((c) => c.name).join(", ")}</p>

        <p><b>Retail Companies (Start incremented by 1):</b></p>
        <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", textAlign: "center", width: "80%", maxWidth: "600px" }}>
          <tbody>
            {retailCompaniesIncremented.map((c, index) => (
              <tr key={index}>
                <td style={{ fontWeight: "bold", width: "50%" }}>{c.name}</td>
                <td style={{ fontWeight: "bold", width: "25%" }}>{c.start}</td>
                <td style={{ fontWeight: "bold", width: "25%" }}>{c.end}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p><b>Companies sorted by end date (ascending):</b> {sortedCompaniesByEnd.map((c) => `${c.name} (${c.end})`).join(" | ")}</p>
        <p><b>Ages sorted descending:</b> {sortedAgesDesc.join(", ")}</p>
        <p><b>Sum of ages:</b> {sumAges}</p>
        <p><b>Company Obj method print():</b> {companyObj.print()}</p>

        <h3>4. Functions & Destructuring:</h3>
        <p><b>Sum of numbers (1, 2, 3, 4, 5):</b> {sumNumbers(1, 2, 3, 4, 5)}</p>
        <p><b>Collect arguments (1, [2, 3], "hello"):</b> {JSON.stringify(collectArgs(1, [2, 3], "hello"))}</p>
        <p><b>Destructured Street:</b> {street}</p>
        <p><b>Counter test:</b> Call 1 = {getNextNumber()}, Call 2 = {getNextNumber()}, Call 3 = {getNextNumber()}</p>
        <p>
          <b>Parsed URL Query Params ("https://example.com?name=Costas&age=25"):</b>{" "}
          {JSON.stringify(parseQueryParams("https://example.com?name=Costas&age=25"))}
        </p>

        <h3>5. OOP Classes:</h3>
        <p><b>Rectangle Area (5x4):</b> {myRect.getArea()} | <b>toString:</b> {myRect.toString()}</p>
        <p><b>Triangle Area (base 6, height 3):</b> {myTriangle.getArea()} | <b>toString:</b> {myTriangle.toString()}</p>

        <h3>6. Promise Test:</h3>
        <button onClick={handleTestPromise} style={{ padding: "8px 16px", cursor: "pointer" }}>
          Generate Random Number (> 5)
        </button>
        {promiseResult && <p style={{ fontWeight: "bold", marginTop: "10px" }}>{promiseResult}</p>}
      </div>
    </div>
  );
}

export default App;