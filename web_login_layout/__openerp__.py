###
#
#   This file is part of odoo-addons.
#
#   odoo-addons is free software: you can redistribute it and/or modify
#   it under the terms of the GNU General Public License as published by
#   the Free Software Foundation, either version 3 of the License, or
#   (at your option) any later version.
#
#   odoo-addons is distributed in the hope that it will be useful,
#   but WITHOUT ANY WARRANTY; without even the implied warranty of
#   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#   GNU General Public License for more details.
#
#   You should have received a copy of the GNU General Public License
#   along with this program.  If not, see <http://www.gnu.org/licenses/>.
#
##

{
    'name': 'Login layout redesign',
    'version': '0.1',
    'description': """
Login layout redesign
================================================================================

Simple Google-ish redesign of OpenERP login page.

    """,
    'author': 'Aristobulo Meneses',
    'website': 'https://menecio.github.io',
    'category': 'web',
    'depends': ['web'],
    'data': ['views/login.xml'],
    'js': [
    ],
    'css': [
        'static/src/css/login.css',
    ],
}
