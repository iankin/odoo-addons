openerp.visualcaptcha = function (instance) {
    instance.web.FormView.include({
        captcha_data: {},

        load_form: function(data){
            this._super(data);
            if (this.$el.find('visualcaptcha')) {
                // TODO: if more than one <visualcaptcha /> element is found
                // then use namespaces for each captcha
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
                this.captcha_data = captchaEl.data('captcha');
                console.log(this.captcha_data);
            }
        },
    });

    instance.web.form.WidgetButton.include({
        on_click: function () {
            //~ console.log(this.view.captcha_data.getCatpchaData());
            if (this.$el.hasClass('validate_visualcaptcha')) {
                //~ console.log(this);
                $.ajax("http://localhost:8282/try", {
                    type: 'POST',
                    data: JSON.stringify(this.view.captcha_data),
                    success: function (data, status, xhr) {
                        console.log(data);
                    },
                });
            }
            this._super();
        },
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
