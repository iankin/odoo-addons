openerp.visualcaptcha = function (instance) {
    instance.web.FormView.include({
        is_captcha_enabled: function(action) {
            var attrs = this.fields_view.arch.attrs;
            return (action in attrs) ? JSON.parse(attrs[action]) : false;
        },

        load_form: function(data){
            this._super(data);
            if (this.is_captcha_enabled('visualcaptcha')) {
                var captcha = new instance.visualcaptcha.visualcaptcha(this);
                captcha.appendTo(this.$el.find('.oe_form_container'));
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
