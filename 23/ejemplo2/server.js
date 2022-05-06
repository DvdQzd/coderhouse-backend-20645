const express = require("express");
const session = require("express-session");

const app = express();

app.use(
  session({
    secret: "secreto",
    resave: true,
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => {
  const nombre = req.query.nombre;
  if (req.session.contador) {
    req.session.contador++;
    res.send(`${nombre || 'Hola'}, has visitado el sitio ${req.session.contador} veces.`);
  } else {
    req.session.contador = 1;
    res.send(`Bienvenido! ${nombre || 'sujeto'}!`);
  }
});

app.get("/olvidar", (req, res) => {
  req.session.destroy((err) => {
    if (!err) {
      res.send("Hasta luego!");
    } else {
      res.send({ status: "logout failed", body: err });
    }
  });
});

app.get("/login", (req, res) => {
  const { username, password } = req.query;
  if (username !== "pepe" || password !== "pepepass") {
    return res.send("login failed");
  }
  req.session.user = username;
  req.session.admin = true;
  res.send("login success!");
});

function auth(req, res, next) {
    if (req.session?.user === 'pepe' && req.session?.admin) {
      return next()
    }
    return res.status(401).send('error de autorización!')
}

app.get('/privado', auth, (req, res) => {
    res.send('si estas viendo esto es porque ya te logueaste!')
   })
   
   


app.listen(3000);
