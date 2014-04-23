import logging
import openerp.addons.web.http as http

import requests
from PIL import Image
from StringIO import StringIO


_logger = logging.getLogger(__name__)


class Visualcaptcha(http.Controller):
    _cp_path = '/visualcaptcha'

    @http.httprequest
    def start(self, req, rdm):
        r = requests.get('http://localhost:8282/start/6')
        if r.status_code == 200:
            return r.text
        else:
            # TODO: properly raise exception
            raise('Something went wrong!')

    @http.httprequest
    def image(self, req, rdm):
        index = req.httprequest.path.rsplit('/', 1)[1]
        r = requests.get('http://localhost:8282/image/%s?rdm=%s' % (index,
          rdm))
        if r.status_code == 200:
            return r.content
        else:
            # TODO: properly raise exception
            raise('Something went wrong!')
