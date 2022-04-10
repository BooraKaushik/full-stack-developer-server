import posts from "./tuits/tuits.js";
let tuits = posts;

const createTuit = async (req, res) => {
  const newTuit = req.body;
  // newTuit._id = new Date().getTime() + "";
  // newTuit.likes = 0;
  // newTuit.dislikes = 0;
  // tuits.push(newTuit);

  res.json(await createTuit(newTuit));
};

const findAllTuits = async (req, res) => {
  res.json(await findAllTuits());
};
const updateTuit = async (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updatedTuit = req.body;
  // tuits = tuits.map((t) => (t._id === tuitdIdToUpdate ? updatedTuit : t));
  tuits = await updateTuit(tuitdIdToUpdate, updatedTuit);

  res.send(tuits);
};

const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  // tuits = tuits.filter((t) => t._id !== tuitdIdToDelete);
  tuits = await deleteTuit(tuitdIdToDelete);
  res.send(tuits);
};

export default (app) => {
  app.post("/api/tuits", createTuit);
  app.get("/api/tuits", findAllTuits);
  app.put("/api/tuits/:tid", updateTuit);
  app.delete("/api/tuits/:tid", deleteTuit);
};
