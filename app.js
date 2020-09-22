const  express=require('express');
const path=require('path');
const  bodyParser=require('body-parser');
const  app=express();
const  routes=require('./routers/index');

//seting
app.set('port',process.env.PORT || 3000 );
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');


//middi

app.use((req,res,next)=>{
    console.log(`${req.url}-${req.method}`);
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}));
//routers

app.use(routes);
//static file
app.use(express.static(path.join(__dirname,'public')));
//start

app.listen(app.get('port'),()=>{

    console.log('Server on port',app.get('port'));
});