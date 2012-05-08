/* 结构型：左右 */
var pattern_lr_left_1_right_1_left_big = 1;
var pattern_lr_left_1_right_1_right_big = 2;
var pattern_lr_left_middle_right = 3;
var pattern_lr_left_1_right_2 = 4;
var pattern_lr_left_2_right_1 = 5;
var pattern_lr_left_1_right_many = 6;
var pattern_lr_left_many_right_1 = 7;
var pattern_lr_left_many_right_many = 8;

/* 结构型：上下 */
var pattern_ud_up_1_down_1_up_big = 11;
var pattern_ud_up_1_down_1_down_big = 12;
var pattern_ud_up_middle_down = 13;
var pattern_ud_up_1_down_2 = 14;
var pattern_ud_up_2_down_1 = 15;
var pattern_ud_up_1_down_many = 16;
var pattern_ud_up_many_down_1 = 17;
var pattern_ud_up_many_down_many = 18;

/* 结构型：独体 */
var pattern_single = 21;

/* 结构型：包围 */
var pattern_round_whole = 31;
var pattern_round_up = 32;
var pattern_round_down = 33;
var pattern_round_left = 34;
var pattern_round_right = 35;
var pattern_round_left_up = 36;
var pattern_round_left_down = 37;
var pattern_round_right_up = 38; /* 式 */

/* 结构型：品字形及其他 */
var pattern_pin = 41;

/* 横竖撇捺折 for 独体字 续笔 */
var heng = 1;
var shu = 2;
var pie = 3;
var na = 4;
var zhe = 5;
var dian = 6;

/* 其他结构型续笔：部首
 * from 常用汉字正形手册
 */
var jiangzikuang = 1; /* 匠 */
var shangzitou = 2; /* 上 */
var lidaopang = 3; /* 刚 */
var tongzikuang = 4; /* 同 */
var danrenpang = 5; /* 化 */
var pangzipang = 6; /* 反 */
var weizitou = 7; /* 危 */
var baozitou = 8; /* 包 */
var fengzitou = 9; /* 凤 */
var liuzitou = 10; /* 六 */
var liangdianshui = 11; /* 次 */
var lanzitou = 12; /* 兰 */
var tubaogai = 13; /* 军 */
var yanzipang = 14; /* 语 */
var xiongzikuang = 15; /* 画 */
var danerpang = 16; /* 印 */
var zuoerpang = 17; /* 阳 */
var youerpang = 18; /* 那 */
var sizitou = 19; /* 私 */
var jianzidi = 20; /* 建 */
var caozitou = 21; /* 草 */
var nongzidi = 22; /* 弄 */
var youzishen = 23; /* 尤，无点 */
var yaozidi = 24; /* 尧 */
var tishoupang = 25; /* 提 */
var shizikuang = 26; /* 式 */
var dakoukuang = 27; /* 国 */
var guangzitou = 28; /* 光 */
var shuangrenpang = 29; /* 很 */
var sanpie = 30; /* 形 */
var fanquanpang = 31; /* 狼 */
var zhewen = 32; /* 条 */
var shizipang = 33; /* 饭 */
var jiangzipang = 34; /* 壮 */
var shuxinpang = 35; /* 怀 */
var baogai = 36; /* 安 */
var sandianshui = 37; /* 江 */
var zouzhidi = 38; /* 过 */
var luzitou = 39; /* 录 */
var xunzitou = 40; /* 寻 */
var jiaosipang = 41; /* 红 */
var youzipang = 42; /* 幼 */
var sanguai = 43; /* 巡 */
var laozitou = 44; /* 老 */
var shuxindi = 45; /* 恭 */
var fanwenpang = 46; /* 故 */
var caizitou = 47; /* 采 */
var huozipang = 48; /* 火 */
var sidiandi = 49; /* 点 */
var shizipang = 50; /* 视 */
var minzidi = 51; /* 监 */
var jinzipang = 52; /* 银 */
var bingzitou = 53; /* 病 */
var yizipang = 54; /* 补 */
var dengzitou = 55; /* 登 */
var huzitou = 56; /* 虎 */
var zhuzitou = 57; /* 第 */
var piweiyang = 58; /* 差 */
var yangzitou = 59; /* 羔 */
var jianzili = 60; /* 聿 */
var kenzitou = 61; /* 垦 */
var zuzipang = 62; /* 跟 */
var fanzitou = 63; /* 番 */
var baozipang = 64; /* 豹 */
var chaozipang = 65; /* 朝 */
var quezipang = 66; /* 雄 */

var yi = 1;
var pieheng = 1;
var ji = 1;
var hengzhegou = 1;
var shuzhegou = 1;
var shi = 1;
var you = 1;
var chang = 1;
var ding = 1;
var cha = 1;
var li = 1;
var er = 1;
var zuokai = 1;
var bi = 1;
var dao = 1;
var two = 1;
var bu_sd = 1;
var qi = 1;
var jiu = 1;
var jin = 1;
var nai = 1;
var fanzipang = 1;
var ren = 1;
var dao_lp = 1;
var jinzidi = 1;
var ba = 1;
var zhi = 1;
var canzidi = 1;

var pattern_maps = {
	'A': [],
	'B': []
};

var buzhou_maps = {};

var offen_use_buzhou_mapping = {};

function Char() {
	this.char = '';
	this.first = 1;
	this.later = new Array();
}

var Characters = new Array();

/* 《现代汉语常用字表》笔画顺序表 */

/* 一画 */
Characters[Characters.length] = {
	char: "一",
	first: pattern_single,
	later: [heng]
}
Characters[Characters.length] = {
	char: "乙",
	first: pattern_single,
	later: [zhe]
}

/* 二画 */
Characters[Characters.length] = {
	char: "二",
	first: pattern_single,
	later: [heng, heng]
}
Characters[Characters.length] = {
	char: "十",
	first: pattern_single,
	later: [heng, shu]
}
Characters[Characters.length] = {
	char: "丁",
	first: pattern_single,
	later: [heng, zhe]
	}
Characters[Characters.length] = {
	char: "厂",
	first: pattern_single,
	later: [heng, pie]
	}
Characters[Characters.length] = {
	char: "七",
	first: pattern_single,
	later: [heng, zhe]
}
Characters[Characters.length] = {
	char: "卜",
	first: pattern_single,
	later: [shu, dian]
	}
Characters[Characters.length] = {
	char: "人",
	first: pattern_single,
	later: [pie, na]
	}
Characters[Characters.length] = {
	char: "入",
	first: pattern_single,
	later: [pie, na]
	}
Characters[Characters.length] = {
	char: "八",
	first: pattern_single,
	later: [pie, na]
	}
Characters[Characters.length] = {
	char: "九",
	first: pattern_single,
	later: [pie, zhe]
	}
Characters[Characters.length] = {
	char: "几",
	first: pattern_single,
	later: [pie, zhe]
	}
Characters[Characters.length] = {
	char: "儿",
	first: pattern_single,
	later: [pie, zhe]
	 }
Characters[Characters.length] = {
	char: "了",
	first: pattern_single,
	later: [zhe, zhe]
	}
Characters[Characters.length] = {
	char: "力",
	first: pattern_single,
	later: [zhe, pie]
	}
Characters[Characters.length] = {
	char: "乃",
	first: pattern_single,
	later: [zhe, pie]
	}
Characters[Characters.length] = {
	char: "刀",
	first: pattern_single,
	later: [zhe, pie]
	}
Characters[Characters.length] = {
	char: "又",
	first: pattern_single,
	later: [zhe, na]
	}

/* 三画 */
Characters[Characters.length] = {
	char: "三",
	first: pattern_single,
	later: [heng, heng, heng]
	}
Characters[Characters.length] = {
	char: "于",
	first: pattern_single,
	later: [heng, heng, zhe]
	}
Characters[Characters.length] = {
	char: "干",
	first: pattern_single,
	later: [heng, heng, shu]
	}
Characters[Characters.length] = {
	char: "亏",
	first: pattern_single,
	later: [heng, heng, zhe]
	}
Characters[Characters.length] = {
	char: "士",
	first: pattern_single,
	later: [heng, shu, heng]
	}
Characters[Characters.length] = {
	char: "工",
	first: pattern_single,
	later: [heng, shu, heng]
	}
Characters[Characters.length] = {
	char: "土",
	first: pattern_single,
	later: [heng, shu, heng]
	}
Characters[Characters.length] = {
	char: "才",
	first: pattern_single,
	later: [heng, zhe, pie]
	}
