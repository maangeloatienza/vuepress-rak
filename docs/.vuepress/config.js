module.exports = {
    title: "VuePress Template",

    description: "A VuePress documentation template for RAKwireless",

    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],

    themeConfig: {
        search: true,
        searchMaxSuggestions: 10,
        nav: [
            { text: 'QuickStart', link: '/rak7246g-lorawan-developer-gateway/' },
            { text: 'DataSheet', link: '/data-sheet/' },
            { text: 'RUI', link: '/rui/' },
            { text: 'Downloads', link: '/downloads/' }
        ],
        sidebar: {
            '/rak7246g-lorawan-developer-gateway/': [
                '',
                'quickstart'
            ],
            '/rak7249-macro-outdoor-gateway/' : [
                '',
                'quickstart'
            ]
        }
    },



}