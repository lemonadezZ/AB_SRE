import  tornado.web
import time

class index(tornado.web.RequestHandler):
	def get(self):
		time.sleep(10)
		self.write("Hello, Sheepdog")
