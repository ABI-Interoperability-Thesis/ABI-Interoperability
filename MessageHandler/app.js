const express = require('express')
const amqp = require('amqplib')
const utils = require('./utils')

const app = express()

const PORT = process.env.PORT || 3000
const rabbit_url = 'amqp://admin:password@rabbitmq'


app.use(express.json())

app.get('/', (req, res) => {
  console.log('Route used')
  return res.send('Landing Page')
})

app.post('/data', async (req, res) => {
  console.log('Post route used')
  //console.log(JSON.stringify(req.body))

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


const checkRabbitMQServer = async () => {
  let connection
  while (true) {
    try {
      connection = await amqp.connect(rabbit_url);
      console.log('RabbitMQ server is running and connected.');
      break;
    } catch (err) {
      console.log('RabbitMQ server is not yet running. Retrying in 5 seconds...');
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }
  }

  return connection
};

const listenToRabbitMQ = async () => {
  const connection = await checkRabbitMQServer()
  const channel = await connection.createChannel();

  const exchange = 'ml_exchange';
  const queue = 'ml_responses';

  await channel.assertExchange(exchange, 'direct', { durable: true });
  await channel.assertQueue(queue, { durable: true });
  await channel.bindQueue(queue, exchange, queue);

  console.log(`Listening to the "${queue}" queue...`);

  channel.consume(queue, async (message) => {
    const response = JSON.parse(message.content.toString());
    utils.UpdateRequest(response.req_id, response.answer)
  }, { noAck: true });
}

listenToRabbitMQ().catch(console.error);

app.listen(PORT, () => {
  console.log('-- Message Queue Handler Webservice --')
  console.log('App listening in port 3000')
})