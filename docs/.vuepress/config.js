module.exports = {
    title: "VuePress Template",

    description: "A VuePress documentation template for RAKwireless",

    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],

    themeConfig: {
        search: true,
        searchMaxSuggestions: 10,
        lastUpdated: 'Last Updated',
        repo: 'maangeloatienza/vuepress-rak',
        docsRepo: 'maangeloatienza/vuepress-rak',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: 'Edit this on our Github Page',
        nav: [
            { text: 'QuickStart', link: '/rak7246g-lorawan-developer-gateway/' },
            { text: 'DataSheet', link: '/data-sheet/rak831/' },
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
                // 'quickstart'
                {
                    title : 'Quickstart',
                    collapsable : true,
                    children : [
                        'quickstart'
                    ]
                }
            ],
            '/data-sheet/' :  [
                {
                    title : 'LoRa Gateway',
                    children : [
                        
                        {
                            title : 'RAK831',
                            children : [
                                'rak831/',
                                'rak831/board-overview/',
                                'rak831/pin-definition/',
                                'rak831/electrical-characteristics/',
                                'rak831/rf-characteristics/',
                            ],
                            
                        },
                        {
                            title : 'RAK833',
                            children : [
                                'rak833/',
                                'rak833/board-overview/'
                            ],
                            
                        },
                        
                    ]
                },
                {
                    title : 'Cellular',
                    
                    children : [
                        {
                            title : 'RAK831',
                            children : [
                                'rak831/',
                                'rak831/board-overview/'
                            ],
                            
                        },
                        {
                            title : 'RAK833',
                            children : [
                                'rak833/',
                                'rak833/board-overview/'
                            ],
                            
                        },
                        
                    ]
                },
                {
                    title : 'NB-IOT',
                    
                    children : [
                        {
                            title : 'RAK831',
                            children : [
                                'rak831/',
                                'rak831/board-overview/'
                            ],
                            
                        },
                        {
                            title : 'RAK833',
                            children : [
                                'rak833/',
                                'rak833/board-overview/'
                            ],
                            
                        },
                        
                    ]
                }
            ]
        }
    }
}