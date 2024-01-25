import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { BsCopy } from "react-icons/bs";


const Express = () => {
const code = `
using fetch 

fetch("http://localhost:5001/users", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify(formData),
})
.then((res) => res.json())
.then((data) => {
console.log(data);
});
};


using async await 

try {
      const response = await fetch("http://localhost:5001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }



using axios
const axios = require('axios');

try {
  const response = await axios.post("http://localhost:5001/users", formData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(response.data);
} catch (error) {
  console.log(error);
}
    `
const code1 = `
app.post("/users", async (req, res) => {
const user = req.body;
//   console.log(user);
const result = await usersCollection.insertOne(user);
console.log(result);
res.send(result);
});
    `
const code2 = `
{
    path: "/users",
    element: <DisplayUSer />,
    loader: () => fetch("http://localhost:5001/users"),
  },
    `
const code3 = `
app.get("/users", async (req, res) => {
    const result = await usersCollection.find().toArray();
    res.send(result);
  });
    `
const code4 = `

using async await to delete single data 
try {
      const response = await fetch(http://localhost:5001/users/$ {_id}, {
        method: "DELETE",
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }

using fetch to delete single data 
fetch(http://localhost:5001/users/$ {_id}, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    `
const code5 = `
app.delete("/users/:id", async (req, res) => {
    const id = req.params.id;
    console.log("delete", id);
    const query = {
      _id: new ObjectId(id),
    };
    const result = await usersCollection.deleteOne(query);
    console.log(result);
    res.send(result);
  });
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
    const handleCopy3 = () => {
        setCopied3(true);
        // You can add any additional logic here after copying
    };
    const handleCopy4 = () => {
        setCopied4(true);
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
        <div>
            <h1 className="text-2xl font-bold my-10">Curd operatons = Post, Read, Delete & Update </h1>
            <h1 className="text-2xl text-center">----- Post ----- </h1>
            <h1 className="text-xl">Fontend:</h1>
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
            
            <h1 className="text-xl">Backend:</h1>
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
            <h1 className="text-2xl text-center my-5">----- Read ----- </h1>
            <h1 className="text-xl">Fontend:</h1>
            <div className='mt-10 text-end -mb-14 mr-3'>
                <CopyToClipboard text={code2} onCopy={handleCopy2}>
                    <button>
                        {isCopied2 ? 'Copied!' : <BsCopy />}
                    </button>
                </CopyToClipboard>
            </div>
            <SyntaxHighlighter language="jsx" style={codeStyle}>
                {code1}
            </SyntaxHighlighter>
            <h1 className="text-xl">Backend:</h1>
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

            <h1 className="text-2xl text-center my-5">----- Delete ----- </h1>
            <h1 className="text-xl">Fontend:</h1>
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
            <h1 className="text-xl">Backend:</h1>
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
            <h1 className="text-2xl text-center">----- Update ----- </h1>
            <h1 className="text-xl">Fontend:</h1>
            <h1 className="text-xl">Backend:</h1>
        </div>
    );
};

export default Express;