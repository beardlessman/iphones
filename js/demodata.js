//demo data - забирать с сервера
var phones = [
    {
        name: "iPhone SE",
        hash: "iPhoneSE",
        img: "images/iphones/se/silver.png",
        isRef: true,
        color: "#e8d5c1", //default bg color
        chars: {
            screen: "4,7",
            proc: "A10 Fusion",
            camera: "12 Мп"
        },
        colors: [
            {
                val: "#e0e6eb",
                img: "images/iphones/se/silver.png",
                name: "Серебро",
                isDefault: false
            },
            {
                val: "#e8d5c1",
                img: "images/iphones/se/gold.png",
                name: "Золото",
                isDefault: true
            },
            {
                val: "#9a9f9f",
                img: "images/iphones/se/gray.png",
                name: "Серый космос",
                isDefault: false
            },
            {
                val: "#eac5c4",
                img: "images/iphones/se/pink.png",
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
        img: "images/iphones/6/silver.png",
        isRef: true,
        color: "#e8d5c1", //default bg color
        chars: {
            screen: "4,7",
            proc: "A10 Fusion",
            camera: "12 Мп"
        },
        colors: [
            {
                val: "#e0e6eb",
                img: "images/iphones/6/silver.png",
                name: "Серебро",
                isDefault: false
            },
            {
                val: "#e8d5c1",
                img: "images/iphones/6/gold.png",
                name: "Золото",
                isDefault: true
            },
            {
                val: "#9a9f9f",
                img: "images/iphones/6/gray.png",
                name: "Серый космос",
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
        img: "images/iphones/6+/silver.png",
        isRef: true,
        color: "#e8d5c1", //default bg color
        chars: {
            screen: "4,7",
            proc: "A10 Fusion",
            camera: "12 Мп"
        },
        colors: [
            {
                val: "#e0e6eb",
                img: "images/iphones/6+/silver.png",
                name: "Серебро",
                isDefault: false
            },
            {
                val: "#e8d5c1",
                img: "images/iphones/6+/gold.png",
                name: "Золото",
                isDefault: true
            },
            {
                val: "#9a9f9f",
                img: "images/iphones/6+/gray.png",
                name: "Серый космос",
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
        img: "images/iphones/6s/silver.png",
        isRef: true,
        color: "#e8d5c1", //default bg color
        chars: {
            screen: "4,7",
            proc: "A10 Fusion",
            camera: "12 Мп"
        },
        colors: [
            {
                val: "#e0e6eb",
                img: "images/iphones/6s/silver.png",
                name: "Серебро",
                isDefault: false
            },
            {
                val: "#e8d5c1",
                img: "images/iphones/6s/gold.png",
                name: "Золото",
                isDefault: true
            },
            {
                val: "#9a9f9f",
                img: "images/iphones/6s/gray.png",
                name: "Серый космос",
                isDefault: false
            },
            {
                val: "#eac5c4",
                img: "images/iphones/6s/pink.png",
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
        img: "images/iphones/6s+/silver.png",
        isRef: true,
        color: "#e8d5c1", //default bg color
        chars: {
            screen: "4,7",
            proc: "A10 Fusion",
            camera: "12 Мп"
        },
        colors: [
            {
                val: "#e0e6eb",
                img: "images/iphones/6s+/silver.png",
                name: "Серебро",
                isDefault: false
            },
            {
                val: "#e8d5c1",
                img: "images/iphones/6s+/gold.png",
                name: "Золото",
                isDefault: true
            },
            {
                val: "#9a9f9f",
                img: "images/iphones/6s+/gray.png",
                name: "Серый космос",
                isDefault: false
            },
            {
                val: "#eac5c4",
                img: "images/iphones/6s+/pink.png",
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
        img: "images/iphones/7/silver.png",
        isRef: true,
        color: "#e8d5c1", //default bg color
        chars: {
            screen: "4,7",
            proc: "A10 Fusion",
            camera: "12 Мп"
        },
        colors: [
            {
                val: "#e0e6eb",
                img: "images/iphones/7/silver.png",
                name: "Серебро",
                isDefault: false
            },
            {
                val: "#e8d5c1",
                img: "images/iphones/7/gold.png",
                name: "Золото",
                isDefault: true
            },
            {
                val: "#eac5c4",
                img: "images/iphones/7/pink.png",
                name: "Розовое золото",
                isDefault: false
            },
            {
                val: "#080510",
                img: "images/iphones/7/black.png",
                name: "Черный",
                isDefault: false
            },
            {
                val: "#2f2f31",
                img: "images/iphones/7/blackM.png",
                name: "Черный матовый",
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
        name: "iPhone 7+",
        hash: "iPhone7+",
        img: "images/iphones/7+/silver.png",
        isRef: true,
        color: "#e8d5c1", //default bg color
        chars: {
            screen: "4,7",
            proc: "A10 Fusion",
            camera: "12 Мп"
        },
        colors: [
            {
                val: "#e0e6eb",
                img: "images/iphones/7+/silver.png",
                name: "Серебро",
                isDefault: false
            },
            {
                val: "#e8d5c1",
                img: "images/iphones/7+/gold.png",
                name: "Золото",
                isDefault: true
            },
            {
                val: "#eac5c4",
                img: "images/iphones/7+/pink.png",
                name: "Розовое золото",
                isDefault: false
            },
            {
                val: "#080510",
                img: "images/iphones/7+/black.png",
                name: "Черный",
                isDefault: false
            },
            {
                val: "#2f2f31",
                img: "images/iphones/7+/blackM.png",
                name: "Черный матовый",
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
];