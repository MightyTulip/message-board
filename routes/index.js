var express = require('express');
var router = express.Router();

const dateFormat = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'}
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleDateString('en-AU', dateFormat)
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleDateString('en-AU', dateFormat)
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Mini MessageBoard', 
    messages: messages.sort((a, b) => new Date(b.added) - new Date(a.added) ) 
  });
});

router.post('/new', function(req, res) {
  messages.push({ 
    text: req.body.messageText, 
    added: new Date().toLocaleDateString('en-AU', dateFormat), 
    user: req.body.userText 
  })
  res.redirect('/')
})

module.exports = router;
