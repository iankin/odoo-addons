$('div.oe_visualcaptcha').visualCaptcha({
    imgPath: '/visualcaptcha/static/src/img/',
    captcha: {
        randomParam: 'rdm',
        routes: {
            start: '/visualcaptcha/start',
            image: '/visualcaptcha/image'
        }
    }
});