Characters[Characters.length] = {
	char: "寸",
	first: pattern_single,
	later: [heng, zhe, dian]
	}
Characters[Characters.length] = {
	char: "下",
	first: pattern_single,
	later: [heng, shu, dian]
	}
Characters[Characters.length] = {
	char: "大",
	first: pattern_single,
	later: [heng, pie, na]
	}
Characters[Characters.length] = {
	char: "丈",
	first: pattern_single,
	later: [heng, pie, na]
	}
Characters[Characters.length] = {
	char: "与",
	first: pattern_single,
	later: [heng, zhe, heng]
}
Characters[Characters.length] = {
	char: "万",
	first: pattern_single,
	later: [heng, zhe, pie]
}
Characters[Characters.length] = {
	char: "上",
	first: pattern_single,
	later: [shu, heng, heng]
}
Characters[Characters.length] = {
	char: "小",
	first: pattern_single,
	later: [zhe, pie, dian]
}
Characters[Characters.length] = {
	char: "口",
	first: pattern_single,
	later: [shu, zhe, heng]
}
Characters[Characters.length] = {
	char: "巾",
	first: pattern_single,
	later: [shu, zhe, shu]
}
Characters[Characters.length] = {
	char: "山",
	first: pattern_single,
	later: [shu, zhe, shu]
}
Characters[Characters.length] = {
	char: "千",
	first: pattern_single,
	later: [pie, heng, shu]
}
Characters[Characters.length] = {
	char: "乞",
	first: pattern_ud_up_1_down_1_down_big,
	later: [pieheng, yi]
}
Characters[Characters.length] = {
	char: "川",
	first: pattern_single,
	later: [pie, shu, shu]
}
Characters[Characters.length] = {
	char: "亿",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, yi]
}
Characters[Characters.length] = {
	char: "个",
	first: pattern_single,
	later: [pie, na, shu]
}
Characters[Characters.length] = {
	char: "勺",
	first: pattern_round_right_up,
	later: [baozitou, dian]
}
Characters[Characters.length] = {
	char: "久",
	first: pattern_single,
	later: [pie, zhe, na]
}
Characters[Characters.length] = {
	char: "凡",
	first: pattern_round_up,
	later: [ji, dian]
}
Characters[Characters.length] = {
	char: "及",
	first: pattern_single,
	later: [pie, zhe, na]
}
Characters[Characters.length] = {
	char: "夕",
	first: pattern_single,
	later: [pie, zhe, dian]
}
Characters[Characters.length] = {
	char: "丸",
	first: pattern_single,
	later: [pie, zhe, dian]
}
Characters[Characters.length] = {
	char: "么",
	first: pattern_single,
	later: [pie, zhe, dian]
}
Characters[Characters.length] = {
	char: "广",
	first: pattern_single,
	later: [dian, heng, pie]
}
Characters[Characters.length] = {
	char: "亡",
	first: pattern_single,
	later: [dian, heng, zhe]
}
Characters[Characters.length] = {
	char: "门",
	first: pattern_single,
	later: [dian, shu, zhe]
}
Characters[Characters.length] = {
	char: "义",
	first: pattern_single,
	later: [dian, pie, na]
}
Characters[Characters.length] = {
	char: "之",
	first: pattern_single,
	later: [dian, zhe, na]
}
Characters[Characters.length] = {
	char: "尸",
	first: pattern_single,
	later: [zhe, heng, pie]
}
Characters[Characters.length] = {
	char: "弓",
	first: pattern_single,
	later: [zhe, heng, zhe]
}
Characters[Characters.length] = {
	char: "己",
	first: pattern_single,
	later: [zhe, heng, zhe]
}
Characters[Characters.length] = {
	char: "已",
	first: pattern_single,
	later: [zhe, heng, zhe]
}
Characters[Characters.length] = {
	char: "子",
	first: pattern_single,
	later: [zhe, zhe, heng]
}
Characters[Characters.length] = {
	char: "卫",
	first: pattern_single,
	later: [zhe, shu, heng]
}
Characters[Characters.length] = {
	char: "也",
	first: pattern_single,
	later: [zhe, shu, zhe]
}
Characters[Characters.length] = {
	char: "女",
	first: pattern_single,
	later: [zhe, pie, heng]
}
Characters[Characters.length] = {
	char: "飞",
	first: pattern_single,
	later: [zhe, pie, dian]
}
Characters[Characters.length] = {
	char: "刃",
	first: pattern_single,
	later: [zhe, pie, dian]
}
Characters[Characters.length] = {
	char: "习",
	first: pattern_round_right_up,
	later: [hengzhegou, liangdianshui]
}
Characters[Characters.length] = {
	char: "叉",
	first: pattern_single,
	later: [zhe, na, dian]
}
Characters[Characters.length] = {
	char: "马",
	first: pattern_single,
	later: [zhe, zhe, heng]
}
Characters[Characters.length] = {
	char: "乡",
	first: pattern_single,
	later: [zhe, zhe, pie]
}

