import express from 'express'
import handlebars from 'express-handlebars';
import prodRoutes from './routes/ProdRoutes.js'
import frontRoutes from './routes/FrontRoutes.js';

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/productos', prodRoutes);
app.use("/productos", frontRoutes);

app.engine("hbs", handlebars({
    extname: "hbs",
    defaultLayout: "layout.hbs"
  })
);

app.set("views", "./views");
app.set("view engine", "hbs");

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
server.on('error', error => console.log(`Error en servidor: ${error}`))