from channels.generic.websocket import AsyncWebsocketConsumer
import json
import asyncio


class Consumer(AsyncWebsocketConsumer):
	async def connect(self):
		user = self.scope['user']
		self.user = user
		self.username = user.username
		await self.channel_layer.group_add(self.username, self.channel_name)
		await self.accept()

	async def disconnect(self, code):
		await self.channel_layer.group_discard(self.username, self.channel_name)

	async def receive(self, text_data):
		event = json.loads(text_data)
		event_type = event['type']
		data = event['data']
		username = event['username']
		print(event)

		await self.channel_layer.group_send(username, {"type": event_type, "data": data})

	
	async def chat_message(self, event):
		await self.send(text_data=json.dumps({"type": 'websocket.send', 'message': event['data']['message']}))

	
	async def swipe_right(self, event):
		await self.send(text_dump=json.dumps({'type': 'websocket.send', 'swipe': event['data']['swipe']}))
