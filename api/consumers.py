from channels.generic.websocket import AsyncWebsocketConsumer
import json

class Consumer(AsyncWebsocketConsumer):
	async def connect(self):
		self.user = self.scopre['url_route']['kwargs']['username']
		await self.channel_layer.group_add(self.user, self.channel_name)
		await self.accept()

	async def disconnect(self):
		await self.channel_layer.group_discard(self.user, self.channel_name)

	async def receive(self, event):
		event = json.loads(event)
		event_type = event['type']
		data = event['data']
		username = event['username']

		await self.channel_layer.group_send(username, {"type": event_type, "data": data})

	
	async def chat_message(self, event):
		await self.send({"type": 'websocket.send', 'message': event['data']['message']})

	
	async def swipe_right(self, event):
		await self.send({'type': 'websocket.send', 'swipe': event['data']['swipe']})
