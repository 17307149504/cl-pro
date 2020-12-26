export var symptomOptions = [
    {
        value: "C0:没有明显或可触及的静脉疾病迹象",
        label: "没有明显或可触及的静脉疾病迹象",
    },
    { value: "C1:毛细血管扩张或网状静脉", label: "毛细血管扩张或网状静脉" },
    { value: "C2:静脉曲张", label: "静脉曲张" },
    { value: "C2r:复发性静脉曲张", label: "复发性静脉曲张" },
    { value: "C3:水肿", label: "水肿" },
    { value: "C4:皮肤和皮下组织的变化", label: "皮肤和皮下组织的变化" },
    { value: "C4a:色素沉着，湿疹", label: "色素沉着，湿疹" },
    { value: "C4b:脂肪皮肤硬化或萎缩", label: "脂肪皮肤硬化或萎缩" },
    { value: "C4c:环状静脉曲张", label: "环状静脉曲张" },
    { value: "C5:康复的静脉溃疡", label: "康复的静脉溃疡" },
    { value: "C6:活动性静脉溃疡", label: "活动性静脉溃疡" },
    { value: "C6r:复发性活动性静脉溃疡", label: "复发性活动性静脉溃疡" },
]
export var pOptions = [
        {
            value: "As",
            label: "浅静脉",
            children: [
                {
                    value: "Tel",
                    label: "毛细血管",
                },
                {
                    value: "Ret",
                    label: "网状静脉",
                },
                {
                    value: "CSVa",
                    label: "膝上大隐静脉",
                },
                {
                    value: "GSVb",
                    label: "膝下大隐静脉",
                },
                {
                    value: "SSV",
                    label: "小隐静脉",
                },
                {
                    value: "AASV",
                    label: "前副隐静脉",
                },
                {
                    value: "NSV",
                    label: "非隐静脉",
                },
            ],
        },
        {
            value: "Ap",
            label: "深静脉",
            children: [
                {
                    value: "IVC",
                    label: "下腔静脉",
                },
                {
                    value: "CIV",
                    label: "髂总静脉",
                },
                {
                    value: "IIV",
                    label: "髂内静脉",
                },
                {
                    value: "EIV",
                    label: "髂外静脉",
                },
                {
                    value: "PELV",
                    label: "盆腔静脉",
                },
                {
                    value: "CFV",
                    label: "股总静脉",
                },
                {
                    value: "DFV",
                    label: "股深静脉",
                },
                {
                    value: "FV",
                    label: "股静脉",
                },
                {
                    value: "POPV",
                    label: "腘静脉",
                },
                {
                    value: "TIBV",
                    label: "胫（腓 干）静脉",
                },
                {
                    value: "PRV",
                    label: "腓静脉",
                },
                {
                    value: "ATV",
                    label: "胫前静脉",
                },
                {
                    value: "PTV",
                    label: "胫后静脉",
                },
                {
                    value: "MUSV",
                    label: "肌内静脉",
                },
                {
                    value: "GAV",
                    label: "腓肠肌间静脉",
                },
                {
                    value: "SOV",
                    label: "比目鱼肌间静脉",
                },
            ],
        },
        {
            value: "Ad",
            label: "穿静脉",
            children: [
                {
                    value: "TPV",
                    label: "大腿穿通静脉",
                },
                {
                    value: "CPV",
                    label: "小腿穿通静脉",
                },
            ],
        },
    ]
export var etilogyOptions = [
            { value: "Ep", label: "原发性" },
            { value: "Es", label: "继发性" },
            { value: "Esi", label: "静脉内触发" },
            { value: "Ese", label: "静脉外触发" },
            { value: "Ec", label: "先天性" },
            { value: "En", label: "不确定原因性" },
        ]
export var ageOptions = [
                { value: "<10", label: "小于10岁" },
                { value: "10-20", label: "10-20" },
                { value: "20-30", label: "20-30" },
                { value: "30-40", label: "30-40" },
                { value: "40-50", label: "40-50" },
                { value: "50-60", laebel: "50-60" },
                { value: "60-70", label: "60-70" },
                { value: ">70", label: "大于70岁" },
            ]
