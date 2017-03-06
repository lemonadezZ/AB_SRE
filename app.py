import tornado.ioloop
import tornado.web

class IndexHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("template.html", title="Hello SRE")

if __name__ == "__main__":
    application = tornado.web.Application([
        (r"/", IndexHandler),
	(r"/static/(.*)", tornado.web.StaticFileHandler, {"path": "/root/AB_SRE/static"})
    ],autoreload=True,template_path="./templates",default_handler_class=IndexHandler)
    application.listen(8888)
    tornado.ioloop.IOLoop.current().start()
