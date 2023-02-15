
import express from 'express';
import { engine } from 'express-handlebars';

const app = express();

app.use(express.static('web'));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/input', (request, response) => {

    response.render('serverapp_input');
})

app.get('/output', (request, response) => {

    const {head, body} = request.query;
    const x = head;
    const y = body;

    response.render('serverapp_output', {x, y});
})



const port = 8080;
app.listen(port, () => {
    console.log(`Server App listening on port ${port}`)
});