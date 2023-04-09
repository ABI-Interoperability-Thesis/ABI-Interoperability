const express = require('express')
const amqp = require('amqplib')

const app = express()

const rabbit_url = 'amqp://admin:password@rabbitmq'
app.use(express.json())

app.get('/', (req,res)=>{
    console.log('Route used')
    return res.send('Landing Page')
})

app.post('/data', async (req,res)=>{
    console.log('Post route used')
    console.log(req.body)

    console.log('Connecting to rabbitmq server')
    const connection = await amqp.connect(rabbit_url)
    const channel = await connection.createChannel();
    const queue_req = 'ml_requests'
    const queue_res = 'ml_responses'

    await channel.assertQueue(queue_req, { durable: true });
    await channel.assertQueue(queue_res, { durable: true });

    console.log('Sending message to queue ml_requests')
    channel.sendToQueue(queue_req, Buffer.from(JSON.stringify(req.body)));
    channel.close()

    return res.send('ok')
})


const listenToRabbitMQ = async () => {
    const connection = await amqp.connect(rabbit_url);
    const channel = await connection.createChannel();
  
    const exchange = 'ml_exchange';
    const queue = 'ml_responses';
  
    await channel.assertExchange(exchange, 'direct', { durable: true });
    await channel.assertQueue(queue, { durable: true });
    await channel.bindQueue(queue, exchange, queue);
  
    console.log(`Listening to the "${queue}" queue...`);
  
    channel.consume(queue, (message) => {
      const response = JSON.parse(message.content.toString());
      console.log('Received message:', response);
    }, { noAck: true });
  }
  
  listenToRabbitMQ().catch(console.error);


app.listen(3000, ()=>{
    console.log('-- Message Queue Handler Webservice --')
    console.log('App listening in port 3000')
})