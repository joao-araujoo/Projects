const express = require("express");
const verifyToken = require("./middlewares/verifyToken");
const router = express.Router();

const getUsers = require("./controllers/users/getUsers");
const getUserByID = require("./controllers/users/getUserByID");
const createUser = require("./controllers/users/createUser");
const updateUser = require("./controllers/users/updateUser");
const deleteUser = require("./controllers/users/deleteUser");
const login = require("./auth/login");

router.post("/auth/login", login);
router.get("/users", verifyToken, getUsers);
router.get("/users/:id", verifyToken, getUserByID);
router.post("/users", createUser);
router.put("/users/:id", verifyToken, updateUser);
router.delete("/users/:id", verifyToken, deleteUser);

const getCategories = require("./controllers/categories/getCategories");
const getCategoryByID = require("./controllers/categories/getCategoryByID");
const getCategoriesByUser = require("./controllers/categories/getCategoriesByUser");
const createCategory = require("./controllers/categories/createCategory");
const updateCategory = require("./controllers/categories/updateCategory");
const deleteCategory = require("./controllers/categories/deleteCategory");

router.get("/categories", verifyToken, getCategories);
router.get("/categories/user", verifyToken, getCategoriesByUser);
router.get("/categories/:id", verifyToken, getCategoryByID);
router.post("/categories", verifyToken, createCategory);
router.put("/categories/:id", verifyToken, updateCategory);
router.delete("/categories/:id", verifyToken, deleteCategory);

const getTransactions = require("./controllers/transactions/getTransactions");
const getTransactionByID = require("./controllers/transactions/getTransactionByID");
const createTransaction = require("./controllers/transactions/createTransaction");
const updateTransaction = require("./controllers/transactions/updateTransaction");
const deleteTransaction = require("./controllers/transactions/deleteTransaction");

router.get("/transactions", verifyToken, getTransactions);
router.get("/transactions/:id", verifyToken, getTransactionByID);
router.post("/transactions", verifyToken, createTransaction);
router.put("/transactions/:id", verifyToken, updateTransaction);
router.delete("/transactions/:id", verifyToken, deleteTransaction);

module.exports = router;
