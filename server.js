const app=require('./app');
const Connection =require('./config/db.js');

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
  }); 

Connection();//Connect to database before making server i.e. before app.listen()

const PORT=4000;

const server=app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
    });
  });