const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

router.db._.id = 'key';

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/auth/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'jesusdiaz013@gmail.com' && password === 'Admin123') {
    res.jsonp({
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwidXNlcm5hbWUiOiJhZG1pbiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwMDAwMDAwMCwiZXhwIjo5OTk5OTk5OTk5fQ.mock-signature',
      user: { 
        id: '1',                  
        email: 'admin@example.com', 
        fullName: 'Jesus Diaz',   
        isActive: true,           
        roles: ['admin']          
      }
    });
  } else {
    res.status(401).jsonp({ error: 'Invalid credentials' });
  }
});

server.use(router);

server.listen(1600, () => {
  console.log('JSON Server running on http://localhost:1600');
});