/* 四画 */
Characters[Characters.length] = {
	char: "丰",
	first: pattern_single,
	later: [heng, heng, heng, shu]
}
Characters[Characters.length] = {
	char: "王",
	first: pattern_single,
	later: [heng, heng, shu, heng]
}
Characters[Characters.length] = {
	char: "井",
	first: pattern_single,
	later: [heng, heng, pie, shu]
}
Characters[Characters.length] = {
	char: "开",
	first: pattern_single,
	later: [heng, heng, pie, shu]
}
Characters[Characters.length] = {
	char: "夫",
	first: pattern_single,
	later: [heng, heng, pie, na]
}
Characters[Characters.length] = {
	char: "天",
	first: pattern_single,
	later: [heng, heng, pie, na]
}
Characters[Characters.length] = {
	char: "无",
	first: pattern_single,
	later: [heng, heng, pie, zhe]
}
Characters[Characters.length] = {
	char: "元",
	first: pattern_single,
	later: [heng, heng, pie, zhe]
}
Characters[Characters.length] = {
	char: "专",
	first: pattern_single,
	later: [heng, heng, zhe, dian]
}
Characters[Characters.length] = {
	char: "云",
	first: pattern_single,
	later: [heng, heng, zhe, dian]
}
Characters[Characters.length] = {
	char: "扎",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, shuzhegou]
}
Characters[Characters.length] = {
	char: "艺",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caozitou, yi]
}
Characters[Characters.length] = {
	char: "木",
	first: pattern_single,
	later: [heng, shu, pie, na]
}
Characters[Characters.length] = {
	char: "五",
	first: pattern_single,
	later: [heng, shu, zhe, heng]
}
Characters[Characters.length] = {
	char: "支",
	first: pattern_ud_up_1_down_1_down_big,
	later: [shi, you]
}
Characters[Characters.length] = {
	char: "厅",
	first: pattern_round_left_up,
	later: [chang, ding]
}
Characters[Characters.length] = {
	char: "不",
	first: pattern_single,
	later: [heng, pie, shu, dian]
}
Characters[Characters.length] = {
	char: "太",
	first: pattern_single,
	later: [heng, pie, na, dian]
}
Characters[Characters.length] = {
	char: "犬",
	first: pattern_single,
	later: [heng, pie, na, dian]
}
Characters[Characters.length] = {
	char: "区",
	first: pattern_round_left,
	later: [jiangzikuang, cha]
}
Characters[Characters.length] = {
	char: "历",
	first: pattern_round_left_up,
	later: [chang, li]
}
Characters[Characters.length] = {
	char: "尤",
	first: pattern_single,
	later: [heng, pie, zhe, dian]
}
Characters[Characters.length] = {
	char: "友",
	first: pattern_round_left_up,
	later: [pieheng, you]
}
Characters[Characters.length] = {
	char: "匹",
	first: pattern_round_left,
	later: [jiangzikuang, er]
}
Characters[Characters.length] = {
	char: "车",
	first: pattern_single,
	later: [heng, zhe, heng, shu]
}
Characters[Characters.length] = {
	char: "巨",
	first: pattern_round_left,
	later: [jiangzikuang, zuokai]
}
Characters[Characters.length] = {
	char: "牙",
	first: pattern_single,
	later: [heng, zhe, zhe, pie]
}
Characters[Characters.length] = {
	char: "屯",
	first: pattern_single,
	later: [heng, zhe, shu, zhe]
}
Characters[Characters.length] = {
	char: "比",
	first: pattern_lr_left_1_right_1_right_big,
	later: [bi, bi]
}
Characters[Characters.length] = {
	char: "互",
	first: pattern_single,
	later: [heng, zhe, zhe, heng]
}
Characters[Characters.length] = {
	char: "切",
	first: pattern_lr_left_1_right_1_right_big,
	later: [bi, dao]
}
Characters[Characters.length] = {
	char: "瓦",
	first: pattern_single,
	later: [heng, zhe, zhe, dian]
}
Characters[Characters.length] = {
	char: "止",
	first: pattern_single,
	later: [shu, heng, shu, heng]
}
Characters[Characters.length] = {
	char: "少",
	first: pattern_single,
	later: [shu, pie, dian, pie]
}
Characters[Characters.length] = {
	char: "日",
	first: pattern_single,
	later: [shu, zhe, heng, heng]
}
Characters[Characters.length] = {
	char: "中",
	first: pattern_single,
	later: [shu, zhe, heng, shu]
}
Characters[Characters.length] = {
	char: "冈",
	first: pattern_round_up,
	later: [tongzikuang, cha]
}
Characters[Characters.length] = {
	char: "贝",
	first: pattern_single,
	later: [shu, zhe, pie, dian]
}
Characters[Characters.length] = {
	char: "内",
	first: pattern_single,
	later: [shu, zhe, pie, dian]
}
Characters[Characters.length] = {
	char: "水",
	first: pattern_single,
	later: [zhe, zhe, pie, na]
}
Characters[Characters.length] = {
	char: "见",
	first: pattern_single,
	later: [shu, zhe, pie, zhe]
}
Characters[Characters.length] = {
	char: "午",
	first: pattern_single,
	later: [pie, heng, heng, shu]
}
Characters[Characters.length] = {
	char: "牛",
	first: pattern_single,
	later: [pie, heng, heng, shu]
}
Characters[Characters.length] = {
	char: "手",
	first: pattern_single,
	later: [pie, heng, heng, zhe]
}
Characters[Characters.length] = {
	char: "毛",
	first: pattern_single,
	later: [pie, heng, heng, zhe]
}
Characters[Characters.length] = {
	char: "气",
	first: pattern_single,
	later: [pie, heng, heng, zhe]
}
Characters[Characters.length] = {
	char: "升",
	first: pattern_single,
	later: [pie, heng, pie, shu]
}
Characters[Characters.length] = {
	char: "长",
	first: pattern_single,
	later: [pie, heng, zhe, na]
}
Characters[Characters.length] = {
	char: "仁",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, two]
}
Characters[Characters.length] = {
	char: "什",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, shi]
}
Characters[Characters.length] = {
	char: "片",
	first: pattern_single,
	later: [pie, shu, heng, zhe]
}
Characters[Characters.length] = {
	char: "仆",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, bu_sd]
}
Characters[Characters.length] = {
	char: "化",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, qi]
}
Characters[Characters.length] = {
	char: "仇",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, jiu]
}
Characters[Characters.length] = {
	char: "币",
	first: pattern_ud_up_1_down_1_down_big,
	later: [pie, jin]
}
Characters[Characters.length] = {
	char: "仍",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, nai]
}
Characters[Characters.length] = {
	char: "仅",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, you]
}
Characters[Characters.length] = {
	char: "斤",
	first: pattern_single,
	later: [pie, pie, heng, shu]
}
Characters[Characters.length] = {
	char: "爪",
	first: pattern_single,
	later: [pie, pie, shu, na]
}
Characters[Characters.length] = {
	char: "反",
	first: pattern_round_left_up,
	later: [fanzipang, you]
}
Characters[Characters.length] = {
	char: "介",
	first: pattern_ud_up_1_down_1_up_big,
	later: [ren, dao_lp]
}
Characters[Characters.length] = {
	char: "父",
	first: pattern_single,
	later: [pie, dian, pie, na]
}
Characters[Characters.length] = {
	char: "从",
	first: pattern_lr_left_1_right_1_right_big,
	later: [ren, ren]
}
Characters[Characters.length] = {
	char: "今",
	first: pattern_ud_up_1_down_1_up_big,
	later: [ren, jinzidi]
}
Characters[Characters.length] = {
	char: "凶",
	first: pattern_round_down,
	later: [cha, xiongzikuang]
}
Characters[Characters.length] = {
	char: "分",
	first: pattern_ud_up_1_down_1_down_big,
	later: [ba, dao]
}
Characters[Characters.length] = {
	char: "乏",
	first: pattern_ud_up_1_down_1_down_big,
	later: [pie, zhi]
}
Characters[Characters.length] = {
	char: "公",
	first: pattern_ud_up_1_down_1_down_big,
	later: [ba, sizitou]
}
Characters[Characters.length] = {
	char: "仓",
	first: pattern_ud_up_1_down_1_down_big,
	later: [ren, cangzidi]
}
Characters[Characters.length] = {
	char: "月",
	first: pattern_single,
	later: [pie, zhe, heng, heng]
}
Characters[Characters.length] = {
	char: "氏",
	first: pattern_single,
	later: [pie, zhe, heng, zhe]
}
Characters[Characters.length] = {
	char: "勿",
	first: pattern_round_right_up,
	later: [baozitou, liangpie]
}
Characters[Characters.length] = {
	char: "欠",
	first: pattern_single,
	later: [pie, zhe, pie, na]
}
Characters[Characters.length] = {
	char: "风",
	first: pattern_round_up,
	later: [fengzitou, cha]
}
Characters[Characters.length] = {
	char: "丹",
	first: pattern_single,
	later: [pie, zhe, heng, dian]
}
Characters[Characters.length] = {
	char: "匀",
	first: pattern_round_right_up,
	later: [baozitou, liangdianshui]
}
Characters[Characters.length] = {
	char: "乌",
	first: pattern_single,
	later: [pie, zhe, zhe, heng]
}
Characters[Characters.length] = {
	char: "凤",
	first: pattern_round_up,
	later: [fengzitou, you]
}
Characters[Characters.length] = {
	char: "勾",
	first: pattern_round_right_up,
	later: [baozitou, sizitou]
}
Characters[Characters.length] = {
	char: "文",
	first: pattern_single,
	later: [dian, heng, pie, na]
}
Characters[Characters.length] = {
	char: "六",
	first: pattern_single,
	later: [dian, heng, pie, na]
}
Characters[Characters.length] = {
	char: "方",
	first: pattern_single,
	later: [dian, heng, zhe, pie]
}
Characters[Characters.length] = {
	char: "火",
	first: pattern_single,
	later: [dian, pie, pie, na]
}
Characters[Characters.length] = {
	char: "为",
	first: pattern_single,
	later: [dian, pie, zhe, dian]
}
Characters[Characters.length] = {
	char: "斗",
	first: pattern_single,
	later: [dian, dian, heng, shu]
}
Characters[Characters.length] = {
	char: "忆",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shuxinpang, yi]
}
Characters[Characters.length] = {
	char: "订",
	first: pattern_lr_left_1_right_1_right_big,
	later: [yanzipang, ding]
}
Characters[Characters.length] = {
	char: "计",
	first: pattern_lr_left_1_right_1_right_big,
	later: [yanzipang, shi]
}
Characters[Characters.length] = {
	char: "户",
	first: pattern_single,
	later: [pie, zhe, heng, pie]
}
Characters[Characters.length] = {
	char: "认",
	first: pattern_lr_left_1_right_1_right_big,
	later: [yanzipang, ren]
}
Characters[Characters.length] = {
	char: "心",
	first: pattern_single,
	later: [dian, zhe, dian, dian]
}
Characters[Characters.length] = {
	char: "尺",
	first: pattern_single,
	later: [zhe, heng, pie, na]
}
Characters[Characters.length] = {
	char: "引",
	first: pattern_lr_left_1_right_1_left_big,
	later: [gong, shu]
}
Characters[Characters.length] = {
	char: "丑",
	first: pattern_single,
	later: [zhe, heng, shu, heng]
}
Characters[Characters.length] = {
	char: "巴",
	first: pattern_single,
	later: [zhe, heng, shu, zhe]
}
Characters[Characters.length] = {
	char: "孔",
	first: pattern_lr_left_1_right_1_right_big,
	later: [zi, shuzhegou]
}
Characters[Characters.length] = {
	char: "队",
	first: pattern_lr_left_1_right_1_right_big,
	later: [zuoerpang, ren]
}
Characters[Characters.length] = {
	char: "办",
	first: pattern_single,
	later: [zhe, pie, dian, dian]
}
Characters[Characters.length] = {
	char: "以",
	first: pattern_lr_left_1_right_1_left_big,
	later: [shutidian, ren]
}
Characters[Characters.length] = {
	char: "允",
	first: pattern_ud_up_1_down_1_up_big,
	later: [sizitou, er]
}
Characters[Characters.length] = {
	char: "予",
	first: pattern_single,
	later: [zhe, dian, zhe, zhe]
}
Characters[Characters.length] = {
	char: "劝",
	first: pattern_lr_left_1_right_1_right_big,
	later: [you, li]
}
Characters[Characters.length] = {
	char: "双",
	first: pattern_lr_left_1_right_1_right_big,
	later: [you, you]
}
Characters[Characters.length] = {
	char: "书",
	first: pattern_single,
	later: [zhe, zhe, shu, dian]
}
Characters[Characters.length] = {
	char: "幻",
	first: pattern_lr_left_1_right_1_right_big,
	later: [youzipang, hengzhegou]
}

