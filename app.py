import tornado.ioloop
import tornado.web

class IndexHandler(tornado.web.RequestHandler):
    def get(self):
        items = ["Item 1", "Item 2", "Item 3"]
        self.render("template.html", title="My title", items=items)

if __name__ == "__main__":
    application = tornado.web.Application([
        (r"/", IndexHandler),
    ],autoreload=True,template_path="./templates")
    application.listen(8888)
    tornado.ioloop.IOLoop.current().start()
