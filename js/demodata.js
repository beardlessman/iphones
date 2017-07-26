//demo data - забирать с сервера
var phones = [
    {
        name: "iPhone 5s",
        hash: "iPhone5s",
        img: "images/iphone.jpg",
        color: "#e8d5c1", //default bg color
        chars: {
            screen: "4,7",
            proc: "A10 Fusion",
            camera: "12 Мп",

        },
        colors: [
            {
                val: "#e0e6eb",
                img: "images/iphone3.jpg",
                name: "Серебро",
                isDefault: false
            },
            {
                val: "#e8d5c1",
                img: "images/iphone.jpg",
                name: "Золото",
                isDefault: true
            },
            {
                val: "#eac5c4",
                img: "images/iphone5.jpg",
                name: "Розовое золото",
                isDefault: false
            }
        ],
        mems: [
            {
                val: 16,
                isDefault: true,
                price: 43790
            },
            {
                val: 32,
                isDefault: false,
                price: 45790
            },
            {
                val: 64,
                isDefault: false,
                price: 47790
            }
        ]
    },
    {
        name: "iPhone 6",
        hash: "iPhone6",
        img: "images/iphone2.jpg",
        color: "#e8d5c1", //default bg color
        chars: {
            screen: "4,7",
            proc: "A10 Fusion",
            camera: "12 Мп",

        },
        colors: [
            {
                val: "#e0e6eb",
                img: "images/iphone3.jpg",
                name: "Серебро",
                isDefault: false
            },
            {
                val: "#e8d5c1",
                img: "images/iphone.jpg",
                name: "Золото",
                isDefault: true
            },
            {
                val: "#eac5c4",
                img: "images/iphone5.jpg",
                name: "Розовое золото",
                isDefault: false
            }
        ],
        mems: [
            {
                val: 16,
                isDefault: true,
                price: 43790
            },
            {
                val: 32,
                isDefault: false,
                price: 45790
            },
            {
                val: 64,
                isDefault: false,
                price: 47790
            }
        ]
    },
    {
        name: "iPhone 6s",
        hash: "iPhone6s",
        img: "images/iphone3.jpg",
        color: "#e8d5c1", //default bg color
        chars: {
            screen: "4,7",
            proc: "A10 Fusion",
            camera: "12 Мп",

        },
        colors: [
            {
                val: "#e0e6eb",
                img: "images/iphone3.jpg",
                name: "Серебро",
                isDefault: false
            },
            {
                val: "#e8d5c1",
                img: "images/iphone.jpg",
                name: "Золото",
                isDefault: true
            },
            {
                val: "#eac5c4",
                img: "images/iphone5.jpg",
                name: "Розовое золото",
                isDefault: false
            }
        ],
        mems: [
            {
                val: 16,
                isDefault: true,
                price: 43790
            },
            {
                val: 32,
                isDefault: false,
                price: 45790
            },
            {
                val: 64,
                isDefault: false,
                price: 47790
            }
        ]
    },
    {
        name: "iPhone 6s+",
        hash: "iPhone6s+",
        img: "images/iphone4.jpg",
        color: "#e8d5c1", //default bg color
        chars: {
            screen: "4,7",
            proc: "A10 Fusion",
            camera: "12 Мп",

        },
        colors: [
            {
                val: "#e0e6eb",
                img: "images/iphone3.jpg",
                name: "Серебро",
                isDefault: false
            },
            {
                val: "#e8d5c1",
                img: "images/iphone.jpg",
                name: "Золото",
                isDefault: true
            },
            {
                val: "#eac5c4",
                img: "images/iphone5.jpg",
                name: "Розовое золото",
                isDefault: false
            }
        ],
        mems: [
            {
                val: 16,
                isDefault: true,
                price: 43790
            },
            {
                val: 32,
                isDefault: false,
                price: 45790
            },
            {
                val: 64,
                isDefault: false,
                price: 47790
            }
        ]
    },
    {
        name: "iPhone 6+",
        hash: "iPhone6+",
        img: "images/iphone5.jpg",
        color: "#e8d5c1", //default bg color
        chars: {
            screen: "4,7",
            proc: "A10 Fusion",
            camera: "12 Мп",

        },
        colors: [
            {
                val: "#e0e6eb",
                img: "images/iphone3.jpg",
                name: "Серебро",
                isDefault: false
            },
            {
                val: "#e8d5c1",
                img: "images/iphone.jpg",
                name: "Золото",
                isDefault: true
            },
            {
                val: "#eac5c4",
                img: "images/iphone5.jpg",
                name: "Розовое золото",
                isDefault: false
            }
        ],
        mems: [
            {
                val: 16,
                isDefault: true,
                price: 43790
            },
            {
                val: 32,
                isDefault: false,
                price: 45790
            },
            {
                val: 64,
                isDefault: false,
                price: 47790
            }
        ]
    },
    {
        name: "iPhone 7",
        hash: "iPhone7",
        img: "images/iphone.jpg",
        color: "#e8d5c1", //default bg color
        chars: {
            screen: "4,7",
            proc: "A10 Fusion",
            camera: "12 Мп",

        },
        colors: [
            {
                val: "#e0e6eb",
                img: "images/iphone3.jpg",
                name: "Серебро",
                isDefault: false
            },
            {
                val: "#e8d5c1",
                img: "images/iphone.jpg",
                name: "Золото",
                isDefault: true
            },
            {
                val: "#eac5c4",
                img: "images/iphone5.jpg",
                name: "Розовое золото",
                isDefault: false
            }
        ],
        mems: [
            {
                val: 16,
                isDefault: true,
                price: 43790
            },
            {
                val: 32,
                isDefault: false,
                price: 45790
            },
            {
                val: 64,
                isDefault: false,
                price: 47790
            }
        ]
    },
    {
        name: "iPhone SE",
        hash: "iPhoneSE",
        img: "images/iphone2.jpg",
        color: "#e8d5c1", //default bg color
        chars: {
            screen: "4,7",
            proc: "A10 Fusion",
            camera: "12 Мп",

        },
        colors: [
            {
                val: "#e0e6eb",
                img: "images/iphone3.jpg",
                name: "Серебро",
                isDefault: false
            },
            {
                val: "#e8d5c1",
                img: "images/iphone.jpg",
                name: "Золото",
                isDefault: true
            },
            {
                val: "#eac5c4",
                img: "images/iphone5.jpg",
                name: "Розовое золото",
                isDefault: false
            }
        ],
        mems: [
            {
                val: 16,
                isDefault: true,
                price: 43790
            },
            {
                val: 32,
                isDefault: false,
                price: 45790
            },
            {
                val: 64,
                isDefault: false,
                price: 47790
            }
        ]
    }
];