import express from "express";
import cors from "cors"
import mysql2 from "mysql2/promise.js"
import dotenv from 'dotenv';


const app = express();

// app.use(express.json());



// dotenv.config();
// const DB_HOST = process.env.DB_HOST;
// const DB_USERNAME = process.env.DB_USERNAME;
// const DB_PASSWORD = process.env.DB_PASSWORD;
// const DB_DBNAME = process.env.DB_DBNAME;
// const DB_PORT = process.env.DB_PORT;



const con = mysql2.createConnection({
    host:DB_HOST, port:DB_PORT, user:DB_USERNAME , password:DB_PASSWORD ,database:DB_DBNAME
})

const PORT = 3000

app.listen(PORT, () => console.log(`Server ready on port ${PORT}.`));
 
// app.use(cors({
//     origin: 'https://vercel-deployment-frontend-psi.vercel.app',
//     credentials: true,
//     methods: ['GET', 'POST', 'OPTIONS'],
//     allowedHeaders: ['Content-Type', 'Authorization']
// }));

app.get("/", (req, res) => res.send("Express on Vercel"));


app.post('/hi',(req,res)=>{
    res.send('Yup Login');
});

// app.post('/login',async (req,res)=>{
//     const {email,password} = req.body;
//     try {
//         const [row] =await (await con).query('select * from user where email=? and password =?',[email,password]);
//         if(row.length>0){
//             res.status(200).send({"id":row[0].id, "fname":row[0].fname, "lname":row[0].lname, "email":row[0].email,});
//         }
//     } catch (error) {
//         if(error){
//             res.status(404).send('Unsuccessful Login attempt.');
//         }
//     }
// })


// app.post('/registerUser', async (req,res)=>{
//     const {fname,lname,email,mobile,password} = req.body;
//     try {
//         const [row] = await (await con).query('Insert into user(fname,lname,email,mobile,password) values(?,?,?,?,?)',[fname,lname,email,mobile,password]);
//         if(row.affectedRows>0){
//             res.status(200).send('Register Successful.');
//         }
//     } catch (error) {
//         if(error){
//             res.status(500).send('Register Unsuccessful.');
//         }
//     }
// })


// app.post('/sell-property',async (req,res)=>{
//     const {place,address,bedrooms,bathrooms,amenities,price,user_id} = req.body;
//     // console.log(req.body);
//     try {
//         const [row] = await (await con).query('Insert into properties (place,address,bedrooms,bathrooms,amenities,price,user_id) values (?,?,?,?,?,?,?)',[place,address,bedrooms,bathrooms,amenities,price,user_id]);
//         if(row.affectedRows>0){
//             res.status(200).send('Property registered Successful.');
//         }
//     } catch (error) {
//         console.log(error);
//         if(error){
//             res.status(500).send('Property register Unsuccessful.');
//         }
//     }
// })

// app.post('/all-properties',async (req,res)=>{
//     const {id} = req.body;
//     try {
//         const [row] = await (await con).query('select * from properties where user_id != ?',[id]);
//         if(row.length>0){
//             res.status(200).send(row);
//         }
//     } catch (error) {
//         if(error){
//             res.status(500).send('Internal Server Error.')
//         }
//     }

// })

// app.post('/get-property',async (req,res)=>{
//     const {id} = req.body;
//     try {
//         const [row] = await (await con).query('select place,address,bedrooms,bathrooms,amenities,price,fname,lname,email,mobile,user_id,id from properties,user where user_id=id and property_id=?',[id]);
//         if(row.length>0){
//             res.status(200).send(row[0]);
//         }
//     } catch (error) {
//         if(error){
//             res.status(500).send('Internal Server Error.')
//         }
//     }
    
// })

// app.post('/my-property',async (req,res)=>{
//     const {id} = req.body;
//     try {
//         const [row] = await (await con).query('select * from properties where user_id=?',[id]);
//         if(row.length>0){
//             res.status(200).send(row);
//         }
//     } catch (error) {
//         if(error){
//             res.status(500).send('Internal Server Error.')
//         }
//     }
    
// })

// app.post('/remove-property',async (req,res)=>{
//     const {id} = req.body;
//     try {
//         const [row] = await (await con).query('DELETE FROM properties WHERE property_id=?',[id]);
//         if(row.affectedRows>0){
//             res.status(200).send('Removed Succesfully');
//         }
//     } catch (error) {
//         if(error){
//             console.log(error)
//             res.status(500).send('Internal Server Error.')
//         }
//     }
    
// })


// app.post('/update-property',async (req,res)=>{
//     const {place,address,bedrooms,bathrooms,amenities,price,id} = req.body;
//     console.log(req.body);
//     try {
//         const [row] = await (await con).query('update properties set place=?,address=?,bedrooms=?,bathrooms=?,amenities=?,price=? where property_id=?',[place,address,bedrooms,bathrooms,amenities,price,id]);
//         if(row.affectedRows>0){
//             res.status(200).send('Property Updated Successful.');
//         }
//     } catch (error) {
//         console.log(error);
//         if(error){
//             console.log(error)
//             res.status(500).send('Property Update Unsuccessful.');
//         }
//     }
// })

// app.post('/search', async (req,res)=>{
//     const {search} = req.body;
//     console.log(isNaN(search));
//     if (!isNaN(search)) {
//         let num = parseInt(search);
//         try {
//             const [row] = await (await con).query('select * from properties where price>=? order by price',[num]);
//             if(row.length>0){
//                 res.status(200).send(row);
//             }
//         } catch (error) {
//             if(error){
//                 res.status(500).send('Internal Server Error.')
//             }
//         }

//     } 
//     else if (isNaN(search)) {
//         try {
//             const [row] = await (await con).query('select * from properties where place=?',[search]);
//             if(row.length>0){
//                 res.status(200).send(row);
//             }
//         } catch (error) {
//             if(error){
//                 res.status(500).send('Internal Server Error.')
//             }
//         }
//     } 
//     else {
//       res.status(500).send('Invalid Search')
//     }
// })
