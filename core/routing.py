from email.mime import application
from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
import api.routing as routing

application = ProtocolTypeRouter({
	'websocket': AuthMiddlewareStack(
		URLRouter(
			routing.websocket_urlpatterns
		)
	)
})