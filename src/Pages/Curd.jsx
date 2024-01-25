import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { BsCopy } from "react-icons/bs";

const Crud = () => {
    const code = `
npm init
`
    const code1 = `
npm i express cors mongodb dotenv
`
    const code2 = `
code .
`
    const code4 = `
nodemon index.js
`
const code5 = `
//  MONGODB DATABASE USER PASSWORD
// <username>
// <user-password>
const uri =
"mongodb+srv://<username>:<user-password>@cluster0.cnfykcr.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
serverApi: {
version: ServerApiVersion.v1,
strict: true,
deprecationErrors: true,
},
});

async function run() {
try {
// Connect the client to the server	(optional starting in v4.7)
// await client.connect();



// ----------------------------
// curd operation code here
// ----------------------------



// Send a ping to confirm a successful connection
await client.db("admin").command({ ping: 1 });
console.log(
"Pinged your deployment. You successfully connected to MongoDB!"
);
} finally {
// Ensures that the client will close when you finish/error
// await client.close();
}
}
run().catch(console.dir);
`
const code3 = `
const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());




---------- -----------
mongoDB code here
----------------------




app.get('/', (req, res) => {
res.send('Hello World!')
})

app.listen(port, () => {
console.log('Example app listening on port {port}')
})
`

    const [isCopied, setCopied] = useState(false);
    const [isCopied1, setCopied1] = useState(false);
    const [isCopied2, setCopied2] = useState(false);
    const [isCopied3, setCopied3] = useState(false);
    const [isCopied4, setCopied4] = useState(false);
    const [isCopied5, setCopied5] = useState(false);

    const handleCopy = () => {
        setCopied(true);
        // You can add any additional logic here after copying
    };
    const handleCopy1 = () => {
        setCopied1(true);
        // You can add any additional logic here after copying
    };
    const handleCopy2 = () => {
        setCopied2(true);
        // You can add any additional logic here after copying
    };
    const handleCopy4 = () => {
        setCopied4(true);
        // You can add any additional logic here after copying
    };
    const handleCopy3 = () => {
        setCopied3(true);
        // You can add any additional logic here after copying
    };
    const handleCopy5 = () => {
        setCopied5(true);
        // You can add any additional logic here after copying
    };

    const codeStyle = {
        ...dark,
        background: 'red', // black background
        color: 'black', // blue text color
    };

    return (
        <div className='p-20'>
            <div>
                <h1 className='text-justify text-2xl'>Creating an Express Application connection mongoDB atlas</h1>
                <h2>Installing process--- Highly recommend  <a target='blank' className='underline text-blue-400' href="https://expressjs.com/en/starter/installing.html"> ExpressJs.com</a> otherwise next... </h2>
                <h3>Step:1   $ mkdir myapp <br />
                   Step:2 $ cd myapp</h3>
                   <h1>Step:3</h1>
            </div>
            <div className='mt-10 text-end -mb-14 mr-3'>
                <CopyToClipboard text={code} onCopy={handleCopy}>
                    <button>
                        {isCopied ? 'Copied!' : <BsCopy />}
                    </button>
                </CopyToClipboard>
            </div>
            <SyntaxHighlighter language="jsx" style={codeStyle}>
                {code}
            </SyntaxHighlighter>
            <h1>Step:4 Now install Express in the myapp directory and save it in the dependencies list and others</h1>

            {/* Additional code block */}
            <div className='mt-10 text-end -mb-14 mr-3'>
                <CopyToClipboard text={code1} onCopy={handleCopy1}>
                    <button>
                        {isCopied1 ? 'Copied!' : <BsCopy />}
                    </button>
                </CopyToClipboard>
            </div>
            <SyntaxHighlighter language="jsx" style={codeStyle}>
                {code1}
            </SyntaxHighlighter>
            <h1>Step:5 Open the server file on the vs code </h1>
            <div className='mt-10 text-end -mb-14 mr-3'>
                <CopyToClipboard text={code2} onCopy={handleCopy2}>
                    <button>
                        {isCopied2 ? 'Copied!' : <BsCopy />}
                    </button>
                </CopyToClipboard>
            </div>
            <SyntaxHighlighter language="jsx" style={codeStyle}>
                {code2}
            </SyntaxHighlighter>
            <h1>Step:6 Create and Entry point: (index.js)</h1>
            <h1>Step:7 Json file ---> "start": node index.js</h1>
            <h1>Step:8 this code inject index.js</h1>
            <div className='mt-10 text-end -mb-14 mr-3'>
                <CopyToClipboard text={code3} onCopy={handleCopy3}>
                    <button>
                        {isCopied3 ? 'Copied!' : <BsCopy />}
                    </button>
                </CopyToClipboard>
            </div>
            <SyntaxHighlighter language="jsx" style={codeStyle}>
                {code3}
            </SyntaxHighlighter>
            <h1>Step:9  server run </h1>
            <div className='mt-10 text-end -mb-14 mr-3'>
                <CopyToClipboard text={code4} onCopy={handleCopy4}>
                    <button>
                        {isCopied4 ? 'Copied!' : <BsCopy />}
                    </button>
                </CopyToClipboard>
            </div>
            <SyntaxHighlighter language="jsx" style={codeStyle}>
                {code4}
            </SyntaxHighlighter>
            <h1>Step:10 go to mongoDB website <a href="https://www.mongodb.com/" className='underline text-blue-400' target="_blank" rel="noopener noreferrer">mongodb.com</a> and create user , user and password .env file secure visit website <a href="https://vitejs.dev/guide/env-and-mode.html#env-variables" target="_blank" rel="noopener noreferrer" className='underline text-blue-500'>vite Env</a></h1>

            <div className='mt-10 text-end -mb-14 mr-3'>
                <CopyToClipboard text={code5} onCopy={handleCopy5}>
                    <button>
                        {isCopied5 ? 'Copied!' : <BsCopy />}
                    </button>
                </CopyToClipboard>
            </div>
            <SyntaxHighlighter language="jsx" style={codeStyle}>
                {code5}
            </SyntaxHighlighter>
            <h1>Finally express server running and connected mongoDB and successfully Pinged</h1>
        </div>
    );
};

export default Crud;