export var sexOptions = [
                    { value: "male", label: "女性" },
                    { value: "female", label: "男性" },
                ]
export var cureWayOptions = [
                        {
                            value: "手术治疗",
                            label: "手术治疗",
                            children: [
                                {
                                    label: "传统手术",
                                    value: "传统手术",
                                    children: [
                                        {
                                            label: "大隐静脉高位结扎加剥脱术",
                                            value: "大隐静脉高位结扎加剥脱术",
                                        },
                                        {
                                            label: "交通静脉结扎术",
                                            value: "交通静脉结扎术",
                                        },
                                    ],
                                },
                                {
                                    label: "深静脉瓣膜修复术",
                                    value: "深静脉瓣膜修复术",
                                    children: [
                                        {
                                            label: "瓣膜修复术",
                                            value: "瓣膜修复术",
                                            children: [
                                                {
                                                    label: "腔外修复术",
                                                    value: "腔外修复术",
                                                    children: [
                                                        {
                                                            label: "包窄术",
                                                            value: "包窄术",
                                                        },
                                                        {
                                                            label: "环缝术",
                                                            value: "环缝术",
                                                        },
                                                    ],
                                                },
                                                {
                                                    label: "腔内修复术",
                                                    value: "腔内修复术",
                                                    children: [
                                                        {
                                                            label: '腔内成形术',
                                                            value: '腔内成形术'
                                                        }
                                                    ]
                                                },
                                            ],
                                        },
                                        {
                                            label: "",
                                            value: "",
                                        },
                                    ],
                                },
                                {
                                    label: "现代微创手术", value: "现代微创手术", children: [
                                        {
                                            label: '静脉腔内激光治疗',
                                            value: '静脉腔内激光治疗'
                                        },
                                        {
                                            label: '静脉腔内电凝治疗',
                                            value: '静脉腔内电凝治疗'
                                        },
                                        {
                                            label: '静脉腔内射频治疗',
                                            value: '静脉腔内射频治疗'
                                        },
                                        {
                                            label: '皮下曲张静脉透光旋切术',
                                            value: '皮下曲张静脉透光旋切术'
                                        }
                                    ]
                                },
                                {
                                    label: "PTS手术治疗", value: "PTS手术治疗", children: [
                                        {
                                            label: '流转术',
                                            value: '流转术'
                                        },
                                        {
                                            label: '矫正血液倒流术',
                                            value: '矫正血液倒流术'
                                        },
                                        {
                                            label: '交通静脉结扎术',
                                            value: '交通静脉结扎术'
                                        },

                                        {
                                            label: '大隐静脉交叉转流术',
                                            value: '大隐静脉交叉转流术'
                                        },
                                        {
                                            label: '原位大隐静脉——腘静脉转流术',
                                            value: '原位大隐静脉——腘静脉转流术'
                                        }
                                    ]
                                },
                                { label: "PTS腔内治疗", value: "PTS腔内治疗" },
                                { label: "静脉性溃疡的手术治疗", value: "静脉性溃疡的手术治疗" },
                                { label: "血管畸形的手术治疗", value: "血管畸形的手术治疗" },
                            ],
                        },
                        {
                            label: '硬化剂治疗',
                            value: '硬化剂治疗'
                        }, {
                            label: '药物治疗',
                            value: '药物治疗',
                            children: [
                                {
                                    label: '静脉活性药物',
                                    value: '静脉活性药物',
                                    children: [
                                        {
                                            label: '黄酮类',
                                            value: '黄酮类',
                                            children: [
                                                {
                                                    label: '化黄酮类：爱脉朗（代表药物）',
                                                    value: '化黄酮类：爱脉朗（代表药物）'
                                                },
                                                {
                                                    label: '普通地奥司明',
                                                    value: '普通地奥司明'
                                                }
                                            ]
                                        },
                                        {
                                            label: '七叶皂苷类',
                                            value: '七叶皂苷类',
                                            children: [
                                                {
                                                    label: '迈之灵（代表药物）',
                                                    value: '迈之灵（代表药物）'
                                                }
                                            ]
                                        },
                                        {
                                            label: '香豆素类',
                                            value: '香豆素类',
                                            children: [
                                                {
                                                    label: '消脱止—M（代表药物）',
                                                    value: '消脱止—M（代表药物）'
                                                }
                                            ]
                                        }
                                    ]
                                }, {
                                    label: '纤维蛋白分解药物',
                                    value: '纤维蛋白分解药物'
                                }, {
                                    label: '前列腺素E1',
                                    value: '前列腺素E1'
                                }, {
                                    label: '己酮可可碱',
                                    value: '己酮可可碱'
                                }, {
                                    label: '活血化瘀中药',
                                    value: '活血化瘀中药'
                                }, {
                                    label: '非甾体抗炎药物',
                                    value: '非甾体抗炎药物'
                                },
                            ]
                        }, {
                            label: '支持性治疗',
                            value: '支持性治疗',
                            children: [
                                {
                                    label: '改变生活方式',
                                    value: '改变生活方式'
                                },
                                {
                                    label: '加压治疗',
                                    value: '加压治疗',
                                    children: [
                                        {
                                            label: '弹力袜',
                                            value: '弹力袜'
                                        },
                                        {
                                            label: '弹力绷带',
                                            value: '弹力绷带'
                                        },
                                        {
                                            label: '充气加压治疗',
                                            value: '充气加压治疗'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
export var checkOptions = [
                            {
                                label: '病史询问和体检',
                                value: '病史询问和体检',
                            }, {
                                label: '大隐静脉瓣膜功能试验',
                                value: '大隐静脉瓣膜功能试验',
                            }, {
                                label: '深静脉通畅试验',
                                value: '深静脉通畅试验',
                            }, {
                                label: '交通支瓣膜功能试验',
                                value: '交通支瓣膜功能试验',
                            }, {
                                label: '彩色多普勒超声检查',
                                value: '彩色多普勒超声检查',
                            }, {
                                label: '体积描记检测',
                                value: '体积描记检测',
                                children: [
                                    {
                                        label: '阻抗容积描记',
                                        value: '阻抗容积描记'
                                    },
                                    {
                                        label: '应变容积描记',
                                        value: '应变容积描记',
                                    },
                                    {
                                        label: '光电容积描记',
                                        value: '光电容积描记',
                                    }
                                ]
                            }, {
                                label: '下肢动态静脉压',
                                value: '下肢动态静脉压',
                            }, {
                                label: '静脉造影',
                                value: '静脉造影',
                                children: [
                                    {
                                        label: '顺行静脉造影',
                                        value: '顺行静脉造影'
                                    },
                                    {
                                        label: '逆行静脉造影',
                                        value: '逆行静脉造影',
                                    }
                                ]
                            }, {
                                label: 'CT静脉造影和磁共振静脉造影',
                                value: 'CT静脉造影和磁共振静脉造影',
                            }, {
                                label: '放射性核素扫描',
                                value: '放射性核素扫描',
                            }, {
                                label: 'D-二聚体检测',
                                value: 'D-二聚体检测',
                            },
                        ]
export function getChildData(formData) {
    // let {
    //     id, name, desc, symptom, pr, po, etilogy, risk_factor_age, risk_factor_sex, risk_factor_occupation, cure_way, check, part, accompany
    // } = formData;
    // let obj = {
    //     name: id,

    // }
    console.log("getChildData");
    let obj = {name: formData.id, children: []};
    Object.keys(formData).forEach( key => {
        if(key !== 'id'){
            let child = {
                name: formData[key]
            };
            obj.children.push(child)
        }
    })
    console.log(
        "obj:",obj
    );
    return obj;
}