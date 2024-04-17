const express = require('express')
const app = express()
const port = 3000

let publicUrls = [
    '/url1',
    '/url2',
    '/login'
]

function myMiddleware(req,res, next){
   
    if (publicUrls.includes(req.url)){
        next();        
    }

    else{
        //il faut vérifier que l'utilisateur est authentifié
        const token = req.headers.authorization;

        if (token && token === 'mon_token_secret'){ //si l'utilisateur a le bon token il peut aller dans l'url
            //privée
            next();
        }
        else{//sinon pas le droit: renvoyer 403
            res.status(403).send()
        }
    }   
}

app.use(myMiddleware)


app.post('/login', (req, res) => {
    res.json({token:42})//générer un token unique !!
    //et renvoyer par cookie
})

app.get('/url1', (req, res) => {
  res.send('Hello World! url1')
})


app.get('/url2', (req, res) => {
    res.send('Hello World! url2')
  })

app.get('/private/url1', (req, res) => {
    res.send('Hello it is secret')
})
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

