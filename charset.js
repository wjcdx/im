/* 结构型：左右 */
var pattern_lr_left_1_right_1_left_big = 1;
var pattern_lr_left_1_right_1_right_big = 2;
var pattern_lr_left_middle_right = 3;
var pattern_lr_left_1_right_2 = 4;
var pattern_lr_left_2_right_1 = 5;
var pattern_lr_left_2_right_2 = 5;
var pattern_lr_left_1_right_many = 6;
var pattern_lr_left_many_right_1 = 7;
var pattern_lr_left_many_right_many = 8;

/* 结构型：上下 */
var pattern_ud_up_1_down_1_up_big = 11;
var pattern_ud_up_1_down_1_down_big = 12;
var pattern_ud_up_middle_down = 13;
var pattern_ud_up_1_down_2 = 14;
var pattern_ud_up_2_down_1 = 15;
var pattern_ud_up_2_down_2 = 15;
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

/* presudo patter */
var pattern_ = 51;

/* 横竖撇捺折 for 独体字 续笔 */
/* na can not be the the first stroke of a character */
var heng                            = 1; 
var ti                              = 2; 
var shu                             = 3; 
var pie                             = 4; 
var na                              = 5; 
var dian                            = 6; 
var zhe                             = 7; 
var hengzheshu                      = 8;  /* 口 */
var hengzhepie                      = 9;  /* 又 */
var henggou                         = 10;  /* 买 */
var shuzheheng                      = 11;  /* 山 */
var shugou                          = 12;  /* 求 */
var shuzheti                        = 13;  /* 长 */
var piezheheng                      = 14;  /* 厶 */
var piezhedian                      = 15;  /* 女 */
var wanshugou                       = 16;  /* 犹，家 */
var nagou                           = 17;  /* 代，戈 */
var hengzheshuzheheng               = 18;  /* 凹 */
var hengzheshuzheti                 = 19;  /* 说，言字旁 */
var hengzheshugou                   = 20;  /* 习 */
var hengzhenagou                    = 21;  /* 飞 */
var shuzhehengzheshu                = 22;  /* 鼎 */
var shuzhehengzhepie                = 23;  /* 专 */
var shuwanhenggou                   = 24;  /* 己，匕 */
var hengzheshuzhehengzheshu         = 25;  /* 凸 */
var hengzheshuzhehengzhepie         = 26;  /* 及 */
var hengzheshuwanhenggou            = 27;  /* 几，乙 */
var hengzhepiezhewanshugou          = 28;  /* 阳 */
var shuzhehengzheshugou             = 29;  /* 与，马 */
var hengzheshuzhehengzheshugou      = 30;  /* 乃，杨 */

/* 其他结构型续笔：部首
 * from 常用汉字正形手册
 */

/* 横起 */
var jiangzikuang    = 1001;  /* 匠 */
var caozitou        = 1002;  /* 草 */
var youzishen       = 1003;  /* 尤，无点 */
var tishoupang      = 1004;  /* 提 */
var shizikuang      = 1005;  /* 式 */
var laozitou        = 1006;  /* 老 */
var chaozipang      = 1007;  /* 朝 */
var h_ten           = 1008;  /* 十 */
var h_chang         = 1009;  /* 厂 */
var h_ding          = 1010;  /* 丁 */
var h_two           = 1011;  /* 二 */
var h_gan           = 1012;  /* 干 */
var h_gong          = 1013;  /* 工 */
var h_qiaoziyou     = 1014;  /* 巧, 右边 */
var h_hengpie       = 1015;  /* 左，左上 */
var h_wan           = 1016;  /* 万 */
var h_che           = 1017;  /* 车 */
var h_cun           = 1018;  /* 寸 */
var h_zhang         = 1019;  /* 丈 */
var h_three         = 1020;  /* 三 */
var h_and           = 1021;  /* 与 */
var h_tu            = 1022;  /* 土 */
var h_kai           = 1023;  /* 开 */
var h_yun           = 1024;  /* 云 */
var h_shi           = 1025;  /* 士 */
var h_stone         = 1026;  /* 石 */
var h_mu            = 1027;  /* 木 */
var h_da            = 1028;  /* 大 */
var h_quan          = 1029;  /* 犬 */
var h_zaizitou      = 1030;  /* 在，去土 */
var h_kui           = 1031;  /* 亏 */
var h_dai           = 1032;  /* 歹 */
var h_ya            = 1033;  /* 牙 */
var h_ge            = 1034;  /* 戈 */
var h_wuzidi        = 1035;  /* 兀 */
var h_xia           = 1036;  /* 下 */
var h_cai           = 1037;  /* 才 */
var h_qu            = 1038;  /* 去 */
var h_gu            = 1039;  /* 古 */
var h_wei           = 1040;  /* 韦 */
var h_zhuan         = 1041;  /* 专 */
var h_five          = 1042;  /* 五 */
var h_xingziyou     = 1043;  /* 行，右边 */
var h_wang          = 1044;  /* 王 */
var h_yu            = 1045;  /* 玉 */
var h_mugou         = 1046;  /* 杀，下部 */
var h_kai           = 1047;  /* 开 */
var h_tian          = 1048;  /* 天 */
var h_yushi         = 1049;  /* 于，于是 */
var h_jing          = 1050;  /* 井 */
var h_piecao        = 1051;  /* 异，下部 */
var h_piefeng       = 1052;  /* 寿，上部 */
var h_qingzitou     = 1053;  /* 青，上部 */
var h_yuan          = 1054;  /* 元 */
var h_fu            = 1055;  /* 夫 */
var h_zhi           = 1056;  /* 支 */
var h_bu            = 1057;  /* 不 */
var h_ju            = 1058;  /* 巨 */
var h_tun           = 1059;  /* 屯 */
var h_ben           = 1060;  /* 本 */
var h_ke            = 1061;  /* 可 */
var h_yuzidi        = 1062;  /* 余，下部 */
var h_budai         = 1063;  /* 布，袋 */
var h_dong          = 1064;  /* 东 */
var h_zheng         = 1065;  /* 正 */
var h_ping          = 1066;  /* 平 */
var h_shiren        = 1067;  /* 示，人 */
var h_jida          = 1068;  /* 击，打 */
var h_fengzitou     = 1069;  /* 奉，上部 */
var h_fengzidi      = 1070;  /* 奉，下部 */
var h_mo            = 1071;  /* 末 */
var h_long          = 1072;  /* 龙 */
var h_you           = 1073;  /* 友 */
var h_jianziyou     = 1074;  /* 拣，右边 */
var h_ye            = 1075;  /* 页 */
var h_erduo         = 1076;  /* 耳 */
var h_erqie         = 1077;  /* 而 */
var h_wuxu          = 1078;  /* 戊 */
var h_qiangzitou    = 1079;  /* 墙，右上 */
var h_chen          = 1080;  /* 臣 */
var h_cizizuo       = 1081;  /* 刺，左边 */
var h_shu           = 1082;  /* 束 */
var h_yushui        = 1083;  /* 雨 */
var h_tai           = 1084;  /* 太 */
var h_zhiyu         = 1085;  /* 至 */
var h_weilai        = 1086;  /* 未 */
var h_xizitou       = 1087;  /* 昔，上面 */
var h_li            = 1088;  /* 吏 */
var h_jinxia        = 1089;  /* 金，下部 */
var h_shushi        = 1090;  /* 肺，右边 */
var h_zhan          = 1091;  /* 栈，右边 */
var h_shijie        = 1092;  /* 世 */
var h_cheng         = 1093;  /* 成 */
var h_jia           = 1094;  /* 夹 */
var h_jiangyouxia   = 1095;  /* 降，右下 */
var h_wuyou         = 1096;  /* 无 */
var h_gewudian      = 1097;  /* 戈，无点 */
var h_ganku         = 1098;  /* 甘 */
var h_qizitou       = 1099;  /* 其，上面 */
var h_caoheng       = 1100;  /* 革，上部 */
var h_daizitou      = 1101;  /* 带，最上 */
var h_bing          = 1102;  /* 丙 */
var h_xiwuzhe       = 1103;  /* 要，上部 */
var chengzikuang    = 1104;  /* 成，咸框 */
var h_baiziyou      = 1105;  /* 拜，右边 */
var h_geng          = 1106;  /* 更 */
var h_liang         = 1107;  /* 两 */
var h_yangzizh      = 1108;  /* 养，中部 */
var h_xi            = 1109;  /* 西 */
var h_jiziyou       = 1110;  /* 既，右边 */
var h_yi            = 1111;  /* 姨，右边 */
var h_gengzizuo     = 1112;  /* 耕，左边 */
var h_feng          = 1113;  /* 丰 */
var zaizikuang      = 1114;  /* 栽，去木 */
var h_fudu          = 1115;  /* 甫 */
var h_chenxing      = 1116;  /* 辰 */
var h_yazhou        = 1117;  /* 亚 */
var h_dingwugou     = 1118;  /* 哥，上框 */
var h_dou           = 1119;  /* 豆 */
var h_youxin        = 1120;  /* 酉，辛 */
var h_hengxiapie    = 1121;  /* 夏，最上 */
var h_sizizuo       = 1122;  /* 肆，左边 */
var h_zhizhu        = 1123;  /* 肆，左边 */
var h_dunti         = 1124;  /* 顿，左边 */
var h_seven         = 1125;  /* 七 */
var h_wa            = 1126;  /* 瓦 */
var h_qiu           = 1127;  /* 求 */
var h_jieziyou      = 1128;  /* 捷，右边 */
var h_yuezili       = 1129;  /* 越，里面 */
var h_huizitou      = 1130;  /* 惠，上部 */
var h_benzitou      = 1131;  /* 贲，上部 */
var h_sanhls        = 1132;  /* 塞，中上 */
var h_qinzizuo      = 1133;  /* 勤，左边 */
var h_caozitou      = 1134;  /* 曹，上部 */
var h_hsishu        = 1135;  /* 舞，一横四竖 */
var h_liaoyoush     = 1136;  /* 燎，右上 */
var h_yinzizhong    = 1137;  /* 寅，中部 */
var zangzikuang     = 1138;  /* 臧，外框 */
var h_nangzitou     = 1139;  /* 囊，最上 */
var h_nue           = 1140;  /* 虐，里面 */
var h_gai           = 1141;  /* 丐 */
var h_wu            = 1142;  /* 巫 */
var h_shixue        = 1143;  /* 妻，上部 */
var h_chi           = 1144;  /* 赤 */
var h_yuwuheng      = 1145;  /* 与，无下横 */
var h_jimei         = 1146;  /* 姬，右边，美 */
var h_guazizhong    = 1147;  /* 寡，中部 */
var h_jian          = 1148;  /* 柬 */

/* 竖起 */
var shangzitou      = 2001;  /* 上 */
var lidaopang       = 2002;  /* 刚 */
var tongzikuang     = 2003;  /* 同 */
var s_kou           = 2004;  /* 口 */
var guangzitou      = 2005;  /* 光 */
var jiangzipang     = 2006;  /* 壮 */
var minzidi         = 2008;  /* 监 */
var huzitou         = 2009;  /* 虎 */
var zuzipang        = 2010;  /* 跟 */
var s_bu            = 2011;  /* 卜 */
var s_jin           = 2012;  /* 巾 */
var s_beizizuo      = 2013;  /* 北，左边 */
var s_ri            = 2014;  /* 日 */
var s_shupie        = 2015;  /* 帅，左边 */
var s_zhi           = 2016;  /* 止 */
var s_bei           = 2017;  /* 贝 */
var s_xiao          = 2018;  /* 小，无钩 */
var s_shao          = 2019;  /* 少 */
var s_shan          = 2020;  /* 山 */
var s_gang          = 2021;  /* 冈 */
var s_zhong         = 2022;  /* 中 */
var s_jian          = 2023;  /* 见 */
var s_shaowud       = 2024;  /* 步，下部 */
var s_liangshu      = 2025;  /* 竖，上左 */
var s_mu            = 2026;  /* 目 */
var s_qie           = 2027;  /* 且 */
var s_you           = 2028;  /* 由 */
var s_tian          = 2029;  /* 田 */
var s_shen          = 2030;  /* 申 */
var s_nei           = 2031;  /* 内 */
var s_yue           = 2032;  /* 月，竖起 */
var s_jia           = 2033;  /* 甲 */
var s_yang          = 2034;  /* 央 */
var s_juzitou       = 2035;  /* 具，上边 */
var s_zhan          = 2036;  /* 占 */
var s_dianzitou     = 2037;  /* 典，上面 */
var s_siwuzhe       = 2038;  /* 罗，上面 */
var s_shi           = 2039;  /* 史 */
var s_zouzidi       = 2040;  /* 走，下面 */
var s_guanzidi      = 2041;  /* 官，下面 */
var s_chu           = 2042;  /* 出 */
var s_guanzitou     = 2043;  /* 贯 */
var s_gezidi        = 2044;  /* 革，下面 */
var s_chong         = 2045;  /* 虫 */
var s_li            = 2046;  /* 里 */
var s_daori         = 2047;  /* 临，右下 */
var s_ye            = 2048;  /* 业 */
var s_guizitou      = 2049;  /* 贵，上部 */
var s_guzitou       = 2050;  /* 骨，去月 */
var s_bianzili      = 2051;  /* 扁，里面 */
var s_yong          = 2052;  /* 用，竖起 */
var s_fei           = 2053;  /* 非 */
var s_hguankou      = 2054;  /* 衰，中间，横贯口 */
var s_guo           = 2055;  /* 果 */
var s_dian          = 2056;  /* 电 */
var s_shuzizuo      = 2057;  /* 叔，左边 */
var s_chuan         = 2058;  /* 串 */
var s_yu            = 2059;  /* 禺 */
var s_danzidi       = 2060;  /* 单，下部 */
var s_heizitou      = 2061;  /* 黑，上部 */
var s_zengzizh      = 2062;  /* 曾，中间 */
var s_dingxiayou    = 2063;  /* 鼎，下右 */
var s_dianshui      = 2064;  /* 犀，里上 */
var s_mianzidi      = 2065;  /* 面，下部 */

/* 撇起 */
var danrenpang      = 3001;  /* 化 */
var weizitou        = 3002;  /* 危 */
var baozitou        = 3003;  /* 包 */
var fengzitou       = 3004;  /* 凤 */
var tubaogai        = 3005;  /* 军 */
var shuangrenpang   = 3006;  /* 很 */
var sanpie          = 3007;  /* 形 */
var fanquanpang     = 3008;  /* 狼 */
var zhewen          = 3009;  /* 条 */
var shichi          = 3010;  /* 饭 */
var fanwenpang      = 3011;  /* 故 */
var caizitou        = 3012;  /* 采 */
var jinzipang       = 3013;  /* 银 */
var zhuzitou        = 3014;  /* 第 */
var fanzitou        = 3015;  /* 番 */
var baozipang       = 3016;  /* 豹 */
var quezipang       = 3017;  /* 雄 */
var pieheng         = 3018;  /* 乞，上部 */
var p_ji            = 3019;  /* 几 */
var cha             = 3020;  /* 区，里面 */
var p_er            = 3021;  /* 儿 */
var p_bi            = 3022;  /* 匕 */
var p_nine          = 3023;  /* 九 */
var p_ren           = 3024;  /* 人 */
var pieshu          = 3025;  /* 介，下部 */
var p_eight         = 3026;  /* 八 */
var liangpie        = 3027;  /* 勿，里面 */
var p_xi            = 3028;  /* 夕 */
var p_chuan         = 3029;  /* 川 */
var p_tuoziyou      = 3030;  /* 托，右边 */
var p_wan           = 3031;  /* 丸 */
var p_fan           = 3032;  /* 凡 */
var p_jige          = 3033;  /* 及，格 */
var p_yue           = 3034;  /* 月 */
var p_bai           = 3035;  /* 白 */
var p_jin           = 3036;  /* 斤 */
var p_najiu         = 3037;  /* 轨，右边 */
var p_she           = 3038;  /* 舌 */
var p_thousand      = 3039;  /* 千 */
var p_yao           = 3040;  /* 夭 */
var p_qiu           = 3041;  /* 丘 */
var p_yanzili       = 3042;  /* 延，里面 */
var p_rengui        = 3043;  /* 壬 */
var p_niu           = 3044;  /* 牛 */
var p_jie           = 3045;  /* 介 */
var p_fen           = 3046;  /* 分 */
var p_angzizuo      = 3047;  /* 卬，左边 */
var p_maozizuo      = 3048;  /* 卯，左边 */
var p_fu            = 3049;  /* 父 */
var p_qian          = 3050;  /* 欠 */
var p_wu            = 3051;  /* 午 */
var p_lun           = 3052;  /* 仑 */
var p_shao          = 3053;  /* 勺 */
var p_zhao          = 3054;  /* 爪 */
var p_cang          = 3055;  /* 仓 */
var p_yun           = 3056;  /* 匀 */
var p_rong          = 3057;  /* 冗 */
var p_shi           = 3058;  /* 矢 */
var p_wuya          = 3059;  /* 乌 */
var p_chang         = 3060;  /* 长 */
var p_niuwuwei      = 3061;  /* 告，上面 */
var p_he            = 3062;  /* 禾 */
var p_zha           = 3063;  /* 乍 */
var p_ling          = 3064;  /* 令 */
var p_yong          = 3065;  /* 用 */
var p_di            = 3066;  /* 氐 */
var p_shizu         = 3067;  /* 氏 */
var p_erya          = 3068;  /* 尔 */
var p_fanzhi        = 3069;  /* 反 */
var p_jintian       = 3070;  /* 今 */
var p_ce            = 3071;  /* 册 */
var p_niaowuheng    = 3072;  /* 鸟，无横 */
var p_qi            = 3073;  /* 气 */
var p_gou           = 3074;  /* 勾 */
var p_shenziyou     = 3075;  /* 沈，右边 */
var p_mao           = 3076;  /* 毛 */
var p_pi            = 3077;  /* 皮 */
var p_gong          = 3078;  /* 公 */
var p_yizidi        = 3079;  /* 衣，下部 */
var p_wuyou         = 3080;  /* 勿 */
var p_hu            = 3081;  /* 乎 */
var p_zhizizuo      = 3082;  /* 制，左边 */
var p_pian          = 3083;  /* 片 */
var zhouzikuang     = 3084;  /* 周，外框 */
var p_gua           = 3085;  /* 瓜 */
var p_yedian        = 3086;  /* 夜，下右 */
var p_sheng         = 3087;  /* 生 */
var p_zhaotou       = 3088;  /* 兆，头 */
var p_zheng         = 3089;  /* 争 */
var p_liuzidi       = 3090;  /* 流，右下 */
var p_zhutouban     = 3091;  /* 临，右上 */
var p_fa            = 3092;  /* 乏 */
var p_zi            = 3093;  /* 自 */
var p_xiangzikuang  = 3094;  /* 向 */
var p_xiezizuo      = 3095;  /* 卸，左边 */
var p_gangwa        = 3096;  /* 缸，左边 */
var p_baizizuo      = 3097;  /* 拜，左边 */
var p_duanzizuo     = 3098;  /* 段，左边 */
var p_zhuizili      = 3099;  /* 追，里边 */
var p_mian          = 3100;  /* 免 */
var p_maoshangzuo   = 3101;  /* 贸，上左 */
var p_paiyouli      = 3102;  /* 派，右里 */
var p_nong          = 3103;  /* 农 */
var p_zhu           = 3104;  /* 朱 */
var p_huan          = 3105;  /* 奂 */
var p_shiqu         = 3106;  /* 失，去 */
var p_shen          = 3107;  /* 身 */
var p_zhou          = 3108;  /* 舟 */
var p_shou          = 3109;  /* 手 */
var p_wo            = 3110;  /* 我 */
var p_jiu           = 3111;  /* 臼 */
var piedian         = 3112;  /* 率，中最右 */
var p_zhong         = 3113;  /* 重 */
var p_cheng         = 3114;  /* 乘 */
var p_beizitou      = 3115;  /* 卑，上部 */
var aozikuang       = 3116;  /* 奥，上框 */
var p_xidian        = 3117;  /* 然，上左 */
var p_gui           = 3118;  /* 鬼 */
var p_yu            = 3119;  /* 禹 */
var p_chui          = 3120;  /* 垂 */
var p_xiang         = 3121;  /* 象 */
var p_juzidi        = 3122;  /* 聚，下部 */
var p_dan           = 3123;  /* 丹 */
var p_zimei         = 3124;  /* 姊，右边 */
var p_ju            = 3125;  /* 句 */
var p_le            = 3126;  /* 乐 */
var p_yinzizuo      = 3127;  /* 殷，左边 */
var p_cong          = 3128;  /* 囱 */
var p_xun           = 3129;  /* 熏，上部 */
var p_yushangzuo    = 3130;  /* 舆，上左 */

/* 捺起 */
var liuzitou        = 4001;  /* 六 */
var liangdianshui   = 4002;  /* 次 */
var lanzitou        = 4003;  /* 兰 */
var yanzipang       = 4004;  /* 语 */
var baogaitou       = 4005;  /* 安 */
var sandianshui     = 4006;  /* 江 */
var zouzhidi        = 4007;  /* 过 */
var huozipang       = 4008;  /* 火 */
var sidiandi        = 4009;  /* 点 */
var shizipang       = 4010;  /* 视 */
var bingzitou       = 4011;  /* 病 */
var buyipang        = 4012;  /* 补 */
var pieweiyang      = 4013;  /* 差 */
var yangzitou       = 4014;  /* 羔 */
var jinzidi         = 4015;  /* 今，下边 */
var shuxinpang      = 2007;  /* 怀 */
var d_zhi           = 4016;  /* 之 */
var d_men           = 4017;  /* 门 */
var d_yi            = 4018;  /* 义 */
var d_lingzidi      = 4019;  /* 令 */
var d_ld_sl         = 4020;  /* 冬 */
var d_guang         = 4021;  /* 广 */
var d_wang          = 4022;  /* 亡 */
var d_fang          = 4023;  /* 方 */
var d_wei           = 4024;  /* 为 */
var d_wen           = 4025;  /* 文 */
var d_mi            = 4026;  /* 米 */
var d_zhou          = 4027;  /* 州 */
var d_xingzitou     = 4028;  /* 兴，上面，不带横 */
var d_tou           = 4029;  /* 头 */
var d_kang          = 4030;  /* 亢 */
var d_dou           = 4031;  /* 斗 */
var d_hu            = 4032;  /* 户 */
var d_xin           = 4033;  /* 心 */
var d_zhu           = 4034;  /* 主 */
var d_li            = 4035;  /* 立 */
var d_ban           = 4036;  /* 半 */
var d_panzizuo      = 4037;  /* 判，左边 */
var xuezitou        = 4038;  /* 究，上边 */
var d_lan           = 4039;  /* 兰 */
var d_yong          = 4040;  /* 永 */
var d_yifu          = 4041;  /* 衣 */
var d_bianzitou     = 4042;  /* 变，上部 */
var d_jiao          = 4043;  /* 交 */
var d_hai           = 4044;  /* 亥 */
var d_chongzitou    = 4045;  /* 充，上面 */
var d_shi           = 4046;  /* 市 */
var d_guan          = 4047;  /* 关 */
var d_juanzitou     = 4048;  /* 卷，上面 */
var d_yang          = 4049;  /* 羊 */
var d_xinzidi       = 4050;  /* 辛，去点横 */
var d_yan           = 4051;  /* 言 */
var d_yiye          = 4052;  /* 亦 */
var d_ni            = 4053;  /* 逆，里面 */
var d_dianpie       = 4054;  /* 班，里面 */
var d_liang         = 4055;  /* 良 */
var d_jizitou       = 4056;  /* 脊，上部 */
var d_jian          = 4057;  /* 兼 */
var d_langzizuo     = 4058;  /* 朗，左边 */
var d_chan          = 4059;  /* 产 */
var d_gezili        = 4060;  /* 隔，右下里 */
var d_zu            = 4061;  /* 卒 */
var d_bizizuo       = 4062;  /* 敝，左边 */

/* 折起 */
var fanzipang       = 5001;  /* 反 */
var xiongzikuang    = 5002;  /* 画 */
var danerpang       = 5003;  /* 印 */
var zuoerpang       = 5004;  /* 阳 */
var youerpang       = 5005;  /* 那 */
var sigong          = 5006;  /* 私 */
var jianzidi        = 5007;  /* 建 */
var luzitou         = 5008;  /* 录 */
var xunzitou        = 5009;  /* 寻 */
var jiaosipang      = 5010;  /* 红 */
var youzipang       = 5011;  /* 幼 */
var sanzhe          = 5012;  /* 巡 */
var shuxindi        = 5013;  /* 恭 */
var dengzitou       = 5014;  /* 登 */
var jianzili        = 5015;  /* 聿 */
var kenzitou        = 5016;  /* 垦 */
var yi              = 5017;  /* 乙 */
var z_you           = 5018; 
var z_li            = 5019;  /* 力 */
var z_zuokai        = 5020;  /* 巨，里面 */
var z_dao           = 5021;  /* 刀 */
var z_nai           = 5022;  /* 乃 */
var cangzidi        = 5023;  /* 仓，下部 */
var z_gong          = 5024; 
var z_zi            = 5025;  /* 子 */
var shutidian       = 5026; 
var z_shouzizuo     = 5027;  /* 收，左边 */
var z_ye            = 5028;  /* 也 */
var z_xunziyou      = 5029;  /* 讯，右边 */
var z_ji            = 5030;  /* 己 */
var z_shizitou      = 5031;  /* 尸 */
var z_le            = 5032;  /* 了 */
var z_nv            = 5033;  /* 女 */
var z_siziban       = 5034;  /* 丝，上一半 */
var z_yangziyou     = 5035;  /* 杨，右边 */
var z_ban           = 5036;  /* 办 */
var z_xiao          = 5037;  /* 小，有钩 */
var z_ma            = 5038;  /* 马 */
var z_xuechuheng    = 5039;  /* 聿，上部 */
var z_ba            = 5040;  /* 巴 */
var z_shui          = 5041;  /* 水 */
var z_jueziyou      = 5042;  /* 决，右边 */
var z_nazizuo       = 5043;  /* 那，左边 */
var z_chi           = 5044;  /* 尺 */
var z_si            = 5045;  /* 巳 */
var z_yijing        = 5046;  /* 已 */
var z_xi            = 5047;  /* 习 */
var z_chou          = 5048;  /* 丑 */
var z_meizitou      = 5049;  /* 眉，上部 */
var z_baoziyou      = 5050;  /* 报，右边 */
var z_mu            = 5051;  /* 母 */
var z_fu            = 5052;  /* 弗 */
var z_yu            = 5053;  /* 予 */
var z_siyi          = 5054;  /* 司 */
var z_yiziyou       = 5055;  /* 译，右边 */
var z_yin           = 5056;  /* 尹 */
var z_jizizuo       = 5057;  /* 即，左边 */
var z_jingziyou     = 5058;  /* 经，右边 */
var z_fa            = 5059;  /* 发 */
var z_sangzidi      = 5060;  /* 丧，下边 */
var z_dianshui      = 5061;  /* 泰，下面 */
var z_lishu         = 5062;  /* 隶，属 */
var z_dizidi        = 5063;  /* 第，下面 */
var z_yongzitou     = 5064;  /* 甬，上面 */
var z_mao           = 5065;  /* 矛 */
var z_eti           = 5066;  /* 顾，左里 */
var z_min           = 5067;  /* 民 */
var z_houzitou      = 5068;  /* 侯，右上 */
var z_tangzili      = 5069;  /* 唐，里上 */
var z_yongzili      = 5070;  /* 庸，里面 */
var z_luzhongsh     = 5071;  /* 鹿，中上 */
var z_liangyoush    = 5072;  /* 梁，右上 */
var z_fangzidi      = 5073;  /* 方，下部 */
var z_shuzizuo      = 5074;  /* 疏，左边 */
var z_yuanzitou     = 5075;  /* 缘，右上 */
var z_cheng         = 5076;  /* 丞 */
var z_shutidd       = 5077;  /* 鼠，下最左 */
var z_jishangyou    = 5078;  /* 祭，上右 */
var z_jiajian       = 5079;  /* 叚 */
var feizikuang      = 5080;  /* 虱，外框 */
var z_shu           = 5081;  /* 肃 */
var z_dingxiazuo    = 5082;  /* 鼎，下左 */
var z_chiyoush      = 5083;  /* 嗤，右上 */
var z_yushangyou    = 5084;  /* 舆，上右 */

var partial_strokes = {
	/* 横起 */
	jiangzikuang    : [heng, shuzheheng],  /* 匠 */
	caozitou        : [heng, shu, shu],  /* 草 */
	youzishen       : [heng, pie, shuwanhenggou],  /* 尤，无点 */
	tishoupang      : [heng, shugou, ti],  /* 提 */
	shizikuang      : [heng, nagou, dian],  /* 式 */
	laozitou        : [heng, shu, heng, pie],  /* 老 */
	chaozipang      : [heng, shu, shu, hengzheshu, heng, heng, heng, shu],  /* 朝, not used */
	h_ten           : [heng, shu],  /* 十 */
	h_chang         : [heng, pie],  /* 厂 */
	h_ding          : [heng, shugou],  /* 丁 */
	h_two           : [heng, heng],  /* 二 */
	h_gan           : [heng, heng, shu],  /* 干 */
	h_gong          : [heng, shu, heng],  /* 工 */
	h_qiaoziyou     : [heng, shuzhehengzheshugou],  /* 巧, 右边 */
	h_hengpie       : [heng, pie],  /* 左，左上 */
	h_wan           : [heng, hengzheshugou, pie],  /* 万 */
	h_che           : [heng, piezheheng, heng, shu],  /* 车 */
	h_cun           : [heng, shugou, dian],  /* 寸 */
	h_zhang         : [heng, pie, na],  /* 丈 */
	h_three         : [heng, heng, heng],  /* 三 */
	h_and           : [heng, shuzhehengzheshugou, heng],  /* 与 */
	h_tu            : [heng, shu, heng],  /* 土 */
	h_kai           : [heng, heng, pie, shu],  /* 开 */
	h_yun           : [heng, heng, piezheheng, dian],  /* 云 */
	h_shi           : [heng, shu, heng],  /* 士 */
	h_stone         : [heng, pie, shu, hengzheshu, heng],  /* 石 */
	h_mu            : [heng, shu, pie, na],  /* 木 */
	h_da            : [heng, pie, na],  /* 大 */
	h_quan          : [heng, pie, na, dian],  /* 犬 */
	h_zaizitou      : [heng, pie, shu],  /* 在，去土 */
	h_kui           : [heng, heng, shuzhehengzheshugou],  /* 亏 */
	h_dai           : [heng, pie, hengzhepie, dian],  /* 歹 */
	h_ya            : [heng, piezheheng, shugou, pie],  /* 牙 */
	h_ge            : [heng, nagou, pie, dian],  /* 戈 */
	h_wuzidi        : [heng, pie, shuwanhenggou],  /* 兀 */
	h_xia           : [heng, shu, dian],  /* 下 */
	h_cai           : [heng, shugou, pie],  /* 才 */
	h_qu            : [heng, shu, heng, piezheheng, dian],  /* 去 */
	h_gu            : [heng, shu, shu, hengzheshu, heng],  /* 古 */
	h_wei           : [heng, heng, hengzheshugou, shu],  /* 韦 */
	h_zhuan         : [heng, heng, shuzhehengzhepie, dian],  /* 专 */
	h_five          : [heng, shu, hengzheshu, heng],  /* 五 */
	h_xingziyou     : [heng, heng, shugou],  /* 行，右边 */
	h_wang          : [heng, heng, shu, heng],  /* 王 */
	h_yu            : [heng, heng, shu, heng, dian],  /* 玉 */
	h_mugou         : [heng, shugou, pie, dian],  /* 杀，下部 */
	h_tian          : [heng, heng, pie, na],  /* 天 */
	h_yushi         : [heng, heng, shugou],  /* 于，于是 */
	h_jing          : [heng, heng, pie, shu],  /* 井 */
	h_piecao        : [heng, pie, shu],  /* 异，下部 */
	h_piefeng       : [heng, heng, heng, pie],  /* 寿，上部 */
	h_qingzitou     : [heng, heng, shu, heng],  /* 青，上部 */
	h_yuan          : [heng, heng, pie, shuwanhenggou],  /* 元 */
	h_fu            : [heng, heng, pie, na],  /* 夫 */
	h_zhi           : [heng, shu, hengzhepie, na],  /* 支 */
	h_bu            : [heng, pie, shu, dian],  /* 不 */
	h_ju            : [heng, hengzheshu, heng, shuzheheng],  /* 巨 */
	h_tun           : [heng, shuzheheng, shu, shuwanhenggou],  /* 屯 */
	h_ben           : [heng, shu, pie, na, heng],  /* 本 */
	h_ke            : [heng, shu, hengzheshu, shugou],  /* 可 */
	h_yuzidi        : [heng, heng, shugou, pie, dian],  /* 余，下部 */
	h_budai         : [heng, pie, shu, hengzheshugou, shu],  /* 布，袋 */
	h_dong          : [heng, piezheheng, shugou, pie, dian],  /* 东 */
	h_zheng         : [heng, shu, heng, shu, heng],  /* 正 */
	h_ping          : [heng, dian, pie, heng, shu],  /* 平 */
	h_shiren        : [heng, heng, shugou, pie, dian],  /* 示，人 */
	h_jida          : [heng, heng, shu, shuzheheng, shu],  /* 击，打 */
	h_fengzitou     : [heng, heng, heng, pie, na],  /* 奉，上部 */
	h_fengzidi      : [heng, heng, shu],  /* 奉，下部 */
	h_mo            : [heng, heng, shu, pie, na],  /* 末 */
	h_long          : [heng, pie, shuwanhenggou, pie, dian],  /* 龙 */
	h_you           : [heng, pie, hengzhepie, na],  /* 友 */
	h_jianziyou     : [heng, piezheheng, hengzheshugou, pie, dian],  /* 拣，右边 */
	h_ye            : [heng, pie, shu, hengzheshu, pie, na],  /* 页 */
	h_erduo         : [heng, shu, shu, heng, heng, heng],  /* 耳 */
	h_erqie         : [heng, pie, shu, hengzheshugou, shu, shu],  /* 而 */
	h_wuxu          : [heng, pie, nagou, pie, dian],  /* 戊 */
	h_qiangzitou    : [heng, shu, dian, pie, heng],  /* 墙，右上 */
	h_chen          : [heng, shu, hengzheshu, heng, shu, shuzheheng],  /* 臣 */
	h_cizizuo       : [heng, shu, hengzheshugou, shu, pie, dian, shu, shugou],  /* 刺，左边 */
	h_shu           : [heng, shu, hengzheshu, heng, shu, pie, na],  /* 束 */
	h_yushui        : [heng, shu, hengzheshugou, shu, dian, dian, dian, dian],  /* 雨 */
	h_tai           : [heng, pie, na, dian],  /* 太 */
	h_zhiyu         : [heng, piezheheng, dian, heng, shu, heng],  /* 至 */
	h_weilai        : [heng, heng, shu, pie, na],  /* 未 */
	h_xizitou       : [heng, shu, shu, heng, shu, hengzheshu, heng, heng],  /* 昔，上面 */
	h_li            : [heng, shu, hengzheshu, heng, pie, na],  /* 吏 */
	h_jinxia        : [heng, heng, shu, dian, pie, heng],  /* 金，下部 */
	h_shushi        : [heng, shu, hengzheshugou, shu],  /* 肺，右边 */
	h_zhan          : [heng, heng, nagou, pie, dian],  /* 栈，右边 */
	h_shijie        : [heng, shu, shu, heng, shuzheheng],  /* 世 */
	h_cheng         : [heng, pie, hengzheshugou, nagou, pie, dian],  /* 成 */
	h_jia           : [heng, dian, pie, heng, pie, na],  /* 夹 */
	h_jiangyouxia   : [heng, piezheheng, shu],  /* 降，右下 */
	h_wuyou         : [heng, heng, pie, shuwanhenggou],  /* 无 */
	h_gewudian      : [heng, nagou, pie],  /* 戈，无点 */
	h_ganku         : [heng, shu, shu, heng, heng],  /* 甘 */
	h_qizitou       : [heng, shu, shu, heng, heng, heng],  /* 其，上面 */
	h_caoheng       : [heng, shu, shu, heng],  /* 革，上部 */
	h_daizitou      : [heng, shu, shu, shu],  /* 带，最上 */
	h_bing          : [heng, shu, hengzheshugou, pie, na],  /* 丙 */
	h_xiwuzhe       : [heng, shu, hengzheshu, shu, shu, heng],  /* 要，上部 */
	chengzikuang    : [heng, pie, nagou, pie, dian],  /* 成，咸框 */
	h_baiziyou      : [heng, heng, heng, heng, shu],  /* 拜，右边 */
	h_geng          : [heng, shu, hengzheshu, heng, heng, pie, na],  /* 更 */
	h_liang         : [heng, shu, hengzheshugou, pie, dian, pie, dian],  /* 两 */
	h_yangzizh      : [heng, heng, heng, pie, na],  /* 养，中部 */
	h_xi            : [heng, shu, hengzheshu, pie, shuzheheng, heng],  /* 西 */
	h_jiziyou       : [heng, piezheheng, pie, shuwanhenggou],  /* 既，右边 */
	h_yi            : [heng, hengzheshu, heng, shuzhehengzheshugou, pie, na],  /* 姨，右边 */
	h_gengzizuo     : [heng, heng, heng, shu, pie, na],  /* 耕，左边 */
	h_feng          : [heng, heng, heng, shu],  /* 丰 */
	zaizikuang      : [heng, shu, heng, nagou, pie, dian],  /* 栽，去木 */
	h_fudu          : [heng, shu, hengzheshugou, heng, heng, shu, dian],  /* 甫 */
	h_chenxing      : [heng, pie, heng, heng, shuzheti, pie, na],  /* 辰 */
	h_yazhou        : [heng, shu, shu, dian, pie, heng],  /* 亚 */
	h_dingwugou     : [heng, shu],  /* 哥，上框 */
	h_dou           : [heng, shu, hengzheshu, heng, dian, pie, heng],  /* 豆 */
	h_youxin        : [heng, shu, hengzheshu, pie, shuzheheng, heng, heng],  /* 酉，辛 */
	h_hengxiapie    : [heng, pie],  /* 夏，最上 */
	h_sizizuo       : [heng, shu, heng, heng, piezheheng, dian],  /* 肆，左边 */
	h_zhizhu        : [heng, pie, wanshugou, pie, pie, pie, na],  /* 家，下边 */
	h_dunti         : [heng, shuzheheng, shu, shuzheti],  /* 顿，左边 */
	h_seven         : [heng, shuwanhenggou],  /* 七 */
	h_wa            : [heng, shuzheti, hengzhenagou, dian],  /* 瓦 */
	h_qiu           : [heng, shugou, dian, ti, pie, na, dian],  /* 求 */
	h_jieziyou      : [heng, hengzheshu, heng, heng, shu, heng, pie, na],  /* 捷，右边 */
	h_yuezili       : [heng, shuzheti, nagou, pie, dian],  /* 越，里面 */
	h_huizitou      : [heng, shu, hengzheshu, heng, heng, shu, heng, dian],  /* 惠，上部 */
	h_benzitou      : [heng, shu, heng, shu, shu],  /* 贲，上部 */
	h_sanhls        : [heng, heng, shu, shu, heng],  /* 塞，中上 */
	h_qinzizuo      : [heng, shu, shu, heng, shu, hengzheshu, heng, heng, heng, shu, ti],  /* 勤，左边 */
	h_caozitou      : [heng, shu, hengzheshu, heng, shu, shu, heng],  /* 曹，上部 */
	h_hsishu        : [heng, shu, shu, shu, shu],  /* 舞，一横四竖 */
	h_liaoyoush     : [heng, pie, na, dian, pie],  /* 燎，右上 */
	h_yinzizhong    : [heng, shu, hengzheshu, heng, shu, heng],  /* 寅，中部 */
	zangzikuang     : [heng, pie, shuzheheng, heng, pie, nagou, pie, dian],  /* 臧，外框 */
	h_nangzitou     : [heng, shu, hengzheshu, heng, shu],  /* 囊，最上 */
	h_nue           : [heng, shuzheheng, heng],  /* 虐，里面 */
	h_gai           : [heng, shu, heng, shuzhehengzheshugou],  /* 丐 */
	h_wu            : [heng, shu, pie, dian, pie, dian, heng],  /* 巫 */
	h_shixue        : [heng, hengzheshu, heng, heng, shu],  /* 妻，上部 */
	h_chi           : [heng, shu, heng, pie, shugou, pie, dian],  /* 赤 */
	h_yuwuheng      : [heng, shuzhehengzheshugou],  /* 与，无下横 */
	h_jimei         : [heng, shu, shu, hengzheshu, heng, shu, shuzheheng],  /* 姬，右边，美 */
	h_guazizhong    : [heng, pie, shu, hengzheshu, heng, heng, heng],  /* 寡，中部 */
	h_jian          : [heng, shu, hengzheshu, dian, pie, heng, shu, pie, na],  /* 柬 */

	/* 竖起 */
	shangzitou      : [shu, heng],  /* 上 */
	lidaopang       : [shu, shugou],  /* 刚 */
	tongzikuang     : [shu, hengzheshugou],  /* 同 */
	s_kou           : [shu, hengzheshu, heng],  /* 口 */
	guangzitou      : [shu, dian, pie],  /* 光 */
	jiangzipang     : [shu, dian, ti],  /* 壮 */
	minzidi         : [shu, hengzheshu, shu, shu, heng],  /* 监 */
	huzitou         : [shu, heng, henggou, pie, heng, shuwanhenggou],  /* 虎 */
	zuzipang        : [shu, hengzheshu, heng, shu, heng, shu, ti],  /* 跟 */
	s_bu            : [shu, dian],  /* 卜 */
	s_jin           : [shu, hengzheshugou, shu],  /* 巾 */
	s_beizizuo      : [shu, heng, ti],  /* 北，左边 */
	s_ri            : [shu, hengzheshu, heng, heng],  /* 日 */
	s_shupie        : [shu, pie],  /* 帅，左边 */
	s_zhi           : [shu, heng, shu, heng],  /* 止 */
	s_bei           : [shu, hengzheshu, pie, dian],  /* 贝 */
	s_xiao          : [shu, pie, dian],  /* 小，无钩 */
	s_shao          : [shu, pie, dian, pie],  /* 少 */
	s_shan          : [shu, shuzheheng, shu],  /* 山 */
	s_gang          : [shu, hengzheshugou, pie, dian],  /* 冈 */
	s_zhong         : [shu, hengzheshu, heng, shu],  /* 中 */
	s_jian          : [shu, hengzheshu, pie, shuwanhenggou],  /* 见 */
	s_shaowud       : [shu, pie, pie],  /* 步，下部 */
	s_liangshu      : [shu, shu],  /* 竖，上左 */
	s_mu            : [shu, hengzheshu, heng, heng, heng],  /* 目 */
	s_qie           : [shu, hengzheshu, heng, heng, heng],  /* 且 */
	s_you           : [shu, hengzheshu, heng, shu, heng],  /* 由 */
	s_tian          : [shu, hengzheshu, heng, shu, heng],  /* 田 */
	s_shen          : [shu, hengzheshu, heng, heng, shu],  /* 申 */
	s_nei           : [shu, hengzheshugou, pie, dian],  /* 内 */
	s_yue           : [shu, hengzheshugou, heng, heng],  /* 月，竖起 */
	s_jia           : [shu, hengzheshu, heng, heng, shu],  /* 甲 */
	s_yang          : [shu, hengzheshu, heng, pie, na],  /* 央 */
	s_juzitou       : [shu, hengzheshu, heng, heng, heng, heng],  /* 具，上边 */
	s_zhan          : [shu, heng, shu, hengzheshu, heng],  /* 占 */
	s_dianzitou     : [shu, hengzheshu, heng, shu, shu, heng],  /* 典，上面 */
	s_siwuzhe       : [shu, hengzheshu, shu, shu, heng],  /* 罗，上面 */
	s_shi           : [shu, hengzheshu, heng, pie, na],  /* 史 */
	s_zouzidi       : [shu, heng, pie, na],  /* 走，下面 */
	s_guanzidi      : [shu, hengzheshu, heng, hengzheshu, heng],  /* 官，下面 */
	s_chu           : [shuzheheng, shu, shu, shuzheheng, shu],  /* 出 */
	s_guanzitou     : [],  /* 贯 */
	s_gezidi        : [],  /* 革，下面 */
	s_chong         : [],  /* 虫 */
	s_li            : [],  /* 里 */
	s_daori         : [],  /* 临，右下 */
	s_ye            : [],  /* 业 */
	s_guizitou      : [],  /* 贵，上部 */
	s_guzitou       : [],  /* 骨，去月 */
	s_bianzili      : [],  /* 扁，里面 */
	s_yong          : [],  /* 用，竖起 */
	s_fei           : [],  /* 非 */
	s_hguankou      : [],  /* 衰，中间，横贯口 */
	s_guo           : [],  /* 果 */
	s_dian          : [],  /* 电 */
	s_shuzizuo      : [],  /* 叔，左边 */
	s_chuan         : [],  /* 串 */
	s_yu            : [],  /* 禺 */
	s_danzidi       : [],  /* 单，下部 */
	s_heizitou      : [],  /* 黑，上部 */
	s_zengzizh      : [],  /* 曾，中间 */
	s_dingxiayou    : [],  /* 鼎，下右 */
	s_dianshui      : [],  /* 犀，里上 */
	s_mianzidi      : [],  /* 面，下部 */

	/* 撇起 */
	danrenpang      : [],  /* 化 */
	weizitou        : [],  /* 危 */
	baozitou        : [],  /* 包 */
	fengzitou       : [],  /* 凤 */
	tubaogai        : [],  /* 军 */
	shuangrenpang   : [],  /* 很 */
	sanpie          : [],  /* 形 */
	fanquanpang     : [],  /* 狼 */
	zhewen          : [],  /* 条 */
	shichi          : [],  /* 饭 */
	fanwenpang      : [],  /* 故 */
	caizitou        : [],  /* 采 */
	jinzipang       : [],  /* 银 */
	zhuzitou        : [],  /* 第 */
	fanzitou        : [],  /* 番 */
	baozipang       : [],  /* 豹 */
	quezipang       : [],  /* 雄 */
	pieheng         : [],  /* 乞，上部 */
	p_ji            : [],  /* 几 */
	cha             : [],  /* 区，里面 */
	p_er            : [],  /* 儿 */
	p_bi            : [],  /* 匕 */
	p_nine          : [],  /* 九 */
	p_ren           : [],  /* 人 */
	pieshu          : [],  /* 介，下部 */
	p_eight         : [],  /* 八 */
	liangpie        : [],  /* 勿，里面 */
	p_xi            : [],  /* 夕 */
	p_chuan         : [],  /* 川 */
	p_tuoziyou      : [],  /* 托，右边 */
	p_wan           : [],  /* 丸 */
	p_fan           : [],  /* 凡 */
	p_jige          : [],  /* 及，格 */
	p_yue           : [],  /* 月 */
	p_bai           : [],  /* 白 */
	p_jin           : [],  /* 斤 */
	p_najiu         : [],  /* 轨，右边 */
	p_she           : [],  /* 舌 */
	p_thousand      : [],  /* 千 */
	p_yao           : [],  /* 夭 */
	p_qiu           : [],  /* 丘 */
	p_yanzili       : [],  /* 延，里面 */
	p_rengui        : [],  /* 壬 */
	p_niu           : [],  /* 牛 */
	p_jie           : [],  /* 介 */
	p_fen           : [],  /* 分 */
	p_angzizuo      : [],  /* 卬，左边 */
	p_maozizuo      : [],  /* 卯，左边 */
	p_fu            : [],  /* 父 */
	p_qian          : [],  /* 欠 */
	p_wu            : [],  /* 午 */
	p_lun           : [],  /* 仑 */
	p_shao          : [],  /* 勺 */
	p_zhao          : [],  /* 爪 */
	p_cang          : [],  /* 仓 */
	p_yun           : [],  /* 匀 */
	p_rong          : [],  /* 冗 */
	p_shi           : [],  /* 矢 */
	p_wuya          : [],  /* 乌 */
	p_chang         : [],  /* 长 */
	p_niuwuwei      : [],  /* 告，上面 */
	p_he            : [],  /* 禾 */
	p_zha           : [],  /* 乍 */
	p_ling          : [],  /* 令 */
	p_yong          : [],  /* 用 */
	p_di            : [],  /* 氐 */
	p_shizu         : [],  /* 氏 */
	p_erya          : [],  /* 尔 */
	p_fanzhi        : [],  /* 反 */
	p_jintian       : [],  /* 今 */
	p_ce            : [],  /* 册 */
	p_niaowuheng    : [],  /* 鸟，无横 */
	p_qi            : [],  /* 气 */
	p_gou           : [],  /* 勾 */
	p_shenziyou     : [],  /* 沈，右边 */
	p_mao           : [],  /* 毛 */
	p_pi            : [],  /* 皮 */
	p_gong          : [],  /* 公 */
	p_yizidi        : [],  /* 衣，下部 */
	p_wuyou         : [],  /* 勿 */
	p_hu            : [],  /* 乎 */
	p_zhizizuo      : [],  /* 制，左边 */
	p_pian          : [],  /* 片 */
	zhouzikuang     : [],  /* 周，外框 */
	p_gua           : [],  /* 瓜 */
	p_yedian        : [],  /* 夜，下右 */
	p_sheng         : [],  /* 生 */
	p_zhaotou       : [],  /* 兆，头 */
	p_zheng         : [],  /* 争 */
	p_liuzidi       : [],  /* 流，右下 */
	p_zhutouban     : [],  /* 临，右上 */
	p_fa            : [],  /* 乏 */
	p_zi            : [],  /* 自 */
	p_xiangzikuang  : [],  /* 向 */
	p_xiezizuo      : [],  /* 卸，左边 */
	p_gangwa        : [],  /* 缸，左边 */
	p_baizizuo      : [],  /* 拜，左边 */
	p_duanzizuo     : [],  /* 段，左边 */
	p_zhuizili      : [],  /* 追，里边 */
	p_mian          : [],  /* 免 */
	p_maoshangzuo   : [],  /* 贸，上左 */
	p_paiyouli      : [],  /* 派，右里 */
	p_nong          : [],  /* 农 */
	p_zhu           : [],  /* 朱 */
	p_huan          : [],  /* 奂 */
	p_shiqu         : [],  /* 失，去 */
	p_shen          : [],  /* 身 */
	p_zhou          : [],  /* 舟 */
	p_shou          : [],  /* 手 */
	p_wo            : [],  /* 我 */
	p_jiu           : [],  /* 臼 */
	piedian         : [],  /* 率，中最右 */
	p_zhong         : [],  /* 重 */
	p_cheng         : [],  /* 乘 */
	p_beizitou      : [],  /* 卑，上部 */
	aozikuang       : [],  /* 奥，上框 */
	p_xidian        : [],  /* 然，上左 */
	p_gui           : [],  /* 鬼 */
	p_yu            : [],  /* 禹 */
	p_chui          : [],  /* 垂 */
	p_xiang         : [],  /* 象 */
	p_juzidi        : [],  /* 聚，下部 */
	p_dan           : [],  /* 丹 */
	p_zimei         : [],  /* 姊，右边 */
	p_ju            : [],  /* 句 */
	p_le            : [],  /* 乐 */
	p_yinzizuo      : [],  /* 殷，左边 */
	p_cong          : [],  /* 囱 */
	p_xun           : [],  /* 熏，上部 */
	p_yushangzuo    : [],  /* 舆，上左 */

	/* 捺起 */
	liuzitou        : [],  /* 六 */
	liangdianshui   : [],  /* 次 */
	lanzitou        : [],  /* 兰 */
	yanzipang       : [],  /* 语 */
	baogaitou       : [],  /* 安 */
	sandianshui     : [],  /* 江 */
	zouzhidi        : [],  /* 过 */
	huozipang       : [],  /* 火 */
	sidiandi        : [],  /* 点 */
	shizipang       : [],  /* 视 */
	bingzitou       : [],  /* 病 */
	buyipang        : [],  /* 补 */
	pieweiyang      : [],  /* 差 */
	yangzitou       : [],  /* 羔 */
	jinzidi         : [],  /* 今，下边 */
	shuxinpang      : [dian, dian, shu],  /* 怀 */
	d_zhi           : [],  /* 之 */
	d_men           : [],  /* 门 */
	d_yi            : [],  /* 义 */
	d_lingzidi      : [],  /* 令 */
	d_ld_sl         : [],  /* 冬 */
	d_guang         : [],  /* 广 */
	d_wang          : [],  /* 亡 */
	d_fang          : [],  /* 方 */
	d_wei           : [],  /* 为 */
	d_wen           : [],  /* 文 */
	d_mi            : [],  /* 米 */
	d_zhou          : [],  /* 州 */
	d_xingzitou     : [],  /* 兴，上面，不带横 */
	d_tou           : [],  /* 头 */
	d_kang          : [],  /* 亢 */
	d_dou           : [],  /* 斗 */
	d_hu            : [],  /* 户 */
	d_xin           : [],  /* 心 */
	d_zhu           : [],  /* 主 */
	d_li            : [],  /* 立 */
	d_ban           : [],  /* 半 */
	d_panzizuo      : [],  /* 判，左边 */
	xuezitou        : [],  /* 究，上边 */
	d_lan           : [],  /* 兰 */
	d_yong          : [],  /* 永 */
	d_yifu          : [],  /* 衣 */
	d_bianzitou     : [],  /* 变，上部 */
	d_jiao          : [],  /* 交 */
	d_hai           : [],  /* 亥 */
	d_chongzitou    : [],  /* 充，上面 */
	d_shi           : [],  /* 市 */
	d_guan          : [],  /* 关 */
	d_juanzitou     : [],  /* 卷，上面 */
	d_yang          : [],  /* 羊 */
	d_xinzidi       : [],  /* 辛，去点横 */
	d_yan           : [],  /* 言 */
	d_yiye          : [],  /* 亦 */
	d_ni            : [],  /* 逆，里面 */
	d_dianpie       : [],  /* 班，里面 */
	d_liang         : [],  /* 良 */
	d_jizitou       : [],  /* 脊，上部 */
	d_jian          : [],  /* 兼 */
	d_langzizuo     : [],  /* 朗，左边 */
	d_chan          : [],  /* 产 */
	d_gezili        : [],  /* 隔，右下里 */
	d_zu            : [],  /* 卒 */
	d_bizizuo       : [],  /* 敝，左边 */

	/* 折起 */
	fanzipang       : [],  /* 反 */
	xiongzikuang    : [],  /* 画 */
	danerpang       : [],  /* 印 */
	zuoerpang       : [],  /* 阳 */
	youerpang       : [],  /* 那 */
	sigong          : [],  /* 私 */
	jianzidi        : [],  /* 建 */
	luzitou         : [],  /* 录 */
	xunzitou        : [],  /* 寻 */
	jiaosipang      : [],  /* 红 */
	youzipang       : [],  /* 幼 */
	sanzhe          : [],  /* 巡 */
	shuxindi        : [],  /* 恭 */
	dengzitou       : [],  /* 登 */
	jianzili        : [],  /* 聿 */
	kenzitou        : [],  /* 垦 */
	yi              : [],  /* 乙 */
	z_you           : [], 
	z_li            : [],  /* 力 */
	z_zuokai        : [],  /* 巨，里面 */
	z_dao           : [],  /* 刀 */
	z_nai           : [],  /* 乃 */
	cangzidi        : [],  /* 仓，下部 */
	z_gong          : [], 
	z_zi            : [],  /* 子 */
	shutidian       : [], 
	z_shouzizuo     : [],  /* 收，左边 */
	z_ye            : [],  /* 也 */
	z_xunziyou      : [],  /* 讯，右边 */
	z_ji            : [],  /* 己 */
	z_shizitou      : [],  /* 尸 */
	z_le            : [],  /* 了 */
	z_nv            : [],  /* 女 */
	z_siziban       : [],  /* 丝，上一半 */
	z_yangziyou     : [],  /* 杨，右边 */
	z_ban           : [],  /* 办 */
	z_xiao          : [],  /* 小，有钩 */
	z_ma            : [],  /* 马 */
	z_xuechuheng    : [],  /* 聿，上部 */
	z_ba            : [],  /* 巴 */
	z_shui          : [],  /* 水 */
	z_jueziyou      : [],  /* 决，右边 */
	z_nazizuo       : [],  /* 那，左边 */
	z_chi           : [],  /* 尺 */
	z_si            : [],  /* 巳 */
	z_yijing        : [],  /* 已 */
	z_xi            : [],  /* 习 */
	z_chou          : [],  /* 丑 */
	z_meizitou      : [],  /* 眉，上部 */
	z_baoziyou      : [],  /* 报，右边 */
	z_mu            : [],  /* 母 */
	z_fu            : [],  /* 弗 */
	z_yu            : [],  /* 予 */
	z_siyi          : [],  /* 司 */
	z_yiziyou       : [],  /* 译，右边 */
	z_yin           : [],  /* 尹 */
	z_jizizuo       : [],  /* 即，左边 */
	z_jingziyou     : [],  /* 经，右边 */
	z_fa            : [],  /* 发 */
	z_sangzidi      : [],  /* 丧，下边 */
	z_dianshui      : [],  /* 泰，下面 */
	z_lishu         : [],  /* 隶，属 */
	z_dizidi        : [],  /* 第，下面 */
	z_yongzitou     : [],  /* 甬，上面 */
	z_mao           : [],  /* 矛 */
	z_eti           : [],  /* 顾，左里 */
	z_min           : [],  /* 民 */
	z_houzitou      : [],  /* 侯，右上 */
	z_tangzili      : [],  /* 唐，里上 */
	z_yongzili      : [],  /* 庸，里面 */
	z_luzhongsh     : [],  /* 鹿，中上 */
	z_liangyoush    : [],  /* 梁，右上 */
	z_fangzidi      : [],  /* 方，下部 */
	z_shuzizuo      : [],  /* 疏，左边 */
	z_yuanzitou     : [],  /* 缘，右上 */
	z_cheng         : [],  /* 丞 */
	z_shutidd       : [],  /* 鼠，下最左 */
	z_jishangyou    : [],  /* 祭，上右 */
	z_jiajian       : [],  /* 叚 */
	feizikuang      : [],  /* 虱，外框 */
	z_shu           : [],  /* 肃 */
	z_dingxiazuo    : [],  /* 鼎，下左 */
	z_chiyoush      : [],  /* 嗤，右上 */
	z_yushangyou    : [],  /* 舆，上右 */
};

/* 键盘映射表 */
var pattern_maps = {
	'A': [pattern_lr_left_1_right_1_left_big, pattern_lr_left_1_right_1_right_big],
	'B': [pattern_lr_left_middle_right],
	'C': [pattern_lr_left_1_right_2, pattern_lr_left_1_right_many],
	'D': [pattern_lr_left_2_right_1, pattern_lr_left_many_right_1],
	'E': [pattern_lr_left_many_right_many],

	'F': [pattern_ud_up_1_down_1_up_big, pattern_ud_up_1_down_1_down_big],
	'G': [pattern_ud_up_middle_down],
	'H': [pattern_ud_up_1_down_2, pattern_ud_up_1_down_many],
	'I': [pattern_ud_up_2_down_1, pattern_ud_up_many_down_1],
	'J': [pattern_ud_up_many_down_many],
	
	'K': [pattern_single],

	'L': [pattern_round_whole],
	'M': [pattern_round_left_down],
	'N': [pattern_round_up, pattern_round_down, pattern_round_right_up,
			pattern_round_left, pattern_round_right, pattern_round_left_up],

	'O': [pattern_pin],
};

var bushou_maps = {
	'P': [heng],
	'Q': [shu],
	'R': [pie],
	'S': [na],
	'T': [zhe],
	'U': [],
	'V': [],
	'W': [],
	'X': [],
	'Y': [],
	'Z': [],
};

var offen_use_bushou_mapping = {};

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
	later: [hengzheshuwanhenggou]
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
	later: [heng, shugou]
	}
Characters[Characters.length] = {
	char: "厂",
	first: pattern_single,
	later: [heng, pie]
	}
Characters[Characters.length] = {
	char: "七",
	first: pattern_single,
	later: [heng, shuwanhenggou]
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
	later: [pie, hengzheshuwanhenggou]
	}
Characters[Characters.length] = {
	char: "几",
	first: pattern_single,
	later: [pie, hengzheshuwanhenggou]
	}
Characters[Characters.length] = {
	char: "儿",
	first: pattern_single,
	later: [pie, shuwanhenggou]
	 }
Characters[Characters.length] = {
	char: "了",
	first: pattern_single,
	later: [henggou, shugou]
	}
Characters[Characters.length] = {
	char: "力",
	first: pattern_single,
	later: [hengzheshugou, pie]
	}
Characters[Characters.length] = {
	char: "乃",
	first: pattern_single,
	later: [hengzheshuzhehengzheshugou, pie]
	}
Characters[Characters.length] = {
	char: "刀",
	first: pattern_single,
	later: [hengzheshugou, pie]
	}
Characters[Characters.length] = {
	char: "又",
	first: pattern_single,
	later: [hengzhepie, na]
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
	later: [heng, heng, shugou]
	}
Characters[Characters.length] = {
	char: "干",
	first: pattern_single,
	later: [heng, heng, shu]
	}
Characters[Characters.length] = {
	char: "亏",
	first: pattern_single,
	later: [heng, heng, shuzhehengzheshugou]
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
	later: [heng, shugou, pie]
	}
Characters[Characters.length] = {
	char: "寸",
	first: pattern_single,
	later: [heng, shugou, dian]
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
	later: [heng, shuzhehengzheshugou, heng]
}
Characters[Characters.length] = {
	char: "万",
	first: pattern_single,
	later: [heng, hengzheshugou, pie]
}
Characters[Characters.length] = {
	char: "上",
	first: pattern_single,
	later: [shu, heng, heng]
}
Characters[Characters.length] = {
	char: "小",
	first: pattern_single,
	later: [shugou, pie, dian]
}
Characters[Characters.length] = {
	char: "口",
	first: pattern_single,
	later: [shu, hengzheshu, heng]
}
Characters[Characters.length] = {
	char: "巾",
	first: pattern_single,
	later: [shu, hengzheshugou, shu]
}
Characters[Characters.length] = {
	char: "山",
	first: pattern_single,
	later: [shu, shuzheheng, shu]
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
	later: [pie, hengzhepie, na]
}
Characters[Characters.length] = {
	char: "凡",
	first: pattern_round_up,
	later: [p_ji, dian]
}
Characters[Characters.length] = {
	char: "及",
	first: pattern_single,
	later: [pie, hengzheshuzhehengzhepie, na]
}
Characters[Characters.length] = {
	char: "夕",
	first: pattern_single,
	later: [pie, hengzhepie, dian]
}
Characters[Characters.length] = {
	char: "丸",
	first: pattern_single,
	later: [pie, hengzheshuwanhenggou, dian]
}
Characters[Characters.length] = {
	char: "么",
	first: pattern_single,
	later: [pie, piezheheng, dian]
}
Characters[Characters.length] = {
	char: "广",
	first: pattern_single,
	later: [dian, heng, pie]
}
Characters[Characters.length] = {
	char: "亡",
	first: pattern_single,
	later: [dian, heng, shuzheheng]
}
Characters[Characters.length] = {
	char: "门",
	first: pattern_single,
	later: [dian, shu, hengzheshugou]
}
Characters[Characters.length] = {
	char: "义",
	first: pattern_single,
	later: [dian, pie, na]
}
Characters[Characters.length] = {
	char: "之",
	first: pattern_single,
	later: [dian, hengzhepie, na]
}
Characters[Characters.length] = {
	char: "尸",
	first: pattern_single,
	later: [hengzheshu, heng, pie]
}
Characters[Characters.length] = {
	char: "弓",
	first: pattern_single,
	later: [hengzheshu, heng, shuzhehengzheshugou]
}
Characters[Characters.length] = {
	char: "己",
	first: pattern_single,
	later: [hengzheshu, heng, shuwanhenggou]
}
Characters[Characters.length] = {
	char: "已",
	first: pattern_single,
	later: [hengzheshu, heng, shuwanhenggou]
}
Characters[Characters.length] = {
	char: "子",
	first: pattern_single,
	later: [hengzhepie, shugou, heng]
}
Characters[Characters.length] = {
	char: "卫",
	first: pattern_single,
	later: [hengzheshugou, shu, heng]
}
Characters[Characters.length] = {
	char: "也",
	first: pattern_single,
	later: [hengzheshugou, shu, shuwanhenggou]
}
Characters[Characters.length] = {
	char: "女",
	first: pattern_single,
	later: [piezhedian, pie, heng]
}
Characters[Characters.length] = {
	char: "飞",
	first: pattern_single,
	later: [hengzhenagou, pie, dian]
}
Characters[Characters.length] = {
	char: "刃",
	first: pattern_single,
	later: [hengzheshugou, pie, dian]
}
Characters[Characters.length] = {
	char: "习",
	first: pattern_round_right_up,
	later: [hengzheshugou, liangdianshui]
}
Characters[Characters.length] = {
	char: "叉",
	first: pattern_single,
	later: [hengzhepie, na, dian]
}
Characters[Characters.length] = {
	char: "马",
	first: pattern_single,
	later: [hengzheshu, shuzhehengzheshugou, heng]
}
Characters[Characters.length] = {
	char: "乡",
	first: pattern_single,
	later: [piezheheng, piezheheng, pie]
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
	later: [heng, heng, pie, shuwanhenggou]
}
Characters[Characters.length] = {
	char: "元",
	first: pattern_single,
	later: [heng, heng, pie, shuwanhenggou]
}
Characters[Characters.length] = {
	char: "专",
	first: pattern_single,
	later: [heng, heng, shuzhehengzhepie, dian]
}
Characters[Characters.length] = {
	char: "云",
	first: pattern_single,
	later: [heng, heng, piezheheng, dian]
}
Characters[Characters.length] = {
	char: "扎",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, shuwanhenggou]
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
	later: [heng, shu, hengzheshu, heng]
}
Characters[Characters.length] = {
	char: "支",
	first: pattern_ud_up_1_down_1_down_big,
	later: [h_ten, z_you]
}
Characters[Characters.length] = {
	char: "厅",
	first: pattern_round_left_up,
	later: [h_chang, h_ding]
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
	later: [h_chang, z_li]
}
Characters[Characters.length] = {
	char: "尤",
	first: pattern_single,
	later: [heng, pie, shuwanhenggou, dian]
}
Characters[Characters.length] = {
	char: "友",
	first: pattern_round_left_up,
	later: [pieheng, z_you]
}
Characters[Characters.length] = {
	char: "匹",
	first: pattern_round_left,
	later: [jiangzikuang, p_er]
}
Characters[Characters.length] = {
	char: "车",
	first: pattern_single,
	later: [heng, piezheheng, heng, shu]
}
Characters[Characters.length] = {
	char: "巨",
	first: pattern_round_left,
	later: [jiangzikuang, z_zuokai]
}
Characters[Characters.length] = {
	char: "牙",
	first: pattern_single,
	later: [heng, piezheheng, shugou, pie]
}
Characters[Characters.length] = {
	char: "屯",
	first: pattern_single,
	later: [heng, shuzheheng, shu, shuwanhenggou]
}
Characters[Characters.length] = {
	char: "比",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_bi, p_bi]
}
Characters[Characters.length] = {
	char: "互",
	first: pattern_single,
	later: [heng, piezheheng, hengzhepie, heng]
}
Characters[Characters.length] = {
	char: "切",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_bi, z_dao]
}
Characters[Characters.length] = {
	char: "瓦",
	first: pattern_single,
	later: [heng, shuzheti, hengzhenagou, dian]
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
	later: [shu, hengzheshu, heng, heng]
}
Characters[Characters.length] = {
	char: "中",
	first: pattern_single,
	later: [shu, hengzheshu, heng, shu]
}
Characters[Characters.length] = {
	char: "冈",
	first: pattern_round_up,
	later: [tongzikuang, cha]
}
Characters[Characters.length] = {
	char: "贝",
	first: pattern_single,
	later: [shu, hengzheshu, pie, dian]
}
Characters[Characters.length] = {
	char: "内",
	first: pattern_single,
	later: [shu, hengzheshugou, pie, dian]
}
Characters[Characters.length] = {
	char: "水",
	first: pattern_single,
	later: [shugou, hengzhepie, pie, na]
}
Characters[Characters.length] = {
	char: "见",
	first: pattern_single,
	later: [shu, hengzheshu, pie, shuwanhenggou]
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
	later: [pie, heng, heng, shugou]
}
Characters[Characters.length] = {
	char: "毛",
	first: pattern_single,
	later: [pie, heng, heng, shuwanhenggou]
}
Characters[Characters.length] = {
	char: "气",
	first: pattern_single,
	later: [pie, heng, heng, hengzhenagou]
}
Characters[Characters.length] = {
	char: "升",
	first: pattern_single,
	later: [pie, heng, pie, shu]
}
Characters[Characters.length] = {
	char: "长",
	first: pattern_single,
	later: [pie, heng, shuzheti, na]
}
Characters[Characters.length] = {
	char: "仁",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, h_two]
}
Characters[Characters.length] = {
	char: "什",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, h_ten]
}
Characters[Characters.length] = {
	char: "片",
	first: pattern_single,
	later: [pie, shu, heng, hengzheshu]
}
Characters[Characters.length] = {
	char: "仆",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, s_bu]
}
Characters[Characters.length] = {
	char: "化",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, h_seven]
}
Characters[Characters.length] = {
	char: "仇",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, p_nine]
}
Characters[Characters.length] = {
	char: "币",
	first: pattern_ud_up_1_down_1_down_big,
	later: [pie, s_jin]
}
Characters[Characters.length] = {
	char: "仍",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, z_nai]
}
Characters[Characters.length] = {
	char: "仅",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, z_you]
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
	later: [fanzipang, z_you]
}
Characters[Characters.length] = {
	char: "介",
	first: pattern_ud_up_1_down_1_up_big,
	later: [p_ren, pieshu]
}
Characters[Characters.length] = {
	char: "父",
	first: pattern_single,
	later: [pie, dian, pie, na]
}
Characters[Characters.length] = {
	char: "从",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_ren, p_ren]
}
Characters[Characters.length] = {
	char: "今",
	first: pattern_ud_up_1_down_1_up_big,
	later: [p_ren, jinzidi]
}
Characters[Characters.length] = {
	char: "凶",
	first: pattern_round_down,
	later: [cha, xiongzikuang]
}
Characters[Characters.length] = {
	char: "分",
	first: pattern_ud_up_1_down_1_down_big,
	later: [p_eight, z_dao]
}
Characters[Characters.length] = {
	char: "乏",
	first: pattern_ud_up_1_down_1_down_big,
	later: [pie, d_zhi]
}
Characters[Characters.length] = {
	char: "公",
	first: pattern_ud_up_1_down_1_down_big,
	later: [p_eight, sigong]
}
Characters[Characters.length] = {
	char: "仓",
	first: pattern_ud_up_1_down_1_down_big,
	later: [p_ren, cangzidi]
}
Characters[Characters.length] = {
	char: "月",
	first: pattern_single,
	later: [pie, hengzheshugou, heng, heng]
}
Characters[Characters.length] = {
	char: "氏",
	first: pattern_single,
	later: [pie, shuzheti, heng, nagou]
}
Characters[Characters.length] = {
	char: "勿",
	first: pattern_round_right_up,
	later: [baozitou, liangpie]
}
Characters[Characters.length] = {
	char: "欠",
	first: pattern_single,
	later: [pie, henggou, pie, na]
}
Characters[Characters.length] = {
	char: "风",
	first: pattern_round_up,
	later: [fengzitou, cha]
}
Characters[Characters.length] = {
	char: "丹",
	first: pattern_single,
	later: [pie, hengzheshugou, heng, dian]
}
Characters[Characters.length] = {
	char: "匀",
	first: pattern_round_right_up,
	later: [baozitou, liangdianshui]
}
Characters[Characters.length] = {
	char: "乌",
	first: pattern_single,
	later: [pie, hengzheshugou, shuzhehengzheshugou, heng]
}
Characters[Characters.length] = {
	char: "凤",
	first: pattern_round_up,
	later: [fengzitou, z_you]
}
Characters[Characters.length] = {
	char: "勾",
	first: pattern_round_right_up,
	later: [baozitou, sigong]
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
	later: [dian, heng, hengzheshugou, pie]
}
Characters[Characters.length] = {
	char: "火",
	first: pattern_single,
	later: [dian, pie, pie, na]
}
Characters[Characters.length] = {
	char: "为",
	first: pattern_single,
	later: [dian, pie, hengzheshugou, dian]
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
	later: [yanzipang, h_ding]
}
Characters[Characters.length] = {
	char: "计",
	first: pattern_lr_left_1_right_1_right_big,
	later: [yanzipang, h_ten]
}
Characters[Characters.length] = {
	char: "户",
	first: pattern_single,
	later: [pie, hengzheshu, heng, pie]
}
Characters[Characters.length] = {
	char: "认",
	first: pattern_lr_left_1_right_1_right_big,
	later: [yanzipang, p_ren]
}
Characters[Characters.length] = {
	char: "心",
	first: pattern_single,
	later: [dian, shuwanhenggou, dian, dian]
}
Characters[Characters.length] = {
	char: "尺",
	first: pattern_single,
	later: [hengzheshu, heng, pie, na]
}
Characters[Characters.length] = {
	char: "引",
	first: pattern_lr_left_1_right_1_left_big,
	later: [z_gong, shu]
}
Characters[Characters.length] = {
	char: "丑",
	first: pattern_single,
	later: [hengzheshu, heng, shu, heng]
}
Characters[Characters.length] = {
	char: "巴",
	first: pattern_single,
	later: [hengzheshu, heng, shu, shuwanhenggou]
}
Characters[Characters.length] = {
	char: "孔",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_zi, shuwanhenggou]
}
Characters[Characters.length] = {
	char: "队",
	first: pattern_lr_left_1_right_1_right_big,
	later: [zuoerpang, p_ren]
}
Characters[Characters.length] = {
	char: "办",
	first: pattern_single,
	later: [hengzheshugou, pie, dian, dian]
}
Characters[Characters.length] = {
	char: "以",
	first: pattern_lr_left_1_right_1_left_big,
	later: [shutidian, p_ren]
}
Characters[Characters.length] = {
	char: "允",
	first: pattern_ud_up_1_down_1_up_big,
	later: [sigong, p_er]
}
Characters[Characters.length] = {
	char: "予",
	first: pattern_single,
	later: [hengzhepie, dian, henggou, shugou]
}
Characters[Characters.length] = {
	char: "劝",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_you, z_li]
}
Characters[Characters.length] = {
	char: "双",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_you, z_you]
}
Characters[Characters.length] = {
	char: "书",
	first: pattern_single,
	later: [hengzheshu, hengzheshu, shu, dian]
}
Characters[Characters.length] = {
	char: "幻",
	first: pattern_lr_left_1_right_1_right_big,
	later: [youzipang, hengzheshugou]
}

/* 五画 */
Characters[Characters.length] = {
	char: "玉",
	first: pattern_single,
	later: [heng, heng, shu, heng, dian]
}
Characters[Characters.length] = {
	char: "刊",
	first: pattern_lr_left_1_right_1_left_big,
	later: [h_gan, lidaopang]
}
Characters[Characters.length] = {
	char: "示",
	first: pattern_single,
	later: [heng, heng, shugou, pie, dian]
}
Characters[Characters.length] = {
	char: "末",
	first: pattern_single,
	later: [heng, heng, shu, pie, na]
}
Characters[Characters.length] = {
	char: "未",
	first: pattern_single,
	later: [heng, heng, shu, pie, na]
}
Characters[Characters.length] = {
	char: "击",
	first: pattern_single,
	later: [heng, heng, shu, shuzheheng, shu]
}
Characters[Characters.length] = {
	char: "打",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, h_ding]
}
Characters[Characters.length] = {
	char: "巧",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_gong, h_qiaoziyou]
}
Characters[Characters.length] = {
	char: "正",
	first: pattern_single,
	later: [heng, shu, heng, shu, heng]
}
Characters[Characters.length] = {
	char: "扑",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, s_bu]
}
Characters[Characters.length] = {
	char: "扒",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, p_eight]
}
Characters[Characters.length] = {
	char: "功",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_gong, z_li]
}
Characters[Characters.length] = {
	char: "扔",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, z_nai]
}
Characters[Characters.length] = {
	char: "去",
	first: pattern_single,
	later: [heng, shu, heng, piezheheng, dian]
}
Characters[Characters.length] = {
	char: "甘",
	first: pattern_single,
	later: [heng, shu, shu, heng, heng]
}
Characters[Characters.length] = {
	char: "世",
	first: pattern_single,
	later: [heng, shu, shu, heng, shuzheheng]
}
Characters[Characters.length] = {
	char: "古",
	first: pattern_ud_up_1_down_1_down_big,
	later: [h_ten, s_kou]
}
Characters[Characters.length] = {
	char: "节",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caozitou, danerpang]
}
Characters[Characters.length] = {
	char: "本",
	first: pattern_single,
	later: [heng, shu, pie, na, heng]
}
Characters[Characters.length] = {
	char: "术",
	first: pattern_single,
	later: [heng, shu, pie, na, dian]
}
Characters[Characters.length] = {
	char: "可",
	first: pattern_single,
	later: [heng, shugou, shu, hengzheshu, heng]
}
Characters[Characters.length] = {
	char: "丙",
	first: pattern_single,
	later: [heng, shu, hengzheshugou, pie, dian]
}
Characters[Characters.length] = {
	char: "左",
	first: pattern_round_left_up,
	later: [h_hengpie, h_gong]
}
Characters[Characters.length] = {
	char: "厉",
	first: pattern_round_left_up,
	later: [h_chang, h_wan]
}
Characters[Characters.length] = {
	char: "右",
	first: pattern_round_left_up,
	later: [h_hengpie, s_kou]
}
Characters[Characters.length] = {
	char: "石",
	first: pattern_single,
	later: [heng, pie, shu, hengzheshu, heng]
}
Characters[Characters.length] = {
	char: "布",
	first: pattern_round_left_up,
	later: [h_hengpie, s_jin]
}
Characters[Characters.length] = {
	char: "龙",
	first: pattern_single,
	later: [heng, pie, shuwanhenggou, pie, dian]
}
Characters[Characters.length] = {
	char: "平",
	first: pattern_single,
	later: [heng, dian, pie, heng, shu]
}
Characters[Characters.length] = {
	char: "灭",
	first: pattern_ud_up_1_down_1_down_big,
	later: [heng, huozipang]
}
Characters[Characters.length] = {
	char: "轧",
	first: pattern_lr_left_1_right_1_left_big,
	later: [h_che, shuwanhenggou]
}
Characters[Characters.length] = {
	char: "东",
	first: pattern_single,
	later: [heng, piezheheng, shugou, pie, dian]
}
Characters[Characters.length] = {
	char: "卡",
	first: pattern_single,
	later: [shu, heng, heng, shu, dian]
}
Characters[Characters.length] = {
	char: "北",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_beizizuo, p_bi]
}
Characters[Characters.length] = {
	char: "占",
	first: pattern_ud_up_1_down_1_down_big,
	later: [shangzitou, s_kou]
}
Characters[Characters.length] = {
	char: "业",
	first: pattern_single,
	later: [shu, shu, dian, pie, heng]
}
Characters[Characters.length] = {
	char: "旧",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shu, s_ri]
}
Characters[Characters.length] = {
	char: "帅",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_shupie, s_jin]
}
Characters[Characters.length] = {
	char: "归",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_shupie, xunzitou]
}
Characters[Characters.length] = {
	char: "且",
	first: pattern_single,
	later: [shu, hengzheshu, heng, heng, heng]
}
Characters[Characters.length] = {
	char: "旦",
	first: pattern_ud_up_1_down_1_up_big,
	later: [s_ri, heng]
}
Characters[Characters.length] = {
	char: "目",
	first: pattern_single,
	later: [shu, hengzheshu, heng, heng, heng]
}
Characters[Characters.length] = {
	char: "叶",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, h_ten]
}
Characters[Characters.length] = {
	char: "甲",
	first: pattern_single,
	later: [shu, hengzheshu, heng, heng, shu]
}
Characters[Characters.length] = {
	char: "申",
	first: pattern_single,
	later: [shu, hengzheshu, heng, heng, shu]
}
Characters[Characters.length] = {
	char: "叮",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, h_ding]
}
Characters[Characters.length] = {
	char: "电",
	first: pattern_single,
	later: [shu, hengzheshu, heng, heng, shuwanhenggou]
}
Characters[Characters.length] = {
	char: "号",
	first: pattern_ud_up_1_down_1_down_big,
	later: [s_kou, h_qiaoziyou]
}
Characters[Characters.length] = {
	char: "田",
	first: pattern_single,
	later: [shu, hengzheshu, heng, shu, heng]
}
Characters[Characters.length] = {
	char: "由",
	first: pattern_single,
	later: [shu, hengzheshu, heng, shu, heng]
}
Characters[Characters.length] = {
	char: "史",
	first: pattern_single,
	later: [shu, hengzheshu, heng, pie, na]
}
Characters[Characters.length] = {
	char: "只",
	first: pattern_ud_up_1_down_1_up_big,
	later: [s_kou, p_eight]
}
Characters[Characters.length] = {
	char: "央",
	first: pattern_single,
	later: [shu, hengzheshu, heng, pie, na]
}
Characters[Characters.length] = {
	char: "兄",
	first: pattern_ud_up_1_down_1_down_big,
	later: [s_kou, p_er]
}
Characters[Characters.length] = {
	char: "叼",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, hengzheshugou, ti]
}
Characters[Characters.length] = {
	char: "叫",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, z_shouzizuo]
}
Characters[Characters.length] = {
	char: "另",
	first: pattern_ud_up_1_down_1_down_big,
	later: [s_kou, z_li]
}
Characters[Characters.length] = {
	char: "叨",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, z_dao]
}
Characters[Characters.length] = {
	char: "叹",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, z_you]
}
Characters[Characters.length] = {
	char: "四",
	first: pattern_single,
	later: [shu, hengzheshu, pie, shuzheheng, heng]
}
Characters[Characters.length] = {
	char: "生",
	first: pattern_single,
	later: [pie, heng, heng, shu, heng]
}
Characters[Characters.length] = {
	char: "失",
	first: pattern_single,
	later: [pie, heng, heng, pie, na]
}
Characters[Characters.length] = {
	char: "禾",
	first: pattern_single,
	later: [pie, heng, shu, pie, na]
}
Characters[Characters.length] = {
	char: "丘",
	first: pattern_single,
	later: [pie, shu, heng, shu, heng]
}
Characters[Characters.length] = {
	char: "付",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, h_cun]
}
Characters[Characters.length] = {
	char: "仗",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, h_zhang]
}
Characters[Characters.length] = {
	char: "代",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, shizikuang]
}
Characters[Characters.length] = {
	char: "仙",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, s_shan]
}
Characters[Characters.length] = {
	char: "们",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, d_men]
}
Characters[Characters.length] = {
	char: "仪",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, d_yi]
}
Characters[Characters.length] = {
	char: "白",
	first: pattern_single,
	later: [pie, shu, hengzheshu, heng, heng]
}
Characters[Characters.length] = {
	char: "仔",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, z_zi]
}
Characters[Characters.length] = {
	char: "他",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, z_ye]
}
Characters[Characters.length] = {
	char: "斥",
	first: pattern_single,
	later: [pie, pie, heng, shu, dian]
}
Characters[Characters.length] = {
	char: "瓜",
	first: pattern_single,
	later: [pie, pie, shuzheti, dian, na]
}
Characters[Characters.length] = {
	char: "乎",
	first: pattern_single,
	later: [pie, dian, pie, heng, shugou]
}
Characters[Characters.length] = {
	char: "丛",
	first: pattern_ud_up_1_down_1_up_big,
	later: [p_ren, p_ren, heng]
}
Characters[Characters.length] = {
	char: "令",
	first: pattern_ud_up_1_down_1_up_big,
	later: [p_ren, d_lingzidi]
}
Characters[Characters.length] = {
	char: "用",
	first: pattern_single,
	later: [pie, hengzheshugou, heng, heng, shu]
}
Characters[Characters.length] = {
	char: "甩",
	first: pattern_single,
	later: [pie, hengzheshugou, heng, heng, shuwanhenggou]
}
Characters[Characters.length] = {
	char: "印",
	first: pattern_lr_left_1_right_1_right_big,
	later: [pie, shuzheti, heng, danerpang]
}
Characters[Characters.length] = {
	char: "乐",
	first: pattern_single,
	later: [pie, shuzheheng, shugou, pie, dian]
}
Characters[Characters.length] = {
	char: "句",
	first: pattern_round_right_up,
	later: [baozitou, s_kou]
}
Characters[Characters.length] = {
	char: "匆",
	first: pattern_single,
	later: [pie, hengzheshugou, pie, pie, dian]
}
Characters[Characters.length] = {
	char: "册",
	first: pattern_single,
	later: [pie, hengzheshugou, pie, hengzheshugou, heng]
}
Characters[Characters.length] = {
	char: "犯",
	first: pattern_lr_left_1_right_1_right_big,
	later: [fanquanpang, cangzidi]
}
Characters[Characters.length] = {
	char: "外",
	first: pattern_lr_left_1_right_1_left_big,
	later: [p_xi, s_bu]
}
Characters[Characters.length] = {
	char: "处",
	first: pattern_round_left_down,
	later: [zhewen, s_bu]
}
Characters[Characters.length] = {
	char: "冬",
	first: pattern_ud_up_1_down_1_up_big,
	later: [zhewen, d_ld_sl]
}
Characters[Characters.length] = {
	char: "鸟",
	first: pattern_single,
	later: [pie, hengzheshugou, dian, shuzhehengzheshugou, heng]
}
Characters[Characters.length] = {
	char: "务",
	first: pattern_ud_up_1_down_1_up_big,
	later: [zhewen, z_li]
}
Characters[Characters.length] = {
	char: "包",
	first: pattern_single,
	later: [pie, hengzheshugou, hengzheshu, heng, shuwanhenggou]
}
Characters[Characters.length] = {
	char: "饥",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shichi, p_ji]
}
Characters[Characters.length] = {
	char: "主",
	first: pattern_single,
	later: [dian, heng, heng, shu, heng]
}
Characters[Characters.length] = {
	char: "市",
	first: pattern_single,
	later: [dian, heng, shu, hengzheshugou, shu]
}
Characters[Characters.length] = {
	char: "立",
	first: pattern_single,
	later: [dian, heng, dian, pie, heng]
}
Characters[Characters.length] = {
	char: "闪",
	first: pattern_round_up,
	later: [d_men, p_ren]
}
Characters[Characters.length] = {
	char: "兰",
	first: pattern_ud_up_1_down_1_down_big,
	later: [lanzitou, h_three]
}
Characters[Characters.length] = {
	char: "半",
	first: pattern_single,
	later: [dian, pie, heng, heng, shu]
}
Characters[Characters.length] = {
	char: "汁",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, h_ten]
}
Characters[Characters.length] = {
	char: "汇",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, jiangzikuang]
}
Characters[Characters.length] = {
	char: "头",
	first: pattern_single,
	later: [dian, dian, heng, pie, dian]
}
Characters[Characters.length] = {
	char: "汉",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, z_you]
}
Characters[Characters.length] = {
	char: "宁",
	first: pattern_ud_up_1_down_1_down_big,
	later: [baogaitou, h_ding]
}
Characters[Characters.length] = {
	char: "穴",
	first: pattern_ud_up_1_down_1_down_big,
	later: [baogaitou, p_eight]
}
Characters[Characters.length] = {
	char: "它",
	first: pattern_ud_up_1_down_1_down_big,
	later: [baogaitou, p_bi]
}
Characters[Characters.length] = {
	char: "讨",
	first: pattern_lr_left_1_right_1_right_big,
	later: [yanzipang, h_cun]
}
Characters[Characters.length] = {
	char: "写",
	first: pattern_ud_up_1_down_1_down_big,
	later: [tubaogai, h_and]
}
Characters[Characters.length] = {
	char: "让",
	first: pattern_lr_left_1_right_1_right_big,
	later: [yanzipang, shangzitou, heng]
}
Characters[Characters.length] = {
	char: "礼",
	first: pattern_lr_left_1_right_1_left_big,
	later: [shizipang, shuwanhenggou]
}
Characters[Characters.length] = {
	char: "训",
	first: pattern_lr_left_1_right_1_right_big,
	later: [yanzipang, p_chuan]
}
Characters[Characters.length] = {
	char: "必",
	first: pattern_single,
	later: [dian, shuwanhenggou, dian, dian, pie]
}
Characters[Characters.length] = {
	char: "议",
	first: pattern_lr_left_1_right_1_right_big,
	later: [yanzipang, d_yi]
}
Characters[Characters.length] = {
	char: "讯",
	first: pattern_lr_left_1_right_1_right_big,
	later: [yanzipang, z_xunziyou]
}
Characters[Characters.length] = {
	char: "记",
	first: pattern_lr_left_1_right_1_right_big,
	later: [yanzipang, z_ji]
}
Characters[Characters.length] = {
	char: "永",
	first: pattern_single,
	later: [dian, hengzheshugou, hengzhepie, pie, na]
}
Characters[Characters.length] = {
	char: "司",
	first: pattern_round_right_up,
	later: [hengzheshugou, heng, s_kou]
}
Characters[Characters.length] = {
	char: "尼",
	first: pattern_round_left_up,
	later: [z_shizitou, p_bi]
}
Characters[Characters.length] = {
	char: "民",
	first: pattern_single,
	later: [hengzheshu, heng, shuzheti, heng, nagou]
}
Characters[Characters.length] = {
	char: "出",
	first: pattern_single,
	later: [shuzheheng, shu, shu, shuzheheng, shu]
}
Characters[Characters.length] = {
	char: "辽",
	first: pattern_round_left_down,
	later: [z_le, zouzhidi]
}
Characters[Characters.length] = {
	char: "奶",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_nv, z_nai]
}
Characters[Characters.length] = {
	char: "奴",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_nv, z_you]
}
Characters[Characters.length] = {
	char: "加",
	first: pattern_lr_left_1_right_1_left_big,
	later: [z_li, s_kou]
}
Characters[Characters.length] = {
	char: "召",
	first: pattern_ud_up_1_down_1_up_big,
	later: [z_dao, s_kou]
}
Characters[Characters.length] = {
	char: "皮",
	first: pattern_single,
	later: [pie, henggou, shu, hengzhepie, na]
}
Characters[Characters.length] = {
	char: "边",
	first: pattern_round_left_down,
	later: [z_li, zouzhidi]
}
Characters[Characters.length] = {
	char: "发",
	first: pattern_single,
	later: [shuzheheng, pie, hengzhepie, na, dian]
}
Characters[Characters.length] = {
	char: "孕",
	first: pattern_ud_up_1_down_1_up_big,
	later: [z_nai, z_zi]
}
Characters[Characters.length] = {
	char: "圣",
	first: pattern_ud_up_1_down_1_up_big,
	later: [z_you, h_tu]
}
Characters[Characters.length] = {
	char: "对",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_you, h_cun]
}
Characters[Characters.length] = {
	char: "台",
	first: pattern_ud_up_1_down_1_up_big,
	later: [sigong, s_kou]
}
Characters[Characters.length] = {
	char: "矛",
	first: pattern_single,
	later: [hengzhepie, dian, henggou, shugou, pie]
}
Characters[Characters.length] = {
	char: "纠",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jiaosipang, z_shouzizuo]
}
Characters[Characters.length] = {
	char: "母",
	first: pattern_single,
	later: [shuzheheng, hengzheshugou, heng, dian, dian]
}
Characters[Characters.length] = {
	char: "幼",
	first: pattern_lr_left_1_right_1_right_big,
	later: [youzipang, z_li]
}
Characters[Characters.length] = {
	char: "丝",
	first: pattern_ud_up_1_down_1_up_big,
	later: [z_siziban, z_siziban, heng]
}

/* 六画 */
Characters[Characters.length] = {
	char: "式",
	first: pattern_round_right_up,
	later: [shizikuang, h_gong]
}
Characters[Characters.length] = {
	char: "刑",
	first: pattern_lr_left_1_right_1_left_big,
	later: [h_kai, lidaopang]
}
Characters[Characters.length] = {
	char: "动",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_yun, z_li]
}
Characters[Characters.length] = {
	char: "扛",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, h_gong]
}
Characters[Characters.length] = {
	char: "寺",
	first: pattern_ud_up_1_down_1_down_big,
	later: [h_tu, h_cun]
}
Characters[Characters.length] = {
	char: "吉",
	first: pattern_ud_up_1_down_1_down_big,
	later: [h_shi, s_kou]
}
Characters[Characters.length] = {
	char: "扣",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, s_kou]
}
Characters[Characters.length] = {
	char: "考",
	first: pattern_round_left_up,
	later: [laozitou, h_qiaoziyou]
}
Characters[Characters.length] = {
	char: "托",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, p_tuoziyou]
}
Characters[Characters.length] = {
	char: "老",
	first: pattern_round_left_up,
	later: [laozitou, p_bi]
}
Characters[Characters.length] = {
	char: "执",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, p_wan]
}
Characters[Characters.length] = {
	char: "巩",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_gong, p_fan]
}
Characters[Characters.length] = {
	char: "圾",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_gong, p_jige]
}
Characters[Characters.length] = {
	char: "扩",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, d_guang]
}
Characters[Characters.length] = {
	char: "扫",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, xunzitou]
}
Characters[Characters.length] = {
	char: "地",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_tu, z_ye]
}
Characters[Characters.length] = {
	char: "扬",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, z_yangziyou]
}
Characters[Characters.length] = {
	char: "场",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_tu, z_yangziyou]
}
Characters[Characters.length] = {
	char: "耳",
	first: pattern_single,
	later: [heng, shu, shu, heng, heng, heng]
}
Characters[Characters.length] = {
	char: "共",
	first: pattern_single,
	later: [heng, shu, shu, heng, pie, dian]
}
Characters[Characters.length] = {
	char: "芒",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caozitou, d_wang]
}
Characters[Characters.length] = {
	char: "亚",
	first: pattern_single,
	later: [heng, shu, shu, dian, pie, heng]
}
Characters[Characters.length] = {
	char: "芝",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caozitou, d_zhi]
}
Characters[Characters.length] = {
	char: "朽",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, h_qiaoziyou]
}
Characters[Characters.length] = {
	char: "朴",
	first: pattern_lr_left_1_right_1_left_big,
	later: [h_mu, s_bu]
}
Characters[Characters.length] = {
	char: "机",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, p_ji]
}
Characters[Characters.length] = {
	char: "权",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, z_you]
}
Characters[Characters.length] = {
	char: "过",
	first: pattern_round_left_down,
	later: [h_cun, zouzhidi]
}
Characters[Characters.length] = {
	char: "臣",
	first: pattern_round_left,
	later: [jiangzikuang, shu, z_zuokai]
}
Characters[Characters.length] = {
	char: "再",
	first: pattern_single,
	later: [heng, shu, hengzheshugou, shu, heng, heng]
}
Characters[Characters.length] = {
	char: "协",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_ten, z_ban]
}
Characters[Characters.length] = {
	char: "西",
	first: pattern_single,
	later: [heng, shu, hengzheshugou, pie, shuzheheng, heng]
}
Characters[Characters.length] = {
	char: "压",
	first: pattern_round_left_up,
	later: [h_chang, h_tu, dian]
}
Characters[Characters.length] = {
	char: "厌",
	first: pattern_round_left_up,
	later: [h_chang, h_quan]
}
Characters[Characters.length] = {
	char: "在",
	first: pattern_round_left_up,
	later: [h_hengpie, h_zaizitou]
}
Characters[Characters.length] = {
	char: "有",
	first: pattern_round_left_up,
	later: [h_hengpie, p_yue]
}
Characters[Characters.length] = {
	char: "百",
	first: pattern_ud_up_1_down_1_down_big,
	later: [heng, p_bai]
}
Characters[Characters.length] = {
	char: "存",
	first: pattern_round_left_up,
	later: [h_zaizitou, z_zi]
}
Characters[Characters.length] = {
	char: "而",
	first: pattern_single,
	later: [heng, pie, shu, hengzheshugou, shu, shu]
}
Characters[Characters.length] = {
	char: "页",
	first: pattern_single,
	later: [heng, pie, shu, hengzheshu, pie, dian]
}
Characters[Characters.length] = {
	char: "匠",
	first: pattern_round_left,
	later: [jiangzikuang, p_jin]
}
Characters[Characters.length] = {
	char: "夸",
	first: pattern_ud_up_1_down_1_down_big,
	later: [h_da, h_kui]
}
Characters[Characters.length] = {
	char: "夺",
	first: pattern_ud_up_1_down_1_down_big,
	later: [h_da, h_cun]
}
Characters[Characters.length] = {
	char: "灰",
	first: pattern_round_left_up,
	later: [h_hengpie, huozipang]
}
Characters[Characters.length] = {
	char: "达",
	first: pattern_round_left_down,
	later: [h_da, zouzhidi]
}
Characters[Characters.length] = {
	char: "列",
	first: pattern_lr_left_1_right_1_left_big,
	later: [h_dai, lidaopang]
}
Characters[Characters.length] = {
	char: "死",
	first: pattern_single,
	later: [heng, pie, hengzhepie, dian, pie, shuwanhenggou]
}
Characters[Characters.length] = {
	char: "成",
	first: pattern_single,
	later: [heng, pie, hengzheshugou, nagou, pie, dian]
}
Characters[Characters.length] = {
	char: "夹",
	first: pattern_single,
	later: [heng, dian, pie, heng, pie, na]
}
Characters[Characters.length] = {
	char: "轨",
	first: pattern_lr_left_1_right_1_left_big,
	later: [h_che, p_najiu]
}
Characters[Characters.length] = {
	char: "邪",
	first: pattern_lr_left_1_right_1_left_big,
	later: [h_ya, youerpang]
}
Characters[Characters.length] = {
	char: "划",
	first: pattern_lr_left_1_right_1_left_big,
	later: [h_ge, lidaopang]
}
Characters[Characters.length] = {
	char: "迈",
	first: pattern_round_left_down,
	later: [h_wan, zouzhidi]
}
Characters[Characters.length] = {
	char: "毕",
	first: pattern_ud_up_2_down_1,
	later: [p_bi, p_bi, h_ten]
}
Characters[Characters.length] = {
	char: "至",
	first: pattern_single,
	later: [heng, piezheheng, dian, heng, shu, heng]
}
Characters[Characters.length] = {
	char: "此",
	first: pattern_lr_left_1_right_1_left_big,
	later: [s_zhi, p_bi]
}
Characters[Characters.length] = {
	char: "贞",
	first: pattern_ud_up_1_down_1_down_big,
	later: [shangzitou, s_bei]
}
Characters[Characters.length] = {
	char: "师",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_shupie, heng, s_jin]
}
Characters[Characters.length] = {
	char: "尘",
	first: pattern_ud_up_1_down_1_down_big,
	later: [s_xiao, h_tu]
}
Characters[Characters.length] = {
	char: "尖",
	first: pattern_ud_up_1_down_1_down_big,
	later: [s_xiao, h_da]
}
Characters[Characters.length] = {
	char: "劣",
	first: pattern_ud_up_1_down_1_up_big,
	later: [s_shao, z_li]
}
Characters[Characters.length] = {
	char: "光",
	first: pattern_ud_up_1_down_1_down_big,
	later: [guangzitou, h_wuzidi]
}
Characters[Characters.length] = {
	char: "当",
	first: pattern_ud_up_1_down_1_down_big,
	later: [guangzitou, xunzitou]
}
Characters[Characters.length] = {
	char: "早",
	first: pattern_ud_up_1_down_1_up_big,
	later: [s_ri, h_ten]
}
Characters[Characters.length] = {
	char: "吐",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, h_tu]
}
Characters[Characters.length] = {
	char: "吓",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, h_xia]
}
Characters[Characters.length] = {
	char: "虫",
	first: pattern_single,
	later: [shu, hengzheshu, heng, shu, heng, dian]
}
Characters[Characters.length] = {
	char: "曲",
	first: pattern_single,
	later: [shu, hengzheshu, heng, shu, shu, heng]
}
Characters[Characters.length] = {
	char: "团",
	first: pattern_round_whole,
	later: [s_kou, h_cai]
}
Characters[Characters.length] = {
	char: "同",
	first: pattern_round_up,
	later: [tongzikuang, heng, s_kou]
}
Characters[Characters.length] = {
	char: "吊",
	first: pattern_ud_up_1_down_1_down_big,
	later: [s_kou, s_jin]
}
Characters[Characters.length] = {
	char: "吃",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, pieheng, yi]
}
Characters[Characters.length] = {
	char: "因",
	first: pattern_round_whole,
	later: [s_kou, h_da]
}
Characters[Characters.length] = {
	char: "吸",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, p_jige]
}
Characters[Characters.length] = {
	char: "吗",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, z_ma]
}
Characters[Characters.length] = {
	char: "屿",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_shan, h_and]
}
Characters[Characters.length] = {
	char: "帆",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_jin, p_fan]
}
Characters[Characters.length] = {
	char: "岁",
	first: pattern_ud_up_1_down_1_up_big,
	later: [s_shan, p_xi]
}
Characters[Characters.length] = {
	char: "回",
	first: pattern_round_whole,
	later: [s_kou, s_kou]
}
Characters[Characters.length] = {
	char: "岂",
	first: pattern_ud_up_1_down_1_down_big,
	later: [s_shan, z_ji]
}
Characters[Characters.length] = {
	char: "刚",
	first: pattern_lr_left_1_right_1_left_big,
	later: [s_gang, lidaopang]
}
Characters[Characters.length] = {
	char: "则",
	first: pattern_lr_left_1_right_1_left_big,
	later: [s_bei, lidaopang]
}
Characters[Characters.length] = {
	char: "肉",
	first: pattern_single,
	later: [shu, hengzheshugou, pie, dian, pie, dian]
}
Characters[Characters.length] = {
	char: "网",
	first: pattern_round_up,
	later: [tongzikuang, cha, cha]
}
Characters[Characters.length] = {
	char: "年",
	first: pattern_single,
	later: [pie, heng, heng, shu, heng, shu]
}
Characters[Characters.length] = {
	char: "朱",
	first: pattern_single,
	later: [pie, heng, heng, shu, pie, na]
}
Characters[Characters.length] = {
	char: "先",
	first: pattern_single,
	later: [pie, heng, shu, heng, pie, shuwanhenggou]
}
Characters[Characters.length] = {
	char: "丢",
	first: pattern_ud_up_1_down_1_down_big,
	later: [pie, h_qu]
}
Characters[Characters.length] = {
	char: "舌",
	first: pattern_ud_up_1_down_1_down_big,
	later: [pie, h_gu]
}
Characters[Characters.length] = {
	char: "竹",
	first: pattern_lr_left_1_right_1_right_big,
	later: [pieheng, shu, pieheng, shugou]
}
Characters[Characters.length] = {
	char: "迁",
	first: pattern_round_left_down,
	later: [p_thousand, zouzhidi]
}
Characters[Characters.length] = {
	char: "乔",
	first: pattern_ud_up_1_down_1_up_big,
	later: [p_yao, pieshu]
}
Characters[Characters.length] = {
	char: "伟",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, h_wei]
}
Characters[Characters.length] = {
	char: "传",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, h_zhuan]
}
Characters[Characters.length] = {
	char: "乒",
	first: pattern_ud_up_1_down_1_up_big,
	later: [p_qiu, pie]
}
Characters[Characters.length] = {
	char: "乓",
	first: pattern_ud_up_1_down_1_up_big,
	later: [p_qiu, dian]
}
Characters[Characters.length] = {
	char: "休",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, h_mu]
}
Characters[Characters.length] = {
	char: "伍",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, h_five]
}
Characters[Characters.length] = {
	char: "伏",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, h_quan]
}
Characters[Characters.length] = {
	char: "优",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, youzishen, dian]
}
Characters[Characters.length] = {
	char: "伐",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, h_ge]
}
Characters[Characters.length] = {
	char: "延",
	first: pattern_round_left_down,
	later: [p_yanzili, jianzidi]
}
Characters[Characters.length] = {
	char: "件",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, p_niu]
}
Characters[Characters.length] = {
	char: "任",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, p_rengui]
}
Characters[Characters.length] = {
	char: "伤",
	first: pattern_lr_left_1_right_2,
	later: [danrenpang, pieheng, z_li]
}
Characters[Characters.length] = {
	char: "价",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, p_jie]
}
Characters[Characters.length] = {
	char: "份",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, p_fen]
}
Characters[Characters.length] = {
	char: "华",
	first: pattern_ud_up_2_down_1,
	later: [danrenpang, h_seven, h_ten]
}
Characters[Characters.length] = {
	char: "仰",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, p_angzizuo, danerpang]
}
Characters[Characters.length] = {
	char: "仿",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, d_fang]
}
Characters[Characters.length] = {
	char: "伙",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, huozipang]
}
Characters[Characters.length] = {
	char: "伪",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, d_wei]
}
Characters[Characters.length] = {
	char: "自",
	first: pattern_single,
	later: [pie, shu, hengzheshu, heng, heng, heng]
}
Characters[Characters.length] = {
	char: "血",
	first: pattern_single,
	later: [pie, shu, hengzheshu, shu, shu, heng]
}
Characters[Characters.length] = {
	char: "向",
	first: pattern_single,
	later: [pie, shu, hengzheshugou, shu, hengzheshu, heng]
}
Characters[Characters.length] = {
	char: "似",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, shutidian, p_ren]
}
Characters[Characters.length] = {
	char: "后",
	first: pattern_round_left_up,
	later: [fanzipang, heng, s_kou]
}
Characters[Characters.length] = {
	char: "行",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shuangrenpang, h_xingziyou]
}
Characters[Characters.length] = {
	char: "舟",
	first: pattern_single,
	later: [pie, pie, hengzheshugou, heng, dian, dian]
}
Characters[Characters.length] = {
	char: "全",
	first: pattern_ud_up_1_down_1_down_big,
	later: [p_ren, h_wang]
}
Characters[Characters.length] = {
	char: "会",
	first: pattern_ud_up_1_down_1_down_big,
	later: [p_ren, h_yun]
}
Characters[Characters.length] = {
	char: "杀",
	first: pattern_ud_up_1_down_1_down_big,
	later: [cha, h_mugou]
}
Characters[Characters.length] = {
	char: "合",
	first: pattern_ud_up_1_down_1_down_big,
	later: [p_ren, heng, s_kou]
}
Characters[Characters.length] = {
	char: "兆",
	first: pattern_single,
	later: [pie, dian, heng, shuwanhenggou, pie, dian]
}
Characters[Characters.length] = {
	char: "企",
	first: pattern_ud_up_1_down_1_down_big,
	later: [p_ren, s_zhi]
}
Characters[Characters.length] = {
	char: "众",
	first: pattern_pin,
	later: [p_ren, p_ren, p_ren]
}
Characters[Characters.length] = {
	char: "爷",
	first: pattern_ud_up_1_down_1_up_big,
	later: [p_fu, danerpang]
}
Characters[Characters.length] = {
	char: "伞",
	first: pattern_ud_up_1_down_1_down_big,
	later: [p_ren, lanzitou, h_ten]
}
Characters[Characters.length] = {
	char: "创",
	first: pattern_lr_left_1_right_1_left_big,
	later: [p_cang, lidaopang]
}
Characters[Characters.length] = {
	char: "肌",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_yue, p_ji]
}
Characters[Characters.length] = {
	char: "朵",
	first: pattern_ud_up_1_down_1_down_big,
	later: [p_ji, h_mu]
}
Characters[Characters.length] = {
	char: "杂",
	first: pattern_ud_up_1_down_1_down_big,
	later: [p_najiu, h_mugou]
}
Characters[Characters.length] = {
	char: "危",
	first: pattern_ud_up_1_down_1_down_big,
	later: [weizitou, h_chang, cangzidi]
}
Characters[Characters.length] = {
	char: "旬",
	first: pattern_round_right_up,
	later: [baozitou, s_ri]
}
Characters[Characters.length] = {
	char: "旨",
	first: pattern_ud_up_1_down_1_down_big,
	later: [p_bi, s_ri]
}
Characters[Characters.length] = {
	char: "负",
	first: pattern_ud_up_1_down_1_down_big,
	later: [weizitou, s_bei]
}
Characters[Characters.length] = {
	char: "各",
	first: pattern_ud_up_1_down_1_up_big,
	later: [zhewen, s_kou]
}
Characters[Characters.length] = {
	char: "名",
	first: pattern_ud_up_1_down_1_up_big,
	later: [p_xi, s_kou]
}
Characters[Characters.length] = {
	char: "多",
	first: pattern_ud_up_1_down_1_down_big,
	later: [p_xi, p_xi]
}
Characters[Characters.length] = {
	char: "争",
	first: pattern_ud_up_1_down_1_down_big,
	later: [weizitou, z_xuechuheng, shugou]
}
Characters[Characters.length] = {
	char: "色",
	first: pattern_ud_up_1_down_1_down_big,
	later: [weizitou, z_ba]
}
Characters[Characters.length] = {
	char: "壮",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jiangzipang, h_shi]
}
Characters[Characters.length] = {
	char: "冲",
	first: pattern_lr_left_1_right_1_right_big,
	later: [liangdianshui, s_zhong]
}
Characters[Characters.length] = {
	char: "冰",
	first: pattern_lr_left_1_right_1_right_big,
	later: [liangdianshui, z_shui]
}
Characters[Characters.length] = {
	char: "庄",
	first: pattern_round_left_up,
	later: [d_guang, h_tu]
}
Characters[Characters.length] = {
	char: "庆",
	first: pattern_round_left_up,
	later: [d_guang, h_da]
}
Characters[Characters.length] = {
	char: "亦",
	first: pattern_single,
	later: [dian, heng, pie, shugou, pie, dian]
}
Characters[Characters.length] = {
	char: "刘",
	first: pattern_lr_left_1_right_1_left_big,
	later: [d_wen, lidaopang]
}
Characters[Characters.length] = {
	char: "齐",
	first: pattern_ud_up_1_down_1_up_big,
	later: [d_wen, pieshu]
}
Characters[Characters.length] = {
	char: "交",
	first: pattern_ud_up_1_down_1_down_big,
	later: [liuzitou, p_fu]
}
Characters[Characters.length] = {
	char: "次",
	first: pattern_lr_left_1_right_1_right_big,
	later: [liangdianshui, p_qian]
}
Characters[Characters.length] = {
	char: "衣",
	first: pattern_single,
	later: [dian, heng, pie, shuzheti, pie, na]
}
Characters[Characters.length] = {
	char: "产",
	first: pattern_single,
	later: [dian, heng, dian, pie, heng, pie]
}
Characters[Characters.length] = {
	char: "决",
	first: pattern_lr_left_1_right_1_right_big,
	later: [liangdianshui, z_jueziyou]
}
Characters[Characters.length] = {
	char: "充",
	first: pattern_ud_up_1_down_1_down_big,
	later: [d_chongzitou, p_er]
}
Characters[Characters.length] = {
	char: "妄",
	first: pattern_ud_up_1_down_1_down_big,
	later: [d_wang, z_nv]
}
Characters[Characters.length] = {
	char: "闭",
	first: pattern_round_up,
	later: [d_men, h_cai]
}
Characters[Characters.length] = {
	char: "问",
	first: pattern_round_up,
	later: [d_men, s_kou]
}
Characters[Characters.length] = {
	char: "闯",
	first: pattern_round_up,
	later: [d_men, z_ma]
}
Characters[Characters.length] = {
	char: "羊",
	first: pattern_single,
	later: [dian, pie, heng, heng, heng, shu]
}
Characters[Characters.length] = {
	char: "并",
	first: pattern_ud_up_1_down_1_down_big,
	later: [lanzitou, h_kai]
}
Characters[Characters.length] = {
	char: "关",
	first: pattern_ud_up_1_down_1_down_big,
	later: [lanzitou, h_tian]
}
Characters[Characters.length] = {
	char: "米",
	first: pattern_single,
	later: [dian, pie, heng, shu, pie, na]
}
Characters[Characters.length] = {
	char: "灯",
	first: pattern_lr_left_1_right_1_right_big,
	later: [huozipang, h_ding]
}
Characters[Characters.length] = {
	char: "州",
	first: pattern_single,
	later: [dian, pie, dian, shu, dian, shu]
}
Characters[Characters.length] = {
	char: "汗",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, h_gan]
}
Characters[Characters.length] = {
	char: "污",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, h_kui]
}
Characters[Characters.length] = {
	char: "江",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, h_gong]
}
Characters[Characters.length] = {
	char: "池",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, z_ye]
}
Characters[Characters.length] = {
	char: "汤",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, z_yangziyou]
}
Characters[Characters.length] = {
	char: "忙",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shuxinpang, d_wang]
}
Characters[Characters.length] = {
	char: "兴",
	first: pattern_single,
	later: [dian, dian, pie, heng, pie, dian]
}
Characters[Characters.length] = {
	char: "宇",
	first: pattern_ud_up_1_down_1_down_big,
	later: [baogaitou, h_yushi]
}
Characters[Characters.length] = {
	char: "守",
	first: pattern_ud_up_1_down_1_down_big,
	later: [baogaitou, h_cun]
}
Characters[Characters.length] = {
	char: "宅",
	first: pattern_ud_up_1_down_1_down_big,
	later: [baogaitou, p_tuoziyou]
}
Characters[Characters.length] = {
	char: "字",
	first: pattern_ud_up_1_down_1_down_big,
	later: [baogaitou, z_zi]
}
Characters[Characters.length] = {
	char: "安",
	first: pattern_ud_up_1_down_1_down_big,
	later: [baogaitou, z_nv]
}
Characters[Characters.length] = {
	char: "讲",
	first: pattern_lr_left_1_right_1_right_big,
	later: [yanzipang, h_jing]
}
Characters[Characters.length] = {
	char: "军",
	first: pattern_ud_up_1_down_1_down_big,
	later: [tubaogai, h_che]
}
Characters[Characters.length] = {
	char: "许",
	first: pattern_lr_left_1_right_1_right_big,
	later: [yanzipang, p_wu]
}
Characters[Characters.length] = {
	char: "论",
	first: pattern_lr_left_1_right_1_right_big,
	later: [yanzipang, p_lun]
}
Characters[Characters.length] = {
	char: "农",
	first: pattern_single,
	later: [dian, henggou, pie, shuzheti, pie, na]
}
Characters[Characters.length] = {
	char: "讽",
	first: pattern_lr_left_1_right_2,
	later: [yanzipang, fengzitou, cha]
}
Characters[Characters.length] = {
	char: "设",
	first: pattern_lr_left_1_right_2,
	later: [yanzipang, p_ji, z_you]
}
Characters[Characters.length] = {
	char: "访",
	first: pattern_lr_left_1_right_1_right_big,
	later: [yanzipang, d_fang]
}
Characters[Characters.length] = {
	char: "寻",
	first: pattern_ud_up_1_down_1_down_big,
	later: [xunzitou, h_cun]
}
Characters[Characters.length] = {
	char: "那",
	first: pattern_lr_left_1_right_1_left_big,
	later: [z_nazizuo, youerpang]
}
Characters[Characters.length] = {
	char: "迅",
	first: pattern_round_left_down,
	later: [z_xunziyou, zouzhidi]
}
Characters[Characters.length] = {
	char: "尽",
	first: pattern_ud_up_1_down_1_up_big,
	later: [z_chi, d_ld_sl]
}
Characters[Characters.length] = {
	char: "导",
	first: pattern_ud_up_1_down_1_up_big,
	later: [z_si, h_cun]
}
Characters[Characters.length] = {
	char: "异",
	first: pattern_ud_up_1_down_1_up_big,
	later: [z_si, h_piecao]
}
Characters[Characters.length] = {
	char: "孙",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_zi, z_xiao]
}
Characters[Characters.length] = {
	char: "阵",
	first: pattern_lr_left_1_right_1_right_big,
	later: [zuoerpang, h_che]
}
Characters[Characters.length] = {
	char: "阳",
	first: pattern_lr_left_1_right_1_right_big,
	later: [zuoerpang, s_ri]
}
Characters[Characters.length] = {
	char: "收",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_shouzizuo, fanwenpang]
}
Characters[Characters.length] = {
	char: "阶",
	first: pattern_lr_left_1_right_1_right_big,
	later: [zuoerpang, p_jie]
}
Characters[Characters.length] = {
	char: "阴",
	first: pattern_lr_left_1_right_1_right_big,
	later: [zuoerpang, p_yue]
}
Characters[Characters.length] = {
	char: "防",
	first: pattern_lr_left_1_right_1_right_big,
	later: [zuoerpang, d_fang]
}
Characters[Characters.length] = {
	char: "奸",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_nv, h_gan]
}
Characters[Characters.length] = {
	char: "如",
	first: pattern_lr_left_1_right_1_left_big,
	later: [z_nv, s_kou]
}
Characters[Characters.length] = {
	char: "妇",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_nv, xunzitou]
}
Characters[Characters.length] = {
	char: "好",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_nv, z_zi]
}
Characters[Characters.length] = {
	char: "她",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_nv, z_ye]
}
Characters[Characters.length] = {
	char: "妈",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_nv, z_ma]
}
Characters[Characters.length] = {
	char: "戏",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_you, h_ge]
}
Characters[Characters.length] = {
	char: "羽",
	first: pattern_lr_left_1_right_1_left_big,
	later: [z_xi, z_xi]
}
Characters[Characters.length] = {
	char: "观",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_you, s_jian]
}
Characters[Characters.length] = {
	char: "欢",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_you, p_qian]
}
Characters[Characters.length] = {
	char: "买",
	first: pattern_ud_up_1_down_1_down_big,
	later: [henggou, d_tou]
}
Characters[Characters.length] = {
	char: "红",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jiaosipang, h_gong]
}
Characters[Characters.length] = {
	char: "纤",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jiaosipang, p_thousand]
}
Characters[Characters.length] = {
	char: "级",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jiaosipang, z_ji]
}
Characters[Characters.length] = {
	char: "约",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jiaosipang, p_shao]
}
Characters[Characters.length] = {
	char: "纪",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jiaosipang, z_ji]
}
Characters[Characters.length] = {
	char: "驰",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_ma, z_ye]
}
Characters[Characters.length] = {
	char: "巡",
	first: pattern_round_left_down,
	later: [sanzhe, zouzhidi]
}

/* 七画 */
Characters[Characters.length] = {
	char: "寿",
	first: pattern_ud_up_1_down_1_up_big,
	later: [h_piefeng, h_cun]
}
Characters[Characters.length] = {
	char: "弄",
	first: pattern_ud_up_1_down_1_up_big,
	later: [h_wang, h_piecao]
}
Characters[Characters.length] = {
	char: "麦",
	first: pattern_ud_up_1_down_1_up_big,
	later: [h_qingzitou, zhewen]
}
Characters[Characters.length] = {
	char: "形",
	first: pattern_lr_left_1_right_1_left_big,
	later: [h_kai, sanpie]
}
Characters[Characters.length] = {
	char: "进",
	first: pattern_round_left_down,
	later: [h_jing, zouzhidi]
}
Characters[Characters.length] = {
	char: "戒",
	first: pattern_round_right_up,
	later: [shizikuang, h_piecao]
}
Characters[Characters.length] = {
	char: "吞",
	first: pattern_ud_up_1_down_1_up_big,
	later: [h_tian, s_kou]
}
Characters[Characters.length] = {
	char: "远",
	first: pattern_round_left_down,
	later: [h_yuan, zouzhidi]
}
Characters[Characters.length] = {
	char: "违",
	first: pattern_round_left_down,
	later: [h_wei, zouzhidi]
}
Characters[Characters.length] = {
	char: "运",
	first: pattern_round_left_down,
	later: [h_yun, zouzhidi]
}
Characters[Characters.length] = {
	char: "扶",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, h_fu]
}
Characters[Characters.length] = {
	char: "抚",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, h_wuyou]
}
Characters[Characters.length] = {
	char: "坛",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_tu, h_yun]
}
Characters[Characters.length] = {
	char: "技",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, h_zhi]
}
Characters[Characters.length] = {
	char: "坏",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_tu, h_bu]
}
Characters[Characters.length] = {
	char: "扰",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, youzishen, dian]
}
Characters[Characters.length] = {
	char: "拒",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, h_ju]
}
Characters[Characters.length] = {
	char: "找",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, h_ge]
}
Characters[Characters.length] = {
	char: "批",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, p_bi, p_bi]
}
Characters[Characters.length] = {
	char: "扯",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, s_zhi]
}
Characters[Characters.length] = {
	char: "址",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_tu, s_zhi]
}
Characters[Characters.length] = {
	char: "走",
	first: pattern_single,
	later: [heng, shu, heng, shu, heng, pie, na]
}
Characters[Characters.length] = {
	char: "抄",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, s_shao]
}
Characters[Characters.length] = {
	char: "坝",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_tu, s_bei]
}
Characters[Characters.length] = {
	char: "贡",
	first: pattern_ud_up_1_down_1_down_big,
	later: [h_gong, s_bei]
}
Characters[Characters.length] = {
	char: "攻",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_gong, fanwenpang]
}
Characters[Characters.length] = {
	char: "赤",
	first: pattern_single,
	later: [heng, shu, heng, pie, shugou, pie, dian]
}
Characters[Characters.length] = {
	char: "折",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, p_jin]
}
Characters[Characters.length] = {
	char: "抓",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, p_zhao]
}
Characters[Characters.length] = {
	char: "扮",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, p_fen]
}
Characters[Characters.length] = {
	char: "抢",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, p_cang]
}
Characters[Characters.length] = {
	char: "孝",
	first: pattern_ud_up_1_down_1_up_big,
	later: [laozitou, z_zi]
}
Characters[Characters.length] = {
	char: "均",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_tu, p_yun]
}
Characters[Characters.length] = {
	char: "抛",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, p_nine, z_li]
}
Characters[Characters.length] = {
	char: "投",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, p_ji, z_you]
}
Characters[Characters.length] = {
	char: "坟",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_tu, d_wen]
}
Characters[Characters.length] = {
	char: "抗",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, d_kang]
}
Characters[Characters.length] = {
	char: "坑",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_tu, d_kang]
}
Characters[Characters.length] = {
	char: "坊",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_tu, d_fang]
}
Characters[Characters.length] = {
	char: "抖",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, d_dou]
}
Characters[Characters.length] = {
	char: "护",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, d_hu]
}
Characters[Characters.length] = {
	char: "壳",
	first: pattern_ud_up_1_down_1_down_big,
	later: [h_shi, p_rong]
}
Characters[Characters.length] = {
	char: "志",
	first: pattern_ud_up_1_down_1_down_big,
	later: [h_shi, d_xin]
}
Characters[Characters.length] = {
	char: "扭",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, z_chou]
}
Characters[Characters.length] = {
	char: "块",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_tu, z_jueziyou]
}
Characters[Characters.length] = {
	char: "声",
	first: pattern_ud_up_1_down_1_down_big,
	later: [h_shi, z_meizitou]
}
Characters[Characters.length] = {
	char: "把",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, z_ba]
}
Characters[Characters.length] = {
	char: "报",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, z_baoziyou]
}
Characters[Characters.length] = {
	char: "却",
	first: pattern_lr_left_1_right_1_left_big,
	later: [h_qu, danerpang]
}
Characters[Characters.length] = {
	char: "劫",
	first: pattern_lr_left_1_right_1_left_big,
	later: [h_qu, z_li]
}
Characters[Characters.length] = {
	char: "芽",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caozitou, h_ya]
}
Characters[Characters.length] = {
	char: "花",
	first: pattern_ud_up_1_down_2,
	later: [caozitou, danrenpang, h_seven]
}
Characters[Characters.length] = {
	char: "芹",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caozitou, p_jin]
}
Characters[Characters.length] = {
	char: "芬",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caozitou, p_fen]
}
Characters[Characters.length] = {
	char: "苍",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caozitou, p_cang]
}
Characters[Characters.length] = {
	char: "芳",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caozitou, d_fang]
}
Characters[Characters.length] = {
	char: "严",
	first: pattern_single,
	later: [heng, shu, shu, dian, pie, heng, pie]
}
Characters[Characters.length] = {
	char: "芦",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caozitou, d_hu]
}
Characters[Characters.length] = {
	char: "劳",
	first: pattern_ud_up_1_down_2,
	later: [caozitou, tubaogai, z_li]
}
Characters[Characters.length] = {
	char: "克",
	first: pattern_ud_up_middle_down,
	later: [h_shi, s_kou, p_er]
}
Characters[Characters.length] = {
	char: "苏",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caozitou, z_ban]
}
Characters[Characters.length] = {
	char: "杆",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, h_gan]
}
Characters[Characters.length] = {
	char: "杠",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, h_gong]
}
Characters[Characters.length] = {
	char: "杜",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, h_tu]
}
Characters[Characters.length] = {
	char: "材",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, h_cai]
}
Characters[Characters.length] = {
	char: "村",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, h_cun]
}
Characters[Characters.length] = {
	char: "杏",
	first: pattern_ud_up_1_down_1_up_big,
	later: [h_mu, s_kou]
}
Characters[Characters.length] = {
	char: "极",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, p_jige]
}
Characters[Characters.length] = {
	char: "李",
	first: pattern_ud_up_1_down_1_down_big,
	later: [h_mu, z_zi]
}
Characters[Characters.length] = {
	char: "杨",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, z_yangziyou]
}
Characters[Characters.length] = {
	char: "求",
	first: pattern_single,
	later: [heng, shugou, dian, heng, pie, na, dian]
}
Characters[Characters.length] = {
	char: "更",
	first: pattern_single,
	later: [heng, shu, hengzheshu, heng, heng, pie, na]
}
Characters[Characters.length] = {
	char: "束",
	first: pattern_single,
	later: [heng, shu, hengzheshu, heng, shu, pie, na]
}
Characters[Characters.length] = {
	char: "豆",
	first: pattern_single,
	later: [heng, shu, hengzheshu, heng, dian, pie, heng]
}
Characters[Characters.length] = {
	char: "两",
	first: pattern_single,
	later: [heng, shu, hengzheshugou, pie, dian, pie, dian]
}
Characters[Characters.length] = {
	char: "丽",
	first: pattern_ud_up_1_down_2,
	later: [heng, tongzikuang, dian, tongzikuang, dian]
}
Characters[Characters.length] = {
	char: "医",
	first: pattern_round_left,
	later: [jiangzikuang, p_shi]
}
Characters[Characters.length] = {
	char: "辰",
	first: pattern_single,
	later: [heng, heng, heng, pie, shuzheti, pie, na]
}
Characters[Characters.length] = {
	char: "励",
	first: pattern_lr_left_2_right_1,
	later: [h_chang, h_wan, z_li]
}
Characters[Characters.length] = {
	char: "否",
	first: pattern_ud_up_1_down_1_up_big,
	later: [h_bu, s_kou]
}
Characters[Characters.length] = {
	char: "还",
	first: pattern_round_left_down,
	later: [h_bu, zouzhidi]
}
Characters[Characters.length] = {
	char: "歼",
	first: pattern_lr_left_1_right_1_left_big,
	later: [h_dai, p_thousand]
}
Characters[Characters.length] = {
	char: "来",
	first: pattern_single,
	later: [heng, dian, pie, heng, shu, pie, na]
}
Characters[Characters.length] = {
	char: "连",
	first: pattern_round_left_down,
	later: [h_che, zouzhidi]
}
Characters[Characters.length] = {
	char: "步",
	first: pattern_ud_up_1_down_1_up_big,
	later: [s_zhi, s_shaowud]
}
Characters[Characters.length] = {
	char: "坚",
	first: pattern_ud_up_2_down_1,
	later: [s_liangshu, z_you, h_tu]
}
Characters[Characters.length] = {
	char: "旱",
	first: pattern_ud_up_1_down_1_up_big,
	later: [s_ri, h_gan]
}
Characters[Characters.length] = {
	char: "盯",
	first: pattern_lr_left_1_right_1_left_big,
	later: [s_mu, h_ding]
}
Characters[Characters.length] = {
	char: "呈",
	first: pattern_ud_up_1_down_1_down_big,
	later: [s_kou, h_wang]
}
Characters[Characters.length] = {
	char: "时",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_ri, h_cun]
}
Characters[Characters.length] = {
	char: "吴",
	first: pattern_ud_up_1_down_1_down_big,
	later: [s_kou, h_tian]
}
Characters[Characters.length] = {
	char: "助",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_qie, z_li]
}
Characters[Characters.length] = {
	char: "县",
	first: pattern_ud_up_1_down_1_up_big,
	later: [s_qie, sigong]
}
Characters[Characters.length] = {
	char: "里",
	first: pattern_single,
	later: [shu, hengzheshu, heng, heng, shu, heng, heng]
}
Characters[Characters.length] = {
	char: "呆",
	first: pattern_ud_up_1_down_1_down_big,
	later: [s_kou, h_mu]
}
Characters[Characters.length] = {
	char: "园",
	first: pattern_round_whole,
	later: [s_kou, h_yuan]
}
Characters[Characters.length] = {
	char: "旷",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_ri, d_guang]
}
Characters[Characters.length] = {
	char: "围",
	first: pattern_round_whole,
	later: [s_kou, h_wei]
}
Characters[Characters.length] = {
	char: "呀",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, h_ya]
}
Characters[Characters.length] = {
	char: "吨",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, h_tun]
}
Characters[Characters.length] = {
	char: "足",
	first: pattern_single,
	later: [shu, hengzheshu, heng, shu, heng, pie, na]
}
Characters[Characters.length] = {
	char: "邮",
	first: pattern_lr_left_1_right_1_left_big,
	later: [s_you, youerpang]
}
Characters[Characters.length] = {
	char: "男",
	first: pattern_ud_up_1_down_1_up_big,
	later: [s_tian, z_li]
}
Characters[Characters.length] = {
	char: "困",
	first: pattern_round_whole,
	later: [s_kou, h_mu]
}
Characters[Characters.length] = {
	char: "吵",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, s_shao]
}
Characters[Characters.length] = {
	char: "串",
	first: pattern_single,
	later: [shu, hengzheshu, heng, shu, hengzheshu, heng, shu]
}
Characters[Characters.length] = {
	char: "员",
	first: pattern_ud_up_1_down_1_down_big,
	later: [s_kou, s_bei]
}
Characters[Characters.length] = {
	char: "听",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, p_jin]
}
Characters[Characters.length] = {
	char: "吩",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, p_fen]
}
Characters[Characters.length] = {
	char: "吹",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, p_qian]
}
Characters[Characters.length] = {
	char: "呜",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, p_wuya]
}
Characters[Characters.length] = {
	char: "吧",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, z_ba]
}
Characters[Characters.length] = {
	char: "吼",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, z_zi, shuwanhenggou]
}
Characters[Characters.length] = {
	char: "别",
	first: pattern_lr_left_2_right_1,
	later: [s_kou, z_li, lidaopang]
}
Characters[Characters.length] = {
	char: "岗",
	first: pattern_ud_up_1_down_1_down_big,
	later: [s_shan, s_gang]
}
Characters[Characters.length] = {
	char: "帐",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_jin, p_chang]
}
Characters[Characters.length] = {
	char: "财",
	first: pattern_lr_left_1_right_1_left_big,
	later: [s_bei, h_cai]
}
Characters[Characters.length] = {
	char: "针",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jinzipang, h_ten]
}
Characters[Characters.length] = {
	char: "钉",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jinzipang, h_ding]
}
Characters[Characters.length] = {
	char: "告",
	first: pattern_ud_up_1_down_1_up_big,
	later: [p_niuwuwei, s_kou]
}
Characters[Characters.length] = {
	char: "我",
	first: pattern_single,
	later: [pie, heng, shugou, heng, nagou, pie, dian]
}
Characters[Characters.length] = {
	char: "乱",
	first: pattern_lr_left_1_right_1_left_big,
	later: [p_she, shuwanhenggou]
}
Characters[Characters.length] = {
	char: "利",
	first: pattern_lr_left_1_right_1_left_big,
	later: [p_he, lidaopang]
}
Characters[Characters.length] = {
	char: "秃",
	first: pattern_ud_up_1_down_1_up_big,
	later: [p_he, p_ji]
}
Characters[Characters.length] = {
	char: "秀",
	first: pattern_ud_up_1_down_1_up_big,
	later: [p_he, z_nai]
}
Characters[Characters.length] = {
	char: "私",
	first: pattern_lr_left_1_right_1_left_big,
	later: [p_he, sigong]
}
Characters[Characters.length] = {
	char: "每",
	first: pattern_ud_up_1_down_1_down_big,
	later: [pieheng, z_mu]
}
Characters[Characters.length] = {
	char: "兵",
	first: pattern_ud_up_1_down_1_up_big,
	later: [p_qiu, p_eight]
}
Characters[Characters.length] = {
	char: "估",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, h_gu]
}
Characters[Characters.length] = {
	char: "体",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, h_ben]
}
Characters[Characters.length] = {
	char: "何",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, h_ke]
}
Characters[Characters.length] = {
	char: "但",
	first: pattern_lr_left_1_right_2,
	later: [danrenpang, s_ri, heng]
}
Characters[Characters.length] = {
	char: "伸",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, s_shen]
}
Characters[Characters.length] = {
	char: "作",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, p_zha]
}
Characters[Characters.length] = {
	char: "伯",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, p_bai]
}
Characters[Characters.length] = {
	char: "伶",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, p_ling]
}
Characters[Characters.length] = {
	char: "佣",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, p_yong]
}
Characters[Characters.length] = {
	char: "低",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, p_di]
}
Characters[Characters.length] = {
	char: "你",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, p_erya]
}
Characters[Characters.length] = {
	char: "住",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, d_zhu]
}
Characters[Characters.length] = {
	char: "位",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, d_li]
}
Characters[Characters.length] = {
	char: "伴",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, d_ban]
}
Characters[Characters.length] = {
	char: "身",
	first: pattern_single,
	later: [pie, shu, hengzheshugou, heng, heng, heng, pie]
}
Characters[Characters.length] = {
	char: "皂",
	first: pattern_ud_up_1_down_1_up_big,
	later: [p_bai, h_seven]
}
Characters[Characters.length] = {
	char: "佛",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, z_fu]
}
Characters[Characters.length] = {
	char: "近",
	first: pattern_round_left_down,
	later: [p_jin, zouzhidi]
}
Characters[Characters.length] = {
	char: "彻",
	first: pattern_lr_left_1_right_2,
	later: [shuangrenpang, h_seven, z_dao]
}
Characters[Characters.length] = {
	char: "役",
	first: pattern_lr_left_1_right_2,
	later: [shuangrenpang, p_ji, z_you]
}
Characters[Characters.length] = {
	char: "返",
	first: pattern_round_left_down,
	later: [p_fanzhi, zouzhidi]
}
Characters[Characters.length] = {
	char: "余",
	first: pattern_ud_up_1_down_1_down_big,
	later: [p_ren, h_yuzidi]
}
Characters[Characters.length] = {
	char: "希",
	first: pattern_ud_up_1_down_1_down_big,
	later: [cha, h_budai]
}
Characters[Characters.length] = {
	char: "坐",
	first: pattern_ud_up_2_down_1,
	later: [p_ren, p_ren, h_tu]
}
Characters[Characters.length] = {
	char: "谷",
	first: pattern_ud_up_1_down_2,
	later: [p_eight, p_ren, s_kou]
}
Characters[Characters.length] = {
	char: "妥",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caizitou, z_nv]
}
Characters[Characters.length] = {
	char: "含",
	first: pattern_ud_up_1_down_1_up_big,
	later: [p_jintian, s_kou]
}
Characters[Characters.length] = {
	char: "邻",
	first: pattern_lr_left_1_right_1_left_big,
	later: [p_ling, youerpang]
}
Characters[Characters.length] = {
	char: "岔",
	first: pattern_ud_up_1_down_1_up_big,
	later: [p_fen, s_shan]
}
Characters[Characters.length] = {
	char: "肝",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_yue, h_gan]
}
Characters[Characters.length] = {
	char: "肚",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_yue, h_tu]
}
Characters[Characters.length] = {
	char: "肠",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_yue, z_yangziyou]
}
Characters[Characters.length] = {
	char: "龟",
	first: pattern_single,
	later: [pie, hengzhepie, shu, hengzheshu, heng, heng, shuwanhenggou]
}
Characters[Characters.length] = {
	char: "免",
	first: pattern_single,
	later: [pie, hengzhepie, shu, hengzheshu, heng, pie, shuwanhenggou]
}
Characters[Characters.length] = {
	char: "狂",
	first: pattern_lr_left_1_right_1_right_big,
	later: [fanquanpang, h_wang]
}
Characters[Characters.length] = {
	char: "犹",
	first: pattern_lr_left_1_right_1_right_big,
	later: [fanquanpang, youzishen, dian]
}
Characters[Characters.length] = {
	char: "角",
	first: pattern_single,
	later: [pie, hengzhepie, pie, hengzheshugou, heng, heng, shu]
}
Characters[Characters.length] = {
	char: "删",
	first: pattern_lr_left_1_right_1_left_big,
	later: [p_ce, lidaopang]
}
Characters[Characters.length] = {
	char: "条",
	first: pattern_ud_up_1_down_1_up_big,
	later: [zhewen, h_mugou]
}
Characters[Characters.length] = {
	char: "卵",
	first: pattern_lr_left_1_right_1_left_big,
	later: [p_maozizuo, dian, danrenpang, dian]
}
Characters[Characters.length] = {
	char: "岛",
	first: pattern_round_right_up,
	later: [p_niaowuheng, s_shan]
}
Characters[Characters.length] = {
	char: "迎",
	first: pattern_round_left_down,
	later: [p_angzizuo, danerpang, zouzhidi]
}
Characters[Characters.length] = {
	char: "饭",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shichi, fanzipang, z_you]
}
Characters[Characters.length] = {
	char: "饮",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shichi, p_qian]
}
Characters[Characters.length] = {
	char: "系",
	first: pattern_ud_up_1_down_2,
	later: [pie, youzipang, z_xiao]
}
Characters[Characters.length] = {
	char: "言",
	first: pattern_single,
	later: [dian, heng, heng, heng, shu, hengzheshu, heng]
}
Characters[Characters.length] = {
	char: "冻",
	first: pattern_lr_left_1_right_1_right_big,
	later: [liangdianshui, h_dong]
}
Characters[Characters.length] = {
	char: "状",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jiangzipang, h_quan]
}
Characters[Characters.length] = {
	char: "亩",
	first: pattern_ud_up_1_down_1_down_big,
	later: [liuzitou, s_tian]
}
Characters[Characters.length] = {
	char: "况",
	first: pattern_lr_left_1_right_2,
	later: [liangdianshui, s_kou, p_er]
}
Characters[Characters.length] = {
	char: "床",
	first: pattern_round_left_up,
	later: [d_guang, h_mu]
}
Characters[Characters.length] = {
	char: "库",
	first: pattern_round_left_up,
	later: [d_guang, h_che]
}
Characters[Characters.length] = {
	char: "疗",
	first: pattern_round_left_up,
	later: [bingzitou, z_le]
}
Characters[Characters.length] = {
	char: "应",
	first: pattern_round_left_up,
	later: [d_guang, d_xingzitou, heng]
}
Characters[Characters.length] = {
	char: "冷",
	first: pattern_lr_left_1_right_1_right_big,
	later: [liangdianshui, p_ling]
}
Characters[Characters.length] = {
	char: "这",
	first: pattern_round_left_down,
	later: [d_wen, zouzhidi]
}
Characters[Characters.length] = {
	char: "序",
	first: pattern_round_left_up,
	later: [d_guang, z_yu]
}
Characters[Characters.length] = {
	char: "辛",
	first: pattern_ud_up_1_down_1_up_big,
	later: [d_li, h_ten]
}
Characters[Characters.length] = {
	char: "弃",
	first: pattern_ud_up_1_down_1_up_big,
	later: [d_chongzitou, h_piecao]
}
Characters[Characters.length] = {
	char: "冶",
	first: pattern_lr_left_1_right_2,
	later: [liangdianshui, sigong, s_kou]
}
Characters[Characters.length] = {
	char: "忘",
	first: pattern_ud_up_1_down_1_up_big,
	later: [d_wang, d_xin]
}
Characters[Characters.length] = {
	char: "闲",
	first: pattern_round_up,
	later: [d_men, h_mu]
}
Characters[Characters.length] = {
	char: "间",
	first: pattern_round_up,
	later: [d_men, s_ri]
}
Characters[Characters.length] = {
	char: "闷",
	first: pattern_round_up,
	later: [d_men, d_xin]
}
Characters[Characters.length] = {
	char: "判",
	first: pattern_lr_left_1_right_1_left_big,
	later: [d_panzizuo, lidaopang]
}
Characters[Characters.length] = {
	char: "灶",
	first: pattern_lr_left_1_right_1_right_big,
	later: [huozipang, h_tu]
}
Characters[Characters.length] = {
	char: "灿",
	first: pattern_lr_left_1_right_1_right_big,
	later: [huozipang, s_shan]
}
Characters[Characters.length] = {
	char: "弟",
	first: pattern_single,
	later: [dian, pie, hengzheshu, heng, shuzhehengzheshugou, shu, pie]
}
Characters[Characters.length] = {
	char: "汪",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, h_wang]
}
Characters[Characters.length] = {
	char: "沙",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, s_shao]
}
Characters[Characters.length] = {
	char: "汽",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, p_qi]
}
Characters[Characters.length] = {
	char: "沃",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, p_yao]
}
Characters[Characters.length] = {
	char: "泛",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, pie, d_zhi]
}
Characters[Characters.length] = {
	char: "沟",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, p_gou]
}
Characters[Characters.length] = {
	char: "没",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, p_ji, z_you]
}
Characters[Characters.length] = {
	char: "沈",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, p_shenziyou]
}
Characters[Characters.length] = {
	char: "沉",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, p_rong]
}
Characters[Characters.length] = {
	char: "怀",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shuxinpang, h_bu]
}
Characters[Characters.length] = {
	char: "忧",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shuxinpang, youzishen, dian]
}
Characters[Characters.length] = {
	char: "快",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shuxinpang, z_jueziyou]
}
Characters[Characters.length] = {
	char: "完",
	first: pattern_ud_up_1_down_1_down_big,
	later: [baogaitou, h_yuan]
}
Characters[Characters.length] = {
	char: "宋",
	first: pattern_ud_up_1_down_1_down_big,
	later: [baogaitou, h_mu]
}
Characters[Characters.length] = {
	char: "宏",
	first: pattern_ud_up_1_down_1_down_big,
	later: [baogaitou, h_hengpie, sigong]
}
Characters[Characters.length] = {
	char: "牢",
	first: pattern_ud_up_1_down_1_down_big,
	later: [baogaitou, p_niu]
}
Characters[Characters.length] = {
	char: "究",
	first: pattern_ud_up_1_down_1_up_big,
	later: [xuezitou, p_nine]
}
Characters[Characters.length] = {
	char: "穷",
	first: pattern_ud_up_1_down_1_up_big,
	later: [xuezitou, z_li]
}
Characters[Characters.length] = {
	char: "灾",
	first: pattern_ud_up_1_down_1_down_big,
	later: [baogaitou, huozipang]
}
Characters[Characters.length] = {
	char: "良",
	first: pattern_single,
	later: [dian, hengzheshu, heng, heng, shuzheti, pie, na]
}
Characters[Characters.length] = {
	char: "证",
	first: pattern_lr_left_1_right_1_right_big,
	later: [yanzipang, h_zheng]
}
Characters[Characters.length] = {
	char: "启",
	first: pattern_round_left_up,
	later: [d_hu, s_kou]
}
Characters[Characters.length] = {
	char: "评",
	first: pattern_lr_left_1_right_1_right_big,
	later: [yanzipang, h_ping]
}
Characters[Characters.length] = {
	char: "补",
	first: pattern_lr_left_1_right_1_left_big,
	later: [buyipang, s_bu]
}
Characters[Characters.length] = {
	char: "初",
	first: pattern_lr_left_1_right_1_right_big,
	later: [buyipang, z_dao]
}
Characters[Characters.length] = {
	char: "社",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shizipang, h_tu]
}
Characters[Characters.length] = {
	char: "识",
	first: pattern_lr_left_1_right_1_right_big,
	later: [yanzipang, s_kou, p_eight]
}
Characters[Characters.length] = {
	char: "诉",
	first: pattern_lr_left_1_right_1_right_big,
	later: [yanzipang, p_jin, dian]
}
Characters[Characters.length] = {
	char: "诊",
	first: pattern_lr_left_1_right_1_right_big,
	later: [yanzipang, p_ren, sanpie]
}
Characters[Characters.length] = {
	char: "词",
	first: pattern_lr_left_1_right_1_right_big,
	later: [yanzipang, z_siyi]
}
Characters[Characters.length] = {
	char: "译",
	first: pattern_lr_left_1_right_1_right_big,
	later: [yanzipang, z_yiziyou]
}
Characters[Characters.length] = {
	char: "君",
	first: pattern_round_left_up,
	later: [z_yin, s_kou]
}
Characters[Characters.length] = {
	char: "灵",
	first: pattern_ud_up_1_down_1_down_big,
	later: [luzitou, huozipang]
}
Characters[Characters.length] = {
	char: "即",
	first: pattern_lr_left_1_right_1_left_big,
	later: [z_jizizuo, danerpang]
}
Characters[Characters.length] = {
	char: "层",
	first: pattern_round_left_up,
	later: [z_shizitou, h_yun]
}
Characters[Characters.length] = {
	char: "尿",
	first: pattern_round_left_up,
	later: [z_shizitou, z_shui]
}
Characters[Characters.length] = {
	char: "尾",
	first: pattern_round_left_up,
	later: [z_shizitou, p_mao]
}
Characters[Characters.length] = {
	char: "迟",
	first: pattern_round_left_down,
	later: [z_chi, zouzhidi]
}
Characters[Characters.length] = {
	char: "局",
	first: pattern_round_left_up,
	later: [z_shizitou, hengzheshugou, s_kou]
}
Characters[Characters.length] = {
	char: "改",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_ji, fanwenpang]
}
Characters[Characters.length] = {
	char: "张",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_gong, p_chang]
}
Characters[Characters.length] = {
	char: "忌",
	first: pattern_ud_up_1_down_1_up_big,
	later: [z_ji, d_xin]
}
Characters[Characters.length] = {
	char: "际",
	first: pattern_lr_left_1_right_1_right_big,
	later: [zuoerpang, h_shiren]
}
Characters[Characters.length] = {
	char: "陆",
	first: pattern_lr_left_1_right_1_right_big,
	later: [zuoerpang, h_jida]
}
Characters[Characters.length] = {
	char: "阿",
	first: pattern_lr_left_1_right_1_right_big,
	later: [zuoerpang, h_ding, s_kou]
}
Characters[Characters.length] = {
	char: "陈",
	first: pattern_lr_left_1_right_1_right_big,
	later: [zuoerpang, h_dong]
}
Characters[Characters.length] = {
	char: "阻",
	first: pattern_lr_left_1_right_1_right_big,
	later: [zuoerpang, s_qie]
}
Characters[Characters.length] = {
	char: "附",
	first: pattern_lr_left_1_right_2,
	later: [zuoerpang, danrenpang, h_cun]
}
Characters[Characters.length] = {
	char: "妙",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_nv, s_shao]
}
Characters[Characters.length] = {
	char: "妖",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_nv, p_yao]
}
Characters[Characters.length] = {
	char: "妨",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_nv, d_fang]
}
Characters[Characters.length] = {
	char: "努",
	first: pattern_ud_up_2_down_1,
	later: [z_nv, z_you, z_li]
}
Characters[Characters.length] = {
	char: "忍",
	first: pattern_ud_up_1_down_1_up_big,
	later: [z_dao, dian, d_xin]
}
Characters[Characters.length] = {
	char: "劲",
	first: pattern_lr_left_1_right_1_left_big,
	later: [z_jingziyou, z_li]
}
Characters[Characters.length] = {
	char: "鸡",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_you, p_niaowuheng, heng]
}
Characters[Characters.length] = {
	char: "驱",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_ma, jiangzikuang, cha]
}
Characters[Characters.length] = {
	char: "纯",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jiaosipang, h_tun]
}
Characters[Characters.length] = {
	char: "纱",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jiaosipang, s_shao]
}
Characters[Characters.length] = {
	char: "纳",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jiaosipang, s_nei]
}
Characters[Characters.length] = {
	char: "纲",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jiaosipang, s_gang]
}
Characters[Characters.length] = {
	char: "驳",
	first: pattern_lr_left_1_right_2,
	later: [z_ma, cha, cha]
}
Characters[Characters.length] = {
	char: "纵",
	first: pattern_lr_left_1_right_2,
	later: [jiaosipang, p_ren, p_ren]
}
Characters[Characters.length] = {
	char: "纷",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jiaosipang, p_fen]
}
Characters[Characters.length] = {
	char: "纸",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jiaosipang, p_shizu]
}
Characters[Characters.length] = {
	char: "纹",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jiaosipang, d_wen]
}
Characters[Characters.length] = {
	char: "纺",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jiaosipang, d_fang]
}
Characters[Characters.length] = {
	char: "驴",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_ma, d_hu]
}
Characters[Characters.length] = {
	char: "纽",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jiaosipang, z_chou]
}

/* 八画 */
Characters[Characters.length] = {
	char: "奉",
	first: pattern_ud_up_1_down_1_up_big,
	later: [h_fengzitou, h_fengzidi]
}
Characters[Characters.length] = {
	char: "玩",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_wang, h_yuan]
}
Characters[Characters.length] = {
	char: "环",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_wang, h_bu]
}
Characters[Characters.length] = {
	char: "武",
	first: pattern_round_right_up,
	later: [heng, shizikuang, s_zhi]
}
Characters[Characters.length] = {
	char: "青",
	first: pattern_ud_up_1_down_1_down_big,
	later: [h_qingzitou, s_yue]
}
Characters[Characters.length] = {
	char: "责",
	first: pattern_ud_up_1_down_1_down_big,
	later: [h_qingzitou, s_bei]
}
Characters[Characters.length] = {
	char: "现",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_wang, s_jian]
}
Characters[Characters.length] = {
	char: "表",
	first: pattern_single,
	later: [heng, heng, shu, heng, pie, shuzheti, pie, na]
}
Characters[Characters.length] = {
	char: "规",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_fu, s_jian]
}
Characters[Characters.length] = {
	char: "抹",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, h_mo]
}
Characters[Characters.length] = {
	char: "拢",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, h_long]
}
Characters[Characters.length] = {
	char: "拔",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, h_you, dian]
}
Characters[Characters.length] = {
	char: "拣",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, h_jianziyou]
}
Characters[Characters.length] = {
	char: "担",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, s_ri, heng]
}
Characters[Characters.length] = {
	char: "坦",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_tu, s_ri, heng]
}
Characters[Characters.length] = {
	char: "押",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, s_jia]
}
Characters[Characters.length] = {
	char: "抽",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, s_you]
}
Characters[Characters.length] = {
	char: "拐",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, s_kou, z_li]
}
Characters[Characters.length] = {
	char: "拖",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, pieheng, z_ye]
}
Characters[Characters.length] = {
	char: "拍",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, p_bai]
}
Characters[Characters.length] = {
	char: "者",
	first: pattern_ud_up_1_down_1_up_big,
	later: [laozitou, s_ri]
}
Characters[Characters.length] = {
	char: "顶",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_ding, h_ye]
}
Characters[Characters.length] = {
	char: "拆",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, p_jin, dian]
}
Characters[Characters.length] = {
	char: "拥",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, p_yong]
}
Characters[Characters.length] = {
	char: "抵",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, p_di]
}
Characters[Characters.length] = {
	char: "拘",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, p_ju]
}
Characters[Characters.length] = {
	char: "势",
	first: pattern_ud_up_2_down_1,
	later: [tishoupang, p_wan, z_li]
}
Characters[Characters.length] = {
	char: "抱",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, baozitou, z_si]
}
Characters[Characters.length] = {
	char: "垃",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_tu, d_li]
}
Characters[Characters.length] = {
	char: "拉",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, d_li]
}
Characters[Characters.length] = {
	char: "拦",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, d_lan]
}
Characters[Characters.length] = {
	char: "拌",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, d_ban]
}
Characters[Characters.length] = {
	char: "幸",
	first: pattern_ud_up_1_down_1_down_big,
	later: [h_tu, lanzitou, h_gan]
}
Characters[Characters.length] = {
	char: "招",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, z_dao, s_kou]
}
Characters[Characters.length] = {
	char: "坡",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_tu, p_pi]
}
Characters[Characters.length] = {
	char: "披",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, p_pi]
}
Characters[Characters.length] = {
	char: "拨",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, z_fa]
}
Characters[Characters.length] = {
	char: "择",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, z_you, h_fengzidi]
}
Characters[Characters.length] = {
	char: "抬",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, sigong, s_kou]
}
Characters[Characters.length] = {
	char: "其",
	first: pattern_single,
	later: [heng, shu, shu, heng, heng, heng, pie, dian]
}
Characters[Characters.length] = {
	char: "取",
	first: pattern_lr_left_1_right_1_left_big,
	later: [h_erduo, z_you]
}
Characters[Characters.length] = {
	char: "苦",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caozitou, h_gu]
}
Characters[Characters.length] = {
	char: "若",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caozitou, h_hengpie, s_kou]
}
Characters[Characters.length] = {
	char: "茂",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caozitou, h_wuxu]
}
Characters[Characters.length] = {
	char: "苹",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caozitou, h_ping]
}
Characters[Characters.length] = {
	char: "苗",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caozitou, s_tian]
}
Characters[Characters.length] = {
	char: "英",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caozitou, s_yang]
}
Characters[Characters.length] = {
	char: "范",
	first: pattern_ud_up_1_down_2,
	later: [caozitou, sandianshui, cangzidi]
}
Characters[Characters.length] = {
	char: "直",
	first: pattern_ud_up_1_down_1_down_big,
	later: [h_hengpie, s_juzitou]
}
Characters[Characters.length] = {
	char: "茄",
	first: pattern_ud_up_1_down_2,
	later: [caozitou, z_li, s_kou]
}
Characters[Characters.length] = {
	char: "茎",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caozitou, z_jingziyou]
}
Characters[Characters.length] = {
	char: "茅",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caozitou, z_yu]
}
Characters[Characters.length] = {
	char: "林",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, h_mu]
}
Characters[Characters.length] = {
	char: "枝",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, h_zhi]
}
Characters[Characters.length] = {
	char: "杯",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, h_bu]
}
Characters[Characters.length] = {
	char: "柜",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, h_ju]
}
Characters[Characters.length] = {
	char: "析",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, p_jin]
}
Characters[Characters.length] = {
	char: "板",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, p_fanzhi]
}
Characters[Characters.length] = {
	char: "松",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, p_gong]
}
Characters[Characters.length] = {
	char: "枪",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, p_cang]
}
Characters[Characters.length] = {
	char: "构",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, p_gou]
}
Characters[Characters.length] = {
	char: "杰",
	first: pattern_ud_up_1_down_1_up_big,
	later: [h_mu, sidiandi]
}
Characters[Characters.length] = {
	char: "述",
	first: pattern_round_left_down,
	later: [h_mu, dian, zouzhidi]
}
Characters[Characters.length] = {
	char: "枕",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, p_shenziyou]
}
Characters[Characters.length] = {
	char: "丧",
	first: pattern_single,
	later: [heng, shu, dian, pie, heng, shuzheti, pie, na]
}
Characters[Characters.length] = {
	char: "或",
	first: pattern_round_right_up,
	later: [h_ge, s_kou, heng]
}
Characters[Characters.length] = {
	char: "画",
	first: pattern_round_down,
	later: [heng, s_tian, xiongzikuang]
}
Characters[Characters.length] = {
	char: "卧",
	first: pattern_lr_left_1_right_1_left_big,
	later: [h_chen, s_bu]
}
Characters[Characters.length] = {
	char: "事",
	first: pattern_single,
	later: [heng, shu, hengzheshu, heng, hengzheshu, heng, heng, shugou]
}
Characters[Characters.length] = {
	char: "刺",
	first: pattern_lr_left_1_right_1_left_big,
	later: [h_cizizuo, lidaopang]
}
Characters[Characters.length] = {
	char: "枣",
	first: pattern_ud_up_1_down_1_up_big,
	later: [h_cizizuo, d_ld_sl]
}
Characters[Characters.length] = {
	char: "雨",
	first: pattern_single,
	later: [heng, shu, hengzheshugou, shu, dian, dian, dian, dian]
}
Characters[Characters.length] = {
	char: "卖",
	first: pattern_ud_up_1_down_2,
	later: [h_shi, henggou, d_tou]
}
Characters[Characters.length] = {
	char: "矿",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_stone, d_guang]
}
Characters[Characters.length] = {
	char: "码",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_stone, z_ma]
}
Characters[Characters.length] = {
	char: "厕",
	first: pattern_round_left_up,
	later: [h_chang, s_bei, lidaopang]
}
Characters[Characters.length] = {
	char: "奔",
	first: pattern_ud_up_1_down_2,
	later: [h_da, h_ten, h_piecao]
}
Characters[Characters.length] = {
	char: "奇",
	first: pattern_ud_up_1_down_1_down_big,
	later: [h_da, h_ke]
}
Characters[Characters.length] = {
	char: "奋",
	first: pattern_ud_up_1_down_1_down_big,
	later: [h_da, s_tian]
}
Characters[Characters.length] = {
	char: "态",
	first: pattern_ud_up_1_down_1_up_big,
	later: [h_tai, d_xin]
}
Characters[Characters.length] = {
	char: "欧",
	first: pattern_lr_left_1_right_1_left_big,
	later: [jiangzikuang, cha, p_qian]
}
Characters[Characters.length] = {
	char: "垄",
	first: pattern_ud_up_1_down_1_up_big,
	later: [h_long, h_tu]
}
Characters[Characters.length] = {
	char: "妻",
	first: pattern_ud_up_1_down_1_up_big,
	later: [h_shixue, z_nv]
}
Characters[Characters.length] = {
	char: "轰",
	first: pattern_ud_up_1_down_2,
	later: [h_che, z_you, z_you]
}
Characters[Characters.length] = {
	char: "顷",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_bi, h_ye]
}
Characters[Characters.length] = {
	char: "转",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_che, h_zhuan]
}
Characters[Characters.length] = {
	char: "斩",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_che, p_jin]
}
Characters[Characters.length] = {
	char: "轮",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_che, p_lun]
}
Characters[Characters.length] = {
	char: "软",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_che, p_qian]
}
Characters[Characters.length] = {
	char: "到",
	first: pattern_lr_left_1_right_1_left_big,
	later: [h_zhiyu, lidaopang]
}
Characters[Characters.length] = {
	char: "非",
	first: pattern_single,
	later: [shu, heng, heng, heng, shu, heng, heng, heng]
}
Characters[Characters.length] = {
	char: "叔",
	first: pattern_lr_left_2_right_1,
	later: [shangzitou, heng, z_xiao, z_you]
}
Characters[Characters.length] = {
	char: "肯",
	first: pattern_ud_up_1_down_1_down_big,
	later: [s_zhi, s_yue]
}
Characters[Characters.length] = {
	char: "齿",
	first: pattern_ud_up_1_down_2,
	later: [s_zhi, p_ren, xiongzikuang]
}
Characters[Characters.length] = {
	char: "些",
	first: pattern_ud_up_2_down_1,
	later: [s_zhi, p_bi, h_two]
}
Characters[Characters.length] = {
	char: "虎",
	first: pattern_round_left_up,
	later: [huzitou, p_ji]
}
Characters[Characters.length] = {
	char: "虏",
	first: pattern_round_left_up,
	later: [huzitou, z_li]
}
Characters[Characters.length] = {
	char: "肾",
	first: pattern_ud_up_2_down_1,
	later: [s_liangshu, z_you, s_yue]
}
Characters[Characters.length] = {
	char: "贤",
	first: pattern_ud_up_2_down_1,
	later: [s_liangshu, z_you, s_bei]
}
Characters[Characters.length] = {
	char: "尚",
	first: pattern_ud_up_1_down_1_down_big,
	later: [guangzitou, tongzikuang, s_kou]
}
Characters[Characters.length] = {
	char: "旺",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_ri, h_wang]
}
Characters[Characters.length] = {
	char: "具",
	first: pattern_ud_up_1_down_1_up_big,
	later: [s_juzitou, p_eight]
}
Characters[Characters.length] = {
	char: "果",
	first: pattern_single,
	later: [shu, hengzheshu, heng, heng, heng, shu, pie, na]
}
Characters[Characters.length] = {
	char: "味",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, h_weilai]
}
Characters[Characters.length] = {
	char: "昆",
	first: pattern_ud_up_1_down_2,
	later: [s_ri, p_bi, p_bi]
}
Characters[Characters.length] = {
	char: "国",
	first: pattern_round_whole,
	later: [s_kou, h_yu]
}
Characters[Characters.length] = {
	char: "昌",
	first: pattern_ud_up_1_down_1_down_big,
	later: [s_ri, s_ri]
}
Characters[Characters.length] = {
	char: "畅",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_shen, z_yangziyou]
}
Characters[Characters.length] = {
	char: "明",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_ri, p_yue]
}
Characters[Characters.length] = {
	char: "易",
	first: pattern_ud_up_1_down_1_down_big,
	later: [s_ri, p_wuyou]
}
Characters[Characters.length] = {
	char: "昂",
	first: pattern_ud_up_1_down_2,
	later: [s_ri, p_angzizuo, danerpang]
}
Characters[Characters.length] = {
	char: "典",
	first: pattern_ud_up_1_down_1_up_big,
	later: [s_dianzitou, p_eight]
}
Characters[Characters.length] = {
	char: "固",
	first: pattern_round_whole,
	later: [s_kou, h_gu]
}
Characters[Characters.length] = {
	char: "忠",
	first: pattern_ud_up_1_down_1_up_big,
	later: [s_zhong, d_xin]
}
Characters[Characters.length] = {
	char: "咐",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, p_ren, h_cun]
}
Characters[Characters.length] = {
	char: "呼",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, p_hu]
}
Characters[Characters.length] = {
	char: "鸣",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, p_niaowuheng, heng]
}
Characters[Characters.length] = {
	char: "咏",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, d_yong]
}
Characters[Characters.length] = {
	char: "呢",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, z_shizitou, p_bi]
}
Characters[Characters.length] = {
	char: "岸",
	first: pattern_ud_up_1_down_2,
	later: [s_shan, h_chang, h_gan]
}
Characters[Characters.length] = {
	char: "岩",
	first: pattern_ud_up_1_down_1_down_big,
	later: [s_shan, h_stone]
}
Characters[Characters.length] = {
	char: "帖",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_jin, s_zhan]
}
Characters[Characters.length] = {
	char: "罗",
	first: pattern_ud_up_1_down_1_down_big,
	later: [s_siwuzhe, p_xi]
}
Characters[Characters.length] = {
	char: "帜",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_jin, s_kou, p_eight]
}
Characters[Characters.length] = {
	char: "岭",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_shan, p_ling]
}
Characters[Characters.length] = {
	char: "凯",
	first: pattern_lr_left_2_right_1,
	later: [s_shan, z_ji, p_ji]
}
Characters[Characters.length] = {
	char: "败",
	first: pattern_lr_left_1_right_1_left_big,
	later: [s_bei, fanwenpang]
}
Characters[Characters.length] = {
	char: "贩",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_bei, p_fan]
}
Characters[Characters.length] = {
	char: "购",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_bei, p_gou]
}
Characters[Characters.length] = {
	char: "图",
	first: pattern_round_whole,
	later: [s_kou, zhewen, d_ld_sl]
}
Characters[Characters.length] = {
	char: "钓",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jinzipang, p_shao]
}
Characters[Characters.length] = {
	char: "制",
	first: pattern_lr_left_1_right_1_left_big,
	later: [p_zhizizuo, lidaopang]
}
Characters[Characters.length] = {
	char: "知",
	first: pattern_lr_left_1_right_1_left_big,
	later: [p_shi, s_kou]
}
Characters[Characters.length] = {
	char: "垂",
	first: pattern_single,
	later: [pie, heng, shu, heng, shu, pie, heng, heng]
}
Characters[Characters.length] = {
	char: "牧",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_niu, fanwenpang]
}
Characters[Characters.length] = {
	char: "物",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_niu, p_wu]
}
Characters[Characters.length] = {
	char: "乖",
	first: pattern_single,
	later: [pie, heng, shu, shu, heng, heng, pie, shuwanhenggou]
}
Characters[Characters.length] = {
	char: "刮",
	first: pattern_lr_left_1_right_1_left_big,
	later: [p_she, lidaopang]
}
Characters[Characters.length] = {
	char: "秆",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_he, h_gan]
}
Characters[Characters.length] = {
	char: "和",
	first: pattern_lr_left_1_right_1_left_big,
	later: [p_he, s_kou]
}
Characters[Characters.length] = {
	char: "季",
	first: pattern_ud_up_1_down_1_up_big,
	later: [p_he, z_zi]
}
Characters[Characters.length] = {
	char: "委",
	first: pattern_ud_up_1_down_1_up_big,
	later: [p_he, z_nv]
}
Characters[Characters.length] = {
	char: "佳",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_ren, h_tu, h_tu]
}
Characters[Characters.length] = {
	char: "侍",
	first: pattern_lr_left_1_right_2,
	later: [danrenpang, h_tu, h_cun]
}
Characters[Characters.length] = {
	char: "供",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, h_xizitou, p_eight]
}
Characters[Characters.length] = {
	char: "使",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, h_li]
}
Characters[Characters.length] = {
	char: "例",
	first: pattern_lr_left_1_right_2,
	later: [danrenpang, h_dai, lidaopang]
}
Characters[Characters.length] = {
	char: "版",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_pian, p_fan]
}
Characters[Characters.length] = {
	char: "侄",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, h_zhiyu]
}
Characters[Characters.length] = {
	char: "侦",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, shangzitou, s_bei]
}
Characters[Characters.length] = {
	char: "侧",
	first: pattern_lr_left_1_right_2,
	later: [danrenpang, s_bei, lidaopang]
}
Characters[Characters.length] = {
	char: "凭",
	first: pattern_ud_up_2_down_1,
	later: [danrenpang, p_rengui, p_ji]
}
Characters[Characters.length] = {
	char: "侨",
	first: pattern_lr_left_1_right_2,
	later: [danrenpang, p_yao, pieshu]
}
Characters[Characters.length] = {
	char: "佩",
	first: pattern_lr_left_1_right_2,
	later: [danrenpang, fengzitou, heng, s_jin]
}
Characters[Characters.length] = {
	char: "货",
	first: pattern_ud_up_2_down_1,
	later: [danrenpang, p_qi, s_bei]
}
Characters[Characters.length] = {
	char: "依",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, d_yifu]
}
Characters[Characters.length] = {
	char: "的",
	first: pattern_lr_left_1_right_1_left_big,
	later: [p_bai, p_shao]
}
Characters[Characters.length] = {
	char: "迫",
	first: pattern_round_left_down,
	later: [p_bai, zouzhidi]
}
Characters[Characters.length] = {
	char: "质",
	first: pattern_round_left_up,
	later: [fanzipang, h_ten, s_bei]
}
Characters[Characters.length] = {
	char: "欣",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_jin, p_qian]
}
Characters[Characters.length] = {
	char: "征",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shuangrenpang, h_zheng]
}
Characters[Characters.length] = {
	char: "往",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shuangrenpang, d_zhu]
}
Characters[Characters.length] = {
	char: "爬",
	first: pattern_round_left_down,
	later: [p_zhao, z_ba]
}
Characters[Characters.length] = {
	char: "彼",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shuangrenpang, p_pi]
}
Characters[Characters.length] = {
	char: "径",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shuangrenpang, z_jingziyou]
}
Characters[Characters.length] = {
	char: "所",
	first: pattern_lr_left_1_right_1_right_big,
	later: [fanquanpang, z_zuokai, p_jin]
}
Characters[Characters.length] = {
	char: "舍",
	first: pattern_ud_up_1_down_2,
	later: [danrenpang, h_gan, s_kou]
}
Characters[Characters.length] = {
	char: "金",
	first: pattern_ud_up_1_down_1_down_big,
	later: [p_ren, h_jinxia]
}
Characters[Characters.length] = {
	char: "命",
	first: pattern_ud_up_1_down_many,
	later: [p_ren, heng, s_kou, danerpang]
}
Characters[Characters.length] = {
	char: "斧",
	first: pattern_ud_up_1_down_1_down_big,
	later: [p_fu, p_jin]
}
Characters[Characters.length] = {
	char: "爸",
	first: pattern_ud_up_1_down_1_down_big,
	later: [p_fu, z_ba]
}
Characters[Characters.length] = {
	char: "采",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caizitou, h_mu]
}
Characters[Characters.length] = {
	char: "受",
	first: pattern_ud_up_1_down_2,
	later: [caizitou, tubaogai, z_you]
}
Characters[Characters.length] = {
	char: "乳",
	first: pattern_lr_left_2_right_1,
	later: [caizitou, z_zi, shuwanhenggou]
}
Characters[Characters.length] = {
	char: "贪",
	first: pattern_ud_up_1_down_1_up_big,
	later: [p_jintian, s_bei]
}
Characters[Characters.length] = {
	char: "念",
	first: pattern_ud_up_1_down_1_up_big,
	later: [p_jintian, d_xin]
}
Characters[Characters.length] = {
	char: "贫",
	first: pattern_ud_up_1_down_1_up_big,
	later: [p_fen, s_bei]
}
Characters[Characters.length] = {
	char: "肤",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_yue, h_fu]
}
Characters[Characters.length] = {
	char: "肺",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_yue, h_shushi]
}
Characters[Characters.length] = {
	char: "肢",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_yue, h_zhi]
}
Characters[Characters.length] = {
	char: "肿",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_yue, s_zhong]
}
Characters[Characters.length] = {
	char: "胀",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_yue, p_chang]
}
Characters[Characters.length] = {
	char: "朋",
	first: pattern_lr_left_1_right_1_left_big,
	later: [p_yue, p_yue]
}
Characters[Characters.length] = {
	char: "股",
	first: pattern_lr_left_1_right_2,
	later: [p_yue, p_ji, z_you]
}
Characters[Characters.length] = {
	char: "肥",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_yue, z_ba]
}
Characters[Characters.length] = {
	char: "服",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_yue, z_baoziyou]
}
Characters[Characters.length] = {
	char: "胁",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_yue, z_ban]
}
Characters[Characters.length] = {
	char: "周",
	first: pattern_round_up,
	later: [zhouzikuang, h_tu, s_kou]
}
Characters[Characters.length] = {
	char: "昏",
	first: pattern_ud_up_1_down_1_up_big,
	later: [p_shizu, s_ri]
}
Characters[Characters.length] = {
	char: "鱼",
	first: pattern_single,
	later: [pie, hengzhepie, shu, hengzheshu, heng, shu, heng, heng]
}
Characters[Characters.length] = {
	char: "兔",
	first: pattern_single,
	later: [pie, hengzhepie, shu, hengzheshu, heng, pie, shuwanhenggou, dian]
}
Characters[Characters.length] = {
	char: "狐",
	first: pattern_lr_left_1_right_1_right_big,
	later: [fanquanpang, p_gua]
}
Characters[Characters.length] = {
	char: "忽",
	first: pattern_ud_up_1_down_1_up_big,
	later: [p_wuyou, d_xin]
}
Characters[Characters.length] = {
	char: "狗",
	first: pattern_lr_left_1_right_1_right_big,
	later: [fanquanpang, p_ju]
}
Characters[Characters.length] = {
	char: "备",
	first: pattern_ud_up_1_down_1_down_big,
	later: [zhewen, s_tian]
}
Characters[Characters.length] = {
	char: "饰",
	first: pattern_lr_left_1_right_2,
	later: [shichi, pieheng, s_jin]
}
Characters[Characters.length] = {
	char: "饱",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shichi, baozitou, z_si]
}
Characters[Characters.length] = {
	char: "饲",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shichi, z_siyi]
}
Characters[Characters.length] = {
	char: "变",
	first: pattern_ud_up_1_down_1_up_big,
	later: [d_bianzitou, z_you]
}
Characters[Characters.length] = {
	char: "京",
	first: pattern_ud_up_middle_down,
	later: [liuzitou, s_kou, z_xiao]
}
Characters[Characters.length] = {
	char: "享",
	first: pattern_ud_up_middle_down,
	later: [liuzitou, s_kou, z_zi]
}
Characters[Characters.length] = {
	char: "店",
	first: pattern_round_left_up,
	later: [d_guang, s_zhan]
}
Characters[Characters.length] = {
	char: "夜",
	first: pattern_ud_up_1_down_2,
	later: [liuzitou, danrenpang, p_yedian]
}
Characters[Characters.length] = {
	char: "庙",
	first: pattern_round_left_up,
	later: [d_guang, s_you]
}
Characters[Characters.length] = {
	char: "府",
	first: pattern_round_left_up,
	later: [d_guang, danrenpang, h_cun]
}
Characters[Characters.length] = {
	char: "底",
	first: pattern_round_left_up,
	later: [d_guang, p_di]
}
Characters[Characters.length] = {
	char: "剂",
	first: pattern_lr_left_2_right_1,
	later: [d_wen, pieshu, lidaopang]
}
Characters[Characters.length] = {
	char: "郊",
	first: pattern_lr_left_1_right_1_left_big,
	later: [d_jiao, youerpang]
}
Characters[Characters.length] = {
	char: "废",
	first: pattern_round_left_up,
	later: [d_guang, z_fa]
}
Characters[Characters.length] = {
	char: "净",
	first: pattern_lr_left_1_right_1_right_big,
	later: [liangdianshui, p_zheng]
}
Characters[Characters.length] = {
	char: "盲",
	first: pattern_ud_up_1_down_1_down_big,
	later: [d_wang, s_mu]
}
Characters[Characters.length] = {
	char: "放",
	first: pattern_lr_left_1_right_1_left_big,
	later: [d_fang, fanwenpang]
}
Characters[Characters.length] = {
	char: "刻",
	first: pattern_lr_left_1_right_1_left_big,
	later: [d_hai, lidaopang]
}
Characters[Characters.length] = {
	char: "育",
	first: pattern_ud_up_1_down_1_down_big,
	later: [d_chongzitou, s_yue]
}
Characters[Characters.length] = {
	char: "闸",
	first: pattern_round_up,
	later: [d_men, s_jia]
}
Characters[Characters.length] = {
	char: "闹",
	first: pattern_round_up,
	later: [d_men, d_shi]
}
Characters[Characters.length] = {
	char: "郑",
	first: pattern_lr_left_1_right_1_left_big,
	later: [d_guan, youerpang]
}
Characters[Characters.length] = {
	char: "券",
	first: pattern_ud_up_1_down_1_up_big,
	later: [d_juanzitou, z_dao]
}
Characters[Characters.length] = {
	char: "卷",
	first: pattern_ud_up_1_down_1_up_big,
	later: [d_juanzitou, cangzidi]
}
Characters[Characters.length] = {
	char: "单",
	first: pattern_ud_up_1_down_1_down_big,
	later: [lanzitou, s_danzidi]
}
Characters[Characters.length] = {
	char: "炒",
	first: pattern_lr_left_1_right_1_right_big,
	later: [huozipang, s_shao]
}
Characters[Characters.length] = {
	char: "炊",
	first: pattern_lr_left_1_right_1_right_big,
	later: [huozipang, p_qian]
}
Characters[Characters.length] = {
	char: "炕",
	first: pattern_lr_left_1_right_1_right_big,
	later: [huozipang, d_kang]
}
Characters[Characters.length] = {
	char: "炎",
	first: pattern_ud_up_1_down_1_down_big,
	later: [huozipang, huozipang]
}
Characters[Characters.length] = {
	char: "炉",
	first: pattern_lr_left_1_right_1_right_big,
	later: [huozipang, d_hu]
}
Characters[Characters.length] = {
	char: "沫",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, h_mo]
}
Characters[Characters.length] = {
	char: "浅",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, h_zhan]
}
Characters[Characters.length] = {
	char: "法",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, h_qu]
}
Characters[Characters.length] = {
	char: "泄",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, h_shijie]
}
Characters[Characters.length] = {
	char: "河",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, h_ke]
}
Characters[Characters.length] = {
	char: "沾",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, s_zhan]
}
Characters[Characters.length] = {
	char: "泪",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, s_mu]
}
Characters[Characters.length] = {
	char: "油",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, s_you]
}
Characters[Characters.length] = {
	char: "泊",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, p_bai]
}
Characters[Characters.length] = {
	char: "沿",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, p_ji, s_kou]
}
Characters[Characters.length] = {
	char: "泡",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, baozitou, z_si]
}
Characters[Characters.length] = {
	char: "注",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, d_zhu]
}
Characters[Characters.length] = {
	char: "泻",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, tubaogai, h_and]
}
Characters[Characters.length] = {
	char: "泳",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, d_yong]
}
Characters[Characters.length] = {
	char: "泥",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, z_shizitou, p_bi]
}
Characters[Characters.length] = {
	char: "沸",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, z_fu]
}
Characters[Characters.length] = {
	char: "波",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, p_pi]
}
Characters[Characters.length] = {
	char: "泼",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, z_fa]
}
Characters[Characters.length] = {
	char: "泽",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, z_you, h_fengzidi]
}
Characters[Characters.length] = {
	char: "治",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, sigong, s_kou]
}
Characters[Characters.length] = {
	char: "怖",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shuxinpang, h_budai]
}
Characters[Characters.length] = {
	char: "性",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shuxinpang, p_sheng]
}
Characters[Characters.length] = {
	char: "怕",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shuxinpang, p_bai]
}
Characters[Characters.length] = {
	char: "怜",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shuxinpang, p_ling]
}
Characters[Characters.length] = {
	char: "怪",
	first: pattern_lr_left_1_right_2,
	later: [shuxinpang, z_you, h_tu]
}
Characters[Characters.length] = {
	char: "学",
	first: pattern_ud_up_middle_down,
	later: [d_xingzitou, tubaogai, z_zi]
}
Characters[Characters.length] = {
	char: "宝",
	first: pattern_ud_up_1_down_1_down_big,
	later: [baogaitou, h_yu]
}
Characters[Characters.length] = {
	char: "宗",
	first: pattern_ud_up_1_down_1_down_big,
	later: [baogaitou, h_shiren]
}
Characters[Characters.length] = {
	char: "定",
	first: pattern_ud_up_1_down_1_down_big,
	later: [baogaitou, heng, s_zouzidi]
}
Characters[Characters.length] = {
	char: "宜",
	first: pattern_ud_up_1_down_1_down_big,
	later: [baogaitou, s_qie]
}
Characters[Characters.length] = {
	char: "审",
	first: pattern_ud_up_1_down_1_down_big,
	later: [baogaitou, s_shen]
}
Characters[Characters.length] = {
	char: "宙",
	first: pattern_ud_up_1_down_1_down_big,
	later: [baogaitou, s_you]
}
Characters[Characters.length] = {
	char: "官",
	first: pattern_ud_up_1_down_1_down_big,
	later: [baogaitou, s_guanzidi]
}
Characters[Characters.length] = {
	char: "空",
	first: pattern_ud_up_1_down_1_up_big,
	later: [xuezitou, h_gong]
}
Characters[Characters.length] = {
	char: "帘",
	first: pattern_ud_up_1_down_1_up_big,
	later: [xuezitou, s_jin]
}
Characters[Characters.length] = {
	char: "实",
	first: pattern_ud_up_1_down_1_down_big,
	later: [baogaitou, d_tou]
}
Characters[Characters.length] = {
	char: "试",
	first: pattern_lr_left_1_right_1_right_big,
	later: [yanzipang, shizikuang, h_gong]
}
Characters[Characters.length] = {
	char: "郎",
	first: pattern_lr_left_1_right_1_left_big,
	later: [dian, z_jizizuo, youerpang]
}
Characters[Characters.length] = {
	char: "诗",
	first: pattern_lr_left_1_right_2,
	later: [yanzipang, h_tu, h_cun]
}
Characters[Characters.length] = {
	char: "肩",
	first: pattern_round_left_up,
	later: [d_hu, s_yue]
}
Characters[Characters.length] = {
	char: "房",
	first: pattern_round_left_up,
	later: [d_hu, d_fang]
}
Characters[Characters.length] = {
	char: "诚",
	first: pattern_lr_left_1_right_1_right_big,
	later: [yanzipang, h_cheng]
}
Characters[Characters.length] = {
	char: "衬",
	first: pattern_lr_left_1_right_1_left_big,
	later: [buyipang, h_cun]
}
Characters[Characters.length] = {
	char: "衫",
	first: pattern_lr_left_1_right_1_left_big,
	later: [buyipang, sanpie]
}
Characters[Characters.length] = {
	char: "视",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shizipang, s_jian]
}
Characters[Characters.length] = {
	char: "话",
	first: pattern_lr_left_1_right_1_right_big,
	later: [yanzipang, p_she]
}
Characters[Characters.length] = {
	char: "诞",
	first: pattern_lr_left_1_right_2,
	later: [yanzipang, p_yanzili, jianzidi]
}
Characters[Characters.length] = {
	char: "询",
	first: pattern_lr_left_1_right_2,
	later: [yanzipang, baozitou, s_ri]
}
Characters[Characters.length] = {
	char: "该",
	first: pattern_lr_left_1_right_1_right_big,
	later: [yanzipang, d_hai]
}
Characters[Characters.length] = {
	char: "详",
	first: pattern_lr_left_1_right_1_right_big,
	later: [yanzipang, d_yang]
}
Characters[Characters.length] = {
	char: "建",
	first: pattern_round_left_down,
	later: [jianzili, jianzidi]
}
Characters[Characters.length] = {
	char: "肃",
	first: pattern_single,
	later: [hengzheshu, heng, heng, shu, pie, shu, pie, dian]
}
Characters[Characters.length] = {
	char: "录",
	first: pattern_ud_up_1_down_1_down_big,
	later: [luzitou, z_dianshui]
}
Characters[Characters.length] = {
	char: "隶",
	first: pattern_single,
	later: [hengzheshu, heng, heng, shugou, dian, heng, pie, na]
}
Characters[Characters.length] = {
	char: "居",
	first: pattern_round_left_up,
	later: [z_shizitou, h_gu]
}
Characters[Characters.length] = {
	char: "届",
	first: pattern_round_left_up,
	later: [z_shizitou, s_you]
}
Characters[Characters.length] = {
	char: "刷",
	first: pattern_lr_left_2_right_1,
	later: [z_shizitou, s_jin, lidaopang]
}
Characters[Characters.length] = {
	char: "屈",
	first: pattern_round_left_up,
	later: [z_shizitou, s_chu]
}
Characters[Characters.length] = {
	char: "弦",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_gong, liuzitou, youzipang]
}
Characters[Characters.length] = {
	char: "承",
	first: pattern_single,
	later: [hengzhepie, shugou, heng, heng, heng, hengzhepie, pie, na]
}
Characters[Characters.length] = {
	char: "孟",
	first: pattern_ud_up_1_down_1_down_big,
	later: [z_zi, heng, minzidi]
}
Characters[Characters.length] = {
	char: "孤",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_zi, p_gua]
}
Characters[Characters.length] = {
	char: "陕",
	first: pattern_lr_left_1_right_1_right_big,
	later: [zuoerpang, h_jia]
}
Characters[Characters.length] = {
	char: "降",
	first: pattern_lr_left_1_right_1_right_big,
	later: [zuoerpang, zhewen, h_jiangyouxia]
}
Characters[Characters.length] = {
	char: "限",
	first: pattern_lr_left_1_right_1_right_big,
	later: [zuoerpang, kenzitou]
}
Characters[Characters.length] = {
	char: "妹",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_nv, h_weilai]
}
Characters[Characters.length] = {
	char: "姑",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_nv, h_gu]
}
Characters[Characters.length] = {
	char: "姐",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_nv, s_qie]
}
Characters[Characters.length] = {
	char: "姓",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_nv, p_sheng]
}
Characters[Characters.length] = {
	char: "始",
	first: pattern_lr_left_1_right_2,
	later: [z_nv, sigong, s_kou]
}
Characters[Characters.length] = {
	char: "驾",
	first: pattern_ud_up_2_down_1,
	later: [z_li, s_kou, z_ma]
}
Characters[Characters.length] = {
	char: "参",
	first: pattern_ud_up_middle_down,
	later: [sigong, h_da, sanpie]
}
Characters[Characters.length] = {
	char: "艰",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_you, kenzitou]
}
Characters[Characters.length] = {
	char: "线",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jiaosipang, h_zhan]
}
Characters[Characters.length] = {
	char: "练",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jiaosipang, h_jianziyou]
}
Characters[Characters.length] = {
	char: "组",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jiaosipang, s_qie]
}
Characters[Characters.length] = {
	char: "细",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jiaosipang, s_tian]
}
Characters[Characters.length] = {
	char: "驶",
	first: pattern_lr_left_1_right_1_left_big,
	later: [z_ma, s_shi]
}
Characters[Characters.length] = {
	char: "织",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jiaosipang, s_kou, p_eight]
}
Characters[Characters.length] = {
	char: "终",
	first: pattern_lr_left_1_right_2,
	later: [jiaosipang, zhewen, d_ld_sl]
}
Characters[Characters.length] = {
	char: "驻",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_ma, d_zhu]
}
Characters[Characters.length] = {
	char: "驼",
	first: pattern_lr_left_1_right_2,
	later: [z_ma, baogaitou, p_bi]
}
Characters[Characters.length] = {
	char: "绍",
	first: pattern_lr_left_1_right_2,
	later: [jiaosipang, z_dao, s_kou]
}
Characters[Characters.length] = {
	char: "经",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jiaosipang, z_jingziyou]
}
Characters[Characters.length] = {
	char: "贯",
	first: pattern_ud_up_1_down_1_up_big,
	later: [s_guanzitou, s_bei]
}

/* 九画 */
Characters[Characters.length] = {
	char: "奏",
	first: pattern_ud_up_1_down_1_up_big,
	later: [h_fengzitou, h_tian]
}
Characters[Characters.length] = {
	char: "春",
	first: pattern_ud_up_1_down_1_up_big,
	later: [h_fengzitou, s_ri]
}
Characters[Characters.length] = {
	char: "帮",
	first: pattern_ud_up_2_down_1,
	later: [h_piefeng, youerpang, s_jin]
}
Characters[Characters.length] = {
	char: "珍",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_wang, p_ren, sanpie]
}
Characters[Characters.length] = {
	char: "玻",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_wang, p_pi]
}
Characters[Characters.length] = {
	char: "毒",
	first: pattern_ud_up_1_down_1_down_big,
	later: [h_qingzitou, z_mu]
}
Characters[Characters.length] = {
	char: "型",
	first: pattern_ud_up_2_down_1,
	later: [h_kai, lidaopang, h_tu]
}
Characters[Characters.length] = {
	char: "挂",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, h_tu, h_tu]
}
Characters[Characters.length] = {
	char: "封",
	first: pattern_lr_left_1_right_1_left_big,
	later: [h_tu, h_tu, h_cun]
}
Characters[Characters.length] = {
	char: "持",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, h_tu, h_cun]
}
Characters[Characters.length] = {
	char: "项",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_gong, h_ye]
}
Characters[Characters.length] = {
	char: "垮",
	first: pattern_lr_left_1_right_2,
	later: [h_tu, h_da, h_kui]
}
Characters[Characters.length] = {
	char: "挎",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, h_da, h_kui]
}
Characters[Characters.length] = {
	char: "城",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_tu, h_cheng]
}
Characters[Characters.length] = {
	char: "挠",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, h_gewudian, h_wuzidi]
}
Characters[Characters.length] = {
	char: "政",
	first: pattern_lr_left_1_right_1_left_big,
	later: [h_zheng, fanwenpang]
}
Characters[Characters.length] = {
	char: "赴",
	first: pattern_round_left_down,
	later: [h_tu, s_zouzidi, s_bu]
}
Characters[Characters.length] = {
	char: "赵",
	first: pattern_round_left_down,
	later: [h_tu, s_zouzidi, cha]
}
Characters[Characters.length] = {
	char: "挡",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, guangzitou, xunzitou]
}
Characters[Characters.length] = {
	char: "挺",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, p_rengui, jianzidi]
}
Characters[Characters.length] = {
	char: "括",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, p_she]
}
Characters[Characters.length] = {
	char: "拴",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, p_ren, h_wang]
}
Characters[Characters.length] = {
	char: "拾",
	first: pattern_lr_left_1_right_many,
	later: [tishoupang, p_ren, heng, s_kou]
}
Characters[Characters.length] = {
	char: "挑",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, p_zhaotou]
}
Characters[Characters.length] = {
	char: "指",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, p_bi, s_ri]
}
Characters[Characters.length] = {
	char: "垫",
	first: pattern_ud_up_2_down_1,
	later: [tishoupang, p_wan, h_tu]
}
Characters[Characters.length] = {
	char: "挣",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, p_zheng]
}
Characters[Characters.length] = {
	char: "挤",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, d_wen, pieshu]
}
Characters[Characters.length] = {
	char: "拼",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, lanzitou, h_kai]
}
Characters[Characters.length] = {
	char: "挖",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, xuezitou, yi]
}
Characters[Characters.length] = {
	char: "按",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, baogaitou, z_nv]
}
Characters[Characters.length] = {
	char: "挥",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, tubaogai, h_che]
}
Characters[Characters.length] = {
	char: "挪",
	first: pattern_lr_left_middle_right,
	later: [tishoupang, z_nazizuo, youerpang]
}
Characters[Characters.length] = {
	char: "某",
	first: pattern_ud_up_1_down_1_down_big,
	later: [h_ganku, h_mu]
}
Characters[Characters.length] = {
	char: "甚",
	first: pattern_ud_up_1_down_2,
	later: [h_qizitou, p_eight, shuzheheng]
}
Characters[Characters.length] = {
	char: "革",
	first: pattern_ud_up_1_down_1_down_big,
	later: [h_caoheng, s_gezidi]
}
Characters[Characters.length] = {
	char: "荐",
	first: pattern_ud_up_1_down_2,
	later: [caozitou, h_zaizitou, z_zi]
}
Characters[Characters.length] = {
	char: "巷",
	first: pattern_ud_up_middle_down,
	later: [h_xizitou, p_eight, z_si]
}
Characters[Characters.length] = {
	char: "带",
	first: pattern_ud_up_middle_down,
	later: [h_daizitou, tubaogai, s_jin]
}
Characters[Characters.length] = {
	char: "草",
	first: pattern_ud_up_1_down_2,
	later: [caozitou, s_ri, h_ten]
}
Characters[Characters.length] = {
	char: "茧",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caozitou, s_chong]
}
Characters[Characters.length] = {
	char: "茶",
	first: pattern_ud_up_middle_down,
	later: [caozitou, p_ren, h_mugou]
}
Characters[Characters.length] = {
	char: "荒",
	first: pattern_ud_up_middle_down,
	later: [caozitou, d_wang, p_liuzidi]
}
Characters[Characters.length] = {
	char: "茫",
	first: pattern_ud_up_1_down_2,
	later: [caozitou, sandianshui, d_wang]
}
Characters[Characters.length] = {
	char: "荡",
	first: pattern_ud_up_1_down_2,
	later: [caozitou, sandianshui, z_yangziyou]
}
Characters[Characters.length] = {
	char: "荣",
	first: pattern_ud_up_middle_down,
	later: [caozitou, tubaogai, h_mu]
}
Characters[Characters.length] = {
	char: "故",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_gu, fanwenpang]
}
Characters[Characters.length] = {
	char: "胡",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_gu, p_yue]
}
Characters[Characters.length] = {
	char: "南",
	first: pattern_ud_up_1_down_2,
	later: [h_hengpie, tongzikuang, d_xinzidi]
}
Characters[Characters.length] = {
	char: "药",
	first: pattern_ud_up_1_down_2,
	later: [caozitou, jiaosipang, p_shao]
}
Characters[Characters.length] = {
	char: "标",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, h_shiren]
}
Characters[Characters.length] = {
	char: "枯",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, h_gu]
}
Characters[Characters.length] = {
	char: "柄",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, h_bing]
}
Characters[Characters.length] = {
	char: "栋",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, h_dong]
}
Characters[Characters.length] = {
	char: "相",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, s_mu]
}
Characters[Characters.length] = {
	char: "查",
	first: pattern_ud_up_middle_down,
	later: [h_mu, s_ri, heng]
}
Characters[Characters.length] = {
	char: "柏",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, p_bai]
}
Characters[Characters.length] = {
	char: "柳",
	first: pattern_lr_left_1_right_2,
	later: [h_mu, p_maozizuo, danerpang]
}
Characters[Characters.length] = {
	char: "柱",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, d_zhu]
}
Characters[Characters.length] = {
	char: "柿",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, d_shi]
}
Characters[Characters.length] = {
	char: "栏",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, d_lan]
}
Characters[Characters.length] = {
	char: "树",
	first: pattern_lr_left_middle_right,
	later: [h_mu, z_you, h_cun]
}
Characters[Characters.length] = {
	char: "要",
	first: pattern_ud_up_1_down_1_up_big,
	later: [h_xiwuzhe, z_nv]
}
Characters[Characters.length] = {
	char: "咸",
	first: pattern_round_up,
	later: [chengzikuang, heng, s_kou]
}
Characters[Characters.length] = {
	char: "威",
	first: pattern_round_up,
	later: [chengzikuang, heng, z_nv]
}
Characters[Characters.length] = {
	char: "歪",
	first: pattern_ud_up_1_down_1_down_big,
	later: [h_bu, h_zheng]
}
Characters[Characters.length] = {
	char: "研",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_stone, h_kai]
}
Characters[Characters.length] = {
	char: "砖",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_stone, h_zhuan]
}
Characters[Characters.length] = {
	char: "厘",
	first: pattern_round_left_up,
	later: [h_chang, s_li]
}
Characters[Characters.length] = {
	char: "厚",
	first: pattern_round_left_up,
	later: [h_chang, s_ri, z_zi]
}
Characters[Characters.length] = {
	char: "砌",
	first: pattern_lr_left_middle_right,
	later: [h_stone, p_qi, z_dao]
}
Characters[Characters.length] = {
	char: "砍",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_stone, p_qian]
}
Characters[Characters.length] = {
	char: "面",
	first: pattern_single,
	later: [heng, pie, shu, hengzheshu, shu, shu, heng, heng, heng]
}
Characters[Characters.length] = {
	char: "耐",
	first: pattern_lr_left_1_right_1_left_big,
	later: [h_erqie, h_cun]
}
Characters[Characters.length] = {
	char: "耍",
	first: pattern_ud_up_1_down_1_up_big,
	later: [h_erqie, z_nv]
}
Characters[Characters.length] = {
	char: "牵",
	first: pattern_ud_up_middle_down,
	later: [h_da, tubaogai, p_niu]
}
Characters[Characters.length] = {
	char: "残",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_dai, h_zhan]
}
Characters[Characters.length] = {
	char: "殃",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_dai, s_yang]
}
Characters[Characters.length] = {
	char: "轻",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_che, z_jingziyou]
}
Characters[Characters.length] = {
	char: "鸦",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_ya, p_niaowuheng, heng]
}
Characters[Characters.length] = {
	char: "皆",
	first: pattern_ud_up_2_down_1,
	later: [p_bi, p_bi, p_bai]
}
Characters[Characters.length] = {
	char: "背",
	first: pattern_ud_up_2_down_1,
	later: [s_beizizuo, p_bi, s_yue]
}
Characters[Characters.length] = {
	char: "战",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_zhan, h_ge]
}
Characters[Characters.length] = {
	char: "点",
	first: pattern_ud_up_1_down_1_up_big,
	later: [s_zhan, sidiandi]
}
Characters[Characters.length] = {
	char: "临",
	first: pattern_lr_left_1_right_2,
	later: [s_liangshu, p_zhutouban, s_daori]
}
Characters[Characters.length] = {
	char: "览",
	first: pattern_ud_up_2_down_1,
	later: [s_liangshu, p_zhutouban, s_jian]
}
Characters[Characters.length] = {
	char: "竖",
	first: pattern_ud_up_2_down_1,
	later: [s_liangshu, z_you, d_li]
}
Characters[Characters.length] = {
	char: "省",
	first: pattern_ud_up_1_down_1_down_big,
	later: [s_shao, s_mu]
}
Characters[Characters.length] = {
	char: "削",
	first: pattern_lr_left_1_right_1_left_big,
	later: [guangzitou, s_yue, lidaopang]
}
Characters[Characters.length] = {
	char: "尝",
	first: pattern_ud_up_1_down_1_down_big,
	later: [guangzitou, tubaogai, h_yun]
}
Characters[Characters.length] = {
	char: "是",
	first: pattern_ud_up_1_down_1_down_big,
	later: [s_ri, heng, s_zouzidi]
}
Characters[Characters.length] = {
	char: "盼",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_mu, p_fen]
}
Characters[Characters.length] = {
	char: "眨",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_mu, p_fa]
}
Characters[Characters.length] = {
	char: "哄",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, h_xizitou, p_eight]
}
Characters[Characters.length] = {
	char: "显",
	first: pattern_ud_up_1_down_1_down_big,
	later: [s_ri, s_ye]
}
Characters[Characters.length] = {
	char: "哑",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, heng, s_ye]
}
Characters[Characters.length] = {
	char: "冒",
	first: pattern_ud_up_1_down_1_up_big,
	later: [s_ri, s_mu]
}
Characters[Characters.length] = {
	char: "映",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_ri, s_yang]
}
Characters[Characters.length] = {
	char: "星",
	first: pattern_ud_up_1_down_1_down_big,
	later: [s_ri, p_sheng]
}
Characters[Characters.length] = {
	char: "昨",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_ri, p_zha]
}
Characters[Characters.length] = {
	char: "畏",
	first: pattern_ud_up_1_down_1_down_big,
	later: [s_tian, heng, z_sangzidi]
}
Characters[Characters.length] = {
	char: "趴",
	first: pattern_lr_left_1_right_1_right_big,
	later: [zuzipang, p_eight]
}
Characters[Characters.length] = {
	char: "胃",
	first: pattern_ud_up_1_down_1_up_big,
	later: [s_tian, s_yue]
}
Characters[Characters.length] = {
	char: "贵",
	first: pattern_ud_up_1_down_1_up_big,
	later: [s_guizitou, s_bei]
}
Characters[Characters.length] = {
	char: "界",
	first: pattern_ud_up_1_down_1_down_big,
	later: [s_tian, p_ren, pieshu]
}
Characters[Characters.length] = {
	char: "虹",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_chong, h_gong]
}
Characters[Characters.length] = {
	char: "虾",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_chong, h_xia]
}
Characters[Characters.length] = {
	char: "蚁",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_chong, d_yi]
}
Characters[Characters.length] = {
	char: "思",
	first: pattern_ud_up_1_down_1_up_big,
	later: [s_tian, d_xin]
}
Characters[Characters.length] = {
	char: "蚂",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_chong, z_ma]
}
Characters[Characters.length] = {
	char: "虽",
	first: pattern_ud_up_1_down_1_down_big,
	later: [s_kou, s_chong]
}
Characters[Characters.length] = {
	char: "品",
	first: pattern_pin,
	later: [s_kou, s_kou, s_kou]
}
Characters[Characters.length] = {
	char: "咽",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, s_kou, h_da]
}
Characters[Characters.length] = {
	char: "骂",
	first: pattern_ud_up_2_down_1,
	later: [s_kou, s_kou, z_ma]
}
Characters[Characters.length] = {
	char: "哗",
	first: pattern_lr_left_1_right_many,
	later: [s_kou, danrenpang, p_qi, h_ten]
}
Characters[Characters.length] = {
	char: "咱",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, p_zi]
}
Characters[Characters.length] = {
	char: "响",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, p_xiangzikuang, s_kou]
}
Characters[Characters.length] = {
	char: "哈",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, p_ren, heng, s_kou]
}
Characters[Characters.length] = {
	char: "咬",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, d_jiao]
}
Characters[Characters.length] = {
	char: "咳",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, d_hai]
}
Characters[Characters.length] = {
	char: "哪",
	first: pattern_lr_left_middle_right,
	later: [s_kou, z_nazizuo, youerpang]
}
Characters[Characters.length] = {
	char: "炭",
	first: pattern_ud_up_1_down_1_down_big,
	later: [s_shan, h_hengpie, huozipang]
}
Characters[Characters.length] = {
	char: "峡",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_shan, h_jia]
}
Characters[Characters.length] = {
	char: "罚",
	first: pattern_ud_up_1_down_2,
	later: [s_siwuzhe, yanzipang, lidaopang]
}
Characters[Characters.length] = {
	char: "贱",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_bei, h_zhan]
}
Characters[Characters.length] = {
	char: "贴",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_bei, s_zhan]
}
Characters[Characters.length] = {
	char: "骨",
	first: pattern_ud_up_1_down_1_up_big,
	later: [s_guzitou, s_yue]
}
Characters[Characters.length] = {
	char: "钞",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jinzipang, s_shao]
}
Characters[Characters.length] = {
	char: "钟",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jinzipang, s_zhong]
}
Characters[Characters.length] = {
	char: "钢",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jinzipang, s_gang]
}
Characters[Characters.length] = {
	char: "钥",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jinzipang, p_yue]
}
Characters[Characters.length] = {
	char: "钩",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jinzipang, p_gou]
}
Characters[Characters.length] = {
	char: "卸",
	first: pattern_lr_left_1_right_1_left_big,
	later: [p_xiezizuo, danerpang]
}
Characters[Characters.length] = {
	char: "缸",
	first: pattern_lr_left_1_right_1_left_big,
	later: [p_gangwa, h_gong]
}
Characters[Characters.length] = {
	char: "拜",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_baizizuo, h_baiziyou]
}
Characters[Characters.length] = {
	char: "看",
	first: pattern_ud_up_1_down_1_down_big,
	later: [p_baizizuo, s_mu]
}
Characters[Characters.length] = {
	char: "矩",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_shi, h_ju]
}
Characters[Characters.length] = {
	char: "怎",
	first: pattern_ud_up_1_down_1_up_big,
	later: [p_zha, d_xin]
}
Characters[Characters.length] = {
	char: "牲",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_niu, p_sheng]
}
Characters[Characters.length] = {
	char: "选",
	first: pattern_round_left_down,
	later: [p_niuwuwei, p_er, zouzhidi]
}
Characters[Characters.length] = {
	char: "适",
	first: pattern_round_left_down,
	later: [p_she, zouzhidi]
}
Characters[Characters.length] = {
	char: "秒",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_he, s_shao]
}
Characters[Characters.length] = {
	char: "香",
	first: pattern_ud_up_1_down_1_up_big,
	later: [p_he, s_ri]
}
Characters[Characters.length] = {
	char: "种",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_he, s_zhong]
}
Characters[Characters.length] = {
	char: "秋",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_he, huozipang]
}
Characters[Characters.length] = {
	char: "科",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_he, d_dou]
}
Characters[Characters.length] = {
	char: "重",
	first: pattern_single,
	later: [pie, heng, shu, hengzheshu, heng, heng, shu, heng, heng]
}
Characters[Characters.length] = {
	char: "复",
	first: pattern_ud_up_middle_down,
	later: [pieheng, s_ri, zhewen]
}
Characters[Characters.length] = {
	char: "竿",
	first: pattern_ud_up_1_down_1_up_big,
	later: [zhuzitou, h_gan]
}
Characters[Characters.length] = {
	char: "段",
	first: pattern_lr_left_1_right_2,
	later: [p_duanzizuo, p_ji, z_you]
}
Characters[Characters.length] = {
	char: "便",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, h_geng]
}
Characters[Characters.length] = {
	char: "俩",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, h_liang]
}
Characters[Characters.length] = {
	char: "贷",
	first: pattern_ud_up_2_down_1,
	later: [danrenpang, shizikuang, s_bei]
}
Characters[Characters.length] = {
	char: "顺",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_chuan, h_ye]
}
Characters[Characters.length] = {
	char: "修",
	first: pattern_lr_left_1_right_2,
	later: [danrenpang, shu, zhewen, sanpie]
}
Characters[Characters.length] = {
	char: "保",
	first: pattern_lr_left_1_right_2,
	later: [danrenpang, s_kou, h_mu]
}
Characters[Characters.length] = {
	char: "促",
	first: pattern_lr_left_1_right_2,
	later: [danrenpang, s_kou, s_zouzidi]
}
Characters[Characters.length] = {
	char: "侮",
	first: pattern_lr_left_1_right_2,
	later: [danrenpang, pieheng, z_mu]
}
Characters[Characters.length] = {
	char: "俭",
	first: pattern_lr_left_1_right_2,
	later: [danrenpang, p_ren, heng, d_xingzitou, heng]
}
Characters[Characters.length] = {
	char: "俗",
	first: pattern_lr_left_1_right_many,
	later: [danrenpang, p_eight, p_ren, s_kou]
}
Characters[Characters.length] = {
	char: "俘",
	first: pattern_lr_left_1_right_2,
	later: [danrenpang, caizitou, z_zi]
}
Characters[Characters.length] = {
	char: "信",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, d_yan]
}
Characters[Characters.length] = {
	char: "皇",
	first: pattern_ud_up_1_down_1_down_big,
	later: [p_bai, h_wang]
}
Characters[Characters.length] = {
	char: "泉",
	first: pattern_ud_up_1_down_1_down_big,
	later: [p_bai, z_shui]
}
Characters[Characters.length] = {
	char: "鬼",
	first: pattern_single,
	later: [pie, shu, hengzheshu, heng, heng, pie, shuwanhenggou, piezheheng, dian]
}
Characters[Characters.length] = {
	char: "侵",
	first: pattern_lr_left_1_right_many,
	later: [danrenpang, xunzitou, tubaogai, z_you]
}
Characters[Characters.length] = {
	char: "追",
	first: pattern_round_left_down,
	later: [p_zhuizili, zouzhidi]
}
Characters[Characters.length] = {
	char: "俊",
	first: pattern_lr_left_1_right_many,
	later: [danrenpang, sigong, p_eight, zhewen]
}
Characters[Characters.length] = {
	char: "盾",
	first: pattern_round_left_up,
	later: [fanzipang, h_ten, s_mu]
}
Characters[Characters.length] = {
	char: "待",
	first: pattern_lr_left_1_right_2,
	later: [shuangrenpang, h_tu, h_cun]
}
Characters[Characters.length] = {
	char: "律",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shuangrenpang, jianzili]
}
Characters[Characters.length] = {
	char: "很",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shuangrenpang, kenzitou]
}
Characters[Characters.length] = {
	char: "须",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sanpie, h_ye]
}
Characters[Characters.length] = {
	char: "叙",
	first: pattern_lr_left_2_right_1,
	later: [p_ren, h_yuzidi, z_you]
}
Characters[Characters.length] = {
	char: "剑",
	first: pattern_lr_left_2_right_1,
	later: [p_ren, heng, d_xingzitou, heng, lidaopang]
}
Characters[Characters.length] = {
	char: "逃",
	first: pattern_round_left_down,
	later: [p_zhaotou, zouzhidi]
}
Characters[Characters.length] = {
	char: "食",
	first: pattern_ud_up_1_down_1_down_big,
	later: [p_ren, d_liang]
}
Characters[Characters.length] = {
	char: "盆",
	first: pattern_ud_up_1_down_1_up_big,
	later: [p_fen, minzidi]
}
Characters[Characters.length] = {
	char: "胆",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_yue, s_ri, heng]
}
Characters[Characters.length] = {
	char: "胜",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_yue, p_sheng]
}
Characters[Characters.length] = {
	char: "胞",
	first: pattern_lr_left_1_right_2,
	later: [p_yue, baozitou, z_si]
}
Characters[Characters.length] = {
	char: "胖",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_yue, d_ban]
}
Characters[Characters.length] = {
	char: "脉",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_yue, d_yong]
}
Characters[Characters.length] = {
	char: "勉",
	first: pattern_round_left_down,
	later: [p_mian, z_li]
}
Characters[Characters.length] = {
	char: "狭",
	first: pattern_lr_left_1_right_1_right_big,
	later: [fanquanpang, h_jia]
}
Characters[Characters.length] = {
	char: "狮",
	first: pattern_lr_left_middle_right,
	later: [fanquanpang, s_shupie, heng, s_jin]
}
Characters[Characters.length] = {
	char: "独",
	first: pattern_lr_left_1_right_1_right_big,
	later: [fanquanpang, s_chong]
}
Characters[Characters.length] = {
	char: "狡",
	first: pattern_lr_left_1_right_1_right_big,
	later: [fanquanpang, d_jiao]
}
Characters[Characters.length] = {
	char: "狱",
	first: pattern_lr_left_middle_right,
	later: [fanquanpang, yanzipang, h_quan]
}
Characters[Characters.length] = {
	char: "狠",
	first: pattern_lr_left_1_right_1_right_big,
	later: [fanquanpang, kenzitou]
}
Characters[Characters.length] = {
	char: "贸",
	first: pattern_ud_up_2_down_1,
	later: [p_maoshangzuo, z_dao, s_bei]
}
Characters[Characters.length] = {
	char: "怨",
	first: pattern_ud_up_2_down_1,
	later: [p_xi, cangzidi]
}
Characters[Characters.length] = {
	char: "急",
	first: pattern_ud_up_middle_down,
	later: [weizitou, xunzitou, d_xin]
}
Characters[Characters.length] = {
	char: "饶",
	first: pattern_lr_left_1_right_2,
	later: [shichi, h_gewudian, h_wuzidi]
}
Characters[Characters.length] = {
	char: "蚀",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shichi, s_chong]
}
Characters[Characters.length] = {
	char: "饺",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shichi, d_jiao]
}
Characters[Characters.length] = {
	char: "饼",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shichi, lanzitou, h_kai]
}
Characters[Characters.length] = {
	char: "弯",
	first: pattern_ud_up_1_down_1_down_big,
	later: [d_bianzitou, z_gong]
}
Characters[Characters.length] = {
	char: "将",
	first: pattern_lr_left_1_right_2,
	later: [jiangzipang, p_xi, h_cun]
}
Characters[Characters.length] = {
	char: "奖",
	first: pattern_ud_up_2_down_1,
	later: [jiangzipang, p_xi, h_da]
}
Characters[Characters.length] = {
	char: "哀",
	first: pattern_ud_up_middle_down,
	later: [liuzitou, s_kou, p_yizidi]
}
Characters[Characters.length] = {
	char: "亭",
	first: pattern_ud_up_middle_down,
	later: [liuzitou, s_kou, tubaogai, h_ding]
}
Characters[Characters.length] = {
	char: "亮",
	first: pattern_lr_left_middle_right,
	later: [liuzitou, s_kou, tubaogai, p_ji]
}
Characters[Characters.length] = {
	char: "度",
	first: pattern_round_left_up,
	later: [d_guang, h_caoheng, z_you]
}
Characters[Characters.length] = {
	char: "迹",
	first: pattern_round_left_down,
	later: [d_yiye, zouzhidi]
}
Characters[Characters.length] = {
	char: "庭",
	first: pattern_round_left_up,
	later: [d_guang, p_rengui, jianzidi]
}
Characters[Characters.length] = {
	char: "疮",
	first: pattern_round_left_up,
	later: [bingzitou, p_ren, cangzidi]
}
Characters[Characters.length] = {
	char: "疯",
	first: pattern_round_left_up,
	later: [bingzitou, fengzitou, cha]
}
Characters[Characters.length] = {
	char: "疫",
	first: pattern_round_left_up,
	later: [bingzitou, p_ji, z_you]
}
Characters[Characters.length] = {
	char: "疤",
	first: pattern_round_left_up,
	later: [bingzitou, z_ba]
}
Characters[Characters.length] = {
	char: "姿",
	first: pattern_ud_up_2_down_1,
	later: [liangdianshui, p_qian, z_nv]
}
Characters[Characters.length] = {
	char: "亲",
	first: pattern_ud_up_1_down_1_down_big,
	later: [d_li, h_mugou]
}
Characters[Characters.length] = {
	char: "音",
	first: pattern_ud_up_1_down_1_up_big,
	later: [d_li, s_ri]
}
Characters[Characters.length] = {
	char: "帝",
	first: pattern_ud_up_middle_down,
	later: [liuzitou, lanzitou, tubaogai, s_jin]
}
Characters[Characters.length] = {
	char: "施",
	first: pattern_lr_left_1_right_2,
	later: [d_fang, pieheng, z_ye]
}
Characters[Characters.length] = {
	char: "闻",
	first: pattern_round_up,
	later: [d_men, h_erduo]
}
Characters[Characters.length] = {
	char: "阀",
	first: pattern_round_up,
	later: [d_men, danrenpang, h_ge]
}
Characters[Characters.length] = {
	char: "阁",
	first: pattern_round_up,
	later: [d_men, zhewen, s_kou]
}
Characters[Characters.length] = {
	char: "差",
	first: pattern_ud_up_1_down_1_down_big,
	later: [pieweiyang, h_gong]
}
Characters[Characters.length] = {
	char: "养",
	first: pattern_ud_up_1_down_1_up_big,
	later: [lanzitou, h_yangzizh, pieshu]
}
Characters[Characters.length] = {
	char: "美",
	first: pattern_ud_up_1_down_1_up_big,
	later: [yangzitou, h_da]
}
Characters[Characters.length] = {
	char: "姜",
	first: pattern_ud_up_1_down_1_up_big,
	later: [yangzitou, z_nv]
}
Characters[Characters.length] = {
	char: "叛",
	first: pattern_lr_left_1_right_1_right_big,
	later: [d_panzizuo, p_fan]
}
Characters[Characters.length] = {
	char: "送",
	first: pattern_round_left_down,
	later: [d_guan, zouzhidi]
}
Characters[Characters.length] = {
	char: "类",
	first: pattern_ud_up_1_down_1_up_big,
	later: [d_mi, h_da]
}
Characters[Characters.length] = {
	char: "迷",
	first: pattern_round_left_up,
	later: [d_mi, zouzhidi]
}
Characters[Characters.length] = {
	char: "前",
	first: pattern_ud_up_1_down_2,
	later: [lanzitou, heng, s_yue, lidaopang]
}
Characters[Characters.length] = {
	char: "首",
	first: pattern_ud_up_1_down_1_down_big,
	later: [lanzitou, heng, p_zi]
}
Characters[Characters.length] = {
	char: "逆",
	first: pattern_round_left_down,
	later: [d_ni, zouzhidi]
}
Characters[Characters.length] = {
	char: "总",
	first: pattern_ud_up_1_down_1_up_big,
	later: [lanzitou, s_kou, d_xin]
}
Characters[Characters.length] = {
	char: "炼",
	first: pattern_lr_left_1_right_1_right_big,
	later: [huozipang, h_jianziyou]
}
Characters[Characters.length] = {
	char: "炸",
	first: pattern_lr_left_1_right_1_right_big,
	later: [huozipang, p_zha]
}
Characters[Characters.length] = {
	char: "炮",
	first: pattern_lr_left_1_right_1_right_big,
	later: [huozipang, baozitou, z_si]
}
Characters[Characters.length] = {
	char: "烂",
	first: pattern_lr_left_1_right_1_right_big,
	later: [huozipang, d_lan]
}
Characters[Characters.length] = {
	char: "剃",
	first: pattern_lr_left_1_right_1_left_big,
	later: [lanzitou, z_dizidi, lidaopang]
}
Characters[Characters.length] = {
	char: "洁",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, h_shi, s_kou]
}
Characters[Characters.length] = {
	char: "洪",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, h_xizitou, p_eight]
}
Characters[Characters.length] = {
	char: "洒",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, h_xi]
}
Characters[Characters.length] = {
	char: "浇",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, h_gewudian, h_wuzidi]
}
Characters[Characters.length] = {
	char: "浊",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, s_chong]
}
Characters[Characters.length] = {
	char: "洞",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, tongzikuang, heng, s_kou]
}
Characters[Characters.length] = {
	char: "测",
	first: pattern_lr_left_middle_right,
	later: [sandianshui, s_bei, lidaopang]
}
Characters[Characters.length] = {
	char: "洗",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, p_niuwuwei, p_er]
}
Characters[Characters.length] = {
	char: "活",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, p_she]
}
Characters[Characters.length] = {
	char: "派",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, fanzipang, p_paiyouli]
}
Characters[Characters.length] = {
	char: "洽",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, p_ren, heng, s_kou]
}
Characters[Characters.length] = {
	char: "染",
	first: pattern_ud_up_2_down_1,
	later: [sandianshui, p_nine, h_mu]
}
Characters[Characters.length] = {
	char: "济",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, d_wen, pieshu]
}
Characters[Characters.length] = {
	char: "洋",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, d_yang]
}
Characters[Characters.length] = {
	char: "洲",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, d_zhou]
}
Characters[Characters.length] = {
	char: "浑",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, tubaogai, h_che]
}
Characters[Characters.length] = {
	char: "浓",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, p_nong]
}
Characters[Characters.length] = {
	char: "津",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, jianzili]
}
Characters[Characters.length] = {
	char: "恒",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shuxinpang, heng, s_ri, heng]
}
Characters[Characters.length] = {
	char: "恢",
	first: pattern_lr_left_1_right_2,
	later: [shuxinpang, h_hengpie, huozipang]
}
Characters[Characters.length] = {
	char: "恰",
	first: pattern_lr_left_1_right_2,
	later: [shuxinpang, p_ren, heng, s_kou]
}
Characters[Characters.length] = {
	char: "恼",
	first: pattern_lr_left_1_right_many,
	later: [shuxinpang, liuzitou, cha, xiongzikuang]
}
Characters[Characters.length] = {
	char: "恨",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shuxinpang, kenzitou]
}
Characters[Characters.length] = {
	char: "举",
	first: pattern_ud_up_middle_down,
	later: [d_xingzitou, heng, p_eight, h_fengzidi]
}
Characters[Characters.length] = {
	char: "觉",
	first: pattern_ud_up_middle_down,
	later: [d_xingzitou, tubaogai, s_jian]
}
Characters[Characters.length] = {
	char: "宣",
	first: pattern_ud_up_middle_down,
	later: [baogaitou, heng, s_ri, heng]
}
Characters[Characters.length] = {
	char: "室",
	first: pattern_ud_up_middle_down,
	later: [baogaitou, h_zhiyu]
}
Characters[Characters.length] = {
	char: "宫",
	first: pattern_lr_left_middle_right,
	later: [baogaitou, s_kou, s_kou]
}
Characters[Characters.length] = {
	char: "宪",
	first: pattern_ud_up_1_down_1_down_big,
	later: [baogaitou, p_niuwuwei, p_er]
}
Characters[Characters.length] = {
	char: "突",
	first: pattern_ud_up_1_down_1_down_big,
	later: [xuezitou, h_quan]
}
Characters[Characters.length] = {
	char: "穿",
	first: pattern_ud_up_1_down_1_down_big,
	later: [xuezitou, h_ya]
}
Characters[Characters.length] = {
	char: "窃",
	first: pattern_ud_up_1_down_2,
	later: [xuezitou, p_qi, z_dao]
}
Characters[Characters.length] = {
	char: "客",
	first: pattern_ud_up_1_down_2,
	later: [baogaitou, zhewen, s_kou]
}
Characters[Characters.length] = {
	char: "冠",
	first: pattern_ud_up_1_down_2,
	later: [tubaogai, h_yuan, h_cun]
}
Characters[Characters.length] = {
	char: "语",
	first: pattern_lr_left_1_right_2,
	later: [yanzipang, h_five, s_kou]
}
Characters[Characters.length] = {
	char: "扁",
	first: pattern_round_left_up,
	later: [d_hu, s_bianzili]
}
Characters[Characters.length] = {
	char: "袄",
	first: pattern_lr_left_1_right_1_right_big,
	later: [buyipang, p_yao]
}
Characters[Characters.length] = {
	char: "祖",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shizipang, s_qie]
}
Characters[Characters.length] = {
	char: "神",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shizipang, s_shen]
}
Characters[Characters.length] = {
	char: "祝",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shizipang, s_kou, p_er]
}
Characters[Characters.length] = {
	char: "误",
	first: pattern_lr_left_1_right_2,
	later: [yanzipang, s_kou, h_tian]
}
Characters[Characters.length] = {
	char: "诱",
	first: pattern_lr_left_1_right_2,
	later: [yanzipang, p_he, z_nai]
}
Characters[Characters.length] = {
	char: "说",
	first: pattern_lr_left_1_right_many,
	later: [yanzipang, lanzitou, s_kou, p_er]
}
Characters[Characters.length] = {
	char: "诵",
	first: pattern_lr_left_1_right_2,
	later: [yanzipang, z_yongzitou, s_yong]
}
Characters[Characters.length] = {
	char: "垦",
	first: pattern_ud_up_1_down_1_up_big,
	later: [kenzitou, h_tu]
}
Characters[Characters.length] = {
	char: "退",
	first: pattern_round_left_down,
	later: [kenzitou, zouzhidi]
}
Characters[Characters.length] = {
	char: "既",
	first: pattern_lr_left_1_right_1_left_big,
	later: [z_jizizuo, h_jiziyou]
}
Characters[Characters.length] = {
	char: "屋",
	first: pattern_round_left_up,
	later: [z_shizitou, h_zhiyu]
}
Characters[Characters.length] = {
	char: "昼",
	first: pattern_ud_up_1_down_1_up_big,
	later: [z_chi, s_ri, heng]
}
Characters[Characters.length] = {
	char: "费",
	first: pattern_ud_up_1_down_1_up_big,
	later: [z_fu, s_bei]
}
Characters[Characters.length] = {
	char: "陡",
	first: pattern_lr_left_1_right_2,
	later: [zuoerpang, h_tu, s_zouzidi]
}
Characters[Characters.length] = {
	char: "眉",
	first: pattern_round_left_up,
	later: [z_meizitou, s_mu]
}
Characters[Characters.length] = {
	char: "孩",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_zi, d_hai]
}
Characters[Characters.length] = {
	char: "除",
	first: pattern_lr_left_1_right_2,
	later: [zuoerpang, p_ren, h_yuzidi]
}
Characters[Characters.length] = {
	char: "险",
	first: pattern_lr_left_1_right_2,
	later: [zuoerpang, p_ren, heng, d_xingzitou, heng]
}
Characters[Characters.length] = {
	char: "院",
	first: pattern_lr_left_1_right_2,
	later: [zuoerpang, baogaitou, h_yuan]
}
Characters[Characters.length] = {
	char: "娃",
	first: pattern_lr_left_1_right_2,
	later: [z_nv, h_tu, h_tu]
}
Characters[Characters.length] = {
	char: "姥",
	first: pattern_lr_left_1_right_2,
	later: [z_nv, laozitou, p_bi]
}
Characters[Characters.length] = {
	char: "姨",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_nv, h_yi]
}
Characters[Characters.length] = {
	char: "姻",
	first: pattern_lr_left_1_right_2,
	later: [z_nv, s_kou, h_da]
}
Characters[Characters.length] = {
	char: "娇",
	first: pattern_lr_left_1_right_2,
	later: [z_nv, p_yao, pieshu]
}
Characters[Characters.length] = {
	char: "怒",
	first: pattern_ud_up_2_down_1,
	later: [z_nv, z_you, d_xin]
}
Characters[Characters.length] = {
	char: "架",
	first: pattern_ud_up_2_down_1,
	later: [z_li, s_kou, h_mu]
}
Characters[Characters.length] = {
	char: "贺",
	first: pattern_ud_up_2_down_1,
	later: [z_li, s_kou, s_bei]
}
Characters[Characters.length] = {
	char: "盈",
	first: pattern_ud_up_2_down_1,
	later: [z_nai, z_you, minzidi]
}
Characters[Characters.length] = {
	char: "勇",
	first: pattern_ud_up_2_down_1,
	later: [z_yongzitou, s_yong, z_li]
}
Characters[Characters.length] = {
	char: "怠",
	first: pattern_ud_up_2_down_1,
	later: [sigong, s_kou, d_xin]
}
Characters[Characters.length] = {
	char: "柔",
	first: pattern_ud_up_1_down_1_up_big,
	later: [z_mao, h_mu]
}
Characters[Characters.length] = {
	char: "垒",
	first: pattern_ud_up_many_down_1,
	later: [sigong, sigong, sigong, h_tu]
}
Characters[Characters.length] = {
	char: "绑",
	first: pattern_lr_left_1_right_2,
	later: [jiaosipang, h_piefeng, youerpang]
}
Characters[Characters.length] = {
	char: "绒",
	first: pattern_lr_left_1_right_2,
	later: [jiaosipang, h_ge, h_hengpie]
}
Characters[Characters.length] = {
	char: "结",
	first: pattern_lr_left_1_right_2,
	later: [jiaosipang, h_shi, s_kou]
}
Characters[Characters.length] = {
	char: "绕",
	first: pattern_lr_left_1_right_2,
	later: [jiaosipang, h_gewudian, h_wuzidi]
}
Characters[Characters.length] = {
	char: "骄",
	first: pattern_lr_left_1_right_2,
	later: [z_ma, p_yao, pieheng]
}
Characters[Characters.length] = {
	char: "绘",
	first: pattern_lr_left_1_right_2,
	later: [jiaosipang, p_ren, h_yun]
}
Characters[Characters.length] = {
	char: "给",
	first: pattern_lr_left_1_right_2,
	later: [jiaosipang, p_ren, heng, s_kou]
}
Characters[Characters.length] = {
	char: "络",
	first: pattern_lr_left_1_right_2,
	later: [jiaosipang, zhewen, s_kou]
}
Characters[Characters.length] = {
	char: "骆",
	first: pattern_lr_left_1_right_2,
	later: [z_ma, zhewen, s_kou]
}
Characters[Characters.length] = {
	char: "绝",
	first: pattern_lr_left_1_right_2,
	later: [jiaosipang, weizitou, z_ba]
}
Characters[Characters.length] = {
	char: "绞",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jiaosipang, d_jiao]
}
Characters[Characters.length] = {
	char: "统",
	first: pattern_lr_left_1_right_2,
	later: [jiaosipang, h_gewudian, h_wuzidi]
}

/* 十画 */
Characters[Characters.length] = {
	char: "耕",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_gengzizuo, h_jing]
}
Characters[Characters.length] = {
	char: "耗",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_gengzizuo, p_mao]
}
Characters[Characters.length] = {
	char: "艳",
	first: pattern_lr_left_1_right_2,
	later: [h_feng, weizitou, z_ba]
}
Characters[Characters.length] = {
	char: "泰",
	first: pattern_ud_up_1_down_1_up_big,
	later: [h_fengzitou, z_dianshui]
}
Characters[Characters.length] = {
	char: "珠",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_wang, p_zhu]
}
Characters[Characters.length] = {
	char: "班",
	first: pattern_lr_left_middle_right,
	later: [h_wang, d_dianpie, h_wang]
}
Characters[Characters.length] = {
	char: "素",
	first: pattern_ud_up_1_down_1_down_big,
	later: [h_qingzitou, youzipang, z_xiao]
}
Characters[Characters.length] = {
	char: "蚕",
	first: pattern_ud_up_1_down_1_down_big,
	later: [h_tian, s_chong]
}
Characters[Characters.length] = {
	char: "顽",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_yuan, h_ye]
}
Characters[Characters.length] = {
	char: "盏",
	first: pattern_ud_up_1_down_1_up_big,
	later: [h_zhan, minzidi]
}
Characters[Characters.length] = {
	char: "匪",
	first: pattern_round_left,
	later: [jiangzikuang, s_fei]
}
Characters[Characters.length] = {
	char: "捞",
	first: pattern_lr_left_1_right_many,
	later: [tishoupang, caozitou, tubaogai, z_li]
}
Characters[Characters.length] = {
	char: "栽",
	first: pattern_round_right_up,
	later: [zaizikuang, h_mu]
}
Characters[Characters.length] = {
	char: "捕",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, h_fudu]
}
Characters[Characters.length] = {
	char: "振",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, h_chenxing]
}
Characters[Characters.length] = {
	char: "载",
	first: pattern_round_right_up,
	later: [zaizikuang, h_che]
}
Characters[Characters.length] = {
	char: "赶",
	first: pattern_round_left_down,
	later: [h_tu, s_zouzidi, h_gan]
}
Characters[Characters.length] = {
	char: "起",
	first: pattern_round_left_down,
	later: [h_tu, s_zouzidi, z_ji]
}
Characters[Characters.length] = {
	char: "盐",
	first: pattern_ud_up_2_down_1,
	later: [h_tu, s_bu, minzidi]
}
Characters[Characters.length] = {
	char: "捎",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, guangzitou, s_yue]
}
Characters[Characters.length] = {
	char: "捏",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, s_ri, h_tu]
}
Characters[Characters.length] = {
	char: "埋",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_tu, s_li]
}
Characters[Characters.length] = {
	char: "捉",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, s_kou, s_zouzidi]
}
Characters[Characters.length] = {
	char: "捆",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, s_kou, h_mu]
}
Characters[Characters.length] = {
	char: "捐",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, s_kou, s_yue]
}
Characters[Characters.length] = {
	char: "损",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, s_kou, s_bei]
}
Characters[Characters.length] = {
	char: "都",
	first: pattern_lr_left_2_right_1,
	later: [laozitou, s_ri, youerpang]
}
Characters[Characters.length] = {
	char: "哲",
	first: pattern_ud_up_2_down_1,
	later: [tishoupang, p_jin, s_kou]
}
Characters[Characters.length] = {
	char: "逝",
	first: pattern_round_left_down,
	later: [tishoupang, p_jin, zouzhidi]
}
Characters[Characters.length] = {
	char: "捡",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, p_ren, heng, d_xingzitou, heng]
}
Characters[Characters.length] = {
	char: "换",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, p_huan]
}
Characters[Characters.length] = {
	char: "挽",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, p_mian]
}
Characters[Characters.length] = {
	char: "热",
	first: pattern_ud_up_2_down_1,
	later: [tishoupang, p_wan, sidiandi]
}
Characters[Characters.length] = {
	char: "恐",
	first: pattern_ud_up_2_down_1,
	later: [h_gong, p_fan, d_xin]
}
Characters[Characters.length] = {
	char: "壶",
	first: pattern_ud_up_middle_down,
	later: [h_shi, tubaogai, s_ye]
}
Characters[Characters.length] = {
	char: "挨",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, sigong, p_shi]
}
Characters[Characters.length] = {
	char: "耻",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_erduo, s_zhi]
}
Characters[Characters.length] = {
	char: "耽",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_erduo, p_shenziyou]
}
Characters[Characters.length] = {
	char: "恭",
	first: pattern_ud_up_middle_down,
	later: [h_xizitou, p_eight, shuxindi]
}
Characters[Characters.length] = {
	char: "莲",
	first: pattern_ud_up_1_down_2,
	later: [caozitou, h_che, zouzhidi]
}
Characters[Characters.length] = {
	char: "莫",
	first: pattern_ud_up_middle_down,
	later: [caozitou, s_ri, h_da]
}
Characters[Characters.length] = {
	char: "荷",
	first: pattern_ud_up_1_down_2,
	later: [caozitou, danrenpang, h_ke]
}
Characters[Characters.length] = {
	char: "获",
	first: pattern_ud_up_1_down_2,
	later: [caozitou, fanquanpang, h_quan]
}
Characters[Characters.length] = {
	char: "晋",
	first: pattern_ud_up_1_down_1_up_big,
	later: [h_yazhou, s_ri]
}
Characters[Characters.length] = {
	char: "恶",
	first: pattern_ud_up_1_down_1_up_big,
	later: [h_yazhou, d_xin]
}
Characters[Characters.length] = {
	char: "真",
	first: pattern_ud_up_middle_down,
	later: [h_hengpie, s_juzitou, p_eight]
}
Characters[Characters.length] = {
	char: "框",
	first: pattern_lr_left_1_right_2,
	later: [h_mu, jiangzikuang, h_wang]
}
Characters[Characters.length] = {
	char: "桂",
	first: pattern_lr_left_1_right_2,
	later: [h_mu, h_tu, h_tu]
}
Characters[Characters.length] = {
	char: "档",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, guangzitou, xunzitou]
}
Characters[Characters.length] = {
	char: "桐",
	first: pattern_lr_left_1_right_2,
	later: [h_mu, tongzikuang, heng, s_kou]
}
Characters[Characters.length] = {
	char: "株",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, p_zhu]
}
Characters[Characters.length] = {
	char: "桥",
	first: pattern_lr_left_1_right_2,
	later: [h_mu, p_yao, pieshu]
}
Characters[Characters.length] = {
	char: "桃",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, p_zhaotou]
}
Characters[Characters.length] = {
	char: "格",
	first: pattern_lr_left_1_right_2,
	later: [h_mu, zhewen, s_kou]
}
Characters[Characters.length] = {
	char: "校",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, d_jiao]
}
Characters[Characters.length] = {
	char: "核",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, d_hai]
}
Characters[Characters.length] = {
	char: "样",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, d_yang]
}
Characters[Characters.length] = {
	char: "根",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, kenzitou]
}
Characters[Characters.length] = {
	char: "索",
	first: pattern_ud_up_middle_down,
	later: [h_ten, tubaogai, youzipang, z_xiao]
}
Characters[Characters.length] = {
	char: "哥",
	first: pattern_ud_up_1_down_1_down_big,
	later: [h_dingwugou, s_kou, h_ke]
}
Characters[Characters.length] = {
	char: "速",
	first: pattern_round_left_down,
	later: [h_shu, zouzhidi]
}
Characters[Characters.length] = {
	char: "逗",
	first: pattern_round_left_down,
	later: [h_dou, zouzhidi]
}
Characters[Characters.length] = {
	char: "栗",
	first: pattern_ud_up_1_down_1_down_big,
	later: [h_xiwuzhe, h_mu]
}
Characters[Characters.length] = {
	char: "配",
	first: pattern_lr_left_1_right_1_left_big,
	later: [h_youxin, z_ji]
}
Characters[Characters.length] = {
	char: "翅",
	first: pattern_round_left_down,
	later: [h_zhi, z_xi, z_xi]
}
Characters[Characters.length] = {
	char: "辱",
	first: pattern_ud_up_1_down_1_up_big,
	later: [h_chenxing, h_cun]
}
Characters[Characters.length] = {
	char: "唇",
	first: pattern_ud_up_1_down_1_up_big,
	later: [h_chenxing, s_kou]
}
Characters[Characters.length] = {
	char: "夏",
	first: pattern_ud_up_1_down_1_up_big,
	later: [h_hengxiapie, s_mu, zhewen]
}
Characters[Characters.length] = {
	char: "础",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_stone, s_chu]
}
Characters[Characters.length] = {
	char: "破",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_stone, p_pi]
}
Characters[Characters.length] = {
	char: "原",
	first: pattern_round_left_up,
	later: [h_chang, p_bai, z_xiao]
}
Characters[Characters.length] = {
	char: "套",
	first: pattern_ud_up_1_down_1_down_big,
	later: [h_da, h_sizizuo]
}
Characters[Characters.length] = {
	char: "逐",
	first: pattern_round_left_down,
	later: [h_zhizhu, zouzhidi]
}
Characters[Characters.length] = {
	char: "烈",
	first: pattern_ud_up_2_down_1,
	later: [h_dai, lidaopang, sidiandi]
}
Characters[Characters.length] = {
	char: "殊",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_dai, p_zhu]
}
Characters[Characters.length] = {
	char: "顾",
	first: pattern_lr_left_2_right_1,
	later: [h_chang, z_eti, h_ye]
}
Characters[Characters.length] = {
	char: "轿",
	first: pattern_lr_left_1_right_2,
	later: [h_che, p_yao, pieshu]
}
Characters[Characters.length] = {
	char: "较",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_che, d_jiao]
}
Characters[Characters.length] = {
	char: "顿",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_dunti, h_ye]
}
Characters[Characters.length] = {
	char: "毙",
	first: pattern_ud_up_many_down_many,
	later: [p_bi, p_bi, heng, p_xi, p_bi]
}
Characters[Characters.length] = {
	char: "致",
	first: pattern_lr_left_1_right_1_left_big,
	later: [h_zhiyu, fanwenpang]
}
Characters[Characters.length] = {
	char: "柴",
	first: pattern_ud_up_2_down_1,
	later: [s_zhi, p_bi, h_mu]
}
Characters[Characters.length] = {
	char: "桌",
	first: pattern_ud_up_middle_down,
	later: [shangzitou, s_ri, h_mu]
}
Characters[Characters.length] = {
	char: "虑",
	first: pattern_round_left_up,
	later: [huzitou, d_xin]
}
Characters[Characters.length] = {
	char: "监",
	first: pattern_ud_up_2_down_1,
	later: [s_liangshu, p_zhutouban, minzidi]
}
Characters[Characters.length] = {
	char: "紧",
	first: pattern_ud_up_many_down_many,
	later: [s_liangshu, z_you, youzipang, z_xiao]
}
Characters[Characters.length] = {
	char: "党",
	first: pattern_ud_up_middle_down,
	later: [guangzitou, tubaogai, s_kou, p_er]
}
Characters[Characters.length] = {
	char: "晒",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_ri, h_xi]
}
Characters[Characters.length] = {
	char: "眠",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_mu, z_min]
}
Characters[Characters.length] = {
	char: "晓",
	first: pattern_lr_left_1_right_2,
	later: [s_ri, h_gewudian, h_wuzidi]
}
Characters[Characters.length] = {
	char: "鸭",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_jia, p_niaowuheng, heng]
}
Characters[Characters.length] = {
	char: "晃",
	first: pattern_ud_up_1_down_1_up_big,
	later: [s_ri, guangzitou, h_wuzidi]
}
Characters[Characters.length] = {
	char: "晌",
	first: pattern_lr_left_1_right_2,
	later: [s_ri, p_xiangzikuang, s_kou]
}
Characters[Characters.length] = {
	char: "晕",
	first: pattern_ud_up_middle_down,
	later: [s_ri, tubaogai, h_che]
}
Characters[Characters.length] = {
	char: "蚊",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_chong, d_wen]
}
Characters[Characters.length] = {
	char: "哨",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, guangzitou, s_yue]
}
Characters[Characters.length] = {
	char: "哭",
	first: pattern_ud_up_2_down_1,
	later: [s_kou, s_kou, h_quan]
}
Characters[Characters.length] = {
	char: "恩",
	first: pattern_ud_up_2_down_1,
	later: [s_kou, h_da, d_xin]
}
Characters[Characters.length] = {
	char: "唤",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, p_huan]
}
Characters[Characters.length] = {
	char: "啊",
	first: pattern_lr_left_middle_right,
	later: [s_kou, zuoerpang, h_ke]
}
Characters[Characters.length] = {
	char: "唉",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, sigong, p_shi]
}
Characters[Characters.length] = {
	char: "罢",
	first: pattern_ud_up_1_down_1_down_big,
	later: [s_siwuzhe, h_qu]
}
Characters[Characters.length] = {
	char: "峰",
	first: pattern_lr_left_1_right_2,
	later: [s_shan, zhewen, h_feng]
}
Characters[Characters.length] = {
	char: "圆",
	first: pattern_round_whole,
	later: [s_kou, s_kou, s_bei]
}
Characters[Characters.length] = {
	char: "贼",
	first: pattern_lr_left_1_right_2,
	later: [s_bei, h_ge, h_hengpie]
}
Characters[Characters.length] = {
	char: "贿",
	first: pattern_lr_left_1_right_2,
	later: [s_bei, h_hengpie, s_yue]
}
Characters[Characters.length] = {
	char: "钱",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jinzipang, h_zhan]
}
Characters[Characters.length] = {
	char: "钳",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jinzipang, h_ganku]
}
Characters[Characters.length] = {
	char: "钻",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jinzipang, s_zhan]
}
Characters[Characters.length] = {
	char: "铁",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jinzipang, p_shiqu]
}
Characters[Characters.length] = {
	char: "铃",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jinzipang, p_ling]
}
Characters[Characters.length] = {
	char: "铅",
	first: pattern_lr_left_1_right_2,
	later: [jinzipang, p_ji, s_kou]
}
Characters[Characters.length] = {
	char: "缺",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_gangwa, z_jueziyou]
}
Characters[Characters.length] = {
	char: "氧",
	first: pattern_round_right_up,
	later: [p_qi, d_yang]
}
Characters[Characters.length] = {
	char: "特",
	first: pattern_lr_left_1_right_2,
	later: [p_niu, h_tu, h_cun]
}
Characters[Characters.length] = {
	char: "牺",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_niu, h_xi]
}
Characters[Characters.length] = {
	char: "造",
	first: pattern_round_left_down,
	later: [p_niuwuwei, s_kou, zouzhidi]
}
Characters[Characters.length] = {
	char: "乘",
	first: pattern_single,
	later: [pie, heng, shu, shu, heng, heng, pie, shuwanhenggou, pie, na]
}
Characters[Characters.length] = {
	char: "敌",
	first: pattern_lr_left_1_right_1_left_big,
	later: [p_she, fanwenpang]
}
Characters[Characters.length] = {
	char: "秤",
	first: pattern_lr_left_1_right_1_left_big,
	later: [p_he, h_ping]
}
Characters[Characters.length] = {
	char: "租",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_he, s_qie]
}
Characters[Characters.length] = {
	char: "积",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_he, s_kou, p_eight]
}
Characters[Characters.length] = {
	char: "秧",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_he, s_yang]
}
Characters[Characters.length] = {
	char: "秩",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_he, p_shiqu]
}
Characters[Characters.length] = {
	char: "称",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_he, p_erya]
}
Characters[Characters.length] = {
	char: "秘",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_he, d_xin, pie]
}
Characters[Characters.length] = {
	char: "透",
	first: pattern_round_left_down,
	later: [p_he, z_nai, zouzhidi]
}
Characters[Characters.length] = {
	char: "笔",
	first: pattern_ud_up_2_down_1,
	later: [zhuzitou, p_mao]
}
Characters[Characters.length] = {
	char: "笑",
	first: pattern_ud_up_2_down_1,
	later: [zhuzitou, p_yao]
}
Characters[Characters.length] = {
	char: "笋",
	first: pattern_ud_up_2_down_1,
	later: [zhuzitou, z_yin]
}
Characters[Characters.length] = {
	char: "债",
	first: pattern_lr_left_1_right_2,
	later: [danrenpang, h_qingzitou, s_bei]
}
Characters[Characters.length] = {
	char: "借",
	first: pattern_lr_left_1_right_2,
	later: [danrenpang, h_caoheng, s_ri]
}
Characters[Characters.length] = {
	char: "值",
	first: pattern_lr_left_1_right_2,
	later: [danrenpang, h_hengpie, s_juzitou]
}
Characters[Characters.length] = {
	char: "倚",
	first: pattern_lr_left_1_right_2,
	later: [danrenpang, h_da, h_ke]
}
Characters[Characters.length] = {
	char: "倾",
	first: pattern_lr_left_1_right_2,
	later: [danrenpang, h_seven, h_ye]
}
Characters[Characters.length] = {
	char: "倒",
	first: pattern_lr_left_1_right_2,
	later: [danrenpang, h_zhiyu, lidaopang]
}
Characters[Characters.length] = {
	char: "倘",
	first: pattern_lr_left_1_right_many,
	later: [danrenpang, guangzitou, tongzikuang, s_kou]
}
Characters[Characters.length] = {
	char: "俱",
	first: pattern_lr_left_1_right_2,
	later: [danrenpang, s_juzitou, p_eight]
}
Characters[Characters.length] = {
	char: "倡",
	first: pattern_lr_left_1_right_2,
	later: [danrenpang, s_ri, s_ri]
}
Characters[Characters.length] = {
	char: "候",
	first: pattern_lr_left_1_right_2,
	later: [danrenpang, shu, z_houzitou, p_shi]
}
Characters[Characters.length] = {
	char: "俯",
	first: pattern_lr_left_1_right_many,
	later: [danrenpang, d_guang, danrenpang, h_cun]
}
Characters[Characters.length] = {
	char: "倍",
	first: pattern_lr_left_1_right_2,
	later: [danrenpang, d_li, s_kou]
}
Characters[Characters.length] = {
	char: "倦",
	first: pattern_lr_left_1_right_2,
	later: [danrenpang, d_juanzitou, cangzidi]
}
Characters[Characters.length] = {
	char: "健",
	first: pattern_lr_left_1_right_2,
	later: [danrenpang, jianzili, jianzidi]
}
Characters[Characters.length] = {
	char: "臭",
	first: pattern_ud_up_1_down_1_up_big,
	later: [p_zi, h_quan]
}
Characters[Characters.length] = {
	char: "射",
	first: pattern_lr_left_1_right_1_left_big,
	later: [p_shen, h_cun]
}
Characters[Characters.length] = {
	char: "躬",
	first: pattern_lr_left_1_right_1_left_big,
	later: [p_shen, z_gong]
}
Characters[Characters.length] = {
	char: "息",
	first: pattern_ud_up_1_down_1_up_big,
	later: [p_zi, d_xin]
}
Characters[Characters.length] = {
	char: "徒",
	first: pattern_lr_left_1_right_2,
	later: [shuangrenpang, h_tu, s_zouzidi]
}
Characters[Characters.length] = {
	char: "徐",
	first: pattern_lr_left_1_right_2,
	later: [shuangrenpang, p_ren, h_yuzidi]
}
Characters[Characters.length] = {
	char: "舰",
	first: pattern_lr_left_1_right_1_left_big,
	later: [p_zhou, s_jian]
}
Characters[Characters.length] = {
	char: "舱",
	first: pattern_lr_left_1_right_2,
	later: [p_zhou, p_ren, cangzidi]
}
Characters[Characters.length] = {
	char: "般",
	first: pattern_lr_left_1_right_2,
	later: [p_zhou, p_ji, z_you]
}
Characters[Characters.length] = {
	char: "航",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_zhou, d_kang]
}
Characters[Characters.length] = {
	char: "途",
	first: pattern_round_left_down,
	later: [p_ren, h_yuzidi, zouzhidi]
}
Characters[Characters.length] = {
	char: "拿",
	first: pattern_ud_up_middle_down,
	later: [p_ren, heng, s_kou, p_shou]
}
Characters[Characters.length] = {
	char: "爹",
	first: pattern_ud_up_middle_down,
	later: [p_fu, p_xi, p_xi]
}
Characters[Characters.length] = {
	char: "爱",
	first: pattern_ud_up_middle_down,
	later: [caizitou, tubaogai, h_hengpie, z_you]
}
Characters[Characters.length] = {
	char: "颂",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_gong, h_ye]
}
Characters[Characters.length] = {
	char: "翁",
	first: pattern_ud_up_1_down_2,
	later: [p_gong, p_xi, p_xi]
}
Characters[Characters.length] = {
	char: "脆",
	first: pattern_lr_left_1_right_many,
	later: [p_yue, weizitou, h_chang, cangzidi]
}
Characters[Characters.length] = {
	char: "脂",
	first: pattern_lr_left_1_right_2,
	later: [p_yue, p_bi, s_ri]
}
Characters[Characters.length] = {
	char: "胸",
	first: pattern_lr_left_1_right_2,
	later: [p_yue, baozitou, cha, xiongzikuang]
}
Characters[Characters.length] = {
	char: "胳",
	first: pattern_lr_left_1_right_2,
	later: [p_yue, zhewen, s_kou]
}
Characters[Characters.length] = {
	char: "脏",
	first: pattern_lr_left_1_right_2,
	later: [p_yue, d_guang, h_tu]
}
Characters[Characters.length] = {
	char: "胶",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_yue, d_jiao]
}
Characters[Characters.length] = {
	char: "脑",
	first: pattern_lr_left_1_right_2,
	later: [p_yue, liuzitou, cha, xiongzikuang]
}
Characters[Characters.length] = {
	char: "狸",
	first: pattern_lr_left_1_right_1_right_big,
	later: [fanquanpang, s_li]
}
Characters[Characters.length] = {
	char: "狼",
	first: pattern_lr_left_1_right_1_right_big,
	later: [fanquanpang, d_liang]
}
Characters[Characters.length] = {
	char: "逢",
	first: pattern_round_left_down,
	later: [zhewen, h_feng, zouzhidi]
}
Characters[Characters.length] = {
	char: "留",
	first: pattern_ud_up_2_down_1,
	later: [p_maoshangzuo, z_dao, s_tian]
}
Characters[Characters.length] = {
	char: "皱",
	first: pattern_lr_left_2_right_1,
	later: [weizitou, xunzitou, p_pi]
}
Characters[Characters.length] = {
	char: "饿",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shichi, p_wo]
}
Characters[Characters.length] = {
	char: "恋",
	first: pattern_ud_up_1_down_1_up_big,
	later: [d_bianzitou, d_xin]
}
Characters[Characters.length] = {
	char: "桨",
	first: pattern_ud_up_2_down_1,
	later: [jiangzipang, p_xi, h_mu]
}
Characters[Characters.length] = {
	char: "浆",
	first: pattern_ud_up_2_down_1,
	later: [jiangzipang, p_xi, z_shui]
}
Characters[Characters.length] = {
	char: "衰",
	first: pattern_ud_up_middle_down,
	later: [liuzitou, s_hguankou, p_yizidi]
}
Characters[Characters.length] = {
	char: "高",
	first: pattern_ud_up_middle_down,
	later: [liuzitou, s_kou, tongzikuang, s_kou]
}
Characters[Characters.length] = {
	char: "席",
	first: pattern_round_left_up,
	later: [d_guang, h_caoheng, s_jin]
}
Characters[Characters.length] = {
	char: "准",
	first: pattern_lr_left_1_right_1_right_big,
	later: [liangdianshui, quezipang]
}
Characters[Characters.length] = {
	char: "座",
	first: pattern_round_left_up,
	later: [d_guang, p_ren, p_ren, h_tu]
}
Characters[Characters.length] = {
	char: "脊",
	first: pattern_ud_up_1_down_1_down_big,
	later: [d_jizitou, s_yue]
}
Characters[Characters.length] = {
	char: "症",
	first: pattern_round_left_up,
	later: [bingzitou, h_zheng]
}
Characters[Characters.length] = {
	char: "病",
	first: pattern_round_left_up,
	later: [bingzitou, h_bing]
}
Characters[Characters.length] = {
	char: "疾",
	first: pattern_round_left_up,
	later: [bingzitou, p_shi]
}
Characters[Characters.length] = {
	char: "疼",
	first: pattern_round_left_up,
	later: [bingzitou, zhewen, d_ld_sl]
}
Characters[Characters.length] = {
	char: "疲",
	first: pattern_round_left_up,
	later: [bingzitou, p_pi]
}
Characters[Characters.length] = {
	char: "效",
	first: pattern_lr_left_1_right_1_left_big,
	later: [d_jiao, fanwenpang]
}
Characters[Characters.length] = {
	char: "离",
	first: pattern_ud_up_middle_down,
	later: [liuzitou, cha, xiongzikuang, tongzikuang, sigong]
}
Characters[Characters.length] = {
	char: "唐",
	first: pattern_round_left_up,
	later: [d_guang, z_tangzili, s_kou]
}
Characters[Characters.length] = {
	char: "资",
	first: pattern_ud_up_2_down_1,
	later: [liangdianshui, p_qian, s_bei]
}
Characters[Characters.length] = {
	char: "凉",
	first: pattern_lr_left_1_right_many,
	later: [liangdianshui, liuzitou, z_xiao]
}
Characters[Characters.length] = {
	char: "站",
	first: pattern_lr_left_1_right_1_right_big,
	later: [d_li, s_zhan]
}
Characters[Characters.length] = {
	char: "剖",
	first: pattern_lr_left_2_right_1,
	later: [d_li, s_kou, lidaopang]
}
Characters[Characters.length] = {
	char: "竞",
	first: pattern_ud_up_middle_down,
	later: [d_li, s_kou, p_er]
}
Characters[Characters.length] = {
	char: "部",
	first: pattern_lr_left_2_right_1,
	later: [d_li, s_kou, youerpang]
}
Characters[Characters.length] = {
	char: "旁",
	first: pattern_ud_up_middle_down,
	later: [liuzitou, lanzitou, tubaogai, d_fang]
}
Characters[Characters.length] = {
	char: "旅",
	first: pattern_lr_left_1_right_2,
	later: [d_fang, pieheng, p_paiyouli]
}
Characters[Characters.length] = {
	char: "畜",
	first: pattern_ud_up_1_down_1_down_big,
	later: [liuzitou, youzipang, s_tian]
}
Characters[Characters.length] = {
	char: "阅",
	first: pattern_round_up,
	later: [d_men, lanzitou, s_kou, p_er]
}
Characters[Characters.length] = {
	char: "羞",
	first: pattern_round_left_up,
	later: [pieweiyang, z_chou]
}
Characters[Characters.length] = {
	char: "瓶",
	first: pattern_lr_left_1_right_1_right_big,
	later: [lanzitou, h_kai, h_wa]
}
Characters[Characters.length] = {
	char: "拳",
	first: pattern_ud_up_1_down_1_up_big,
	later: [d_juanzitou, p_shou]
}
Characters[Characters.length] = {
	char: "粉",
	first: pattern_lr_left_1_right_1_right_big,
	later: [d_mi, p_fen]
}
Characters[Characters.length] = {
	char: "料",
	first: pattern_lr_left_1_right_1_right_big,
	later: [d_mi, d_dou]
}
Characters[Characters.length] = {
	char: "益",
	first: pattern_ud_up_1_down_1_down_big,
	later: [lanzitou, heng, p_eight, minzidi]
}
Characters[Characters.length] = {
	char: "兼",
	first: pattern_single,
	later: [d_jian]
}
Characters[Characters.length] = {
	char: "烤",
	first: pattern_lr_left_1_right_2,
	later: [huozipang, laozitou, h_qiaoziyou]
}
Characters[Characters.length] = {
	char: "烘",
	first: pattern_lr_left_1_right_1_right_big,
	later: [huozipang, h_xizitou, p_eight]
}
Characters[Characters.length] = {
	char: "烦",
	first: pattern_lr_left_1_right_1_right_big,
	later: [huozipang, h_ye]
}
Characters[Characters.length] = {
	char: "烧",
	first: pattern_lr_left_1_right_2,
	later: [huozipang, h_gewudian, h_wuzidi]
}
Characters[Characters.length] = {
	char: "烛",
	first: pattern_lr_left_1_right_1_right_big,
	later: [huozipang, s_chong]
}
Characters[Characters.length] = {
	char: "烟",
	first: pattern_lr_left_1_right_2,
	later: [huozipang, s_kou, h_da]
}
Characters[Characters.length] = {
	char: "递",
	first: pattern_round_left_down,
	later: [lanzitou, z_dizidi, zouzhidi]
}
Characters[Characters.length] = {
	char: "涛",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, h_piefeng, h_cun]
}
Characters[Characters.length] = {
	char: "浙",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, tishoupang, p_jin]
}
Characters[Characters.length] = {
	char: "涝",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, caozitou, tubaogai, z_li]
}
Characters[Characters.length] = {
	char: "酒",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, h_youxin]
}
Characters[Characters.length] = {
	char: "涉",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, s_zhi, s_shaowud]
}
Characters[Characters.length] = {
	char: "消",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, guangzitou, s_yue]
}
Characters[Characters.length] = {
	char: "浩",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, p_niuwuwei, s_kou]
}
Characters[Characters.length] = {
	char: "海",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, pieheng, z_mu]
}
Characters[Characters.length] = {
	char: "涂",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, p_ren, h_yuzidi]
}
Characters[Characters.length] = {
	char: "浴",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, p_eight, p_ren, s_kou]
}
Characters[Characters.length] = {
	char: "浮",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, caizitou, z_zi]
}
Characters[Characters.length] = {
	char: "流",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, d_chongzitou, p_liuzidi]
}
Characters[Characters.length] = {
	char: "润",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, d_men, h_wang]
}
Characters[Characters.length] = {
	char: "浪",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, d_liang]
}
Characters[Characters.length] = {
	char: "浸",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, xunzitou, tubaogai, z_you]
}
Characters[Characters.length] = {
	char: "涨",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, z_gong, p_chang]
}
Characters[Characters.length] = {
	char: "烫",
	first: pattern_ud_up_2_down_1,
	later: [sandianshui, z_yangziyou, huozipang]
}
Characters[Characters.length] = {
	char: "涌",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, z_yongzitou, s_yong]
}
Characters[Characters.length] = {
	char: "悟",
	first: pattern_lr_left_1_right_2,
	later: [shuxinpang, h_five, s_kou]
}
Characters[Characters.length] = {
	char: "悄",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shuxinpang, guangzitou, s_yue]
}
Characters[Characters.length] = {
	char: "悔",
	first: pattern_lr_left_1_right_2,
	later: [shuxinpang, pieheng, z_mu]
}
Characters[Characters.length] = {
	char: "悦",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shuxinpang, lanzitou, s_kou, p_er]
}
Characters[Characters.length] = {
	char: "害",
	first: pattern_ud_up_middle_down,
	later: [baogaitou, h_feng, s_kou]
}
Characters[Characters.length] = {
	char: "宽",
	first: pattern_ud_up_middle_down,
	later: [baogaitou, caozitou, s_jian]
}
Characters[Characters.length] = {
	char: "家",
	first: pattern_ud_up_1_down_1_down_big,
	later: [baogaitou, h_zhizhu]
}
Characters[Characters.length] = {
	char: "宵",
	first: pattern_ud_up_1_down_1_down_big,
	later: [baogaitou, guangzitou, s_yue]
}
Characters[Characters.length] = {
	char: "宴",
	first: pattern_ud_up_middle_down,
	later: [baogaitou, s_ri, z_nv]
}
Characters[Characters.length] = {
	char: "宾",
	first: pattern_lr_left_1_right_1_right_big,
	later: [baogaitou, p_qiu, p_eight]
}
Characters[Characters.length] = {
	char: "窄",
	first: pattern_ud_up_1_down_1_down_big,
	later: [xuezitou, p_zha]
}
Characters[Characters.length] = {
	char: "容",
	first: pattern_lr_left_1_right_1_right_big,
	later: [baogaitou, p_eight, p_ren, s_kou]
}
Characters[Characters.length] = {
	char: "宰",
	first: pattern_ud_up_1_down_1_down_big,
	later: [baogaitou, d_li, h_ten]
}
Characters[Characters.length] = {
	char: "案",
	first: pattern_ud_up_middle_down,
	later: [baogaitou, z_nv, h_mu]
}
Characters[Characters.length] = {
	char: "请",
	first: pattern_lr_left_1_right_2,
	later: [yanzipang, h_qingzitou, s_yue]
}
Characters[Characters.length] = {
	char: "朗",
	first: pattern_lr_left_1_right_1_left_big,
	later: [d_langzizuo, p_yue]
}
Characters[Characters.length] = {
	char: "诸",
	first: pattern_lr_left_1_right_2,
	later: [yanzipang, laozitou, s_ri]
}
Characters[Characters.length] = {
	char: "读",
	first: pattern_lr_left_1_right_many,
	later: [yanzipang, h_ten, henggou, d_tou]
}
Characters[Characters.length] = {
	char: "扇",
	first: pattern_round_left_up,
	later: [d_hu, z_xi, z_xi]
}
Characters[Characters.length] = {
	char: "袜",
	first: pattern_lr_left_1_right_1_right_big,
	later: [buyipang, h_mo]
}
Characters[Characters.length] = {
	char: "袖",
	first: pattern_lr_left_1_right_1_right_big,
	later: [buyipang, s_you]
}
Characters[Characters.length] = {
	char: "袍",
	first: pattern_lr_left_1_right_2,
	later: [buyipang, baozitou, z_si]
}
Characters[Characters.length] = {
	char: "被",
	first: pattern_lr_left_1_right_1_right_big,
	later: [buyipang, p_pi]
}
Characters[Characters.length] = {
	char: "祥",
	first: pattern_lr_left_1_right_1_right_big,
	later: [buyipang, d_yang]
}
Characters[Characters.length] = {
	char: "课",
	first: pattern_lr_left_1_right_1_right_big,
	later: [yanzipang, s_guo]
}
Characters[Characters.length] = {
	char: "谁",
	first: pattern_lr_left_1_right_1_right_big,
	later: [yanzipang, quezipang]
}
Characters[Characters.length] = {
	char: "调",
	first: pattern_lr_left_1_right_many,
	later: [yanzipang, zhouzikuang, h_tu, s_kou]
}
Characters[Characters.length] = {
	char: "冤",
	first: pattern_ud_up_1_down_1_down_big,
	later: [tubaogai, p_mian, dian]
}
Characters[Characters.length] = {
	char: "谅",
	first: pattern_lr_left_1_right_1_right_big,
	later: [yanzipang, liuzitou, s_kou, s_xiao]
}
Characters[Characters.length] = {
	char: "谈",
	first: pattern_lr_left_1_right_2,
	later: [yanzipang, huozipang, huozipang]
}
Characters[Characters.length] = {
	char: "谊",
	first: pattern_lr_left_1_right_2,
	later: [yanzipang, baogaitou, s_qie]
}
Characters[Characters.length] = {
	char: "剥",
	first: pattern_lr_left_2_right_1,
	later: [luzitou, z_dianshui, lidaopang]
}
Characters[Characters.length] = {
	char: "恳",
	first: pattern_ud_up_1_down_1_up_big,
	later: [kenzitou, d_xin]
}
Characters[Characters.length] = {
	char: "展",
	first: pattern_round_left_up,
	later: [z_shizitou, h_xizitou, z_sangzidi]
}
Characters[Characters.length] = {
	char: "剧",
	first: pattern_lr_left_2_right_1,
	later: [z_shizitou, h_gu, lidaopang]
}
Characters[Characters.length] = {
	char: "屑",
	first: pattern_round_left_up,
	later: [z_shizitou, guangzitou, s_yue]
}
Characters[Characters.length] = {
	char: "弱",
	first: pattern_lr_left_1_right_1_left_big,
	later: [z_gong, liangdianshui, z_gong, liangdianshui]
}
Characters[Characters.length] = {
	char: "陵",
	first: pattern_lr_left_1_right_many,
	later: [zuoerpang, h_tu, p_eight, zhewen]
}
Characters[Characters.length] = {
	char: "陶",
	first: pattern_lr_left_1_right_2,
	later: [zuoerpang, baozitou, p_gangwa]
}
Characters[Characters.length] = {
	char: "陷",
	first: pattern_lr_left_1_right_2,
	later: [zuoerpang, weizitou, p_jiu]
}
Characters[Characters.length] = {
	char: "陪",
	first: pattern_lr_left_1_right_2,
	later: [zuoerpang, d_li, s_kou]
}
Characters[Characters.length] = {
	char: "娱",
	first: pattern_lr_left_1_right_2,
	later: [z_nv, s_kou, h_tian]
}
Characters[Characters.length] = {
	char: "娘",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_nv, d_liang]
}
Characters[Characters.length] = {
	char: "通",
	first: pattern_round_left_down,
	later: [z_yongzitou, s_yong, zouzhidi]
}
Characters[Characters.length] = {
	char: "能",
	first: pattern_lr_left_2_right_2,
	later: [sigong, s_yue, p_bi, p_bi]
}
Characters[Characters.length] = {
	char: "难",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_you, quezipang]
}
Characters[Characters.length] = {
	char: "预",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_yu, h_ye]
}
Characters[Characters.length] = {
	char: "桑",
	first: pattern_ud_up_many_down_1,
	later: [z_you, z_you, z_you, h_mu]
}
Characters[Characters.length] = {
	char: "绢",
	first: pattern_lr_left_1_right_2,
	later: [jiaosipang, s_kou, s_yue]
}
Characters[Characters.length] = {
	char: "绣",
	first: pattern_lr_left_1_right_2,
	later: [jiaosipang, p_he, z_nai]
}
Characters[Characters.length] = {
	char: "验",
	first: pattern_lr_left_1_right_2,
	later: [z_ma, p_ren, heng, d_xingzitou, heng]
}
Characters[Characters.length] = {
	char: "继",
	first: pattern_lr_left_1_right_2,
	later: [jiaosipang, d_mi, shuzheheng]
}

/* 十一画 */
Characters[Characters.length] = {
	char: "球",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_wang, h_qiu]
}
Characters[Characters.length] = {
	char: "理",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_wang, s_li]
}
Characters[Characters.length] = {
	char: "捧",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, h_fengzitou, h_fengzidi]
}
Characters[Characters.length] = {
	char: "堵",
	first: pattern_lr_left_1_right_2,
	later: [h_tu, laozitou, s_ri]
}
Characters[Characters.length] = {
	char: "描",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, caozitou, s_tian]
}
Characters[Characters.length] = {
	char: "域",
	first: pattern_lr_left_1_right_2,
	later: [h_tu, h_ge, s_kou, heng]
}
Characters[Characters.length] = {
	char: "掩",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, h_da, s_dian]
}
Characters[Characters.length] = {
	char: "捷",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, h_jieziyou]
}
Characters[Characters.length] = {
	char: "排",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, s_fei]
}
Characters[Characters.length] = {
	char: "掉",
	first: pattern_lr_left_1_right_many,
	later: [tishoupang, shangzitou, s_ri, h_ten]
}
Characters[Characters.length] = {
	char: "堆",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_tu, quezipang]
}
Characters[Characters.length] = {
	char: "推",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, quezipang]
}
Characters[Characters.length] = {
	char: "掀",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, p_jin, p_qian]
}
Characters[Characters.length] = {
	char: "授",
	first: pattern_lr_left_1_right_many,
	later: [tishoupang, caizitou, tubaogai, z_you]
}
Characters[Characters.length] = {
	char: "教",
	first: pattern_lr_left_2_right_1,
	later: [laozitou, z_zi, fanwenpang]
}
Characters[Characters.length] = {
	char: "掏",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, baozitou, p_gangwa]
}
Characters[Characters.length] = {
	char: "掠",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, liuzitou, s_kou, z_xiao]
}
Characters[Characters.length] = {
	char: "培",
	first: pattern_lr_left_1_right_2,
	later: [h_tu, d_li, s_kou]
}
Characters[Characters.length] = {
	char: "接",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, d_li, z_nv]
}
Characters[Characters.length] = {
	char: "控",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, xuezitou, h_gong]
}
Characters[Characters.length] = {
	char: "探",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, tubaogai, p_eight, h_mu]
}
Characters[Characters.length] = {
	char: "据",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, z_shizitou, h_gu]
}
Characters[Characters.length] = {
	char: "掘",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, z_shizitou, s_chu]
}
Characters[Characters.length] = {
	char: "职",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_erduo, s_kou, p_eight]
}
Characters[Characters.length] = {
	char: "基",
	first: pattern_ud_up_1_down_1_up_big,
	later: [h_qizitou, p_eight, h_tu]
}
Characters[Characters.length] = {
	char: "著",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caozitou, laozitou, s_ri]
}
Characters[Characters.length] = {
	char: "勒",
	first: pattern_lr_left_1_right_1_left_big,
	later: [h_caoheng, s_gezidi, z_li]
}
Characters[Characters.length] = {
	char: "黄",
	first: pattern_ud_up_middle_down,
	later: [h_caoheng, s_you, p_eight]
}
Characters[Characters.length] = {
	char: "萌",
	first: pattern_ud_up_1_down_2,
	later: [caozitou, s_ri, p_yue]
}
Characters[Characters.length] = {
	char: "萝",
	first: pattern_ud_up_middle_down,
	later: [caozitou, s_siwuzhe, p_xi]
}
Characters[Characters.length] = {
	char: "菌",
	first: pattern_ud_up_1_down_2,
	later: [caozitou, s_kou, p_he]
}
Characters[Characters.length] = {
	char: "菜",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caozitou, caizitou, h_mu]
}
Characters[Characters.length] = {
	char: "萄",
	first: pattern_ud_up_1_down_2,
	later: [caozitou, baozitou, p_gangwa]
}
Characters[Characters.length] = {
	char: "菊",
	first: pattern_ud_up_1_down_2,
	later: [caozitou, baozitou, d_mi]
}
Characters[Characters.length] = {
	char: "萍",
	first: pattern_ud_up_1_down_2,
	later: [caozitou, sandianshui, h_ping]
}
Characters[Characters.length] = {
	char: "菠",
	first: pattern_ud_up_1_down_2,
	later: [caozitou, sandianshui, p_pi]
}
Characters[Characters.length] = {
	char: "营",
	first: pattern_ud_up_middle_down,
	later: [caozitou, tubaogai, s_kou, s_kou]
}
Characters[Characters.length] = {
	char: "械",
	first: pattern_lr_left_1_right_2,
	later: [h_mu, h_ge, h_piecao]
}
Characters[Characters.length] = {
	char: "梦",
	first: pattern_ud_up_2_down_1,
	later: [h_mu, h_mu, p_xi]
}
Characters[Characters.length] = {
	char: "梢",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, guangzitou, s_yue]
}
Characters[Characters.length] = {
	char: "梅",
	first: pattern_lr_left_1_right_2,
	later: [h_mu, pieheng, z_mu]
}
Characters[Characters.length] = {
	char: "检",
	first: pattern_lr_left_1_right_2,
	later: [h_mu, p_ren, heng, d_xingzitou, heng]
}
Characters[Characters.length] = {
	char: "梳",
	first: pattern_lr_left_1_right_2,
	later: [h_mu, d_chongzitou, p_liuzidi]
}
Characters[Characters.length] = {
	char: "梯",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, lanzitou, z_dizidi]
}
Characters[Characters.length] = {
	char: "桶",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, z_yongzitou, s_yong]
}
Characters[Characters.length] = {
	char: "救",
	first: pattern_lr_left_1_right_1_left_big,
	later: [h_qiu, fanwenpang]
}
Characters[Characters.length] = {
	char: "副",
	first: pattern_lr_left_many_right_1,
	later: [heng, s_kou, s_tian, lidaopang]
}
Characters[Characters.length] = {
	char: "票",
	first: pattern_ud_up_1_down_1_down_big,
	later: [h_xiwuzhe, h_shiren]
}
Characters[Characters.length] = {
	char: "戚",
	first: pattern_round_up,
	later: [chengzikuang, s_shuzizuo]
}
Characters[Characters.length] = {
	char: "爽",
	first: pattern_single,
	later: [heng, pie, dian, pie, dian, pie, dian, pie, dian, pie, na]
}
Characters[Characters.length] = {
	char: "聋",
	first: pattern_ud_up_1_down_1_up_big,
	later: [h_long, h_erduo]
}
Characters[Characters.length] = {
	char: "袭",
	first: pattern_ud_up_1_down_1_down_big,
	later: [h_long, d_yifu]
}
Characters[Characters.length] = {
	char: "盛",
	first: pattern_ud_up_1_down_1_down_big,
	later: [h_cheng, minzidi]
}
Characters[Characters.length] = {
	char: "雪",
	first: pattern_ud_up_1_down_1_up_big,
	later: [h_yushui, xunzitou]
}
Characters[Characters.length] = {
	char: "辅",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_che, h_fudu]
}
Characters[Characters.length] = {
	char: "辆",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_che, h_liang]
}
Characters[Characters.length] = {
	char: "虚",
	first: pattern_round_left_up,
	later: [huzitou, s_ye]
}
Characters[Characters.length] = {
	char: "雀",
	first: pattern_ud_up_1_down_1_down_big,
	later: [s_xiao, quezipang]
}
Characters[Characters.length] = {
	char: "堂",
	first: pattern_ud_up_middle_down,
	later: [guangzitou, tubaogai, s_kou, h_tu]
}
Characters[Characters.length] = {
	char: "常",
	first: pattern_ud_up_middle_down,
	later: [guangzitou, tubaogai, s_kou, s_jin]
}
Characters[Characters.length] = {
	char: "匙",
	first: pattern_round_left_down,
	later: [s_ri, heng, s_zouzidi, p_bi]
}
Characters[Characters.length] = {
	char: "晨",
	first: pattern_ud_up_1_down_1_up_big,
	later: [s_ri, h_chenxing]
}
Characters[Characters.length] = {
	char: "睁",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_mu, p_zheng]
}
Characters[Characters.length] = {
	char: "眯",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_mu, d_mi]
}
Characters[Characters.length] = {
	char: "眼",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_mu, kenzitou]
}
Characters[Characters.length] = {
	char: "悬",
	first: pattern_ud_up_1_down_1_up_big,
	later: [s_qie, sigong, d_xin]
}
Characters[Characters.length] = {
	char: "野",
	first: pattern_lr_left_1_right_1_left_big,
	later: [s_li, z_yu]
}
Characters[Characters.length] = {
	char: "啦",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, tishoupang, d_li]
}
Characters[Characters.length] = {
	char: "晚",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_ri, p_mian]
}
Characters[Characters.length] = {
	char: "啄",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, h_zhizhu]
}
Characters[Characters.length] = {
	char: "距",
	first: pattern_lr_left_2_right_1,
	later: [s_kou, s_zhi, h_ju]
}
Characters[Characters.length] = {
	char: "跃",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, s_zhi, p_yao]
}
Characters[Characters.length] = {
	char: "略",
	first: pattern_lr_left_1_right_2,
	later: [s_tian, zhewen, s_kou]
}
Characters[Characters.length] = {
	char: "蛇",
	first: pattern_lr_left_1_right_2,
	later: [s_chong, baogaitou, p_bi]
}
Characters[Characters.length] = {
	char: "累",
	first: pattern_ud_up_1_down_2,
	later: [s_tian, youzipang, z_xiao]
}
Characters[Characters.length] = {
	char: "唱",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, s_ri, s_ri]
}
Characters[Characters.length] = {
	char: "患",
	first: pattern_ud_up_1_down_1_up_big,
	later: [s_chuan, d_xin]
}
Characters[Characters.length] = {
	char: "唯",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, quezipang]
}
Characters[Characters.length] = {
	char: "崖",
	first: pattern_ud_up_middle_down,
	later: [s_shan, h_chang, h_tu, h_tu]
}
Characters[Characters.length] = {
	char: "崭",
	first: pattern_ud_up_1_down_2,
	later: [s_shan, h_che, p_jin]
}
Characters[Characters.length] = {
	char: "崇",
	first: pattern_ud_up_middle_down,
	later: [s_shan, baogaitou, h_shiren]
}
Characters[Characters.length] = {
	char: "圈",
	first: pattern_round_whole,
	later: [s_kou, d_juanzitou, s_kou]
}
Characters[Characters.length] = {
	char: "铜",
	first: pattern_lr_left_1_right_2,
	later: [jinzipang, tongzikuang, heng, s_kou]
}
Characters[Characters.length] = {
	char: "铲",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jinzipang, d_chan]
}
Characters[Characters.length] = {
	char: "银",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jinzipang, kenzitou]
}
Characters[Characters.length] = {
	char: "甜",
	first: pattern_lr_left_1_right_1_left_big,
	later: [p_she, h_ganku]
}
Characters[Characters.length] = {
	char: "梨",
	first: pattern_ud_up_2_down_1,
	later: [p_he, lidaopang, h_mu]
}
Characters[Characters.length] = {
	char: "犁",
	first: pattern_ud_up_2_down_1,
	later: [p_he, lidaopang, p_niu]
}
Characters[Characters.length] = {
	char: "移",
	first: pattern_lr_left_1_right_2,
	later: [p_he, p_xi, p_xi]
}
Characters[Characters.length] = {
	char: "笨",
	first: pattern_ud_up_2_down_1,
	later: [zhuzitou, h_ben]
}
Characters[Characters.length] = {
	char: "笼",
	first: pattern_ud_up_2_down_1,
	later: [zhuzitou, h_long]
}
Characters[Characters.length] = {
	char: "笛",
	first: pattern_ud_up_2_down_1,
	later: [zhuzitou, s_you]
}
Characters[Characters.length] = {
	char: "符",
	first: pattern_ud_up_2_down_2,
	later: [zhuzitou, danrenpang, h_cun]
}
Characters[Characters.length] = {
	char: "第",
	first: pattern_ud_up_2_down_1,
	later: [zhuzitou, z_dizidi]
}
Characters[Characters.length] = {
	char: "敏",
	first: pattern_lr_left_2_right_1,
	later: [pieheng, z_mu, fanwenpang]
}
Characters[Characters.length] = {
	char: "做",
	first: pattern_lr_left_middle_right,
	later: [danrenpang, h_gu, fanwenpang]
}
Characters[Characters.length] = {
	char: "袋",
	first: pattern_ud_up_2_down_1,
	later: [danrenpang, shizikuang, d_yifu]
}
Characters[Characters.length] = {
	char: "悠",
	first: pattern_ud_up_2_down_1,
	later: [danrenpang, shu, fanwenpang, d_xin]
}
Characters[Characters.length] = {
	char: "偿",
	first: pattern_lr_left_1_right_many,
	later: [danrenpang, guangzitou, tubaogai, h_yun]
}
Characters[Characters.length] = {
	char: "偶",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, s_yu]
}
Characters[Characters.length] = {
	char: "偷",
	first: pattern_lr_left_1_right_many,
	later: [danrenpang, p_ren, heng, s_yue, lidaopang]
}
Characters[Characters.length] = {
	char: "您",
	first: pattern_ud_up_2_down_1,
	later: [danrenpang, p_erya, d_xin]
}
Characters[Characters.length] = {
	char: "售",
	first: pattern_ud_up_1_down_1_up_big,
	later: [quezipang, s_kou]
}
Characters[Characters.length] = {
	char: "停",
	first: pattern_lr_left_1_right_many,
	later: [danrenpang, liuzitou, s_kou, tubaogai, h_ding]
}
Characters[Characters.length] = {
	char: "偏",
	first: pattern_lr_left_1_right_2,
	later: [danrenpang, d_hu, s_bianzili]
}
Characters[Characters.length] = {
	char: "假",
	first: pattern_lr_left_1_right_2,
	later: [danrenpang, z_jiajian]
}
Characters[Characters.length] = {
	char: "得",
	first: pattern_lr_left_1_right_2,
	later: [shuangrenpang, s_ri, heng, h_cun]
}
Characters[Characters.length] = {
	char: "衔",
	first: pattern_lr_left_middle_right,
	later: [shuangrenpang, jinzipang, h_xingziyou]
}
Characters[Characters.length] = {
	char: "盘",
	first: pattern_ud_up_1_down_1_up_big,
	later: [p_zhou, minzidi]
}
Characters[Characters.length] = {
	char: "船",
	first: pattern_lr_left_1_right_2,
	later: [p_zhou, p_ji, s_kou]
}
Characters[Characters.length] = {
	char: "斜",
	first: pattern_lr_left_1_right_1_left_big,
	later: [p_ren, h_yuzidi, d_dou]
}
Characters[Characters.length] = {
	char: "盒",
	first: pattern_ud_up_1_down_1_up_big,
	later: [p_ren, heng, s_kou, minzidi]
}
Characters[Characters.length] = {
	char: "鸽",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_ren, heng, s_kou, p_niaowuheng, heng]
}
Characters[Characters.length] = {
	char: "悉",
	first: pattern_ud_up_1_down_1_up_big,
	later: [fanzitou, d_xin]
}
Characters[Characters.length] = {
	char: "欲",
	first: pattern_lr_left_1_right_1_left_big,
	later: [p_eight, p_ren, s_kou, p_qian]
}
Characters[Characters.length] = {
	char: "彩",
	first: pattern_lr_left_2_right_1,
	later: [caizitou, h_mu, sanpie]
}
Characters[Characters.length] = {
	char: "领",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_ling, h_ye]
}
Characters[Characters.length] = {
	char: "脚",
	first: pattern_lr_left_middle_right,
	later: [p_yue, h_qu, danerpang]
}
Characters[Characters.length] = {
	char: "脖",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_yue, h_ten, tubaogai, z_zi]
}
Characters[Characters.length] = {
	char: "脸",
	first: pattern_lr_left_1_right_2,
	later: [p_yue, p_ren, heng, d_xingzitou, heng]
}
Characters[Characters.length] = {
	char: "脱",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_yue, lanzitou, s_kou, p_er]
}
Characters[Characters.length] = {
	char: "象",
	first: pattern_single,
	later: [pie, hengzhepie, shu, hengzheshu, heng, pie, wanshugou, pie, pie, pie, dian]
}
Characters[Characters.length] = {
	char: "够",
	first: pattern_lr_left_2_right_2,
	later: [p_ju, p_xi, p_xi]
}
Characters[Characters.length] = {
	char: "猜",
	first: pattern_lr_left_1_right_2,
	later: [fanquanpang, h_qingzitou, s_yue]
}
Characters[Characters.length] = {
	char: "猪",
	first: pattern_lr_left_1_right_1_right_big,
	later: [fanquanpang, laozitou, s_ri]
}
Characters[Characters.length] = {
	char: "猎",
	first: pattern_lr_left_1_right_2,
	later: [fanquanpang, h_xizitou, s_ri]
}
Characters[Characters.length] = {
	char: "猫",
	first: pattern_lr_left_1_right_2,
	later: [fanquanpang, caozitou, s_tian]
}
Characters[Characters.length] = {
	char: "猛",
	first: pattern_lr_left_1_right_2,
	later: [fanquanpang, z_zi, minzidi]
}
Characters[Characters.length] = {
	char: "馅",
	first: pattern_lr_left_1_right_2,
	later: [shichi, weizitou, p_jiu]
}
Characters[Characters.length] = {
	char: "馆",
	first: pattern_lr_left_1_right_2,
	later: [shichi, baogaitou, s_guanzidi]
}
Characters[Characters.length] = {
	char: "凑",
	first: pattern_lr_left_1_right_2,
	later: [liangdianshui, h_fengzitou, h_tian]
}
Characters[Characters.length] = {
	char: "减",
	first: pattern_lr_left_1_right_2,
	later: [liangdianshui, chengzikuang, heng, s_kou]
}
Characters[Characters.length] = {
	char: "毫",
	first: pattern_ud_up_middle_down,
	later: [liuzitou, s_kou, tubaogai, p_mao]
}
Characters[Characters.length] = {
	char: "麻",
	first: pattern_round_left_up,
	later: [d_guang, h_mu, h_mu]
}
Characters[Characters.length] = {
	char: "痒",
	first: pattern_round_left_up,
	later: [bingzitou, d_yang]
}
Characters[Characters.length] = {
	char: "痕",
	first: pattern_round_left_up,
	later: [bingzitou, kenzitou]
}
Characters[Characters.length] = {
	char: "廊",
	first: pattern_round_left_up,
	later: [d_guang, d_langzizuo, youerpang]
}
Characters[Characters.length] = {
	char: "康",
	first: pattern_round_left_up,
	later: [d_guang, z_lishu]
}
Characters[Characters.length] = {
	char: "庸",
	first: pattern_round_left_up,
	later: [d_guang, z_yongzili]
}
Characters[Characters.length] = {
	char: "鹿",
	first: pattern_round_left_up,
	later: [d_guang, z_luzhongsh, p_bi, p_bi]
}
Characters[Characters.length] = {
	char: "盗",
	first: pattern_ud_up_2_down_1,
	later: [liangdianshui, p_qian, minzidi]
}
Characters[Characters.length] = {
	char: "章",
	first: pattern_ud_up_middle_down,
	later: [d_li, s_ri, h_ten]
}
Characters[Characters.length] = {
	char: "竟",
	first: pattern_ud_up_middle_down,
	later: [d_li, s_ri, p_er]
}
Characters[Characters.length] = {
	char: "商",
	first: pattern_ud_up_middle_down,
	later: [liuzitou, lanzitou, tongzikuang, p_eight, s_kou]
}
Characters[Characters.length] = {
	char: "族",
	first: pattern_lr_left_1_right_2,
	later: [d_fang, pieheng, p_shi]
}
Characters[Characters.length] = {
	char: "旋",
	first: pattern_lr_left_1_right_2,
	later: [d_fang, pieheng, henggou, s_zouzidi]
}
Characters[Characters.length] = {
	char: "望",
	first: pattern_ud_up_2_down_1,
	later: [d_wang, p_yue, h_wang]
}
Characters[Characters.length] = {
	char: "率",
	first: pattern_ud_up_middle_down,
	later: [liuzitou, liangdianshui, youzipang, piedian]
}
Characters[Characters.length] = {
	char: "着",
	first: pattern_ud_up_1_down_1_up_big,
	later: [pieweiyang, s_mu]
}
Characters[Characters.length] = {
	char: "盖",
	first: pattern_ud_up_1_down_1_up_big,
	later: [yangzitou, minzidi]
}
Characters[Characters.length] = {
	char: "粘",
	first: pattern_lr_left_1_right_1_right_big,
	later: [d_mi, s_zhan]
}
Characters[Characters.length] = {
	char: "粗",
	first: pattern_lr_left_1_right_1_right_big,
	later: [d_mi, s_qie]
}
Characters[Characters.length] = {
	char: "粒",
	first: pattern_lr_left_1_right_1_right_big,
	later: [d_mi, d_li]
}
Characters[Characters.length] = {
	char: "断",
	first: pattern_lr_left_2_right_1,
	later: [d_mi, shuzheheng, p_jin]
}
Characters[Characters.length] = {
	char: "剪",
	first: pattern_ud_up_many_down_1,
	later: [lanzitou, heng, s_yue, lidaopang, z_dao]
}
Characters[Characters.length] = {
	char: "兽",
	first: pattern_ud_up_middle_down,
	later: [lanzitou, s_tian, heng, s_kou]
}
Characters[Characters.length] = {
	char: "清",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, h_qingzitou, s_yue]
}
Characters[Characters.length] = {
	char: "添",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, h_tian, shuxindi]
}
Characters[Characters.length] = {
	char: "淋",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, h_mu, h_mu]
}
Characters[Characters.length] = {
	char: "淹",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, h_da, s_dian]
}
Characters[Characters.length] = {
	char: "渠",
	first: pattern_ud_up_2_down_1,
	later: [sandianshui, h_ju, h_mu]
}
Characters[Characters.length] = {
	char: "渐",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, h_che, p_jin]
}
Characters[Characters.length] = {
	char: "混",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, s_ri, p_bi, p_bi]
}
Characters[Characters.length] = {
	char: "渔",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, weizitou, s_tian, heng]
}
Characters[Characters.length] = {
	char: "淘",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, baozitou, p_gangwa]
}
Characters[Characters.length] = {
	char: "液",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, liuzitou, danrenpang, p_yedian]
}
Characters[Characters.length] = {
	char: "淡",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, huozipang, huozipang]
}
Characters[Characters.length] = {
	char: "深",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, xuezitou, h_mu]
}
Characters[Characters.length] = {
	char: "婆",
	first: pattern_ud_up_2_down_1,
	later: [sandianshui, p_pi, z_nv]
}
Characters[Characters.length] = {
	char: "梁",
	first: pattern_ud_up_2_down_1,
	later: [sandianshui, z_liangyoush, h_mu]
}
Characters[Characters.length] = {
	char: "渗",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, sigong, h_da, sanpie]
}
Characters[Characters.length] = {
	char: "情",
	first: pattern_lr_left_1_right_2,
	later: [shuxinpang, h_qingzitou, s_yue]
}
Characters[Characters.length] = {
	char: "惜",
	first: pattern_lr_left_1_right_2,
	later: [shuxinpang, h_xizitou, s_ri]
}
Characters[Characters.length] = {
	char: "惭",
	first: pattern_lr_left_1_right_2,
	later: [shuxinpang, h_che, p_jin]
}
Characters[Characters.length] = {
	char: "悼",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shuxinpang, shangzitou, s_ri, h_ten]
}
Characters[Characters.length] = {
	char: "惧",
	first: pattern_lr_left_1_right_2,
	later: [shuxinpang, s_juzitou, p_eight]
}
Characters[Characters.length] = {
	char: "惕",
	first: pattern_lr_left_1_right_2,
	later: [shuxinpang, s_ri, p_wuyou]
}
Characters[Characters.length] = {
	char: "惊",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shuxinpang, liuzitou, s_kou, z_xiao]
}
Characters[Characters.length] = {
	char: "惨",
	first: pattern_lr_left_1_right_many,
	later: [shuxinpang, sigong, h_da, sanpie]
}
Characters[Characters.length] = {
	char: "惯",
	first: pattern_lr_left_1_right_2,
	later: [shuxinpang, s_guanzitou, s_bei]
}
Characters[Characters.length] = {
	char: "寇",
	first: pattern_ud_up_1_down_2,
	later: [baogaitou, h_yuan, shangzitou, z_you]
}
Characters[Characters.length] = {
	char: "寄",
	first: pattern_ud_up_1_down_2,
	later: [baogaitou, h_da, h_ke]
}
Characters[Characters.length] = {
	char: "宿",
	first: pattern_ud_up_1_down_2,
	later: [baogaitou, danrenpang, heng, p_bai]
}
Characters[Characters.length] = {
	char: "窑",
	first: pattern_ud_up_1_down_1_down_big,
	later: [xuezitou, p_gangwa]
}
Characters[Characters.length] = {
	char: "密",
	first: pattern_ud_up_middle_down,
	later: [baogaitou, d_xin, pie, s_shan]
}
Characters[Characters.length] = {
	char: "谋",
	first: pattern_lr_left_1_right_2,
	later: [yanzipang, h_ganku, h_mu]
}
Characters[Characters.length] = {
	char: "谎",
	first: pattern_lr_left_1_right_many,
	later: [yanzipang, caozitou, d_chongzitou, p_liuzidi]
}
Characters[Characters.length] = {
	char: "祸",
	first: pattern_lr_left_1_right_2,
	later: [shizipang, s_kou, s_nei]
}
Characters[Characters.length] = {
	char: "谜",
	first: pattern_lr_left_1_right_2,
	later: [yanzipang, d_mi, zouzhidi]
}
Characters[Characters.length] = {
	char: "逮",
	first: pattern_round_left_down,
	later: [z_lishu, zouzhidi]
}
Characters[Characters.length] = {
	char: "敢",
	first: pattern_lr_left_1_right_1_left_big,
	later: [hengzheshu, h_erduo, fanwenpang]
}
Characters[Characters.length] = {
	char: "屠",
	first: pattern_round_left_up,
	later: [z_shizitou, laozitou, s_ri]
}
Characters[Characters.length] = {
	char: "弹",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_gong, lanzitou, s_danzidi]
}
Characters[Characters.length] = {
	char: "随",
	first: pattern_lr_left_1_right_2,
	later: [zuoerpang, h_hengpie, s_yue, zouzhidi]
}
Characters[Characters.length] = {
	char: "蛋",
	first: pattern_ud_up_1_down_1_down_big,
	later: [henggou, s_zouzidi, s_chong]
}
Characters[Characters.length] = {
	char: "隆",
	first: pattern_lr_left_1_right_many,
	later: [zuoerpang, zhewen, heng, p_sheng]
}
Characters[Characters.length] = {
	char: "隐",
	first: pattern_lr_left_1_right_many,
	later: [zuoerpang, weizitou, xunzitou, d_xin]
}
Characters[Characters.length] = {
	char: "婚",
	first: pattern_lr_left_1_right_2,
	later: [z_nv, p_shizu, s_ri]
}
Characters[Characters.length] = {
	char: "婶",
	first: pattern_lr_left_1_right_2,
	later: [z_nv, baogaitou, s_shen]
}
Characters[Characters.length] = {
	char: "颈",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_jingziyou, h_ye]
}
Characters[Characters.length] = {
	char: "绩",
	first: pattern_lr_left_1_right_2,
	later: [jiaosipang, h_qingzitou, s_bei]
}
Characters[Characters.length] = {
	char: "绪",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jiaosipang, laozitou, s_ri]
}
Characters[Characters.length] = {
	char: "续",
	first: pattern_lr_left_1_right_many,
	later: [jiaosipang, s_shi, henggou, d_tou]
}
Characters[Characters.length] = {
	char: "骑",
	first: pattern_lr_left_1_right_2,
	later: [z_ma, h_da, h_ke]
}
Characters[Characters.length] = {
	char: "绳",
	first: pattern_lr_left_1_right_2,
	later: [jiaosipang, s_kou, s_dian]
}
Characters[Characters.length] = {
	char: "维",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jiaosipang, quezipang]
}
Characters[Characters.length] = {
	char: "绵",
	first: pattern_lr_left_1_right_2,
	later: [jiaosipang, p_bai, s_jin]
}
Characters[Characters.length] = {
	char: "绸",
	first: pattern_lr_left_1_right_many,
	later: [jiaosipang, tongzikuang, h_tu, s_kou]
}
Characters[Characters.length] = {
	char: "绿",
	first: pattern_lr_left_1_right_2,
	later: [jiaosipang, luzitou, z_dianshui]
}

/* 十二画 */
Characters[Characters.length] = {
	char: "琴",
	first: pattern_ud_up_2_down_1,
	later: [h_wang, h_wang, p_jintian]
}
Characters[Characters.length] = {
	char: "斑",
	first: pattern_lr_left_middle_right,
	later: [h_wang, d_wen, h_wang]
}
Characters[Characters.length] = {
	char: "替",
	first: pattern_ud_up_2_down_1,
	later: [h_fu, h_fu, s_ri]
}
Characters[Characters.length] = {
	char: "款",
	first: pattern_lr_left_2_right_1,
	later: [h_shi, h_shiren, p_qian]
}
Characters[Characters.length] = {
	char: "堪",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_tu, h_qizitou, p_eight, shuzheheng]
}
Characters[Characters.length] = {
	char: "搭",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, caozitou, p_ren, heng, s_kou]
}
Characters[Characters.length] = {
	char: "塔",
	first: pattern_lr_left_1_right_2,
	later: [h_tu, caozitou, p_ren, heng, s_kou]
}
Characters[Characters.length] = {
	char: "越",
	first: pattern_round_left_down,
	later: [h_tu, s_zouzidi, h_yuezili]
}
Characters[Characters.length] = {
	char: "趁",
	first: pattern_round_left_down,
	later: [h_tu, s_zouzidi, p_ren, sanpie]
}
Characters[Characters.length] = {
	char: "趋",
	first: pattern_round_left_down,
	later: [h_tu, s_zouzidi, weizitou, xunzitou]
}
Characters[Characters.length] = {
	char: "超",
	first: pattern_round_left_down,
	later: [h_tu, s_zouzidi, z_dao, s_kou]
}
Characters[Characters.length] = {
	char: "提",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, s_ri, heng, s_zouzidi]
}
Characters[Characters.length] = {
	char: "堤",
	first: pattern_lr_left_1_right_2,
	later: [h_tu, s_ri, heng, s_zouzidi]
}
Characters[Characters.length] = {
	char: "博",
	first: pattern_lr_left_1_right_2,
	later: [h_ten, h_fudu, h_cun]
}
Characters[Characters.length] = {
	char: "揭",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, s_ri, baozitou, cha, shuzheheng]
}
Characters[Characters.length] = {
	char: "喜",
	first: pattern_ud_up_middle_down,
	later: [h_shi, s_kou, lanzitou, heng, s_kou]
}
Characters[Characters.length] = {
	char: "插",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, p_qian, p_jiu]
}
Characters[Characters.length] = {
	char: "揪",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, p_he, huozipang]
}
Characters[Characters.length] = {
	char: "搜",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, p_jiu, shu, z_you]
}
Characters[Characters.length] = {
	char: "煮",
	first: pattern_ud_up_1_down_1_up_big,
	later: [laozitou, s_ri, sidiandi]
}
Characters[Characters.length] = {
	char: "援",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, caizitou, heng, h_hengpie, z_you]
}
Characters[Characters.length] = {
	char: "裁",
	first: pattern_round_right_up,
	later: [zaizikuang, d_yifu]
}
Characters[Characters.length] = {
	char: "搁",
	first: pattern_lr_left_1_right_many,
	later: [tishoupang, d_men, zhewen, s_kou]
}
Characters[Characters.length] = {
	char: "搂",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, d_mi, z_nv]
}
Characters[Characters.length] = {
	char: "搅",
	first: pattern_lr_left_1_right_many,
	later: [tishoupang, d_xingzitou, tubaogai, s_jian]
}
Characters[Characters.length] = {
	char: "握",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, z_shizitou, h_zhiyu]
}
Characters[Characters.length] = {
	char: "揉",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, z_mao, h_mu]
}
Characters[Characters.length] = {
	char: "斯",
	first: pattern_lr_left_1_right_1_left_big,
	later: [h_qizitou, p_eight, p_jin]
}
Characters[Characters.length] = {
	char: "期",
	first: pattern_lr_left_1_right_1_left_big,
	later: [h_qizitou, p_eight, p_yue]
}
Characters[Characters.length] = {
	char: "欺",
	first: pattern_lr_left_1_right_1_left_big,
	later: [h_qizitou, p_eight, p_qian]
}
Characters[Characters.length] = {
	char: "联",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_erduo, lanzitou, h_kai]
}
Characters[Characters.length] = {
	char: "散",
	first: pattern_lr_left_2_right_1,
	later: [h_caoheng, s_yue, fanwenpang]
}
Characters[Characters.length] = {
	char: "惹",
	first: pattern_ud_up_middle_down,
	later: [caozitou, h_hengpie, s_kou, d_xin]
}
Characters[Characters.length] = {
	char: "葬",
	first: pattern_ud_up_middle_down,
	later: [caozitou, heng, p_xi, p_bi, h_piecao]
}
Characters[Characters.length] = {
	char: "葛",
	first: pattern_lr_left_middle_right,
	later: [caozitou, s_ri, baozitou, cha, shuzheheng]
}
Characters[Characters.length] = {
	char: "董",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caozitou, p_zhong]
}
Characters[Characters.length] = {
	char: "葡",
	first: pattern_ud_up_1_down_2,
	later: [caozitou, baozitou, h_fudu]
}
Characters[Characters.length] = {
	char: "敬",
	first: pattern_lr_left_2_right_1,
	later: [caozitou, p_ju, fanwenpang]
}
Characters[Characters.length] = {
	char: "葱",
	first: pattern_ud_up_middle_down,
	later: [caozitou, p_wuyou, dian, d_xin]
}
Characters[Characters.length] = {
	char: "落",
	first: pattern_ud_up_1_down_2,
	later: [caozitou, sandianshui, zhewen, s_kou]
}
Characters[Characters.length] = {
	char: "朝",
	first: pattern_lr_left_many_right_1,
	later: [h_hengpie, s_ri, h_ten, p_yue]
}
Characters[Characters.length] = {
	char: "辜",
	first: pattern_ud_up_1_down_1_down_big,
	later: [h_gu, d_li, h_ten]
}
Characters[Characters.length] = {
	char: "葵",
	first: pattern_ud_up_1_down_many,
	later: [caozitou, dengzitou, h_tian]
}
Characters[Characters.length] = {
	char: "棒",
	first: pattern_lr_left_1_right_2,
	later: [h_mu, h_fengzitou, h_fengzidi]
}
Characters[Characters.length] = {
	char: "棋",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, h_qizitou, p_eight]
}
Characters[Characters.length] = {
	char: "植",
	first: pattern_lr_left_1_right_2,
	later: [h_mu, h_hengpie, s_juzitou]
}
Characters[Characters.length] = {
	char: "森",
	first: pattern_pin,
	later: [h_mu, h_mu, h_mu]
}
Characters[Characters.length] = {
	char: "椅",
	first: pattern_lr_left_1_right_2,
	later: [h_mu, h_da, h_ke]
}
Characters[Characters.length] = {
	char: "椒",
	first: pattern_lr_left_1_right_2,
	later: [h_mu, s_shuzizuo, z_you]
}
Characters[Characters.length] = {
	char: "棵",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, s_guo]
}
Characters[Characters.length] = {
	char: "棍",
	first: pattern_lr_left_1_right_many,
	later: [h_mu, s_ri, p_bi, p_bi]
}
Characters[Characters.length] = {
	char: "棉",
	first: pattern_lr_left_1_right_2,
	later: [h_mu, p_bai, s_jin]
}
Characters[Characters.length] = {
	char: "棚",
	first: pattern_lr_left_1_right_2,
	later: [h_mu, p_yue, p_yue]
}
Characters[Characters.length] = {
	char: "棕",
	first: pattern_lr_left_1_right_2,
	later: [h_mu, baogaitou, h_shiren]
}
Characters[Characters.length] = {
	char: "惠",
	first: pattern_ud_up_1_down_1_up_big,
	later: [h_huizitou, d_xin]
}
Characters[Characters.length] = {
	char: "惑",
	first: pattern_lr_left_1_right_many,
	later: [h_shi, s_kou, heng, d_xin]
}
Characters[Characters.length] = {
	char: "逼",
	first: pattern_round_left_down,
	later: [heng, s_kou, s_tian, zouzhidi]
}
Characters[Characters.length] = {
	char: "厨",
	first: pattern_round_left_up,
	later: [h_chang, heng, s_kou, lanzitou, heng, h_cun]
}
Characters[Characters.length] = {
	char: "厦",
	first: pattern_round_left_up,
	later: [h_chang, h_hengxiapie, s_mu, zhewen]
}
Characters[Characters.length] = {
	char: "硬",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_stone, h_geng]
}
Characters[Characters.length] = {
	char: "确",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_stone, zhewen, p_yong]
}
Characters[Characters.length] = {
	char: "雁",
	first: pattern_round_left_up,
	later: [h_chang, danrenpang, quezipang]
}
Characters[Characters.length] = {
	char: "殖",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_dai, h_hengpie, s_juzitou]
}
Characters[Characters.length] = {
	char: "裂",
	first: pattern_ud_up_2_down_1,
	later: [h_dai, lidaopang, d_yifu]
}
Characters[Characters.length] = {
	char: "雄",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_hengpie, sigong, quezipang]
}
Characters[Characters.length] = {
	char: "暂",
	first: pattern_ud_up_2_down_1,
	later: [h_che, p_jin, s_ri]
}
Characters[Characters.length] = {
	char: "雅",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_ya, quezipang]
}
Characters[Characters.length] = {
	char: "辈",
	first: pattern_ud_up_2_down_1,
	later: [s_fei, h_che]
}
Characters[Characters.length] = {
	char: "悲",
	first: pattern_ud_up_2_down_1,
	later: [s_fei, d_xin]
}
Characters[Characters.length] = {
	char: "紫",
	first: pattern_ud_up_2_down_2,
	later: [s_zhi, p_bi, youzipang, z_xiao]
}
Characters[Characters.length] = {
	char: "辉",
	first: pattern_lr_left_1_right_2,
	later: [guangzitou, h_wuzidi, tubaogai, h_che]
}
Characters[Characters.length] = {
	char: "敞",
	first: pattern_lr_left_many_right_1,
	later: [guangzitou, tongzikuang, s_kou, fanwenpang]
}
Characters[Characters.length] = {
	char: "赏",
	first: pattern_ud_up_middle_down,
	later: [guangzitou, tubaogai, s_kou, s_bei]
}
Characters[Characters.length] = {
	char: "掌",
	first: pattern_ud_up_middle_down,
	later: [guangzitou, tubaogai, s_kou, p_shou]
}
Characters[Characters.length] = {
	char: "晴",
	first: pattern_lr_left_1_right_2,
	later: [s_ri, h_qingzitou, s_yue]
}
Characters[Characters.length] = {
	char: "暑",
	first: pattern_ud_up_1_down_1_down_big,
	later: [s_ri, laozitou, s_ri]
}
Characters[Characters.length] = {
	char: "最",
	first: pattern_ud_up_1_down_2,
	later: [s_ri, h_erduo, z_you]
}
Characters[Characters.length] = {
	char: "量",
	first: pattern_ud_up_middle_down,
	later: [s_ri, heng, s_li]
}
Characters[Characters.length] = {
	char: "喷",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, h_benzitou, s_bei]
}
Characters[Characters.length] = {
	char: "晶",
	first: pattern_pin,
	later: [s_ri, s_ri, s_ri]
}
Characters[Characters.length] = {
	char: "喇",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, h_shu, lidaopang]
}
Characters[Characters.length] = {
	char: "遇",
	first: pattern_round_left_down,
	later: [s_yu, zouzhidi]
}
Characters[Characters.length] = {
	char: "喊",
	first: pattern_lr_left_1_right_many,
	later: [s_kou, chengzikuang, heng, s_kou]
}
Characters[Characters.length] = {
	char: "景",
	first: pattern_ud_up_1_down_1_down_big,
	later: [s_ri, liuzitou, s_kou, z_xiao]
}
Characters[Characters.length] = {
	char: "践",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, s_zhi, h_zhan]
}
Characters[Characters.length] = {
	char: "跌",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, s_zhi, p_shiqu]
}
Characters[Characters.length] = {
	char: "跑",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, s_zhi, baozitou, z_si]
}
Characters[Characters.length] = {
	char: "遗",
	first: pattern_round_left_down,
	later: [s_guizitou, s_bei, zouzhidi]
}
Characters[Characters.length] = {
	char: "蛙",
	first: pattern_lr_left_1_right_2,
	later: [s_chong, h_tu, h_tu]
}
Characters[Characters.length] = {
	char: "蛛",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_chong, p_zhu]
}
Characters[Characters.length] = {
	char: "蜓",
	first: pattern_lr_left_1_right_2,
	later: [s_chong, p_rengui, jianzidi]
}
Characters[Characters.length] = {
	char: "喝",
	first: pattern_lr_left_1_right_many,
	later: [s_kou, s_ri, baozitou, cha, shuzheheng]
}
Characters[Characters.length] = {
	char: "喂",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, s_tian, heng, z_sangzidi]
}
Characters[Characters.length] = {
	char: "喘",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, s_shan, h_erqie]
}
Characters[Characters.length] = {
	char: "喉",
	first: pattern_lr_left_1_right_many,
	later: [s_kou, danrenpang, z_houzitou, p_shi]
}
Characters[Characters.length] = {
	char: "幅",
	first: pattern_lr_left_1_right_many,
	later: [s_jin, heng, s_kou, s_tian]
}
Characters[Characters.length] = {
	char: "帽",
	first: pattern_lr_left_1_right_2,
	later: [s_jin, s_ri, s_mu]
}
Characters[Characters.length] = {
	char: "赌",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_bei, laozitou, s_ri]
}
Characters[Characters.length] = {
	char: "赔",
	first: pattern_lr_left_1_right_2,
	later: [s_bei, d_li, s_kou]
}
Characters[Characters.length] = {
	char: "黑",
	first: pattern_ud_up_1_down_1_up_big,
	later: [s_heizitou, sidiandi]
}
Characters[Characters.length] = {
	char: "铸",
	first: pattern_lr_left_1_right_2,
	later: [jinzipang, h_piefeng, h_cun]
}
Characters[Characters.length] = {
	char: "铺",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jinzipang, h_fudu]
}
Characters[Characters.length] = {
	char: "链",
	first: pattern_lr_left_1_right_2,
	later: [jinzipang, h_che, zouzhidi]
}
Characters[Characters.length] = {
	char: "销",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jinzipang, guangzitou, s_yue]
}
Characters[Characters.length] = {
	char: "锁",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jinzipang, guangzitou, s_bei]
}
Characters[Characters.length] = {
	char: "锄",
	first: pattern_lr_left_1_right_2,
	later: [jinzipang, s_qie, z_li]
}
Characters[Characters.length] = {
	char: "锅",
	first: pattern_lr_left_1_right_2,
	later: [jinzipang, s_kou, s_nei]
}
Characters[Characters.length] = {
	char: "锈",
	first: pattern_lr_left_1_right_2,
	later: [jinzipang, p_he, z_nai]
}
Characters[Characters.length] = {
	char: "锋",
	first: pattern_lr_left_1_right_2,
	later: [jinzipang, zhewen, h_feng]
}
Characters[Characters.length] = {
	char: "锐",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jinzipang, lanzitou, s_kou, p_er]
}
Characters[Characters.length] = {
	char: "短",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_shi, heng, s_kou, lanzitou, heng]
}
Characters[Characters.length] = {
	char: "智",
	first: pattern_ud_up_2_down_1,
	later: [p_shi, s_kou, s_ri]
}
Characters[Characters.length] = {
	char: "毯",
	first: pattern_round_left_down,
	later: [p_mao, huozipang, huozipang]
}
Characters[Characters.length] = {
	char: "鹅",
	first: pattern_lr_left_1_right_1_left_big,
	later: [p_wo, p_niaowuheng, heng]
}
Characters[Characters.length] = {
	char: "剩",
	first: pattern_lr_left_1_right_1_left_big,
	later: [p_cheng, lidaopang]
}
Characters[Characters.length] = {
	char: "稍",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_he, guangzitou, s_yue]
}
Characters[Characters.length] = {
	char: "程",
	first: pattern_lr_left_1_right_2,
	later: [p_he, s_kou, h_wang]
}
Characters[Characters.length] = {
	char: "稀",
	first: pattern_lr_left_1_right_2,
	later: [p_he, cha, h_hengpie, s_jin]
}
Characters[Characters.length] = {
	char: "税",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_he, lanzitou, s_kou, p_er]
}
Characters[Characters.length] = {
	char: "筐",
	first: pattern_ud_up_2_down_2,
	later: [zhuzitou, jiangzikuang, h_wang]
}
Characters[Characters.length] = {
	char: "等",
	first: pattern_ud_up_2_down_2,
	later: [zhuzitou, h_tu, h_cun]
}
Characters[Characters.length] = {
	char: "筑",
	first: pattern_ud_up_2_down_2,
	later: [zhuzitou, h_gong, p_fan]
}
Characters[Characters.length] = {
	char: "策",
	first: pattern_ud_up_2_down_1,
	later: [zhuzitou, h_cizizuo]
}
Characters[Characters.length] = {
	char: "筛",
	first: pattern_ud_up_2_down_2,
	later: [baogaitou, s_shupie, heng, s_jin]
}
Characters[Characters.length] = {
	char: "筒",
	first: pattern_ud_up_many_down_many,
	later: [zhuzitou, tongzikuang, heng, s_kou]
}
Characters[Characters.length] = {
	char: "答",
	first: pattern_ud_up_2_down_2,
	later: [zhuzitou, p_ren, heng, s_kou]
}
Characters[Characters.length] = {
	char: "筋",
	first: pattern_ud_up_2_down_2,
	later: [zhuzitou, p_yue, z_li]
}
Characters[Characters.length] = {
	char: "筝",
	first: pattern_ud_up_2_down_1,
	later: [zhuzitou, p_zheng]
}
Characters[Characters.length] = {
	char: "傲",
	first: pattern_lr_left_1_right_2,
	later: [danrenpang, h_qingzitou, z_fangzidi, fanwenpang]
}
Characters[Characters.length] = {
	char: "傅",
	first: pattern_lr_left_1_right_2,
	later: [danrenpang, h_fudu, h_cun]
}
Characters[Characters.length] = {
	char: "牌",
	first: pattern_lr_left_1_right_2,
	later: [p_pian, p_beizitou, h_ten]
}
Characters[Characters.length] = {
	char: "堡",
	first: pattern_ud_up_many_down_1,
	later: [danrenpang, s_kou, h_mu, h_tu]
}
Characters[Characters.length] = {
	char: "集",
	first: pattern_ud_up_1_down_1_up_big,
	later: [quezipang, h_mu]
}
Characters[Characters.length] = {
	char: "焦",
	first: pattern_ud_up_1_down_1_up_big,
	later: [quezipang, sidiandi]
}
Characters[Characters.length] = {
	char: "傍",
	first: pattern_lr_left_1_right_many,
	later: [danrenpang, liuzitou, lanzitou, tubaogai, d_fang]
}
Characters[Characters.length] = {
	char: "储",
	first: pattern_lr_left_1_right_2,
	later: [danrenpang, yanzipang, laozitou, s_ri]
}
Characters[Characters.length] = {
	char: "奥",
	first: pattern_ud_up_2_down_1,
	later: [aozikuang, d_mi, h_da]
}
Characters[Characters.length] = {
	char: "街",
	first: pattern_lr_left_middle_right,
	later: [shuangrenpang, h_tu, h_tu, h_xingziyou]
}
Characters[Characters.length] = {
	char: "惩",
	first: pattern_ud_up_2_down_1,
	later: [shuangrenpang, h_zheng, d_xin]
}
Characters[Characters.length] = {
	char: "御",
	first: pattern_lr_left_1_right_2,
	later: [shuangrenpang, p_xiezizuo, danerpang]
}
Characters[Characters.length] = {
	char: "循",
	first: pattern_lr_left_1_right_many,
	later: [shuangrenpang, fanzitou, h_ten, s_mu]
}
Characters[Characters.length] = {
	char: "艇",
	first: pattern_lr_left_1_right_2,
	later: [p_zhou, p_rengui, jianzidi]
}
Characters[Characters.length] = {
	char: "舒",
	first: pattern_lr_left_many_right_1,
	later: [p_ren, h_gan, s_kou, z_yu]
}
Characters[Characters.length] = {
	char: "番",
	first: pattern_ud_up_1_down_1_up_big,
	later: [fanzitou, s_tian]
}
Characters[Characters.length] = {
	char: "释",
	first: pattern_lr_left_1_right_2,
	later: [fanzitou, z_you, h_fengzidi]
}
Characters[Characters.length] = {
	char: "禽",
	first: pattern_ud_up_1_down_1_down_big,
	later: [p_ren, liuzitou, cha, xiongzikuang, tongzikuang, sigong]
}
Characters[Characters.length] = {
	char: "腊",
	first: pattern_lr_left_1_right_2,
	later: [p_yue, h_xizitou, s_ri]
}
Characters[Characters.length] = {
	char: "脾",
	first: pattern_lr_left_1_right_2,
	later: [p_yue, p_beizitou, h_ten]
}
Characters[Characters.length] = {
	char: "腔",
	first: pattern_lr_left_1_right_2,
	later: [p_yue, xuezitou, h_gong]
}
Characters[Characters.length] = {
	char: "鲁",
	first: pattern_ud_up_middle_down,
	later: [weizitou, s_tian, heng, s_ri]
}
Characters[Characters.length] = {
	char: "猾",
	first: pattern_lr_left_1_right_2,
	later: [fanquanpang, s_guzitou, s_yue]
}
Characters[Characters.length] = {
	char: "猴",
	first: pattern_lr_left_1_right_many,
	later: [fanquanpang, danrenpang, z_houzitou, p_shi]
}
Characters[Characters.length] = {
	char: "然",
	first: pattern_ud_up_2_down_1,
	later: [p_xidian, h_quan, sidiandi]
}
Characters[Characters.length] = {
	char: "馋",
	first: pattern_lr_left_1_right_2,
	later: [shichi, p_mian, d_ld_sl]
}
Characters[Characters.length] = {
	char: "装",
	first: pattern_ud_up_2_down_1,
	later: [jiangzipang, h_shi, d_yifu]
}
Characters[Characters.length] = {
	char: "蛮",
	first: pattern_ud_up_1_down_1_down_big,
	later: [d_bianzitou, s_chong]
}
Characters[Characters.length] = {
	char: "就",
	first: pattern_lr_left_1_right_1_left_big,
	later: [liuzitou, s_kou, z_xiao, youzishen, dian]
}
Characters[Characters.length] = {
	char: "痛",
	first: pattern_round_left_up,
	later: [bingzitou, z_yongzitou, s_yong]
}
Characters[Characters.length] = {
	char: "童",
	first: pattern_ud_up_1_down_1_down_big,
	later: [d_li, s_li]
}
Characters[Characters.length] = {
	char: "阔",
	first: pattern_round_up,
	later: [d_men, sandianshui, p_she]
}
Characters[Characters.length] = {
	char: "善",
	first: pattern_ud_up_many_down_1,
	later: [d_yang, lanzitou, heng, s_kou]
}
Characters[Characters.length] = {
	char: "羡",
	first: pattern_ud_up_1_down_2,
	later: [yangzitou, liangdianshui, p_qian]
}
Characters[Characters.length] = {
	char: "普",
	first: pattern_ud_up_1_down_1_down_big,
	later: [lanzitou, heng, s_ye, s_ri]
}
Characters[Characters.length] = {
	char: "粪",
	first: pattern_ud_up_1_down_1_down_big,
	later: [d_mi, h_xizitou, p_eight]
}
Characters[Characters.length] = {
	char: "尊",
	first: pattern_ud_up_1_down_1_up_big,
	later: [lanzitou, h_youxin, h_cun]
}
Characters[Characters.length] = {
	char: "道",
	first: pattern_round_left_down,
	later: [lanzitou, heng, p_zi, zouzhidi]
}
Characters[Characters.length] = {
	char: "曾",
	first: pattern_ud_up_1_down_1_up_big,
	later: [lanzitou, s_zengzizh, s_ri]
}
Characters[Characters.length] = {
	char: "焰",
	first: pattern_lr_left_1_right_2,
	later: [huozipang, weizitou, p_jiu]
}
Characters[Characters.length] = {
	char: "港",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, h_xizitou, p_eight, z_si]
}
Characters[Characters.length] = {
	char: "湖",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, h_gu, p_yue]
}
Characters[Characters.length] = {
	char: "渣",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, h_mu, s_ri, heng]
}
Characters[Characters.length] = {
	char: "湿",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, s_ri, s_ye]
}
Characters[Characters.length] = {
	char: "温",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, s_ri, minzidi]
}
Characters[Characters.length] = {
	char: "渴",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, s_ri, baozitou, cha, shuzheheng]
}
Characters[Characters.length] = {
	char: "滑",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, s_guzitou, s_yue]
}
Characters[Characters.length] = {
	char: "湾",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, d_bianzitou, z_gong]
}
Characters[Characters.length] = {
	char: "渡",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, d_guang, h_caoheng, z_you]
}
Characters[Characters.length] = {
	char: "游",
	first: pattern_lr_left_middle_right,
	later: [sandianshui, d_fang, pieheng, z_zi]
}
Characters[Characters.length] = {
	char: "滋",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, lanzitou, heng, youzipang, youzipang]
}
Characters[Characters.length] = {
	char: "溉",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, z_jizizuo, h_jiziyou]
}
Characters[Characters.length] = {
	char: "愤",
	first: pattern_lr_left_1_right_2,
	later: [shuxinpang, h_benzitou, s_bei]
}
Characters[Characters.length] = {
	char: "慌",
	first: pattern_lr_left_1_right_many,
	later: [shuxinpang, caozitou, d_chongzitou, p_liuzidi]
}
Characters[Characters.length] = {
	char: "惰",
	first: pattern_lr_left_1_right_2,
	later: [shuxinpang, h_hengpie, h_gong, s_yue]
}
Characters[Characters.length] = {
	char: "愧",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shuxinpang, p_gui]
}
Characters[Characters.length] = {
	char: "愉",
	first: pattern_lr_left_1_right_many,
	later: [shuxinpang, p_ren, heng, s_yue, lidaopang]
}
Characters[Characters.length] = {
	char: "慨",
	first: pattern_lr_left_1_right_2,
	later: [shuxinpang, z_jizizuo, h_jiziyou]
}
Characters[Characters.length] = {
	char: "割",
	first: pattern_lr_left_many_right_1,
	later: [baogaitou, h_feng, s_kou, lidaopang]
}
Characters[Characters.length] = {
	char: "寒",
	first: pattern_ud_up_middle_down,
	later: [baogaitou, h_sanhls, p_eight, d_ld_sl]
}
Characters[Characters.length] = {
	char: "富",
	first: pattern_ud_up_1_down_1_up_big,
	later: [baogaitou, heng, s_kou, s_tian]
}
Characters[Characters.length] = {
	char: "窜",
	first: pattern_ud_up_1_down_1_down_big,
	later: [xuezitou, s_chuan]
}
Characters[Characters.length] = {
	char: "窝",
	first: pattern_ud_up_middle_down,
	later: [xuezitou, s_kou, s_nei]
}
Characters[Characters.length] = {
	char: "窗",
	first: pattern_ud_up_1_down_2,
	later: [xuezitou, p_cong]
}
Characters[Characters.length] = {
	char: "遍",
	first: pattern_round_left_down,
	later: [d_hu, s_bianzili, zouzhidi]
}
Characters[Characters.length] = {
	char: "裕",
	first: pattern_lr_left_1_right_1_right_big,
	later: [buyipang, p_eight, p_ren, s_kou]
}
Characters[Characters.length] = {
	char: "裤",
	first: pattern_lr_left_1_right_2,
	later: [buyipang, d_guang, h_che]
}
Characters[Characters.length] = {
	char: "裙",
	first: pattern_lr_left_1_right_2,
	later: [buyipang, z_yin, s_kou]
}
Characters[Characters.length] = {
	char: "谢",
	first: pattern_lr_left_1_right_2,
	later: [yanzipang, p_shen, h_cun]
}
Characters[Characters.length] = {
	char: "谣",
	first: pattern_lr_left_1_right_2,
	later: [yanzipang, caizitou, p_gangwa]
}
Characters[Characters.length] = {
	char: "谦",
	first: pattern_lr_left_1_right_1_right_big,
	later: [yanzipang, d_jian]
}
Characters[Characters.length] = {
	char: "属",
	first: pattern_round_left_up,
	later: [z_shizitou, p_yu]
}
Characters[Characters.length] = {
	char: "屡",
	first: pattern_round_left_up,
	later: [z_shizitou, d_mi, z_nv]
}
Characters[Characters.length] = {
	char: "强",
	first: pattern_lr_left_1_right_2,
	later: [z_gong, s_kou, s_chong]
}
Characters[Characters.length] = {
	char: "粥",
	first: pattern_lr_left_middle_right,
	later: [z_gong, d_mi, z_gong]
}
Characters[Characters.length] = {
	char: "疏",
	first: pattern_lr_left_1_right_2,
	later: [z_shuzizuo, d_chongzitou, p_liuzidi]
}
Characters[Characters.length] = {
	char: "隔",
	first: pattern_lr_left_1_right_many,
	later: [zuoerpang, heng, s_kou, tongzikuang, d_gezili]
}
Characters[Characters.length] = {
	char: "隙",
	first: pattern_lr_left_1_right_many,
	later: [zuoerpang, s_xiao, s_ri, z_xiao]
}
Characters[Characters.length] = {
	char: "絮",
	first: pattern_ud_up_2_down_2,
	later: [z_nv, s_kou, youzipang, z_xiao]
}
Characters[Characters.length] = {
	char: "嫂",
	first: pattern_lr_left_1_right_2,
	later: [z_nv, p_jiu, shu, z_you]
}
Characters[Characters.length] = {
	char: "登",
	first: pattern_ud_up_1_down_1_up_big,
	later: [dengzitou, h_dou]
}
Characters[Characters.length] = {
	char: "缎",
	first: pattern_lr_left_1_right_many,
	later: [jiaosipang, p_duanzizuo, p_ji, z_you]
}
Characters[Characters.length] = {
	char: "缓",
	first: pattern_lr_left_1_right_many,
	later: [jiaosipang, caizitou, heng, h_you]
}
Characters[Characters.length] = {
	char: "编",
	first: pattern_lr_left_1_right_2,
	later: [jiaosipang, d_hu, s_bianzili]
}
Characters[Characters.length] = {
	char: "骗",
	first: pattern_lr_left_1_right_2,
	later: [z_ma, d_hu, s_bianzili]
}
Characters[Characters.length] = {
	char: "缘",
	first: pattern_lr_left_1_right_2,
	later: [jiaosipang, z_yuanzitou, h_zhizhu]
}

/* 十三画 */
Characters[Characters.length] = {
	char: "瑞",
	first: pattern_lr_left_1_right_2,
	later: [h_wang, s_shan, h_erqie]
}
Characters[Characters.length] = {
	char: "魂",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_yun, p_gui]
}
Characters[Characters.length] = {
	char: "肆",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_sizizuo, jianzili]
}
Characters[Characters.length] = {
	char: "摄",
	first: pattern_lr_left_1_right_many,
	later: [tishoupang, h_erduo, z_you, z_you]
}
Characters[Characters.length] = {
	char: "摸",
	first: pattern_lr_left_1_right_many,
	later: [tishoupang, caozitou, s_ri, h_da]
}
Characters[Characters.length] = {
	char: "填",
	first: pattern_lr_left_1_right_many,
	later: [h_tu, h_hengpie, s_juzitou, p_eight]
}
Characters[Characters.length] = {
	char: "搏",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, h_fudu, h_cun]
}
Characters[Characters.length] = {
	char: "塌",
	first: pattern_lr_left_1_right_many,
	later: [h_tu, s_ri, z_xi, z_xi]
}
Characters[Characters.length] = {
	char: "鼓",
	first: pattern_lr_left_many_right_1,
	later: [h_shi, s_kou, lanzitou, heng, h_zhi]
}
Characters[Characters.length] = {
	char: "摆",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, s_siwuzhe, h_qu]
}
Characters[Characters.length] = {
	char: "携",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, quezipang, z_nai]
}
Characters[Characters.length] = {
	char: "搬",
	first: pattern_lr_left_1_right_many,
	later: [tishoupang, p_zhou, p_ji, z_you]
}
Characters[Characters.length] = {
	char: "摇",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, caizitou, p_gangwa]
}
Characters[Characters.length] = {
	char: "搞",
	first: pattern_lr_left_1_right_many,
	later: [tishoupang, liuzitou, s_kou, tongzikuang, s_kou]
}
Characters[Characters.length] = {
	char: "塘",
	first: pattern_lr_left_1_right_many,
	later: [h_tu, d_guang, z_tangzili, s_kou]
}
Characters[Characters.length] = {
	char: "摊",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, z_you, quezipang]
}
Characters[Characters.length] = {
	char: "蒜",
	first: pattern_ud_up_1_down_2,
	later: [caozitou, h_shiren, h_shiren]
}
Characters[Characters.length] = {
	char: "勤",
	first: pattern_lr_left_1_right_1_left_big,
	later: [h_qinzizuo, z_li]
}
Characters[Characters.length] = {
	char: "鹊",
	first: pattern_lr_left_2_right_1,
	later: [h_xizitou, s_ri, p_niaowuheng, heng]
}
Characters[Characters.length] = {
	char: "蓝",
	first: pattern_ud_up_1_down_many,
	later: [caozitou, s_liangshu, p_zhutouban, minzidi]
}
Characters[Characters.length] = {
	char: "墓",
	first: pattern_ud_up_middle_down,
	later: [caozitou, s_ri, h_da, h_tu]
}
Characters[Characters.length] = {
	char: "幕",
	first: pattern_ud_up_middle_down,
	later: [caozitou, s_ri, h_da, s_jin]
}
Characters[Characters.length] = {
	char: "蓬",
	first: pattern_ud_up_1_down_many,
	later: [caozitou, zhewen, h_feng, zouzhidi]
}
Characters[Characters.length] = {
	char: "蓄",
	first: pattern_ud_up_1_down_2,
	later: [caozitou, liuzitou, youzipang, s_tian]
}
Characters[Characters.length] = {
	char: "蒙",
	first: pattern_ud_up_middle_down,
	later: [caozitou, tubaogai, heng, h_zhizhu]
}
Characters[Characters.length] = {
	char: "蒸",
	first: pattern_ud_up_middle_down,
	later: [caozitou, z_cheng, sidiandi]
}
Characters[Characters.length] = {
	char: "献",
	first: pattern_lr_left_many_right_1,
	later: [h_hengpie, tongzikuang, d_xinzidi, h_quan]
}
Characters[Characters.length] = {
	char: "禁",
	first: pattern_ud_up_2_down_1,
	later: [h_mu, h_mu, h_shiren]
}
Characters[Characters.length] = {
	char: "楚",
	first: pattern_ud_up_2_down_1,
	later: [h_mu, h_mu, henggou, s_zouzidi]
}
Characters[Characters.length] = {
	char: "想",
	first: pattern_ud_up_2_down_1,
	later: [h_mu, s_mu, d_xin]
}
Characters[Characters.length] = {
	char: "槐",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, p_gui]
}
Characters[Characters.length] = {
	char: "榆",
	first: pattern_lr_left_1_right_many,
	later: [h_mu, p_ren, heng, s_yue, lidaopang]
}
Characters[Characters.length] = {
	char: "楼",
	first: pattern_lr_left_1_right_2,
	later: [h_mu, d_mi, z_nv]
}
Characters[Characters.length] = {
	char: "概",
	first: pattern_lr_left_1_right_2,
	later: [h_mu, z_jizizuo, h_jiziyou]
}
Characters[Characters.length] = {
	char: "赖",
	first: pattern_lr_left_1_right_2,
	later: [h_shu, weizitou, s_bei]
}
Characters[Characters.length] = {
	char: "酬",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_youxin, d_zhou]
}
Characters[Characters.length] = {
	char: "感",
	first: pattern_ud_up_many_down_1,
	later: [chengzikuang, heng, s_kou, d_xin]
}
Characters[Characters.length] = {
	char: "碍",
	first: pattern_lr_left_1_right_2,
	later: [h_stone, s_ri, heng, h_cun]
}
Characters[Characters.length] = {
	char: "碑",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_stone, p_beizitou, h_ten]
}
Characters[Characters.length] = {
	char: "碎",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_stone, d_zu]
}
Characters[Characters.length] = {
	char: "碰",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_stone, lanzitou, heng, s_ye]
}
Characters[Characters.length] = {
	char: "碗",
	first: pattern_lr_left_1_right_many,
	later: [h_stone, baogaitou, p_xi, cangzidi]
}
Characters[Characters.length] = {
	char: "碌",
	first: pattern_lr_left_1_right_2,
	later: [h_stone, luzitou, z_dianshui]
}
Characters[Characters.length] = {
	char: "雷",
	first: pattern_ud_up_1_down_1_up_big,
	later: [h_yushui, s_tian]
}
Characters[Characters.length] = {
	char: "零",
	first: pattern_ud_up_1_down_1_down_big,
	later: [h_yushi, p_ling]
}
Characters[Characters.length] = {
	char: "雾",
	first: pattern_ud_up_1_down_2,
	later: [h_yushi, zhewen, z_li]
}
Characters[Characters.length] = {
	char: "雹",
	first: pattern_ud_up_1_down_1_down_big,
	later: [h_yushui, baozitou, z_si]
}
Characters[Characters.length] = {
	char: "输",
	first: pattern_lr_left_1_right_many,
	later: [h_che, p_ren, heng, s_yue, lidaopang]
}
Characters[Characters.length] = {
	char: "督",
	first: pattern_ud_up_2_down_1,
	later: [s_shuzizuo, z_you, s_mu]
}
Characters[Characters.length] = {
	char: "龄",
	first: pattern_lr_left_many_right_1,
	later: [s_zhi, p_ren, xiongzikuang, p_ling]
}
Characters[Characters.length] = {
	char: "鉴",
	first: pattern_ud_up_2_down_2,
	later: [s_liangshu, p_zhutouban, p_ren, h_jinxia]
}
Characters[Characters.length] = {
	char: "睛",
	first: pattern_lr_left_1_right_2,
	later: [s_mu, h_qingzitou, s_yue]
}
Characters[Characters.length] = {
	char: "睡",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_mu, p_chui]
}
Characters[Characters.length] = {
	char: "睬",
	first: pattern_lr_left_1_right_2,
	later: [s_mu, caizitou, h_mu]
}
Characters[Characters.length] = {
	char: "鄙",
	first: pattern_lr_left_many_right_1,
	later: [s_kou, h_ten, s_kou, s_kou, youerpang]
}
Characters[Characters.length] = {
	char: "愚",
	first: pattern_ud_up_1_down_1_up_big,
	later: [s_yu, d_xin]
}
Characters[Characters.length] = {
	char: "暖",
	first: pattern_lr_left_1_right_many,
	later: [s_ri, caizitou, heng, h_you]
}
Characters[Characters.length] = {
	char: "盟",
	first: pattern_ud_up_2_down_1,
	later: [s_ri, p_yue, minzidi]
}
Characters[Characters.length] = {
	char: "歇",
	first: pattern_lr_left_many_right_1,
	later: [s_ri, baozitou, cha, xiongzikuang, p_qian]
}
Characters[Characters.length] = {
	char: "暗",
	first: pattern_lr_left_1_right_2,
	later: [s_ri, d_li, s_ri]
}
Characters[Characters.length] = {
	char: "照",
	first: pattern_ud_up_many_down_1,
	later: [s_ri, z_dao, s_kou, sidiandi]
}
Characters[Characters.length] = {
	char: "跨",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, s_zhi, h_da, h_kui]
}
Characters[Characters.length] = {
	char: "跳",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, s_zhi, p_zhaotou]
}
Characters[Characters.length] = {
	char: "跪",
	first: pattern_lr_left_1_right_many,
	later: [s_kou, s_zhi, weizitou, h_chang, cangzidi]
}
Characters[Characters.length] = {
	char: "路",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, s_zhi, zhewen, s_kou]
}
Characters[Characters.length] = {
	char: "跟",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, s_zhi, kenzitou]
}
Characters[Characters.length] = {
	char: "遣",
	first: pattern_round_left_down,
	later: [s_guizitou, s_guanzidi, zouzhidi]
}
Characters[Characters.length] = {
	char: "蛾",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_chong, p_wo]
}
Characters[Characters.length] = {
	char: "蜂",
	first: pattern_lr_left_1_right_2,
	later: [s_chong, zhewen, h_feng]
}
Characters[Characters.length] = {
	char: "嗓",
	first: pattern_lr_left_1_right_many,
	later: [s_kou, s_kou, s_kou, s_kou, h_mu]
}
Characters[Characters.length] = {
	char: "置",
	first: pattern_ud_up_1_down_1_down_big,
	later: [s_siwuzhe, h_hengpie, s_juzitou]
}
Characters[Characters.length] = {
	char: "罪",
	first: pattern_ud_up_1_down_2,
	later: [s_siwuzhe, s_fei]
}
Characters[Characters.length] = {
	char: "罩",
	first: pattern_ud_up_1_down_many,
	later: [s_siwuzhe, shangzitou, s_ri, h_ten]
}
Characters[Characters.length] = {
	char: "错",
	first: pattern_lr_left_1_right_2,
	later: [jinzipang, h_xizitou, s_ri]
}
Characters[Characters.length] = {
	char: "锡",
	first: pattern_lr_left_1_right_2,
	later: [jinzipang, s_ri, p_wuyou]
}
Characters[Characters.length] = {
	char: "锣",
	first: pattern_lr_left_1_right_2,
	later: [jinzipang, s_siwuzhe, p_xi]
}
Characters[Characters.length] = {
	char: "锤",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jinzipang, p_chui]
}
Characters[Characters.length] = {
	char: "锦",
	first: pattern_lr_left_1_right_2,
	later: [jinzipang, p_bai, s_jin]
}
Characters[Characters.length] = {
	char: "键",
	first: pattern_lr_left_1_right_2,
	later: [jinzipang, jianzili, jianzidi]
}
Characters[Characters.length] = {
	char: "锯",
	first: pattern_lr_left_1_right_2,
	later: [jinzipang, z_shizitou, h_gu]
}
Characters[Characters.length] = {
	char: "矮",
	first: pattern_lr_left_1_right_2,
	later: [p_shi, p_he, z_nv]
}
Characters[Characters.length] = {
	char: "辞",
	first: pattern_lr_left_1_right_2,
	later: [p_she, d_li, h_ten]
}
Characters[Characters.length] = {
	char: "稠",
	first: pattern_lr_left_1_right_many,
	later: [p_he, zhouzikuang, h_tu, s_kou]
}
Characters[Characters.length] = {
	char: "愁",
	first: pattern_lr_left_2_right_1,
	later: [p_he, huozipang, d_xin]
}
Characters[Characters.length] = {
	char: "筹",
	first: pattern_ud_up_1_down_2,
	later: [zhuzitou, h_piefeng, h_cun]
}
Characters[Characters.length] = {
	char: "签",
	first: pattern_ud_up_2_down_2,
	later: [zhuzitou, p_ren, heng, d_xingzitou, heng]
}
Characters[Characters.length] = {
	char: "简",
	first: pattern_ud_up_2_down_2,
	later: [zhuzitou, d_men, s_ri]
}
Characters[Characters.length] = {
	char: "毁",
	first: pattern_lr_left_2_right_2,
	later: [p_jiu, h_gong, p_ji, z_you]
}
Characters[Characters.length] = {
	char: "舅",
	first: pattern_ud_up_1_down_2,
	later: [p_jiu, s_tian, z_li]
}
Characters[Characters.length] = {
	char: "鼠",
	first: pattern_ud_up_1_down_many,
	later: [p_jiu, z_shutidd, z_shutidd, nagou]
}
Characters[Characters.length] = {
	char: "催",
	first: pattern_lr_left_1_right_2,
	later: [danrenpang, s_shan, quezipang]
}
Characters[Characters.length] = {
	char: "傻",
	first: pattern_lr_left_1_right_many,
	later: [danrenpang, p_cong, p_eight, zhewen]
}
Characters[Characters.length] = {
	char: "像",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, p_xiang]
}
Characters[Characters.length] = {
	char: "躲",
	first: pattern_lr_left_1_right_2,
	later: [p_shen, p_ji, h_mu]
}
Characters[Characters.length] = {
	char: "微",
	first: pattern_lr_left_middle_right,
	later: [shuangrenpang, s_shan, heng, p_ji, fanwenpang]
}
Characters[Characters.length] = {
	char: "愈",
	first: pattern_ud_up_many_down_1,
	later: [p_ren, heng, s_yue, lidaopang, d_xin]
}
Characters[Characters.length] = {
	char: "遥",
	first: pattern_round_left_down,
	later: [caizitou, p_gangwa, zouzhidi]
}
Characters[Characters.length] = {
	char: "腰",
	first: pattern_lr_left_1_right_2,
	later: [p_yue, h_xiwuzhe, z_nv]
}
Characters[Characters.length] = {
	char: "腥",
	first: pattern_lr_left_1_right_2,
	later: [p_yue, s_ri, p_sheng]
}
Characters[Characters.length] = {
	char: "腹",
	first: pattern_lr_left_1_right_many,
	later: [p_yue, pieheng, s_ri, zhewen]
}
Characters[Characters.length] = {
	char: "腾",
	first: pattern_lr_left_1_right_2,
	later: [p_yue, d_juanzitou, z_ma]
}
Characters[Characters.length] = {
	char: "腿",
	first: pattern_lr_left_1_right_2,
	later: [p_yue, kenzitou, zouzhidi]
}
Characters[Characters.length] = {
	char: "触",
	first: pattern_lr_left_1_right_1_left_big,
	later: [weizitou, p_yong, s_chong]
}
Characters[Characters.length] = {
	char: "解",
	first: pattern_lr_left_1_right_2,
	later: [weizitou, p_yong, z_dao, p_niu]
}
Characters[Characters.length] = {
	char: "酱",
	first: pattern_ud_up_2_down_1,
	later: [jiangzipang, p_xi, h_youxin]
}
Characters[Characters.length] = {
	char: "痰",
	first: pattern_round_left_up,
	later: [bingzitou, huozipang, huozipang]
}
Characters[Characters.length] = {
	char: "廉",
	first: pattern_round_left_up,
	later: [d_guang, d_jian]
}
Characters[Characters.length] = {
	char: "新",
	first: pattern_lr_left_2_right_1,
	later: [d_li, h_mugou, p_jin]
}
Characters[Characters.length] = {
	char: "韵",
	first: pattern_lr_left_2_right_1,
	later: [d_li, s_ri, p_yun]
}
Characters[Characters.length] = {
	char: "意",
	first: pattern_ud_up_middle_down,
	later: [d_li, s_ri, d_xin]
}
Characters[Characters.length] = {
	char: "粮",
	first: pattern_lr_left_1_right_1_right_big,
	later: [d_mi, d_liang]
}
Characters[Characters.length] = {
	char: "数",
	first: pattern_lr_left_2_right_1,
	later: [d_mi, z_nv, fanwenpang]
}
Characters[Characters.length] = {
	char: "煎",
	first: pattern_ud_up_many_down_1,
	later: [lanzitou, heng, s_yue, lidaopang, sidiandi]
}
Characters[Characters.length] = {
	char: "塑",
	first: pattern_ud_up_2_down_1,
	later: [d_ni, p_yue, h_tu]
}
Characters[Characters.length] = {
	char: "慈",
	first: pattern_ud_up_many_down_1,
	later: [lanzitou, youzipang, youzipang, d_xin]
}
Characters[Characters.length] = {
	char: "煤",
	first: pattern_lr_left_1_right_2,
	later: [huozipang, h_ganku, h_mu]
}
Characters[Characters.length] = {
	char: "煌",
	first: pattern_lr_left_1_right_2,
	later: [huozipang, p_bai, h_wang]
}
Characters[Characters.length] = {
	char: "满",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, caozitou, h_liang]
}
Characters[Characters.length] = {
	char: "漠",
	first: pattern_lr_left_middle_right,
	later: [sandianshui, caozitou, s_ri, h_da]
}
Characters[Characters.length] = {
	char: "源",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, h_chang, p_bai, z_xiao]
}
Characters[Characters.length] = {
	char: "滤",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, huzitou, d_xin]
}
Characters[Characters.length] = {
	char: "滥",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, s_liangshu, p_zhutouban, minzidi]
}
Characters[Characters.length] = {
	char: "滔",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, caizitou, p_jiu]
}
Characters[Characters.length] = {
	char: "溪",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, caizitou, youzipang, h_da]
}
Characters[Characters.length] = {
	char: "溜",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, p_maozizuo, z_dao, s_tian]
}
Characters[Characters.length] = {
	char: "滚",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, liuzitou, p_eight, sigong, p_yizidi]
}
Characters[Characters.length] = {
	char: "滨",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, baogaitou, p_qiu, p_eight]
}
Characters[Characters.length] = {
	char: "粱",
	first: pattern_ud_up_2_down_1,
	later: [sandianshui, z_liangyoush, d_mi]
}
Characters[Characters.length] = {
	char: "滩",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, z_you, quezipang]
}
Characters[Characters.length] = {
	char: "慎",
	first: pattern_lr_left_1_right_many,
	later: [shuxinpang, h_hengpie, s_juzitou, p_eight]
}
Characters[Characters.length] = {
	char: "誉",
	first: pattern_ud_up_1_down_1_down_big,
	later: [d_xingzitou, heng, p_eight, d_yan]
}
Characters[Characters.length] = {
	char: "塞",
	first: pattern_ud_up_middle_down,
	later: [baogaitou, h_sanhls, p_eight, h_tu]
}
Characters[Characters.length] = {
	char: "谨",
	first: pattern_lr_left_1_right_1_right_big,
	later: [yanzipang, h_qinzizuo]
}
Characters[Characters.length] = {
	char: "福",
	first: pattern_lr_left_1_right_many,
	later: [shizipang, heng, s_kou, s_tian]
}
Characters[Characters.length] = {
	char: "群",
	first: pattern_lr_left_1_right_1_left_big,
	later: [z_yin, s_kou, d_yang]
}
Characters[Characters.length] = {
	char: "殿",
	first: pattern_lr_left_many_right_many,
	later: [z_shizitou, h_xizitou, p_eight, p_ji, z_you]
}
Characters[Characters.length] = {
	char: "辟",
	first: pattern_lr_left_2_right_1,
	later: [z_shizitou, s_kou, d_li, h_ten]
}
Characters[Characters.length] = {
	char: "障",
	first: pattern_lr_left_1_right_many,
	later: [zuoerpang, d_li, s_ri, h_ten]
}
Characters[Characters.length] = {
	char: "嫌",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_nv, d_jian]
}
Characters[Characters.length] = {
	char: "嫁",
	first: pattern_lr_left_1_right_2,
	later: [z_nv, baogaitou, h_zhizhu]
}
Characters[Characters.length] = {
	char: "叠",
	first: pattern_ud_up_middle_down,
	later: [z_you, z_you, z_you, tubaogai, s_qie]
}
Characters[Characters.length] = {
	char: "缝",
	first: pattern_lr_left_1_right_many,
	later: [jiaosipang, zhewen, h_feng, zouzhidi]
}
Characters[Characters.length] = {
	char: "缠",
	first: pattern_lr_left_1_right_2,
	later: [jiaosipang, d_guang, s_li]
}

/* 十四画 */
Characters[Characters.length] = {
	char: "静",
	first: pattern_lr_left_2_right_1,
	later: [h_qingzitou, s_yue, p_zheng]
}
Characters[Characters.length] = {
	char: "碧",
	first: pattern_ud_up_2_down_1,
	later: [h_wang, p_bai, h_stone]
}
Characters[Characters.length] = {
	char: "璃",
	first: pattern_lr_left_1_right_many,
	later: [h_wang, liuzitou, cha, xiongzikuang, tongzikuang, sigong]
}
Characters[Characters.length] = {
	char: "墙",
	first: pattern_lr_left_1_right_many,
	later: [h_tu, h_qiangzitou, s_kou, s_kou]
}
Characters[Characters.length] = {
	char: "撇",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, d_bizizuo, fanwenpang]
}
Characters[Characters.length] = {
	char: "嘉",
	first: pattern_ud_up_many_down_many,
	later: [h_shi, s_kou, lanzitou, heng, z_li, s_kou]
}
Characters[Characters.length] = {
	char: "摧",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, s_shan, quezipang]
}
Characters[Characters.length] = {
	char: "截",
	first: pattern_round_right_up,
	later: [zaizikuang, quezipang]
}
Characters[Characters.length] = {
	char: "誓",
	first: pattern_ud_up_2_down_1,
	later: [tishoupang, p_jin, d_yan]
}
Characters[Characters.length] = {
	char: "境",
	first: pattern_lr_left_1_right_many,
	later: [h_tu, d_li, s_ri, p_er]
}
Characters[Characters.length] = {
	char: "摘",
	first: pattern_lr_left_1_right_many,
	later: [tishoupang, liuzitou, lanzitou, tongzikuang, h_gu]
}
Characters[Characters.length] = {
	char: "摔",
	first: pattern_lr_left_1_right_many,
	later: [tishoupang, liuzitou, liangdianshui, youzipang, piedian, h_ten]
}
Characters[Characters.length] = {
	char: "聚",
	first: pattern_ud_up_2_down_1,
	later: [h_erduo, z_you, p_juzidi]
}
Characters[Characters.length] = {
	char: "蔽",
	first: pattern_ud_up_1_down_2,
	later: [caozitou, d_bizizuo, fanwenpang]
}
Characters[Characters.length] = {
	char: "慕",
	first: pattern_ud_up_middle_down,
	later: [caozitou, s_ri, h_da, shuxindi]
}
Characters[Characters.length] = {
	char: "暮",
	first: pattern_ud_up_middle_down,
	later: [caozitou, s_ri, h_da, s_ri]
}
Characters[Characters.length] = {
	char: "蔑",
	first: pattern_ud_up_middle_down,
	later: [caozitou, s_siwuzhe, h_wuxu, dian]
}
Characters[Characters.length] = {
	char: "模",
	first: pattern_lr_left_1_right_many,
	later: [h_mu, caozitou, s_ri, h_da]
}
Characters[Characters.length] = {
	char: "榴",
	first: pattern_lr_left_1_right_many,
	later: [tishoupang, p_maozizuo, z_dao, s_tian]
}
Characters[Characters.length] = {
	char: "榜",
	first: pattern_lr_left_1_right_1_left_big,
	later: [h_mu, liuzitou, lanzitou, tubaogai, d_fang]
}
Characters[Characters.length] = {
	char: "榨",
	first: pattern_lr_left_1_right_2,
	later: [h_mu, xuezitou, p_zha]
}
Characters[Characters.length] = {
	char: "歌",
	first: pattern_lr_left_many_right_1,
	later: [h_dingwugou, s_kou, h_ke, p_qian]
}
Characters[Characters.length] = {
	char: "遭",
	first: pattern_round_left_down,
	later: [h_caozitou, s_ri, zouzhidi]
}
Characters[Characters.length] = {
	char: "酷",
	first: pattern_lr_left_1_right_2,
	later: [h_youxin, p_niuwuwei, s_kou]
}
Characters[Characters.length] = {
	char: "酿",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_youxin, d_liang]
}
Characters[Characters.length] = {
	char: "酸",
	first: pattern_lr_left_1_right_many,
	later: [h_youxin, sigong, p_eight, zhewen]
}
Characters[Characters.length] = {
	char: "磁",
	first: pattern_lr_left_1_right_many,
	later: [h_stone, lanzitou, heng, youzipang, youzipang]
}
Characters[Characters.length] = {
	char: "愿",
	first: pattern_round_left_up,
	later: [h_chang, p_bai, z_xiao, d_xin]
}
Characters[Characters.length] = {
	char: "需",
	first: pattern_ud_up_1_down_1_up_big,
	later: [h_yushui, h_erqie]
}
Characters[Characters.length] = {
	char: "弊",
	first: pattern_ud_up_2_down_1,
	later: [d_bizizuo, fanwenpang, h_piecao]
}
Characters[Characters.length] = {
	char: "裳",
	first: pattern_ud_up_middle_down,
	later: [guangzitou, tubaogai, s_kou, d_yifu]
}
Characters[Characters.length] = {
	char: "颗",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_guo, h_ye]
}
Characters[Characters.length] = {
	char: "嗽",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, h_shu, p_qian]
}
Characters[Characters.length] = {
	char: "蜻",
	first: pattern_lr_left_1_right_2,
	later: [s_chong, h_qingzitou, s_yue]
}
Characters[Characters.length] = {
	char: "蜡",
	first: pattern_lr_left_1_right_2,
	later: [s_chong, h_xizitou, s_ri]
}
Characters[Characters.length] = {
	char: "蝇",
	first: pattern_lr_left_1_right_2,
	later: [s_chong, s_kou, s_dian]
}
Characters[Characters.length] = {
	char: "蜘",
	first: pattern_lr_left_1_right_2,
	later: [s_chong, p_shi, s_kou]
}
Characters[Characters.length] = {
	char: "赚",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_bei, d_jian]
}
Characters[Characters.length] = {
	char: "锹",
	first: pattern_lr_left_1_right_2,
	later: [jinzipang, p_he, huozipang]
}
Characters[Characters.length] = {
	char: "锻",
	first: pattern_lr_left_1_right_many,
	later: [jinzipang, p_duanzizuo, p_ji, z_you]
}
Characters[Characters.length] = {
	char: "舞",
	first: pattern_ud_up_middle_down,
	later: [pieheng, h_hsishu, heng, p_xi, h_jiangyouxia]
}
Characters[Characters.length] = {
	char: "稳",
	first: pattern_lr_left_1_right_many,
	later: [p_he, weizitou, xunzitou, d_xin]
}
Characters[Characters.length] = {
	char: "算",
	first: pattern_ud_up_middle_down,
	later: [zhuzitou, s_mu, h_piecao]
}
Characters[Characters.length] = {
	char: "箩",
	first: pattern_ud_up_middle_down,
	later: [zhuzitou, s_siwuzhe, p_xi]
}
Characters[Characters.length] = {
	char: "管",
	first: pattern_ud_up_1_down_2,
	later: [zhuzitou, baogaitou, s_guanzidi]
}
Characters[Characters.length] = {
	char: "僚",
	first: pattern_lr_left_1_right_many,
	later: [danrenpang, h_liaoyoush, s_ri, z_xiao]
}
Characters[Characters.length] = {
	char: "鼻",
	first: pattern_ud_up_middle_down,
	later: [p_zi, s_tian, heng, pieshu]
}
Characters[Characters.length] = {
	char: "魄",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_bai, p_gui]
}
Characters[Characters.length] = {
	char: "貌",
	first: pattern_lr_left_1_right_2,
	later: [baozipang, p_bai, p_er]
}
Characters[Characters.length] = {
	char: "膜",
	first: pattern_lr_left_1_right_many,
	later: [p_yue, caozitou, s_ri, h_da]
}
Characters[Characters.length] = {
	char: "膊",
	first: pattern_lr_left_1_right_2,
	later: [p_yue, h_fudu, h_cun]
}
Characters[Characters.length] = {
	char: "膀",
	first: pattern_lr_left_1_right_many,
	later: [p_yue, liuzitou, lanzitou, tubaogai, d_fang]
}
Characters[Characters.length] = {
	char: "鲜",
	first: pattern_lr_left_1_right_1_left_big,
	later: [weizitou, s_tian, heng, d_yang]
}
Characters[Characters.length] = {
	char: "疑",
	first: pattern_lr_left_many_right_many,
	later: [p_bi, p_shi, z_yongzitou, henggou, s_zouzidi]
}
Characters[Characters.length] = {
	char: "馒",
	first: pattern_lr_left_1_right_many,
	later: [shichi, s_ri, s_siwuzhe, z_you]
}
Characters[Characters.length] = {
	char: "裹",
	first: pattern_ud_up_middle_down,
	later: [liuzitou, s_guo, p_yizidi]
}
Characters[Characters.length] = {
	char: "敲",
	first: pattern_lr_left_many_right_many,
	later: [liuzitou, s_kou, tongzikuang, s_kou, shangzitou, z_you]
}
Characters[Characters.length] = {
	char: "豪",
	first: pattern_lr_left_middle_right,
	later: [liuzitou, s_kou, tubaogai, h_zhizhu]
}
Characters[Characters.length] = {
	char: "膏",
	first: pattern_ud_up_middle_down,
	later: [liuzitou, s_kou, tubaogai, s_kou, s_yue]
}
Characters[Characters.length] = {
	char: "遮",
	first: pattern_round_left_down,
	later: [d_guang, h_caoheng, sidiandi, zouzhidi]
}
Characters[Characters.length] = {
	char: "腐",
	first: pattern_round_left_up,
	later: [d_guang, danrenpang, h_cun, tongzikuang, p_ren, p_ren]
}
Characters[Characters.length] = {
	char: "瘦",
	first: pattern_round_left_up,
	later: [bingzitou, p_jiu, shu, z_you]
}
Characters[Characters.length] = {
	char: "辣",
	first: pattern_lr_left_1_right_1_right_big,
	later: [d_li, h_hengpie, h_shu]
}
Characters[Characters.length] = {
	char: "竭",
	first: pattern_lr_left_1_right_many,
	later: [d_li, s_ri, baozitou, cha, xiongzikuang]
}
Characters[Characters.length] = {
	char: "端",
	first: pattern_lr_left_1_right_2,
	later: [d_li, s_shan, h_erqie]
}
Characters[Characters.length] = {
	char: "旗",
	first: pattern_lr_left_1_right_2,
	later: [d_fang, pieheng, h_qizitou, p_eight]
}
Characters[Characters.length] = {
	char: "精",
	first: pattern_lr_left_1_right_2,
	later: [d_mi, h_qingzitou, s_yue]
}
Characters[Characters.length] = {
	char: "歉",
	first: pattern_lr_left_1_right_1_left_big,
	later: [d_jian, p_qian]
}
Characters[Characters.length] = {
	char: "熄",
	first: pattern_lr_left_1_right_2,
	later: [huozipang, p_zi, d_xin]
}
Characters[Characters.length] = {
	char: "熔",
	first: pattern_lr_left_1_right_2,
	later: [huozipang, baogaitou, p_eight, p_ren, s_kou]
}
Characters[Characters.length] = {
	char: "漆",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, h_mu, p_ren, z_dianshui]
}
Characters[Characters.length] = {
	char: "漂",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, h_xiwuzhe, h_shiren]
}
Characters[Characters.length] = {
	char: "漫",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, s_ri, s_siwuzhe, z_you]
}
Characters[Characters.length] = {
	char: "滴",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, liuzitou, lanzitou, tongzikuang, h_gu]
}
Characters[Characters.length] = {
	char: "演",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, baogaitou, h_yinzizhong, p_eight]
}
Characters[Characters.length] = {
	char: "漏",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, z_shizitou, h_yushui]
}
Characters[Characters.length] = {
	char: "慢",
	first: pattern_lr_left_1_right_many,
	later: [shuxinpang, s_ri, s_siwuzhe, z_you]
}
Characters[Characters.length] = {
	char: "寨",
	first: pattern_ud_up_middle_down,
	later: [baogaitou, h_sanhls, p_eight, h_mugou]
}
Characters[Characters.length] = {
	char: "赛",
	first: pattern_ud_up_middle_down,
	later: [baogaitou, h_sanhls, p_eight, s_bei]
}
Characters[Characters.length] = {
	char: "察",
	first: pattern_ud_up_middle_down,
	later: [baogaitou, p_xidian, z_jishangyou, h_shiren]
}
Characters[Characters.length] = {
	char: "蜜",
	first: pattern_lr_left_middle_right,
	later: [baogaitou, d_xin, pie, s_chong]
}
Characters[Characters.length] = {
	char: "谱",
	first: pattern_lr_left_1_right_2,
	later: [yanzipang, lanzitou, heng, s_ye, s_ri]
}
Characters[Characters.length] = {
	char: "嫩",
	first: pattern_lr_left_1_right_2,
	later: [z_nv, h_shu, fanwenpang]
}
Characters[Characters.length] = {
	char: "翠",
	first: pattern_ud_up_many_down_many,
	later: [z_xi, z_xi, d_zu]
}
Characters[Characters.length] = {
	char: "熊",
	first: pattern_ud_up_many_down_1,
	later: [sigong, s_yue, p_bi, p_bi, sidiandi]
}
Characters[Characters.length] = {
	char: "凳",
	first: pattern_ud_up_middle_down,
	later: [dengzitou, h_dou, p_er]
}
Characters[Characters.length] = {
	char: "骡",
	first: pattern_lr_left_1_right_many,
	later: [z_ma, s_tian, youzipang, z_xiao]
}
Characters[Characters.length] = {
	char: "缩",
	first: pattern_lr_left_1_right_many,
	later: [jiaosipang, baogaitou, danrenpang, heng, p_bai]
}

/* 十五画 */
Characters[Characters.length] = {
	char: "慧",
	first: pattern_ud_up_middle_down,
	later: [h_feng, h_feng, xunzitou, d_xin]
}
Characters[Characters.length] = {
	char: "撕",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, h_qizitou, p_jin]
}
Characters[Characters.length] = {
	char: "撒",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, h_xizitou, s_yue, fanwenpang]
}
Characters[Characters.length] = {
	char: "趣",
	first: pattern_round_left_down,
	later: [h_tu, s_zouzidi, h_erduo, z_you]
}
Characters[Characters.length] = {
	char: "趟",
	first: pattern_round_left_down,
	later: [h_tu, s_zouzidi, guangzitou, tongzikuang, s_kou]
}
Characters[Characters.length] = {
	char: "撑",
	first: pattern_lr_left_1_right_many,
	later: [tishoupang, guangzitou, tubaogai, s_kou, p_shou]
}
Characters[Characters.length] = {
	char: "播",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, fanzitou, s_tian]
}
Characters[Characters.length] = {
	char: "撞",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, d_li, s_li]
}
Characters[Characters.length] = {
	char: "撤",
	first: pattern_lr_left_1_right_many,
	later: [tishoupang, d_chongzitou, s_yue, fanwenpang]
}
Characters[Characters.length] = {
	char: "增",
	first: pattern_lr_left_1_right_2,
	later: [h_tu, lanzitou, s_zengzizh, s_ri]
}
Characters[Characters.length] = {
	char: "聪",
	first: pattern_lr_left_1_right_2,
	later: [h_erduo, lanzitou, s_kou, d_xin]
}
Characters[Characters.length] = {
	char: "鞋",
	first: pattern_lr_left_1_right_2,
	later: [h_caoheng, s_gezidi, h_tu, h_tu]
}
Characters[Characters.length] = {
	char: "蕉",
	first: pattern_ud_up_1_down_2,
	later: [caozitou, quezipang, sidiandi]
}
Characters[Characters.length] = {
	char: "蔬",
	first: pattern_ud_up_1_down_many,
	later: [caozitou, z_shuzizuo, d_chongzitou, p_liuzidi]
}
Characters[Characters.length] = {
	char: "横",
	first: pattern_lr_left_1_right_many,
	later: [h_mu, h_xizitou, s_you, p_eight]
}
Characters[Characters.length] = {
	char: "槽",
	first: pattern_lr_left_1_right_2,
	later: [h_mu, h_caozitou, s_ri]
}
Characters[Characters.length] = {
	char: "樱",
	first: pattern_lr_left_1_right_many,
	later: [h_mu, s_bei, s_bei, z_nv]
}
Characters[Characters.length] = {
	char: "橡",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, p_xiang]
}
Characters[Characters.length] = {
	char: "飘",
	first: pattern_lr_left_2_right_2,
	later: [h_xiwuzhe, h_shiren, fengzitou, cha]
}
Characters[Characters.length] = {
	char: "醋",
	first: pattern_lr_left_1_right_2,
	later: [h_youxin, h_xizitou, s_ri]
}
Characters[Characters.length] = {
	char: "醉",
	first: pattern_lr_left_1_right_1_left_big,
	later: [h_youxin, d_zu]
}
Characters[Characters.length] = {
	char: "震",
	first: pattern_ud_up_1_down_1_down_big,
	later: [h_yushui, h_chenxing]
}
Characters[Characters.length] = {
	char: "霉",
	first: pattern_ud_up_1_down_2,
	later: [h_yushui, pieheng, z_mu]
}
Characters[Characters.length] = {
	char: "瞒",
	first: pattern_lr_left_1_right_2,
	later: [s_mu, caozitou, h_liang]
}
Characters[Characters.length] = {
	char: "题",
	first: pattern_round_left_down,
	later: [s_ri, heng, s_zouzidi, h_ye]
}
Characters[Characters.length] = {
	char: "暴",
	first: pattern_ud_up_middle_down,
	later: [s_ri, h_sanhls, p_eight, z_dianshui]
}
Characters[Characters.length] = {
	char: "瞎",
	first: pattern_lr_left_1_right_many,
	later: [s_mu, baogaitou, h_feng, s_kou]
}
Characters[Characters.length] = {
	char: "影",
	first: pattern_lr_left_many_right_1,
	later: [s_ri, liuzitou, s_kou, z_xiao, sanpie]
}
Characters[Characters.length] = {
	char: "踢",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, s_zhi, s_ri, p_wuyou]
}
Characters[Characters.length] = {
	char: "踏",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, s_zhi, z_shui, s_ri]
}
Characters[Characters.length] = {
	char: "踩",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, s_zhi, caizitou, h_mu]
}
Characters[Characters.length] = {
	char: "踪",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, s_zhi, baogaitou, h_shiren]
}
Characters[Characters.length] = {
	char: "蝶",
	first: pattern_lr_left_1_right_2,
	later: [s_chong, h_shijie, h_mu]
}
Characters[Characters.length] = {
	char: "蝴",
	first: pattern_lr_left_1_right_2,
	later: [s_chong, h_gu, p_yue]
}
Characters[Characters.length] = {
	char: "嘱",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, z_shizitou, p_yu]
}
Characters[Characters.length] = {
	char: "墨",
	first: pattern_ud_up_middle_down,
	later: [s_heizitou, sidiandi, h_tu]
}
Characters[Characters.length] = {
	char: "镇",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jinzipang, h_hengpie, s_juzitou, p_eight]
}
Characters[Characters.length] = {
	char: "靠",
	first: pattern_ud_up_2_down_2,
	later: [p_niuwuwei, s_kou, s_fei]
}
Characters[Characters.length] = {
	char: "稻",
	first: pattern_lr_left_1_right_2,
	later: [p_he, caizitou, p_jiu]
}
Characters[Characters.length] = {
	char: "黎",
	first: pattern_ud_up_2_down_2,
	later: [p_he, baozitou, pie, p_ren, z_dianshui]
}
Characters[Characters.length] = {
	char: "稿",
	first: pattern_lr_left_1_right_many,
	later: [p_he, liuzitou, s_kou, tongzikuang, s_kou]
}
Characters[Characters.length] = {
	char: "稼",
	first: pattern_lr_left_1_right_2,
	later: [p_he, baogaitou, h_zhizhu]
}
Characters[Characters.length] = {
	char: "箱",
	first: pattern_ud_up_2_down_2,
	later: [zhuzitou, h_mu, s_mu]
}
Characters[Characters.length] = {
	char: "箭",
	first: pattern_ud_up_many_down_many,
	later: [zhuzitou, lanzitou, heng, s_yue, lidaopang]
}
Characters[Characters.length] = {
	char: "篇",
	first: pattern_ud_up_2_down_2,
	later: [zhuzitou, d_hu, s_bianzili]
}
Characters[Characters.length] = {
	char: "僵",
	first: pattern_lr_left_1_right_many,
	later: [danrenpang, heng, s_tian, heng, s_tian, heng]
}
Characters[Characters.length] = {
	char: "躺",
	first: pattern_lr_left_1_right_2,
	later: [p_shen, guangzitou, tongzikuang, s_kou]
}
Characters[Characters.length] = {
	char: "僻",
	first: pattern_lr_left_1_right_many,
	later: [danrenpang, z_shizitou, s_kou, d_li, h_ten]
}
Characters[Characters.length] = {
	char: "德",
	first: pattern_lr_left_1_right_many,
	later: [shuangrenpang, h_ten, s_siwuzhe, heng, d_xin]
}
Characters[Characters.length] = {
	char: "艘",
	first: pattern_lr_left_1_right_2,
	later: [p_zhou, p_jiu, shu, z_you]
}
Characters[Characters.length] = {
	char: "膝",
	first: pattern_lr_left_1_right_many,
	later: [p_yue, h_mu, p_ren, z_dianshui]
}
Characters[Characters.length] = {
	char: "膛",
	first: pattern_lr_left_1_right_many,
	later: [p_yue, guangzitou, tubaogai, s_kou, h_tu]
}
Characters[Characters.length] = {
	char: "熟",
	first: pattern_ud_up_many_down_1,
	later: [liuzitou, s_kou, z_zi, p_wan, sidiandi]
}
Characters[Characters.length] = {
	char: "摩",
	first: pattern_round_left_up,
	later: [d_guang, h_mu, h_mu, p_shou]
}
Characters[Characters.length] = {
	char: "颜",
	first: pattern_lr_left_2_right_1,
	later: [d_chan, sanpie, h_ye]
}
Characters[Characters.length] = {
	char: "毅",
	first: pattern_lr_left_2_right_2,
	later: [liuzitou, lanzitou, h_zhizhu, p_ji, z_you]
}
Characters[Characters.length] = {
	char: "糊",
	first: pattern_lr_left_1_right_2,
	later: [d_mi, h_gu, p_yue]
}
Characters[Characters.length] = {
	char: "遵",
	first: pattern_round_left_down,
	later: [lanzitou, h_youxin, h_cun, zouzhidi]
}
Characters[Characters.length] = {
	char: "潜",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, h_fu, h_fu, s_ri]
}
Characters[Characters.length] = {
	char: "潮",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, h_hengpie, s_ri, h_ten, p_yue]
}
Characters[Characters.length] = {
	char: "懂",
	first: pattern_lr_left_1_right_2,
	later: [shuxinpang, caozitou, p_zhong]
}
Characters[Characters.length] = {
	char: "额",
	first: pattern_lr_left_many_right_1,
	later: [baogaitou, zhewen, s_kou, h_ye]
}
Characters[Characters.length] = {
	char: "慰",
	first: pattern_ud_up_many_down_1,
	later: [z_shizitou, h_shiren, h_cun, d_xin]
}
Characters[Characters.length] = {
	char: "劈",
	first: pattern_ud_up_many_down_1,
	later: [z_shizitou, s_kou, d_li, h_ten, z_dao]
}

/* 十六画 */
Characters[Characters.length] = {
	char: "操",
	first: pattern_lr_left_1_right_many,
	later: [tishoupang, s_kou, s_kou, s_kou, h_mu]
}
Characters[Characters.length] = {
	char: "燕",
	first: pattern_lr_left_middle_right,
	later: [h_caoheng, s_beizizuo, s_kou, p_bi, sidiandi]
}
Characters[Characters.length] = {
	char: "薯",
	first: pattern_ud_up_1_down_many,
	later: [caozitou, s_siwuzhe, laozitou, s_ri]
}
Characters[Characters.length] = {
	char: "薪",
	first: pattern_ud_up_1_down_many,
	later: [caozitou, d_li, h_mugou, p_jin]
}
Characters[Characters.length] = {
	char: "薄",
	first: pattern_ud_up_1_down_many,
	later: [caozitou, sandianshui, h_fudu, h_cun]
}
Characters[Characters.length] = {
	char: "颠",
	first: pattern_lr_left_1_right_1_left_big,
	later: [h_hengpie, s_juzitou, p_eight, h_ye]
}
Characters[Characters.length] = {
	char: "橘",
	first: pattern_lr_left_1_right_many,
	later: [h_mu, z_yu, tongzikuang, p_eight, s_kou]
}
Characters[Characters.length] = {
	char: "整",
	first: pattern_ud_up_2_down_1,
	later: [h_shu, fanwenpang, h_zheng]
}
Characters[Characters.length] = {
	char: "融",
	first: pattern_lr_left_many_right_1,
	later: [heng, s_kou, tongzikuang, d_gezili, s_chong]
}
Characters[Characters.length] = {
	char: "醒",
	first: pattern_lr_left_1_right_2,
	later: [h_youxin, s_ri, p_sheng]
}
Characters[Characters.length] = {
	char: "餐",
	first: pattern_ud_up_many_down_many,
	later: [liuzitou, p_xi, z_you, p_ren, d_liang]
}
Characters[Characters.length] = {
	char: "嘴",
	first: pattern_lr_left_1_right_many,
	later: [s_kou, s_zhi, p_bi, weizitou, p_yong]
}
Characters[Characters.length] = {
	char: "蹄",
	first: pattern_lr_left_1_right_many,
	later: [s_kou, s_zhi, liuzitou, lanzitou, tubaogai, s_jin]
}
Characters[Characters.length] = {
	char: "器",
	first: pattern_ud_up_middle_down,
	later: [s_kou, s_kou, h_quan, s_kou, s_kou]
}
Characters[Characters.length] = {
	char: "赠",
	first: pattern_lr_left_1_right_2,
	later: [s_bei, lanzitou, s_zengzizh, s_ri]
}
Characters[Characters.length] = {
	char: "默",
	first: pattern_lr_left_2_right_1,
	later: [s_heizitou, sidiandi, h_quan]
}
Characters[Characters.length] = {
	char: "镜",
	first: pattern_lr_left_1_right_many,
	later: [jinzipang, d_li, s_ri, p_er]
}
Characters[Characters.length] = {
	char: "赞",
	first: pattern_ud_up_2_down_1,
	later: [p_niuwuwei, p_er, p_niuwuwei, p_er, s_bei]
}
Characters[Characters.length] = {
	char: "篮",
	first: pattern_ud_up_many_down_many,
	later: [zhuzitou, s_liangshu, p_zhutouban, minzidi]
}
Characters[Characters.length] = {
	char: "邀",
	first: pattern_round_left_down,
	later: [p_bai, d_fang, fanwenpang, zouzhidi]
}
Characters[Characters.length] = {
	char: "衡",
	first: pattern_lr_left_middle_right,
	later: [shuangrenpang, weizitou, s_tian, h_da, h_xingziyou]
}
Characters[Characters.length] = {
	char: "膨",
	first: pattern_lr_left_1_right_2,
	later: [p_yue, h_shi, s_kou, lanzitou, heng, sanpie]
}
Characters[Characters.length] = {
	char: "雕",
	first: pattern_lr_left_1_right_1_right_big,
	later: [zhouzikuang, h_tu, s_kou, quezipang]
}
Characters[Characters.length] = {
	char: "磨",
	first: pattern_round_left_up,
	later: [d_guang, h_mu, h_mu, h_stone]
}
Characters[Characters.length] = {
	char: "凝",
	first: pattern_lr_left_1_right_many,
	later: [liangdianshui, p_bi, p_shi, z_yongzitou, henggou, s_zouzidi]
}
Characters[Characters.length] = {
	char: "辨",
	first: pattern_lr_left_middle_right,
	later: [d_li, h_ten, d_dianpie, d_li, h_ten]
}
Characters[Characters.length] = {
	char: "辩",
	first: pattern_lr_left_middle_right,
	later: [d_li, h_ten, yanzipang, d_li, h_ten]
}
Characters[Characters.length] = {
	char: "糖",
	first: pattern_lr_left_1_right_many,
	later: [d_mi, d_guang, z_tangzili, s_kou]
}
Characters[Characters.length] = {
	char: "糕",
	first: pattern_lr_left_1_right_2,
	later: [d_mi, yangzitou, sidiandi]
}
Characters[Characters.length] = {
	char: "燃",
	first: pattern_lr_left_1_right_many,
	later: [huozipang, p_xidian, h_quan, sidiandi]
}
Characters[Characters.length] = {
	char: "澡",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, s_kou, s_kou, s_kou, h_mu]
}
Characters[Characters.length] = {
	char: "激",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, p_bai, d_fang, fanwenpang]
}
Characters[Characters.length] = {
	char: "懒",
	first: pattern_lr_left_1_right_2,
	later: [shuxinpang, h_shu, weizitou, s_bei]
}
Characters[Characters.length] = {
	char: "壁",
	first: pattern_ud_up_many_down_1,
	later: [z_shizitou, d_li, h_ten, h_tu]
}
Characters[Characters.length] = {
	char: "避",
	first: pattern_round_left_down,
	later: [z_shizitou, s_kou, d_li, h_ten, zouzhidi]
}
Characters[Characters.length] = {
	char: "缴",
	first: pattern_lr_left_1_right_many,
	later: [jiaosipang, p_bai, d_fang, fanwenpang]
}

/* 十七画 */
Characters[Characters.length] = {
	char: "戴",
	first: pattern_round_right_up,
	later: [zaizikuang, s_tian, h_xizitou, p_eight]
}
Characters[Characters.length] = {
	char: "擦",
	first: pattern_lr_left_1_right_many,
	later: [tishoupang, baogaitou, p_xidian, z_jishangyou, h_shiren]
}
Characters[Characters.length] = {
	char: "鞠",
	first: pattern_lr_left_1_right_2,
	later: [h_caoheng, s_gezidi, baozitou, d_mi]
}
Characters[Characters.length] = {
	char: "藏",
	first: pattern_ud_up_1_down_many,
	later: [caozitou, zangzikuang, h_chen]
}
Characters[Characters.length] = {
	char: "霜",
	first: pattern_ud_up_1_down_2,
	later: [h_yushi, h_mu, s_mu]
}
Characters[Characters.length] = {
	char: "霞",
	first: pattern_ud_up_1_down_many,
	later: [h_yu, z_jiajian]
}
Characters[Characters.length] = {
	char: "瞧",
	first: pattern_lr_left_1_right_2,
	later: [s_mu, quezipang, sidiandi]
}
Characters[Characters.length] = {
	char: "蹈",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, s_zhi, caizitou, p_jiu]
}
Characters[Characters.length] = {
	char: "螺",
	first: pattern_lr_left_1_right_many,
	later: [s_chong, s_tian, youzipang, z_xiao]
}
Characters[Characters.length] = {
	char: "穗",
	first: pattern_lr_left_1_right_2,
	later: [p_he, h_huizitou, d_xin]
}
Characters[Characters.length] = {
	char: "繁",
	first: pattern_ud_up_many_down_many,
	later: [pieheng, z_mu, fanwenpang, youzipang, z_xiao]
}
Characters[Characters.length] = {
	char: "辫",
	first: pattern_lr_left_middle_right,
	later: [d_li, h_ten, jiaosipang, d_li, h_ten]
}
Characters[Characters.length] = {
	char: "赢",
	first: pattern_ud_up_middle_down,
	later: [d_wang, s_kou, p_yue, s_bei, p_fan]
}
Characters[Characters.length] = {
	char: "糟",
	first: pattern_lr_left_1_right_2,
	later: [d_mi, h_caozitou, s_ri]
}
Characters[Characters.length] = {
	char: "糠",
	first: pattern_lr_left_1_right_2,
	later: [d_mi, d_guang, z_lishu]
}
Characters[Characters.length] = {
	char: "燥",
	first: pattern_lr_left_1_right_many,
	later: [huozipang, s_kou, s_kou, s_kou, h_mu]
}
Characters[Characters.length] = {
	char: "臂",
	first: pattern_ud_up_many_down_1,
	later: [z_shizitou, s_kou, d_li, h_ten, s_yue]
}
Characters[Characters.length] = {
	char: "翼",
	first: pattern_ud_up_middle_down,
	later: [z_xi, z_xi, s_tian, h_xizitou, p_eight]
}
Characters[Characters.length] = {
	char: "骤",
	first: pattern_lr_left_1_right_many,
	later: [z_ma, h_erduo, z_you, p_juzidi]
}

/* 十八画 */
Characters[Characters.length] = {
	char: "鞭",
	first: pattern_lr_left_1_right_2,
	later: [h_caoheng, s_gezidi, danrenpang, h_geng]
}
Characters[Characters.length] = {
	char: "覆",
	first: pattern_ud_up_1_down_many,
	later: [h_xiwuzhe, shuangrenpang, pieheng, s_ri, zhewen]
}
Characters[Characters.length] = {
	char: "蹦",
	first: pattern_lr_left_1_right_many,
	later: [s_kou, s_zhi, s_shan, p_yue, p_yue]
}
Characters[Characters.length] = {
	char: "镰",
	first: pattern_lr_left_1_right_2,
	later: [jinzipang, d_guang, d_jian]
}
Characters[Characters.length] = {
	char: "翻",
	first: pattern_lr_left_2_right_2,
	later: [fanzitou, s_tian, z_xi, z_xi]
}
Characters[Characters.length] = {
	char: "鹰",
	first: pattern_round_left_up,
	later: [d_guang, danrenpang, quezipang, p_niaowuheng, heng]
}

/* 十九画 */
Characters[Characters.length] = {
	char: "警",
	first: pattern_ud_up_many_down_1,
	later: [caozitou, p_ju, fanwenpang, d_yan]
}
Characters[Characters.length] = {
	char: "攀",
	first: pattern_ud_up_many_down_many,
	later: [h_mu, cha, cha, h_mu, h_da, p_shou]
}
Characters[Characters.length] = {
	char: "蹲",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, s_zhi, lanzitou, h_youxin, h_cun]
}
Characters[Characters.length] = {
	char: "颤",
	first: pattern_lr_left_many_right_1,
	later: [liuzitou, s_kou, s_kou, s_ri, heng, h_ye]
}
Characters[Characters.length] = {
	char: "瓣",
	first: pattern_lr_left_middle_right,
	later: [d_li, h_ten, p_gua, d_li, h_ten]
}
Characters[Characters.length] = {
	char: "爆",
	first: pattern_lr_left_1_right_many,
	later: [huozipang, s_ri, h_xizitou, p_eight, z_dianshui]
}
Characters[Characters.length] = {
	char: "疆",
	first: pattern_lr_left_many_right_many,
	later: [z_gong, h_tu, heng, s_tian, heng, s_tian, heng]
}

/* 二十画 */
Characters[Characters.length] = {
	char: "壤",
	first: pattern_lr_left_1_right_many,
	later: [h_tu, liuzitou, s_kou, s_kou, h_sanhls, p_yizidi]
}
Characters[Characters.length] = {
	char: "耀",
	first: pattern_lr_left_1_right_many,
	later: [guangzitou, h_wuzidi, z_xi, z_xi, quezipang]
}
Characters[Characters.length] = {
	char: "躁",
	first: pattern_lr_left_1_right_many,
	later: [s_kou, s_zhi, s_kou, s_kou, s_kou, h_mu]
}
Characters[Characters.length] = {
	char: "嚼",
	first: pattern_lr_left_1_right_many,
	later: [s_kou, caizitou, s_siwuzhe, z_jizizuo, h_cun]
}
Characters[Characters.length] = {
	char: "嚷",
	first: pattern_lr_left_1_right_many,
	later: [s_kou, liuzitou, s_kou, s_kou, h_sanhls, p_yizidi]
}
Characters[Characters.length] = {
	char: "籍",
	first: pattern_ud_up_many_down_many,
	later: [zhuzitou, h_gengzizuo, h_xizitou, s_ri]
}
Characters[Characters.length] = {
	char: "魔",
	first: pattern_round_left_up,
	later: [d_guang, h_mu, h_mu, p_gui]
}
Characters[Characters.length] = {
	char: "灌",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, caozitou, s_kou, s_kou, quezipang]
}

/* 二十一画 */
Characters[Characters.length] = {
	char: "蠢",
	first: pattern_ud_up_2_down_2,
	later: [h_fengzitou, s_ri, s_chong, s_chong]
}
Characters[Characters.length] = {
	char: "霸",
	first: pattern_ud_up_1_down_2,
	later: [h_yushi, h_caoheng, s_gezidi, p_yue]
}
Characters[Characters.length] = {
	char: "露",
	first: pattern_ud_up_1_down_many,
	later: [h_yushi, s_kou, s_zhi, zhewen, s_kou]
}

/* 二十二画 */
Characters[Characters.length] = {
	char: "囊",
	first: pattern_ud_up_middle_down,
	later: [h_nangzitou, tubaogai, s_kou, s_kou, h_sanhls, p_yizidi]
}

/* 二十三画 */
Characters[Characters.length] = {
	char: "罐",
	first: pattern_lr_left_1_right_many,
	later: [p_gangwa, caozitou, s_kou, s_kou, quezipang]
}

/*《现代汉语常用字表》之二 次常用汉字1000字 笔画顺序表 */

/* 二画 */
Characters[Characters.length] = {
	char: "匕",
	first: pattern_single,
	later: [pie, shuwanhenggou]
}
Characters[Characters.length] = {
	char: "刁",
	first: pattern_single,
	later: [hengzheshugou, heng]
}

/* 四画 */
Characters[Characters.length] = {
	char: "丐",
	first: pattern_single,
	later: [heng, shu, heng, shuzhehengzheshugou]
}
Characters[Characters.length] = {
	char: "歹",
	first: pattern_single,
	later: [heng, pie, hengzhepie, dian]
}
Characters[Characters.length] = {
	char: "戈",
	first: pattern_single,
	later: [heng, nagou, pie, dian]
}
Characters[Characters.length] = {
	char: "夭",
	first: pattern_single,
	later: [pie, heng, pie, na]
}
Characters[Characters.length] = {
	char: "仑",
	first: pattern_ud_up_1_down_1_down_big,
	later: [p_ren, p_bi]
}
Characters[Characters.length] = {
	char: "讥",
	first: pattern_lr_left_1_right_1_right_big,
	later: [yanzipang, p_ji]
}
Characters[Characters.length] = {
	char: "冗",
	first: pattern_ud_up_1_down_1_down_big,
	later: [tubaogai, p_ji]
}
Characters[Characters.length] = {
	char: "邓",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_you, youerpang]
}

/* 五画 */
Characters[Characters.length] = {
	char: "艾",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caozitou, cha]
}
Characters[Characters.length] = {
	char: "夯",
	first: pattern_ud_up_1_down_1_down_big,
	later: [h_da, z_li]
}
Characters[Characters.length] = {
	char: "凸",
	first: pattern_single,
	later: [shu, heng, shu, hengzheshuzhehengzheshu, heng]
}
Characters[Characters.length] = {
	char: "卢",
	first: pattern_ud_up_1_down_1_down_big,
	later: [shangzitou, z_shizitou]
}
Characters[Characters.length] = {
	char: "叭",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, p_eight]
}
Characters[Characters.length] = {
	char: "叽",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, p_ji]
}
Characters[Characters.length] = {
	char: "皿",
	first: pattern_single,
	later: [shu, hengzheshu, shu, shu, heng]
}
Characters[Characters.length] = {
	char: "凹",
	first: pattern_single,
	later: [shu, hengzheshuzheheng, shu, hengzheshu, heng]
}
Characters[Characters.length] = {
	char: "囚",
	first: pattern_round_whole,
	later: [s_kou, p_ren]
}
Characters[Characters.length] = {
	char: "矢",
	first: pattern_single,
	later: [pie, heng, heng, pie, na]
}
Characters[Characters.length] = {
	char: "乍",
	first: pattern_single,
	later: [pie, heng, shu, heng, heng]
}
Characters[Characters.length] = {
	char: "尔",
	first: pattern_single,
	later: [pie, henggou, shugou, pie, dian]
}
Characters[Characters.length] = {
	char: "冯",
	first: pattern_lr_left_1_right_1_right_big,
	later: [liangdianshui, hengzheshu, shuzhehengzheshugou, heng]
}
Characters[Characters.length] = {
	char: "玄",
	first: pattern_single,
	later: [dian, heng, piezheheng, piezheheng, dian]
}

/* 六画 */
Characters[Characters.length] = {
	char: "邦",
	first: pattern_lr_left_1_right_1_left_big,
	later: [h_piefeng, youerpang]
}
Characters[Characters.length] = {
	char: "迂",
	first: pattern_round_left_down,
	later: [h_yushi, zouzhidi]
}
Characters[Characters.length] = {
	char: "邢",
	first: pattern_lr_left_1_right_1_left_big,
	later: [h_kai, youerpang]
}
Characters[Characters.length] = {
	char: "芋",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caozitou, h_yu]
}
Characters[Characters.length] = {
	char: "芍",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caozitou, p_shao]
}
Characters[Characters.length] = {
	char: "吏",
	first: pattern_single,
	later: [heng, shu, hengzheshu, heng, pie, na]
}
Characters[Characters.length] = {
	char: "夷",
	first: pattern_single,
	later: [heng, hengzheshu, heng, shuzhehengzheshugou, pie, na]
}
Characters[Characters.length] = {
	char: "吁",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, h_yushi]
}
Characters[Characters.length] = {
	char: "吕",
	first: pattern_ud_up_1_down_1_down_big,
	later: [s_kou, s_kou]
}
Characters[Characters.length] = {
	char: "吆",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, youzipang]
}
Characters[Characters.length] = {
	char: "屹",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_shan, pieheng, yi]
}
Characters[Characters.length] = {
	char: "廷",
	first: pattern_round_left_down,
	later: [p_rengui, jianzidi]
}
Characters[Characters.length] = {
	char: "迄",
	first: pattern_round_left_down,
	later: [pieheng, yi, zouzhidi]
}
Characters[Characters.length] = {
	char: "臼",
	first: pattern_single,
	later: [pie, shu, hengzheshu, heng, heng, heng]
}
Characters[Characters.length] = {
	char: "仲",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, s_zhong]
}
Characters[Characters.length] = {
	char: "伦",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, p_lun]
}
Characters[Characters.length] = {
	char: "伊",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, z_yin]
}
Characters[Characters.length] = {
	char: "肋",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_yue, z_li]
}
Characters[Characters.length] = {
	char: "旭",
	first: pattern_round_left_down,
	later: [p_nine, s_ri]
}
Characters[Characters.length] = {
	char: "匈",
	first: pattern_round_right_up,
	later: [baozitou, cha, xiongzikuang]
}
Characters[Characters.length] = {
	char: "凫",
	first: pattern_round_right_up,
	later: [p_niaowuheng, p_ji]
}
Characters[Characters.length] = {
	char: "妆",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jiangzipang, z_nv]
}
Characters[Characters.length] = {
	char: "亥",
	first: pattern_single,
	later: [dian, heng, piezheheng, pie, pie, dian]
}
Characters[Characters.length] = {
	char: "汛",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, z_xunziyou]
}
Characters[Characters.length] = {
	char: "讳",
	first: pattern_lr_left_1_right_1_right_big,
	later: [yanzipang, h_wei]
}
Characters[Characters.length] = {
	char: "讶",
	first: pattern_lr_left_1_right_1_right_big,
	later: [yanzipang, h_ya]
}
Characters[Characters.length] = {
	char: "讹",
	first: pattern_lr_left_1_right_2,
	later: [yanzipang, danrenpang, h_seven]
}
Characters[Characters.length] = {
	char: "讼",
	first: pattern_lr_left_1_right_1_right_big,
	later: [yanzipang, p_eight, sigong]
}
Characters[Characters.length] = {
	char: "诀",
	first: pattern_lr_left_1_right_1_right_big,
	later: [yanzipang, z_jueziyou]
}
Characters[Characters.length] = {
	char: "弛",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_gong, z_ye]
}
Characters[Characters.length] = {
	char: "阱",
	first: pattern_lr_left_1_right_1_right_big,
	later: [zuoerpang, h_jing]
}
Characters[Characters.length] = {
	char: "驮",
	first: pattern_lr_left_1_right_1_left_big,
	later: [z_ma, h_da]
}
Characters[Characters.length] = {
	char: "驯",
	first: pattern_lr_left_1_right_1_left_big,
	later: [z_ma, p_chuan]
}
Characters[Characters.length] = {
	char: "纫",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jiaosipang, z_dao, dian]
}

/* 七画 */
Characters[Characters.length] = {
	char: "玖",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_wang, p_jiu]
}
Characters[Characters.length] = {
	char: "玛",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_wang, z_ma]
}
Characters[Characters.length] = {
	char: "韧",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_wei, z_dao, dian]
}
Characters[Characters.length] = {
	char: "抠",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, jiangzikuang, cha]
}
Characters[Characters.length] = {
	char: "扼",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, h_chang, cangzidi]
}
Characters[Characters.length] = {
	char: "汞",
	first: pattern_ud_up_1_down_1_down_big,
	later: [h_gong, z_shui]
}
Characters[Characters.length] = {
	char: "扳",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, fanzipang, z_you]
}
Characters[Characters.length] = {
	char: "抡",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, p_ren, p_bi]
}
Characters[Characters.length] = {
	char: "坎",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_tu, p_qian]
}
Characters[Characters.length] = {
	char: "坞",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_tu, p_wuya]
}
Characters[Characters.length] = {
	char: "抑",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, p_angzizuo, danerpang]
}
Characters[Characters.length] = {
	char: "拟",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, shutidian, p_ren]
}
Characters[Characters.length] = {
	char: "抒",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, z_yu]
}
Characters[Characters.length] = {
	char: "芙",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caozitou, h_fu]
}
Characters[Characters.length] = {
	char: "芜",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caozitou, h_wuyou]
}
Characters[Characters.length] = {
	char: "苇",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caozitou, h_wei]
}
Characters[Characters.length] = {
	char: "芥",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caozitou, p_ren, pieshu]
}
Characters[Characters.length] = {
	char: "芯",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caozitou, d_xin]
}
Characters[Characters.length] = {
	char: "芭",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caozitou, z_ba]
}
Characters[Characters.length] = {
	char: "杖",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, h_zhang]
}
Characters[Characters.length] = {
	char: "杉",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, sanpie]
}
Characters[Characters.length] = {
	char: "巫",
	first: pattern_single,
	later: [heng, shu, pie, dian, pie, dian, heng]
}
Characters[Characters.length] = {
	char: "杈",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, z_you, dian]
}
Characters[Characters.length] = {
	char: "甫",
	first: pattern_single,
	later: [heng, shu, hengzheshugou, heng, heng, shu, dian]
}
Characters[Characters.length] = {
	char: "匣",
	first: pattern_round_left,
	later: [jiangzikuang, s_jia]
}
Characters[Characters.length] = {
	char: "轩",
	first: pattern_lr_left_1_right_1_left_big,
	later: [h_che, h_gan]
}
Characters[Characters.length] = {
	char: "卤",
	first: pattern_ud_up_1_down_1_down_big,
	later: [shangzitou, s_kou, cha]
}
Characters[Characters.length] = {
	char: "肖",
	first: pattern_ud_up_1_down_1_down_big,
	later: [guangzitou, s_yue]
}
Characters[Characters.length] = {
	char: "吱",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, h_ten, z_you]
}
Characters[Characters.length] = {
	char: "吠",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, h_quan]
}
Characters[Characters.length] = {
	char: "呕",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, jiangzikuang, cha]
}
Characters[Characters.length] = {
	char: "呐",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, s_nei]
}
Characters[Characters.length] = {
	char: "吟",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, p_jintian]
}
Characters[Characters.length] = {
	char: "呛",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, p_ren, cangzidi]
}
Characters[Characters.length] = {
	char: "吻",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, p_wuyou]
}
Characters[Characters.length] = {
	char: "吭",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, d_kang]
}
Characters[Characters.length] = {
	char: "邑",
	first: pattern_ud_up_1_down_1_down_big,
	later: [s_kou, z_ba]
}
Characters[Characters.length] = {
	char: "囤",
	first: pattern_round_whole,
	later: [s_kou, h_tun]
}
Characters[Characters.length] = {
	char: "吮",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, sigong, p_er]
}
Characters[Characters.length] = {
	char: "岖",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_shan, jiangzikuang, cha]
}
Characters[Characters.length] = {
	char: "牡",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_niu, h_tu]
}
Characters[Characters.length] = {
	char: "佑",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, h_hengpie, s_kou]
}
Characters[Characters.length] = {
	char: "佃",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, s_tian]
}
Characters[Characters.length] = {
	char: "伺",
	first: pattern_lr_left_1_right_2,
	later: [danrenpang, hengzheshugou, heng, s_kou]
}
Characters[Characters.length] = {
	char: "囱",
	first: pattern_round_whole,
	later: [p_cong]
}
Characters[Characters.length] = {
	char: "肛",
	first: pattern_lr_left_1_right_1_left_big,
	later: [p_yue, h_gong]
}
Characters[Characters.length] = {
	char: "肘",
	first: pattern_lr_left_1_right_1_left_big,
	later: [p_yue, h_cun]
}
Characters[Characters.length] = {
	char: "甸",
	first: pattern_round_right_up,
	later: [baozitou, s_tian]
}
Characters[Characters.length] = {
	char: "狈",
	first: pattern_lr_left_1_right_1_right_big,
	later: [fanquanpang, s_bei]
}
Characters[Characters.length] = {
	char: "鸠",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_nine, p_niaowuheng, heng]
}
Characters[Characters.length] = {
	char: "彤",
	first: pattern_lr_left_1_right_1_left_big,
	later: [p_dan, sanpie]
}
Characters[Characters.length] = {
	char: "灸",
	first: pattern_ud_up_1_down_1_down_big,
	later: [p_jiu, huozipang]
}
Characters[Characters.length] = {
	char: "刨",
	first: pattern_lr_left_1_right_1_left_big,
	later: [baozitou, z_si, lidaopang]
}
Characters[Characters.length] = {
	char: "庇",
	first: pattern_round_left_up,
	later: [d_guang, p_bi, p_bi]
}
Characters[Characters.length] = {
	char: "吝",
	first: pattern_ud_up_1_down_1_up_big,
	later: [d_wen, s_kou]
}
Characters[Characters.length] = {
	char: "庐",
	first: pattern_round_left_up,
	later: [d_guang, d_hu]
}
Characters[Characters.length] = {
	char: "闰",
	first: pattern_round_up,
	later: [d_men, h_wang]
}
Characters[Characters.length] = {
	char: "兑",
	first: pattern_ud_up_1_down_2,
	later: [lanzitou, s_kou, p_er]
}
Characters[Characters.length] = {
	char: "灼",
	first: pattern_lr_left_1_right_1_right_big,
	later: [huozipang, p_shao]
}
Characters[Characters.length] = {
	char: "沐",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, h_mu]
}
Characters[Characters.length] = {
	char: "沛",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, h_shushi]
}
Characters[Characters.length] = {
	char: "汰",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, h_tai]
}
Characters[Characters.length] = {
	char: "沥",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, h_chang, z_li]
}
Characters[Characters.length] = {
	char: "沦",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, p_ren, p_bi]
}
Characters[Characters.length] = {
	char: "汹",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, cha, xiongzikuang]
}
Characters[Characters.length] = {
	char: "沧",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, p_ren, cangzidi]
}
Characters[Characters.length] = {
	char: "沪",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, d_hu]
}
Characters[Characters.length] = {
	char: "忱",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shuxinpang, p_shenziyou]
}
Characters[Characters.length] = {
	char: "诅",
	first: pattern_lr_left_1_right_1_right_big,
	later: [yanzipang, s_qie]
}
Characters[Characters.length] = {
	char: "诈",
	first: pattern_lr_left_1_right_1_right_big,
	later: [yanzipang, p_zha]
}
Characters[Characters.length] = {
	char: "罕",
	first: pattern_ud_up_2_down_1,
	later: [xuezitou, h_gan]
}
Characters[Characters.length] = {
	char: "屁",
	first: pattern_round_left_up,
	later: [z_shizitou, p_bi, p_bi]
}
Characters[Characters.length] = {
	char: "坠",
	first: pattern_ud_up_2_down_1,
	later: [zuoerpang, p_ren, h_tu]
}
Characters[Characters.length] = {
	char: "妓",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_nv, h_ten, z_you]
}
Characters[Characters.length] = {
	char: "姊",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_nv, p_zi]
}
Characters[Characters.length] = {
	char: "妒",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_nv, d_hu]
}
Characters[Characters.length] = {
	char: "纬",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jiaosipang, h_wei]
}

/* 八画 */
Characters[Characters.length] = {
	char: "玫",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_wang, fanwenpang]
}
Characters[Characters.length] = {
	char: "卦",
	first: pattern_lr_left_2_right_1,
	later: [h_tu, h_tu, s_bu]
}
Characters[Characters.length] = {
	char: "坷",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_tu, h_ke]
}
Characters[Characters.length] = {
	char: "坯",
	first: pattern_lr_left_1_right_2,
	later: [h_tu, h_bu, heng]
}
Characters[Characters.length] = {
	char: "拓",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, h_stone]
}
Characters[Characters.length] = {
	char: "坪",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_tu, h_ping]
}
Characters[Characters.length] = {
	char: "坤",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_tu, s_shen]
}
Characters[Characters.length] = {
	char: "拄",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, d_zhu]
}
Characters[Characters.length] = {
	char: "拧",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, baogaitou, h_ding]
}
Characters[Characters.length] = {
	char: "拂",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, z_fu]
}
Characters[Characters.length] = {
	char: "拙",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, s_chu]
}
Characters[Characters.length] = {
	char: "拇",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, z_mu]
}
Characters[Characters.length] = {
	char: "拗",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, youzipang, z_li]
}
Characters[Characters.length] = {
	char: "茉",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caozitou, h_mo]
}
Characters[Characters.length] = {
	char: "昔",
	first: pattern_ud_up_1_down_1_up_big,
	later: [h_xi, s_ri]
}
Characters[Characters.length] = {
	char: "苛",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caozitou, h_ke]
}
Characters[Characters.length] = {
	char: "苫",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caozitou, s_zhan]
}
Characters[Characters.length] = {
	char: "苟",
	first: pattern_ud_up_1_down_2,
	later: [caozitou, p_ju]
}
Characters[Characters.length] = {
	char: "苞",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caozitou, baozitou, z_si]
}
Characters[Characters.length] = {
	char: "茁",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caozitou, s_chu]
}
Characters[Characters.length] = {
	char: "苔",
	first: pattern_ud_up_1_down_2,
	later: [caozitou, sigong, s_kou]
}
Characters[Characters.length] = {
	char: "枉",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, h_wang]
}
Characters[Characters.length] = {
	char: "枢",
	first: pattern_lr_left_1_right_2,
	later: [h_mu, jiangzikuang, cha]
}
Characters[Characters.length] = {
	char: "枚",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, fanwenpang]
}
Characters[Characters.length] = {
	char: "枫",
	first: pattern_lr_left_1_right_2,
	later: [h_mu, fengzitou, cha]
}
Characters[Characters.length] = {
	char: "杭",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, d_kang]
}
Characters[Characters.length] = {
	char: "郁",
	first: pattern_lr_left_1_right_1_left_big,
	later: [h_hengpie, s_yue, youerpang]
}
Characters[Characters.length] = {
	char: "矾",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_stone, p_fan]
}
Characters[Characters.length] = {
	char: "奈",
	first: pattern_ud_up_1_down_1_down_big,
	later: [h_da, h_shiren]
}
Characters[Characters.length] = {
	char: "奄",
	first: pattern_ud_up_1_down_1_down_big,
	later: [h_da, s_dian]
}
Characters[Characters.length] = {
	char: "殴",
	first: pattern_lr_left_2_right_2,
	later: [jiangzikuang, cha, p_ji, z_you]
}
Characters[Characters.length] = {
	char: "歧",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_zhi, h_ten, z_you]
}
Characters[Characters.length] = {
	char: "卓",
	first: pattern_ud_up_1_down_2,
	later: [shangzitou, s_ri, h_ten]
}
Characters[Characters.length] = {
	char: "昙",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_ri, h_yun]
}
Characters[Characters.length] = {
	char: "哎",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, caozitou, cha]
}
Characters[Characters.length] = {
	char: "咕",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, h_gu]
}
Characters[Characters.length] = {
	char: "呵",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, h_ke]
}
Characters[Characters.length] = {
	char: "咙",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, h_long]
}
Characters[Characters.length] = {
	char: "呻",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, s_shen]
}
Characters[Characters.length] = {
	char: "咒",
	first: pattern_ud_up_2_down_1,
	later: [s_kou, s_kou, p_ji]
}
Characters[Characters.length] = {
	char: "咆",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, baozitou, z_si]
}
Characters[Characters.length] = {
	char: "咖",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, z_li, s_kou]
}
Characters[Characters.length] = {
	char: "帕",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_jin, p_bai]
}
Characters[Characters.length] = {
	char: "账",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_bei, p_chang]
}
Characters[Characters.length] = {
	char: "贬",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_bei, pie, d_zhi]
}
Characters[Characters.length] = {
	char: "贮",
	first: pattern_lr_left_1_right_2,
	later: [s_bei, baogaitou, heng]
}
Characters[Characters.length] = {
	char: "氛",
	first: pattern_round_right_up,
	later: [p_qi, p_fen]
}
Characters[Characters.length] = {
	char: "秉",
	first: pattern_single,
	later: [pie, heng, hengzheshu, heng, heng, shu, pie, na]
}
Characters[Characters.length] = {
	char: "岳",
	first: pattern_ud_up_1_down_1_up_big,
	later: [p_qiu, s_shan]
}
Characters[Characters.length] = {
	char: "侠",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, h_jia]
}
Characters[Characters.length] = {
	char: "侥",
	first: pattern_lr_left_1_right_2,
	later: [danrenpang, h_gewudian, h_wuzidi]
}
Characters[Characters.length] = {
	char: "侣",
	first: pattern_lr_left_1_right_2,
	later: [danrenpang, s_kou, s_kou]
}
Characters[Characters.length] = {
	char: "侈",
	first: pattern_lr_left_1_right_2,
	later: [danrenpang, p_xi, p_xi]
}
Characters[Characters.length] = {
	char: "卑",
	first: pattern_ud_up_1_down_1_up_big,
	later: [p_beizitou, h_ten]
}
Characters[Characters.length] = {
	char: "刽",
	first: pattern_lr_left_2_right_1,
	later: [p_ren, h_yun, lidaopang]
}
Characters[Characters.length] = {
	char: "刹",
	first: pattern_lr_left_2_right_1,
	later: [cha, h_mugou, lidaopang]
}
Characters[Characters.length] = {
	char: "肴",
	first: pattern_ud_up_1_down_2,
	later: [cha, h_hengpie, s_yue]
}
Characters[Characters.length] = {
	char: "觅",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caizitou, s_jian]
}
Characters[Characters.length] = {
	char: "忿",
	first: pattern_ud_up_1_down_1_up_big,
	later: [p_fen, d_xin]
}
Characters[Characters.length] = {
	char: "瓮",
	first: pattern_ud_up_1_down_1_down_big,
	later: [p_eight, sigong, h_wa]
}
Characters[Characters.length] = {
	char: "肮",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_yue, d_kang]
}
Characters[Characters.length] = {
	char: "肪",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_yue, d_fang]
}
Characters[Characters.length] = {
	char: "狞",
	first: pattern_lr_left_1_right_2,
	later: [fanquanpang, baogaitou, h_ding]
}
Characters[Characters.length] = {
	char: "庞",
	first: pattern_round_left_up,
	later: [d_guang, h_long]
}
Characters[Characters.length] = {
	char: "疟",
	first: pattern_round_left_up,
	later: [bingzitou, h_nue]
}
Characters[Characters.length] = {
	char: "疙",
	first: pattern_round_left_up,
	later: [bingzitou, pieheng, yi]
}
Characters[Characters.length] = {
	char: "疚",
	first: pattern_round_left_up,
	later: [bingzitou, p_jiu]
}
Characters[Characters.length] = {
	char: "卒",
	first: pattern_ud_up_middle_down,
	later: [liuzitou, p_ren, p_ren, h_ten]
}
Characters[Characters.length] = {
	char: "氓",
	first: pattern_lr_left_1_right_1_right_big,
	later: [d_wang, z_min]
}
Characters[Characters.length] = {
	char: "炬",
	first: pattern_lr_left_1_right_1_right_big,
	later: [huozipang, h_ju]
}
Characters[Characters.length] = {
	char: "沽",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, h_gu]
}
Characters[Characters.length] = {
	char: "沮",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, s_qie]
}
Characters[Characters.length] = {
	char: "泣",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, d_li]
}
Characters[Characters.length] = {
	char: "泞",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, baogaitou, h_ding]
}
Characters[Characters.length] = {
	char: "泌",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, d_xin, pie]
}
Characters[Characters.length] = {
	char: "沼",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, z_dao, s_kou]
}
Characters[Characters.length] = {
	char: "怔",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shuxinpang, h_zheng]
}
Characters[Characters.length] = {
	char: "怯",
	first: pattern_lr_left_1_right_2,
	later: [shuxinpang, h_tu, sigong]
}
Characters[Characters.length] = {
	char: "宠",
	first: pattern_ud_up_1_down_1_down_big,
	later: [baogaitou, h_long]
}
Characters[Characters.length] = {
	char: "宛",
	first: pattern_ud_up_1_down_2,
	later: [baogaitou, p_xi, cangzidi]
}
Characters[Characters.length] = {
	char: "衩",
	first: pattern_lr_left_1_right_1_right_big,
	later: [buyipang, z_you, dian]
}
Characters[Characters.length] = {
	char: "祈",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shizipang, p_jin]
}
Characters[Characters.length] = {
	char: "诡",
	first: pattern_lr_left_1_right_many,
	later: [yanzipang, weizitou, h_chang, cangzidi]
}
Characters[Characters.length] = {
	char: "帚",
	first: pattern_ud_up_middle_down,
	later: [xunzitou, tubaogai, s_jin]
}
Characters[Characters.length] = {
	char: "屉",
	first: pattern_round_left_up,
	later: [z_shizitou, h_shijie]
}
Characters[Characters.length] = {
	char: "弧",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_gong, p_gua]
}
Characters[Characters.length] = {
	char: "弥",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_gong, p_erya]
}
Characters[Characters.length] = {
	char: "陋",
	first: pattern_lr_left_1_right_2,
	later: [zuoerpang, h_bing, shuzheheng]
}
Characters[Characters.length] = {
	char: "陌",
	first: pattern_lr_left_1_right_1_right_big,
	later: [zuoerpang, heng, p_bai]
}
Characters[Characters.length] = {
	char: "函",
	first: pattern_round_down,
	later: [z_le, liangdianshui, piedian, xiongzikuang]
}
Characters[Characters.length] = {
	char: "姆",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_nv, z_mu]
}
Characters[Characters.length] = {
	char: "虱",
	first: pattern_round_right_up,
	later: [feizikuang, pie, s_chong]
}
Characters[Characters.length] = {
	char: "叁",
	first: pattern_ud_up_middle_down,
	later: [sigong, h_da, h_three]
}
Characters[Characters.length] = {
	char: "绅",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jiaosipang, s_shen]
}
Characters[Characters.length] = {
	char: "驹",
	first: pattern_lr_left_1_right_2,
	later: [z_ma, p_ju]
}
Characters[Characters.length] = {
	char: "绊",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jiaosipang, d_ban]
}
Characters[Characters.length] = {
	char: "绎",
	first: pattern_lr_left_1_right_2,
	later: [jiaosipang, z_you, h_fengzidi]
}

/* 九画 */
Characters[Characters.length] = {
	char: "契",
	first: pattern_ud_up_2_down_1,
	later: [h_feng, z_dao, h_da]
}
Characters[Characters.length] = {
	char: "贰",
	first: pattern_round_right_up,
	later: [shizikuang, h_two, s_bei]
}
Characters[Characters.length] = {
	char: "玷",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_wang, s_zhan]
}
Characters[Characters.length] = {
	char: "玲",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_wang, p_ling]
}
Characters[Characters.length] = {
	char: "珊",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_wang, p_ce, heng]
}
Characters[Characters.length] = {
	char: "拭",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, shizikuang, h_gong]
}
Characters[Characters.length] = {
	char: "拷",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, laozitou, h_qiaoziyou]
}
Characters[Characters.length] = {
	char: "拱",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, h_xizitou, p_eight]
}
Characters[Characters.length] = {
	char: "挟",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, h_jia]
}
Characters[Characters.length] = {
	char: "垢",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_tu, fanzipang, heng, s_kou]
}
Characters[Characters.length] = {
	char: "垛",
	first: pattern_lr_left_1_right_2,
	later: [h_tu, p_ji, h_mu]
}
Characters[Characters.length] = {
	char: "拯",
	first: pattern_lr_left_1_right_many,
	later: [tishoupang, z_cheng]
}
Characters[Characters.length] = {
	char: "荆",
	first: pattern_lr_left_2_right_1,
	later: [caozitou, h_kai, lidaopang]
}
Characters[Characters.length] = {
	char: "茸",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caozitou, h_erduo]
}
Characters[Characters.length] = {
	char: "茬",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caozitou, h_zaizitou, h_tu]
}
Characters[Characters.length] = {
	char: "荚",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caozitou, h_jia]
}
Characters[Characters.length] = {
	char: "茵",
	first: pattern_ud_up_1_down_2,
	later: [caozitou, s_kou, h_da]
}
Characters[Characters.length] = {
	char: "茴",
	first: pattern_ud_up_1_down_2,
	later: [caozitou, s_kou, s_kou]
}
Characters[Characters.length] = {
	char: "荞",
	first: pattern_ud_up_1_down_2,
	later: [caozitou, p_yao, pieshu]
}
Characters[Characters.length] = {
	char: "荠",
	first: pattern_ud_up_1_down_2,
	later: [caozitou, p_ren, pieshu]
}
Characters[Characters.length] = {
	char: "荤",
	first: pattern_ud_up_1_down_2,
	later: [caozitou, tubaogai, h_che]
}
Characters[Characters.length] = {
	char: "荧",
	first: pattern_ud_up_middle_down,
	later: [caozitou, tubaogai, huozipang]
}
Characters[Characters.length] = {
	char: "荔",
	first: pattern_ud_up_1_down_many,
	later: [caozitou, z_li, z_li, z_li]
}
Characters[Characters.length] = {
	char: "栈",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, h_zhan]
}
Characters[Characters.length] = {
	char: "柑",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, h_ganku]
}
Characters[Characters.length] = {
	char: "栅",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, p_ce, heng]
}
Characters[Characters.length] = {
	char: "柠",
	first: pattern_lr_left_1_right_2,
	later: [h_mu, baogaitou, h_ding]
}
Characters[Characters.length] = {
	char: "枷",
	first: pattern_lr_left_1_right_2,
	later: [h_mu, z_li, s_kou]
}
Characters[Characters.length] = {
	char: "勃",
	first: pattern_lr_left_many_right_1,
	later: [h_ten, tubaogai, z_zi, z_li]
}
Characters[Characters.length] = {
	char: "柬",
	first: pattern_single,
	later: [heng, shu, hengzheshu, dian, pie, heng, shu, pie, na]
}
Characters[Characters.length] = {
	char: "砂",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_stone, s_shao]
}
Characters[Characters.length] = {
	char: "泵",
	first: pattern_ud_up_1_down_1_down_big,
	later: [h_stone, z_shui]
}
Characters[Characters.length] = {
	char: "砚",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_stone, s_jian]
}
Characters[Characters.length] = {
	char: "鸥",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jiangzikuang, p_niaowuheng, heng]
}
Characters[Characters.length] = {
	char: "轴",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_che, s_you]
}
Characters[Characters.length] = {
	char: "韭",
	first: pattern_ud_up_2_down_1,
	later: [s_fei, heng]
}
Characters[Characters.length] = {
	char: "虐",
	first: pattern_round_left_up,
	later: [huzitou, h_nue]
}
Characters[Characters.length] = {
	char: "昧",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_ri, h_weilai]
}
Characters[Characters.length] = {
	char: "盹",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_mu, h_tun]
}
Characters[Characters.length] = {
	char: "咧",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, h_dai, lidaopang]
}
Characters[Characters.length] = {
	char: "昵",
	first: pattern_lr_left_1_right_2,
	later: [s_ri, z_shizitou, p_bi]
}
Characters[Characters.length] = {
	char: "昭",
	first: pattern_lr_left_1_right_2,
	later: [s_ri, z_dao, s_kou]
}
Characters[Characters.length] = {
	char: "盅",
	first: pattern_ud_up_1_down_1_down_big,
	later: [s_zhong, minzidi]
}
Characters[Characters.length] = {
	char: "勋",
	first: pattern_lr_left_2_right_1,
	later: [s_kou, s_bei, z_li]
}
Characters[Characters.length] = {
	char: "哆",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, p_xi, p_xi]
}
Characters[Characters.length] = {
	char: "咪",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, d_mi]
}
Characters[Characters.length] = {
	char: "哟",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, jiaosipang, p_shao]
}
Characters[Characters.length] = {
	char: "幽",
	first: pattern_round_down,
	later: [shu, youzipang, youzipang, xiongzikuang]
}
Characters[Characters.length] = {
	char: "钙",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jinzipang, h_gai]
}
Characters[Characters.length] = {
	char: "钝",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jinzipang, h_tun]
}
Characters[Characters.length] = {
	char: "钠",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jinzipang, s_nei]
}
Characters[Characters.length] = {
	char: "钦",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jinzipang, p_qian]
}
Characters[Characters.length] = {
	char: "钧",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jinzipang, p_yun]
}
Characters[Characters.length] = {
	char: "钮",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jinzipang, z_chou]
}
Characters[Characters.length] = {
	char: "毡",
	first: pattern_round_left_down,
	later: [p_mao, s_zhan]
}
Characters[Characters.length] = {
	char: "氢",
	first: pattern_round_right_up,
	later: [p_qi, z_jingziyou]
}
Characters[Characters.length] = {
	char: "秕",
	first: pattern_lr_left_1_right_2,
	later: [p_he, p_bi, p_bi]
}
Characters[Characters.length] = {
	char: "俏",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, guangzitou, s_yue]
}
Characters[Characters.length] = {
	char: "俄",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, p_wo]
}
Characters[Characters.length] = {
	char: "俐",
	first: pattern_lr_left_1_right_2,
	later: [danrenpang, p_he, lidaopang]
}
Characters[Characters.length] = {
	char: "侯",
	first: pattern_lr_left_1_right_2,
	later: [danrenpang, z_houzitou, p_shi]
}
Characters[Characters.length] = {
	char: "徊",
	first: pattern_lr_left_1_right_2,
	later: [shuangrenpang, s_kou, s_kou]
}
Characters[Characters.length] = {
	char: "衍",
	first: pattern_lr_left_middle_right,
	later: [shuangrenpang, sandianshui, h_xingziyou]
}
Characters[Characters.length] = {
	char: "胚",
	first: pattern_lr_left_1_right_2,
	later: [p_yue, h_bu, heng]
}
Characters[Characters.length] = {
	char: "胧",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_yue, h_long]
}
Characters[Characters.length] = {
	char: "胎",
	first: pattern_lr_left_1_right_2,
	later: [p_yue, sigong, s_kou]
}
Characters[Characters.length] = {
	char: "狰",
	first: pattern_lr_left_1_right_1_right_big,
	later: [fanquanpang, p_zheng]
}
Characters[Characters.length] = {
	char: "饵",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shizipang, h_erduo]
}
Characters[Characters.length] = {
	char: "峦",
	first: pattern_ud_up_1_down_1_up_big,
	later: [d_bianzitou, s_shan]
}
Characters[Characters.length] = {
	char: "奕",
	first: pattern_ud_up_1_down_1_up_big,
	later: [d_yiye, h_da]
}
Characters[Characters.length] = {
	char: "咨",
	first: pattern_ud_up_2_down_1,
	later: [liangdianshui, p_qian, s_kou]
}
Characters[Characters.length] = {
	char: "飒",
	first: pattern_lr_left_1_right_2,
	later: [d_li, fengzitou, cha]
}
Characters[Characters.length] = {
	char: "闺",
	first: pattern_round_up,
	later: [d_men, h_tu, h_tu]
}
Characters[Characters.length] = {
	char: "闽",
	first: pattern_round_up,
	later: [d_men, s_chong]
}
Characters[Characters.length] = {
	char: "籽",
	first: pattern_lr_left_1_right_1_left_big,
	later: [d_mi, z_zi]
}
Characters[Characters.length] = {
	char: "娄",
	first: pattern_ud_up_1_down_1_up_big,
	later: [d_mi, z_nv]
}
Characters[Characters.length] = {
	char: "烁",
	first: pattern_lr_left_1_right_1_right_big,
	later: [huozipang, p_le]
}
Characters[Characters.length] = {
	char: "炫",
	first: pattern_lr_left_1_right_1_right_big,
	later: [huozipang, liuzitou, youzipang]
}
Characters[Characters.length] = {
	char: "洼",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, h_tu, h_tu]
}
Characters[Characters.length] = {
	char: "柒",
	first: pattern_ud_up_2_down_1,
	later: [sandianshui, p_bi, h_mu]
}
Characters[Characters.length] = {
	char: "涎",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, p_yanzili, jianzidi]
}
Characters[Characters.length] = {
	char: "洛",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, zhewen, s_kou]
}
Characters[Characters.length] = {
	char: "恃",
	first: pattern_lr_left_1_right_2,
	later: [shuxinpang, h_tu, h_cun]
}
Characters[Characters.length] = {
	char: "恍",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shuxinpang, guangzitou, h_wuzidi]
}
Characters[Characters.length] = {
	char: "恬",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shuxinpang, p_she]
}
Characters[Characters.length] = {
	char: "恤",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shuxinpang, pie, minzidi]
}
Characters[Characters.length] = {
	char: "宦",
	first: pattern_ud_up_1_down_1_down_big,
	later: [baogaitou, h_chen]
}
Characters[Characters.length] = {
	char: "诫",
	first: pattern_lr_left_1_right_2,
	later: [yanzipang, h_ge, h_piecao]
}
Characters[Characters.length] = {
	char: "诬",
	first: pattern_lr_left_1_right_1_right_big,
	later: [yanzipang, h_wu]
}
Characters[Characters.length] = {
	char: "祠",
	first: pattern_lr_left_1_right_2,
	later: [shizipang, hengzheshugou, heng, s_kou]
}
Characters[Characters.length] = {
	char: "诲",
	first: pattern_lr_left_1_right_2,
	later: [yanzipang, pieheng, z_mu]
}
Characters[Characters.length] = {
	char: "屏",
	first: pattern_round_left_up,
	later: [z_shizitou, lanzitou, h_kai]
}
Characters[Characters.length] = {
	char: "屎",
	first: pattern_round_left_up,
	later: [z_shizitou, d_mi]
}
Characters[Characters.length] = {
	char: "逊",
	first: pattern_round_left_down,
	later: [z_zi, z_xiao, zouzhidi]
}
Characters[Characters.length] = {
	char: "陨",
	first: pattern_lr_left_1_right_2,
	later: [zuoerpang, s_kou, s_bei]
}
Characters[Characters.length] = {
	char: "姚",
	first: pattern_lr_left_1_right_2,
	later: [z_nv, p_zhaotou]
}
Characters[Characters.length] = {
	char: "娜",
	first: pattern_lr_left_1_right_2,
	later: [z_nv, z_nazizuo, youerpang]
}
Characters[Characters.length] = {
	char: "蚤",
	first: pattern_ud_up_1_down_1_down_big,
	later: [z_you, dian, s_chong]
}
Characters[Characters.length] = {
	char: "骇",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_ma, d_hai]
}

/* 十画 */
Characters[Characters.length] = {
	char: "耘",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_gengzizuo, h_yun]
}
Characters[Characters.length] = {
	char: "耙",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_gengzizuo, z_ba]
}
Characters[Characters.length] = {
	char: "秦",
	first: pattern_ud_up_1_down_1_up_big,
	later: [h_fengzitou, p_he]
}
Characters[Characters.length] = {
	char: "匿",
	first: pattern_round_left,
	later: [jiangzikuang, caozitou, h_hengpie, s_kou]
}
Characters[Characters.length] = {
	char: "埂",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_tu, h_geng]
}
Characters[Characters.length] = {
	char: "捂",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, h_five, s_kou]
}
Characters[Characters.length] = {
	char: "捍",
	first: pattern_lr_left_1_right_1_left_big,
	later: [tishoupang, s_ri, h_gan]
}
Characters[Characters.length] = {
	char: "袁",
	first: pattern_ud_up_middle_down,
	later: [h_tu, s_kou, p_yizidi]
}
Characters[Characters.length] = {
	char: "捌",
	first: pattern_lr_left_1_right_many,
	later: [tishoupang, s_kou, z_li, lidaopang]
}
Characters[Characters.length] = {
	char: "挫",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, p_ren, p_ren, h_tu]
}
Characters[Characters.length] = {
	char: "挚",
	first: pattern_ud_up_2_down_1,
	later: [tishoupang, p_wan, p_shou]
}
Characters[Characters.length] = {
	char: "捣",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, p_niaowuheng, s_shan]
}
Characters[Characters.length] = {
	char: "捅",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, z_yongzitou, s_yong]
}
Characters[Characters.length] = {
	char: "埃",
	first: pattern_lr_left_1_right_2,
	later: [h_tu, sigong, p_shi]
}
Characters[Characters.length] = {
	char: "耿",
	first: pattern_lr_left_1_right_1_left_big,
	later: [h_erduo, huozipang]
}
Characters[Characters.length] = {
	char: "聂",
	first: pattern_ud_up_1_down_2,
	later: [h_erduo, z_you, z_you]
}
Characters[Characters.length] = {
	char: "荸",
	first: pattern_ud_up_middle_down,
	later: [caozitou, h_ten, baogaitou, z_zi]
}
Characters[Characters.length] = {
	char: "莽",
	first: pattern_ud_up_middle_down,
	later: [caozitou, h_quan, h_piecao]
}
Characters[Characters.length] = {
	char: "莱",
	first: pattern_ud_up_1_down_2,
	later: [caozitou, caizitou, h_mu]
}
Characters[Characters.length] = {
	char: "莉",
	first: pattern_ud_up_1_down_2,
	later: [caozitou, p_he, lidaopang]
}
Characters[Characters.length] = {
	char: "莹",
	first: pattern_ud_up_middle_down,
	later: [caozitou, tubaogai, h_yu]
}
Characters[Characters.length] = {
	char: "莺",
	first: pattern_ud_up_middle_down,
	later: [caozitou, tubaogai, p_niaowuheng, heng]
}
Characters[Characters.length] = {
	char: "梆",
	first: pattern_lr_left_1_right_2,
	later: [h_mu, h_piefeng, youerpang]
}
Characters[Characters.length] = {
	char: "栖",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, h_xi]
}
Characters[Characters.length] = {
	char: "桦",
	first: pattern_lr_left_1_right_many,
	later: [h_mu, danrenpang, p_bi, h_ten]
}
Characters[Characters.length] = {
	char: "栓",
	first: pattern_lr_left_1_right_2,
	later: [h_mu, p_ren, h_wang]
}
Characters[Characters.length] = {
	char: "桅",
	first: pattern_lr_left_1_right_many,
	later: [h_mu, weizitou, h_chang, cangzidi]
}
Characters[Characters.length] = {
	char: "桩",
	first: pattern_lr_left_1_right_2,
	later: [h_mu, d_guang, h_tu]
}
Characters[Characters.length] = {
	char: "贾",
	first: pattern_ud_up_1_down_1_up_big,
	later: [h_xiwuzhe, s_bei]
}
Characters[Characters.length] = {
	char: "酌",
	first: pattern_lr_left_1_right_1_left_big,
	later: [h_youxin, p_shao]
}
Characters[Characters.length] = {
	char: "砸",
	first: pattern_lr_left_1_right_2,
	later: [h_stone, jiangzikuang, s_jin]
}
Characters[Characters.length] = {
	char: "砰",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_stone, h_ping]
}
Characters[Characters.length] = {
	char: "砾",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_stone, p_le]
}
Characters[Characters.length] = {
	char: "殉",
	first: pattern_lr_left_1_right_2,
	later: [h_dai, baozitou, s_ri]
}
Characters[Characters.length] = {
	char: "逞",
	first: pattern_round_left_down,
	later: [s_kou, h_wang, zouzhidi]
}
Characters[Characters.length] = {
	char: "哮",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, laozitou, z_zi]
}
Characters[Characters.length] = {
	char: "唠",
	first: pattern_lr_left_1_right_many,
	later: [s_kou, caozitou, tubaogai, z_li]
}
Characters[Characters.length] = {
	char: "哺",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, h_fudu]
}
Characters[Characters.length] = {
	char: "剔",
	first: pattern_lr_left_2_right_1,
	later: [s_ri, p_wuyou, lidaopang]
}
Characters[Characters.length] = {
	char: "蚌",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_chong, h_feng]
}
Characters[Characters.length] = {
	char: "蚜",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_chong, h_ya]
}
Characters[Characters.length] = {
	char: "畔",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_tian, d_ban]
}
Characters[Characters.length] = {
	char: "蚣",
	first: pattern_lr_left_1_right_2,
	later: [s_chong, p_eight, sigong]
}
Characters[Characters.length] = {
	char: "蚪",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_chong, d_dou]
}
Characters[Characters.length] = {
	char: "蚓",
	first: pattern_lr_left_1_right_2,
	later: [s_chong, z_gong, shu]
}
Characters[Characters.length] = {
	char: "哩",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, s_li]
}
Characters[Characters.length] = {
	char: "圃",
	first: pattern_round_whole,
	later: [s_kou, h_fudu]
}
Characters[Characters.length] = {
	char: "鸯",
	first: pattern_ud_up_1_down_1_down_big,
	later: [s_yang, p_niaowuheng, heng]
}
Characters[Characters.length] = {
	char: "唁",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, d_yan]
}
Characters[Characters.length] = {
	char: "哼",
	first: pattern_lr_left_1_right_many,
	later: [s_kou, liuzitou, s_kou, z_le]
}
Characters[Characters.length] = {
	char: "唆",
	first: pattern_lr_left_1_right_many,
	later: [s_kou, sigong, p_eight, zhewen]
}
Characters[Characters.length] = {
	char: "峭",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_shan, guangzitou, s_yue]
}
Characters[Characters.length] = {
	char: "唧",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, z_jizizuo, danerpang]
}
Characters[Characters.length] = {
	char: "峻",
	first: pattern_lr_left_1_right_many,
	later: [s_shan, sigong, p_eight, zhewen]
}
Characters[Characters.length] = {
	char: "赂",
	first: pattern_lr_left_1_right_2,
	later: [s_bei, zhewen, s_kou]
}
Characters[Characters.length] = {
	char: "赃",
	first: pattern_lr_left_1_right_2,
	later: [s_bei, d_guang, h_tu]
}
Characters[Characters.length] = {
	char: "钾",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jinzipang, s_jia]
}
Characters[Characters.length] = {
	char: "铆",
	first: pattern_lr_left_1_right_2,
	later: [jinzipang, p_maozizuo, danerpang]
}
Characters[Characters.length] = {
	char: "氨",
	first: pattern_round_right_up,
	later: [p_qi, baogaitou, z_nv]
}
Characters[Characters.length] = {
	char: "秫",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_he, h_shu]
}
Characters[Characters.length] = {
	char: "笆",
	first: pattern_ud_up_2_down_1,
	later: [zhuzitou, z_ba]
}
Characters[Characters.length] = {
	char: "俺",
	first: pattern_lr_left_1_right_2,
	later: [danrenpang, h_da, s_dian]
}
Characters[Characters.length] = {
	char: "赁",
	first: pattern_ud_up_2_down_1,
	later: [danrenpang, p_rengui, s_bei]
}
Characters[Characters.length] = {
	char: "倔",
	first: pattern_lr_left_1_right_2,
	later: [danrenpang, z_shizitou, s_chu]
}
Characters[Characters.length] = {
	char: "殷",
	first: pattern_lr_left_many_right_many,
	later: [p_yinzizuo, p_ji, z_you]
}
Characters[Characters.length] = {
	char: "耸",
	first: pattern_ud_up_2_down_1,
	later: [p_ren, p_ren, h_erduo]
}
Characters[Characters.length] = {
	char: "舀",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caizitou, p_jiu]
}
Characters[Characters.length] = {
	char: "豺",
	first: pattern_lr_left_1_right_1_left_big,
	later: [baozipang, h_cai]
}
Characters[Characters.length] = {
	char: "豹",
	first: pattern_lr_left_1_right_1_left_big,
	later: [baozipang, p_shao]
}
Characters[Characters.length] = {
	char: "颁",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_fen, h_ye]
}
Characters[Characters.length] = {
	char: "胯",
	first: pattern_lr_left_1_right_2,
	later: [p_yue, h_da, h_kui]
}
Characters[Characters.length] = {
	char: "胰",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_yue, h_yi]
}
Characters[Characters.length] = {
	char: "脐",
	first: pattern_lr_left_1_right_2,
	later: [p_yue, d_wen, pieshu]
}
Characters[Characters.length] = {
	char: "脓",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_yue, p_nong]
}
Characters[Characters.length] = {
	char: "逛",
	first: pattern_round_left_down,
	later: [fanquanpang, h_wang, zouzhidi]
}
Characters[Characters.length] = {
	char: "卿",
	first: pattern_lr_left_middle_right,
	later: [p_maozizuo, z_jizizuo, danerpang]
}
Characters[Characters.length] = {
	char: "鸵",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_niaowuheng, heng, baogaitou, p_bi]
}
Characters[Characters.length] = {
	char: "鸳",
	first: pattern_ud_up_2_down_1,
	later: [p_xi, cangzidi, p_niaowuheng, heng]
}
Characters[Characters.length] = {
	char: "馁",
	first: pattern_lr_left_1_right_2,
	later: [shichi, caizitou, z_nv]
}
Characters[Characters.length] = {
	char: "凌",
	first: pattern_lr_left_1_right_many,
	later: [liangdianshui, h_tu, p_eight, zhewen]
}
Characters[Characters.length] = {
	char: "凄",
	first: pattern_lr_left_1_right_2,
	later: [liangdianshui, h_shixue, z_nv]
}
Characters[Characters.length] = {
	char: "衷",
	first: pattern_ud_up_middle_down,
	later: [liuzitou, s_zhong, p_yizidi]
}
Characters[Characters.length] = {
	char: "郭",
	first: pattern_lr_left_many_right_1,
	later: [liuzitou, s_kou, z_zi, youerpang]
}
Characters[Characters.length] = {
	char: "斋",
	first: pattern_ud_up_1_down_1_down_big,
	later: [d_wen, h_erqie]
}
Characters[Characters.length] = {
	char: "疹",
	first: pattern_round_left_up,
	later: [bingzitou, p_ren, sanpie]
}
Characters[Characters.length] = {
	char: "紊",
	first: pattern_ud_up_1_down_2,
	later: [d_wen, youzipang, z_xiao]
}
Characters[Characters.length] = {
	char: "瓷",
	first: pattern_ud_up_2_down_1,
	later: [liangdianshui, p_qian, h_wa]
}
Characters[Characters.length] = {
	char: "羔",
	first: pattern_ud_up_1_down_1_up_big,
	later: [yangzitou, sidiandi]
}
Characters[Characters.length] = {
	char: "烙",
	first: pattern_lr_left_1_right_2,
	later: [huozipang, zhewen, s_kou]
}
Characters[Characters.length] = {
	char: "浦",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, h_fudu]
}
Characters[Characters.length] = {
	char: "涡",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, s_kou, s_nei]
}
Characters[Characters.length] = {
	char: "涣",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, p_huan]
}
Characters[Characters.length] = {
	char: "涤",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, zhewen, h_mugou]
}
Characters[Characters.length] = {
	char: "涧",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, d_men, s_ri]
}
Characters[Characters.length] = {
	char: "涕",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, lanzitou, z_dizidi]
}
Characters[Characters.length] = {
	char: "涩",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, z_dao, dian, s_zhi]
}
Characters[Characters.length] = {
	char: "悍",
	first: pattern_lr_left_1_right_2,
	later: [shuxinpang, s_ri, h_gan]
}
Characters[Characters.length] = {
	char: "悯",
	first: pattern_lr_left_1_right_2,
	later: [shuxinpang, d_men, d_wen]
}
Characters[Characters.length] = {
	char: "窍",
	first: pattern_ud_up_2_down_2,
	later: [xuezitou, h_gong, h_qiaoziyou]
}
Characters[Characters.length] = {
	char: "诺",
	first: pattern_lr_left_1_right_2,
	later: [yanzipang, caozitou, h_hengpie, s_kou]
}
Characters[Characters.length] = {
	char: "诽",
	first: pattern_lr_left_1_right_2,
	later: [yanzipang, s_fei]
}
Characters[Characters.length] = {
	char: "袒",
	first: pattern_lr_left_1_right_2,
	later: [buyipang, s_ri, heng]
}
Characters[Characters.length] = {
	char: "谆",
	first: pattern_lr_left_1_right_many,
	later: [yanzipang, liuzitou, s_kou, z_zi]
}
Characters[Characters.length] = {
	char: "祟",
	first: pattern_ud_up_1_down_1_up_big,
	later: [s_chu, h_shiren]
}
Characters[Characters.length] = {
	char: "恕",
	first: pattern_ud_up_2_down_1,
	later: [z_nv, s_kou, d_xin]
}
Characters[Characters.length] = {
	char: "娩",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_nv, p_mian]
}
Characters[Characters.length] = {
	char: "骏",
	first: pattern_lr_left_1_right_many,
	later: [z_ma, sigong, p_eight, zhewen]
}

/* 十一画 */
Characters[Characters.length] = {
	char: "琐",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_wang, guangzitou, s_bei]
}
Characters[Characters.length] = {
	char: "麸",
	first: pattern_lr_left_2_right_1,
	later: [h_qingzitou, zhewen, h_fu]
}
Characters[Characters.length] = {
	char: "琉",
	first: pattern_lr_left_1_right_2,
	later: [h_wang, d_chongzitou, p_liuzidi]
}
Characters[Characters.length] = {
	char: "琅",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_wang, d_liang]
}
Characters[Characters.length] = {
	char: "措",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, h_xizitou, s_ri]
}
Characters[Characters.length] = {
	char: "捺",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, h_da, h_shiren]
}
Characters[Characters.length] = {
	char: "捶",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, p_chui]
}
Characters[Characters.length] = {
	char: "赦",
	first: pattern_lr_left_1_right_1_left_big,
	later: [h_chi, fanwenpang]
}
Characters[Characters.length] = {
	char: "埠",
	first: pattern_lr_left_1_right_2,
	later: [h_tu, pie, s_guanzidi, h_ten]
}
Characters[Characters.length] = {
	char: "捻",
	first: pattern_lr_left_1_right_many,
	later: [tishoupang, p_jintian, d_xin]
}
Characters[Characters.length] = {
	char: "掐",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, weizitou, p_jiu]
}
Characters[Characters.length] = {
	char: "掂",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, d_guang, s_zhan]
}
Characters[Characters.length] = {
	char: "掖",
	first: pattern_lr_left_1_right_many,
	later: [tishoupang, liuzitou, danrenpang, p_yedian]
}
Characters[Characters.length] = {
	char: "掷",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, lanzitou, h_tian, youerpang]
}
Characters[Characters.length] = {
	char: "掸",
	first: pattern_lr_left_1_right_1_right_big,
	later: [tishoupang, lanzitou, s_danzidi]
}
Characters[Characters.length] = {
	char: "掺",
	first: pattern_lr_left_1_right_many,
	later: [tishoupang, sigong, h_da, sanpie]
}
Characters[Characters.length] = {
	char: "勘",
	first: pattern_lr_left_many_right_1,
	later: [h_qizitou, p_eight, shuzheheng, z_li]
}
Characters[Characters.length] = {
	char: "聊",
	first: pattern_lr_left_1_right_2,
	later: [h_erduo, p_maozizuo, danerpang]
}
Characters[Characters.length] = {
	char: "娶",
	first: pattern_ud_up_2_down_1,
	later: [h_erduo, z_you, z_nv]
}
Characters[Characters.length] = {
	char: "菱",
	first: pattern_ud_up_1_down_many,
	later: [caozitou, h_tu, p_eight, zhewen]
}
Characters[Characters.length] = {
	char: "菲",
	first: pattern_ud_up_1_down_2,
	later: [caozitou, s_fei]
}
Characters[Characters.length] = {
	char: "萎",
	first: pattern_ud_up_1_down_2,
	later: [caozitou, p_he, z_nv]
}
Characters[Characters.length] = {
	char: "菩",
	first: pattern_ud_up_1_down_2,
	later: [caozitou, d_li, s_kou]
}
Characters[Characters.length] = {
	char: "萤",
	first: pattern_ud_up_middle_down,
	later: [caozitou, tubaogai, s_chong]
}
Characters[Characters.length] = {
	char: "乾",
	first: pattern_lr_left_many_right_many,
	later: [h_ten, s_ri, h_ten, pieheng, yi]
}
Characters[Characters.length] = {
	char: "萧",
	first: pattern_ud_up_1_down_1_down_big,
	later: [caozitou, z_shu]
}
Characters[Characters.length] = {
	char: "萨",
	first: pattern_ud_up_1_down_2,
	later: [caozitou, zuoerpang, d_chan]
}
Characters[Characters.length] = {
	char: "菇",
	first: pattern_lr_left_1_right_2,
	later: [caozitou, z_nv, h_gu]
}
Characters[Characters.length] = {
	char: "彬",
	first: pattern_lr_left_middle_right,
	later: [h_mu, h_mu, sanpie]
}
Characters[Characters.length] = {
	char: "梗",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, h_geng]
}
Characters[Characters.length] = {
	char: "梧",
	first: pattern_lr_left_1_right_2,
	later: [h_mu, h_five, s_kou]
}
Characters[Characters.length] = {
	char: "梭",
	first: pattern_lr_left_1_right_many,
	later: [h_mu, sigong, p_eight, zhewen]
}
Characters[Characters.length] = {
	char: "曹",
	first: pattern_ud_up_1_down_1_up_big,
	later: [h_caozitou, s_ri]
}
Characters[Characters.length] = {
	char: "酝",
	first: pattern_lr_left_1_right_1_left_big,
	later: [h_youxin, h_yun]
}
Characters[Characters.length] = {
	char: "酗",
	first: pattern_lr_left_1_right_2,
	later: [h_youxin, cha, xiongzikuang]
}
Characters[Characters.length] = {
	char: "厢",
	first: pattern_round_left_up,
	later: [h_chang, h_mu, s_mu]
}
Characters[Characters.length] = {
	char: "硅",
	first: pattern_lr_left_1_right_2,
	later: [h_stone, h_tu, h_tu]
}
Characters[Characters.length] = {
	char: "硕",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_stone, h_ye]
}
Characters[Characters.length] = {
	char: "奢",
	first: pattern_ud_up_1_down_2,
	later: [h_da, laozitou, s_ri]
}
Characters[Characters.length] = {
	char: "盔",
	first: pattern_ud_up_2_down_1,
	later: [h_hengpie, huozipang, minzidi]
}
Characters[Characters.length] = {
	char: "匾",
	first: pattern_round_left,
	later: [jiangzikuang, d_hu, s_bianzili]
}
Characters[Characters.length] = {
	char: "颅",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shangzitou, z_shizitou, h_ye]
}
Characters[Characters.length] = {
	char: "彪",
	first: pattern_round_left_down,
	later: [huzitou, p_ji, sanpie]
}
Characters[Characters.length] = {
	char: "眶",
	first: pattern_lr_left_1_right_2,
	later: [s_mu, jiangzikuang, h_wang]
}
Characters[Characters.length] = {
	char: "晤",
	first: pattern_lr_left_1_right_2,
	later: [s_ri, h_five, s_kou]
}
Characters[Characters.length] = {
	char: "曼",
	first: pattern_ud_up_middle_down,
	later: [s_ri, s_siwuzhe, z_you]
}
Characters[Characters.length] = {
	char: "晦",
	first: pattern_lr_left_1_right_2,
	later: [s_ri, pieheng, z_mu]
}
Characters[Characters.length] = {
	char: "冕",
	first: pattern_ud_up_1_down_1_down_big,
	later: [s_ri, p_mian]
}
Characters[Characters.length] = {
	char: "啡",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, s_fei]
}
Characters[Characters.length] = {
	char: "畦",
	first: pattern_lr_left_1_right_2,
	later: [s_tian, h_tu, h_tu]
}
Characters[Characters.length] = {
	char: "趾",
	first: pattern_lr_left_1_right_1_left_big,
	later: [s_kou, s_zhi, s_zhi]
}
Characters[Characters.length] = {
	char: "啃",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, s_zhi, s_yue]
}
Characters[Characters.length] = {
	char: "蛆",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_chong, s_qie]
}
Characters[Characters.length] = {
	char: "蚯",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_chong, p_qiu]
}
Characters[Characters.length] = {
	char: "蛉",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_chong, p_ling]
}
Characters[Characters.length] = {
	char: "蛀",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_chong, d_zhu]
}
Characters[Characters.length] = {
	char: "唬",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, huzitou, p_ji]
}
Characters[Characters.length] = {
	char: "啰",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, s_siwuzhe, p_xi]
}
Characters[Characters.length] = {
	char: "唾",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, p_chui]
}
Characters[Characters.length] = {
	char: "啤",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, p_beizitou, h_ten]
}
Characters[Characters.length] = {
	char: "啥",
	first: pattern_lr_left_1_right_many,
	later: [s_kou, p_ren, h_gan, s_kou]
}
Characters[Characters.length] = {
	char: "啸",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, z_shu]
}
Characters[Characters.length] = {
	char: "崎",
	first: pattern_lr_left_1_right_2,
	later: [s_shan, h_da, h_ke]
}
Characters[Characters.length] = {
	char: "逻",
	first: pattern_round_left_down,
	later: [s_siwuzhe, p_xi, zouzhidi]
}
Characters[Characters.length] = {
	char: "崔",
	first: pattern_ud_up_1_down_1_down_big,
	later: [s_shan, quezipang]
}
Characters[Characters.length] = {
	char: "崩",
	first: pattern_ud_up_1_down_2,
	later: [s_shan, p_yue, p_yue]
}
Characters[Characters.length] = {
	char: "婴",
	first: pattern_ud_up_2_down_1,
	later: [s_bei, s_bei, z_nv]
}
Characters[Characters.length] = {
	char: "赊",
	first: pattern_lr_left_1_right_2,
	later: [s_bei, p_ren, h_shiren]
}
Characters[Characters.length] = {
	char: "铐",
	first: pattern_lr_left_1_right_2,
	later: [jinzipang, laozitou, h_qiaoziyou]
}
Characters[Characters.length] = {
	char: "铛",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jinzipang, guangzitou, xunzitou]
}
Characters[Characters.length] = {
	char: "铝",
	first: pattern_lr_left_1_right_2,
	later: [jinzipang, s_kou, s_kou]
}
Characters[Characters.length] = {
	char: "铡",
	first: pattern_lr_left_1_right_2,
	later: [jinzipang, s_bei, lidaopang]
}
Characters[Characters.length] = {
	char: "铣",
	first: pattern_lr_left_1_right_1_left_big,
	later: [jinzipang, p_niuwuwei, p_er]
}
Characters[Characters.length] = {
	char: "铭",
	first: pattern_lr_left_1_right_2,
	later: [jinzipang, p_xi, s_kou]
}
Characters[Characters.length] = {
	char: "矫",
	first: pattern_lr_left_1_right_2,
	later: [p_shi, p_yao, pieshu]
}
Characters[Characters.length] = {
	char: "秸",
	first: pattern_lr_left_1_right_2,
	later: [p_he, h_shi, s_kou]
}
Characters[Characters.length] = {
	char: "秽",
	first: pattern_lr_left_1_right_2,
	later: [p_he, s_shan, p_xi]
}
Characters[Characters.length] = {
	char: "笙",
	first: pattern_ud_up_2_down_1,
	later: [zhuzitou, p_sheng]
}
Characters[Characters.length] = {
	char: "笤",
	first: pattern_ud_up_2_down_2,
	later: [zhuzitou, z_dao, s_kou]
}
Characters[Characters.length] = {
	char: "偎",
	first: pattern_lr_left_1_right_2,
	later: [danrenpang, s_tian, heng, z_sangzidi]
}
Characters[Characters.length] = {
	char: "傀",
	first: pattern_lr_left_1_right_1_right_big,
	later: [danrenpang, p_gui]
}
Characters[Characters.length] = {
	char: "躯",
	first: pattern_lr_left_1_right_1_left_big,
	later: [p_shen, jiangzikuang, cha]
}
Characters[Characters.length] = {
	char: "兜",
	first: pattern_ud_up_many_down_1,
	later: [p_angzizuo, p_bai, z_zuokai, p_er]
}
Characters[Characters.length] = {
	char: "衅",
	first: pattern_lr_left_1_right_1_right_big,
	later: [pie, minzidi, d_ban]
}
Characters[Characters.length] = {
	char: "徘",
	first: pattern_lr_left_1_right_2,
	later: [shuangrenpang, s_fei]
}
Characters[Characters.length] = {
	char: "徙",
	first: pattern_lr_left_1_right_2,
	later: [shuangrenpang, s_zhi, s_zouzidi]
}
Characters[Characters.length] = {
	char: "舶",
	first: pattern_lr_left_1_right_1_left_big,
	later: [p_zhou, p_bai]
}
Characters[Characters.length] = {
	char: "舷",
	first: pattern_lr_left_1_right_1_left_big,
	later: [p_zhou, liuzitou, youzipang]
}
Characters[Characters.length] = {
	char: "舵",
	first: pattern_lr_left_1_right_1_left_big,
	later: [p_zhou, baogaitou, p_bi]
}
Characters[Characters.length] = {
	char: "敛",
	first: pattern_lr_left_2_right_1,
	later: [p_ren, heng, d_xingzitou, heng, fanwenpang]
}
Characters[Characters.length] = {
	char: "翎",
	first: pattern_lr_left_1_right_2,
	later: [p_ling, z_xi, z_xi]
}
Characters[Characters.length] = {
	char: "脯",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_yue, h_fudu]
}
Characters[Characters.length] = {
	char: "逸",
	first: pattern_round_left_down,
	later: [p_mian, dian, zouzhidi]
}
Characters[Characters.length] = {
	char: "凰",
	first: pattern_round_up,
	later: [fengzitou, p_bai, h_wang]
}
Characters[Characters.length] = {
	char: "猖",
	first: pattern_lr_left_1_right_2,
	later: [fanquanpang, s_ri, s_ri]
}
Characters[Characters.length] = {
	char: "祭",
	first: pattern_ud_up_2_down_1,
	later: [p_xidian, z_jishangyou]
}
Characters[Characters.length] = {
	char: "烹",
	first: pattern_ud_up_many_down_1,
	later: [liuzitou, s_kou, z_le, sidiandi]
}
Characters[Characters.length] = {
	char: "庶",
	first: pattern_round_left_up,
	later: [d_guang, h_caoheng, sidiandi]
}
Characters[Characters.length] = {
	char: "庵",
	first: pattern_round_left_up,
	later: [d_guang, h_da, s_dian]
}
Characters[Characters.length] = {
	char: "痊",
	first: pattern_round_left_up,
	later: [bingzitou, p_ren, h_wang]
}
Characters[Characters.length] = {
	char: "阎",
	first: pattern_round_up,
	later: [d_men, weizitou, p_jiu]
}
Characters[Characters.length] = {
	char: "阐",
	first: pattern_round_up,
	later: [d_men, lanzitou, s_danzidi]
}
Characters[Characters.length] = {
	char: "眷",
	first: pattern_ud_up_1_down_1_up_big,
	later: [d_juanzitou, s_mu]
}
Characters[Characters.length] = {
	char: "焊",
	first: pattern_lr_left_1_right_2,
	later: [huozipang, s_ri, h_gan]
}
Characters[Characters.length] = {
	char: "焕",
	first: pattern_lr_left_1_right_1_right_big,
	later: [huozipang, p_huan]
}
Characters[Characters.length] = {
	char: "鸿",
	first: pattern_lr_left_middle_right,
	later: [sandianshui, h_gong, p_niaowuheng, heng]
}
Characters[Characters.length] = {
	char: "涯",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, h_chang, h_tu, h_tu]
}
Characters[Characters.length] = {
	char: "淑",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, s_shuzizuo, z_you]
}
Characters[Characters.length] = {
	char: "淌",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, guangzitou, tongzikuang, s_kou]
}
Characters[Characters.length] = {
	char: "淮",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, quezipang]
}
Characters[Characters.length] = {
	char: "淆",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, cha, h_hengpie, s_yue]
}
Characters[Characters.length] = {
	char: "渊",
	first: pattern_lr_left_1_right_1_right_big,
	later: [sandianshui, pie, d_mi, shu]
}
Characters[Characters.length] = {
	char: "淫",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, caizitou, p_ren]
}
Characters[Characters.length] = {
	char: "淳",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, liuzitou, s_kou, z_zi]
}
Characters[Characters.length] = {
	char: "淤",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, d_fang, p_ren, d_ld_sl]
}
Characters[Characters.length] = {
	char: "淀",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, baogaitou, heng, s_zouzidi]
}
Characters[Characters.length] = {
	char: "涮",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, z_shizitou, s_jin, lidaopang]
}
Characters[Characters.length] = {
	char: "涵",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, z_le, liangdianshui, piedian, xiongzikuang]
}
Characters[Characters.length] = {
	char: "惦",
	first: pattern_lr_left_1_right_2,
	later: [shuxinpang, d_guang, s_zhan]
}
Characters[Characters.length] = {
	char: "悴",
	first: pattern_lr_left_1_right_1_right_big,
	later: [shuxinpang, d_zu]
}
Characters[Characters.length] = {
	char: "惋",
	first: pattern_lr_left_1_right_many,
	later: [shuxinpang, baogaitou, p_xi, cangzidi]
}
Characters[Characters.length] = {
	char: "寂",
	first: pattern_ud_up_1_down_2,
	later: [baogaitou, s_shuzizuo, z_you]
}
Characters[Characters.length] = {
	char: "窒",
	first: pattern_ud_up_2_down_1,
	later: [xuezitou, h_zhiyu]
}
Characters[Characters.length] = {
	char: "谍",
	first: pattern_lr_left_1_right_2,
	later: [yanzipang, h_shijie, h_mu]
}
Characters[Characters.length] = {
	char: "谐",
	first: pattern_lr_left_1_right_many,
	later: [yanzipang, p_bi, p_bi, p_bai]
}
Characters[Characters.length] = {
	char: "裆",
	first: pattern_lr_left_1_right_1_right_big,
	later: [buyipang, guangzitou, xunzitou]
}
Characters[Characters.length] = {
	char: "袱",
	first: pattern_lr_left_1_right_2,
	later: [buyipang, danrenpang, h_quan]
}
Characters[Characters.length] = {
	char: "祷",
	first: pattern_lr_left_1_right_2,
	later: [shizipang, h_piefeng, h_cun]
}
Characters[Characters.length] = {
	char: "谒",
	first: pattern_lr_left_1_right_many,
	later: [yanzipang, s_ri, baozitou, cha, shuzheheng]
}
Characters[Characters.length] = {
	char: "谓",
	first: pattern_lr_left_1_right_2,
	later: [yanzipang, s_tian, s_yue]
}
Characters[Characters.length] = {
	char: "谚",
	first: pattern_lr_left_1_right_2,
	later: [yanzipang, d_chan, sanpie]
}
Characters[Characters.length] = {
	char: "尉",
	first: pattern_lr_left_2_right_1,
	later: [z_shizitou, h_shiren, h_cun]
}
Characters[Characters.length] = {
	char: "堕",
	first: pattern_ud_up_2_down_1,
	later: [zuoerpang, h_hengpie, s_yue, h_tu]
}
Characters[Characters.length] = {
	char: "隅",
	first: pattern_lr_left_1_right_1_right_big,
	later: [zuoerpang, s_yu]
}
Characters[Characters.length] = {
	char: "婉",
	first: pattern_lr_left_1_right_many,
	later: [z_nv, baogaitou, p_xi, cangzidi]
}
Characters[Characters.length] = {
	char: "颇",
	first: pattern_lr_left_1_right_1_left_big,
	later: [p_pi, h_ye]
}
Characters[Characters.length] = {
	char: "绰",
	first: pattern_lr_left_1_right_many,
	later: [jiaosipang, shangzitou, s_ri, h_ten]
}
Characters[Characters.length] = {
	char: "绷",
	first: pattern_lr_left_1_right_2,
	later: [jiaosipang, p_yue, p_yue]
}
Characters[Characters.length] = {
	char: "综",
	first: pattern_lr_left_1_right_2,
	later: [jiaosipang, baogaitou, h_shiren]
}
Characters[Characters.length] = {
	char: "绽",
	first: pattern_lr_left_1_right_2,
	later: [jiaosipang, baogaitou, heng, s_zouzidi]
}
Characters[Characters.length] = {
	char: "缀",
	first: pattern_lr_left_1_right_many,
	later: [jiaosipang, z_you, z_you, z_you, z_you]
}
Characters[Characters.length] = {
	char: "巢",
	first: pattern_ud_up_1_down_1_down_big,
	later: [sanzhe, s_guo]
}

/* 十二画 */
Characters[Characters.length] = {
	char: "琳",
	first: pattern_lr_left_1_right_2,
	later: [h_wang, h_mu, h_mu]
}
Characters[Characters.length] = {
	char: "琢",
	first: pattern_lr_left_1_right_2,
	later: [h_wang, h_zhizhu, dian]
}
Characters[Characters.length] = {
	char: "琼",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_wang, liuzitou, s_kou, z_xiao]
}
Characters[Characters.length] = {
	char: "揍",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, h_fengzitou, h_tian]
}
Characters[Characters.length] = {
	char: "堰",
	first: pattern_lr_left_1_right_many,
	later: [h_tu, jiangzikuang, s_ri, z_nv]
}
Characters[Characters.length] = {
	char: "揩",
	first: pattern_lr_left_1_right_many,
	later: [tishoupang, p_bi, p_bi, p_bai]
}
Characters[Characters.length] = {
	char: "揽",
	first: pattern_lr_left_1_right_many,
	later: [tishoupang, s_liangshu, p_zhutouban, s_jian]
}
Characters[Characters.length] = {
	char: "揖",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, s_kou, h_erduo]
}
Characters[Characters.length] = {
	char: "彭",
	first: pattern_lr_left_many_right_1,
	later: [h_shi, s_kou, lanzitou, heng, sanpie]
}
Characters[Characters.length] = {
	char: "揣",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, s_shan, h_erqie]
}
Characters[Characters.length] = {
	char: "搀",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, p_mian, d_ld_sl]
}
Characters[Characters.length] = {
	char: "搓",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, pieweiyang, h_gong]
}
Characters[Characters.length] = {
	char: "壹",
	first: pattern_lr_left_middle_right,
	later: [h_shi, tubaogai, h_dou]
}
Characters[Characters.length] = {
	char: "搔",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, z_you, dian, s_chong]
}
Characters[Characters.length] = {
	char: "葫",
	first: pattern_ud_up_1_down_2,
	later: [caozitou, h_gu, p_yue]
}
Characters[Characters.length] = {
	char: "募",
	first: pattern_ud_up_middle_down,
	later: [caozitou, s_ri, h_da, z_li]
}
Characters[Characters.length] = {
	char: "蒋",
	first: pattern_ud_up_1_down_many,
	later: [caozitou, jiangzipang, p_xi, h_cun]
}
Characters[Characters.length] = {
	char: "蒂",
	first: pattern_ud_up_1_down_many,
	later: [caozitou, liuzitou, lanzitou, tubaogai, s_jin]
}
Characters[Characters.length] = {
	char: "韩",
	first: pattern_lr_left_many_right_1,
	later: [h_ten, s_ri, h_ten, h_wei]
}
Characters[Characters.length] = {
	char: "棱",
	first: pattern_lr_left_1_right_many,
	later: [h_mu, h_tu, p_eight, zhewen]
}
Characters[Characters.length] = {
	char: "椰",
	first: pattern_lr_left_1_right_2,
	later: [h_mu, h_erduo, youerpang]
}
Characters[Characters.length] = {
	char: "焚",
	first: pattern_ud_up_2_down_1,
	later: [h_mu, h_mu, huozipang]
}
Characters[Characters.length] = {
	char: "椎",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_mu, quezipang]
}
Characters[Characters.length] = {
	char: "棺",
	first: pattern_lr_left_1_right_2,
	later: [h_mu, baogaitou, s_guanzidi]
}
Characters[Characters.length] = {
	char: "榔",
	first: pattern_lr_left_1_right_2,
	later: [h_mu, d_langzizuo, youerpang]
}
Characters[Characters.length] = {
	char: "椭",
	first: pattern_lr_left_middle_right,
	later: [h_mu, zuoerpang, h_hengpie, s_yue]
}
Characters[Characters.length] = {
	char: "粟",
	first: pattern_ud_up_1_down_1_down_big,
	later: [h_xiwuzhe, d_mi]
}
Characters[Characters.length] = {
	char: "棘",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_cizizuo, h_cizizuo]
}
Characters[Characters.length] = {
	char: "酣",
	first: pattern_lr_left_1_right_1_left_big,
	later: [h_youxin, h_ganku]
}
Characters[Characters.length] = {
	char: "酥",
	first: pattern_lr_left_1_right_1_left_big,
	later: [h_youxin, p_he]
}
Characters[Characters.length] = {
	char: "硝",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_stone, guangzitou, s_yue]
}
Characters[Characters.length] = {
	char: "硫",
	first: pattern_lr_left_1_right_2,
	later: [h_stone, d_chongzitou, p_liuzidi]
}
Characters[Characters.length] = {
	char: "颊",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_jia, h_ye]
}
Characters[Characters.length] = {
	char: "雳",
	first: pattern_ud_up_1_down_2,
	later: [h_yu, h_chang, z_li]
}
Characters[Characters.length] = {
	char: "翘",
	first: pattern_round_left_down,
	later: [h_gewudian, h_wuzidi, z_xi, z_xi]
}
Characters[Characters.length] = {
	char: "凿",
	first: pattern_round_down,
	later: [s_ye, d_xinzidi, xiongzikuang]
}
Characters[Characters.length] = {
	char: "棠",
	first: pattern_ud_up_middle_down,
	later: [guangzitou, tubaogai, s_kou, h_mu]
}
Characters[Characters.length] = {
	char: "晰",
	first: pattern_lr_left_1_right_2,
	later: [s_ri, h_mu, p_jin]
}
Characters[Characters.length] = {
	char: "鼎",
	first: pattern_ud_up_middle_down,
	later: [s_mu, z_dingxiazuo, s_dingxiayou]
}
Characters[Characters.length] = {
	char: "喳",
	first: pattern_lr_left_1_right_many,
	later: [s_kou, h_mu, s_ri, heng]
}
Characters[Characters.length] = {
	char: "遏",
	first: pattern_round_left_down,
	later: [s_ri, baozitou, cha, shuzheheng, zouzhidi]
}
Characters[Characters.length] = {
	char: "晾",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_ri, liuzitou, s_kou, z_xiao]
}
Characters[Characters.length] = {
	char: "畴",
	first: pattern_lr_left_1_right_2,
	later: [s_tian, h_piefeng, h_cun]
}
Characters[Characters.length] = {
	char: "跋",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, s_zhi, h_you, dian]
}
Characters[Characters.length] = {
	char: "跛",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, s_zhi, p_pi]
}
Characters[Characters.length] = {
	char: "蛔",
	first: pattern_lr_left_1_right_2,
	later: [s_chong, s_kou, s_kou]
}
Characters[Characters.length] = {
	char: "蜒",
	first: pattern_lr_left_1_right_2,
	later: [s_chong, p_yanzili, jianzidi]
}
Characters[Characters.length] = {
	char: "蛤",
	first: pattern_lr_left_1_right_2,
	later: [s_chong, p_ren, heng, s_kou]
}
Characters[Characters.length] = {
	char: "鹃",
	first: pattern_lr_left_2_right_1,
	later: [s_kou, s_yue, p_niaowuheng, heng]
}
Characters[Characters.length] = {
	char: "喻",
	first: pattern_lr_left_1_right_many,
	later: [s_kou, p_ren, heng, s_yue, lidaopang]
}
Characters[Characters.length] = {
	char: "啼",
	first: pattern_lr_left_1_right_many,
	later: [s_kou, liuzitou, lanzitou, tubaogai, s_jin]
}
Characters[Characters.length] = {
	char: "喧",
	first: pattern_lr_left_1_right_many,
	later: [s_kou, baogaitou, heng, s_ri, heng]
}
Characters[Characters.length] = {
	char: "嵌",
	first: pattern_ud_up_1_down_2,
	later: [s_shan, h_ganku, p_qian]
}
Characters[Characters.length] = {
	char: "赋",
	first: pattern_lr_left_1_right_2,
	later: [s_bei, heng, shizikuang, s_zhi]
}
Characters[Characters.length] = {
	char: "赎",
	first: pattern_lr_left_1_right_many,
	later: [s_bei, h_ten, henggou, d_tou]
}
Characters[Characters.length] = {
	char: "赐",
	first: pattern_lr_left_1_right_2,
	later: [s_bei, s_ri, p_wuyou]
}
Characters[Characters.length] = {
	char: "锉",
	first: pattern_lr_left_1_right_many,
	later: [jinzipang, p_ren, p_ren, h_tu]
}
Characters[Characters.length] = {
	char: "锌",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jinzipang, d_li, h_ten]
}
Characters[Characters.length] = {
	char: "甥",
	first: pattern_lr_left_1_right_2,
	later: [p_sheng, s_tian, z_li]
}
Characters[Characters.length] = {
	char: "掰",
	first: pattern_lr_left_middle_right,
	later: [p_baizizuo, p_fen, p_shou]
}
Characters[Characters.length] = {
	char: "氮",
	first: pattern_round_right_up,
	later: [p_qi, huozipang, huozipang]
}
Characters[Characters.length] = {
	char: "氯",
	first: pattern_round_right_up,
	later: [p_qi, luzitou, z_dianshui]
}
Characters[Characters.length] = {
	char: "黍",
	first: pattern_ud_up_middle_down,
	later: [p_he, p_ren, z_dianshui]
}
Characters[Characters.length] = {
	char: "筏",
	first: pattern_ud_up_1_down_2,
	later: [zhuzitou, danrenpang, h_ge]
}
Characters[Characters.length] = {
	char: "牍",
	first: pattern_lr_left_1_right_many,
	later: [p_pian, h_ten, henggou, d_tou]
}
Characters[Characters.length] = {
	char: "粤",
	first: pattern_ud_up_2_down_1,
	later: [aozikuang, d_mi, h_qiaoziyou]
}
Characters[Characters.length] = {
	char: "逾",
	first: pattern_round_left_down,
	later: [p_ren, heng, s_yue, lidaopang, zouzhidi]
}
Characters[Characters.length] = {
	char: "腌",
	first: pattern_lr_left_1_right_2,
	later: [p_yue, h_da, s_dian]
}
Characters[Characters.length] = {
	char: "腋",
	first: pattern_lr_left_1_right_many,
	later: [p_yue, liuzitou, danrenpang, p_yedian]
}
Characters[Characters.length] = {
	char: "腕",
	first: pattern_lr_left_1_right_many,
	later: [p_yue, baogaitou, p_xi, cangzidi]
}
Characters[Characters.length] = {
	char: "猩",
	first: pattern_lr_left_1_right_2,
	later: [fanquanpang, s_ri, p_sheng]
}
Characters[Characters.length] = {
	char: "猬",
	first: pattern_lr_left_1_right_2,
	later: [fanquanpang, s_tian, s_yue]
}
Characters[Characters.length] = {
	char: "惫",
	first: pattern_ud_up_2_down_1,
	later: [zhewen, s_tian, d_xin]
}
Characters[Characters.length] = {
	char: "敦",
	first: pattern_lr_left_many_right_1,
	later: [liuzitou, s_kou, z_zi, fanwenpang]
}
Characters[Characters.length] = {
	char: "痘",
	first: pattern_round_left_up,
	later: [bingzitou, h_dou]
}
Characters[Characters.length] = {
	char: "痢",
	first: pattern_round_left_up,
	later: [bingzitou, p_he, lidaopang]
}
Characters[Characters.length] = {
	char: "痪",
	first: pattern_round_left_up,
	later: [bingzitou, p_huan]
}
Characters[Characters.length] = {
	char: "竣",
	first: pattern_lr_left_1_right_many,
	later: [d_li, sigong, p_eight, zhewen]
}
Characters[Characters.length] = {
	char: "翔",
	first: pattern_lr_left_1_right_2,
	later: [pieweiyang, z_xi, z_xi]
}
Characters[Characters.length] = {
	char: "奠",
	first: pattern_ud_up_1_down_1_up_big,
	later: [lanzitou, h_youxin, h_da]
}
Characters[Characters.length] = {
	char: "遂",
	first: pattern_round_left_down,
	later: [lanzitou, h_zhizhu, zouzhidi]
}
Characters[Characters.length] = {
	char: "焙",
	first: pattern_lr_left_1_right_2,
	later: [huozipang, d_li, s_kou]
}
Characters[Characters.length] = {
	char: "滞",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, h_daizitou, tubaogai, s_jin]
}
Characters[Characters.length] = {
	char: "湘",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, h_mu, s_mu]
}
Characters[Characters.length] = {
	char: "渤",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, h_ten, tubaogai, z_zi, z_li]
}
Characters[Characters.length] = {
	char: "渺",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, s_mu, s_shao]
}
Characters[Characters.length] = {
	char: "溃",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, s_gezidi, s_bei]
}
Characters[Characters.length] = {
	char: "溅",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, s_bei, h_zhan]
}
Characters[Characters.length] = {
	char: "湃",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, p_baizizuo, h_baiziyou]
}
Characters[Characters.length] = {
	char: "愕",
	first: pattern_lr_left_1_right_2,
	later: [shuxinpang, s_siwuzhe, h_kui]
}
Characters[Characters.length] = {
	char: "惶",
	first: pattern_lr_left_1_right_2,
	later: [shuxinpang, p_bai, h_wang]
}
Characters[Characters.length] = {
	char: "寓",
	first: pattern_ud_up_1_down_1_down_big,
	later: [baogaitou, s_yu]
}
Characters[Characters.length] = {
	char: "窖",
	first: pattern_ud_up_2_down_2,
	later: [xuezitou, p_niuwuwei, s_kou]
}
Characters[Characters.length] = {
	char: "窘",
	first: pattern_ud_up_2_down_2,
	later: [xuezitou, z_yin, s_kou]
}
Characters[Characters.length] = {
	char: "雇",
	first: pattern_round_left_up,
	later: [d_hu, quezipang]
}
Characters[Characters.length] = {
	char: "谤",
	first: pattern_lr_left_1_right_many,
	later: [yanzipang, liuzitou, lanzitou, tubaogai, d_fang]
}
Characters[Characters.length] = {
	char: "犀",
	first: pattern_round_left_up,
	later: [z_shizitou, s_dianshui, p_niu]
}
Characters[Characters.length] = {
	char: "隘",
	first: pattern_lr_left_1_right_2,
	later: [zuoerpang, lanzitou, heng, p_eight, minzidi]
}
Characters[Characters.length] = {
	char: "媒",
	first: pattern_lr_left_1_right_2,
	later: [z_nv, h_ganku, h_mu]
}
Characters[Characters.length] = {
	char: "媚",
	first: pattern_lr_left_1_right_2,
	later: [z_nv, z_meizitou, s_mu]
}
Characters[Characters.length] = {
	char: "婿",
	first: pattern_lr_left_1_right_2,
	later: [z_nv, henggou, s_zouzidi, s_yue]
}
Characters[Characters.length] = {
	char: "缅",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jiaosipang, h_hengxiapie, s_mianzidi]
}
Characters[Characters.length] = {
	char: "缆",
	first: pattern_lr_left_1_right_many,
	later: [jiaosipang, s_liangshu, p_zhutouban, s_jian]
}
Characters[Characters.length] = {
	char: "缔",
	first: pattern_lr_left_1_right_many,
	later: [jiaosipang, liuzitou, lanzitou, tubaogai, s_jin]
}
Characters[Characters.length] = {
	char: "缕",
	first: pattern_lr_left_1_right_2,
	later: [jiaosipang, d_mi, z_nv]
}
Characters[Characters.length] = {
	char: "骚",
	first: pattern_lr_left_1_right_2,
	later: [z_ma, z_you, dian, s_chong]
}

/* 十三画 */
Characters[Characters.length] = {
	char: "瑟",
	first: pattern_ud_up_2_down_1,
	later: [h_wang, h_wang, d_xin, pie]
}
Characters[Characters.length] = {
	char: "鹉",
	first: pattern_lr_left_2_right_1,
	later: [heng, shizikuang, s_zhi, p_niaowuheng]
}
Characters[Characters.length] = {
	char: "瑰",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_wang, p_gui]
}
Characters[Characters.length] = {
	char: "搪",
	first: pattern_lr_left_1_right_many,
	later: [tishoupang, d_guang, z_tangzili, s_kou]
}
Characters[Characters.length] = {
	char: "聘",
	first: pattern_lr_left_1_right_2,
	later: [h_erduo, s_you, h_qiaoziyou]
}
Characters[Characters.length] = {
	char: "斟",
	first: pattern_lr_left_many_right_1,
	later: [h_qizitou, p_eight, shuzheheng, d_dou]
}
Characters[Characters.length] = {
	char: "靴",
	first: pattern_lr_left_1_right_2,
	later: [h_caoheng, s_gezidi]
}
Characters[Characters.length] = {
	char: "靶",
	first: pattern_lr_left_1_right_1_left_big,
	later: [h_caoheng, s_gezidi, z_ba]
}
Characters[Characters.length] = {
	char: "蓖",
	first: pattern_ud_up_middle_down,
	later: [caozitou, p_cong, p_bi, p_bi]
}
Characters[Characters.length] = {
	char: "蒿",
	first: pattern_ud_up_middle_down,
	later: [caozitou, liuzitou, s_kou, tongzikuang, s_kou]
}
Characters[Characters.length] = {
	char: "蒲",
	first: pattern_ud_up_1_down_2,
	later: [caozitou, sandianshui, h_fudu]
}
Characters[Characters.length] = {
	char: "蓉",
	first: pattern_ud_up_middle_down,
	later: [caozitou, baogaitou, p_eight, p_ren, s_kou]
}
Characters[Characters.length] = {
	char: "楔",
	first: pattern_lr_left_1_right_many,
	later: [h_mu, h_feng, z_dao, h_da]
}
Characters[Characters.length] = {
	char: "椿",
	first: pattern_lr_left_1_right_2,
	later: [h_mu, h_fengzitou, s_ri]
}
Characters[Characters.length] = {
	char: "楷",
	first: pattern_lr_left_1_right_many,
	later: [h_mu, p_bi, p_bi, p_bai]
}
Characters[Characters.length] = {
	char: "榄",
	first: pattern_lr_left_1_right_many,
	later: [h_mu, s_liangshu, p_zhutouban, s_jian]
}
Characters[Characters.length] = {
	char: "楞",
	first: pattern_lr_left_1_right_2,
	later: [h_mu, s_siwuzhe, d_fang]
}
Characters[Characters.length] = {
	char: "楣",
	first: pattern_lr_left_1_right_2,
	later: [h_mu, z_meizitou, s_mu]
}
Characters[Characters.length] = {
	char: "酪",
	first: pattern_lr_left_1_right_2,
	later: [h_youxin, zhewen, s_kou]
}
Characters[Characters.length] = {
	char: "碘",
	first: pattern_lr_left_1_right_2,
	later: [h_stone, s_dianzitou, p_eight]
}
Characters[Characters.length] = {
	char: "硼",
	first: pattern_lr_left_1_right_2,
	later: [h_stone, p_yue, p_yue]
}
Characters[Characters.length] = {
	char: "碉",
	first: pattern_lr_left_1_right_many,
	later: [h_stone, zhouzikuang, h_tu, s_kou]
}
Characters[Characters.length] = {
	char: "辐",
	first: pattern_lr_left_1_right_many,
	later: [h_che, heng, s_kou, s_tian]
}
Characters[Characters.length] = {
	char: "辑",
	first: pattern_lr_left_1_right_2,
	later: [h_che, s_kou, h_erduo]
}
Characters[Characters.length] = {
	char: "频",
	first: pattern_lr_left_2_right_1,
	later: [s_zhi, s_shaowud, h_ye]
}
Characters[Characters.length] = {
	char: "睹",
	first: pattern_lr_left_1_right_2,
	later: [s_mu, laozitou, s_ri]
}
Characters[Characters.length] = {
	char: "睦",
	first: pattern_lr_left_1_right_many,
	later: [s_mu, h_tu, p_eight, h_tu]
}
Characters[Characters.length] = {
	char: "瞄",
	first: pattern_lr_left_1_right_2,
	later: [s_mu, caozitou, s_tian]
}
Characters[Characters.length] = {
	char: "嗜",
	first: pattern_lr_left_1_right_many,
	later: [s_kou, laozitou, p_bi, s_ri]
}
Characters[Characters.length] = {
	char: "嗦",
	first: pattern_lr_left_1_right_many,
	later: [s_kou, h_ten, tubaogai, youzipang, z_xiao]
}
Characters[Characters.length] = {
	char: "暇",
	first: pattern_lr_left_1_right_2,
	later: [s_ri, z_jiajian]
}
Characters[Characters.length] = {
	char: "畸",
	first: pattern_lr_left_1_right_2,
	later: [s_tian, h_da, h_ke]
}
Characters[Characters.length] = {
	char: "跷",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, s_zhi, h_gewudian, h_wuzidi]
}
Characters[Characters.length] = {
	char: "跺",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, s_zhi, p_ji, h_mu]
}
Characters[Characters.length] = {
	char: "蜈",
	first: pattern_lr_left_1_right_2,
	later: [s_chong, s_kou, h_tian]
}
Characters[Characters.length] = {
	char: "蜗",
	first: pattern_lr_left_1_right_2,
	later: [s_chong, s_kou, s_nei]
}
Characters[Characters.length] = {
	char: "蜕",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_chong, lanzitou, s_kou, p_er]
}
Characters[Characters.length] = {
	char: "蛹",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_chong, z_yongzitou, s_yong]
}
Characters[Characters.length] = {
	char: "嗅",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, p_zi, h_quan]
}
Characters[Characters.length] = {
	char: "嗡",
	first: pattern_lr_left_1_right_many,
	later: [s_kou, p_eight, z_xi, z_xi]
}
Characters[Characters.length] = {
	char: "嗤",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, z_chiyoush, s_chong]
}
Characters[Characters.length] = {
	char: "署",
	first: pattern_ud_up_1_down_2,
	later: [s_siwuzhe, laozitou, s_ri]
}
Characters[Characters.length] = {
	char: "蜀",
	first: pattern_ud_up_1_down_2,
	later: [s_siwuzhe, baozitou, s_chong]
}
Characters[Characters.length] = {
	char: "幌",
	first: pattern_lr_left_1_right_2,
	later: [s_jin, s_ri, guangzitou, h_wuzidi]
}
Characters[Characters.length] = {
	char: "锚",
	first: pattern_lr_left_1_right_2,
	later: [jinzipang, caozitou, s_tian]
}
Characters[Characters.length] = {
	char: "锥",
	first: pattern_lr_left_1_right_1_right_big,
	later: [jinzipang, quezipang]
}
Characters[Characters.length] = {
	char: "锨",
	first: pattern_lr_left_1_right_2,
	later: [jinzipang, p_jin, p_qian]
}
Characters[Characters.length] = {
	char: "锭",
	first: pattern_lr_left_1_right_2,
	later: [jinzipang, baogaitou, heng, s_zouzidi]
}
Characters[Characters.length] = {
	char: "锰",
	first: pattern_lr_left_1_right_2,
	later: [jinzipang, z_zi, minzidi]
}
Characters[Characters.length] = {
	char: "稚",
	first: pattern_lr_left_1_right_1_right_big,
	later: [p_he, quezipang]
}
Characters[Characters.length] = {
	char: "颓",
	first: pattern_lr_left_2_right_1,
	later: [p_he, p_ji, h_ye]
}
Characters[Characters.length] = {
	char: "筷",
	first: pattern_ud_up_2_down_2,
	later: [zhuzitou, shuxinpang, z_jueziyou]
}
Characters[Characters.length] = {
	char: "魁",
	first: pattern_round_left_down,
	later: [p_gui, d_dou]
}
Characters[Characters.length] = {
	char: "衙",
	first: pattern_lr_left_middle_right,
	later: [shuangrenpang, h_five, s_kou, h_xingziyou]
}
Characters[Characters.length] = {
	char: "腻",
	first: pattern_lr_left_1_right_many,
	later: [p_yue, shizikuang, h_two, s_bei]
}
Characters[Characters.length] = {
	char: "腮",
	first: pattern_lr_left_1_right_2,
	later: [p_yue, s_tian, d_xin]
}
Characters[Characters.length] = {
	char: "腺",
	first: pattern_lr_left_1_right_2,
	later: [p_yue, p_bai, z_shui]
}
Characters[Characters.length] = {
	char: "鹏",
	first: pattern_lr_left_2_right_1,
	later: [p_yue, p_yue, p_niaowuheng, heng]
}
Characters[Characters.length] = {
	char: "肄",
	first: pattern_lr_left_2_right_1,
	later: [p_bi, p_shi, jianzili]
}
Characters[Characters.length] = {
	char: "猿",
	first: pattern_lr_left_1_right_many,
	later: [fanquanpang, h_tu, s_kou, p_yizidi]
}
Characters[Characters.length] = {
	char: "颖",
	first: pattern_lr_left_2_right_1,
	later: [p_bi, p_he, h_ye]
}
Characters[Characters.length] = {
	char: "煞",
	first: pattern_ud_up_2_down_1,
	later: [weizitou, xunzitou, fanwenpang, sidiandi]
}
Characters[Characters.length] = {
	char: "雏",
	first: pattern_lr_left_1_right_1_right_big,
	later: [weizitou, xunzitou, quezipang]
}
Characters[Characters.length] = {
	char: "馍",
	first: pattern_lr_left_1_right_many,
	later: [shichi, caozitou, s_ri, h_da]
}
Characters[Characters.length] = {
	char: "馏",
	first: pattern_lr_left_1_right_many,
	later: [shichi, p_maoshangzuo, z_dao, s_tian]
}
Characters[Characters.length] = {
	char: "禀",
	first: pattern_ud_up_middle_down,
	later: [liuzitou, s_kou, s_kou, h_shiren]
}
Characters[Characters.length] = {
	char: "痹",
	first: pattern_round_left_up,
	later: [bingzitou, s_tian, h_piecao]
}
Characters[Characters.length] = {
	char: "廓",
	first: pattern_round_left_up,
	later: [d_guang, liuzitou, s_kou, z_zi, youerpang]
}
Characters[Characters.length] = {
	char: "痴",
	first: pattern_round_left_up,
	later: [bingzitou, p_shi, s_kou]
}
Characters[Characters.length] = {
	char: "靖",
	first: pattern_lr_left_1_right_2,
	later: [d_li, h_qingzitou, s_yue]
}
Characters[Characters.length] = {
	char: "誊",
	first: pattern_ud_up_1_down_1_up_big,
	later: [d_juanzitou, d_yan]
}
Characters[Characters.length] = {
	char: "漓",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, liuzitou, cha, xiongzikuang, tongzikuang, sigong]
}
Characters[Characters.length] = {
	char: "溢",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, lanzitou, heng, p_eight, minzidi]
}
Characters[Characters.length] = {
	char: "溯",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, d_ni, p_yue]
}
Characters[Characters.length] = {
	char: "溶",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, baogaitou, p_eight, p_ren, s_kou]
}
Characters[Characters.length] = {
	char: "滓",
	first: pattern_lr_left_1_right_1_left_big,
	later: [sandianshui, baogaitou, d_li, h_ten]
}
Characters[Characters.length] = {
	char: "溺",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, z_gong, liangdianshui, z_gong, liangdianshui]
}
Characters[Characters.length] = {
	char: "寞",
	first: pattern_ud_up_1_down_many,
	later: [baogaitou, caozitou, s_ri, h_da]
}
Characters[Characters.length] = {
	char: "窥",
	first: pattern_ud_up_2_down_2,
	later: [xuezitou, h_fu, s_jian]
}
Characters[Characters.length] = {
	char: "窟",
	first: pattern_ud_up_2_down_2,
	later: [baogaitou, p_eight, z_shizitou, s_chu]
}
Characters[Characters.length] = {
	char: "寝",
	first: pattern_ud_up_1_down_many,
	later: [baogaitou, jiangzipang, xunzitou, tubaogai, z_you]
}
Characters[Characters.length] = {
	char: "褂",
	first: pattern_lr_left_1_right_many,
	later: [buyipang, h_tu, h_tu, s_bu]
}
Characters[Characters.length] = {
	char: "裸",
	first: pattern_lr_left_1_right_1_right_big,
	later: [buyipang, s_guo]
}
Characters[Characters.length] = {
	char: "谬",
	first: pattern_lr_left_1_right_many,
	later: [yanzipang, z_xi, z_xi, p_ren, sanpie]
}
Characters[Characters.length] = {
	char: "媳",
	first: pattern_lr_left_1_right_2,
	later: [z_nv, p_zi, d_xin]
}
Characters[Characters.length] = {
	char: "嫉",
	first: pattern_lr_left_1_right_2,
	later: [z_nv, bingzitou, p_shi]
}
Characters[Characters.length] = {
	char: "缚",
	first: pattern_lr_left_1_right_2,
	later: [jiaosipang, h_fudu, h_cun]
}
Characters[Characters.length] = {
	char: "缤",
	first: pattern_lr_left_1_right_2,
	later: [jiaosipang, baogaitou, p_qiu, p_eight]
}
Characters[Characters.length] = {
	char: "剿",
	first: pattern_lr_left_2_right_1,
	later: [sanzhe, s_guo, lidaopang]
}

/* 十四画 */
Characters[Characters.length] = {
	char: "赘",
	first: pattern_ud_up_2_down_1,
	later: [h_qingzitou, z_fangzidi, fanwenpang, s_bei]
}
Characters[Characters.length] = {
	char: "熬",
	first: pattern_ud_up_2_down_1,
	later: [h_qingzitou, z_fangzidi, fanwenpang, sidiandi]
}
Characters[Characters.length] = {
	char: "赫",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_chi, h_chi]
}
Characters[Characters.length] = {
	char: "蔫",
	first: pattern_ud_up_1_down_many,
	later: [caozitou, h_zheng, h_yuwuheng, sidiandi]
}
Characters[Characters.length] = {
	char: "摹",
	first: pattern_ud_up_middle_down,
	later: [caozitou, s_ri, h_da, shuxindi]
}
Characters[Characters.length] = {
	char: "蔓",
	first: pattern_ud_up_1_down_many,
	later: [caozitou, s_ri, s_siwuzhe, z_you]
}
Characters[Characters.length] = {
	char: "蔗",
	first: pattern_ud_up_1_down_many,
	later: [caozitou, d_guang, h_caoheng, sidiandi]
}
Characters[Characters.length] = {
	char: "蔼",
	first: pattern_ud_up_1_down_many,
	later: [caozitou, yanzipang, s_ri, baozitou, p_ren, shuzheheng]
}
Characters[Characters.length] = {
	char: "熙",
	first: pattern_ud_up_2_down_1,
	later: [h_jimei, z_si, sidiandi]
}
Characters[Characters.length] = {
	char: "蔚",
	first: pattern_ud_up_1_down_many,
	later: [caozitou, z_shizitou, h_shiren, h_cun]
}
Characters[Characters.length] = {
	char: "兢",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_ten, s_kou, p_er, h_ten, s_kou, p_er]
}
Characters[Characters.length] = {
	char: "榛",
	first: pattern_lr_left_1_right_2,
	later: [h_mu, h_fengzitou, p_he]
}
Characters[Characters.length] = {
	char: "榕",
	first: pattern_lr_left_1_right_2,
	later: [h_mu, baogaitou, p_eight, p_ren, s_kou]
}
Characters[Characters.length] = {
	char: "酵",
	first: pattern_lr_left_1_right_2,
	later: [h_youxin, laozitou, z_zi]
}
Characters[Characters.length] = {
	char: "碟",
	first: pattern_lr_left_1_right_2,
	later: [h_stone, h_shijie, h_mu]
}
Characters[Characters.length] = {
	char: "碴",
	first: pattern_lr_left_1_right_many,
	later: [h_stone, h_mu, s_ri, heng]
}
Characters[Characters.length] = {
	char: "碱",
	first: pattern_lr_left_1_right_many,
	later: [h_stone, chengzikuang, heng, s_kou]
}
Characters[Characters.length] = {
	char: "碳",
	first: pattern_lr_left_1_right_2,
	later: [h_stone, s_shan, h_hengpie, huozipang]
}
Characters[Characters.length] = {
	char: "辕",
	first: pattern_lr_left_1_right_many,
	later: [h_che, h_tu, s_kou, p_yizidi]
}
Characters[Characters.length] = {
	char: "辖",
	first: pattern_lr_left_1_right_many,
	later: [h_che, baogaitou, h_feng, s_kou]
}
Characters[Characters.length] = {
	char: "雌",
	first: pattern_lr_left_2_right_1,
	later: [s_zhi, p_bi, quezipang]
}
Characters[Characters.length] = {
	char: "墅",
	first: pattern_ud_up_2_down_1,
	later: [s_li, z_yu, h_tu]
}
Characters[Characters.length] = {
	char: "嘁",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, chengzikuang, s_shuzizuo]
}
Characters[Characters.length] = {
	char: "踊",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_kou, s_zhi, z_yongzitou, s_yong]
}
Characters[Characters.length] = {
	char: "蝉",
	first: pattern_lr_left_1_right_1_right_big,
	later: [s_chong, lanzitou, s_danzidi]
}
Characters[Characters.length] = {
	char: "嘀",
	first: pattern_lr_left_1_right_many,
	later: [s_kou, liuzitou, lanzitou, tongzikuang, p_eight, s_kou]
}
Characters[Characters.length] = {
	char: "幔",
	first: pattern_lr_left_1_right_many,
	later: [s_jin, s_ri, s_siwuzhe, z_you]
}
Characters[Characters.length] = {
	char: "镀",
	first: pattern_lr_left_1_right_many,
	later: [jinzipang, d_guang, h_caoheng, z_you]
}
Characters[Characters.length] = {
	char: "舔",
	first: pattern_lr_left_1_right_2,
	later: [p_she, h_tian, shuxinpang]
}
Characters[Characters.length] = {
	char: "熏",
	first: pattern_ud_up_1_down_1_up_big,
	later: [p_xun, sidiandi]
}
Characters[Characters.length] = {
	char: "箍",
	first: pattern_lr_left_many_right_many,
	later: [zhuzitou, tishoupang, jiangzikuang, s_jin]
}
Characters[Characters.length] = {
	char: "箕",
	first: pattern_ud_up_2_down_1,
	later: [zhuzitou, h_qizitou, p_eight]
}
Characters[Characters.length] = {
	char: "箫",
	first: pattern_ud_up_2_down_1,
	later: [zhuzitou, z_shu]
}
Characters[Characters.length] = {
	char: "舆",
	first: pattern_ud_up_many_down_1,
	later: [p_yushangzuo, h_che, z_yushangyou, heng, p_eight]
}
Characters[Characters.length] = {
	char: "僧",
	first: pattern_lr_left_1_right_many,
	later: [danrenpang, lanzitou, s_zengzizh, s_ri]
}
Characters[Characters.length] = {
	char: "孵",
	first: pattern_lr_left_2_right_2,
	later: [p_maozizuo, dian, danerpang, dian, caizitou, z_zi]
}
Characters[Characters.length] = {
	char: "瘩",
	first: pattern_round_left_up,
	later: [bingzitou, caozitou, p_ren, heng, s_kou]
}
Characters[Characters.length] = {
	char: "瘟",
	first: pattern_round_left_up,
	later: [bingzitou, s_ri, minzidi]
}
Characters[Characters.length] = {
	char: "彰",
	first: pattern_lr_left_many_right_1,
	later: [d_li, s_ri, h_ten, sanpie]
}
Characters[Characters.length] = {
	char: "粹",
	first: pattern_lr_left_1_right_1_right_big,
	later: [d_mi, d_zu]
}
Characters[Characters.length] = {
	char: "漱",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, h_shu, fanwenpang]
}
Characters[Characters.length] = {
	char: "漩",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, d_fang, pieheng, henggou, s_zouzidi]
}
Characters[Characters.length] = {
	char: "漾",
	first: pattern_lr_left_1_right_2,
	later: [sandianshui, yangzitou, d_yong]
}
Characters[Characters.length] = {
	char: "慷",
	first: pattern_lr_left_1_right_2,
	later: [shuxinpang, d_guang, z_lishu]
}
Characters[Characters.length] = {
	char: "寡",
	first: pattern_ud_up_middle_down,
	later: [baogaitou, h_guazizhong, p_fen]
}
Characters[Characters.length] = {
	char: "寥",
	first: pattern_ud_up_middle_down,
	later: [baogaitou, z_xi, z_xi, p_ren, sanpie]
}
Characters[Characters.length] = {
	char: "谭",
	first: pattern_lr_left_1_right_2,
	later: [yanzipang, h_xiwuzhe, s_ri, h_ten]
}
Characters[Characters.length] = {
	char: "褐",
	first: pattern_lr_left_1_right_many,
	later: [buyipang, s_ri, baozitou, cha, shuzheheng]
}
Characters[Characters.length] = {
	char: "褪",
	first: pattern_lr_left_1_right_2,
	later: [buyipang, kenzitou, zouzhidi]
}
Characters[Characters.length] = {
	char: "隧",
	first: pattern_lr_left_1_right_2,
	later: [zuoerpang, lanzitou, h_zhizhu, zouzhidi]
}
Characters[Characters.length] = {
	char: "嫡",
	first: pattern_lr_left_1_right_many,
	later: [z_nv, liuzitou, lanzitou, tongzikuang, h_gu]
}
Characters[Characters.length] = {
	char: "缨",
	first: pattern_lr_left_1_right_many,
	later: [jiaosipang, s_bei, s_bei, z_nv]
}

/* 十五画 */
Characters[Characters.length] = {
	char: "撵",
	first: pattern_lr_left_1_right_many,
	later: [tishoupang, h_fu, h_fu, h_che]
}
Characters[Characters.length] = {
	char: "撩",
	first: pattern_lr_left_1_right_many,
	later: [tishoupang, h_liaoyoush, s_ri, z_xiao]
}
Characters[Characters.length] = {
	char: "撮",
	first: pattern_lr_left_1_right_many,
	later: [tishoupang, s_ri, h_erduo, z_you]
}
Characters[Characters.length] = {
	char: "撬",
	first: pattern_lr_left_1_right_many,
	later: [tishoupang, p_mao, p_mao, p_mao]
}
Characters[Characters.length] = {
	char: "擒",
	first: pattern_lr_left_1_right_many,
	later: [tishoupang, p_ren, liuzitou, cha, xiongzikuang, tongzikuang, sigong]
}
Characters[Characters.length] = {
	char: "墩",
	first: pattern_lr_left_1_right_many,
	later: [h_tu, liuzitou, s_kou, z_zi, fanwenpang]
}
Characters[Characters.length] = {
	char: "撰",
	first: pattern_lr_left_1_right_many,
	later: [tishoupang, z_si, z_si, h_xizitou, p_eight]
}
Characters[Characters.length] = {
	char: "鞍",
	first: pattern_lr_left_1_right_2,
	later: [h_caoheng, s_gezidi, baogaitou, z_nv]
}
Characters[Characters.length] = {
	char: "蕊",
	first: pattern_ud_up_1_down_many,
	later: [caozitou, d_xin, d_xin, d_xin]
}
Characters[Characters.length] = {
	char: "蕴",
	first: pattern_ud_up_1_down_many,
	later: [caozitou, jiaosipang, s_ri, minzidi]
}
Characters[Characters.length] = {
	char: "樊",
	first: pattern_ud_up_many_down_1,
	later: [h_mu, cha, cha, h_mu, h_da]
}
Characters[Characters.length] = {
	char: "樟",
	first: pattern_lr_left_1_right_many,
	later: [h_mu, d_li, s_ri, h_ten]
}
Characters[Characters.length] = {
	char: "橄",
	first: pattern_lr_left_1_right_2,
	later: [h_mu, hengzheshu, h_erduo, fanwenpang]
}
Characters[Characters.length] = {
	char: "敷",
	first: pattern_lr_left_2_right_1,
	later: [h_fudu, d_fang, fanwenpang]
}
Characters[Characters.length] = {
	char: "豌",
	first: pattern_lr_left_1_right_many,
	later: [h_dou, baogaitou, p_xi, cangzidi]
}
Characters[Characters.length] = {
	char: "醇",
	first: pattern_lr_left_1_right_1_right_big,
	later: [h_youxin, liuzitou, s_kou, z_zi]
}
Characters[Characters.length] = {
	char: "磕",
	first: pattern_lr_left_1_right_2,
	later: [h_stone, h_qu, minzidi]
}
Characters[Characters.length] = {
	char: "磅",
	first: pattern_lr_left_1_right_many,
	later: [h_stone, liuzitou, lanzitou, tubaogai, d_fang]
}
Characters[Characters.length] = {
	char: "碾",
	first: pattern_lr_left_1_right_many,
	later: [h_stone, z_shizitou, h_xizitou, z_sangzidi]
}
Characters[Characters.length] = {
	char: "憋",
	first: pattern_ud_up_2_down_1,
	later: [d_bizizuo, fanwenpang, d_xin]
}
Characters[Characters.length] = {
	char: "嘶",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, h_qizitou, p_eight, p_jin]
}
Characters[Characters.length] = {
	char: "嘲",
	first: pattern_lr_left_1_right_many,
	later: [s_kou, h_ten, s_ri, h_ten, p_yue]
}
Characters[Characters.length] = {
	char: "嘹",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, h_liaoyoush, s_ri, z_xiao]
}
Characters[Characters.length] = {
	char: "蝠",
	first: pattern_lr_left_1_right_many,
	later: [s_chong, heng, s_kou, s_tian]
}
Characters[Characters.length] = {
	char: "蝎",
	first: pattern_lr_left_1_right_many,
	later: [s_chong, s_ri, baozitou, cha, shuzheheng]
}
Characters[Characters.length] = {
	char: "蝌",
	first: pattern_lr_left_1_right_2,
	later: [s_chong, p_he, d_dou]
}
Characters[Characters.length] = {
	char: "蝗",
	first: pattern_lr_left_1_right_2,
	later: [s_chong, p_bai, h_wang]
}
Characters[Characters.length] = {
	char: "蝙",
	first: pattern_lr_left_1_right_2,
	later: [s_chong, d_hu, s_bianzili]
}
Characters[Characters.length] = {
	char: "嘿",
	first: pattern_lr_left_1_right_2,
	later: [s_kou, s_heizitou, sidiandi]
}
Characters[Characters.length] = {
	char: "幢",
	first: pattern_lr_left_1_right_2,
	later: [s_jin, d_li, s_li]
}
Characters[Characters.length] = {
	char: "镊",
	first: pattern_lr_left_1_right_many,
	later: [jinzipang, h_erduo, z_you, z_you]
}
Characters[Characters.length] = {
	char: "镐",
	first: pattern_lr_left_1_right_many,
	later: [jinzipang, liuzitou, s_kou, tongzikuang, s_kou]
}
Characters[Characters.length] = {
	char: "稽",
	first: pattern_lr_left_1_right_many,
	later: [p_he, youzishen, dian, p_bi, s_ri]
}
Characters[Characters.length] = {
	char: "篓",
	first: pattern_ud_up_2_down_2,
	later: [zhuzitou, d_mi, z_nv]
}
Characters[Characters.length] = {
	char: "膘",
	first: pattern_lr_left_1_right_2,
	later: [p_yue, h_xiwuzhe, h_shiren]
}
Characters[Characters.length] = {
	char: "鲤",
	first: pattern_lr_left_1_right_1_right_big,
	later: [weizitou, s_tian, heng, s_li]
}
Characters[Characters.length] = {
	char: "鲫",
	first: pattern_lr_left_1_right_2,
	later: [weizitou, s_tian, heng, z_jizizuo, danerpang]
}
Characters[Characters.length] = {
	char: "褒",
	first: pattern_ud_up_middle_down,
	later: [liuzitou, danrenpang, s_kou, h_mu, p_yizidi]
}
Characters[Characters.length] = {
	char: "瘪",
	first: pattern_round_left_up,
	later: [bingzitou, p_zi, p_lun]
}
Characters[Characters.length] = {
	char: "瘤",
	first: pattern_round_left_up,
	later: [bingzitou, p_maoshangzuo, z_dao, s_tian]
}
Characters[Characters.length] = {
	char: "瘫",
	first: pattern_round_left_up,
	later: [bingzitou, z_you, quezipang]
}
Characters[Characters.length] = {
	char: "凛",
	first: pattern_lr_left_1_right_many,
	later: [liangdianshui, liuzitou, s_kou, s_kou, h_shiren]
}
Characters[Characters.length] = {
	char: "澎",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, h_tu, s_kou, lanzitou, heng, sanpie]
}
Characters[Characters.length] = {
	char: "潭",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, h_xiwuzhe, s_ri, h_ten]
}
Characters[Characters.length] = {
	char: "潦",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, h_liaoyoush, s_ri, z_xiao]
}
Characters[Characters.length] = {
	char: "澳",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, aozikuang, d_mi, h_da]
}
Characters[Characters.length] = {
	char: "潘",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, fanzitou, s_tian]
}
Characters[Characters.length] = {
	char: "澈",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, d_chongzitou, s_yue, fanwenpang]
}
Characters[Characters.length] = {
	char: "澜",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, d_men, h_jian]
}
Characters[Characters.length] = {
	char: "澄",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, dengzitou, h_dou]
}
Characters[Characters.length] = {
	char: "憔",
	first: pattern_lr_left_1_right_2,
	later: [shuxinpang, quezipang, sidiandi]
}
Characters[Characters.length] = {
	char: "懊",
	first: pattern_lr_left_1_right_many,
	later: [shuxinpang, aozikuang, d_mi, h_da]
}
Characters[Characters.length] = {
	char: "憎",
	first: pattern_lr_left_1_right_many,
	later: [shuxinpang, lanzitou, s_zengzizh, s_ri]
}
Characters[Characters.length] = {
	char: "翩",
	first: pattern_lr_left_2_right_2,
	later: [d_hu, s_bianzili, z_xi, z_xi]
}
Characters[Characters.length] = {
	char: "褥",
	first: pattern_lr_left_1_right_2,
	later: [buyipang, h_chenxing, h_cun]
}
Characters[Characters.length] = {
	char: "谴",
	first: pattern_lr_left_1_right_many,
	later: [yanzipang, s_guizitou, s_guanzidi, zouzhidi]
}
Characters[Characters.length] = {
	char: "鹤",
	first: pattern_lr_left_2_right_1,
	later: [tubaogai, quezipang, p_niaowuheng, heng]
}
Characters[Characters.length] = {
	char: "憨",
	first: pattern_ud_up_2_down_1,
	later: [hengzheshu, h_erduo, fanwenpang, d_xin]
}
Characters[Characters.length] = {
	char: "履",
	first: pattern_round_left_up,
	later: [z_shizitou, shuangrenpang, pieheng, s_ri, zhewen]
}
Characters[Characters.length] = {
	char: "嬉",
	first: pattern_lr_left_1_right_many,
	later: [z_nv, h_shi, s_kou, lanzitou, heng, s_kou]
}
Characters[Characters.length] = {
	char: "豫",
	first: pattern_lr_left_1_right_1_right_big,
	later: [z_yu, p_xiang]
}
Characters[Characters.length] = {
	char: "缭",
	first: pattern_lr_left_1_right_many,
	later: [jiaosipang, h_liaoyoush, s_ri, z_xiao]
}

/* 十六画 */
Characters[Characters.length] = {
	char: "撼",
	first: pattern_lr_left_1_right_many,
	later: [tishoupang, chengzikuang, heng, s_kou, d_xin]
}
Characters[Characters.length] = {
	char: "擂",
	first: pattern_lr_left_1_right_2,
	later: [tishoupang, h_yu, s_tian]
}
Characters[Characters.length] = {
	char: "擅",
	first: pattern_lr_left_1_right_many,
	later: [tishoupang, liuzitou, s_kou, s_kou, s_ri, heng]
}
Characters[Characters.length] = {
	char: "蕾",
	first: pattern_ud_up_1_down_2,
	later: [caozitou, h_yu, s_tian]
}
Characters[Characters.length] = {
	char: "薛",
	first: pattern_ud_up_1_down_2,
	later: [caozitou, pie, s_guanzidi, d_li, h_ten]
}
Characters[Characters.length] = {
	char: "薇",
	first: pattern_ud_up_1_down_many,
	later: [caozitou, shuangrenpang, s_shan, heng, p_ji, fanwenpang]
}
Characters[Characters.length] = {
	char: "擎",
	first: pattern_ud_up_many_down_1,
	later: [caozitou, p_ju, fanwenpang, p_shou]
}
Characters[Characters.length] = {
	char: "翰",
	first: pattern_lr_left_many_right_many,
	later: [h_ten, s_ri, h_ten, p_ren, z_xi, z_xi]
}
Characters[Characters.length] = {
	char: "噩",
	first: pattern_single,
	later: [heng, shu, shu, hengzheshu, heng, shu, hengzheshu, heng, heng,
				shu, hengzheshu, heng, shu, hengzheshu, heng, heng]
}
Characters[Characters.length] = {
	char: "橱",
	first: pattern_lr_left_1_right_many,
	later: [h_mu, h_chang, h_dou, h_cun]
}
Characters[Characters.length] = {
	char: "橙",
	first: pattern_lr_left_1_right_many,
	later: [h_mu, dengzitou, h_dou]
}
Characters[Characters.length] = {
	char: "瓢",
	first: pattern_lr_left_2_right_1,
	later: [h_xiwuzhe, h_shiren, p_gua]
}
Characters[Characters.length] = {
	char: "蟥",
	first: pattern_lr_left_1_right_many,
	later: [s_chong, h_caoheng, s_you, p_eight]
}
Characters[Characters.length] = {
	char: "霍",
	first: pattern_ud_up_1_down_1_down_big,
	later: [h_yushui, quezipang]
}
Characters[Characters.length] = {
	char: "霎",
	first: pattern_ud_up_1_down_2,
	later: [h_yushui, d_li, z_nv]
}
Characters[Characters.length] = {
	char: "辙",
	first: pattern_lr_left_1_right_many,
	later: [h_che, d_chongzitou, s_yue, fanwenpang]
}
Characters[Characters.length] = {
	char: "冀",
	first: pattern_ud_up_middle_down,
	later: [s_beizizuo, p_bi, s_tian, h_xizitou, p_eight]
}
Characters[Characters.length] = {
	char: "踱",
	first: pattern_lr_left_1_right_many,
	later: [s_kou, s_zhi, d_guang, h_caoheng, z_you]
}
Characters[Characters.length] = {
	char: "蹂",
	first: pattern_lr_left_2_right_2,
	later: [s_kou, s_zhi, z_mao, h_mu]
}
Characters[Characters.length] = {
	char: "蟆",
	first: pattern_lr_left_1_right_many,
	later: [s_chong, caozitou, s_ri, h_da]
}
Characters[Characters.length] = {
	char: "螃",
	first: pattern_lr_left_1_right_many,
	later: [s_chong, liuzitou, lanzitou, tubaogai, d_fang]
}
Characters[Characters.length] = {
	char: "螟",
	first: pattern_lr_left_1_right_many,
	later: [s_chong, tubaogai, s_ri, liuzitou, heng, p_eight]
}
Characters[Characters.length] = {
	char: "噪",
	first: pattern_lr_left_1_right_many,
	later: [s_kou, s_kou, s_kou, s_kou, h_mu]
}
Characters[Characters.length] = {
	char: "鹦",
	first: pattern_lr_left_many_right_1,
	later: [s_bei, s_bei, z_nv, p_niaowuheng, heng]
}
Characters[Characters.length] = {
	char: "黔",
	first: pattern_lr_left_2_right_1,
	later: [s_heizitou, sidiandi, p_jintian]
}
Characters[Characters.length] = {
	char: "穆",
	first: pattern_lr_left_1_right_1_left_big,
	later: [p_he, p_bai, s_shaowud, liangpie]
}
Characters[Characters.length] = {
	char: "篡",
	first: pattern_ud_up_middle_down,
	later: [zhuzitou, s_mu, h_da, sigong]
}
Characters[Characters.length] = {
	char: "篷",
	first: pattern_ud_up_2_down_2,
	later: [zhuzitou, zhewen, h_feng, zouzhidi]
}
Characters[Characters.length] = {
	char: "篙",
	first: pattern_ud_up_many_down_many,
	later: [zhuzitou, liuzitou, s_kou, tongzikuang, s_kou]
}
Characters[Characters.length] = {
	char: "篱",
	first: pattern_ud_up_many_down_many,
	later: [zhuzitou, liuzitou, cha, xiongzikuang, tongzikuang, sigong]
}
Characters[Characters.length] = {
	char: "儒",
	first: pattern_lr_left_1_right_2,
	later: [danrenpang, h_yushui, h_erqie]
}
Characters[Characters.length] = {
	char: "膳",
	first: pattern_lr_left_1_right_2,
	later: [p_yue, d_yang, lanzitou, heng, s_kou]
}
Characters[Characters.length] = {
	char: "鲸",
	first: pattern_lr_left_1_right_1_right_big,
	later: [weizitou, s_tian, heng, liuzitou, s_kou, z_xiao]
}
Characters[Characters.length] = {
	char: "瘾",
	first: pattern_round_left_up,
	later: [bingzitou, zuoerpang, weizitou, xunzitou, d_xin]
}
Characters[Characters.length] = {
	char: "瘸",
	first: pattern_round_left_up,
	later: [bingzitou, z_li, s_kou, tongzikuang, p_ren, p_ren]
}
Characters[Characters.length] = {
	char: "糙",
	first: pattern_lr_left_1_right_many,
	later: [d_mi, p_niuwuwei, s_kou, zouzhidi]
}
Characters[Characters.length] = {
	char: "燎",
	first: pattern_lr_left_1_right_many,
	later: [huozipang, h_liaoyoush, s_ri, z_xiao]
}
Characters[Characters.length] = {
	char: "濒",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, s_zhi, s_shaowud, h_ye]
}
Characters[Characters.length] = {
	char: "憾",
	first: pattern_lr_left_1_right_many,
	later: [shuxinpang, chengzikuang, heng, s_kou, d_xin]
}
Characters[Characters.length] = {
	char: "懈",
	first: pattern_lr_left_1_right_many,
	later: [shuxinpang, weizitou, p_yong, z_dao, p_niu]
}
Characters[Characters.length] = {
	char: "窿",
	first: pattern_ud_up_many_down_many,
	later: [xuezitou, zuoerpang, zhewen, heng, p_sheng]
}
Characters[Characters.length] = {
	char: "缰",
	first: pattern_lr_left_1_right_many,
	later: [jiaosipang, heng, s_tian, heng, s_tian, heng]
}

/* 十七画 */
Characters[Characters.length] = {
	char: "壕",
	first: pattern_lr_left_1_right_many,
	later: [h_tu, liuzitou, s_kou, tubaogai, h_zhizhu]
}
Characters[Characters.length] = {
	char: "藐",
	first: pattern_ud_up_1_down_many,
	later: [caozitou, baozitou, p_bai, p_er]
}
Characters[Characters.length] = {
	char: "檬",
	first: pattern_lr_left_1_right_many,
	later: [h_mu, caozitou, tubaogai, h_zhizhu]
}
Characters[Characters.length] = {
	char: "檐",
	first: pattern_lr_left_1_right_many,
	later: [h_mu, weizitou, h_chang, p_eight, d_yan]
}
Characters[Characters.length] = {
	char: "檩",
	first: pattern_lr_left_1_right_many,
	later: [h_mu, liuzitou, s_kou, s_kou, h_shiren]
}
Characters[Characters.length] = {
	char: "檀",
	first: pattern_lr_left_1_right_many,
	later: [h_mu, liuzitou, s_kou, s_kou, s_ri, heng]
}
Characters[Characters.length] = {
	char: "礁",
	first: pattern_lr_left_1_right_2,
	later: [h_stone, quezipang, sidiandi]
}
Characters[Characters.length] = {
	char: "磷",
	first: pattern_lr_left_1_right_many,
	later: [h_stone, d_mi, p_xi, h_jiangyouxia]
}
Characters[Characters.length] = {
	char: "瞭",
	first: pattern_lr_left_1_right_many,
	later: [s_mu, h_liaoyoush, s_ri, z_xiao]
}
Characters[Characters.length] = {
	char: "瞬",
	first: pattern_lr_left_1_right_many,
	later: [s_mu, caizitou, tubaogai, p_xi, h_jiangyouxia]
}
Characters[Characters.length] = {
	char: "瞳",
	first: pattern_lr_left_1_right_2,
	later: [s_mu, d_li, s_li]
}
Characters[Characters.length] = {
	char: "瞪",
	first: pattern_lr_left_1_right_many,
	later: [s_mu, dengzitou, h_dou]
}
Characters[Characters.length] = {
	char: "曙",
	first: pattern_lr_left_1_right_many,
	later: [s_ri, s_siwuzhe, laozitou, s_ri]
}
Characters[Characters.length] = {
	char: "蹋",
	first: pattern_lr_left_1_right_many,
	later: [s_kou, s_zhi, s_ri, z_xi, z_xi]
}
Characters[Characters.length] = {
	char: "蟋",
	first: pattern_lr_left_1_right_2,
	later: [s_chong, fanzitou, d_xin]
}
Characters[Characters.length] = {
	char: "蟀",
	first: pattern_lr_left_1_right_many,
	later: [s_chong, liuzitou, liangdianshui, youzipang, piedian, h_ten]
}
Characters[Characters.length] = {
	char: "嚎",
	first: pattern_lr_left_1_right_many,
	later: [s_kou, liuzitou, s_kou, tubaogai, h_zhizhu]
}
Characters[Characters.length] = {
	char: "赡",
	first: pattern_lr_left_1_right_many,
	later: [s_bei, weizitou, h_chang, p_eight, d_yan]
}
Characters[Characters.length] = {
	char: "镣",
	first: pattern_lr_left_1_right_many,
	later: [jinzipang, h_liaoyoush, s_ri, z_xiao]
}
Characters[Characters.length] = {
	char: "魏",
	first: pattern_lr_left_2_right_1,
	later: [p_he, z_nv, p_gui]
}
Characters[Characters.length] = {
	char: "簇",
	first: pattern_ud_up_many_down_many,
	later: [zhuzitou, d_fang, pieheng, p_shi]
}
Characters[Characters.length] = {
	char: "儡",
	first: pattern_lr_left_1_right_many,
	later: [danrenpang, s_tian, s_tian, s_tian]
}
Characters[Characters.length] = {
	char: "徽",
	first: pattern_lr_left_middle_right,
	later: [shuangrenpang, s_shan, heng, youzipang, z_xiao, fanwenpang]
}
Characters[Characters.length] = {
	char: "爵",
	first: pattern_ud_up_middle_down,
	later: [caizitou, s_siwuzhe, z_jizizuo, h_cun]
}
Characters[Characters.length] = {
	char: "朦",
	first: pattern_lr_left_1_right_many,
	later: [p_yue, caozitou, tubaogai, heng, h_zhizhu]
}
Characters[Characters.length] = {
	char: "臊",
	first: pattern_lr_left_1_right_many,
	later: [p_yue, s_kou, s_kou, s_kou, h_mu]
}
Characters[Characters.length] = {
	char: "鳄",
	first: pattern_lr_left_1_right_many,
	later: [weizitou, s_tian, heng, s_kou, s_kou, h_kui]
}
Characters[Characters.length] = {
	char: "糜",
	first: pattern_round_left_up,
	later: [d_guang, h_mu, h_mu, d_mi]
}
Characters[Characters.length] = {
	char: "癌",
	first: pattern_round_left_up,
	later: [bingzitou, s_kou, s_kou, s_shan]
}
Characters[Characters.length] = {
	char: "懦",
	first: pattern_lr_left_1_right_2,
	later: [shuxinpang, h_yushui, h_erqie]
}
Characters[Characters.length] = {
	char: "豁",
	first: pattern_lr_left_many_right_1,
	later: [baogaitou, h_feng, s_kou, p_eight, p_ren, s_kou]
}
Characters[Characters.length] = {
	char: "臀",
	first: pattern_ud_up_many_down_1,
	later: [z_shizitou, h_xizitou, p_eight, p_ji, z_you, s_yue]
}

/* 十八画 */
Characters[Characters.length] = {
	char: "藕",
	first: pattern_ud_up_1_down_2,
	later: [caozitou, h_gengzizuo, s_yu]
}
Characters[Characters.length] = {
	char: "藤",
	first: pattern_ud_up_1_down_many,
	later: [caozitou, p_yue, d_juanzitou, z_dianshui]
}
Characters[Characters.length] = {
	char: "瞻",
	first: pattern_lr_left_1_right_many,
	later: [s_mu, weizitou, h_chang, p_eight, d_yan]
}
Characters[Characters.length] = {
	char: "嚣",
	first: pattern_ud_up_middle_down,
	later: [s_kou, s_kou, h_ye, s_kou, s_kou]
}
Characters[Characters.length] = {
	char: "鳍",
	first: pattern_lr_left_1_right_many,
	later: [weizitou, s_tian, heng, laozitou, p_bi, s_ri]
}
Characters[Characters.length] = {
	char: "癞",
	first: pattern_round_left_up,
	later: [bingzitou, h_hengpie, s_juzitou, p_eight, h_ye]
}
Characters[Characters.length] = {
	char: "瀑",
	first: pattern_lr_left_1_right_many,
	later: [sandianshui, s_ri, h_xizitou, p_eight, z_dianshui]
}
Characters[Characters.length] = {
	char: "襟",
	first: pattern_lr_left_1_right_many,
	later: [buyipang, h_mu, h_mu, h_shiren]
}
Characters[Characters.length] = {
	char: "璧",
	first: pattern_lr_left_many_right_1,
	later: [z_shizitou, s_kou, d_li, h_ten, h_yu]
}
Characters[Characters.length] = {
	char: "戳",
	first: pattern_lr_left_many_right_1,
	later: [z_xi, z_xi, quezipang, h_ge]
}

/* 十九画 */
Characters[Characters.length] = {
	char: "攒",
	first: pattern_lr_left_1_right_many,
	later: [tishoupang, p_niuwuwei, p_er, p_niuwuwei, p_er, s_bei]
}
Characters[Characters.length] = {
	char: "孽",
	first: pattern_ud_up_middle_down,
	later: [caozitou, pie, s_guanzidi, d_li, h_ten, z_zi]
}
Characters[Characters.length] = {
	char: "蘑",
	first: pattern_ud_up_1_down_many,
	later: [caozitou, d_guang, h_mu, h_mu, h_stone]
}
Characters[Characters.length] = {
	char: "藻",
	first: pattern_ud_up_1_down_many,
	later: [caozitou, sandianshui, s_kou, s_kou, s_kou, h_mu]
}
Characters[Characters.length] = {
	char: "鳖",
	first: pattern_ud_up_2_down_1,
	later: [d_bizizuo, fanwenpang, weizitou, s_tian, heng]
}
Characters[Characters.length] = {
	char: "蹭",
	first: pattern_lr_left_1_right_many,
	later: [s_kou, s_zhi, lanzitou, s_zengzizh, s_ri]
}
Characters[Characters.length] = {
	char: "蹬",
	first: pattern_lr_left_1_right_many,
	later: [s_kou, s_zhi, dengzitou, h_dou]
}
Characters[Characters.length] = {
	char: "簸",
	first: pattern_ud_up_many_down_many,
	later: [zhuzitou, h_qizitou, p_eight, p_pi]
}
Characters[Characters.length] = {
	char: "簿",
	first: pattern_ud_up_many_down_many,
	later: [zhuzitou, sandianshui, h_fudu, h_cun]
}
Characters[Characters.length] = {
	char: "蟹",
	first: pattern_ud_up_many_down_1,
	later: [weizitou, p_yong, z_dao, p_niu, s_chong]
}
Characters[Characters.length] = {
	char: "靡",
	first: pattern_round_left_up,
	later: [d_guang, h_mu, h_mu, s_fei]
}
Characters[Characters.length] = {
	char: "癣",
	first: pattern_round_left_up,
	later: [bingzitou, weizitou, s_tian, heng, d_yang]
}
Characters[Characters.length] = {
	char: "羹",
	first: pattern_ud_up_2_down_2,
	later: [yangzitou, sidiandi, yangzitou, h_da]
}

/* 二十画 */
Characters[Characters.length] = {
	char: "鬓",
	first: pattern_ud_up_many_down_many,
	later: [h_sizizuo, sanpie, baogaitou, p_qiu, p_eight]
}
Characters[Characters.length] = {
	char: "攘",
	first: pattern_lr_left_1_right_many,
	later: [tishoupang, liuzitou, s_kou, s_kou, h_sanhls, p_yizidi]
}
Characters[Characters.length] = {
	char: "蠕",
	first: pattern_lr_left_1_right_2,
	later: [s_chong, h_yushui, h_erqie]
}
Characters[Characters.length] = {
	char: "巍",
	first: pattern_ud_up_1_down_many,
	later: [s_shan, p_he, z_nv, p_gui]
}
Characters[Characters.length] = {
	char: "鳞",
	first: pattern_lr_left_1_right_many,
	later: [weizitou, s_tian, heng, d_mi, p_xi, h_jiangyouxia]
}
Characters[Characters.length] = {
	char: "糯",
	first: pattern_lr_left_1_right_2,
	later: [d_mi, h_yushui, h_erqie]
}
Characters[Characters.length] = {
	char: "譬",
	first: pattern_ud_up_many_down_1,
	later: [z_shizitou, s_kou, d_li, h_ten, d_yan]
}

/* 二十一画 */
Characters[Characters.length] = {
	char: "霹",
	first: pattern_ud_up_many_down_1,
	later: [h_yushui, z_shizitou, s_kou, d_li, h_ten]
}
Characters[Characters.length] = {
	char: "躏",
	first: pattern_lr_left_1_right_many,
	later: [s_kou, s_zhi, caozitou, d_men, quezipang]
}
Characters[Characters.length] = {
	char: "髓",
	first: pattern_lr_left_many_right_many,
	later: [s_guzitou, s_yue, h_hengpie, h_gong, s_yue, zouzhidi]
}

/* 二十二画 */
Characters[Characters.length] = {
	char: "蘸",
	first: pattern_ud_up_1_down_many,
	later: [caozitou, h_youxin, quezipang, sidiandi]
}
Characters[Characters.length] = {
	char: "镶",
	first: pattern_lr_left_1_right_many,
	later: [jinzipang, liuzitou, s_kou, s_kou, h_sanhls, p_yizidi]
}
Characters[Characters.length] = {
	char: "瓤",
	first: pattern_lr_left_many_right_1,
	later: [liuzitou, s_kou, s_kou, h_sanhls, p_yizidi, p_gua]
}

/* 二十四画 */
Characters[Characters.length] = {
	char: "矗",
	first: pattern_pin,
	later: [h_hengpie, s_juzitou, h_hengpie, s_juzitou, h_hengpie, s_juzitou]
}