/* 五画 */
Characters[Characters.length] = {
	char: "玉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "刊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "示",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "末",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "未",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "击",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "打",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "巧",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "正",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "扑",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "扒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "功",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "扔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "去",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "甘",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "世",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "古",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "节",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "本",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "术",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "可",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "丙",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "左",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "厉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "右",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "石",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "布",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "龙",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "平",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "灭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "轧",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "东",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "卡",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "北",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "占",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "业",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "旧",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "帅",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "归",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "且",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "旦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "目",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "叶",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "甲",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "申",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "叮",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "电",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "号",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "田",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "由",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "史",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "只",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "央",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "兄",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "叼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "叫",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "另",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "叨",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "叹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "四",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "生",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "失",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "禾",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "丘",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "付",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "仗",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "代",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "仙",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "们",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "仪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "白",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "仔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "他",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "斥",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "瓜",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "乎",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "丛",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "令",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "用",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "甩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "印",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "乐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "句",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "匆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "册",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "犯",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "外",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "处",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "冬",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "鸟",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "务",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "包",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "饥",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "主",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "市",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "立",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "闪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "兰",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "半",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "汁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "汇",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "头",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "汉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "宁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "穴",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "它",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "讨",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "写",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "让",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "礼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "训",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "必",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "议",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "讯",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "记",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "永",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "司",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "尼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "民",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "出",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "辽",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "奶",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "奴",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "加",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "召",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "皮",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "边",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "发",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "孕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "圣",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "对",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "台",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "矛",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "纠",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "母",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "幼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "丝",
	first: pattern_,
	later: []
}

/* 六画 */
Characters[Characters.length] = {
	char: "式",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "刑",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "动",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "扛",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "寺",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "吉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "扣",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "考",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "托",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "老",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "执",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "巩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "圾",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "扩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "扫",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "地",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "扬",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "场",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "耳",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "共",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "芒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "亚",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "芝",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "朽",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "朴",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "机",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "权",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "过",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "臣",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "再",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "协",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "西",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "压",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "厌",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "在",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "有",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "百",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "存",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "而",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "页",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "匠",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "夸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "夺",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "灰",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "达",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "列",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "死",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "成",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "夹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "轨",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "邪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "划",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "迈",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "毕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "至",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "此",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "贞",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "师",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "尘",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "尖",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "劣",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "光",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "当",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "早",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "吐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "吓",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "虫",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "曲",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "团",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "同",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "吊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "吃",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "因",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "吸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "吗",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "屿",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "帆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "岁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "回",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "岂",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "刚",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "则",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "肉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "网",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "年",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "朱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "先",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "丢",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "舌",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "竹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "迁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "乔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "伟",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "传",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "乒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "乓",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "休",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "伍",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "伏",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "优",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "伐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "延",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "件",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "任",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "伤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "价",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "份",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "华",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "仰",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "仿",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "伙",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "伪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "自",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "血",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "向",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "似",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "后",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "行",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "舟",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "全",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "会",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "杀",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "合",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "兆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "企",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "众",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "爷",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "伞",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "创",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "肌",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "朵",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "杂",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "危",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "旬",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "旨",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "负",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "各",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "名",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "多",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "争",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "色",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "壮",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "冲",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "冰",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "庄",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "庆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "亦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "刘",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "齐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "交",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "次",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "衣",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "产",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "决",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "充",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "妄",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "闭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "问",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "闯",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "羊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "并",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "关",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "米",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "灯",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "州",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "汗",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "污",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "江",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "池",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "汤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "忙",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "兴",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "宇",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "守",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "宅",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "字",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "安",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "讲",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "军",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "许",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "论",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "农",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "讽",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "设",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "访",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "寻",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "那",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "迅",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "尽",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "导",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "异",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "孙",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "阵",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "阳",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "收",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "阶",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "阴",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "防",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "奸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "如",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "妇",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "好",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "她",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "妈",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "戏",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "羽",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "观",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "欢",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "买",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "红",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "纤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "级",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "约",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "纪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "驰",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "巡",
	first: pattern_,
	later: []
}

/* 七画 */
Characters[Characters.length] = {
	char: "寿",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "弄",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "麦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "形",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "进",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "戒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "吞",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "远",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "违",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "运",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "扶",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "抚",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "坛",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "技",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "坏",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "扰",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "拒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "找",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "批",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "扯",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "址",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "走",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "抄",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "坝",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "贡",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "攻",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "赤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "折",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "抓",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "扮",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "抢",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "孝",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "均",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "抛",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "投",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "坟",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "抗",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "坑",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "坊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "抖",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "护",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "壳",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "志",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "扭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "块",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "声",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "把",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "报",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "却",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "劫",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "芽",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "花",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "芹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "芬",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "苍",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "芳",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "严",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "芦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "劳",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "克",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "苏",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "杆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "杠",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "杜",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "材",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "村",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "杏",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "极",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "李",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "杨",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "求",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "更",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "束",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "豆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "两",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "丽",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "医",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "辰",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "励",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "否",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "还",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "歼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "来",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "连",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "步",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "坚",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "旱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "盯",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "呈",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "时",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "吴",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "助",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "县",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "里",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "呆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "园",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "旷",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "围",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "呀",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "吨",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "足",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "邮",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "男",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "困",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "吵",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "串",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "员",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "听",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "吩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "吹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "呜",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "吧",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "吼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "别",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "岗",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "帐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "财",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "针",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "钉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "告",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "我",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "乱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "利",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "秃",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "秀",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "私",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "每",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "兵",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "估",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "体",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "何",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "但",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "伸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "作",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "伯",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "伶",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "佣",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "低",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "你",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "住",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "位",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "伴",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "身",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "皂",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "佛",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "近",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "彻",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "役",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "返",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "余",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "希",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "坐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "谷",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "妥",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "含",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "邻",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "岔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "肝",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "肚",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "肠",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "龟",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "免",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "狂",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "犹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "角",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "删",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "条",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "卵",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "岛",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "迎",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "饭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "饮",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "系",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "言",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "冻",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "状",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "亩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "况",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "床",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "库",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "疗",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "应",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "冷",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "这",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "序",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "辛",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "弃",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "冶",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "忘",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "闲",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "间",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "闷",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "判",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "灶",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "灿",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "弟",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "汪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "沙",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "汽",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "沃",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "泛",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "沟",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "没",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "沈",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "沉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "怀",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "忧",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "快",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "完",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "宋",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "宏",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "牢",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "究",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "穷",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "灾",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "良",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "证",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "启",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "评",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "补",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "初",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "社",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "识",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "诉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "诊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "词",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "译",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "君",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "灵",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "即",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "层",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "尿",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "尾",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "迟",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "局",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "改",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "张",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "忌",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "际",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "陆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "阿",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "陈",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "阻",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "附",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "妙",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "妖",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "妨",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "努",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "忍",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "劲",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "鸡",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "驱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "纯",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "纱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "纳",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "纲",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "驳",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "纵",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "纷",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "纸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "纹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "纺",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "驴",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "纽",
	first: pattern_,
	later: []
}

