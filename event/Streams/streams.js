/*Streams are objects that let you read data from a source or write data to a destination in continous fashion .In Node.js , there are four  types of streams - 

Streaming means listening to music or watching video in 'real time', instead of downloading a file to your computer and watching it later

Readable - Stream which is used for read operation
Writable - Stream which is used for write operation
Duplex - Stream which can be used for both read and write operation
Transform - A type of duplex stream where the output is computed based on input
*/
/*
Each type of stream is an EventEmitter instance and throuws several events at different instance of times .For example ,some of the commonly used events are 
1.data - This event is fired when there is data is available to read.
2.end - This event is fired when there is no more data to read.
3.error - This event is fired when there is any error receiving or writing data.
4.finish - This event is fired when all the data has been flushed to underlying system.
*/
const fs = require("fs");
const http = require("http");

const server = http.createServer();
server.on('request',(req,res)=> {
  var fs = require('fs');
  fs.readFile('input.txt',(err,data) =>
  {
      if(err) return console.error(err);
      res.end(data.toString());

      

      
  });
  const rstream = fs.createReadStream("input.txt");
      rstream.on('data',(chunkdata) => {

         res.write(chunkdata);
      })
      rstream.on('end',() =>
      {
        res.end();
      })
      rstream.on('error',(e) =>{
        console.log(err);
        res.end("file not found")
      })
});
server.listen(8000,"127.0.0.1");