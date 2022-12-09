const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    //   console.log(req);
    res.send('/main');
});

// 새로운 라우팅 열기 res.json 하면 json포맷으로 response 를 명시
app.get('/dog', (req, res) => {
    // res.send({'sound':'멍멍'});
    res.json({'sound':'멍멍', 'name':'누렁이'});
});

// id 를 파라미터로 받는 방법, GET/POST
app.get('/user/:id', (req, res) => {
    const reqv = req.params;
    const getv = req.query; // GET
    const postv = req.body; // POST
    console.log(reqv, getv);
    res.json({'id':reqv.id, 'name':getv.name});
});

app.get('/sound/:name/:gender', (req, res) => {
    // const { name } = req.params
    const name = req.params.name
    const gender = req.params.gender
    if(name=='dog') {
        res.json({'sound':'멍멍', 'gender':gender})
    } else if(name=='cat') {
        res.json({'sound':'야옹', 'gender':gender})
    } else if(name=='pig') {
        res.json({'sound':'꿀꿀', 'gender':gender})
    } else {
        res.json({'sound':'잉?', 'gender':gender})
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})