/* 八画 */
Characters[Characters.length] = {
	char: "奉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "玩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "环",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "武",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "青",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "责",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "现",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "表",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "规",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "抹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "拢",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "拔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "拣",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "担",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "坦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "押",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "抽",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "拐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "拖",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "拍",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "者",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "顶",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "拆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "拥",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "抵",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "拘",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "势",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "抱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "垃",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "拉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "拦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "拌",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "幸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "招",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "坡",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "披",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "拨",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "择",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "抬",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "其",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "取",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "苦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "若",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "茂",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "苹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "苗",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "英",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "范",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "直",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "茄",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "茎",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "茅",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "林",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "枝",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "杯",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "柜",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "析",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "板",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "松",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "枪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "构",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "杰",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "述",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "枕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "丧",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "或",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "画",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "卧",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "事",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "刺",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "枣",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "雨",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "卖",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "矿",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "码",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "厕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "奔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "奇",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "奋",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "态",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "欧",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "垄",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "妻",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "轰",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "顷",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "转",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "斩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "轮",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "软",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "到",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "非",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "叔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "肯",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "齿",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "些",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "虎",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "虏",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "肾",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "贤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "尚",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "旺",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "具",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "果",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "味",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "昆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "国",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "昌",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "畅",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "明",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "易",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "昂",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "典",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "固",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "忠",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "咐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "呼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "鸣",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "咏",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "呢",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "岸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "岩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "帖",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "罗",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "帜",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "岭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "凯",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "败",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "贩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "购",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "图",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "钓",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "制",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "知",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "垂",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "牧",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "物",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "乖",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "刮",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "秆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "和",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "季",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "委",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "佳",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "侍",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "供",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "使",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "例",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "版",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "侄",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "侦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "侧",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "凭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "侨",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "佩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "货",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "依",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "的",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "迫",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "质",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "欣",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "征",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "往",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "爬",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "彼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "径",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "所",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "舍",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "金",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "命",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "斧",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "爸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "采",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "受",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "乳",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "贪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "念",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "贫",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "肤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "肺",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "肢",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "肿",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "胀",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "朋",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "股",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "肥",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "服",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "胁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "周",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "昏",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "鱼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "兔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "狐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "忽",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "狗",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "备",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "饰",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "饱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "饲",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "变",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "京",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "享",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "店",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "夜",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "庙",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "府",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "底",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "剂",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "郊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "废",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "净",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "盲",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "放",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "刻",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "育",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "闸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "闹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "郑",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "券",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "卷",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "单",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "炒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "炊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "炕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "炎",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "炉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "沫",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "浅",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "法",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "泄",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "河",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "沾",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "泪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "油",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "泊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "沿",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "泡",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "注",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "泻",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "泳",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "泥",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "沸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "波",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "泼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "泽",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "治",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "怖",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "性",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "怕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "怜",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "怪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "学",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "宝",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "宗",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "定",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "宜",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "审",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "宙",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "官",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "空",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "帘",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "实",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "试",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "郎",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "诗",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "肩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "房",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "诚",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "衬",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "衫",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "视",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "话",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "诞",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "询",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "该",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "详",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "建",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "肃",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "录",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "隶",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "居",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "届",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "刷",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "屈",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "弦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "承",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "孟",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "孤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "陕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "降",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "限",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "妹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "姑",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "姐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "姓",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "始",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "驾",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "参",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "艰",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "线",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "练",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "组",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "细",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "驶",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "织",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "终",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "驻",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "驼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "绍",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "经",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "贯",
	first: pattern_,
	later: []
}

/* 九画 */
Characters[Characters.length] = {
	char: "奏",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "春",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "帮",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "珍",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "玻",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "毒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "型",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "挂",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "封",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "持",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "项",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "垮",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "挎",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "城",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "挠",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "政",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "赴",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "赵",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "挡",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "挺",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "括",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "拴",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "拾",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "挑",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "指",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "垫",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "挣",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "挤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "拼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "挖",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "按",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "挥",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "挪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "某",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "甚",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "革",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "荐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "巷",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "带",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "草",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "茧",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "茶",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "荒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "茫",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "荡",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "荣",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "故",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "胡",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "南",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "药",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "标",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "枯",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "柄",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "栋",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "相",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "查",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "柏",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "柳",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "柱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "柿",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "栏",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "树",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "要",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "咸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "威",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "歪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "研",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "砖",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "厘",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "厚",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "砌",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "砍",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "面",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "耐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "耍",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "牵",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "残",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "殃",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "轻",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "鸦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "皆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "背",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "战",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "点",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "临",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "览",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "竖",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "省",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "削",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "尝",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "是",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "盼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "眨",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "哄",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "显",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "哑",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "冒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "映",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "星",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "昨",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "畏",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "趴",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "胃",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "贵",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "界",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "虹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "虾",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蚁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "思",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蚂",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "虽",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "品",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "咽",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "骂",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "哗",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "咱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "响",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "哈",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "咬",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "咳",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "哪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "炭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "峡",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "罚",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "贱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "贴",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "骨",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "钞",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "钟",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "钢",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "钥",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "钩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "卸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "缸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "拜",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "看",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "矩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "怎",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "牲",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "选",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "适",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "秒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "香",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "种",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "秋",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "科",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "重",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "复",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "竿",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "段",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "便",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "俩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "贷",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "顺",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "修",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "保",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "促",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "侮",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "俭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "俗",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "俘",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "信",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "皇",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "泉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "鬼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "侵",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "追",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "俊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "盾",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "待",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "律",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "很",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "须",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "叙",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "剑",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "逃",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "食",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "盆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "胆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "胜",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "胞",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "胖",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "脉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "勉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "狭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "狮",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "独",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "狡",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "狱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "狠",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "贸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "怨",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "急",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "饶",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蚀",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "饺",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "饼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "弯",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "将",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "奖",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "哀",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "亭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "亮",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "度",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "迹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "庭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "疮",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "疯",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "疫",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "疤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "姿",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "亲",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "音",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "帝",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "施",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "闻",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "阀",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "阁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "差",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "养",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "美",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "姜",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "叛",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "送",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "类",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "迷",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "前",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "首",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "逆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "总",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "炼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "炸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "炮",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "烂",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "剃",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "洁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "洪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "洒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "浇",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "浊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "洞",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "测",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "洗",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "活",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "派",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "洽",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "染",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "济",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "洋",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "洲",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "浑",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "浓",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "津",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "恒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "恢",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "恰",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "恼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "恨",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "举",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "觉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "宣",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "室",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "宫",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "宪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "突",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "穿",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "窃",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "客",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "冠",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "语",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "扁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "袄",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "祖",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "神",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "祝",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "误",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "诱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "说",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "诵",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "垦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "退",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "既",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "屋",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "昼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "费",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "陡",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "眉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "孩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "除",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "险",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "院",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "娃",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "姥",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "姨",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "姻",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "娇",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "怒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "架",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "贺",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "盈",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "勇",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "怠",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "柔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "垒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "绑",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "绒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "结",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "绕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "骄",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "绘",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "给",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "络",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "骆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "绝",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "绞",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "统",
	first: pattern_,
	later: []
}

/* 十画 */
Characters[Characters.length] = {
	char: "耕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "耗",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "艳",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "泰",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "珠",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "班",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "素",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蚕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "顽",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "盏",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "匪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "捞",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "栽",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "捕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "振",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "载",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "赶",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "起",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "盐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "捎",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "捏",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "埋",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "捉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "捆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "捐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "损",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "都",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "哲",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "逝",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "捡",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "换",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "挽",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "热",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "恐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "壶",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "挨",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "耻",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "耽",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "恭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "莲",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "莫",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "荷",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "获",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "晋",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "恶",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "真",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "框",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "桂",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "档",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "桐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "株",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "桥",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "桃",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "格",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "校",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "核",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "样",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "根",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "索",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "哥",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "速",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "逗",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "栗",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "配",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "翅",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "辱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "唇",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "夏",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "础",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "破",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "原",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "套",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "逐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "烈",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "殊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "顾",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "轿",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "较",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "顿",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "毙",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "致",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "柴",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "桌",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "虑",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "监",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "紧",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "党",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "晒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "眠",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "晓",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "鸭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "晃",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "晌",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "晕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蚊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "哨",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "哭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "恩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "唤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "啊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "唉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "罢",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "峰",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "圆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "贼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "贿",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "钱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "钳",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "钻",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "铁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "铃",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "铅",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "缺",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "氧",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "特",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "牺",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "造",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "乘",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "敌",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "秤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "租",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "积",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "秧",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "秩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "称",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "秘",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "透",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "笔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "笑",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "笋",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "债",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "借",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "值",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "倚",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "倾",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "倒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "倘",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "俱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "倡",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "候",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "俯",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "倍",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "倦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "健",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "臭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "射",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "躬",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "息",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "徒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "徐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "舰",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "舱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "般",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "航",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "途",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "拿",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "爹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "爱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "颂",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "翁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "脆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "脂",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "胸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "胳",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "脏",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "胶",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "脑",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "狸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "狼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "逢",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "留",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "皱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "饿",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "恋",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "桨",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "浆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "衰",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "高",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "席",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "准",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "座",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "脊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "症",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "病",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "疾",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "疼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "疲",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "效",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "离",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "唐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "资",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "凉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "站",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "剖",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "竞",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "部",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "旁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "旅",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "畜",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "阅",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "羞",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "瓶",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "拳",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "粉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "料",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "益",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "兼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "烤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "烘",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "烦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "烧",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "烛",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "烟",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "递",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "涛",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "浙",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "涝",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "酒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "涉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "消",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "浩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "海",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "涂",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "浴",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "浮",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "流",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "润",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "浪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "浸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "涨",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "烫",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "涌",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "悟",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "悄",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "悔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "悦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "害",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "宽",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "家",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "宵",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "宴",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "宾",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "窄",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "容",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "宰",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "案",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "请",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "朗",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "诸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "读",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "扇",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "袜",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "袖",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "袍",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "被",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "祥",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "课",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "谁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "调",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "冤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "谅",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "谈",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "谊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "剥",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "恳",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "展",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "剧",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "屑",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "弱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "陵",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "陶",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "陷",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "陪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "娱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "娘",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "通",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "能",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "难",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "预",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "桑",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "绢",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "绣",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "验",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "继",
	first: pattern_,
	later: []
}

