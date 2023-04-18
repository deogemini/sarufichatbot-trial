// import express here 
// var sarufi = require('sarufi')
import sarufiImport from 'sarufi';
import express from 'express';

// const express = require('express');
// instatiate express to a variable 
const app = express(); 
const sarufi = sarufiImport.default;

//specify the port number that the server is going to be used
app.listen(3000, () => console.log("Server listening at port 3000"));
 
//first route 
app.get("/", (req, res) => {
    res.send("Hello World");
})

//login
app.post("/login", async function(req, res){

let sarufiResponse = await sarufi.login({username:"DeoGemini", password:"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjFMcWJVZlNkbVdNVzZjUFotd3VkRyJ9.eyJodHRwczovL2dpdGh1Yi5jb20vZG9yaW5jbGlzdS9mYXN0YXBpLWF1dGgwL2VtYWlsIjoiZ2VtaW5pZGVvZ3JhdGlhczhAZ21haWwuY29tIiwiaXNzIjoiaHR0cHM6Ly9zYXJ1ZmkuZXUuYXV0aDAuY29tLyIsInN1YiI6ImdpdGh1Ynw1MTE4MDA5NiIsImF1ZCI6WyJodHRwczovL2FwaS5zYXJ1ZmkuaW8vIiwiaHR0cHM6Ly9zYXJ1ZmkuZXUuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY4MTgyMjI3OCwiZXhwIjoxNjgxOTA4Njc4LCJhenAiOiJhNGVmSzlBNHZTaXRSWHFOYUo3Z2VpMUZ0OW5XeVZHVCIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwifQ.vo_11KblHIzE_CLEqnpFArNbjZXXN9cCLMa-boVAGJADCzcrb1AjQUDHzjbttpZh4l3ZJQomsBw_nac154VUI7y3fZ3TDWkQ1JIPBDIuFMoL4ZhGfs-N_q-BXITIg7M_zPuuk4Ap-zPZ90YrXqCQ-_VlpqKPYNI5_oAN10YEaiECoZgJ6QhSXtDuxe7bWkkVbxWJ8LFKn1UJVWRbLkaMWiYMAoXUtUBig6mkL4TXZUBxYafIxnRmRAF7VvP5adG_11y-VleOAi3sRXnbX64qU8GjwdasMHa28wKry66pgbEJiNVbfEDUmrlbjezVxTWE2MILYsibhwzkpTlIYKy4WQ"})
console.log(sarufiResponse)   
//  res.status(200).send({message:'hghg'});

});

