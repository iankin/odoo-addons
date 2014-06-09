{
    'name': 'Fields masks',
    'version': '0.2',
    'description': """
Fields masks
================================================================================

Based on jquery.inputmask 3.x (https://github.com/RobinHerbots/jquery.inputmask)

An inputmask helps the user with the input by ensuring a predefined format.
This can be useful for dates, numerics, phone numbers, ...

Instructions:

- Just add data-inputmask="mask" to <field />

     Some examples:

     <field name="email" data-inputmask="'alias': 'email'" />
     <field name="ip_address" data-inputmask="'alias': 'ip'" />
     <field name="masked_field" data-inputmask="'mask': '99-9999999'" />

Masking definition:

    - 9: numeric value
    - a: alphabetical value
    - *: alphanumeric value

Aliases available:

    - email
    - ip: IPv4 addresses
    - url

    """,
    'author': 'Aristobulo Meneses',
    'website': 'https://menecio.github.io',
    'category': 'web',
    'depends': ['web'],
    'data': ['views/assets.xml', ]
}