/* 十一画 */
Characters[Characters.length] = {
	char: "球",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "理",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "捧",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "堵",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "描",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "域",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "掩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "捷",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "排",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "掉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "堆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "推",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "掀",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "授",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "教",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "掏",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "掠",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "培",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "接",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "控",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "探",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "据",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "掘",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "职",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "基",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "著",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "勒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "黄",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "萌",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "萝",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "菌",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "菜",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "萄",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "菊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "萍",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "菠",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "营",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "械",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "梦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "梢",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "梅",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "检",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "梳",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "梯",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "桶",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "救",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "副",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "票",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "戚",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "爽",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "聋",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "袭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "盛",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "雪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "辅",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "辆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "虚",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "雀",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "堂",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "常",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "匙",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "晨",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "睁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "眯",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "眼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "悬",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "野",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "啦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "晚",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "啄",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "距",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "跃",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "略",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蛇",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "累",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "唱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "患",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "唯",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "崖",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "崭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "崇",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "圈",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "铜",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "铲",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "银",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "甜",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "梨",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "犁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "移",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "笨",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "笼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "笛",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "符",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "第",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "敏",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "做",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "袋",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "悠",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "偿",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "偶",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "偷",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "您",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "售",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "停",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "偏",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "假",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "得",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "衔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "盘",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "船",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "斜",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "盒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "鸽",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "悉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "欲",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "彩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "领",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "脚",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "脖",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "脸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "脱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "象",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "够",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "猜",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "猪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "猎",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "猫",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "猛",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "馅",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "馆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "凑",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "减",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "毫",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "麻",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "痒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "痕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "廊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "康",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "庸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "鹿",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "盗",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "章",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "竟",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "商",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "族",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "旋",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "望",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "率",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "着",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "盖",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "粘",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "粗",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "粒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "断",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "剪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "兽",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "清",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "添",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "淋",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "淹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "渠",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "渐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "混",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "渔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "淘",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "液",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "淡",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "深",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "婆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "梁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "渗",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "情",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "惜",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "惭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "悼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "惧",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "惕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "惊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "惨",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "惯",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "寇",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "寄",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "宿",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "窑",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "密",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "谋",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "谎",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "祸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "谜",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "逮",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "敢",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "屠",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "弹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "随",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蛋",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "隆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "隐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "婚",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "婶",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "颈",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "绩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "绪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "续",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "骑",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "绳",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "维",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "绵",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "绸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "绿",
	first: pattern_,
	later: []
}

/* 十二画 */
Characters[Characters.length] = {
	char: "琴",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "斑",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "替",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "款",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "堪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "搭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "塔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "越",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "趁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "趋",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "超",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "提",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "堤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "博",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "揭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "喜",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "插",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "揪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "搜",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "煮",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "援",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "裁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "搁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "搂",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "搅",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "握",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "揉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "斯",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "期",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "欺",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "联",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "散",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "惹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "葬",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "葛",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "董",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "葡",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "敬",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "葱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "落",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "朝",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "辜",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "葵",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "棒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "棋",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "植",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "森",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "椅",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "椒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "棵",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "棍",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "棉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "棚",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "棕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "惠",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "惑",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "逼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "厨",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "厦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "硬",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "确",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "雁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "殖",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "裂",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "雄",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "暂",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "雅",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "辈",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "悲",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "紫",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "辉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "敞",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "赏",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "掌",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "晴",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "暑",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "最",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "量",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "喷",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "晶",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "喇",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "遇",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "喊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "景",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "践",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "跌",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "跑",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "遗",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蛙",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蛛",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蜓",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "喝",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "喂",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "喘",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "喉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "幅",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "帽",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "赌",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "赔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "黑",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "铸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "铺",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "链",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "销",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "锁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "锄",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "锅",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "锈",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "锋",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "锐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "短",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "智",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "毯",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "鹅",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "剩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "稍",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "程",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "稀",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "税",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "筐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "等",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "筑",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "策",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "筛",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "筒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "答",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "筋",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "筝",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "傲",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "傅",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "牌",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "堡",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "集",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "焦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "傍",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "储",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "奥",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "街",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "惩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "御",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "循",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "艇",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "舒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "番",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "释",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "禽",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "腊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "脾",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "腔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "鲁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "猾",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "猴",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "然",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "馋",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "装",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蛮",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "就",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "痛",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "童",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "阔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "善",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "羡",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "普",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "粪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "尊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "道",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "曾",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "焰",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "港",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "湖",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "渣",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "湿",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "温",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "渴",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "滑",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "湾",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "渡",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "游",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "滋",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "溉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "愤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "慌",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "惰",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "愧",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "愉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "慨",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "割",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "寒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "富",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "窜",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "窝",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "窗",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "遍",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "裕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "裤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "裙",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "谢",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "谣",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "谦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "属",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "屡",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "强",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "粥",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "疏",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "隔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "隙",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "絮",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "嫂",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "登",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "缎",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "缓",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "编",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "骗",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "缘",
	first: pattern_,
	later: []
}

/* 十三画 */
Characters[Characters.length] = {
	char: "瑞",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "魂",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "肆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "摄",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "摸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "填",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "搏",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "塌",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "鼓",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "摆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "携",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "搬",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "摇",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "搞",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "塘",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "摊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蒜",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "勤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "鹊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蓝",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "墓",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "幕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蓬",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蓄",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蒙",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蒸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "献",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "禁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "楚",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "想",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "槐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "榆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "楼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "概",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "赖",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "酬",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "感",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "碍",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "碑",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "碎",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "碰",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "碗",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "碌",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "雷",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "零",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "雾",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "雹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "输",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "督",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "龄",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "鉴",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "睛",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "睡",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "睬",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "鄙",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "愚",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "暖",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "盟",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "歇",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "暗",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "照",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "跨",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "跳",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "跪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "路",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "跟",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "遣",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蛾",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蜂",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "嗓",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "置",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "罪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "罩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "错",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "锡",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "锣",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "锤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "锦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "键",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "锯",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "矮",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "辞",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "稠",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "愁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "筹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "签",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "简",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "毁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "舅",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "鼠",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "催",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "傻",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "像",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "躲",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "微",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "愈",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "遥",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "腰",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "腥",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "腹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "腾",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "腿",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "触",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "解",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "酱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "痰",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "廉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "新",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "韵",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "意",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "粮",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "数",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "煎",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "塑",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "慈",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "煤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "煌",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "满",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "漠",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "源",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "滤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "滥",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "滔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "溪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "溜",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "滚",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "滨",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "粱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "滩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "慎",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "誉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "塞",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "谨",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "福",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "群",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "殿",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "辟",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "障",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "嫌",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "嫁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "叠",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "缝",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "缠",
	first: pattern_,
	later: []
}

/* 十四画 */
Characters[Characters.length] = {
	char: "静",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "碧",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "璃",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "墙",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "撇",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "嘉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "摧",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "截",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "誓",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "境",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "摘",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "摔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "聚",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蔽",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "慕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "暮",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蔑",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "模",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "榴",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "榜",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "榨",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "歌",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "遭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "酷",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "酿",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "酸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "磁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "愿",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "需",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "弊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "裳",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "颗",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "嗽",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蜻",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蜡",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蝇",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蜘",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "赚",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "锹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "锻",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "舞",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "稳",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "算",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "箩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "管",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "僚",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "鼻",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "魄",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "貌",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "膜",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "膊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "膀",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "鲜",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "疑",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "馒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "裹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "敲",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "豪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "膏",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "遮",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "腐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "瘦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "辣",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "竭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "端",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "旗",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "精",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "歉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "熄",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "熔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "漆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "漂",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "漫",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "滴",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "演",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "漏",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "慢",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "寨",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "赛",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "察",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蜜",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "谱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "嫩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "翠",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "熊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "凳",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "骡",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "缩",
	first: pattern_,
	later: []
}

