#/usr/bin/env python
# -*- coding: utf-8 -*- 
import tornado.ioloop
import tornado.web
from  application.index import *

class MainHandler(tornado.web.RequestHandler):
	def get(self):
		self.write("hello")

def make_app():
	return  tornado.web.Application([
		(r"/",index),
		(r"/test",MainHandler),
	])

if __name__== "__main__":
	app=make_app()
	app.listen(8888)
	tornado.ioloop.IOLoop.current().start()
