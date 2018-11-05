import time
import requests
from kafka import KafkaProducer
import json

if __name__ == '__main__':
  topic = 'rating'
  producer = KafkaProducer(bootstrap_servers='localhost:9092')
  producer.send(topic, b'{"userId":90909909, "chefId": 22, "rating": 3}')
  time.sleep(1)
  r = requests.get('http://0.0.0.0:5000')
