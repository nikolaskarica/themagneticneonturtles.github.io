import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.js';

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "bar inline",
            position: "bottom",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        functionality: {},
        analytics: {}
    },
    language: {
        default: "en",
        autoDetect: "browser",
        translations: {
            en: {
                consentModal: {
                    title: "Hey my dude, it's cookie time!",
                    description: "Our awesome website uses cookies only to track from which country are you looking for us, and from which channel you came about! Nothing more, nothing less. We like to keep it short and simple, so you can enjoy music!",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    showPreferencesBtn: "Manage preferences",
                    footer: "<a href=\"privacy-policy.html\">Privacy Policy</a>"
                },
                preferencesModal: {
                    title: "Consent Preferences Center",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    savePreferencesBtn: "Save preferences",
                    closeIconLabel: "Close modal",
                    serviceCounterLabel: "Service|Services",
                    sections: [
                        {
                            title: "Cookie Usage",
                            description: "Our awesome website uses cookies only to track from which country are you looking for us, and from which channel you came about! Nothing more, nothing less. We like to keep it short and simple, so you can enjoy music!"
                        },
                        {
                            title: "Strictly Necessary Cookies <span class=\"pm__badge\">Always Enabled</span>",
                            description: "Some info is unaviodable to collection, such as your IP, and device type to understand where and how did you find us in first place!",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Functionality Cookies",
                            description: "We have few features to play our tunes that use sensors on your devices that we would like to understand how are they being used and it they need a bit of oiling up to make it more enjoyable for you.",
                            linkedCategory: "functionality"
                        },
                        {
                            title: "Analytics Cookies",
                            description: "We're just interested from which country are you sreaching for us, and from which did you manage to reach our web!",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "More information",
                            description: "For any query in relation to my policy on cookies and your choices, please <a class=\"cc__link\" href=\"mailto:media.badguys@gmail.com\">contact me</a>."
                        }
                    ]
                }
            }
        }
    },
    disablePageInteraction: true
});