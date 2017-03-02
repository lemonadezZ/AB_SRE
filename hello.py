import tornado.ioloop
import tornado.web

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.write("do it")

if __name__ == "__main__":
    application = tornado.web.Application([
        (r"/", MainHandler),
    ],autoreload=True)
    application.listen(8888)
    tornado.ioloop.IOLoop.current().start()
