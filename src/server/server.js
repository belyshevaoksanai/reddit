import express from 'express';
import ReactDOM from 'react-dom/server';
import { App } from '../App';
import { indexTemplate } from './indexTemplate';
import axios from 'axios';
import compression from 'compression';
import helmet from 'helmet';

const app = express();
const IS_DEV = process.env.NODE_ENV !== 'production';

app.use('/static', express.static('./dist/client'));

if (IS_DEV) {
    app.use(compression());
    app.use(helmet({
        contentSecurityPolicy: false,
    }));
}

app.get('/auth', (req, res) => {
    axios.post(
        'https://www.reddit.com/api/v1/access_token',
        `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
        {
            auth: {
                username: process.env.CLIENT_ID,
                password: 'oCpE4Wce4x4tdj52zfcFrSfkNBEnJg',
            },
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            }
        }
    ).then(({data}) => {
        res.send(
            indexTemplate(ReactDOM.renderToString(App()), data['access_token'])
        );
    })
    .catch(console.log);
});

app.get('*', (req, res) => {
    res.send(
        indexTemplate(ReactDOM.renderToString(App()))
    );
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000')
})
