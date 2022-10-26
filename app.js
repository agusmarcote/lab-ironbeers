const express = require('express');

const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const { getEnabledCategories } = require('trace_events');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));


// Register the location for handlebars partials here:

// ...

// Add the route handlers here:

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/beers', (req, res) => {
  const prueba = async function(){
 try {
  const ber = await punkAPI.getBeers()
  const array = ber.slice(0,25)
  const data = {
    beers: array
  }
  //const cervezas = Object.assign({}, array)
  
  res.render('beers', data)
 console.log(data)
  } catch (err){
    console.log(err)
  }}
  prueba()
  


  
})

app.get('/random-beers', async (req, res) => {
  try{
    const rand = await punkAPI.getRandom()
    console.log(rand)
    res.render('random-beers', {rand})
  } catch (err){
    console.log(err)
  }
})

app.listen(3000, () => console.log('🏃‍ on port 3000'));
