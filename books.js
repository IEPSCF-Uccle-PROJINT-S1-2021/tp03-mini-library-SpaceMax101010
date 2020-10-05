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
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.urlencoded({extended : false}));

router.get('/',(req, res) =>{
  res.redirect("/static/search.html");
});


router.post('/afficherListe', (req, res) => {

const categorie = req.body.categorieLivre;
let categorieLivre = []
  for (i = 0; i < bookList.length; i++){
    if(categorie === bookList[i].category){
      categorieLivre.push(bookList[i]);
    }
  }

  res.render('list',{categorieLivre : categorieLivre});
});


module.exports = router;
