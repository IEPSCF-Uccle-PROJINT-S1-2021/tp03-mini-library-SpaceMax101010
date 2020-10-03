let bookList = [];
bookList[0] = {author : "Guillaume Debré", title : "L'affaire Lafayette", category : "roman historique"};
bookList[1] = {author : "Gérald Messadié ", title : "La conspiration Jeanne d'Arc", category : "roman historique"};
bookList[2] = {author : "J.R.R. Tolkien", title : "Le Seigneur des anneaux", category : "fantasy"};
bookList[3] = {author : "Michael Ende", title : "L'Histoire sans fin", category : "fantasy"};
bookList[4] = {author : "Andrzej Sapkowski", title : "Le Sorceleur", category : "fantasy"};
bookList[5] = {author : "George R. R. Martin", title : "Le Trône de fer", category : "fantasy"};
bookList[6] = {author : "Hervé Bazin", title : "Vipère au poing", category : "autobiographie"};
bookList[7] = {author : "Marie Cardinal", title : "Les mots pour le dire", category : "autobiographie"};
bookList[8] = {author : "Giacomo Casanova", title : "Histoire de ma vie", category : "autobiographie"};
bookList[9] = {author : "Douglas Adams", title : "Le Guide du voyageur galactique", category : "Science-fiction"};


const express = require('express');
const router = express.Router();

router.get('/',(req, res) =>{
  res.send('Hello');
});

router.get('/search',(req, res) =>{
  res.send('search');
});

router.get('/list',(req, res) =>{
  res.render("list", {
    title : 'Liste de livres'
  });
});

module.exports = router;