/* 十五画 */
Characters[Characters.length] = {
	char: "慧",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "撕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "撒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "趣",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "趟",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "撑",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "播",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "撞",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "撤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "增",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "聪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "鞋",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蕉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蔬",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "横",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "槽",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "樱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "橡",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "飘",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "醋",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "醉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "震",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "霉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "瞒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "题",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "暴",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "瞎",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "影",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "踢",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "踏",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "踩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "踪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蝶",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蝴",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "嘱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "墨",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "镇",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "靠",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "稻",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "黎",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "稿",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "稼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "箱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "箭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "篇",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "僵",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "躺",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "僻",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "德",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "艘",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "膝",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "膛",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "熟",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "摩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "颜",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "毅",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "糊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "遵",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "潜",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "潮",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "懂",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "额",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "慰",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "劈",
	first: pattern_,
	later: []
}

/* 十六画 */
Characters[Characters.length] = {
	char: "操",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "燕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "薯",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "薪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "薄",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "颠",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "橘",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "整",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "融",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "醒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "餐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "嘴",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蹄",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "器",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "赠",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "默",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "镜",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "赞",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "篮",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "邀",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "衡",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "膨",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "雕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "磨",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "凝",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "辨",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "辩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "糖",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "糕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "燃",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "澡",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "激",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "懒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "壁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "避",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "缴",
	first: pattern_,
	later: []
}

/* 十七画 */
Characters[Characters.length] = {
	char: "戴",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "擦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "鞠",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "藏",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "霜",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "霞",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "瞧",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蹈",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "螺",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "穗",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "繁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "辫",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "赢",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "糟",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "糠",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "燥",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "臂",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "翼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "骤",
	first: pattern_,
	later: []
}

/* 十八画 */
Characters[Characters.length] = {
	char: "鞭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "覆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蹦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "镰",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "翻",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "鹰",
	first: pattern_,
	later: []
}

/* 十九画 */
Characters[Characters.length] = {
	char: "警",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "攀",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蹲",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "颤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "瓣",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "爆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "疆",
	first: pattern_,
	later: []
}

/* 二十画 */
Characters[Characters.length] = {
	char: "壤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "耀",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "躁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "嚼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "嚷",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "籍",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "魔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "灌",
	first: pattern_,
	later: []
}

/* 二十一画 */
Characters[Characters.length] = {
	char: "蠢",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "霸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "露",
	first: pattern_,
	later: []
}

/* 二十二画 */
Characters[Characters.length] = {
	char: "囊",
	first: pattern_,
	later: []
}

/* 二十三画 */
Characters[Characters.length] = {
	char: "罐",
	first: pattern_,
	later: []
}

/*《现代汉语常用字表》之二 次常用汉字1000字 笔画顺序表 */

/* 二画 */
Characters[Characters.length] = {
	char: "匕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "刁",
	first: pattern_,
	later: []
}

/* 四画 */
Characters[Characters.length] = {
	char: "丐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "歹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "戈",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "夭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "仑",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "讥",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "冗",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "邓",
	first: pattern_,
	later: []
}

/* 五画 */
Characters[Characters.length] = {
	char: "艾",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "夯",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "凸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "卢",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "叭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "叽",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "皿",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "凹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "囚",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "矢",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "乍",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "尔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "冯",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "玄",
	first: pattern_,
	later: []
}

/* 六画 */
Characters[Characters.length] = {
	char: "邦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "迂",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "邢",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "芋",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "芍",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "吏",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "夷",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "吁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "吕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "吆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "屹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "廷",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "迄",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "臼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "仲",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "伦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "伊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "肋",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "旭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "匈",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "凫",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "妆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "亥",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "汛",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "讳",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "讶",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "讹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "讼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "诀",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "弛",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "阱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "驮",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "驯",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "纫",
	first: pattern_,
	later: []
}

/* 七画 */
Characters[Characters.length] = {
	char: "玖",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "玛",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "韧",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "抠",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "扼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "汞",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "扳",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "抡",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "坎",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "坞",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "抑",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "拟",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "抒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "芙",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "芜",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "苇",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "芥",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "芯",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "芭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "杖",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "杉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "巫",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "杈",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "甫",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "匣",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "轩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "卤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "肖",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "吱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "吠",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "呕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "呐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "吟",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "呛",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "吻",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "吭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "邑",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "囤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "吮",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "岖",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "牡",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "佑",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "佃",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "伺",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "囱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "肛",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "肘",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "甸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "狈",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "鸠",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "彤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "灸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "刨",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "庇",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "吝",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "庐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "闰",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "兑",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "灼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "沐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "沛",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "汰",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "沥",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "沦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "汹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "沧",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "沪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "忱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "诅",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "诈",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "罕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "屁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "坠",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "妓",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "姊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "妒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "纬",
	first: pattern_,
	later: []
}

/* 八画 */
Characters[Characters.length] = {
	char: "玫",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "卦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "坷",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "坯",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "拓",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "坪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "坤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "拄",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "拧",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "拂",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "拙",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "拇",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "拗",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "茉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "昔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "苛",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "苫",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "苟",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "苞",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "茁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "苔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "枉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "枢",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "枚",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "枫",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "杭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "郁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "矾",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "奈",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "奄",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "殴",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "歧",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "卓",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "昙",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "哎",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "咕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "呵",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "咙",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "呻",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "咒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "咆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "咖",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "帕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "账",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "贬",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "贮",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "氛",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "秉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "岳",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "侠",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "侥",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "侣",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "侈",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "卑",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "刽",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "刹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "肴",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "觅",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "忿",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "瓮",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "肮",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "肪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "狞",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "庞",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "疟",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "疙",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "疚",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "卒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "氓",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "炬",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "沽",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "沮",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "泣",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "泞",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "泌",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "沼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "怔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "怯",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "宠",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "宛",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "衩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "祈",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "诡",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "帚",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "屉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "弧",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "弥",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "陋",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "陌",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "函",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "姆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "虱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "叁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "绅",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "驹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "绊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "绎",
	first: pattern_,
	later: []
}

/* 九画 */
Characters[Characters.length] = {
	char: "契",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "贰",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "玷",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "玲",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "珊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "拭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "拷",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "拱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "挟",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "垢",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "垛",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "拯",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "荆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "茸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "茬",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "荚",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "茵",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "茴",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "荞",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "荠",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "荤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "荧",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "荔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "栈",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "柑",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "栅",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "柠",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "枷",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "勃",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "柬",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "砂",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "泵",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "砚",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "鸥",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "轴",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "韭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "虐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "昧",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "盹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "咧",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "昵",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "昭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "盅",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "勋",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "哆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "咪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "哟",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "幽",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "钙",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "钝",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "钠",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "钦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "钧",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "钮",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "毡",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "氢",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "秕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "俏",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "俄",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "俐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "侯",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "徊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "衍",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "胚",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "胧",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "胎",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "狰",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "饵",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "峦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "奕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "咨",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "飒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "闺",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "闽",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "籽",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "娄",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "烁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "炫",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "洼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "柒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "涎",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "洛",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "恃",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "恍",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "恬",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "恤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "宦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "诫",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "诬",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "祠",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "诲",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "屏",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "屎",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "逊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "陨",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "姚",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "娜",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蚤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "骇",
	first: pattern_,
	later: []
}

/* 十画 */
Characters[Characters.length] = {
	char: "耘",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "耙",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "秦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "匿",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "埂",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "捂",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "捍",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "袁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "捌",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "挫",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "挚",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "捣",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "捅",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "埃",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "耿",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "聂",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "荸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "莽",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "莱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "莉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "莹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "莺",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "梆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "栖",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "桦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "栓",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "桅",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "桩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "贾",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "酌",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "砸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "砰",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "砾",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "殉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "逞",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "哮",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "唠",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "哺",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "剔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蚌",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蚜",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "畔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蚣",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蚪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蚓",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "哩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "圃",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "鸯",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "唁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "哼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "唆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "峭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "唧",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "峻",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "赂",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "赃",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "钾",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "铆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "氨",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "秫",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "笆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "俺",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "赁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "倔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "殷",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "耸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "舀",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "豺",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "豹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "颁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "胯",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "胰",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "脐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "脓",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "逛",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "卿",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "鸵",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "鸳",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "馁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "凌",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "凄",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "衷",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "郭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "斋",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "疹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "紊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "瓷",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "羔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "烙",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "浦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "涡",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "涣",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "涤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "涧",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "涕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "涩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "悍",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "悯",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "窍",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "诺",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "诽",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "袒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "谆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "祟",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "恕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "娩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "骏",
	first: pattern_,
	later: []
}

