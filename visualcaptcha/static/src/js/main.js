openerp.visualcaptcha = function (instance) {
    instance.web.FormView.include({
        load_form: function(data){
            this._super(data);
            if (this.$el.find('visualcaptcha')) {
                var captcha = new instance.visualcaptcha.visualcaptcha(this);
                // Replace any <visualcaptcha /> element
                captcha.replace(this.$el.find('visualcaptcha'));
                var captchaEl = this.$el.find('#oe_visualcaptcha');
                captchaEl.visualCaptcha({
                    imgPath: '/visualcaptcha/static/src/img/',
                    captcha: {
                        randomParam: 'rdm',
                        routes: {
                            start: '/visualcaptcha/start',
                            image: '/visualcaptcha/image',
                            audio: '/visualcaptcha/audio',
                        }
                    }
                });
            }
        }
    });

    instance.visualcaptcha.visualcaptcha = instance.web.Widget.extend({
        template: 'VisualCaptcha',
        init: function (parent) {
            this._super(parent);
        },
    });

    instance.web.client_actions.add('visualcaptcha.visualcaptcha',
        'instance.visualcaptcha.visualcaptcha');
}
