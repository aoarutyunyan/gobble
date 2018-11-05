from reco import ChefRecommendationEngine
from flask import Flask, Response
from kafka import KafkaConsumer
import redis
import json


port = 3322
r = redis.Redis(
    host='localhost',
    port=6379, 
    password='')

x = ChefRecommendationEngine(r)
consumer = KafkaConsumer('rating', group_id='0', bootstrap_servers=['0.0.0.0:9092'])
app = Flask(__name__)

@app.route('/')
def index():
  for key, vals in kafkastream().items():
    for val in vals:
      json_val = json.loads(val.value.decode('utf-8'))
      print(json_val)
      x.receive_new_rating(json_val['userId'], json_val['chefId'], json_val['rating'])
  
  return ''

def kafkastream():
  return consumer.poll(timeout_ms=30)
    

if __name__ == '__main__':
  app.run(host='0.0.0.0', port='5000', debug=True)