/* 十一画 */
Characters[Characters.length] = {
	char: "琐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "麸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "琉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "琅",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "措",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "捺",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "捶",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "赦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "埠",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "捻",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "掐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "掂",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "掖",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "掷",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "掸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "掺",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "勘",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "聊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "娶",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "菱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "菲",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "萎",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "菩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "萤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "乾",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "萧",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "萨",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "菇",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "彬",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "梗",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "梧",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "梭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "曹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "酝",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "酗",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "厢",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "硅",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "硕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "奢",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "盔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "匾",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "颅",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "彪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "眶",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "晤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "曼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "晦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "冕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "啡",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "畦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "趾",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "啃",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蛆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蚯",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蛉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蛀",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "唬",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "啰",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "唾",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "啤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "啥",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "啸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "崎",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "逻",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "崔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "崩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "婴",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "赊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "铐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "铛",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "铝",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "铡",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "铣",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "铭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "矫",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "秸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "秽",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "笙",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "笤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "偎",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "傀",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "躯",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "兜",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "衅",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "徘",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "徙",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "舶",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "舷",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "舵",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "敛",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "翎",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "脯",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "逸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "凰",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "猖",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "祭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "烹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "庶",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "庵",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "痊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "阎",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "阐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "眷",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "焊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "焕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "鸿",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "涯",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "淑",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "淌",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "淮",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "淆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "渊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "淫",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "淳",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "淤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "淀",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "涮",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "涵",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "惦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "悴",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "惋",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "寂",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "窒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "谍",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "谐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "裆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "袱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "祷",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "谒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "谓",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "谚",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "尉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "堕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "隅",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "婉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "颇",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "绰",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "绷",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "综",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "绽",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "缀",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "巢",
	first: pattern_,
	later: []
}

/* 十二画 */
Characters[Characters.length] = {
	char: "琳",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "琢",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "琼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "揍",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "堰",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "揩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "揽",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "揖",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "彭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "揣",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "搀",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "搓",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "壹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "搔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "葫",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "募",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蒋",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蒂",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "韩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "棱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "椰",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "焚",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "椎",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "棺",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "榔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "椭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "粟",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "棘",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "酣",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "酥",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "硝",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "硫",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "颊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "雳",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "翘",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "凿",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "棠",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "晰",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "鼎",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "喳",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "遏",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "晾",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "畴",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "跋",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "跛",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蛔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蜒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蛤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "鹃",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "喻",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "啼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "喧",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "嵌",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "赋",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "赎",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "赐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "锉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "锌",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "甥",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "掰",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "氮",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "氯",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "黍",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "筏",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "牍",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "粤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "逾",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "腌",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "腋",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "腕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "猩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "猬",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "惫",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "敦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "痘",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "痢",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "痪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "竣",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "翔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "奠",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "遂",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "焙",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "滞",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "湘",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "渤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "渺",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "溃",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "溅",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "湃",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "愕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "惶",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "寓",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "窖",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "窘",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "雇",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "谤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "犀",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "隘",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "媒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "媚",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "婿",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "缅",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "缆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "缔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "缕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "骚",
	first: pattern_,
	later: []
}

/* 十三画 */
Characters[Characters.length] = {
	char: "瑟",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "鹉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "瑰",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "搪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "聘",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "斟",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "靴",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "靶",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蓖",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蒿",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蒲",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蓉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "楔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "椿",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "楷",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "榄",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "楞",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "楣",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "酪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "碘",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "硼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "碉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "辐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "辑",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "频",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "睹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "睦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "瞄",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "嗜",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "嗦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "暇",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "畸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "跷",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "跺",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蜈",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蜗",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蜕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蛹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "嗅",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "嗡",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "嗤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "署",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蜀",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "幌",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "锚",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "锥",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "锨",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "锭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "锰",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "稚",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "颓",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "筷",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "魁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "衙",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "腻",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "腮",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "腺",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "鹏",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "肄",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "猿",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "颖",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "煞",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "雏",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "馍",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "馏",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "禀",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "痹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "廓",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "痴",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "靖",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "誊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "漓",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "溢",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "溯",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "溶",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "滓",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "溺",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "寞",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "窥",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "窟",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "寝",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "褂",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "裸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "谬",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "媳",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "嫉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "缚",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "缤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "剿",
	first: pattern_,
	later: []
}

/* 十四画 */
Characters[Characters.length] = {
	char: "赘",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "熬",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "赫",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蔫",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "摹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蔓",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蔗",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蔼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "熙",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蔚",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "兢",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "榛",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "榕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "酵",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "碟",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "碴",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "碱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "碳",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "辕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "辖",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "雌",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "墅",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "嘁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "踊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蝉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "嘀",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "幔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "镀",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "舔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "熏",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "箍",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "箕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "箫",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "舆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "僧",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "孵",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "瘩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "瘟",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "彰",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "粹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "漱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "漩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "漾",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "慷",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "寡",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "寥",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "谭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "褐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "褪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "隧",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "嫡",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "缨",
	first: pattern_,
	later: []
}

/* 十五画 */
Characters[Characters.length] = {
	char: "撵",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "撩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "撮",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "撬",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "擒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "墩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "撰",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "鞍",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蕊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蕴",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "樊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "樟",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "橄",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "敷",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "豌",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "醇",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "磕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "磅",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "碾",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "憋",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "嘶",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "嘲",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "嘹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蝠",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蝎",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蝌",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蝗",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蝙",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "嘿",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "幢",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "镊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "镐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "稽",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "篓",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "膘",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "鲤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "鲫",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "褒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "瘪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "瘤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "瘫",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "凛",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "澎",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "潭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "潦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "澳",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "潘",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "澈",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "澜",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "澄",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "憔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "懊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "憎",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "翩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "褥",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "谴",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "鹤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "憨",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "履",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "嬉",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "豫",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "缭",
	first: pattern_,
	later: []
}

/* 十六画 */
Characters[Characters.length] = {
	char: "撼",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "擂",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "擅",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蕾",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "薛",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "薇",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "擎",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "翰",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "噩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "橱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "橙",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "瓢",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蟥",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "霍",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "霎",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "辙",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "冀",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "踱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蹂",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蟆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "螃",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "螟",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "噪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "鹦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "黔",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "穆",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "篡",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "篷",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "篙",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "篱",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "儒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "膳",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "鲸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "瘾",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "瘸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "糙",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "燎",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "濒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "憾",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "懈",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "窿",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "缰",
	first: pattern_,
	later: []
}

/* 十七画 */
Characters[Characters.length] = {
	char: "壕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "藐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "檬",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "檐",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "檩",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "檀",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "礁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "磷",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "瞭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "瞬",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "瞳",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "瞪",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "曙",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蹋",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蟋",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蟀",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "嚎",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "赡",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "镣",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "魏",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "簇",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "儡",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "徽",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "爵",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "朦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "臊",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "鳄",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "糜",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "癌",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "懦",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "豁",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "臀",
	first: pattern_,
	later: []
}

/* 十八画 */
Characters[Characters.length] = {
	char: "藕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "藤",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "瞻",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "嚣",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "鳍",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "癞",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "瀑",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "襟",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "璧",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "戳",
	first: pattern_,
	later: []
}

/* 十九画 */
Characters[Characters.length] = {
	char: "攒",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "孽",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蘑",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "藻",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "鳖",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蹭",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蹬",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "簸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "簿",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蟹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "靡",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "癣",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "羹",
	first: pattern_,
	later: []
}

/* 二十画 */
Characters[Characters.length] = {
	char: "鬓",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "攘",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "蠕",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "巍",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "鳞",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "糯",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "譬",
	first: pattern_,
	later: []
}

/* 二十一画 */
Characters[Characters.length] = {
	char: "霹",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "躏",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "髓",
	first: pattern_,
	later: []
}

/* 二十二画 */
Characters[Characters.length] = {
	char: "蘸",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "镶",
	first: pattern_,
	later: []
}
Characters[Characters.length] = {
	char: "瓤",
	first: pattern_,
	later: []
}

/* 二十四画 */
Characters[Characters.length] = {
	char: "矗",
	first: pattern_,
	later: []
}
