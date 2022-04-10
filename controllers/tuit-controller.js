import {
  createTuitDao,
  findAllTuitsDao,
  deleteTuitDao,
  updateTuitDao,
} from "../models/tuits-dao.js";
const createTuit = async (req, res) => {
  const newTuit = req.body;
  const createdTuit = await createTuitDao(newTuit);
  res.json(createdTuit);
};

const findAllTuits = async (req, res) => {
  const allTuits = await findAllTuitsDao();
  res.json(allTuits);
};
const updateTuit = async (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updatedTuit = req.body;
  const tuits = await updateTuitDao(tuitdIdToUpdate, updatedTuit);

  res.send(tuits);
};

const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  // tuits = tuits.filter((t) => t._id !== tuitdIdToDelete);
  const tuits = await deleteTuitDao(tuitdIdToDelete);
  res.send(tuits);
};

export default (app) => {
  app.post("/api/tuits", createTuit);
  app.get("/api/tuits", findAllTuits);
  app.put("/api/tuits/:tid", updateTuit);
  app.delete("/api/tuits/:tid", deleteTuit);
};
