import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

export default router.get("/vista-test", (req, res) => {
  const cant = req.query.cant || 10;
  fetch(`http://localhost:8080/api/productos?cant=${cant}`).then(res => res.json())
  .then(function(data) {
    res.render("index", { productos: data });
  }).catch(function(err) {
    res.json(err.message);
  });
});