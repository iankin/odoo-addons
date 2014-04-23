{
    'name': 'VisualCaptcha for OpenERP',
    'description': 'VisualCaptcha for OpenERP',
    'category': 'web',
    'depends': ['web',],
    'author': 'Aristobulo Meneses',
    'website': 'http://menecio.github.io',
    'js': [
        'static/src/bower_components/visualcaptcha.jquery/visualcaptcha.jquery.js',
        'static/src/js/main.js',
    ],
    'css': ['static/src/bower_components/visualcaptcha.jquery/visualcaptcha.css',],
    'qweb': ['static/src/xml/visualcaptcha.xml',],
}
