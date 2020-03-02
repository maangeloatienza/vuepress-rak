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
                    title : 'LoRa Cellular',
                    
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
        // sidebar : [
        //     {
        //         title : 'RAK7246G LoRaWAN™ Developer Gateway',        
        //         children : [
        //             'rak7246g-lorawan-developer-gateway/',
        //             'rak7246g-lorawan-developer-gateway/quickstart',
        //         ]
        //     },
        //     {
        //         title : 'RAK7249 Macro Outdoor Gateway',        
        //         children : [
        //             'rak7249-macro-outdoor-gateway/',
        //             'rak7249-macro-outdoor-gateway/quickstart',
        //         ]
        //     }
        // ]
        // sidebar: {
        //     '/rak7246g-lorawan-developer-gateway/': [
        //         '',
        //         'quickstart'
        //     ],
        //     '/rak7249-macro-outdoor-gateway/' : [
        //         '',
        //         // 'quickstart'
        //         {
        //             title : 'Quickstart',
        //             collapsable : true,
        //             children : [
        //                 'quickstart'
        //             ]
        //         }
        //     ],
        //     '/data-sheet/' : [
        //         '',
        //         {
        //             title : 'RAK831 LoRaWAN™ Gateway Concentrator',
        //             collapsable : true,
        //             children : [
        //                 '',
                        
        //                 // 'board-overview/'
        //             ]
        //         },
        //         {
        //             title : 'RAK833 LoRaWAN™ Gateway Concentrator Module',
        //             collapsable : false,
        //             children : [
        //                 'rak831/',
        //                 {
        //                     title : 'rak831',
        //                     collapsable : false,
        //                     children : [
        //                         'rak831g'
        //                     ]
        //                 }
        //             ]
        //         }
        //     ]
            
        // }
    },



}