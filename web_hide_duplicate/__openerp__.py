{
    'name': 'Hide duplicate',
    'author': 'Aristobulo Meneses',
    'description': '''
Allows to hide duplicate button under <More> section
================================================================================

HOW-TO:

Go to desired form view definition and duplicate="false" attribute.

Example:

<form string="Users" version="7.0" duplicate="false">
    ''',
    'category': 'web',
    'depends': ['web', ],
    'js': ['static/src/js/duplicate.js', ],
}
