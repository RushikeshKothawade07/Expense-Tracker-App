import React from "react";

import "./App.css";

const App = () => {
  // Get all buttons with the class 'highlight-button'
  const buttons = document.querySelectorAll(".highlight-button");

  // Add click event listener to each button
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove the 'highlighted' class from all buttons
      buttons.forEach((btn) => {
        btn.classList.remove("highlighted");
        btn.disabled = false; // re-enable all buttons
      });
      // Add the 'highlighted' class to the clicked button
      button.classList.add("highlighted");
      button.disabled = true; // disable the clicked button
    });
  });

  return (
    <div className="App">
      <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
        <h1 className="text-4xl py-8 mb-4 bg-slate-800 text-white rounded">
          Expense Tracker
        </h1>
        <div className="bgDiv1">
          <div classname="grid md:grid-cols-2 gap-4">
            <form>
              {/* <label htmlFor="description"></label>
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Salary, House Rent, SIP"
            />
            <br /> */}
              <br />
              <div>
                <div>
                  <button className=" btn btn-2 btn-sep icon-income borderClass  highlight-button buttoner   btnInitial">
                    Income
                  </button>
                  <button className=" btn btn-3 btn-sep icon-expense borderClass highlight-button buttoner btnInitial">
                    Expense
                  </button>
                  <button className=" btn btn-1 btn-sep icon-investment borderClass highlight-button buttoner btnInitial">
                    Investment
                  </button>
                </div>

                <br />
                <br />
              </div>
              <div className="flex justify-center gap-4">
                <div className=" flex flex-col sm:flex-row">
                  <div className="w-full sm:w-1/2 px-2">
                    <input
                      type="text"
                      placeholder="Description"
                      className="input-field block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>
                  <div className="w-full sm:w-1/2 px-2 mt-4 sm:mt-0">
                    <input
                      type="text"
                      placeholder="Amount (Rs.)"
                      className="input-field block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>
                </div>
              </div>

              <br />
              <button className="btnSubmit">Add Transaction</button>
            </form>
          </div>
          <br />
          <br />
        </div>
      </div>

      <div className="containerLine mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800 "></div>
      <div className="container2 mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800 ">
              {/* chart */}
      </div>
    </div>
  );
};

export default App;
