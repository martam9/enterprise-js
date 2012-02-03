var express = require('express'),
    hl = require("highlight").Highlight,
    io = require('socket.io');

var app = express.createServer(),
    socket = io.listen(app);

app.configure(function () {
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  app.set('view engine', 'jade');
});

// Colors
var colors = 'ff0090,ffff00,0bff00,08e3ff,ff460d'.split(',');

// Tips
var tips = require(__dirname + '/tips');

// Make 'em sexy
tips.forEach(function (tip) {
  if (tip.example) {
    // Wrap it in script tags to trigger JavaScript highlighting...sigh
    tip.example = hl('<script>\n' + tip.example.join('\n') + '\n</script>');
    // Unwrap (hax)
    tip.example = tip.example.replace('<span class="tag">&lt;<span class="keyword">script</span>&gt;</span><span class="javascript">', '');
    tip.example = tip.example.replace('</span><span class="tag">&lt;/<span class="keyword">script</span>&gt;</span>', '');
  }
});

// Utilities
function showTip (req, res, index) {
  res.render('index.jade', {
    locals: {
      tip: tips[index - 1],
      color: colors[Math.floor(Math.random() * colors.length)],
      index: index
    }
  });
}

function generateTip (index) {
  return {
    tip: tips[index - 1],
    color: colors[Math.floor(Math.random() * colors.length)],
    index: index
  };
}

function generateRandomIndex() {
  return Math.ceil(Math.random() * tips.length);
}

// Routes
app.get('/', function (req, res) {
  showTip(req, res, generateRandomIndex());
});

app.get('/:permalink', function (req, res) {
  var index = req.params.permalink;

  if (tips[index - 1]) {
    showTip(req, res, index);
  } else {
    res.redirect('/');
  }
});

// WebSocket
socket.on('connection', function(client){
  client.on('message', function (action) {
    if (action === 'refresh') {
      client.send(JSON.stringify(generateTip(generateRandomIndex())));
    }
  });
});

app.listen(3002);
