const IncomeSchema = require("../models/IncomeModel");
exports.addIncome = async (req, res) => {
  console.log(req.body);
  const { title, amount, category, description, date } = req.body;

  const income = IncomeSchema({
    title,
    amount,
    category,
    description,
    date,
  });
  try {
    if (!title || !amount || !category || !description || !date) {
      return res.status(400).json({ message: "All fields re req bro" });
    }
    if (amount <= 0 || !amount === "number") {
      return res.status(400).json({ message: "money cannot be negative" });
    }
    await income.save();
    res.status(200).json({ message: "Income added" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error adding income" });
  }
  console.log(income);
};

//getting income
exports.getIncomes = async (req, res) => {
  try {
    const incomes = await IncomeSchema.find().sort({ createdAt: -1 });
    res.status(200).json(incomes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
//deleting income
exports.deleteIncome = async (req, res) => {
  const { id } = req.params;
  IncomeSchema.findByIdAndDelete(id)
    .then((income) => {
      res.status(200).json({ message: "Deletion Successful" });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Server error" });
    });
};
