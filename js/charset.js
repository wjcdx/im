/* 结构型 */
/* include pattern.js */


/* 横竖撇捺折 for 独体字 续笔 */
/* na can not be the the first stroke of a character */
/* include stroke.js */


/* 其他结构型续笔：部首
 * from 常用汉字正形手册
 */
/* include partial.js */

var partial_strokes = {
	/* 横起 */
	h_one           : [heng],  /* 一 */
	h_two           : [duoheng],  /* 二 */
	h_three         : [duoheng],  /* 三 */
	h_five          : [heng, shu, hengzheshu, heng],  /* 五 */
	h_seven         : [heng, shuwanhenggou],  /* 七 */
	h_ten           : [heng, shu],  /* 十 */
	h_chang         : [heng, pie],  /* 厂 */
	h_ding          : [heng, shugou],  /* 丁 */
	h_gan           : [duoheng, shu],  /* 干 */
	h_yushi         : [duoheng, shugou],  /* 于，于是 */
	h_kui			: [duoheng, shuzhehengzheshugou], /* 亏 */
	h_shi           : [heng, shu, heng],  /* 士 */
	h_gong          : [heng, shu, heng],  /* 工 */
	h_tu            : [heng, shu, heng],  /* 土 */
	h_cai           : [heng, shugou, pie],  /* 才 */
	h_cun           : [heng, shugou, dian],  /* 寸 */
	h_xia           : [heng, shu, dian],  /* 下 */
	h_da            : [heng, pie, na],  /* 大 */
	h_zhang         : [heng, pie, na],  /* 丈 */
	h_yuni			: [heng, shuzhehengzheshugou, heng],  /* 与 */
	h_wan           : [heng, hengzheshugou, pie],  /* 万 */
	h_feng          : [duoheng, shu],  /* 丰 */
	h_wang          : [duoheng, shu, heng],  /* 王 */
	h_jing          : [duoheng, pie, shu],  /* 井 */
	h_kai           : [duoheng, pie, shu],  /* 开 */
	h_fu            : [duoheng, pie, na],  /* 夫 */
	h_tian          : [duoheng, pie, na],  /* 天 */
	h_wuyou         : [duoheng, pie, shuwanhenggou],  /* 无 */
	h_zhuan         : [duoheng, shuzhehengzhepie, dian],  /* 专 */
	h_mu            : [heng, shu, pie, na],  /* 木 */
	h_bu            : [heng, pie, shu, dian],  /* 不 */
	h_tai           : [heng, pie, na, dian],  /* 太 */
	h_quan          : [heng, pie, na, dian],  /* 犬 */
	h_youqi			: [heng, pie, shuwanhenggou, dian],  /* 尤 */
	h_che           : [heng, piezheheng, heng, shu],  /* 车 */
	h_ju            : [heng, shuzheheng, hengzheshu, heng],  /* 巨 */
	h_ya            : [heng, piezheheng, shugou, pie],  /* 牙 */
	h_tun           : [heng, shuzheheng, shu, shuwanhenggou],  /* 屯 */
	h_hu			: [heng, piezheheng, hengzhepie, heng],  /* 互 */
	h_wa            : [heng, shuzheti, hengzhenagou, dian],  /* 瓦 */
	h_gai           : [heng, shu, heng, shuzhehengzheshugou],  /* 丐 */
	h_dai           : [heng, pie, hengzhepie, dian],  /* 歹 */
	h_ge            : [heng, nagou, pie, dian],  /* 戈 */
	h_yu            : [duoheng, shu, heng, dian],  /* 玉 */
	h_mo            : [duoheng, shu, pie, na],  /* 末 */
	h_weilai        : [duoheng, shu, pie, na],  /* 未 */
	h_jida          : [duoheng, shu, shuzheheng, shu],  /* 击，打 */
	h_zheng         : [heng, shu, heng, shu, heng],  /* 正 */
	h_ganku         : [heng, shu, shu, duoheng],  /* 甘 */
	h_shijie        : [heng, shu, shu, heng, shuzheheng],  /* 世 */
	h_ben           : [heng, shu, pie, na, heng],  /* 本 */
	h_shudao		: [heng, shu, pie, na, dian],  /* 术, 士 */
	h_bing          : [heng, shu, hengzheshugou, pie, na],  /* 丙 */
	h_stone         : [heng, pie, shu, hengzheshu, heng],  /* 石 */
	h_long          : [heng, pie, shuwanhenggou, pie, dian],  /* 龙 */
	h_ping          : [heng, dian, pie, heng, shu],  /* 平 */
	h_dong          : [heng, piezheheng, shugou, pie, dian],  /* 东 */
	h_erduo         : [heng, shu, shu, duoheng],  /* 耳 */
	h_yazhou        : [heng, shu, shu, dian, pie, heng],  /* 亚 */
	h_chen          : [heng, shu, hengzheshu, heng, shu, shuzheheng],  /* 臣 */
	h_zai			: [heng, shu, hengzheshugou, shu, duoheng],  /* 再 */
	h_xi            : [heng, shu, hengzheshu, pie, shuzheheng, heng],  /* 西 */
	h_hundred		: [heng, pie, shu, hengzheshu, duoheng],  /* 百 */
	h_erqie         : [heng, pie, shu, hengzheshugou, shu, shu],  /* 而 */
	h_ye            : [heng, pie, shu, hengzheshu, pie, dian],  /* 页 */
	h_si			: [heng, pie, hengzhepie, dian, pie, shuwanhenggou],  /* 死 */
	h_cheng         : [heng, pie, hengzheshugou, nagou, pie, dian],  /* 成 */
	h_jia           : [heng, dian, pie, heng, pie, na],  /* 夹 */
	h_wei           : [duoheng, hengzheshugou, shu],  /* 韦 */
	h_li            : [heng, shu, hengzheshu, heng, pie, na],  /* 吏 */
	h_yi            : [heng, hengzheshu, heng, shuzhehengzheshugou, pie, na],  /* 夷 */
	h_yan           : [heng, shu, shu, dian, pie, heng, pie],  /* 严 */
	h_qiu           : [heng, shugou, dian, ti, pie, na, dian],  /* 求 */
	h_geng          : [heng, shu, hengzheshu, duoheng, pie, na],  /* 更 */
	h_shufu			: [heng, shu, hengzheshu, heng, shu, pie, na],  /* 束 */
	h_dou           : [heng, shu, hengzheshu, heng, dian, pie, heng],  /* 豆 */
	h_liang         : [heng, shu, hengzheshugou, pie, dian, pie, dian],  /* 两 */
	h_lai			: [heng, dian, pie, heng, shu, pie, na],  /* 来 */
	h_fudu          : [heng, shu, hengzheshugou, duoheng, shu, dian],  /* 甫 */
	h_shiqing		: [heng, shu, hengzheshu, heng, hengzheshu, duoheng, shugou],  /* 事，情 */
	h_yushui        : [heng, shu, hengzheshugou, shu, dian, dian, dian, dian],  /* 雨 */
	h_gexing		: [heng, shu, shu, heng, shu, hengzheshu, duoheng, shu],  /* 革，新 */
	h_mian			: [heng, pie, shu, hengzheshu, shu, shu, duoheng],  /* 面 */
	h_jian          : [heng, shu, hengzheshu, dian, pie, heng, shu, pie, na],  /* 柬 */
	h_youxin        : [heng, shu, hengzheshu, pie, shuzheheng, heng, heng],  /* 酉，辛 */
	h_wuxu          : [heng, pie, nagou, pie, dian],  /* 戊 */
	h_wuzidi        : [heng, pie, shuwanhenggou],  /* 兀 */
	h_yiyou			: [heng, nagou, dian],  /* 弋，游 */
	h_nian			: [heng, shu, shu, heng],  /* 廿 */
	h_miangai		: [heng, shu, shuzheheng, hengzheshugou],  /* 丏 */
	h_sa			: [heng, pie, shu, shu],  /* 卅 */
	h_lei			: [duoheng, shu, pie, na],  /* 耒 */
	h_zhizhu        : [heng, pie, wanshugou, pie, pie, pie, dian],  /* 豕 */
	
	h_tishoupang	: [heng, shugou, ti],  /* 提 */
	h_caozitou		: [heng, shu, shu],  /* 草 */
	h_jiangzikuang	: [heng, shuzheheng],  /* 匠 */
	h_hengpie       : [heng, pie],  /* 左，左上 */
	h_bizizuo		: [heng, shuzheti],  /* 比，左边 */
	h_qiezizuo		: [heng, shuzheti],  /* 切，左边 */
	h_qiaoziyou     : [heng, shuzhehengzheshugou],  /* 巧, 右边 */
	h_shizikuang	: [heng, nagou, dian],  /* 式 */
	h_laozitou		: [heng, shu, heng, pie],  /* 老 */
	h_hengjin		: [heng, shu, hengzheshugou, shu],  /* 师，右边 */
	h_mugou         : [heng, shugou, pie, dian],  /* 杀，下部 */
	h_piecao        : [heng, pie, shu],  /* 异，下部 */
	h_piecaobuchu	: [heng, pie, shu],  /* 痹，里下部 */
	h_zaizitou      : [heng, pie, shu],  /* 在，去土 */
	h_zangzikuang	: [heng, pie, shuzheheng, heng, pie, nagou, pie, dian],  /* 臧，外框 */
	h_piefeng       : [duoheng, pie],  /* 寿，上部 */
	h_qingzitou     : [duoheng, shu, heng],  /* 青，上部 */
	h_jiezikuang	: [heng, nagou, pie, dian],  /* 戒，外框 */
	h_xingziyou     : [duoheng, shugou],  /* 行，右边 */
	h_yuzidi        : [duoheng, shugou, pie, dian],  /* 余，下部 */
	h_fengzidi      : [duoheng, shu],  /* 奉，下部 */
	h_shushi        : [heng, shu, hengzheshugou, shu],  /* 肺，右边 */
	h_fengzitou     : [duoheng, pie, na],  /* 奉，上部 */
	h_wuzikuang		: [duoheng, nagou, dian],  /* 武，外框 */
	h_hengpiedian	: [heng, pie, dian],  /* 拔，右除又 */
	h_jianziyou     : [heng, piezheheng, hengzheshugou, pie, dian],  /* 拣，右边 */
	h_cizizuo       : [heng, shu, hengzheshugou, shu, pie, dian, shu, shugou],  /* 刺，左边 */
	h_shixue        : [heng, hengzheshu, duoheng, shu],  /* 妻，上部 */
	h_zhizitou		: [heng, piezheheng, dian],  /* 至，上部 */
	h_gongzitou		: [heng, shu, shu, heng],  /* 共，上部 */
	h_jinxia        : [duoheng, shu, dian, pie, heng],  /* 金，下部 */
	h_zhan          : [duoheng, nagou, pie, dian],  /* 栈，右边 */
	h_shizidi		: [heng, shu, heng, pie, na],  /* 是，下边 */
	h_jiangyouxia   : [heng, piezheheng, shu],  /* 降，右下 */
	h_gewudian      : [heng, nagou, pie],  /* 戈，无点 */
	h_nue           : [heng, shuzheheng, heng],  /* 虐，里面 */
	h_xianzikuang	: [heng, pie, nagou, pie, dian],  /* 咸，外框 */
	h_weizidi		: [heng, shuzheti, pie, na],  /* 畏，下部 */
	h_baiziyou      : [duoheng, shu],  /* 拜，右边 */
	h_caoheng       : [heng, shu, shu, heng],  /* 革，上部 */
	h_yangzizh      : [duoheng, pie, na],  /* 养，中部 */
	h_yangzishen	: [duoheng, shu],  /* 羊，下部 */
	h_jiziyou       : [heng, piezheheng, pie, shuwanhenggou],  /* 既，右边 */
	h_zaizikuang	: [heng, shu, heng, nagou, pie, dian],  /* 栽，去木 */
	h_hengxiapie    : [heng, pie],  /* 夏，最上 */
	h_sizizuo       : [heng, shu, duoheng, piezheheng, dian],  /* 肆，左边 */
	h_jieziyou      : [heng, hengzheshu, duoheng, shu, heng, pie, na],  /* 捷，右边 */
	h_zhuoziyou		: [heng, pie, wanshugou, pie, pie, pie, dian, dian],  /* 啄，右边 */
	h_hengcun		: [duoheng, shugou, dian],  /* 得，右下 */
	h_caoczitou		: [heng, shu, hengzheshu, heng, shu, shu, heng],  /* 曹，上部 */
	h_yuezili       : [heng, shuzheti, nagou, pie, dian],  /* 越，里面 */
	h_xiwuzhe       : [heng, shu, hengzheshu, shu, shu, heng],  /* 要，上部 */
	h_dingwugou     : [heng, shu],  /* 哥，上框 */
	h_qizitou       : [heng, shu, shu, duoheng],  /* 其，上面 */
	h_huizitou      : [heng, shu, hengzheshu, duoheng, shu, heng, dian],  /* 惠，上部 */
	h_sanhls        : [duoheng, shu, shu, heng],  /* 塞，中上 */
	h_qiangzitou    : [heng, shu, dian, pie, heng],  /* 墙，右上 */
	h_daizitou      : [heng, shu, shu, shu],  /* 带，最上 */
	h_hengsishu		: [heng, shu, shu, shu, shu],  /* 舞，一横四竖 */
	h_liaoyoush     : [heng, pie, na, dian, pie],  /* 燎，右上 */
	h_yinzizhong    : [heng, shu, hengzheshu, heng, shu, heng],  /* 寅，中部 */
	h_yuwuheng      : [heng, shuzhehengzheshugou],  /* 与，无下横 */
	h_jimei         : [heng, shu, shu, hengzheshu, heng, shu, shuzheheng],  /* 姬，右边，美 */
	h_hengjiatui	: [heng, pie, dian],  /* 六，去点, 横加腿 */
	h_guazizhong    : [heng, pie, shu, hengzheshu, duoheng],  /* 寡，中部 */
	h_nangzitou     : [heng, shu, hengzheshu, heng, shu],  /* 囊，最上 */
	h_yazili		: [heng, shu, heng, dian],  /* 压，里面 */
	h_jianzishen	: [heng, hengzheshu, duoheng, shu, shu, pie, na],  /* 兼 */
	h_pieyangdi		: [duoheng, pie],  /* 差, 中间 */
	h_youwudian		: [heng, pie, shuwanhenggou],  /* 尤，无点 */
	h_qiangzishen	: [duoheng, pie, shuwanhenggou],  /* 羌，下部 */
	h_yuzikuang		: [heng, nagou, pie, pie, pie, dian],  /* 彧，围部 */


	/* 竖起 */
	s_four          : [shu, hengzheshu, pie, shuzheheng, heng],  /* 四 */
	s_bu            : [shu, dian],  /* 卜 */
	s_shang			: [shu, duoheng],  /* 上 */
	s_kou           : [shu, hengzheshu, heng],  /* 口 */
	s_jin           : [shu, hengzheshugou, shu],  /* 巾 */
	s_shan          : [shu, shuzheheng, shu],  /* 山 */
	s_zhi           : [shu, heng, shu, heng],  /* 止 */
	s_shao          : [shu, pie, dian, pie],  /* 少 */
	s_ri            : [shu, hengzheshu, duoheng],  /* 日 */
	s_zhong         : [shu, hengzheshu, heng, shu],  /* 中 */
	s_bei           : [shu, hengzheshu, pie, dian],  /* 贝 */
	s_nei           : [shu, hengzheshugou, pie, dian],  /* 内 */
	s_jian          : [shu, hengzheshu, pie, shuwanhenggou],  /* 见 */
	s_ka			: [shu, duoheng, shu, dian],  /* 卡 */
	s_ye            : [shu, shu, dian, pie, heng],  /* 业 */
	s_qie           : [shu, hengzheshu, duoheng],  /* 且 */
	s_mu            : [shu, hengzheshu, duoheng],  /* 目 */
	s_jia           : [shu, hengzheshu, duoheng, shu],  /* 甲 */
	s_shen          : [shu, hengzheshu, duoheng, shu],  /* 申 */
	s_tian          : [shu, hengzheshu, heng, shu, heng],  /* 田 */
	s_you           : [shu, hengzheshu, heng, shu, heng],  /* 由 */
	s_dian          : [shu, hengzheshu, duoheng, shuwanhenggou],  /* 电 */
	s_shi           : [shu, hengzheshu, heng, pie, na],  /* 史 */
	s_yang          : [shu, hengzheshu, heng, pie, na],  /* 央 */
	s_tu			: [shu, heng, shu, hengzheshuzhehengzheshu, heng],  /* 凸 */
	s_ao			: [shu, hengzheshuzheheng, shu, hengzheshu, heng],  /* 凹 */
	s_minzidi		: [shu, hengzheshu, shu, shu, heng],  /* 监 */
	s_chong         : [shu, hengzheshu, heng, shu, heng, dian],  /* 虫 */
	s_qu			: [shu, hengzheshu, heng, shu, shu, heng],  /* 曲 */
	s_rou			: [shu, hengzheshugou, pie, dian, pie, dian],  /* 肉 */
	s_li            : [shu, hengzheshu, duoheng, shu, duoheng],  /* 里 */
	s_zu            : [shu, hengzheshu, heng, shu, heng, pie, na],  /* 足 */
	s_chuan         : [shu, hengzheshu, heng, shu, hengzheshu, heng, shu],  /* 串 */
	s_guo           : [shu, hengzheshu, duoheng, shu, pie, na],  /* 果 */
	s_yu            : [shu, hengzheshu, duoheng, shu, hengzheshugou, shu, heng, dian],  /* 禺 */
	s_ran			: [shu, hengzheshugou, shu, duoheng],  /* 冉 */
	s_yeyao			: [shu, hengzheshu, duoheng, nagou, pie],  /* 曳，摇 */

	s_tongzikuang	: [shu, hengzheshugou],  /* 同 */
	s_lidaopang		: [shu, shugou],  /* 刚 */
	s_shangzitou	: [shu, heng],  /* 上 */
	s_guangzitou	: [shu, dian, pie],  /* 光 */
	s_lixiaban		: [shu, hengzheshugou, dian],  /* 丽，下半 */
	s_shaowud       : [shu, pie, pie],  /* 步，下部 */
	s_liangshu      : [shu, shu],  /* 竖，上左 */
	s_huzipang		: [shu, heng, henggou, pie],  /* 虎, 围部 */
	s_juzitou       : [shu, hengzheshu, duoheng],  /* 具，上边 */
	s_dianzitou     : [shu, hengzheshu, heng, shu, shu, heng],  /* 典，上面 */
	s_siwuzhe       : [shu, hengzheshu, shu, shu, heng],  /* 罗，上面 */
	s_guanzidi      : [shu, hengzheshu, heng, hengzheshu, heng],  /* 官，下面 */
	s_guanzitou     : [shu, hengzheshu, heng, shu, heng],  /* 贯 */
	s_zouzidi       : [shu, heng, pie, na],  /* 走，下面 */
	s_daori         : [shu, hengzheshu, shu, heng],  /* 临，右下 */
	s_guizitou      : [shu, hengzheshu, heng, shu, heng],  /* 贵，上部 */
	s_shupie        : [shu, pie],  /* 帅，左边 */
	s_guzitou       : [shu, hengzheshu, hengzheshu],  /* 骨，去月, 去秃宝盖 */
	s_bianzili      : [shu, hengzheshugou, heng, shu, shu],  /* 扁，里面 */
	s_feizizuo		: [shu, duoheng],  /* 非，左边 */
	s_feiziyou		: [shu, duoheng],  /* 非，右边 */
	s_yangwutou		: [shu, hengzheshu, heng, pie, na],  /* 奂，下边 */
	s_hguankou      : [shu, hengzheshu, duoheng],  /* 衰，中间，横贯口 */
	s_danzidi       : [shu, hengzheshu, duoheng, shu],  /* 单，下部 */
	s_heizitou      : [shu, hengzheshu, dian, pie, heng, shu, duoheng],  /* 黑，上部 */
	s_zengzizh      : [shu, hengzheshu, shu, dian, pie, heng],  /* 曾，中间 */
	s_jinzidi		: [shu, hengzheshu, duoheng, shu, ti],  /* 菫，下边 */
	s_dingxiayou    : [shu, heng, shu, hengzheshu],  /* 鼎，下右 */
	s_dianshui      : [shu, dian, ti, pie, dian],  /* 犀，里上 */
	s_beizizuo      : [shu, heng, ti],  /* 北，左边 */
	s_gezidi        : [shu, hengzheshu, duoheng, shu],  /* 革，下面 */
	s_tuzishen		: [shu, hengzheshu, heng, pie, shuwanhenggou, dian],  /* 兔, 下面 */
	s_mianzishen	: [shu, hengzheshu, heng, pie, shuwanhenggou],  /* 免, 下面 */
	s_xiangzishen	: [shu, hengzheshu, heng, pie, wanshugou, pie, pie, pie, dian],  /* 象，下部 */
	s_guizishen		: [shu, hengzheshu, duoheng, shuwanhenggou],  /* 龟, 下部 */
	s_zuzipang		: [shu, hengzheshu, heng, shu, heng, shu, ti],  /* 跟，左边 */
	s_youzishen		: [shu, hengzheshu, hengzheshu, heng, heng],  /* 卣，下部 */

	/* 撇起 */
	p_eight         : [pie, na],  /* 八 */
	p_eightdian		: [pie, dian],  /* 贝，只，下部 */
	p_nine          : [pie, hengzheshuwanhenggou],  /* 九 */
	p_ren           : [pie, na],  /* 人 */
	p_ru            : [pie, na],  /* 入 */
	p_ji            : [pie, hengzheshuwanhenggou],  /* 几 */
	p_er            : [pie, shuwanhenggou],  /* 儿 */
	p_thousand      : [pie, heng, shu],  /* 千 */
	p_chuan         : [pie, shu, shu],  /* 川 */
	p_ge			: [pie, na, shu],  /* 个 */
	p_jiuyuan		: [pie, hengzhepie, na],  /* 久 */
	p_fan           : [pie, hengzheshuwanhenggou, dian],  /* 凡 */
	p_jige          : [pie, hengzheshuzhehengzhepie, na],  /* 及，格 */
	p_xi            : [pie, hengzhepie, dian],  /* 夕 */
	p_wan           : [pie, hengzheshuwanhenggou, dian],  /* 丸 */
	p_me			: [pie, piezheheng, dian],  /* 么 */
	p_bi            : [pie, shuwanhenggou],  /* 匕 */
	p_wu            : [pie, duoheng, shu],  /* 午 */
	p_niu           : [pie, duoheng, shu],  /* 牛 */
	p_shou          : [pie, duoheng, shugou],  /* 手 */
	p_mao           : [pie, duoheng, shuwanhenggou],  /* 毛 */
	p_qi            : [pie, duoheng, hengzhenagou],  /* 气 */
	p_shenggao		: [pie, heng, pie, shu],  /* 升 */
	p_chang         : [pie, heng, shuzheti, na],  /* 长 */
	p_pian          : [pie, shu, heng, hengzheshu],  /* 片 */
	p_bihuo			: [pie, shu, hengzheshugou, shu],  /* 币，货 */
	p_jin           : [pie, pie, heng, shu],  /* 斤 */
	p_zhao          : [pie, pie, shu, na],  /* 爪 */
	p_fu            : [pie, dian, pie, na],  /* 父 */
	p_fa            : [pie, dian, hengzhepie, na],  /* 乏 */
	p_yue           : [pie, hengzheshugou, duoheng],  /* 月 */
	p_shizu         : [pie, shuzheti, heng, nagou],  /* 氏 */
	p_wuyao         : [pie, hengzheshugou, pie, pie],  /* 勿 */
	p_dan           : [pie, hengzheshugou, heng, dian],  /* 丹 */
	p_wuya          : [pie, hengzheshugou, shuzhehengzheshugou, heng],  /* 乌 */
	p_yao           : [pie, heng, pie, na],  /* 夭 */
	p_sheng         : [pie, duoheng, shu, heng],  /* 生 */
	p_shiqu         : [pie, duoheng, pie, na],  /* 失，去 */
	p_he            : [pie, heng, shu, pie, na],  /* 禾 */
	p_qiu           : [pie, shu, heng, shu, heng],  /* 丘 */
	p_bai           : [pie, shu, hengzheshu, duoheng],  /* 白 */
	p_chi			: [pie, pie, heng, shu, dian],  /* 斥 */
	p_gua           : [pie, pie, shuzheti, dian, na],  /* 瓜 */
	p_hu            : [pie, dian, pie, heng, shugou],  /* 乎 */
	p_yong          : [pie, hengzheshugou, duoheng, shu],  /* 用 */
	p_shuai			: [pie, hengzheshugou, duoheng, shuwanhenggou],  /* 甩 */
	p_le            : [pie, shuzheheng, shugou, pie, dian],  /* 乐 */
	p_congmang		: [pie, hengzheshugou, pie, pie, dian],  /* 匆 */
	p_ce            : [pie, hengzheshugou, pie, hengzheshugou, heng],  /* 册 */
	p_niao			: [pie, hengzheshugou, dian, shuzhehengzheshugou, heng],  /* 鸟 */
	p_shi           : [pie, duoheng, pie, dian],  /* 矢 */
	p_zha           : [pie, heng, shu, duoheng],  /* 乍 */
	p_nian			: [pie, duoheng, shu, heng, shu],  /* 年 */
	p_zhu           : [pie, duoheng, shu, pie, na],  /* 朱 */
	p_zi            : [pie, shu, hengzheshu, duoheng],  /* 自 */
	p_xue			: [pie, shu, hengzheshu, shu, shu, heng],  /* 血 */
	p_zhou          : [pie, pie, hengzheshugou, heng, dian, dian],  /* 舟 */
	p_rengui        : [pie, heng, shu, heng],  /* 壬 */
	p_jiu           : [pie, shu, hengzheshu, duoheng],  /* 臼 */
	p_wo            : [pie, heng, shugou, ti, nagou, pie, dian],  /* 我 */
	p_di            : [pie, shuzheti, heng, nagou, dian],  /* 氐 */
	p_shen          : [pie, shu, hengzheshugou, duoheng, pie],  /* 身 */
	p_chui          : [pie, heng, shu, heng, shu, pie, duoheng],  /* 垂 */
	p_bingxing		: [pie, heng, hengzheshu, duoheng, shu, pie, na],  /* 秉, 性 */
	p_zhong         : [pie, heng, shu, hengzheshu, duoheng, shu, duoheng],  /* 重 */
	p_gui           : [pie, shu, hengzheshu, duoheng, pie, shuwanhenggou, piezheheng, dian],  /* 鬼 */
	p_yu            : [pie, shu, hengzheshu, heng, shu, hengzheshugou, shu, ti, dian],  /* 禹 */
	p_yimai			: [pie, na],  /* 乂,麦 */
	p_baozipang		: [pie, dian, dian, pie, wanshugou, pie, pie],  /* 豸 */

	p_shao          : [pie, hengzheshugou, dian],  /* 勺 */

	p_pieheng		: [pie, heng],  /* 乞，上部 */
	p_danrenpang	: [pie, shu],  /* 化 */
	p_baozitou		: [pie, hengzheshugou],  /* 包 */
	p_fanzipang		: [pie, pie],  /* 反 */
	p_dao			: [pie, shu],  /* 介，下部 */
	p_fengzitou		: [pie, hengzhenagou],  /* 凤 */
	p_chadian		: [pie, dian],  /* 区，里面 */
	p_chana			: [pie, na],  /* 爻，下部 */
	p_yinzizuo		: [pie, shuzheti, heng],  /* 印，左边 */
	p_fanquanpang	: [pie, wanshugou, pie],  /* 狼 */
	p_zhewen		: [pie, hengzhepie, na],  /* 条 */
	p_shichi		: [pie, henggou, shuzheti],  /* 饭 */
	p_qianzitou		: [pie, henggou],  /* 欠，上部 */
	p_tuoziyou      : [pie, heng, shuwanhenggou],  /* 托，右边 */
	p_nawan			: [pie, hengzhenagou, dian],  /* 执，右边 */
	p_zhuzizuo		: [pie, heng, shu],  /* 竹，左边 */
	p_zhuziyou		: [pie, heng, shugou],  /* 竹，右边 */
	p_xiangzikuang  : [pie, shu, hengzheshugou],  /* 向 */
	p_shuangrenpang	: [pie, pie, shu],  /* 很 */
	p_weizitou		: [pie, hengzhepie],  /* 危 */
	p_fanwenpang	: [pie, heng, pie, na],  /* 故 */
	p_sanpie		: [pie, pie, pie],  /* 形 */
	p_caizitou		: [pie, dian, dian, pie],  /* 采 */
	p_jinzipang		: [pie, duoheng, shuzheti],  /* 银 */
	p_niaowuheng    : [pie, hengzheshugou, dian, shuzhehengzheshugou],  /* 鸟，无横 */
	p_niuwuwei      : [pie, heng, shu, heng],  /* 告，上面 */
	p_luanzizuo		: [pie, shuzheti, pie, dian],  /* 卵，左边 */
	p_congzikuang	: [pie, shu, hengzheshu, heng],  /* 囱, 外框 */
	p_xichudian		: [pie, hengzhepie, dian],  /* 囱, 里面 */
	p_zimei         : [pie, shuzhehengzheshugou, shu],  /* 姊，右边 */
	p_pizipang		: [pie, henggou, shu],  /* 皮，围部 */
	p_angzizuo      : [pie, shuzheti],  /* 卬，左边 */
	p_zhizizuo      : [pie, duoheng, shu, hengzheshugou, shu],  /* 制，左边 */
	p_suozizuo		: [pie, pie, hengzheshu, heng],  /* 所，左边 */
	p_yedian        : [pie, hengzhepie, dian, na],  /* 夜，下右 */
	p_beizitou      : [pie, shu, hengzheshu, duoheng, pie],  /* 卑，上部 */
	p_yanzili       : [pie, shu, heng, shuzheheng],  /* 延，里面 */
	p_maozizuo      : [pie, shuzheti, pie],  /* 卯，左边 */
	p_zhaozizuo		: [pie, dian, ti],  /* 兆，左边 */
	p_liuzidi       : [pie, shu, shuwanhenggou],  /* 流，右下 */
	p_zhutouban     : [pie, heng, dian],  /* 临，右上 */
	p_zhuzitou		: [pie, heng, dian, pie, heng, dian],  /* 竿，上部，竹字头 */
	p_xiezizuo      : [pie, duoheng, shu, heng, shu, ti],  /* 卸，左边 */
	p_gangwa        : [pie, duoheng, shu, shuzheheng, shu],  /* 缸，左边 */
	p_baizizuo      : [pie, duoheng, pie],  /* 拜，左边 */
	p_duanzizuo     : [pie, shu, duoheng, ti],  /* 段，左边 */
	p_zhuizili      : [pie, shu, hengzheshu, heng, hengzheshu, heng],  /* 追，里边 */
	p_yizidi        : [pie, shuzheti, pie, na],  /* 衣，下部 */
	p_paiyouli      : [pie, shuzheti, pie, na],  /* 派，右里 */
	p_quezipang		: [pie, shu, dian, duoheng, shu, heng],  /* 雄 */
	p_yinshzizuo	: [pie, pie, hengzheshu, duoheng, hengzheshugou],  /* 殷，左边 */
	p_zhouzikuang	: [pie, hengzheshugou],  /* 周，外框 */
	p_fanzitou		: [pie, dian, pie, heng, shu, pie, na],  /* 番 */
	p_piedian		: [pie, dian],  /* 率，中最右 */
	p_piena			: [pie, na],  /* 水，右边 */
	p_chizidi		: [pie, shugou, pie, dian],  /* 赤, 下部 */
	p_xidian        : [pie, hengzhepie, dian, dian],  /* 然，上左 */
	p_souzitou		: [pie, shu, hengzheshu, duoheng, shu],  /* 叟，上部 */
	p_dengshangyou	: [pie, pie, na],  /* 登, 上右 */
	p_aozikuang		: [pie, shu, hengzheshu],  /* 奥，上框 */
	p_maoshangzuo   : [pie, shuzheti, dian],  /* 贸，上左 */
	p_juzidi        : [pie, shu, pie, pie, pie, dian],  /* 聚，下部 */
	p_xun           : [pie, heng, shu, hengzheshu, dian, pie, heng, shu, duoheng],  /* 熏，上部 */
	p_yushangzuo    : [pie, shu, duoheng],  /* 舆，上左 */
	p_lishangyou	: [pie, hengzheshugou, pie],  /* 黎，上右 */
	p_yuxu			: [pie, shu, hengzheshu, duoheng, pie, na],  /* 臾 */


	/* 捺起 */
	d_six			: [dian, heng, pie, dian],  /* 六 */
	d_guang         : [dian, heng, pie],  /* 广 */
	d_wang          : [dian, heng, shuzheheng],  /* 亡 */
	d_men           : [dian, shu, hengzheshugou],  /* 门 */
	d_yi            : [dian, pie, na],  /* 义 */
	d_zhi           : [dian, hengzhepie, na],  /* 之 */
	d_wen           : [dian, heng, pie, na],  /* 文 */
	d_fang          : [dian, heng, hengzheshugou, pie],  /* 方 */
	d_huo			: [dian, pie, pie, na],  /* 火 */
	d_wei           : [dian, pie, hengzheshugou, dian],  /* 为 */
	d_dou           : [dian, dian, heng, shu],  /* 斗 */
	d_hu            : [dian, hengzheshu, heng, pie],  /* 户 */
	d_xin           : [dian, shuwanhenggou, dian, dian],  /* 心 */
	d_zhu           : [dian, duoheng, shu, heng],  /* 主 */
	d_shi           : [dian, heng, shu, hengzheshugou, shu],  /* 市 */
	d_li            : [dian, heng, dian, pie, heng],  /* 立 */
	d_ban           : [dian, pie, duoheng, shu],  /* 半 */
	d_tou           : [dian, dian, heng, pie, dian],  /* 头 */
	d_bi			: [dian, shuwanhenggou, dian, dian, pie],  /* 必 */
	d_yong          : [dian, hengzheshugou, hengzhepie, pie, na],  /* 永 */
	d_yiye          : [dian, heng, pie, shugou, pie, dian],  /* 亦 */
	d_jiao          : [dian, heng, pie, dian, pie, na],  /* 交 */
	d_yifu          : [dian, heng, pie, shuzheti, pie, na],  /* 衣 */
	d_chan          : [dian, heng, dian, pie, heng, pie],  /* 产 */
	d_mi            : [dian, pie, heng, shu, pie, na],  /* 米 */
	d_zhou          : [dian, pie, dian, shu, dian, shu],  /* 州 */
	d_nong          : [dian, henggou, pie, shuzheti, pie, na],  /* 农 */
	d_hai           : [dian, heng, piezheheng, pie, pie, dian],  /* 亥 */
	d_liang         : [dian, hengzheshu, duoheng, shuzheti, pie, na],  /* 良 */
	d_yatou			: [dian, pie, shu],  /* 丫，头 */
	d_bian			: [dian, heng, shu, dian],  /* 卞 */
	
	d_ldsl			: [dian, dian],  /* 冬 */
	d_xingzitou     : [dian, dian, pie],  /* 兴，上面，不带横 */
	d_jinzidi		: [dian, hengzhepie],  /* 今，下边 */
	d_liangdianshui	: [dian, ti],  /* 次 */
	d_shuxinpang	: [dian, dian, shu],  /* 怀 */
	d_yanzipang		: [dian, hengzheshuzheti],  /* 语 */
	d_tubaogai		: [dian, henggou],  /* 军 */
	d_lingzidi      : [dian ,hengzhepie, dian],  /* 令 */
	d_lanzitou		: [dian, pie],  /* 兰 */
	d_sandianshui	: [dian, dian, ti],  /* 江 */
	d_baogaitou		: [dian, dian, henggou],  /* 安 */
	d_shizipang		: [dian, hengzhepie, shu, dian],  /* 视 */
	d_zouzhidi		: [dian, hengzheshuzhehengzhepie, na],  /* 过 */
	d_sanzidi		: [dian, pie, heng, shu],  /* 伞，下部 */
	d_jiangzipang	: [dian, ti, shu],  /* 壮 */
	d_liuzitou		: [dian, heng],  /* 六 */
	d_bingzitou		: [dian, heng, pie, dian, ti],  /* 病 */
	d_yingzidi		: [dian, dian, pie, heng],  /* 应，下部 */
	d_chongzitou    : [dian, heng, piezheheng, dian],  /* 充，上面 */
	d_panzizuo      : [dian, pie, duoheng, pie],  /* 判，左边 */
	d_shenziyou     : [dian, henggou, pie, shuwanhenggou],  /* 沈，右边 */
	d_xuezitou		: [dian, dian, henggou, pie, dian],  /* 究，上边 */
	d_buyipang		: [dian, hengzhepie, shu, pie, dian],  /* 补 */
	d_sidiandi		: [dian, dian, dian, dian],  /* 点 */
	d_bianzitou     : [dian, heng, shu, shu, pie, dian],  /* 变，上部 */
	d_haizitou		: [dian, heng, piezheheng, pie],  /* 亥，上部 */
	d_juanzitou     : [dian, pie, duoheng, pie, na],  /* 卷，上面 */
	d_langzizuo		: [dian, hengzheshu, duoheng, shuzheti, dian],  /* 郎，左边 */
	d_xinzidi       : [dian, pie, duoheng, shu],  /* 辛，去点横 */
	d_shangzitou	: [dian, heng, dian, pie],  /* 商，上部 */
	d_qianzitou		: [dian, pie, heng],  /* 前，上部 */
	d_ni            : [dian, pie, heng, shuzheheng, shu, pie],  /* 逆，里面 */
	d_dianpie       : [dian, pie],  /* 班，里面 */
	d_yizitou       : [dian, pie, heng, pie, dian],  /* 益，上部 */
	d_gezili        : [dian, pie, heng, shu],  /* 隔，右下里 */
	d_bizizuo       : [dian, pie, shu, hengzheshugou, shu, pie, dian],  /* 敝，左边 */

	/* 折起 */
	z_yi            : [hengzheshuwanhenggou],  /* 乙 */
	z_le            : [hengzhepie, shugou],  /* 了 */
	z_li            : [hengzheshugou, pie],  /* 力 */
	z_nai           : [hengzheshuzhehengzheshugou, pie],  /* 乃 */
	z_dao           : [hengzheshugou, pie],  /* 刀 */
	z_you           : [hengzhepie, na],  /* 又 */
	z_xiao			: [shugou, pie, dian],  /* 小 */
	z_shi			: [hengzheshu, heng, pie],  /* 尸 */
	z_gong          : [hengzheshu, heng, shuzhehengzheshugou],  /* 弓 */
	z_ji            : [hengzheshu, heng, shuwanhenggou],  /* 己 */
	z_yijing        : [hengzheshu, heng, shuwanhenggou],  /* 已 */
	z_si            : [hengzheshu, heng, shuwanhenggou],  /* 巳 */
	z_zi            : [hengzhepie, shugou, heng],  /* 子 */
	z_wei			: [hengzheshugou, shu, heng],  /* 卫 */
	z_ye            : [hengzheshugou, shu, shuwanhenggou],  /* 也 */
	z_nv            : [piezhedian, pie, heng],  /* 女 */
	z_fei			: [hengzhenagou, pie, dian],  /* 飞 */
	z_ren			: [hengzheshugou, pie, dian],  /* 刃 */
	z_xi            : [hengzheshugou, dian, ti],  /* 习 */
	z_cha			: [hengzhepie, na, dian],  /* 叉 */
	z_ma            : [hengzheshu, shuzhehengzheshugou, heng],  /* 马 */
	z_xiang			: [piezheheng, piezheheng, pie],  /* 乡 */
	z_diao			: [hengzheshugou, ti],  /* 刁 */
	z_shui          : [shugou, hengzhepie, pie, na],  /* 水 */
	z_chi           : [hengzheshu, heng, pie, na],  /* 尺 */
	z_chou          : [hengzheshu, heng, shu, heng],  /* 丑 */
	z_ba            : [hengzheshu, shu, heng, shuwanhenggou],  /* 巴 */
	z_ban           : [hengzheshugou, pie, dian, dian],  /* 办 */
	z_yu            : [hengzhepie, dian, henggou, shugou],  /* 予 */
	z_shuben		: [hengzheshu, hengzheshugou, shu, dian],  /* 书，本 */
	z_min           : [hengzheshu, heng, shuzheti, heng, nagou],  /* 民 */
	z_chu           : [shuzheheng, shu, shu, shuzheheng, shu],  /* 出 */
	z_mao           : [hengzhepie, dian, henggou, shugou, pie],  /* 矛 */
	z_mu            : [piezheheng, hengzheshugou, heng, dian, dian],  /* 母 */
	z_yin           : [hengzheshu, duoheng, pie],  /* 尹 */
	z_fu            : [hengzheshu, heng, shuzhehengzheshugou, pie, shu],  /* 弗 */
	z_yuming        : [hengzheshu, duoheng, shu],  /* 聿 */
	z_su			: [hengzheshu, duoheng, shu, pie, shu, pie, dian],  /* 肃 */
	z_lishu         : [hengzheshu, duoheng, shugou, dian, ti, pie, na],  /* 隶，属 */
	z_chengdan		: [hengzhepie, shugou, duoheng, hengzhepie, pie, na],  /* 承 */
	z_nie			: [hengzheshugou, shuwanhenggou],  /* 乜 */
	z_jiejue		: [hengzhepie, shugou, ti],  /* 孑孓 */
	z_juejie		: [hengzhepie, shugou, na],  /* 孓孑 */
	z_yao			: [piezheheng, piezheheng, dian],  /* 幺 */
	z_guai			: [hengzheshu, heng, pie, na],  /* 夬 */
	z_pan			: [shuzheheng, shu, heng, pie],  /* 爿 */
	z_wu			: [shuzheheng, hengzheshugou, heng, pie],  /* 毋 */
	z_gen			: [hengzheshu, duoheng, shuzheti, pie, na],  /* 艮 */

	z_cangzidi		: [hengzheshugou, shuwanhenggou],  /* 仓，下部 */
	z_xiongzikuang	: [shuzheheng, shu],  /* 画, 下框 */
	z_sigong		: [piezheheng, dian],  /* 私 */
	z_zuoerpang		: [hengzhepiezhewanshugou, shu],  /* 阳 */
	z_youerpang		: [hengzhepiezhewanshugou, shu],  /* 那 */
	z_danerpang		: [hengzheshugou, shu],  /* 印 */
	z_shutidian		: [shuzheti, dian],  /* 以，左边 */
	z_xunzitou		: [hengzheshu, duoheng],  /* 寻 */
	z_shouzizuo     : [shuzheti, shu],  /* 收，左边 */
	z_xunziyou      : [hengzhenagou, heng, shu],  /* 讯，右边 */
	z_jiaosipang	: [piezheheng, piezheheng, ti],  /* 红 */
	z_siziban       : [piezheheng, piezheheng],  /* 丝，上一半 */
	z_jianzidi		: [hengzheshuzhehengzhepie, na],  /* 建 */
	z_sanzhe		: [piezhedian, piezhedian, piezhedian],  /* 巡 */
	z_luanziyou		: [hengzheshugou, shu, dian],  /* 卵，右边 */
	z_jizizuo       : [hengzheshu, duoheng, shuzheti, dian],  /* 即，左边 */
	z_yangziyou     : [hengzheshuzhehengzheshugou, pie, pie],  /* 杨，右边 */
	z_nazizuo       : [hengzheshugou, duoheng, pie],  /* 那，左边 */
	z_meizitou      : [hengzheshu, shu, heng, pie],  /* 眉，上部 */
	z_jingzitou		: [hengzhepie, dian],  /* 经，右上部 */
	z_fazipang		: [shuzheheng, pie, dian],  /* 发, 围部 */
	z_zhengzidi		: [hengzheshu, duoheng, shugou],  /* 争, 下部 */
	z_luzitou		: [hengzheshu, duoheng],  /* 录 */
	z_dianshui      : [shugou, dian, ti, pie, dian],  /* 泰，下面 */
	z_hanzili		: [hengzhepie, shugou, dian, ti, pie, dian],  /* 函，里面 */
	z_zhaoziyou		: [shuwanhenggou, pie, dian],  /* 兆，右边 */
	z_dizidi        : [hengzheshu, heng, shuzhehengzheshugou, shu, pie],  /* 第，下面 */
	z_yongzitou     : [hengzhepie, dian],  /* 甬，上面 */
	z_houzitou      : [hengzheshu, heng],  /* 侯，右上 */
	z_xiaodian		: [shugou, pie, dian, dian],  /* 恭 */
	z_eti           : [hengzheshugou, shuzheti],  /* 顾，左里 */
	z_tangzili      : [hengzheshu, duoheng, shu],  /* 唐，里上 */
	z_jiazizuo		: [hengzheshu, heng, shu, duoheng],  /* 叚, 左边 */
	z_zuokai        : [hengzheshu, heng],  /* 叚，右上 */
	z_yongzili      : [hengzheshu, duoheng, shu, hengzheshugou, duoheng, shu],  /* 庸，里面 */
	z_luzhongsh     : [hengzheshu, heng, shu, shu],  /* 鹿，中上 */
	z_sangzidi      : [shuzheti, pie, na],  /* 丧，下边 */
	z_xuanyouxia	: [henggou, shu, heng, pie, na],  /* 旋，右下 */
	z_liangyoush    : [hengzheshugou, pie, dian, dian],  /* 梁，右上 */
	z_ganzizuo		: [hengzheshu, heng, shu, shu, duoheng],  /* 敢，左边 */
	z_jishangyou    : [hengzhepie, na],  /* 祭，上右 */
	z_dengshangzuo	: [hengzhepie, dian],  /* 登，上左 */
	z_fangzidi      : [hengzheshugou, pie],  /* 方，下部 */
	z_shuzizuo      : [hengzhepie, shu, heng, shu, ti],  /* 疏，左边 */
	z_yuanzitou     : [piezheheng, hengzhepie],  /* 缘，右上 */
	z_shutidd       : [shuzheti, dian, dian],  /* 鼠，下最左 */
	z_dingxiazuo    : [shuzhehengzheshu, heng, pie],  /* 鼎，下左 */
	z_chiyoush      : [shuzheheng, shu, shu, heng],  /* 嗤，右上 */
	z_yushangyou    : [hengzheshu, duoheng],  /* 舆，上右 */
	z_gengzili		: [hengzheshu, duoheng, pie, na],  /* 庚，里面 */
	z_chengzishang	: [hengzhepie, shugou, hengzhepie, pie, na],  /* 丞，上部 */
	z_hanzili		: [hengzhepie, shugou, dian, ti, pie, dian],  /* 函，里面 */
};

/* 键盘映射表 */
/* include keymap.js */

/* 单字笔画 */
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
	later: [h_one]
}
Characters[Characters.length] = {
	char: "乙",
	first: pattern_single,
	later: [z_yi]
}

/* 二画 */
Characters[Characters.length] = {
	char: "二",
	first: pattern_single,
	later: [h_two]
}
Characters[Characters.length] = {
	char: "十",
	first: pattern_single,
	later: [h_ten]
}
Characters[Characters.length] = {
	char: "丁",
	first: pattern_single,
	later: [h_ding]
	}
Characters[Characters.length] = {
	char: "厂",
	first: pattern_single,
	later: [h_chang]
	}
Characters[Characters.length] = {
	char: "七",
	first: pattern_single,
	later: [h_seven]
}
Characters[Characters.length] = {
	char: "卜",
	first: pattern_single,
	later: [s_bu]
	}
Characters[Characters.length] = {
	char: "人",
	first: pattern_single,
	later: [p_ren]
	}
Characters[Characters.length] = {
	char: "入",
	first: pattern_single,
	later: [p_ru]
	}
Characters[Characters.length] = {
	char: "八",
	first: pattern_single,
	later: [p_eight]
	}
Characters[Characters.length] = {
	char: "九",
	first: pattern_single,
	later: [p_nine]
	}
Characters[Characters.length] = {
	char: "几",
	first: pattern_single,
	later: [p_ji]
	}
Characters[Characters.length] = {
	char: "儿",
	first: pattern_single,
	later: [p_er]
	 }
Characters[Characters.length] = {
	char: "了",
	first: pattern_single,
	later: [z_le]
	}
Characters[Characters.length] = {
	char: "力",
	first: pattern_single,
	later: [z_li]
	}
Characters[Characters.length] = {
	char: "乃",
	first: pattern_single,
	later: [z_nai]
	}
Characters[Characters.length] = {
	char: "刀",
	first: pattern_single,
	later: [z_dao]
	}
Characters[Characters.length] = {
	char: "又",
	first: pattern_single,
	later: [z_you]
	}

/* 三画 */
Characters[Characters.length] = {
	char: "三",
	first: pattern_single,
	later: [h_three]
	}
Characters[Characters.length] = {
	char: "于",
	first: pattern_single,
	later: [h_yushi]
	}
Characters[Characters.length] = {
	char: "干",
	first: pattern_single,
	later: [h_gan]
	}
Characters[Characters.length] = {
	char: "亏",
	first: pattern_single,
	later: [h_kui]
	}
Characters[Characters.length] = {
	char: "士",
	first: pattern_single,
	later: [h_shi]
	}
Characters[Characters.length] = {
	char: "工",
	first: pattern_single,
	later: [h_gong]
	}
Characters[Characters.length] = {
	char: "土",
	first: pattern_single,
	later: [h_tu]
	}
Characters[Characters.length] = {
	char: "才",
	first: pattern_single,
	later: [h_cai]
	}
Characters[Characters.length] = {
	char: "寸",
	first: pattern_single,
	later: [h_cun]
	}
Characters[Characters.length] = {
	char: "下",
	first: pattern_single,
	later: [h_xia]
	}
Characters[Characters.length] = {
	char: "大",
	first: pattern_single,
	later: [h_da]
	}
Characters[Characters.length] = {
	char: "丈",
	first: pattern_single,
	later: [h_zhang]
	}
Characters[Characters.length] = {
	char: "与",
	first: pattern_single,
	later: [h_yuni]
}
Characters[Characters.length] = {
	char: "万",
	first: pattern_single,
	later: [h_wan]
}
Characters[Characters.length] = {
	char: "上",
	first: pattern_single,
	later: [s_shang]
}
Characters[Characters.length] = {
	char: "小",
	first: pattern_single,
	later: [z_xiao]
}
Characters[Characters.length] = {
	char: "口",
	first: pattern_single,
	later: [s_kou]
}
Characters[Characters.length] = {
	char: "巾",
	first: pattern_single,
	later: [s_jin]
}
Characters[Characters.length] = {
	char: "山",
	first: pattern_single,
	later: [s_shan]
}
Characters[Characters.length] = {
	char: "千",
	first: pattern_single,
	later: [p_thousand]
}
Characters[Characters.length] = {
	char: "乞",
	first: pattern_ud_up_1_down_1,
	later: [p_pieheng, z_yi]
}
Characters[Characters.length] = {
	char: "川",
	first: pattern_single,
	later: [p_chuan]
}
Characters[Characters.length] = {
	char: "亿",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, z_yi]
}
Characters[Characters.length] = {
	char: "个",
	first: pattern_single,
	later: [p_ge]
}
Characters[Characters.length] = {
	char: "勺",
	first: pattern_round_right_up,
	later: [p_baozitou, dian]
}
Characters[Characters.length] = {
	char: "久",
	first: pattern_single,
	later: [p_jiuyuan]
}
Characters[Characters.length] = {
	char: "凡",
	first: pattern_single,
	later: [p_fan]
}
Characters[Characters.length] = {
	char: "及",
	first: pattern_single,
	later: [p_jige]
}
Characters[Characters.length] = {
	char: "夕",
	first: pattern_single,
	later: [p_xi]
}
Characters[Characters.length] = {
	char: "丸",
	first: pattern_single,
	later: [p_wan]
}
Characters[Characters.length] = {
	char: "么",
	first: pattern_single,
	later: [p_me]
}
Characters[Characters.length] = {
	char: "广",
	first: pattern_single,
	later: [d_guang]
}
Characters[Characters.length] = {
	char: "亡",
	first: pattern_single,
	later: [d_wang]
}
Characters[Characters.length] = {
	char: "门",
	first: pattern_single,
	later: [d_men]
}
Characters[Characters.length] = {
	char: "义",
	first: pattern_single,
	later: [d_yi]
}
Characters[Characters.length] = {
	char: "之",
	first: pattern_single,
	later: [d_zhi]
}
Characters[Characters.length] = {
	char: "尸",
	first: pattern_single,
	later: [z_shi]
}
Characters[Characters.length] = {
	char: "弓",
	first: pattern_single,
	later: [z_gong]
}
Characters[Characters.length] = {
	char: "己",
	first: pattern_single,
	later: [z_ji]
}
Characters[Characters.length] = {
	char: "已",
	first: pattern_single,
	later: [z_yijing]
}
Characters[Characters.length] = {
	char: "子",
	first: pattern_single,
	later: [z_zi]
}
Characters[Characters.length] = {
	char: "卫",
	first: pattern_single,
	later: [z_wei]
}
Characters[Characters.length] = {
	char: "也",
	first: pattern_single,
	later: [z_ye]
}
Characters[Characters.length] = {
	char: "女",
	first: pattern_single,
	later: [z_nv]
}
Characters[Characters.length] = {
	char: "飞",
	first: pattern_single,
	later: [z_fei]
}
Characters[Characters.length] = {
	char: "刃",
	first: pattern_single,
	later: [z_ren]
}
Characters[Characters.length] = {
	char: "习",
	first: pattern_single,
	later: [z_xi]
}
Characters[Characters.length] = {
	char: "叉",
	first: pattern_single,
	later: [z_cha]
}
Characters[Characters.length] = {
	char: "马",
	first: pattern_single,
	later: [z_ma]
}
Characters[Characters.length] = {
	char: "乡",
	first: pattern_single,
	later: [z_xiang]
}

/* 四画 */
Characters[Characters.length] = {
	char: "丰",
	first: pattern_single,
	later: [h_feng]
}
Characters[Characters.length] = {
	char: "王",
	first: pattern_single,
	later: [h_wang]
}
Characters[Characters.length] = {
	char: "井",
	first: pattern_single,
	later: [h_jing]
}
Characters[Characters.length] = {
	char: "开",
	first: pattern_single,
	later: [h_kai]
}
Characters[Characters.length] = {
	char: "夫",
	first: pattern_single,
	later: [h_fu]
}
Characters[Characters.length] = {
	char: "天",
	first: pattern_single,
	later: [h_tian]
}
Characters[Characters.length] = {
	char: "无",
	first: pattern_single,
	later: [h_wuyou]
}
Characters[Characters.length] = {
	char: "元",
	first: pattern_ud_up_1_down_1,
	later: [h_two, p_er]
}
Characters[Characters.length] = {
	char: "专",
	first: pattern_single,
	later: [h_zhuan]
}
Characters[Characters.length] = {
	char: "云",
	first: pattern_ud_up_1_down_1,
	later: [h_two, z_sigong]
}
Characters[Characters.length] = {
	char: "扎",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, shuwanhenggou]
}
Characters[Characters.length] = {
	char: "艺",
	first: pattern_ud_up_1_down_1,
	later: [h_caozitou, z_yi]
}
Characters[Characters.length] = {
	char: "木",
	first: pattern_single,
	later: [h_mu]
}
Characters[Characters.length] = {
	char: "五",
	first: pattern_single,
	later: [h_five]
}
Characters[Characters.length] = {
	char: "支",
	first: pattern_ud_up_1_down_1,
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
	later: [h_bu]
}
Characters[Characters.length] = {
	char: "太",
	first: pattern_single,
	later: [h_tai]
}
Characters[Characters.length] = {
	char: "犬",
	first: pattern_single,
	later: [h_quan]
}
Characters[Characters.length] = {
	char: "区",
	first: pattern_round_left,
	later: [h_jiangzikuang, p_chadian]
}
Characters[Characters.length] = {
	char: "历",
	first: pattern_round_left_up,
	later: [h_chang, z_li]
}
Characters[Characters.length] = {
	char: "尤",
	first: pattern_single,
	later: [h_youqi]
}
Characters[Characters.length] = {
	char: "友",
	first: pattern_round_left_up,
	later: [h_hengpie, z_you]
}
Characters[Characters.length] = {
	char: "匹",
	first: pattern_round_left,
	later: [h_jiangzikuang, p_er]
}
Characters[Characters.length] = {
	char: "车",
	first: pattern_single,
	later: [h_che]
}
Characters[Characters.length] = {
	char: "巨",
	first: pattern_single,
	later: [h_ju]
}
Characters[Characters.length] = {
	char: "牙",
	first: pattern_single,
	later: [h_ya]
}
Characters[Characters.length] = {
	char: "屯",
	first: pattern_single,
	later: [h_tun]
}
Characters[Characters.length] = {
	char: "比",
	first: pattern_lr_left_1_right_1,
	later: [h_bizizuo, p_bi]
}
Characters[Characters.length] = {
	char: "互",
	first: pattern_single,
	later: [h_hu]
}
Characters[Characters.length] = {
	char: "切",
	first: pattern_lr_left_1_right_1,
	later: [h_qiezizuo, z_dao]
}
Characters[Characters.length] = {
	char: "瓦",
	first: pattern_single,
	later: [h_wa]
}
Characters[Characters.length] = {
	char: "止",
	first: pattern_single,
	later: [s_zhi]
}
Characters[Characters.length] = {
	char: "少",
	first: pattern_single,
	later: [s_shao]
}
Characters[Characters.length] = {
	char: "日",
	first: pattern_single,
	later: [s_ri]
}
Characters[Characters.length] = {
	char: "中",
	first: pattern_single,
	later: [s_zhong]
}
Characters[Characters.length] = {
	char: "冈",
	first: pattern_round_up,
	later: [s_tongzikuang, p_chadian]
}
Characters[Characters.length] = {
	char: "贝",
	first: pattern_single,
	later: [s_bei]
}
Characters[Characters.length] = {
	char: "内",
	first: pattern_single,
	later: [s_nei]
}
Characters[Characters.length] = {
	char: "水",
	first: pattern_single,
	later: [z_shui]
}
Characters[Characters.length] = {
	char: "见",
	first: pattern_single,
	later: [s_jian]
}
Characters[Characters.length] = {
	char: "午",
	first: pattern_single,
	later: [p_wu]
}
Characters[Characters.length] = {
	char: "牛",
	first: pattern_single,
	later: [p_niu]
}
Characters[Characters.length] = {
	char: "手",
	first: pattern_single,
	later: [p_shou]
}
Characters[Characters.length] = {
	char: "毛",
	first: pattern_single,
	later: [p_mao]
}
Characters[Characters.length] = {
	char: "气",
	first: pattern_single,
	later: [p_qi]
}
Characters[Characters.length] = {
	char: "升",
	first: pattern_single,
	later: [p_shenggao]
}
Characters[Characters.length] = {
	char: "长",
	first: pattern_single,
	later: [p_chang]
}
Characters[Characters.length] = {
	char: "仁",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, h_two]
}
Characters[Characters.length] = {
	char: "什",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, h_ten]
}
Characters[Characters.length] = {
	char: "片",
	first: pattern_single,
	later: [p_pian]
}
Characters[Characters.length] = {
	char: "仆",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, s_bu]
}
Characters[Characters.length] = {
	char: "化",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, p_bi]
}
Characters[Characters.length] = {
	char: "仇",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, p_nine]
}
Characters[Characters.length] = {
	char: "币",
	first: pattern_single,
	later: [p_bihuo]
}
Characters[Characters.length] = {
	char: "仍",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, z_nai]
}
Characters[Characters.length] = {
	char: "仅",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, z_you]
}
Characters[Characters.length] = {
	char: "斤",
	first: pattern_single,
	later: [p_jin]
}
Characters[Characters.length] = {
	char: "爪",
	first: pattern_single,
	later: [p_zhao]
}
Characters[Characters.length] = {
	char: "反",
	first: pattern_round_left_up,
	later: [p_fanzipang, z_you]
}
Characters[Characters.length] = {
	char: "介",
	first: pattern_ud_up_1_down_1,
	later: [p_ren, p_dao]
}
Characters[Characters.length] = {
	char: "父",
	first: pattern_single,
	later: [p_fu]
}
Characters[Characters.length] = {
	char: "从",
	first: pattern_lr_left_1_right_1,
	later: [p_ren, p_ren]
}
Characters[Characters.length] = {
	char: "今",
	first: pattern_ud_up_1_down_1,
	later: [p_ren, d_jinzidi]
}
Characters[Characters.length] = {
	char: "凶",
	first: pattern_round_down,
	later: [p_chadian, z_xiongzikuang]
}
Characters[Characters.length] = {
	char: "分",
	first: pattern_ud_up_1_down_1,
	later: [p_eight, z_dao]
}
Characters[Characters.length] = {
	char: "乏",
	first: pattern_single,
	later: [p_fa]
}
Characters[Characters.length] = {
	char: "公",
	first: pattern_ud_up_1_down_1,
	later: [p_eight, z_sigong]
}
Characters[Characters.length] = {
	char: "仓",
	first: pattern_ud_up_1_down_1,
	later: [p_ren, z_cangzidi]
}
Characters[Characters.length] = {
	char: "月",
	first: pattern_single,
	later: [p_yue]
}
Characters[Characters.length] = {
	char: "氏",
	first: pattern_single,
	later: [p_shizu]
}
Characters[Characters.length] = {
	char: "勿",
	first: pattern_single,
	later: [p_wuyao]
}
Characters[Characters.length] = {
	char: "欠",
	first: pattern_ud_up_1_down_1,
	later: [p_qianzitou, p_ren]
}
Characters[Characters.length] = {
	char: "风",
	first: pattern_round_up,
	later: [p_fengzitou, p_chadian]
}
Characters[Characters.length] = {
	char: "丹",
	first: pattern_single,
	later: [p_dan]
}
Characters[Characters.length] = {
	char: "匀",
	first: pattern_round_right_up,
	later: [p_baozitou, d_liangdianshui]
}
Characters[Characters.length] = {
	char: "乌",
	first: pattern_single,
	later: [p_wuya]
}
Characters[Characters.length] = {
	char: "凤",
	first: pattern_round_up,
	later: [p_fengzitou, z_you]
}
Characters[Characters.length] = {
	char: "勾",
	first: pattern_round_right_up,
	later: [p_baozitou, z_sigong]
}
Characters[Characters.length] = {
	char: "文",
	first: pattern_single,
	later: [d_wen]
}
Characters[Characters.length] = {
	char: "六",
	first: pattern_single,
	later: [d_six]
}
Characters[Characters.length] = {
	char: "方",
	first: pattern_single,
	later: [d_fang]
}
Characters[Characters.length] = {
	char: "火",
	first: pattern_single,
	later: [d_huo]
}
Characters[Characters.length] = {
	char: "为",
	first: pattern_single,
	later: [d_wei]
}
Characters[Characters.length] = {
	char: "斗",
	first: pattern_single,
	later: [d_dou]
}
Characters[Characters.length] = {
	char: "忆",
	first: pattern_lr_left_1_right_1,
	later: [d_shuxinpang, z_yi]
}
Characters[Characters.length] = {
	char: "订",
	first: pattern_lr_left_1_right_1,
	later: [d_yanzipang, h_ding]
}
Characters[Characters.length] = {
	char: "计",
	first: pattern_lr_left_1_right_1,
	later: [d_yanzipang, h_ten]
}
Characters[Characters.length] = {
	char: "户",
	first: pattern_single,
	later: [d_hu]
}
Characters[Characters.length] = {
	char: "认",
	first: pattern_lr_left_1_right_1,
	later: [d_yanzipang, p_ren]
}
Characters[Characters.length] = {
	char: "心",
	first: pattern_single,
	later: [d_xin]
}
Characters[Characters.length] = {
	char: "尺",
	first: pattern_single,
	later: [z_chi]
}
Characters[Characters.length] = {
	char: "引",
	first: pattern_lr_left_1_right_1,
	later: [z_gong, shu]
}
Characters[Characters.length] = {
	char: "丑",
	first: pattern_single,
	later: [z_chou]
}
Characters[Characters.length] = {
	char: "巴",
	first: pattern_single,
	later: [z_ba]
}
Characters[Characters.length] = {
	char: "孔",
	first: pattern_lr_left_1_right_1,
	later: [z_zi, shuwanhenggou]
}
Characters[Characters.length] = {
	char: "队",
	first: pattern_lr_left_1_right_1,
	later: [z_zuoerpang, p_ren]
}
Characters[Characters.length] = {
	char: "办",
	first: pattern_single,
	later: [z_ban]
}
Characters[Characters.length] = {
	char: "以",
	first: pattern_lr_left_1_right_1,
	later: [z_shutidian, p_ren]
}
Characters[Characters.length] = {
	char: "允",
	first: pattern_ud_up_1_down_1,
	later: [z_sigong, p_er]
}
Characters[Characters.length] = {
	char: "予",
	first: pattern_single,
	later: [z_yu]
}
Characters[Characters.length] = {
	char: "劝",
	first: pattern_lr_left_1_right_1,
	later: [z_you, z_li]
}
Characters[Characters.length] = {
	char: "双",
	first: pattern_lr_left_1_right_1,
	later: [z_you, z_you]
}
Characters[Characters.length] = {
	char: "书",
	first: pattern_single,
	later: [z_shuben]
}
Characters[Characters.length] = {
	char: "幻",
	first: pattern_lr_left_1_right_1,
	later: [z_youzipang, hengzheshugou]
}

/* 五画 */
Characters[Characters.length] = {
	char: "玉",
	first: pattern_single,
	later: [h_yu]
}
Characters[Characters.length] = {
	char: "刊",
	first: pattern_lr_left_1_right_1,
	later: [h_gan, s_lidaopang]
}
Characters[Characters.length] = {
	char: "示",
	first: pattern_ud_up_1_down_1,
	later: [h_two, z_xiao]
}
Characters[Characters.length] = {
	char: "末",
	first: pattern_single,
	later: [h_mo]
}
Characters[Characters.length] = {
	char: "未",
	first: pattern_single,
	later: [h_weilai]
}
Characters[Characters.length] = {
	char: "击",
	first: pattern_single,
	later: [h_jida]
}
Characters[Characters.length] = {
	char: "打",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, h_ding]
}
Characters[Characters.length] = {
	char: "巧",
	first: pattern_lr_left_1_right_1,
	later: [h_gong, h_qiaoziyou]
}
Characters[Characters.length] = {
	char: "正",
	first: pattern_single,
	later: [h_zheng]
}
Characters[Characters.length] = {
	char: "扑",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, s_bu]
}
Characters[Characters.length] = {
	char: "扒",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, p_eight]
}
Characters[Characters.length] = {
	char: "功",
	first: pattern_lr_left_1_right_1,
	later: [h_gong, z_li]
}
Characters[Characters.length] = {
	char: "扔",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, z_nai]
}
Characters[Characters.length] = {
	char: "去",
	first: pattern_ud_up_1_down_1,
	later: [h_tu, z_sigong]
}
Characters[Characters.length] = {
	char: "甘",
	first: pattern_single,
	later: [h_ganku]
}
Characters[Characters.length] = {
	char: "世",
	first: pattern_single,
	later: [h_shijie]
}
Characters[Characters.length] = {
	char: "古",
	first: pattern_ud_up_1_down_1,
	later: [h_ten, s_kou]
}
Characters[Characters.length] = {
	char: "节",
	first: pattern_ud_up_1_down_1,
	later: [h_caozitou, z_danerpang]
}
Characters[Characters.length] = {
	char: "本",
	first: pattern_single,
	later: [h_ben]
}
Characters[Characters.length] = {
	char: "术",
	first: pattern_single,
	later: [h_shudao]
}
Characters[Characters.length] = {
	char: "可",
	first: pattern_round_right_up,
	later: [h_ding, s_kou]
}
Characters[Characters.length] = {
	char: "丙",
	first: pattern_single,
	later: [h_bing]
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
	later: [h_stone]
}
Characters[Characters.length] = {
	char: "布",
	first: pattern_round_left_up,
	later: [h_hengpie, s_jin]
}
Characters[Characters.length] = {
	char: "龙",
	first: pattern_single,
	later: [h_long]
}
Characters[Characters.length] = {
	char: "平",
	first: pattern_single,
	later: [h_ping]
}
Characters[Characters.length] = {
	char: "灭",
	first: pattern_ud_up_1_down_1,
	later: [heng, d_huo]
}
Characters[Characters.length] = {
	char: "轧",
	first: pattern_lr_left_1_right_1,
	later: [h_che, shuwanhenggou]
}
Characters[Characters.length] = {
	char: "东",
	first: pattern_single,
	later: [h_dong]
}
Characters[Characters.length] = {
	char: "卡",
	first: pattern_single,
	later: [s_ka]
}
Characters[Characters.length] = {
	char: "北",
	first: pattern_lr_left_1_right_1,
	later: [s_beizizuo, p_bi]
}
Characters[Characters.length] = {
	char: "占",
	first: pattern_ud_up_1_down_1,
	later: [s_shangzitou, s_kou]
}
Characters[Characters.length] = {
	char: "业",
	first: pattern_single,
	later: [s_ye]
}
Characters[Characters.length] = {
	char: "旧",
	first: pattern_lr_left_1_right_1,
	later: [shu, s_ri]
}
Characters[Characters.length] = {
	char: "帅",
	first: pattern_lr_left_1_right_1,
	later: [s_shupie, s_jin]
}
Characters[Characters.length] = {
	char: "归",
	first: pattern_lr_left_1_right_1,
	later: [s_shupie, z_xunzitou]
}
Characters[Characters.length] = {
	char: "且",
	first: pattern_single,
	later: [s_qie]
}
Characters[Characters.length] = {
	char: "旦",
	first: pattern_ud_up_1_down_1,
	later: [s_ri, heng]
}
Characters[Characters.length] = {
	char: "目",
	first: pattern_single,
	later: [s_mu]
}
Characters[Characters.length] = {
	char: "叶",
	first: pattern_lr_left_1_right_1,
	later: [s_kou, h_ten]
}
Characters[Characters.length] = {
	char: "甲",
	first: pattern_single,
	later: [s_jia]
}
Characters[Characters.length] = {
	char: "申",
	first: pattern_single,
	later: [s_shen]
}
Characters[Characters.length] = {
	char: "叮",
	first: pattern_lr_left_1_right_1,
	later: [s_kou, h_ding]
}
Characters[Characters.length] = {
	char: "电",
	first: pattern_single,
	later: [s_dian]
}
Characters[Characters.length] = {
	char: "号",
	first: pattern_ud_up_1_down_1,
	later: [s_kou, h_qiaoziyou]
}
Characters[Characters.length] = {
	char: "田",
	first: pattern_single,
	later: [s_tian]
}
Characters[Characters.length] = {
	char: "由",
	first: pattern_single,
	later: [s_you]
}
Characters[Characters.length] = {
	char: "史",
	first: pattern_single,
	later: [s_shi]
}
Characters[Characters.length] = {
	char: "只",
	first: pattern_ud_up_1_down_1,
	later: [s_kou, p_eightdian]
}
Characters[Characters.length] = {
	char: "央",
	first: pattern_single,
	later: [s_yang]
}
Characters[Characters.length] = {
	char: "兄",
	first: pattern_ud_up_1_down_1,
	later: [s_kou, p_er]
}
Characters[Characters.length] = {
	char: "叼",
	first: pattern_lr_left_1_right_1,
	later: [s_kou, z_diao]
}
Characters[Characters.length] = {
	char: "叫",
	first: pattern_lr_left_1_right_1,
	later: [s_kou, z_shouzizuo]
}
Characters[Characters.length] = {
	char: "另",
	first: pattern_ud_up_1_down_1,
	later: [s_kou, z_li]
}
Characters[Characters.length] = {
	char: "叨",
	first: pattern_lr_left_1_right_1,
	later: [s_kou, z_dao]
}
Characters[Characters.length] = {
	char: "叹",
	first: pattern_lr_left_1_right_1,
	later: [s_kou, z_you]
}
Characters[Characters.length] = {
	char: "四",
	first: pattern_single,
	later: [s_four]
}
Characters[Characters.length] = {
	char: "生",
	first: pattern_single,
	later: [p_sheng]
}
Characters[Characters.length] = {
	char: "失",
	first: pattern_single,
	later: [p_shiqu]
}
Characters[Characters.length] = {
	char: "禾",
	first: pattern_single,
	later: [p_he]
}
Characters[Characters.length] = {
	char: "丘",
	first: pattern_single,
	later: [p_qiu]
}
Characters[Characters.length] = {
	char: "付",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, h_cun]
}
Characters[Characters.length] = {
	char: "仗",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, h_zhang]
}
Characters[Characters.length] = {
	char: "代",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, h_shizikuang]
}
Characters[Characters.length] = {
	char: "仙",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, s_shan]
}
Characters[Characters.length] = {
	char: "们",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, d_men]
}
Characters[Characters.length] = {
	char: "仪",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, d_yi]
}
Characters[Characters.length] = {
	char: "白",
	first: pattern_single,
	later: [p_bai]
}
Characters[Characters.length] = {
	char: "仔",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, z_zi]
}
Characters[Characters.length] = {
	char: "他",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, z_ye]
}
Characters[Characters.length] = {
	char: "斥",
	first: pattern_single,
	later: [p_chi]
}
Characters[Characters.length] = {
	char: "瓜",
	first: pattern_single,
	later: [p_gua]
}
Characters[Characters.length] = {
	char: "乎",
	first: pattern_single,
	later: [p_hu]
}
Characters[Characters.length] = {
	char: "丛",
	first: pattern_ud_up_1_down_1,
	later: [p_ren, p_ren, heng]
}
Characters[Characters.length] = {
	char: "令",
	first: pattern_ud_up_1_down_1,
	later: [p_ren, d_lingzidi]
}
Characters[Characters.length] = {
	char: "用",
	first: pattern_single,
	later: [p_yong]
}
Characters[Characters.length] = {
	char: "甩",
	first: pattern_single,
	later: [p_shuai]
}
Characters[Characters.length] = {
	char: "印",
	first: pattern_lr_left_1_right_1,
	later: [p_yinzizuo, z_danerpang]
}
Characters[Characters.length] = {
	char: "乐",
	first: pattern_single,
	later: [p_le]
}
Characters[Characters.length] = {
	char: "句",
	first: pattern_round_right_up,
	later: [p_baozitou, s_kou]
}
Characters[Characters.length] = {
	char: "匆",
	first: pattern_single,
	later: [p_congmang]
}
Characters[Characters.length] = {
	char: "册",
	first: pattern_single,
	later: [p_ce]
}
Characters[Characters.length] = {
	char: "犯",
	first: pattern_lr_left_1_right_1,
	later: [p_fanquanpang, z_cangzidi]
}
Characters[Characters.length] = {
	char: "外",
	first: pattern_lr_left_1_right_1,
	later: [p_xi, s_bu]
}
Characters[Characters.length] = {
	char: "处",
	first: pattern_round_left_down,
	later: [p_zhewen, s_bu]
}
Characters[Characters.length] = {
	char: "冬",
	first: pattern_ud_up_1_down_1,
	later: [p_zhewen, d_ldsl]
}
Characters[Characters.length] = {
	char: "鸟",
	first: pattern_single,
	later: [p_niao]
}
Characters[Characters.length] = {
	char: "务",
	first: pattern_ud_up_1_down_1,
	later: [p_zhewen, z_li]
}
Characters[Characters.length] = {
	char: "包",
	first: pattern_round_right_up,
	later: [p_baozitou, z_si]
}
Characters[Characters.length] = {
	char: "饥",
	first: pattern_lr_left_1_right_1,
	later: [p_shichi, p_ji]
}
Characters[Characters.length] = {
	char: "主",
	first: pattern_single,
	later: [d_zhu]
}
Characters[Characters.length] = {
	char: "市",
	first: pattern_single,
	later: [d_shi]
}
Characters[Characters.length] = {
	char: "立",
	first: pattern_single,
	later: [d_li]
}
Characters[Characters.length] = {
	char: "闪",
	first: pattern_round_up,
	later: [d_men, p_ren]
}
Characters[Characters.length] = {
	char: "兰",
	first: pattern_ud_up_1_down_1,
	later: [d_lanzitou, h_three]
}
Characters[Characters.length] = {
	char: "半",
	first: pattern_single,
	later: [d_ban]
}
Characters[Characters.length] = {
	char: "汁",
	first: pattern_lr_left_1_right_1,
	later: [d_sandianshui, h_ten]
}
Characters[Characters.length] = {
	char: "汇",
	first: pattern_lr_left_1_right_1,
	later: [d_sandianshui, h_jiangzikuang]
}
Characters[Characters.length] = {
	char: "头",
	first: pattern_single,
	later: [d_tou]
}
Characters[Characters.length] = {
	char: "汉",
	first: pattern_lr_left_1_right_1,
	later: [d_sandianshui, z_you]
}
Characters[Characters.length] = {
	char: "宁",
	first: pattern_ud_up_1_down_1,
	later: [d_baogaitou, h_ding]
}
Characters[Characters.length] = {
	char: "穴",
	first: pattern_ud_up_1_down_1,
	later: [d_baogaitou, p_eight]
}
Characters[Characters.length] = {
	char: "它",
	first: pattern_ud_up_1_down_1,
	later: [d_baogaitou, p_bi]
}
Characters[Characters.length] = {
	char: "讨",
	first: pattern_lr_left_1_right_1,
	later: [d_yanzipang, h_cun]
}
Characters[Characters.length] = {
	char: "写",
	first: pattern_ud_up_1_down_1,
	later: [d_tubaogai, h_yuni]
}
Characters[Characters.length] = {
	char: "让",
	first: pattern_lr_left_1_right_1,
	later: [d_yanzipang, s_shang]
}
Characters[Characters.length] = {
	char: "礼",
	first: pattern_lr_left_1_right_1,
	later: [d_shizipang, shuwanhenggou]
}
Characters[Characters.length] = {
	char: "训",
	first: pattern_lr_left_1_right_1,
	later: [d_yanzipang, p_chuan]
}
Characters[Characters.length] = {
	char: "必",
	first: pattern_single,
	later: [d_bi]
}
Characters[Characters.length] = {
	char: "议",
	first: pattern_lr_left_1_right_1,
	later: [d_yanzipang, d_yi]
}
Characters[Characters.length] = {
	char: "讯",
	first: pattern_lr_left_1_right_1,
	later: [d_yanzipang, z_xunziyou]
}
Characters[Characters.length] = {
	char: "记",
	first: pattern_lr_left_1_right_1,
	later: [d_yanzipang, z_ji]
}
Characters[Characters.length] = {
	char: "永",
	first: pattern_single,
	later: [d_yong]
}
Characters[Characters.length] = {
	char: "司",
	first: pattern_round_right_up,
	later: [hengzheshugou, heng, s_kou]
}
Characters[Characters.length] = {
	char: "尼",
	first: pattern_round_left_up,
	later: [z_shi, p_bi]
}
Characters[Characters.length] = {
	char: "民",
	first: pattern_single,
	later: [z_min]
}
Characters[Characters.length] = {
	char: "出",
	first: pattern_single,
	later: [z_chu]
}
Characters[Characters.length] = {
	char: "辽",
	first: pattern_round_left_down,
	later: [z_le, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "奶",
	first: pattern_lr_left_1_right_1,
	later: [z_nv, z_nai]
}
Characters[Characters.length] = {
	char: "奴",
	first: pattern_lr_left_1_right_1,
	later: [z_nv, z_you]
}
Characters[Characters.length] = {
	char: "加",
	first: pattern_lr_left_1_right_1,
	later: [z_li, s_kou]
}
Characters[Characters.length] = {
	char: "召",
	first: pattern_ud_up_1_down_1,
	later: [z_dao, s_kou]
}
Characters[Characters.length] = {
	char: "皮",
	first: pattern_round_left_up,
	later: [p_pizipang, z_you]
}
Characters[Characters.length] = {
	char: "边",
	first: pattern_round_left_down,
	later: [z_li, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "发",
	first: pattern_round_left_up,
	later: [z_fazipang, z_you]
}
Characters[Characters.length] = {
	char: "孕",
	first: pattern_ud_up_1_down_1,
	later: [z_nai, z_zi]
}
Characters[Characters.length] = {
	char: "圣",
	first: pattern_ud_up_1_down_1,
	later: [z_you, h_tu]
}
Characters[Characters.length] = {
	char: "对",
	first: pattern_lr_left_1_right_1,
	later: [z_you, h_cun]
}
Characters[Characters.length] = {
	char: "台",
	first: pattern_ud_up_1_down_1,
	later: [z_sigong, s_kou]
}
Characters[Characters.length] = {
	char: "矛",
	first: pattern_single,
	later: [z_mao]
}
Characters[Characters.length] = {
	char: "纠",
	first: pattern_lr_left_1_right_1,
	later: [z_jiaosipang, z_shouzizuo]
}
Characters[Characters.length] = {
	char: "母",
	first: pattern_single,
	later: [z_mu]
}
Characters[Characters.length] = {
	char: "幼",
	first: pattern_lr_left_1_right_1,
	later: [z_youzipang, z_li]
}
Characters[Characters.length] = {
	char: "丝",
	first: pattern_ud_up_heng_2_down_1,
	later: [z_siziban, z_siziban, heng]
}

/* 六画 */
Characters[Characters.length] = {
	char: "式",
	first: pattern_round_right_up,
	later: [h_shizikuang, h_gong]
}
Characters[Characters.length] = {
	char: "刑",
	first: pattern_lr_left_1_right_1,
	later: [h_kai, s_lidaopang]
}
Characters[Characters.length] = {
	char: "动",
	first: pattern_lr_left_shu_2_right_1,
	later: [h_two, z_sigong, z_li]
}
Characters[Characters.length] = {
	char: "扛",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, h_gong]
}
Characters[Characters.length] = {
	char: "寺",
	first: pattern_ud_up_1_down_1,
	later: [h_tu, h_cun]
}
Characters[Characters.length] = {
	char: "吉",
	first: pattern_ud_up_1_down_1,
	later: [h_shi, s_kou]
}
Characters[Characters.length] = {
	char: "扣",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, s_kou]
}
Characters[Characters.length] = {
	char: "考",
	first: pattern_round_left_up,
	later: [h_laozitou, h_qiaoziyou]
}
Characters[Characters.length] = {
	char: "托",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, p_tuoziyou]
}
Characters[Characters.length] = {
	char: "老",
	first: pattern_round_left_up,
	later: [h_laozitou, p_bi]
}
Characters[Characters.length] = {
	char: "执",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, p_nawan]
}
Characters[Characters.length] = {
	char: "巩",
	first: pattern_lr_left_1_right_1,
	later: [h_gong, p_fan]
}
Characters[Characters.length] = {
	char: "圾",
	first: pattern_lr_left_1_right_1,
	later: [h_tu, p_jige]
}
Characters[Characters.length] = {
	char: "扩",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, d_guang]
}
Characters[Characters.length] = {
	char: "扫",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, z_xunzitou]
}
Characters[Characters.length] = {
	char: "地",
	first: pattern_lr_left_1_right_1,
	later: [h_tu, z_ye]
}
Characters[Characters.length] = {
	char: "扬",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, z_yangziyou]
}
Characters[Characters.length] = {
	char: "场",
	first: pattern_lr_left_1_right_1,
	later: [h_tu, z_yangziyou]
}
Characters[Characters.length] = {
	char: "耳",
	first: pattern_single,
	later: [h_erduo]
}
Characters[Characters.length] = {
	char: "共",
	first: pattern_ud_up_1_down_1,
	later: [h_gongzitou, p_eightdian]
}
Characters[Characters.length] = {
	char: "芒",
	first: pattern_ud_up_1_down_1,
	later: [h_caozitou, d_wang]
}
Characters[Characters.length] = {
	char: "亚",
	first: pattern_single,
	later: [h_yazhou]
}
Characters[Characters.length] = {
	char: "芝",
	first: pattern_ud_up_1_down_1,
	later: [h_caozitou, d_zhi]
}
Characters[Characters.length] = {
	char: "朽",
	first: pattern_lr_left_1_right_1,
	later: [h_mu, h_qiaoziyou]
}
Characters[Characters.length] = {
	char: "朴",
	first: pattern_lr_left_1_right_1,
	later: [h_mu, s_bu]
}
Characters[Characters.length] = {
	char: "机",
	first: pattern_lr_left_1_right_1,
	later: [h_mu, p_ji]
}
Characters[Characters.length] = {
	char: "权",
	first: pattern_lr_left_1_right_1,
	later: [h_mu, z_you]
}
Characters[Characters.length] = {
	char: "过",
	first: pattern_round_left_down,
	later: [h_cun, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "臣",
	first: pattern_single,
	later: [h_chen]
}
Characters[Characters.length] = {
	char: "再",
	first: pattern_single,
	later: [h_zai]
}
Characters[Characters.length] = {
	char: "协",
	first: pattern_lr_left_1_right_1,
	later: [h_ten, z_ban]
}
Characters[Characters.length] = {
	char: "西",
	first: pattern_single,
	later: [h_xi]
}
Characters[Characters.length] = {
	char: "压",
	first: pattern_round_left_up,
	later: [h_chang, h_yazili]
}
Characters[Characters.length] = {
	char: "厌",
	first: pattern_round_left_up,
	later: [h_chang, h_quan]
}
Characters[Characters.length] = {
	char: "在",
	first: pattern_round_left_up,
	later: [h_zaizitou, h_tu]
}
Characters[Characters.length] = {
	char: "有",
	first: pattern_round_left_up,
	later: [h_hengpie, p_yue]
}
Characters[Characters.length] = {
	char: "百",
	first: pattern_single,
	later: [h_hundred]
}
Characters[Characters.length] = {
	char: "存",
	first: pattern_round_left_up,
	later: [h_zaizitou, z_zi]
}
Characters[Characters.length] = {
	char: "而",
	first: pattern_single,
	later: [h_erqie]
}
Characters[Characters.length] = {
	char: "页",
	first: pattern_single,
	later: [h_ye]
}
Characters[Characters.length] = {
	char: "匠",
	first: pattern_round_left,
	later: [h_jiangzikuang, p_jin]
}
Characters[Characters.length] = {
	char: "夸",
	first: pattern_ud_up_1_down_1,
	later: [h_da, h_kui]
}
Characters[Characters.length] = {
	char: "夺",
	first: pattern_ud_up_1_down_1,
	later: [h_da, h_cun]
}
Characters[Characters.length] = {
	char: "灰",
	first: pattern_round_left_up,
	later: [h_hengpie, d_huo]
}
Characters[Characters.length] = {
	char: "达",
	first: pattern_round_left_down,
	later: [h_da, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "列",
	first: pattern_lr_left_1_right_1,
	later: [h_dai, s_lidaopang]
}
Characters[Characters.length] = {
	char: "死",
	first: pattern_ud_up_1_down_heng_2,
	later: [heng, p_xi, p_bi]
}
Characters[Characters.length] = {
	char: "成",
	first: pattern_single,
	later: [h_cheng]
}
Characters[Characters.length] = {
	char: "夹",
	first: pattern_single,
	later: [h_jia]
}
Characters[Characters.length] = {
	char: "轨",
	first: pattern_lr_left_1_right_1,
	later: [h_che, p_nine]
}
Characters[Characters.length] = {
	char: "邪",
	first: pattern_lr_left_1_right_1,
	later: [h_ya, z_youerpang]
}
Characters[Characters.length] = {
	char: "划",
	first: pattern_lr_left_1_right_1,
	later: [h_ge, s_lidaopang]
}
Characters[Characters.length] = {
	char: "迈",
	first: pattern_round_left_down,
	later: [h_wan, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "毕",
	first: pattern_ud_up_heng_2_down_1,
	later: [h_bizizuo, p_bi, h_ten]
}
Characters[Characters.length] = {
	char: "至",
	first: pattern_ud_up_1_down_1,
	later: [h_zhizitou, h_tu]
}
Characters[Characters.length] = {
	char: "此",
	first: pattern_lr_left_1_right_1,
	later: [s_zhi, p_bi]
}
Characters[Characters.length] = {
	char: "贞",
	first: pattern_ud_up_1_down_1,
	later: [s_shangzitou, s_bei]
}
Characters[Characters.length] = {
	char: "师",
	first: pattern_lr_left_1_right_1,
	later: [s_shupie, h_hengjin]
}
Characters[Characters.length] = {
	char: "尘",
	first: pattern_ud_up_1_down_1,
	later: [z_xiao, h_tu]
}
Characters[Characters.length] = {
	char: "尖",
	first: pattern_ud_up_1_down_1,
	later: [z_xiao, h_da]
}
Characters[Characters.length] = {
	char: "劣",
	first: pattern_ud_up_1_down_1,
	later: [s_shao, z_li]
}
Characters[Characters.length] = {
	char: "光",
	first: pattern_ud_up_1_down_1,
	later: [s_guangzitou, h_wuzidi]
}
Characters[Characters.length] = {
	char: "当",
	first: pattern_ud_up_1_down_1,
	later: [s_guangzitou, z_xunzitou]
}
Characters[Characters.length] = {
	char: "早",
	first: pattern_ud_up_1_down_1,
	later: [s_ri, h_ten]
}
Characters[Characters.length] = {
	char: "吐",
	first: pattern_lr_left_1_right_1,
	later: [s_kou, h_tu]
}
Characters[Characters.length] = {
	char: "吓",
	first: pattern_lr_left_1_right_1,
	later: [s_kou, h_xia]
}
Characters[Characters.length] = {
	char: "虫",
	first: pattern_single,
	later: [s_chong]
}
Characters[Characters.length] = {
	char: "曲",
	first: pattern_single,
	later: [s_qu]
}
Characters[Characters.length] = {
	char: "团",
	first: pattern_round_whole,
	later: [s_kou, h_cai]
}
Characters[Characters.length] = {
	char: "同",
	first: pattern_round_up,
	later: [s_tongzikuang, heng, s_kou]
}
Characters[Characters.length] = {
	char: "吊",
	first: pattern_ud_up_1_down_1,
	later: [s_kou, s_jin]
}
Characters[Characters.length] = {
	char: "吃",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_kou, p_pieheng, z_yi]
}
Characters[Characters.length] = {
	char: "因",
	first: pattern_round_whole,
	later: [s_kou, h_da]
}
Characters[Characters.length] = {
	char: "吸",
	first: pattern_lr_left_1_right_1,
	later: [s_kou, p_jige]
}
Characters[Characters.length] = {
	char: "吗",
	first: pattern_lr_left_1_right_1,
	later: [s_kou, z_ma]
}
Characters[Characters.length] = {
	char: "屿",
	first: pattern_lr_left_1_right_1,
	later: [s_shan, h_yuni]
}
Characters[Characters.length] = {
	char: "帆",
	first: pattern_lr_left_1_right_1,
	later: [s_jin, p_fan]
}
Characters[Characters.length] = {
	char: "岁",
	first: pattern_ud_up_1_down_1,
	later: [s_shan, p_xi]
}
Characters[Characters.length] = {
	char: "回",
	first: pattern_round_whole,
	later: [s_kou, s_kou]
}
Characters[Characters.length] = {
	char: "岂",
	first: pattern_ud_up_1_down_1,
	later: [s_shan, z_ji]
}
Characters[Characters.length] = {
	char: "刚",
	first: pattern_lr_left_wei_2_right_1,
	later: [s_tongzikuang, p_chadian, s_lidaopang]
}
Characters[Characters.length] = {
	char: "则",
	first: pattern_lr_left_1_right_1,
	later: [s_bei, s_lidaopang]
}
Characters[Characters.length] = {
	char: "肉",
	first: pattern_single,
	later: [s_rou]
}
Characters[Characters.length] = {
	char: "网",
	first: pattern_round_up,
	later: [s_tongzikuang, p_chadian, p_chadian]
}
Characters[Characters.length] = {
	char: "年",
	first: pattern_single,
	later: [p_nian]
}
Characters[Characters.length] = {
	char: "朱",
	first: pattern_single,
	later: [p_zhu]
}
Characters[Characters.length] = {
	char: "先",
	first: pattern_ud_up_1_down_1,
	later: [p_niuwuwei, p_er]
}
Characters[Characters.length] = {
	char: "丢",
	first: pattern_ud_up_1_down_shu_2,
	later: [pie, h_tu, z_sigong]
}
Characters[Characters.length] = {
	char: "舌",
	first: pattern_ud_up_1_down_1,
	later: [p_thousand, s_kou]
}
Characters[Characters.length] = {
	char: "竹",
	first: pattern_lr_left_1_right_1,
	later: [p_zhuzizuo, p_zhuziyou]
}
Characters[Characters.length] = {
	char: "迁",
	first: pattern_round_left_down,
	later: [p_thousand, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "乔",
	first: pattern_ud_up_1_down_1,
	later: [p_yao, p_dao]
}
Characters[Characters.length] = {
	char: "伟",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, h_wei]
}
Characters[Characters.length] = {
	char: "传",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, h_zhuan]
}
Characters[Characters.length] = {
	char: "乒",
	first: pattern_ud_up_1_down_1,
	later: [p_qiu, pie]
}
Characters[Characters.length] = {
	char: "乓",
	first: pattern_ud_up_1_down_1,
	later: [p_qiu, dian]
}
Characters[Characters.length] = {
	char: "休",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, h_mu]
}
Characters[Characters.length] = {
	char: "伍",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, h_five]
}
Characters[Characters.length] = {
	char: "伏",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, h_quan]
}
Characters[Characters.length] = {
	char: "优",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, h_youqi]
}
Characters[Characters.length] = {
	char: "伐",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, h_ge]
}
Characters[Characters.length] = {
	char: "延",
	first: pattern_round_left_down,
	later: [p_yanzili, z_jianzidi]
}
Characters[Characters.length] = {
	char: "件",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, p_niu]
}
Characters[Characters.length] = {
	char: "任",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, p_rengui]
}
Characters[Characters.length] = {
	char: "伤",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, p_pieheng, z_li]
}
Characters[Characters.length] = {
	char: "价",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, p_ren, p_dao]
}
Characters[Characters.length] = {
	char: "份",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, p_eight, z_dao]
}
Characters[Characters.length] = {
	char: "华",
	first: pattern_ud_up_heng_2_down_1,
	later: [p_danrenpang, p_bi, h_ten]
}
Characters[Characters.length] = {
	char: "仰",
	first: pattern_lr_left_1_right_heng_2,
	later: [p_danrenpang, p_angzizuo, z_danerpang]
}
Characters[Characters.length] = {
	char: "仿",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, d_fang]
}
Characters[Characters.length] = {
	char: "伙",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, d_huo]
}
Characters[Characters.length] = {
	char: "伪",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, d_wei]
}
Characters[Characters.length] = {
	char: "自",
	first: pattern_single,
	later: [p_zi]
}
Characters[Characters.length] = {
	char: "血",
	first: pattern_single,
	later: [p_xue]
}
Characters[Characters.length] = {
	char: "向",
	first: pattern_round_up,
	later: [p_xiangzikuang, s_kou]
}
Characters[Characters.length] = {
	char: "似",
	first: pattern_lr_left_1_right_heng_2,
	later: [p_danrenpang, z_shutidian, p_ren]
}
Characters[Characters.length] = {
	char: "后",
	first: pattern_round_left_up,
	later: [p_fanzipang, heng, s_kou]
}
Characters[Characters.length] = {
	char: "行",
	first: pattern_lr_left_1_right_1,
	later: [p_shuangrenpang, h_xingziyou]
}
Characters[Characters.length] = {
	char: "舟",
	first: pattern_single,
	later: [p_zhou]
}
Characters[Characters.length] = {
	char: "全",
	first: pattern_ud_up_1_down_1,
	later: [p_ren, h_wang]
}
Characters[Characters.length] = {
	char: "会",
	first: pattern_ud_up_1_down_shu_2,
	later: [p_ren, h_two, z_sigong]
}
Characters[Characters.length] = {
	char: "杀",
	first: pattern_ud_up_1_down_1,
	later: [p_chadian, h_mugou]
}
Characters[Characters.length] = {
	char: "合",
	first: pattern_ud_up_1_down_shu_2,
	later: [p_ren, heng, s_kou]
}
Characters[Characters.length] = {
	char: "兆",
	first: pattern_lr_left_1_right_1,
	later: [p_zhaozizuo, z_zhaoziyou]
}
Characters[Characters.length] = {
	char: "企",
	first: pattern_ud_up_1_down_1,
	later: [p_ren, s_zhi]
}
Characters[Characters.length] = {
	char: "众",
	first: pattern_pin,
	later: [p_ren, p_ren, p_ren]
}
Characters[Characters.length] = {
	char: "爷",
	first: pattern_ud_up_1_down_1,
	later: [p_fu, z_danerpang]
}
Characters[Characters.length] = {
	char: "伞",
	first: pattern_ud_up_1_down_1,
	later: [p_ren, d_lanzitou, h_ten]
}
Characters[Characters.length] = {
	char: "创",
	first: pattern_lr_left_shu_2_right_1,
	later: [p_ren, z_cangzidi, s_lidaopang]
}
Characters[Characters.length] = {
	char: "肌",
	first: pattern_lr_left_1_right_1,
	later: [p_yue, p_ji]
}
Characters[Characters.length] = {
	char: "朵",
	first: pattern_ud_up_1_down_1,
	later: [p_ji, h_mu]
}
Characters[Characters.length] = {
	char: "杂",
	first: pattern_ud_up_1_down_1,
	later: [p_nine, h_mugou]
}
Characters[Characters.length] = {
	char: "危",
	first: pattern_ud_up_1_down_wei_2,
	later: [p_weizitou, h_chang, z_cangzidi]
}
Characters[Characters.length] = {
	char: "旬",
	first: pattern_round_right_up,
	later: [p_baozitou, s_ri]
}
Characters[Characters.length] = {
	char: "旨",
	first: pattern_ud_up_1_down_1,
	later: [p_bi, s_ri]
}
Characters[Characters.length] = {
	char: "负",
	first: pattern_ud_up_1_down_1,
	later: [p_weizitou, s_bei]
}
Characters[Characters.length] = {
	char: "各",
	first: pattern_ud_up_1_down_1,
	later: [p_zhewen, s_kou]
}
Characters[Characters.length] = {
	char: "名",
	first: pattern_ud_up_1_down_1,
	later: [p_xi, s_kou]
}
Characters[Characters.length] = {
	char: "多",
	first: pattern_ud_up_1_down_1,
	later: [p_xi, p_xi]
}
Characters[Characters.length] = {
	char: "争",
	first: pattern_ud_up_1_down_1,
	later: [p_weizitou, z_zhengzidi]
}
Characters[Characters.length] = {
	char: "色",
	first: pattern_ud_up_1_down_1,
	later: [p_weizitou, z_ba]
}
Characters[Characters.length] = {
	char: "壮",
	first: pattern_lr_left_1_right_1,
	later: [d_jiangzipang, h_shi]
}
Characters[Characters.length] = {
	char: "冲",
	first: pattern_lr_left_1_right_1,
	later: [d_liangdianshui, s_zhong]
}
Characters[Characters.length] = {
	char: "冰",
	first: pattern_lr_left_1_right_1,
	later: [d_liangdianshui, z_shui]
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
	later: [d_yiye]
}
Characters[Characters.length] = {
	char: "刘",
	first: pattern_lr_left_1_right_1,
	later: [d_wen, s_lidaopang]
}
Characters[Characters.length] = {
	char: "齐",
	first: pattern_ud_up_1_down_1,
	later: [d_wen, p_dao]
}
Characters[Characters.length] = {
	char: "交",
	first: pattern_single,
	later: [d_jiao]
}
Characters[Characters.length] = {
	char: "次",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_liangdianshui, p_qianzitou, p_ren]
}
Characters[Characters.length] = {
	char: "衣",
	first: pattern_single,
	later: [d_yifu]
}
Characters[Characters.length] = {
	char: "产",
	first: pattern_single,
	later: [d_chan]
}
Characters[Characters.length] = {
	char: "决",
	first: pattern_lr_left_1_right_1,
	later: [d_liangdianshui, z_jueziyou]
}
Characters[Characters.length] = {
	char: "充",
	first: pattern_ud_up_1_down_1,
	later: [d_chongzitou, p_er]
}
Characters[Characters.length] = {
	char: "妄",
	first: pattern_ud_up_1_down_1,
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
	first: pattern_ud_up_1_down_1,
	later: [d_lanzitou, h_yangzishen]
}
Characters[Characters.length] = {
	char: "并",
	first: pattern_ud_up_1_down_1,
	later: [d_lanzitou, h_kai]
}
Characters[Characters.length] = {
	char: "关",
	first: pattern_ud_up_1_down_1,
	later: [d_lanzitou, h_tian]
}
Characters[Characters.length] = {
	char: "米",
	first: pattern_single,
	later: [d_mi]
}
Characters[Characters.length] = {
	char: "灯",
	first: pattern_lr_left_1_right_1,
	later: [d_huo, h_ding]
}
Characters[Characters.length] = {
	char: "州",
	first: pattern_single,
	later: [d_zhou]
}
Characters[Characters.length] = {
	char: "汗",
	first: pattern_lr_left_1_right_1,
	later: [d_sandianshui, h_gan]
}
Characters[Characters.length] = {
	char: "污",
	first: pattern_lr_left_1_right_1,
	later: [d_sandianshui, h_kui]
}
Characters[Characters.length] = {
	char: "江",
	first: pattern_lr_left_1_right_1,
	later: [d_sandianshui, h_gong]
}
Characters[Characters.length] = {
	char: "池",
	first: pattern_lr_left_1_right_1,
	later: [d_sandianshui, z_ye]
}
Characters[Characters.length] = {
	char: "汤",
	first: pattern_lr_left_1_right_1,
	later: [d_sandianshui, z_yangziyou]
}
Characters[Characters.length] = {
	char: "忙",
	first: pattern_lr_left_1_right_1,
	later: [d_shuxinpang, d_wang]
}
Characters[Characters.length] = {
	char: "兴",
	first: pattern_ud_up_1_down_1,
	later: [d_xingzitou, heng, p_eightdian]
}
Characters[Characters.length] = {
	char: "宇",
	first: pattern_ud_up_1_down_1,
	later: [d_baogaitou, h_yushi]
}
Characters[Characters.length] = {
	char: "守",
	first: pattern_ud_up_1_down_1,
	later: [d_baogaitou, h_cun]
}
Characters[Characters.length] = {
	char: "宅",
	first: pattern_ud_up_1_down_1,
	later: [d_baogaitou, p_tuoziyou]
}
Characters[Characters.length] = {
	char: "字",
	first: pattern_ud_up_1_down_1,
	later: [d_baogaitou, z_zi]
}
Characters[Characters.length] = {
	char: "安",
	first: pattern_ud_up_1_down_1,
	later: [d_baogaitou, z_nv]
}
Characters[Characters.length] = {
	char: "讲",
	first: pattern_lr_left_1_right_1,
	later: [d_yanzipang, h_jing]
}
Characters[Characters.length] = {
	char: "军",
	first: pattern_ud_up_1_down_1,
	later: [d_tubaogai, h_che]
}
Characters[Characters.length] = {
	char: "许",
	first: pattern_lr_left_1_right_1,
	later: [d_yanzipang, p_wu]
}
Characters[Characters.length] = {
	char: "论",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_yanzipang, p_ren, p_bi]
}
Characters[Characters.length] = {
	char: "农",
	first: pattern_single,
	later: [d_nong]
}
Characters[Characters.length] = {
	char: "讽",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_yanzipang, p_fengzitou, p_chadian]
}
Characters[Characters.length] = {
	char: "设",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_yanzipang, p_ji, z_you]
}
Characters[Characters.length] = {
	char: "访",
	first: pattern_lr_left_1_right_1,
	later: [d_yanzipang, d_fang]
}
Characters[Characters.length] = {
	char: "寻",
	first: pattern_ud_up_1_down_1,
	later: [z_xunzitou, h_cun]
}
Characters[Characters.length] = {
	char: "那",
	first: pattern_lr_left_1_right_1,
	later: [z_nazizuo, z_youerpang]
}
Characters[Characters.length] = {
	char: "迅",
	first: pattern_round_left_down,
	later: [z_xunziyou, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "尽",
	first: pattern_ud_up_1_down_1,
	later: [z_chi, d_ldsl]
}
Characters[Characters.length] = {
	char: "导",
	first: pattern_ud_up_1_down_1,
	later: [z_si, h_cun]
}
Characters[Characters.length] = {
	char: "异",
	first: pattern_ud_up_1_down_1,
	later: [z_si, h_piecao]
}
Characters[Characters.length] = {
	char: "孙",
	first: pattern_lr_left_1_right_1,
	later: [z_zi, z_xiao]
}
Characters[Characters.length] = {
	char: "阵",
	first: pattern_lr_left_1_right_1,
	later: [z_zuoerpang, h_che]
}
Characters[Characters.length] = {
	char: "阳",
	first: pattern_lr_left_1_right_1,
	later: [z_zuoerpang, s_ri]
}
Characters[Characters.length] = {
	char: "收",
	first: pattern_lr_left_1_right_1,
	later: [z_shouzizuo, p_fanwenpang]
}
Characters[Characters.length] = {
	char: "阶",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_zuoerpang, p_ren, p_dao]
}
Characters[Characters.length] = {
	char: "阴",
	first: pattern_lr_left_1_right_1,
	later: [z_zuoerpang, p_yue]
}
Characters[Characters.length] = {
	char: "防",
	first: pattern_lr_left_1_right_1,
	later: [z_zuoerpang, d_fang]
}
Characters[Characters.length] = {
	char: "奸",
	first: pattern_lr_left_1_right_1,
	later: [z_nv, h_gan]
}
Characters[Characters.length] = {
	char: "如",
	first: pattern_lr_left_1_right_1,
	later: [z_nv, s_kou]
}
Characters[Characters.length] = {
	char: "妇",
	first: pattern_lr_left_1_right_1,
	later: [z_nv, z_xunzitou]
}
Characters[Characters.length] = {
	char: "好",
	first: pattern_lr_left_1_right_1,
	later: [z_nv, z_zi]
}
Characters[Characters.length] = {
	char: "她",
	first: pattern_lr_left_1_right_1,
	later: [z_nv, z_ye]
}
Characters[Characters.length] = {
	char: "妈",
	first: pattern_lr_left_1_right_1,
	later: [z_nv, z_ma]
}
Characters[Characters.length] = {
	char: "戏",
	first: pattern_lr_left_1_right_1,
	later: [z_you, h_ge]
}
Characters[Characters.length] = {
	char: "羽",
	first: pattern_lr_left_1_right_1,
	later: [z_xi, z_xi]
}
Characters[Characters.length] = {
	char: "观",
	first: pattern_lr_left_1_right_1,
	later: [z_you, s_jian]
}
Characters[Characters.length] = {
	char: "欢",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_you, p_qianzitou, p_ren]
}
Characters[Characters.length] = {
	char: "买",
	first: pattern_ud_up_1_down_1,
	later: [henggou, d_tou]
}
Characters[Characters.length] = {
	char: "红",
	first: pattern_lr_left_1_right_1,
	later: [z_jiaosipang, h_gong]
}
Characters[Characters.length] = {
	char: "纤",
	first: pattern_lr_left_1_right_1,
	later: [z_jiaosipang, p_thousand]
}
Characters[Characters.length] = {
	char: "级",
	first: pattern_lr_left_1_right_1,
	later: [z_jiaosipang, p_jige]
}
Characters[Characters.length] = {
	char: "约",
	first: pattern_lr_left_1_right_1,
	later: [z_jiaosipang, p_shao]
}
Characters[Characters.length] = {
	char: "纪",
	first: pattern_lr_left_1_right_1,
	later: [z_jiaosipang, z_ji]
}
Characters[Characters.length] = {
	char: "驰",
	first: pattern_lr_left_1_right_1,
	later: [z_ma, z_ye]
}
Characters[Characters.length] = {
	char: "巡",
	first: pattern_round_left_down,
	later: [z_sanzhe, d_zouzhidi]
}

/* 七画 */
Characters[Characters.length] = {
	char: "寿",
	first: pattern_round_left_up,
	later: [h_piefeng, h_cun]
}
Characters[Characters.length] = {
	char: "弄",
	first: pattern_ud_up_1_down_1,
	later: [h_wang, h_piecao]
}
Characters[Characters.length] = {
	char: "麦",
	first: pattern_ud_up_1_down_1,
	later: [h_qingzitou, p_zhewen]
}
Characters[Characters.length] = {
	char: "形",
	first: pattern_lr_left_1_right_1,
	later: [h_kai, p_sanpie]
}
Characters[Characters.length] = {
	char: "进",
	first: pattern_round_left_down,
	later: [h_jing, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "戒",
	first: pattern_round_right_up,
	later: [h_jiezikuang, h_piecao]
}
Characters[Characters.length] = {
	char: "吞",
	first: pattern_ud_up_1_down_1,
	later: [h_tian, s_kou]
}
Characters[Characters.length] = {
	char: "远",
	first: pattern_round_left_down,
	later: [h_two, p_er, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "违",
	first: pattern_round_left_down,
	later: [h_wei, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "运",
	first: pattern_round_left_down,
	later: [h_two, z_sigong, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "扶",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, h_fu]
}
Characters[Characters.length] = {
	char: "抚",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, h_wuyou]
}
Characters[Characters.length] = {
	char: "坛",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tu, h_two, z_sigong]
}
Characters[Characters.length] = {
	char: "技",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, h_ten, z_you]
}
Characters[Characters.length] = {
	char: "坏",
	first: pattern_lr_left_1_right_1,
	later: [h_tu, h_bu]
}
Characters[Characters.length] = {
	char: "扰",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, h_youqi]
}
Characters[Characters.length] = {
	char: "拒",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, h_ju]
}
Characters[Characters.length] = {
	char: "找",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, h_ge]
}
Characters[Characters.length] = {
	char: "批",
	first: pattern_lr_left_1_right_heng_2,
	later: [h_tishoupang, h_bizizuo, p_bi]
}
Characters[Characters.length] = {
	char: "扯",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, s_zhi]
}
Characters[Characters.length] = {
	char: "址",
	first: pattern_lr_left_1_right_1,
	later: [h_tu, s_zhi]
}
Characters[Characters.length] = {
	char: "走",
	first: pattern_ud_up_1_down_1,
	later: [h_tu, s_zouzidi]
}
Characters[Characters.length] = {
	char: "抄",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, s_shao]
}
Characters[Characters.length] = {
	char: "坝",
	first: pattern_lr_left_1_right_1,
	later: [h_tu, s_bei]
}
Characters[Characters.length] = {
	char: "贡",
	first: pattern_ud_up_1_down_1,
	later: [h_gong, s_bei]
}
Characters[Characters.length] = {
	char: "攻",
	first: pattern_lr_left_1_right_1,
	later: [h_gong, p_fanwenpang]
}
Characters[Characters.length] = {
	char: "赤",
	first: pattern_ud_up_1_down_1,
	later: [h_tu, p_chizidi]
}
Characters[Characters.length] = {
	char: "折",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, p_jin]
}
Characters[Characters.length] = {
	char: "抓",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, p_zhao]
}
Characters[Characters.length] = {
	char: "扮",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, p_eight, z_dao]
}
Characters[Characters.length] = {
	char: "抢",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, p_ren, z_cangzidi]
}
Characters[Characters.length] = {
	char: "孝",
	first: pattern_round_left_up,
	later: [h_laozitou, z_zi]
}
Characters[Characters.length] = {
	char: "均",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_tu, p_baozitou, d_liangdianshui]
}
Characters[Characters.length] = {
	char: "抛",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_tishoupang, p_nine, z_li]
}
Characters[Characters.length] = {
	char: "投",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, p_ji, z_you]
}
Characters[Characters.length] = {
	char: "坟",
	first: pattern_lr_left_1_right_1,
	later: [h_tu, d_wen]
}
Characters[Characters.length] = {
	char: "抗",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, d_liuzitou, p_ji]
}
Characters[Characters.length] = {
	char: "坑",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tu, d_liuzitou, p_ji]
}
Characters[Characters.length] = {
	char: "坊",
	first: pattern_lr_left_1_right_1,
	later: [h_tu, d_fang]
}
Characters[Characters.length] = {
	char: "抖",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, d_dou]
}
Characters[Characters.length] = {
	char: "护",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, d_hu]
}
Characters[Characters.length] = {
	char: "壳",
	first: pattern_ud_up_middle_down,
	later: [h_shi, d_tubaogai, p_ji]
}
Characters[Characters.length] = {
	char: "志",
	first: pattern_ud_up_1_down_1,
	later: [h_shi, d_xin]
}
Characters[Characters.length] = {
	char: "扭",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, z_chou]
}
Characters[Characters.length] = {
	char: "块",
	first: pattern_lr_left_1_right_1,
	later: [h_tu, z_jueziyou]
}
Characters[Characters.length] = {
	char: "声",
	first: pattern_ud_up_1_down_1,
	later: [h_shi, z_meizitou]
}
Characters[Characters.length] = {
	char: "把",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, z_ba]
}
Characters[Characters.length] = {
	char: "报",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_tishoupang, z_danerpang, z_you]
}
Characters[Characters.length] = {
	char: "却",
	first: pattern_lr_left_shu_2_right_1,
	later: [h_tu, z_sigong, z_danerpang]
}
Characters[Characters.length] = {
	char: "劫",
	first: pattern_lr_left_shu_2_right_1,
	later: [h_tu, z_sigong, z_li]
}
Characters[Characters.length] = {
	char: "芽",
	first: pattern_ud_up_1_down_1,
	later: [h_caozitou, h_ya]
}
Characters[Characters.length] = {
	char: "花",
	first: pattern_ud_up_1_down_heng_2,
	later: [h_caozitou, p_danrenpang, p_bi]
}
Characters[Characters.length] = {
	char: "芹",
	first: pattern_ud_up_1_down_1,
	later: [h_caozitou, p_jin]
}
Characters[Characters.length] = {
	char: "芬",
	first: pattern_ud_up_1_down_shu_2,
	later: [h_caozitou, p_eight, z_dao]
}
Characters[Characters.length] = {
	char: "苍",
	first: pattern_ud_up_1_down_shu_2,
	later: [h_caozitou, p_ren, z_cangzidi]
}
Characters[Characters.length] = {
	char: "芳",
	first: pattern_ud_up_1_down_1,
	later: [h_caozitou, d_fang]
}
Characters[Characters.length] = {
	char: "严",
	first: pattern_single,
	later: [h_yan]
}
Characters[Characters.length] = {
	char: "芦",
	first: pattern_ud_up_1_down_1,
	later: [h_caozitou, d_hu]
}
Characters[Characters.length] = {
	char: "劳",
	first: pattern_ud_up_middle_down,
	later: [h_caozitou, d_tubaogai, z_li]
}
Characters[Characters.length] = {
	char: "克",
	first: pattern_ud_up_middle_down,
	later: [h_shi, s_kou, p_er]
}
Characters[Characters.length] = {
	char: "苏",
	first: pattern_ud_up_1_down_1,
	later: [h_caozitou, z_ban]
}
Characters[Characters.length] = {
	char: "杆",
	first: pattern_lr_left_1_right_1,
	later: [h_mu, h_gan]
}
Characters[Characters.length] = {
	char: "杠",
	first: pattern_lr_left_1_right_1,
	later: [h_mu, h_gong]
}
Characters[Characters.length] = {
	char: "杜",
	first: pattern_lr_left_1_right_1,
	later: [h_mu, h_tu]
}
Characters[Characters.length] = {
	char: "材",
	first: pattern_lr_left_1_right_1,
	later: [h_mu, h_cai]
}
Characters[Characters.length] = {
	char: "村",
	first: pattern_lr_left_1_right_1,
	later: [h_mu, h_cun]
}
Characters[Characters.length] = {
	char: "杏",
	first: pattern_ud_up_1_down_1,
	later: [h_mu, s_kou]
}
Characters[Characters.length] = {
	char: "极",
	first: pattern_lr_left_1_right_1,
	later: [h_mu, p_jige]
}
Characters[Characters.length] = {
	char: "李",
	first: pattern_ud_up_1_down_1,
	later: [h_mu, z_zi]
}
Characters[Characters.length] = {
	char: "杨",
	first: pattern_lr_left_1_right_1,
	later: [h_mu, z_yangziyou]
}
Characters[Characters.length] = {
	char: "求",
	first: pattern_single,
	later: [h_qiu]
}
Characters[Characters.length] = {
	char: "更",
	first: pattern_single,
	later: [h_geng]
}
Characters[Characters.length] = {
	char: "束",
	first: pattern_single,
	later: [h_shufu]
}
Characters[Characters.length] = {
	char: "豆",
	first: pattern_ud_up_shu_2_down_1,
	later: [heng, s_kou, d_qianzitou]
}
Characters[Characters.length] = {
	char: "两",
	first: pattern_single,
	later: [h_liang]
}
Characters[Characters.length] = {
	char: "丽",
	first: pattern_ud_up_1_down_heng_2,
	later: [heng, s_lixiaban, s_lixiaban]
}
Characters[Characters.length] = {
	char: "医",
	first: pattern_round_left,
	later: [h_jiangzikuang, p_shi]
}
Characters[Characters.length] = {
	char: "辰",
	first: pattern_round_left_up,
	later: [h_chang, h_two, z_sangzidi]
}
Characters[Characters.length] = {
	char: "励",
	first: pattern_lr_left_wei_2_right_1,
	later: [h_chang, h_wan, z_li]
}
Characters[Characters.length] = {
	char: "否",
	first: pattern_ud_up_1_down_1,
	later: [h_bu, s_kou]
}
Characters[Characters.length] = {
	char: "还",
	first: pattern_round_left_down,
	later: [h_bu, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "歼",
	first: pattern_lr_left_1_right_1,
	later: [h_dai, p_thousand]
}
Characters[Characters.length] = {
	char: "来",
	first: pattern_single,
	later: [h_lai]
}
Characters[Characters.length] = {
	char: "连",
	first: pattern_round_left_down,
	later: [h_che, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "步",
	first: pattern_ud_up_1_down_1,
	later: [s_zhi, s_shaowud]
}
Characters[Characters.length] = {
	char: "坚",
	first: pattern_ud_up_heng_2_down_1,
	later: [s_liangshu, z_you, h_tu]
}
Characters[Characters.length] = {
	char: "旱",
	first: pattern_ud_up_1_down_1,
	later: [s_ri, h_gan]
}
Characters[Characters.length] = {
	char: "盯",
	first: pattern_lr_left_1_right_1,
	later: [s_mu, h_ding]
}
Characters[Characters.length] = {
	char: "呈",
	first: pattern_ud_up_1_down_1,
	later: [s_kou, h_wang]
}
Characters[Characters.length] = {
	char: "时",
	first: pattern_lr_left_1_right_1,
	later: [s_ri, h_cun]
}
Characters[Characters.length] = {
	char: "吴",
	first: pattern_ud_up_1_down_1,
	later: [s_kou, h_tian]
}
Characters[Characters.length] = {
	char: "助",
	first: pattern_lr_left_1_right_1,
	later: [s_qie, z_li]
}
Characters[Characters.length] = {
	char: "县",
	first: pattern_ud_up_1_down_1,
	later: [s_qie, z_sigong]
}
Characters[Characters.length] = {
	char: "里",
	first: pattern_single,
	later: [s_li]
}
Characters[Characters.length] = {
	char: "呆",
	first: pattern_ud_up_1_down_1,
	later: [s_kou, h_mu]
}
Characters[Characters.length] = {
	char: "园",
	first: pattern_round_whole,
	later: [s_kou, h_two, p_er]
}
Characters[Characters.length] = {
	char: "旷",
	first: pattern_lr_left_1_right_1,
	later: [s_ri, d_guang]
}
Characters[Characters.length] = {
	char: "围",
	first: pattern_round_whole,
	later: [s_kou, h_wei]
}
Characters[Characters.length] = {
	char: "呀",
	first: pattern_lr_left_1_right_1,
	later: [s_kou, h_ya]
}
Characters[Characters.length] = {
	char: "吨",
	first: pattern_lr_left_1_right_1,
	later: [s_kou, h_tun]
}
Characters[Characters.length] = {
	char: "足",
	first: pattern_single,
	later: [s_zu]
}
Characters[Characters.length] = {
	char: "邮",
	first: pattern_lr_left_1_right_1,
	later: [s_you, z_youerpang]
}
Characters[Characters.length] = {
	char: "男",
	first: pattern_ud_up_1_down_1,
	later: [s_tian, z_li]
}
Characters[Characters.length] = {
	char: "困",
	first: pattern_round_whole,
	later: [s_kou, h_mu]
}
Characters[Characters.length] = {
	char: "吵",
	first: pattern_lr_left_1_right_1,
	later: [s_kou, s_shao]
}
Characters[Characters.length] = {
	char: "串",
	first: pattern_single,
	later: [s_chuan]
}
Characters[Characters.length] = {
	char: "员",
	first: pattern_ud_up_1_down_1,
	later: [s_kou, s_bei]
}
Characters[Characters.length] = {
	char: "听",
	first: pattern_lr_left_1_right_1,
	later: [s_kou, p_jin]
}
Characters[Characters.length] = {
	char: "吩",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_kou, p_eight, z_dao]
}
Characters[Characters.length] = {
	char: "吹",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_kou, p_qianzitou, p_ren]
}
Characters[Characters.length] = {
	char: "呜",
	first: pattern_lr_left_1_right_1,
	later: [s_kou, p_wuya]
}
Characters[Characters.length] = {
	char: "吧",
	first: pattern_lr_left_1_right_1,
	later: [s_kou, z_ba]
}
Characters[Characters.length] = {
	char: "吼",
	first: pattern_lr_left_1_right_heng_2,
	later: [s_kou, z_zi, shuwanhenggou]
}
Characters[Characters.length] = {
	char: "别",
	first: pattern_lr_left_shu_2_right_1,
	later: [s_kou, z_li, s_lidaopang]
}
Characters[Characters.length] = {
	char: "岗",
	first: pattern_ud_up_1_down_wei_2,
	later: [s_shan, s_tongzikuang, p_chadian]
}
Characters[Characters.length] = {
	char: "帐",
	first: pattern_lr_left_1_right_1,
	later: [s_jin, p_chang]
}
Characters[Characters.length] = {
	char: "财",
	first: pattern_lr_left_1_right_1,
	later: [s_bei, h_cai]
}
Characters[Characters.length] = {
	char: "针",
	first: pattern_lr_left_1_right_1,
	later: [p_jinzipang, h_ten]
}
Characters[Characters.length] = {
	char: "钉",
	first: pattern_lr_left_1_right_1,
	later: [p_jinzipang, h_ding]
}
Characters[Characters.length] = {
	char: "告",
	first: pattern_ud_up_1_down_1,
	later: [p_niuwuwei, s_kou]
}
Characters[Characters.length] = {
	char: "我",
	first: pattern_single,
	later: [p_wo]
}
Characters[Characters.length] = {
	char: "乱",
	first: pattern_lr_left_shu_2_right_1,
	later: [p_thousand, s_kou, shuwanhenggou]
}
Characters[Characters.length] = {
	char: "利",
	first: pattern_lr_left_1_right_1,
	later: [p_he, s_lidaopang]
}
Characters[Characters.length] = {
	char: "秃",
	first: pattern_ud_up_1_down_1,
	later: [p_he, p_ji]
}
Characters[Characters.length] = {
	char: "秀",
	first: pattern_ud_up_1_down_1,
	later: [p_he, z_nai]
}
Characters[Characters.length] = {
	char: "私",
	first: pattern_lr_left_1_right_1,
	later: [p_he, z_sigong]
}
Characters[Characters.length] = {
	char: "每",
	first: pattern_ud_up_1_down_1,
	later: [p_pieheng, z_mu]
}
Characters[Characters.length] = {
	char: "兵",
	first: pattern_ud_up_1_down_1,
	later: [p_qiu, p_eightdian]
}
Characters[Characters.length] = {
	char: "估",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, h_ten, s_kou]
}
Characters[Characters.length] = {
	char: "体",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, h_ben]
}
Characters[Characters.length] = {
	char: "何",
	first: pattern_lr_left_1_right_wei_2,
	later: [p_danrenpang, h_ding, s_kou]
}
Characters[Characters.length] = {
	char: "但",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, s_ri, heng]
}
Characters[Characters.length] = {
	char: "伸",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, s_shen]
}
Characters[Characters.length] = {
	char: "作",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, p_zha]
}
Characters[Characters.length] = {
	char: "伯",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, p_bai]
}
Characters[Characters.length] = {
	char: "伶",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, p_ren, d_lingzidi]
}
Characters[Characters.length] = {
	char: "佣",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, p_yong]
}
Characters[Characters.length] = {
	char: "低",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, p_di]
}
Characters[Characters.length] = {
	char: "你",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, p_qianzitou, z_xiao]
}
Characters[Characters.length] = {
	char: "住",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, d_zhu]
}
Characters[Characters.length] = {
	char: "位",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, d_li]
}
Characters[Characters.length] = {
	char: "伴",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, d_ban]
}
Characters[Characters.length] = {
	char: "身",
	first: pattern_single,
	later: [p_shen]
}
Characters[Characters.length] = {
	char: "皂",
	first: pattern_ud_up_1_down_1,
	later: [p_bai, h_seven]
}
Characters[Characters.length] = {
	char: "佛",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, z_fu]
}
Characters[Characters.length] = {
	char: "近",
	first: pattern_round_left_down,
	later: [p_jin, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "彻",
	first: pattern_lr_left_1_right_heng_2,
	later: [p_shuangrenpang, h_qiezizuo, z_dao]
}
Characters[Characters.length] = {
	char: "役",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_shuangrenpang, p_ji, z_you]
}
Characters[Characters.length] = {
	char: "返",
	first: pattern_round_left_down,
	later: [p_fanzipang, z_you, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "余",
	first: pattern_ud_up_1_down_1,
	later: [p_ren, h_yuzidi]
}
Characters[Characters.length] = {
	char: "希",
	first: pattern_ud_up_1_down_wei_2,
	later: [p_chadian, h_hengpie, s_jin]
}
Characters[Characters.length] = {
	char: "坐",
	first: pattern_ud_up_heng_2_down_1,
	later: [p_ren, p_ren, h_tu]
}
Characters[Characters.length] = {
	char: "谷",
	first: pattern_ud_up_middle_down,
	later: [p_eightdian, p_ren, s_kou]
}
Characters[Characters.length] = {
	char: "妥",
	first: pattern_ud_up_1_down_1,
	later: [p_caizitou, z_nv]
}
Characters[Characters.length] = {
	char: "含",
	first: pattern_ud_up_shu_2_down_1,
	later: [p_ren, d_jinzidi, s_kou]
}
Characters[Characters.length] = {
	char: "邻",
	first: pattern_lr_left_shu_2_right_1,
	later: [p_ren, d_lingzidi, z_youerpang]
}
Characters[Characters.length] = {
	char: "岔",
	first: pattern_ud_up_shu_2_down_1,
	later: [p_eight, z_dao, s_shan]
}
Characters[Characters.length] = {
	char: "肝",
	first: pattern_lr_left_1_right_1,
	later: [p_yue, h_gan]
}
Characters[Characters.length] = {
	char: "肚",
	first: pattern_lr_left_1_right_1,
	later: [p_yue, h_tu]
}
Characters[Characters.length] = {
	char: "肠",
	first: pattern_lr_left_1_right_1,
	later: [p_yue, z_yangziyou]
}
Characters[Characters.length] = {
	char: "龟",
	first: pattern_ud_up_1_down_1,
	later: [p_weizitou, s_guizishen]
}
Characters[Characters.length] = {
	char: "免",
	first: pattern_ud_up_1_down_1,
	later: [p_weizitou, s_mianzishen]
}
Characters[Characters.length] = {
	char: "狂",
	first: pattern_lr_left_1_right_1,
	later: [p_fanquanpang, h_wang]
}
Characters[Characters.length] = {
	char: "犹",
	first: pattern_lr_left_1_right_1,
	later: [p_fanquanpang, h_youqi]
}
Characters[Characters.length] = {
	char: "角",
	first: pattern_ud_up_1_down_1,
	later: [p_weizitou, p_yong]
}
Characters[Characters.length] = {
	char: "删",
	first: pattern_lr_left_1_right_1,
	later: [p_ce, s_lidaopang]
}
Characters[Characters.length] = {
	char: "条",
	first: pattern_ud_up_1_down_1,
	later: [p_zhewen, h_mugou]
}
Characters[Characters.length] = {
	char: "卵",
	first: pattern_lr_left_1_right_1,
	later: [p_luanzizuo, z_luanziyou]
}
Characters[Characters.length] = {
	char: "岛",
	first: pattern_round_right_up,
	later: [p_niaowuheng, s_shan]
}
Characters[Characters.length] = {
	char: "迎",
	first: pattern_round_left_down,
	later: [p_angzizuo, z_danerpang, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "饭",
	first: pattern_lr_left_1_right_wei_2,
	later: [p_shichi, p_fanzipang, z_you]
}
Characters[Characters.length] = {
	char: "饮",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_shichi, p_qianzitou, p_ren]
}
Characters[Characters.length] = {
	char: "系",
	first: pattern_ud_up_1_down_shu_2,
	later: [pie, z_youzipang, z_xiao]
}
Characters[Characters.length] = {
	char: "言",
	first: pattern_ud_up_middle_down,
	later: [d_liuzitou, h_two, s_kou]
}
Characters[Characters.length] = {
	char: "冻",
	first: pattern_lr_left_1_right_1,
	later: [d_liangdianshui, h_dong]
}
Characters[Characters.length] = {
	char: "状",
	first: pattern_lr_left_1_right_1,
	later: [d_jiangzipang, h_quan]
}
Characters[Characters.length] = {
	char: "亩",
	first: pattern_ud_up_1_down_1,
	later: [d_liuzitou, s_tian]
}
Characters[Characters.length] = {
	char: "况",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_liangdianshui, s_kou, p_er]
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
	later: [d_bingzitou, z_le]
}
Characters[Characters.length] = {
	char: "应",
	first: pattern_round_left_up,
	later: [d_guang, d_yingzidi]
}
Characters[Characters.length] = {
	char: "冷",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_liangdianshui, p_ren, d_lingzidi]
}
Characters[Characters.length] = {
	char: "这",
	first: pattern_round_left_down,
	later: [d_wen, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "序",
	first: pattern_round_left_up,
	later: [d_guang, z_yu]
}
Characters[Characters.length] = {
	char: "辛",
	first: pattern_ud_up_1_down_1,
	later: [d_li, h_ten]
}
Characters[Characters.length] = {
	char: "弃",
	first: pattern_ud_up_1_down_1,
	later: [d_chongzitou, h_piecao]
}
Characters[Characters.length] = {
	char: "冶",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_liangdianshui, z_sigong, s_kou]
}
Characters[Characters.length] = {
	char: "忘",
	first: pattern_ud_up_1_down_1,
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
	first: pattern_lr_left_1_right_1,
	later: [d_panzizuo, s_lidaopang]
}
Characters[Characters.length] = {
	char: "灶",
	first: pattern_lr_left_1_right_1,
	later: [d_huo, h_tu]
}
Characters[Characters.length] = {
	char: "灿",
	first: pattern_lr_left_1_right_1,
	later: [d_huo, s_shan]
}
Characters[Characters.length] = {
	char: "弟",
	first: pattern_ud_up_1_down_1,
	later: [d_lanzitou, z_dizidi]
}
Characters[Characters.length] = {
	char: "汪",
	first: pattern_lr_left_1_right_1,
	later: [d_sandianshui, h_wang]
}
Characters[Characters.length] = {
	char: "沙",
	first: pattern_lr_left_1_right_1,
	later: [d_sandianshui, s_shao]
}
Characters[Characters.length] = {
	char: "汽",
	first: pattern_lr_left_1_right_1,
	later: [d_sandianshui, p_qi]
}
Characters[Characters.length] = {
	char: "沃",
	first: pattern_lr_left_1_right_1,
	later: [d_sandianshui, p_yao]
}
Characters[Characters.length] = {
	char: "泛",
	first: pattern_lr_left_1_right_1,
	later: [d_sandianshui, p_fa]
}
Characters[Characters.length] = {
	char: "沟",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_sandianshui, p_baozitou, z_sigong]
}
Characters[Characters.length] = {
	char: "没",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, p_ji, z_you]
}
Characters[Characters.length] = {
	char: "沈",
	first: pattern_lr_left_1_right_1,
	later: [d_sandianshui, d_shenziyou]
}
Characters[Characters.length] = {
	char: "沉",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, d_tubaogai, p_ji]
}
Characters[Characters.length] = {
	char: "怀",
	first: pattern_lr_left_1_right_1,
	later: [d_shuxinpang, h_bu]
}
Characters[Characters.length] = {
	char: "忧",
	first: pattern_lr_left_1_right_1,
	later: [d_shuxinpang, h_youqi]
}
Characters[Characters.length] = {
	char: "快",
	first: pattern_lr_left_1_right_1,
	later: [d_shuxinpang, z_jueziyou]
}
Characters[Characters.length] = {
	char: "完",
	first: pattern_ud_up_1_down_shu_2,
	later: [d_baogaitou, h_two, p_er]
}
Characters[Characters.length] = {
	char: "宋",
	first: pattern_ud_up_1_down_1,
	later: [d_baogaitou, h_mu]
}
Characters[Characters.length] = {
	char: "宏",
	first: pattern_ud_up_1_down_wei_2,
	later: [d_baogaitou, h_hengpie, z_sigong]
}
Characters[Characters.length] = {
	char: "牢",
	first: pattern_ud_up_1_down_1,
	later: [d_baogaitou, p_niu]
}
Characters[Characters.length] = {
	char: "究",
	first: pattern_ud_up_1_down_1,
	later: [d_xuezitou, p_nine]
}
Characters[Characters.length] = {
	char: "穷",
	first: pattern_ud_up_1_down_1,
	later: [d_xuezitou, z_li]
}
Characters[Characters.length] = {
	char: "灾",
	first: pattern_ud_up_1_down_1,
	later: [d_baogaitou, d_huo]
}
Characters[Characters.length] = {
	char: "良",
	first: pattern_single,
	later: [d_liang]
}
Characters[Characters.length] = {
	char: "证",
	first: pattern_lr_left_1_right_1,
	later: [d_yanzipang, h_zheng]
}
Characters[Characters.length] = {
	char: "启",
	first: pattern_round_left_up,
	later: [d_hu, s_kou]
}
Characters[Characters.length] = {
	char: "评",
	first: pattern_lr_left_1_right_1,
	later: [d_yanzipang, h_ping]
}
Characters[Characters.length] = {
	char: "补",
	first: pattern_lr_left_1_right_1,
	later: [d_buyipang, s_bu]
}
Characters[Characters.length] = {
	char: "初",
	first: pattern_lr_left_1_right_1,
	later: [d_buyipang, z_dao]
}
Characters[Characters.length] = {
	char: "社",
	first: pattern_lr_left_1_right_1,
	later: [d_shizipang, h_tu]
}
Characters[Characters.length] = {
	char: "识",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_yanzipang, s_kou, p_eightdian]
}
Characters[Characters.length] = {
	char: "诉",
	first: pattern_lr_left_1_right_1,
	later: [d_yanzipang, p_chi]
}
Characters[Characters.length] = {
	char: "诊",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_yanzipang, p_ren, p_sanpie]
}
Characters[Characters.length] = {
	char: "词",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_yanzipang, hengzheshugou, heng, s_kou]
}
Characters[Characters.length] = {
	char: "译",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_yanzipang, z_you, h_fengzidi]
}
Characters[Characters.length] = {
	char: "君",
	first: pattern_round_left_up,
	later: [z_yin, s_kou]
}
Characters[Characters.length] = {
	char: "灵",
	first: pattern_ud_up_1_down_1,
	later: [z_xunzitou, d_huo]
}
Characters[Characters.length] = {
	char: "即",
	first: pattern_lr_left_1_right_1,
	later: [z_jizizuo, z_danerpang]
}
Characters[Characters.length] = {
	char: "层",
	first: pattern_round_left_up,
	later: [z_shi, h_two, z_sigong]
}
Characters[Characters.length] = {
	char: "尿",
	first: pattern_round_left_up,
	later: [z_shi, z_shui]
}
Characters[Characters.length] = {
	char: "尾",
	first: pattern_round_left_up,
	later: [z_shi, p_mao]
}
Characters[Characters.length] = {
	char: "迟",
	first: pattern_round_left_down,
	later: [z_chi, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "局",
	first: pattern_round_left_up,
	later: [z_shi, hengzheshugou, s_kou]
}
Characters[Characters.length] = {
	char: "改",
	first: pattern_lr_left_1_right_1,
	later: [z_ji, p_fanwenpang]
}
Characters[Characters.length] = {
	char: "张",
	first: pattern_lr_left_1_right_1,
	later: [z_gong, p_chang]
}
Characters[Characters.length] = {
	char: "忌",
	first: pattern_ud_up_1_down_1,
	later: [z_ji, d_xin]
}
Characters[Characters.length] = {
	char: "际",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_zuoerpang, h_two, z_xiao]
}
Characters[Characters.length] = {
	char: "陆",
	first: pattern_lr_left_1_right_1,
	later: [z_zuoerpang, h_jida]
}
Characters[Characters.length] = {
	char: "阿",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_zuoerpang, h_ding, s_kou]
}
Characters[Characters.length] = {
	char: "陈",
	first: pattern_lr_left_1_right_1,
	later: [z_zuoerpang, h_dong]
}
Characters[Characters.length] = {
	char: "阻",
	first: pattern_lr_left_1_right_1,
	later: [z_zuoerpang, s_qie]
}
Characters[Characters.length] = {
	char: "附",
	first: pattern_lr_left_1_right_heng_2,
	later: [z_zuoerpang, p_danrenpang, h_cun]
}
Characters[Characters.length] = {
	char: "妙",
	first: pattern_lr_left_1_right_1,
	later: [z_nv, s_shao]
}
Characters[Characters.length] = {
	char: "妖",
	first: pattern_lr_left_1_right_1,
	later: [z_nv, p_yao]
}
Characters[Characters.length] = {
	char: "妨",
	first: pattern_lr_left_1_right_1,
	later: [z_nv, d_fang]
}
Characters[Characters.length] = {
	char: "努",
	first: pattern_ud_up_heng_2_down_1,
	later: [z_nv, z_you, z_li]
}
Characters[Characters.length] = {
	char: "忍",
	first: pattern_ud_up_1_down_1,
	later: [z_ren, d_xin]
}
Characters[Characters.length] = {
	char: "劲",
	first: pattern_lr_left_shu_2_right_1,
	later: [z_jingzitou, h_gong, z_li]
}
Characters[Characters.length] = {
	char: "鸡",
	first: pattern_lr_left_1_right_1,
	later: [z_you, p_niao]
}
Characters[Characters.length] = {
	char: "驱",
	first: pattern_lr_left_1_right_wei_2,
	later: [z_ma, h_jiangzikuang, p_chadian]
}
Characters[Characters.length] = {
	char: "纯",
	first: pattern_lr_left_1_right_1,
	later: [z_jiaosipang, h_tun]
}
Characters[Characters.length] = {
	char: "纱",
	first: pattern_lr_left_1_right_1,
	later: [z_jiaosipang, s_shao]
}
Characters[Characters.length] = {
	char: "纳",
	first: pattern_lr_left_1_right_1,
	later: [z_jiaosipang, s_nei]
}
Characters[Characters.length] = {
	char: "纲",
	first: pattern_lr_left_1_right_wei_2,
	later: [z_jiaosipang, s_tongzikuang, p_chadian]
}
Characters[Characters.length] = {
	char: "驳",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_ma, p_chadian, p_chana]
}
Characters[Characters.length] = {
	char: "纵",
	first: pattern_lr_left_1_right_heng_2,
	later: [z_jiaosipang, p_ren, p_ren]
}
Characters[Characters.length] = {
	char: "纷",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_jiaosipang, p_eight, z_dao]
}
Characters[Characters.length] = {
	char: "纸",
	first: pattern_lr_left_1_right_1,
	later: [z_jiaosipang, p_shizu]
}
Characters[Characters.length] = {
	char: "纹",
	first: pattern_lr_left_1_right_1,
	later: [z_jiaosipang, d_wen]
}
Characters[Characters.length] = {
	char: "纺",
	first: pattern_lr_left_1_right_1,
	later: [z_jiaosipang, d_fang]
}
Characters[Characters.length] = {
	char: "驴",
	first: pattern_lr_left_1_right_1,
	later: [z_ma, d_hu]
}
Characters[Characters.length] = {
	char: "纽",
	first: pattern_lr_left_1_right_1,
	later: [z_jiaosipang, z_chou]
}

/* 八画 */
Characters[Characters.length] = {
	char: "奉",
	first: pattern_ud_up_1_down_1,
	later: [h_fengzitou, h_fengzidi]
}
Characters[Characters.length] = {
	char: "玩",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_wang, h_two, p_er]
}
Characters[Characters.length] = {
	char: "环",
	first: pattern_lr_left_1_right_1,
	later: [h_wang, h_bu]
}
Characters[Characters.length] = {
	char: "武",
	first: pattern_round_right_up,
	later: [h_wuzikuang, s_zhi]
}
Characters[Characters.length] = {
	char: "青",
	first: pattern_ud_up_1_down_1,
	later: [h_qingzitou, p_yue]
}
Characters[Characters.length] = {
	char: "责",
	first: pattern_ud_up_1_down_1,
	later: [h_qingzitou, s_bei]
}
Characters[Characters.length] = {
	char: "现",
	first: pattern_lr_left_1_right_1,
	later: [h_wang, s_jian]
}
Characters[Characters.length] = {
	char: "表",
	first: pattern_ud_up_1_down_1,
	later: [h_qingzitou, p_yizidi]
}
Characters[Characters.length] = {
	char: "规",
	first: pattern_lr_left_1_right_1,
	later: [h_fu, s_jian]
}
Characters[Characters.length] = {
	char: "抹",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, h_mo]
}
Characters[Characters.length] = {
	char: "拢",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, h_long]
}
Characters[Characters.length] = {
	char: "拔",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_tishoupang, h_hengpiedian]
}
Characters[Characters.length] = {
	char: "拣",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, h_jianziyou]
}
Characters[Characters.length] = {
	char: "担",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, s_ri, heng]
}
Characters[Characters.length] = {
	char: "坦",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tu, s_ri, heng]
}
Characters[Characters.length] = {
	char: "押",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, s_jia]
}
Characters[Characters.length] = {
	char: "抽",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, s_you]
}
Characters[Characters.length] = {
	char: "拐",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, s_kou, z_li]
}
Characters[Characters.length] = {
	char: "拖",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, p_pieheng, z_ye]
}
Characters[Characters.length] = {
	char: "拍",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, p_bai]
}
Characters[Characters.length] = {
	char: "者",
	first: pattern_round_left_up,
	later: [h_laozitou, s_ri]
}
Characters[Characters.length] = {
	char: "顶",
	first: pattern_lr_left_1_right_1,
	later: [h_ding, h_ye]
}
Characters[Characters.length] = {
	char: "拆",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, p_chi]
}
Characters[Characters.length] = {
	char: "拥",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, p_yong]
}
Characters[Characters.length] = {
	char: "抵",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, p_di]
}
Characters[Characters.length] = {
	char: "拘",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_tishoupang, p_baozitou, s_kou]
}
Characters[Characters.length] = {
	char: "势",
	first: pattern_ud_up_heng_2_down_1,
	later: [h_tishoupang, p_nawan, z_li]
}
Characters[Characters.length] = {
	char: "抱",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_tishoupang, p_baozitou, z_si]
}
Characters[Characters.length] = {
	char: "垃",
	first: pattern_lr_left_1_right_1,
	later: [h_tu, d_li]
}
Characters[Characters.length] = {
	char: "拉",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, d_li]
}
Characters[Characters.length] = {
	char: "拦",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, d_lanzitou, h_three]
}
Characters[Characters.length] = {
	char: "拌",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, d_ban]
}
Characters[Characters.length] = {
	char: "幸",
	first: pattern_ud_up_middle_down,
	later: [h_tu, d_lanzitou, h_gan]
}
Characters[Characters.length] = {
	char: "招",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, z_dao, s_kou]
}
Characters[Characters.length] = {
	char: "坡",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_tu, p_pizipang, z_you]
}
Characters[Characters.length] = {
	char: "披",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_tishoupang, p_pizipang, z_you]
}
Characters[Characters.length] = {
	char: "拨",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_tishoupang, z_fazipang, z_you]
}
Characters[Characters.length] = {
	char: "择",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, z_you, h_fengzidi]
}
Characters[Characters.length] = {
	char: "抬",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, z_sigong, s_kou]
}
Characters[Characters.length] = {
	char: "其",
	first: pattern_ud_up_1_down_1,
	later: [h_qizitou, p_eightdian]
}
Characters[Characters.length] = {
	char: "取",
	first: pattern_lr_left_1_right_1,
	later: [h_erduo, z_you]
}
Characters[Characters.length] = {
	char: "苦",
	first: pattern_ud_up_1_down_shu_2,
	later: [h_caozitou, h_ten, s_kou]
}
Characters[Characters.length] = {
	char: "若",
	first: pattern_ud_up_1_down_wei_2,
	later: [h_caozitou, h_hengpie, s_kou]
}
Characters[Characters.length] = {
	char: "茂",
	first: pattern_ud_up_1_down_1,
	later: [h_caozitou, h_wuxu]
}
Characters[Characters.length] = {
	char: "苹",
	first: pattern_ud_up_1_down_1,
	later: [h_caozitou, h_ping]
}
Characters[Characters.length] = {
	char: "苗",
	first: pattern_ud_up_1_down_1,
	later: [h_caozitou, s_tian]
}
Characters[Characters.length] = {
	char: "英",
	first: pattern_ud_up_1_down_1,
	later: [h_caozitou, s_yang]
}
Characters[Characters.length] = {
	char: "范",
	first: pattern_ud_up_1_down_heng_2,
	later: [h_caozitou, d_sandianshui, z_cangzidi]
}
Characters[Characters.length] = {
	char: "直",
	first: pattern_ud_up_1_down_1,
	later: [h_ten, s_juzitou]
}
Characters[Characters.length] = {
	char: "茄",
	first: pattern_ud_up_1_down_heng_2,
	later: [h_caozitou, z_li, s_kou]
}
Characters[Characters.length] = {
	char: "茎",
	first: pattern_ud_up_1_down_shu_2,
	later: [h_caozitou, z_jingzitou, h_gong]
}
Characters[Characters.length] = {
	char: "茅",
	first: pattern_ud_up_1_down_1,
	later: [h_caozitou, z_mao]
}
Characters[Characters.length] = {
	char: "林",
	first: pattern_lr_left_1_right_1,
	later: [h_mu, h_mu]
}
Characters[Characters.length] = {
	char: "枝",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, h_ten, z_you]
}
Characters[Characters.length] = {
	char: "杯",
	first: pattern_lr_left_1_right_1,
	later: [h_mu, h_bu]
}
Characters[Characters.length] = {
	char: "柜",
	first: pattern_lr_left_1_right_1,
	later: [h_mu, h_ju]
}
Characters[Characters.length] = {
	char: "析",
	first: pattern_lr_left_1_right_1,
	later: [h_mu, p_jin]
}
Characters[Characters.length] = {
	char: "板",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_mu, p_fanzipang, z_you]
}
Characters[Characters.length] = {
	char: "松",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, p_eight, z_sigong]
}
Characters[Characters.length] = {
	char: "枪",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, p_ren, z_cangzidi]
}
Characters[Characters.length] = {
	char: "构",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_mu, p_baozitou, z_sigong]
}
Characters[Characters.length] = {
	char: "杰",
	first: pattern_ud_up_1_down_1,
	later: [h_mu, d_sidiandi]
}
Characters[Characters.length] = {
	char: "述",
	first: pattern_round_left_down,
	later: [h_shudao, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "枕",
	first: pattern_lr_left_1_right_1,
	later: [h_mu, d_shenziyou]
}
Characters[Characters.length] = {
	char: "丧",
	first: pattern_ud_up_1_down_1,
	later: [h_qiangzitou, z_sangzidi]
}
Characters[Characters.length] = {
	char: "或",
	first: pattern_round_right_up,
	later: [h_ge, s_kou, ti]
}
Characters[Characters.length] = {
	char: "画",
	first: pattern_ud_up_1_down_wei_2,
	later: [heng, s_tian, z_xiongzikuang]
}
Characters[Characters.length] = {
	char: "卧",
	first: pattern_lr_left_1_right_1,
	later: [h_chen, s_bu]
}
Characters[Characters.length] = {
	char: "事",
	first: pattern_single,
	later: [h_shiqing]
}
Characters[Characters.length] = {
	char: "刺",
	first: pattern_lr_left_1_right_1,
	later: [h_cizizuo, s_lidaopang]
}
Characters[Characters.length] = {
	char: "枣",
	first: pattern_ud_up_1_down_1,
	later: [h_cizizuo, d_ldsl]
}
Characters[Characters.length] = {
	char: "雨",
	first: pattern_single,
	later: [h_yushui]
}
Characters[Characters.length] = {
	char: "卖",
	first: pattern_ud_up_1_down_shu_2,
	later: [h_shi, henggou, d_tou]
}
Characters[Characters.length] = {
	char: "矿",
	first: pattern_lr_left_1_right_1,
	later: [h_stone, d_guang]
}
Characters[Characters.length] = {
	char: "码",
	first: pattern_lr_left_1_right_1,
	later: [h_stone, z_ma]
}
Characters[Characters.length] = {
	char: "厕",
	first: pattern_round_left_up,
	later: [h_chang, s_bei, s_lidaopang]
}
Characters[Characters.length] = {
	char: "奔",
	first: pattern_ud_up_1_down_shu_2,
	later: [h_da, h_ten, h_piecao]
}
Characters[Characters.length] = {
	char: "奇",
	first: pattern_ud_up_1_down_wei_2,
	later: [h_da, h_ding, s_kou]
}
Characters[Characters.length] = {
	char: "奋",
	first: pattern_ud_up_1_down_1,
	later: [h_da, s_tian]
}
Characters[Characters.length] = {
	char: "态",
	first: pattern_ud_up_1_down_1,
	later: [h_tai, d_xin]
}
Characters[Characters.length] = {
	char: "欧",
	first: pattern_lr_left_wei_2_right_shu_2,
	later: [h_jiangzikuang, p_chadian, p_qianzitou, p_ren]
}
Characters[Characters.length] = {
	char: "垄",
	first: pattern_ud_up_1_down_1,
	later: [h_long, h_tu]
}
Characters[Characters.length] = {
	char: "妻",
	first: pattern_ud_up_1_down_1,
	later: [h_shixue, z_nv]
}
Characters[Characters.length] = {
	char: "轰",
	first: pattern_ud_up_1_down_heng_2,
	later: [h_che, z_you, z_you]
}
Characters[Characters.length] = {
	char: "顷",
	first: pattern_lr_left_1_right_1,
	later: [h_bizizuo, h_ye]
}
Characters[Characters.length] = {
	char: "转",
	first: pattern_lr_left_1_right_1,
	later: [h_che, h_zhuan]
}
Characters[Characters.length] = {
	char: "斩",
	first: pattern_lr_left_1_right_1,
	later: [h_che, p_jin]
}
Characters[Characters.length] = {
	char: "轮",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_che, p_ren, p_bi]
}
Characters[Characters.length] = {
	char: "软",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_che, p_qianzitou, p_ren]
}
Characters[Characters.length] = {
	char: "到",
	first: pattern_lr_left_shu_2_right_1,
	later: [h_zhizitou, h_tu, s_lidaopang]
}
Characters[Characters.length] = {
	char: "非",
	first: pattern_lr_left_1_right_1,
	later: [s_feizizuo, s_feiziyou]
}
Characters[Characters.length] = {
	char: "叔",
	first: pattern_lr_left_shu_2_right_1,
	later: [s_shang, z_xiao, z_you]
}
Characters[Characters.length] = {
	char: "肯",
	first: pattern_ud_up_1_down_1,
	later: [s_zhi, p_yue]
}
Characters[Characters.length] = {
	char: "齿",
	first: pattern_ud_up_1_down_wei_2,
	later: [s_zhi, p_ren, z_xiongzikuang]
}
Characters[Characters.length] = {
	char: "些",
	first: pattern_ud_up_heng_2_down_1,
	later: [s_zhi, p_bi, h_two]
}
Characters[Characters.length] = {
	char: "虎",
	first: pattern_round_left_up,
	later: [s_huzipang, h_seven, p_ji]
}
Characters[Characters.length] = {
	char: "虏",
	first: pattern_round_left_up,
	later: [s_huzipang, h_seven, z_li]
}
Characters[Characters.length] = {
	char: "肾",
	first: pattern_ud_up_heng_2_down_1,
	later: [s_liangshu, z_you, p_yue]
}
Characters[Characters.length] = {
	char: "贤",
	first: pattern_ud_up_heng_2_down_1,
	later: [s_liangshu, z_you, s_bei]
}
Characters[Characters.length] = {
	char: "尚",
	first: pattern_ud_up_1_down_wei_2,
	later: [s_guangzitou, s_tongzikuang, s_kou]
}
Characters[Characters.length] = {
	char: "旺",
	first: pattern_lr_left_1_right_1,
	later: [s_ri, h_wang]
}
Characters[Characters.length] = {
	char: "具",
	first: pattern_ud_up_1_down_1,
	later: [s_juzitou, p_eightdian]
}
Characters[Characters.length] = {
	char: "果",
	first: pattern_single,
	later: [s_guo]
}
Characters[Characters.length] = {
	char: "味",
	first: pattern_lr_left_1_right_1,
	later: [s_kou, h_weilai]
}
Characters[Characters.length] = {
	char: "昆",
	first: pattern_ud_up_1_down_heng_2,
	later: [s_ri, h_bizizuo, p_bi]
}
Characters[Characters.length] = {
	char: "国",
	first: pattern_round_whole,
	later: [s_kou, h_yu]
}
Characters[Characters.length] = {
	char: "昌",
	first: pattern_ud_up_1_down_1,
	later: [s_ri, s_ri]
}
Characters[Characters.length] = {
	char: "畅",
	first: pattern_lr_left_1_right_1,
	later: [s_shen, z_yangziyou]
}
Characters[Characters.length] = {
	char: "明",
	first: pattern_lr_left_1_right_1,
	later: [s_ri, p_yue]
}
Characters[Characters.length] = {
	char: "易",
	first: pattern_ud_up_1_down_1,
	later: [s_ri, p_wuyao]
}
Characters[Characters.length] = {
	char: "昂",
	first: pattern_ud_up_1_down_heng_2,
	later: [s_ri, p_angzizuo, z_danerpang]
}
Characters[Characters.length] = {
	char: "典",
	first: pattern_ud_up_1_down_1,
	later: [s_dianzitou, p_eightdian]
}
Characters[Characters.length] = {
	char: "固",
	first: pattern_round_whole,
	later: [s_kou, h_ten, s_kou]
}
Characters[Characters.length] = {
	char: "忠",
	first: pattern_ud_up_1_down_1,
	later: [s_zhong, d_xin]
}
Characters[Characters.length] = {
	char: "咐",
	first: pattern_lr_left_1_right_heng_2,
	later: [s_kou, p_ren, h_cun]
}
Characters[Characters.length] = {
	char: "呼",
	first: pattern_lr_left_1_right_1,
	later: [s_kou, p_hu]
}
Characters[Characters.length] = {
	char: "鸣",
	first: pattern_lr_left_1_right_1,
	later: [s_kou, p_niao]
}
Characters[Characters.length] = {
	char: "咏",
	first: pattern_lr_left_1_right_1,
	later: [s_kou, d_yong]
}
Characters[Characters.length] = {
	char: "呢",
	first: pattern_lr_left_1_right_wei_2,
	later: [s_kou, z_shi, p_bi]
}
Characters[Characters.length] = {
	char: "岸",
	first: pattern_ud_up_1_down_wei_2,
	later: [s_shan, h_chang, h_gan]
}
Characters[Characters.length] = {
	char: "岩",
	first: pattern_ud_up_1_down_1,
	later: [s_shan, h_stone]
}
Characters[Characters.length] = {
	char: "帖",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_jin, s_shangzitou, s_kou]
}
Characters[Characters.length] = {
	char: "罗",
	first: pattern_ud_up_1_down_1,
	later: [s_siwuzhe, p_xi]
}
Characters[Characters.length] = {
	char: "帜",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_jin, s_kou, p_eightdian]
}
Characters[Characters.length] = {
	char: "岭",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_shan, p_ren, d_lingzidi]
}
Characters[Characters.length] = {
	char: "凯",
	first: pattern_lr_left_shu_2_right_1,
	later: [s_shan, z_ji, p_ji]
}
Characters[Characters.length] = {
	char: "败",
	first: pattern_lr_left_1_right_1,
	later: [s_bei, p_fanwenpang]
}
Characters[Characters.length] = {
	char: "贩",
	first: pattern_lr_left_1_right_wei_2,
	later: [s_bei, p_fanzipang, z_you]
}
Characters[Characters.length] = {
	char: "购",
	first: pattern_lr_left_1_right_wei_2,
	later: [s_bei, p_baozitou, z_sigong]
}
Characters[Characters.length] = {
	char: "图",
	first: pattern_round_whole,
	later: [s_kou, p_zhewen, d_ldsl]
}
Characters[Characters.length] = {
	char: "钓",
	first: pattern_lr_left_1_right_1,
	later: [p_jinzipang, p_shao]
}
Characters[Characters.length] = {
	char: "制",
	first: pattern_lr_left_1_right_1,
	later: [p_zhizizuo, s_lidaopang]
}
Characters[Characters.length] = {
	char: "知",
	first: pattern_lr_left_1_right_1,
	later: [p_shi, s_kou]
}
Characters[Characters.length] = {
	char: "垂",
	first: pattern_single,
	later: [p_chui]
}
Characters[Characters.length] = {
	char: "牧",
	first: pattern_lr_left_1_right_1,
	later: [p_niu, p_fanwenpang]
}
Characters[Characters.length] = {
	char: "物",
	first: pattern_lr_left_1_right_1,
	later: [p_niu, p_wuyao]
}
Characters[Characters.length] = {
	char: "乖",
	first: pattern_round_left_right,
	later: [p_thousand, s_beizizuo, p_bi]
}
Characters[Characters.length] = {
	char: "刮",
	first: pattern_lr_left_shu_2_right_1,
	later: [p_thousand, s_kou, s_lidaopang]
}
Characters[Characters.length] = {
	char: "秆",
	first: pattern_lr_left_1_right_1,
	later: [p_he, h_gan]
}
Characters[Characters.length] = {
	char: "和",
	first: pattern_lr_left_1_right_1,
	later: [p_he, s_kou]
}
Characters[Characters.length] = {
	char: "季",
	first: pattern_ud_up_1_down_1,
	later: [p_he, z_zi]
}
Characters[Characters.length] = {
	char: "委",
	first: pattern_ud_up_1_down_1,
	later: [p_he, z_nv]
}
Characters[Characters.length] = {
	char: "佳",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, h_tu, h_tu]
}
Characters[Characters.length] = {
	char: "侍",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, h_tu, h_cun]
}
Characters[Characters.length] = {
	char: "供",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, h_gongzitou, p_eightdian]
}
Characters[Characters.length] = {
	char: "使",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, h_li]
}
Characters[Characters.length] = {
	char: "例",
	first: pattern_lr_left_1_right_heng_2,
	later: [p_danrenpang, h_dai, s_lidaopang]
}
Characters[Characters.length] = {
	char: "版",
	first: pattern_lr_left_1_right_wei_2,
	later: [p_pian, p_fanzipang, z_you]
}
Characters[Characters.length] = {
	char: "侄",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, h_zhizitou, h_tu]
}
Characters[Characters.length] = {
	char: "侦",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, s_shangzitou, s_bei]
}
Characters[Characters.length] = {
	char: "侧",
	first: pattern_lr_left_1_right_heng_2,
	later: [p_danrenpang, s_bei, s_lidaopang]
}
Characters[Characters.length] = {
	char: "凭",
	first: pattern_ud_up_heng_2_down_1,
	later: [p_danrenpang, p_rengui, p_ji]
}
Characters[Characters.length] = {
	char: "侨",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, p_yao, p_dao]
}
Characters[Characters.length] = {
	char: "佩",
	first: pattern_lr_left_1_right_wei_2,
	later: [p_danrenpang, p_fengzitou, h_hengjin]
}
Characters[Characters.length] = {
	char: "货",
	first: pattern_ud_up_heng_2_down_1,
	later: [p_danrenpang, p_bi, s_bei]
}
Characters[Characters.length] = {
	char: "依",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, d_yifu]
}
Characters[Characters.length] = {
	char: "的",
	first: pattern_lr_left_1_right_1,
	later: [p_bai, p_shao]
}
Characters[Characters.length] = {
	char: "迫",
	first: pattern_round_left_down,
	later: [p_bai, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "质",
	first: pattern_round_left_up,
	later: [p_fanzipang, h_ten, s_bei]
}
Characters[Characters.length] = {
	char: "欣",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_jin, p_qianzitou, p_ren]
}
Characters[Characters.length] = {
	char: "征",
	first: pattern_lr_left_1_right_1,
	later: [p_shuangrenpang, h_zheng]
}
Characters[Characters.length] = {
	char: "往",
	first: pattern_lr_left_1_right_1,
	later: [p_shuangrenpang, d_zhu]
}
Characters[Characters.length] = {
	char: "爬",
	first: pattern_round_left_down,
	later: [p_zhao, z_ba]
}
Characters[Characters.length] = {
	char: "彼",
	first: pattern_lr_left_1_right_wei_2,
	later: [p_shuangrenpang, p_pizipang, z_you]
}
Characters[Characters.length] = {
	char: "径",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_shuangrenpang, z_jingzitou, h_gong]
}
Characters[Characters.length] = {
	char: "所",
	first: pattern_lr_left_1_right_1,
	later: [p_suozizuo, p_jin]
}
Characters[Characters.length] = {
	char: "舍",
	first: pattern_ud_up_1_down_shu_2,
	later: [p_ren, h_gan, s_kou]
}
Characters[Characters.length] = {
	char: "金",
	first: pattern_ud_up_1_down_1,
	later: [p_ren, h_jinxia]
}
Characters[Characters.length] = {
	char: "命",
	first: pattern_ud_up_1_down_shu_2,
	later: [p_ren, heng, s_kou, z_danerpang]
}
Characters[Characters.length] = {
	char: "斧",
	first: pattern_ud_up_1_down_1,
	later: [p_fu, p_jin]
}
Characters[Characters.length] = {
	char: "爸",
	first: pattern_ud_up_1_down_1,
	later: [p_fu, z_ba]
}
Characters[Characters.length] = {
	char: "采",
	first: pattern_ud_up_1_down_1,
	later: [p_caizitou, h_mu]
}
Characters[Characters.length] = {
	char: "受",
	first: pattern_ud_up_middle_down,
	later: [p_caizitou, d_tubaogai, z_you]
}
Characters[Characters.length] = {
	char: "乳",
	first: pattern_lr_left_shu_2_right_1,
	later: [p_caizitou, z_zi, shuwanhenggou]
}
Characters[Characters.length] = {
	char: "贪",
	first: pattern_ud_up_shu_2_down_1,
	later: [p_ren, d_jinzidi, s_bei]
}
Characters[Characters.length] = {
	char: "念",
	first: pattern_ud_up_shu_2_down_1,
	later: [p_ren, d_jinzidi, d_xin]
}
Characters[Characters.length] = {
	char: "贫",
	first: pattern_ud_up_shu_2_down_1,
	later: [p_eight, z_dao, s_bei]
}
Characters[Characters.length] = {
	char: "肤",
	first: pattern_lr_left_1_right_1,
	later: [p_yue, h_fu]
}
Characters[Characters.length] = {
	char: "肺",
	first: pattern_lr_left_1_right_1,
	later: [p_yue, h_shushi]
}
Characters[Characters.length] = {
	char: "肢",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_yue, h_ten, z_you]
}
Characters[Characters.length] = {
	char: "肿",
	first: pattern_lr_left_1_right_1,
	later: [p_yue, s_zhong]
}
Characters[Characters.length] = {
	char: "胀",
	first: pattern_lr_left_1_right_1,
	later: [p_yue, p_chang]
}
Characters[Characters.length] = {
	char: "朋",
	first: pattern_lr_left_1_right_1,
	later: [p_yue, p_yue]
}
Characters[Characters.length] = {
	char: "股",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_yue, p_ji, z_you]
}
Characters[Characters.length] = {
	char: "肥",
	first: pattern_lr_left_1_right_1,
	later: [p_yue, z_ba]
}
Characters[Characters.length] = {
	char: "服",
	first: pattern_lr_left_1_right_wei_2,
	later: [p_yue, z_danerpang, z_you]
}
Characters[Characters.length] = {
	char: "胁",
	first: pattern_lr_left_1_right_1,
	later: [p_yue, z_ban]
}
Characters[Characters.length] = {
	char: "周",
	first: pattern_round_up,
	later: [p_zhouzikuang, h_tu, s_kou]
}
Characters[Characters.length] = {
	char: "昏",
	first: pattern_ud_up_1_down_1,
	later: [p_shizu, s_ri]
}
Characters[Characters.length] = {
	char: "鱼",
	first: pattern_ud_up_middle_down,
	later: [p_weizitou, s_tian, heng]
}
Characters[Characters.length] = {
	char: "兔",
	first: pattern_ud_up_1_down_1,
	later: [p_weizitou, s_tuzishen]
}
Characters[Characters.length] = {
	char: "狐",
	first: pattern_lr_left_1_right_1,
	later: [p_fanquanpang, p_gua]
}
Characters[Characters.length] = {
	char: "忽",
	first: pattern_ud_up_1_down_1,
	later: [p_wuyao, d_xin]
}
Characters[Characters.length] = {
	char: "狗",
	first: pattern_lr_left_1_right_wei_2,
	later: [p_fanquanpang, p_baozitou, s_kou]
}
Characters[Characters.length] = {
	char: "备",
	first: pattern_ud_up_1_down_1,
	later: [p_zhewen, s_tian]
}
Characters[Characters.length] = {
	char: "饰",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_shichi, p_pieheng, s_jin]
}
Characters[Characters.length] = {
	char: "饱",
	first: pattern_lr_left_1_right_wei_2,
	later: [p_shichi, p_baozitou, z_si]
}
Characters[Characters.length] = {
	char: "饲",
	first: pattern_lr_left_1_right_wei_2,
	later: [p_shichi, hengzheshugou, heng, s_kou]
}
Characters[Characters.length] = {
	char: "变",
	first: pattern_ud_up_1_down_1,
	later: [d_bianzitou, z_you]
}
Characters[Characters.length] = {
	char: "京",
	first: pattern_ud_up_middle_down,
	later: [d_liuzitou, s_kou, z_xiao]
}
Characters[Characters.length] = {
	char: "享",
	first: pattern_ud_up_middle_down,
	later: [d_liuzitou, s_kou, z_zi]
}
Characters[Characters.length] = {
	char: "店",
	first: pattern_round_left_up,
	later: [d_guang, s_shangzitou, s_kou]
}
Characters[Characters.length] = {
	char: "夜",
	first: pattern_ud_up_1_down_heng_2,
	later: [d_liuzitou, p_danrenpang, p_yedian]
}
Characters[Characters.length] = {
	char: "庙",
	first: pattern_round_left_up,
	later: [d_guang, s_you]
}
Characters[Characters.length] = {
	char: "府",
	first: pattern_round_left_up,
	later: [d_guang, p_danrenpang, h_cun]
}
Characters[Characters.length] = {
	char: "底",
	first: pattern_round_left_up,
	later: [d_guang, p_di]
}
Characters[Characters.length] = {
	char: "剂",
	first: pattern_lr_left_shu_2_right_1,
	later: [d_wen, p_dao, s_lidaopang]
}
Characters[Characters.length] = {
	char: "郊",
	first: pattern_lr_left_1_right_1,
	later: [d_jiao, z_youerpang]
}
Characters[Characters.length] = {
	char: "废",
	first: pattern_round_left_up,
	later: [d_guang, z_fazipang, z_you]
}
Characters[Characters.length] = {
	char: "净",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_liangdianshui, p_weizitou, z_zhengzidi]
}
Characters[Characters.length] = {
	char: "盲",
	first: pattern_ud_up_1_down_1,
	later: [d_wang, s_mu]
}
Characters[Characters.length] = {
	char: "放",
	first: pattern_lr_left_1_right_1,
	later: [d_fang, p_fanwenpang]
}
Characters[Characters.length] = {
	char: "刻",
	first: pattern_lr_left_shu_2_right_1,
	later: [d_haizitou, p_ren, s_lidaopang]
}
Characters[Characters.length] = {
	char: "育",
	first: pattern_ud_up_1_down_1,
	later: [d_chongzitou, p_yue]
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
	first: pattern_lr_left_shu_2_right_1,
	later: [d_lanzitou, h_tian, z_youerpang]
}
Characters[Characters.length] = {
	char: "券",
	first: pattern_ud_up_1_down_1,
	later: [d_juanzitou, z_dao]
}
Characters[Characters.length] = {
	char: "卷",
	first: pattern_ud_up_1_down_1,
	later: [d_juanzitou, z_cangzidi]
}
Characters[Characters.length] = {
	char: "单",
	first: pattern_ud_up_1_down_1,
	later: [d_lanzitou, s_danzidi]
}
Characters[Characters.length] = {
	char: "炒",
	first: pattern_lr_left_1_right_1,
	later: [d_huo, s_shao]
}
Characters[Characters.length] = {
	char: "炊",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_huo, p_qianzitou, p_ren]
}
Characters[Characters.length] = {
	char: "炕",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_huo, d_liuzitou, p_ji]
}
Characters[Characters.length] = {
	char: "炎",
	first: pattern_ud_up_1_down_1,
	later: [d_huo, d_huo]
}
Characters[Characters.length] = {
	char: "炉",
	first: pattern_lr_left_1_right_1,
	later: [d_huo, d_hu]
}
Characters[Characters.length] = {
	char: "沫",
	first: pattern_lr_left_1_right_1,
	later: [d_sandianshui, h_mo]
}
Characters[Characters.length] = {
	char: "浅",
	first: pattern_lr_left_1_right_1,
	later: [d_sandianshui, h_zhan]
}
Characters[Characters.length] = {
	char: "法",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, h_tu, z_sigong]
}
Characters[Characters.length] = {
	char: "泄",
	first: pattern_lr_left_1_right_1,
	later: [d_sandianshui, h_shijie]
}
Characters[Characters.length] = {
	char: "河",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_sandianshui, h_ding, s_kou]
}
Characters[Characters.length] = {
	char: "沾",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, s_shangzitou, s_kou]
}
Characters[Characters.length] = {
	char: "泪",
	first: pattern_lr_left_1_right_1,
	later: [d_sandianshui, s_mu]
}
Characters[Characters.length] = {
	char: "油",
	first: pattern_lr_left_1_right_1,
	later: [d_sandianshui, s_you]
}
Characters[Characters.length] = {
	char: "泊",
	first: pattern_lr_left_1_right_1,
	later: [d_sandianshui, p_bai]
}
Characters[Characters.length] = {
	char: "沿",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, p_ji, s_kou]
}
Characters[Characters.length] = {
	char: "泡",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_sandianshui, p_baozitou, z_si]
}
Characters[Characters.length] = {
	char: "注",
	first: pattern_lr_left_1_right_1,
	later: [d_sandianshui, d_zhu]
}
Characters[Characters.length] = {
	char: "泻",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, d_tubaogai, h_yuni]
}
Characters[Characters.length] = {
	char: "泳",
	first: pattern_lr_left_1_right_1,
	later: [d_sandianshui, d_yong]
}
Characters[Characters.length] = {
	char: "泥",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_sandianshui, z_shi, p_bi]
}
Characters[Characters.length] = {
	char: "沸",
	first: pattern_lr_left_1_right_1,
	later: [d_sandianshui, z_fu]
}
Characters[Characters.length] = {
	char: "波",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_sandianshui, p_pizipang, z_you]
}
Characters[Characters.length] = {
	char: "泼",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_sandianshui, z_fazipang, z_you]
}
Characters[Characters.length] = {
	char: "泽",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, z_you, h_fengzidi]
}
Characters[Characters.length] = {
	char: "治",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, z_sigong, s_kou]
}
Characters[Characters.length] = {
	char: "怖",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_shuxinpang, h_hengpie, s_jin]
}
Characters[Characters.length] = {
	char: "性",
	first: pattern_lr_left_1_right_1,
	later: [d_shuxinpang, p_sheng]
}
Characters[Characters.length] = {
	char: "怕",
	first: pattern_lr_left_1_right_1,
	later: [d_shuxinpang, p_bai]
}
Characters[Characters.length] = {
	char: "怜",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_shuxinpang, p_ren, d_lingzidi]
}
Characters[Characters.length] = {
	char: "怪",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_shuxinpang, z_you, h_tu]
}
Characters[Characters.length] = {
	char: "学",
	first: pattern_ud_up_middle_down,
	later: [d_xingzitou, d_tubaogai, z_zi]
}
Characters[Characters.length] = {
	char: "宝",
	first: pattern_ud_up_1_down_1,
	later: [d_baogaitou, h_yu]
}
Characters[Characters.length] = {
	char: "宗",
	first: pattern_ud_up_1_down_shu_2,
	later: [d_baogaitou, h_two, z_xiao]
}
Characters[Characters.length] = {
	char: "定",
	first: pattern_ud_up_1_down_1,
	later: [d_baogaitou, h_shizidi]
}
Characters[Characters.length] = {
	char: "宜",
	first: pattern_ud_up_1_down_1,
	later: [d_baogaitou, s_qie]
}
Characters[Characters.length] = {
	char: "审",
	first: pattern_ud_up_1_down_1,
	later: [d_baogaitou, s_shen]
}
Characters[Characters.length] = {
	char: "宙",
	first: pattern_ud_up_1_down_1,
	later: [d_baogaitou, s_you]
}
Characters[Characters.length] = {
	char: "官",
	first: pattern_ud_up_1_down_1,
	later: [d_baogaitou, s_guanzidi]
}
Characters[Characters.length] = {
	char: "空",
	first: pattern_ud_up_1_down_1,
	later: [d_xuezitou, h_gong]
}
Characters[Characters.length] = {
	char: "帘",
	first: pattern_ud_up_1_down_1,
	later: [d_xuezitou, s_jin]
}
Characters[Characters.length] = {
	char: "实",
	first: pattern_ud_up_1_down_1,
	later: [d_baogaitou, d_tou]
}
Characters[Characters.length] = {
	char: "试",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_yanzipang, h_shizikuang, h_gong]
}
Characters[Characters.length] = {
	char: "郎",
	first: pattern_lr_left_1_right_1,
	later: [d_langzizuo, z_youerpang]
}
Characters[Characters.length] = {
	char: "诗",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_yanzipang, h_tu, h_cun]
}
Characters[Characters.length] = {
	char: "肩",
	first: pattern_round_left_up,
	later: [d_hu, p_yue]
}
Characters[Characters.length] = {
	char: "房",
	first: pattern_round_left_up,
	later: [d_hu, d_fang]
}
Characters[Characters.length] = {
	char: "诚",
	first: pattern_lr_left_1_right_1,
	later: [d_yanzipang, h_cheng]
}
Characters[Characters.length] = {
	char: "衬",
	first: pattern_lr_left_1_right_1,
	later: [d_buyipang, h_cun]
}
Characters[Characters.length] = {
	char: "衫",
	first: pattern_lr_left_1_right_1,
	later: [d_buyipang, p_sanpie]
}
Characters[Characters.length] = {
	char: "视",
	first: pattern_lr_left_1_right_1,
	later: [d_shizipang, s_jian]
}
Characters[Characters.length] = {
	char: "话",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_yanzipang, p_thousand, s_kou]
}
Characters[Characters.length] = {
	char: "诞",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_yanzipang, p_yanzili, z_jianzidi]
}
Characters[Characters.length] = {
	char: "询",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_yanzipang, p_baozitou, s_ri]
}
Characters[Characters.length] = {
	char: "该",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_yanzipang, d_haizitou, p_ren]
}
Characters[Characters.length] = {
	char: "详",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_yanzipang, d_lanzitou, h_yangzishen]
}
Characters[Characters.length] = {
	char: "建",
	first: pattern_round_left_down,
	later: [z_yuming, z_jianzidi]
}
Characters[Characters.length] = {
	char: "肃",
	first: pattern_single,
	later: [z_su]
}
Characters[Characters.length] = {
	char: "录",
	first: pattern_ud_up_1_down_1,
	later: [z_luzitou, z_dianshui]
}
Characters[Characters.length] = {
	char: "隶",
	first: pattern_single,
	later: [z_lishu]
}
Characters[Characters.length] = {
	char: "居",
	first: pattern_round_left_up,
	later: [z_shi, h_ten, s_kou]
}
Characters[Characters.length] = {
	char: "届",
	first: pattern_round_left_up,
	later: [z_shi, s_you]
}
Characters[Characters.length] = {
	char: "刷",
	first: pattern_lr_left_wei_2_right_1,
	later: [z_shi, s_jin, s_lidaopang]
}
Characters[Characters.length] = {
	char: "屈",
	first: pattern_round_left_up,
	later: [z_shi, z_chu]
}
Characters[Characters.length] = {
	char: "弦",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_gong, d_liuzitou, z_youzipang]
}
Characters[Characters.length] = {
	char: "承",
	first: pattern_single,
	later: [z_chengdan]
}
Characters[Characters.length] = {
	char: "孟",
	first: pattern_ud_up_1_down_1,
	later: [z_zi, s_minzidi]
}
Characters[Characters.length] = {
	char: "孤",
	first: pattern_lr_left_1_right_1,
	later: [z_zi, p_gua]
}
Characters[Characters.length] = {
	char: "陕",
	first: pattern_lr_left_1_right_1,
	later: [z_zuoerpang, h_jia]
}
Characters[Characters.length] = {
	char: "降",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_zuoerpang, p_zhewen, h_jiangyouxia]
}
Characters[Characters.length] = {
	char: "限",
	first: pattern_lr_left_1_right_1,
	later: [z_zuoerpang, z_henziyou]
}
Characters[Characters.length] = {
	char: "妹",
	first: pattern_lr_left_1_right_1,
	later: [z_nv, h_weilai]
}
Characters[Characters.length] = {
	char: "姑",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_nv, h_ten, s_kou]
}
Characters[Characters.length] = {
	char: "姐",
	first: pattern_lr_left_1_right_1,
	later: [z_nv, s_qie]
}
Characters[Characters.length] = {
	char: "姓",
	first: pattern_lr_left_1_right_1,
	later: [z_nv, p_sheng]
}
Characters[Characters.length] = {
	char: "始",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_nv, z_sigong, s_kou]
}
Characters[Characters.length] = {
	char: "驾",
	first: pattern_ud_up_heng_2_down_1,
	later: [z_li, s_kou, z_ma]
}
Characters[Characters.length] = {
	char: "参",
	first: pattern_ud_up_middle_down,
	later: [z_sigong, h_da, p_sanpie]
}
Characters[Characters.length] = {
	char: "艰",
	first: pattern_lr_left_1_right_1,
	later: [z_you, z_henziyou]
}
Characters[Characters.length] = {
	char: "线",
	first: pattern_lr_left_1_right_1,
	later: [z_jiaosipang, h_zhan]
}
Characters[Characters.length] = {
	char: "练",
	first: pattern_lr_left_1_right_1,
	later: [z_jiaosipang, h_jianziyou]
}
Characters[Characters.length] = {
	char: "组",
	first: pattern_lr_left_1_right_1,
	later: [z_jiaosipang, s_qie]
}
Characters[Characters.length] = {
	char: "细",
	first: pattern_lr_left_1_right_1,
	later: [z_jiaosipang, s_tian]
}
Characters[Characters.length] = {
	char: "驶",
	first: pattern_lr_left_1_right_1,
	later: [z_ma, s_shi]
}
Characters[Characters.length] = {
	char: "织",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_jiaosipang, s_kou, p_eightdian]
}
Characters[Characters.length] = {
	char: "终",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_jiaosipang, p_zhewen, d_ldsl]
}
Characters[Characters.length] = {
	char: "驻",
	first: pattern_lr_left_1_right_1,
	later: [z_ma, d_zhu]
}
Characters[Characters.length] = {
	char: "驼",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_ma, d_baogaitou, p_bi]
}
Characters[Characters.length] = {
	char: "绍",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_jiaosipang, z_dao, s_kou]
}
Characters[Characters.length] = {
	char: "经",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_jiaosipang, z_jingzitou, h_gong]
}
Characters[Characters.length] = {
	char: "贯",
	first: pattern_ud_up_1_down_1,
	later: [s_guanzitou, s_bei]
}

/* 九画 */
Characters[Characters.length] = {
	char: "奏",
	first: pattern_ud_up_1_down_1,
	later: [h_fengzitou, h_tian]
}
Characters[Characters.length] = {
	char: "春",
	first: pattern_ud_up_1_down_1,
	later: [h_fengzitou, s_ri]
}
Characters[Characters.length] = {
	char: "帮",
	first: pattern_ud_up_heng_2_down_1,
	later: [h_piefeng, z_youerpang, s_jin]
}
Characters[Characters.length] = {
	char: "珍",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_wang, p_ren, p_sanpie]
}
Characters[Characters.length] = {
	char: "玻",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_wang, p_pizipang, z_you]
}
Characters[Characters.length] = {
	char: "毒",
	first: pattern_ud_up_1_down_1,
	later: [h_qingzitou, z_mu]
}
Characters[Characters.length] = {
	char: "型",
	first: pattern_ud_up_heng_2_down_1,
	later: [h_kai, s_lidaopang, h_tu]
}
Characters[Characters.length] = {
	char: "挂",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, h_tu, h_tu]
}
Characters[Characters.length] = {
	char: "封",
	first: pattern_lr_left_shu_2_right_1,
	later: [h_tu, h_tu, h_cun]
}
Characters[Characters.length] = {
	char: "持",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, h_tu, h_cun]
}
Characters[Characters.length] = {
	char: "项",
	first: pattern_lr_left_1_right_1,
	later: [h_gong, h_ye]
}
Characters[Characters.length] = {
	char: "垮",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tu, h_da, h_kui]
}
Characters[Characters.length] = {
	char: "挎",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, h_da, h_kui]
}
Characters[Characters.length] = {
	char: "城",
	first: pattern_lr_left_1_right_1,
	later: [h_tu, h_cheng]
}
Characters[Characters.length] = {
	char: "挠",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, h_gewudian, h_wuzidi]
}
Characters[Characters.length] = {
	char: "政",
	first: pattern_lr_left_1_right_1,
	later: [h_zheng, p_fanwenpang]
}
Characters[Characters.length] = {
	char: "赴",
	first: pattern_round_left_down,
	later: [h_tu, s_zouzidi, s_bu]
}
Characters[Characters.length] = {
	char: "赵",
	first: pattern_round_left_down,
	later: [h_tu, s_zouzidi, p_chadian]
}
Characters[Characters.length] = {
	char: "挡",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, s_guangzitou, z_xunzitou]
}
Characters[Characters.length] = {
	char: "挺",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_tishoupang, p_rengui, z_jianzidi]
}
Characters[Characters.length] = {
	char: "括",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, p_thousand, s_kou]
}
Characters[Characters.length] = {
	char: "拴",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, p_ren, h_wang]
}
Characters[Characters.length] = {
	char: "拾",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, p_ren, heng, s_kou]
}
Characters[Characters.length] = {
	char: "挑",
	first: pattern_lr_left_1_right_heng_2,
	later: [h_tishoupang, p_zhaozizuo, z_zhaoziyou]
}
Characters[Characters.length] = {
	char: "指",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, p_bi, s_ri]
}
Characters[Characters.length] = {
	char: "垫",
	first: pattern_ud_up_heng_2_down_1,
	later: [h_tishoupang, p_nawan, h_tu]
}
Characters[Characters.length] = {
	char: "挣",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, p_weizitou, z_zhengzidi]
}
Characters[Characters.length] = {
	char: "挤",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, d_wen, p_dao]
}
Characters[Characters.length] = {
	char: "拼",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, d_lanzitou, h_kai]
}
Characters[Characters.length] = {
	char: "挖",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, d_xuezitou, z_yi]
}
Characters[Characters.length] = {
	char: "按",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, d_baogaitou, z_nv]
}
Characters[Characters.length] = {
	char: "挥",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, d_tubaogai, h_che]
}
Characters[Characters.length] = {
	char: "挪",
	first: pattern_lr_left_1_right_heng_2,
	later: [h_tishoupang, z_nazizuo, z_youerpang]
}
Characters[Characters.length] = {
	char: "某",
	first: pattern_ud_up_1_down_1,
	later: [h_ganku, h_mu]
}
Characters[Characters.length] = {
	char: "甚",
	first: pattern_ud_up_1_down_wei_2,
	later: [h_qizitou, p_eightdian, shuzheheng]
}
Characters[Characters.length] = {
	char: "革",
	first: pattern_single,
	later: [h_gexing]
}
Characters[Characters.length] = {
	char: "荐",
	first: pattern_ud_up_1_down_wei_2,
	later: [h_caozitou, h_zaizitou, z_zi]
}
Characters[Characters.length] = {
	char: "巷",
	first: pattern_ud_up_1_down_1,
	later: [h_gongzitou, p_eight, z_si]
}
Characters[Characters.length] = {
	char: "带",
	first: pattern_ud_up_middle_down,
	later: [h_daizitou, d_tubaogai, s_jin]
}
Characters[Characters.length] = {
	char: "草",
	first: pattern_ud_up_1_down_shu_2,
	later: [h_caozitou, s_ri, h_ten]
}
Characters[Characters.length] = {
	char: "茧",
	first: pattern_ud_up_1_down_1,
	later: [h_caozitou, s_chong]
}
Characters[Characters.length] = {
	char: "茶",
	first: pattern_ud_up_middle_down,
	later: [h_caozitou, p_ren, h_mugou]
}
Characters[Characters.length] = {
	char: "荒",
	first: pattern_ud_up_1_down_shu_2,
	later: [h_caozitou, d_wang, p_liuzidi]
}
Characters[Characters.length] = {
	char: "茫",
	first: pattern_ud_up_1_down_heng_2,
	later: [h_caozitou, d_sandianshui, d_wang]
}
Characters[Characters.length] = {
	char: "荡",
	first: pattern_ud_up_1_down_heng_2,
	later: [h_caozitou, d_sandianshui, z_yangziyou]
}
Characters[Characters.length] = {
	char: "荣",
	first: pattern_ud_up_middle_down,
	later: [h_caozitou, d_tubaogai, h_mu]
}
Characters[Characters.length] = {
	char: "故",
	first: pattern_lr_left_shu_2_right_1,
	later: [h_ten, s_kou, p_fanwenpang]
}
Characters[Characters.length] = {
	char: "胡",
	first: pattern_lr_left_shu_2_right_1,
	later: [h_ten, s_kou, p_yue]
}
Characters[Characters.length] = {
	char: "南",
	first: pattern_ud_up_1_down_wei_2,
	later: [h_ten, s_tongzikuang, d_xinzidi]
}
Characters[Characters.length] = {
	char: "药",
	first: pattern_ud_up_1_down_heng_2,
	later: [h_caozitou, z_jiaosipang, p_shao]
}
Characters[Characters.length] = {
	char: "标",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, h_two, z_xiao]
}
Characters[Characters.length] = {
	char: "枯",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, h_ten, s_kou]
}
Characters[Characters.length] = {
	char: "柄",
	first: pattern_lr_left_1_right_1,
	later: [h_mu, h_bing]
}
Characters[Characters.length] = {
	char: "栋",
	first: pattern_lr_left_1_right_1,
	later: [h_mu, h_dong]
}
Characters[Characters.length] = {
	char: "相",
	first: pattern_lr_left_1_right_1,
	later: [h_mu, s_mu]
}
Characters[Characters.length] = {
	char: "查",
	first: pattern_ud_up_middle_down,
	later: [h_mu, s_ri, heng]
}
Characters[Characters.length] = {
	char: "柏",
	first: pattern_lr_left_1_right_1,
	later: [h_mu, p_bai]
}
Characters[Characters.length] = {
	char: "柳",
	first: pattern_lr_left_1_right_heng_2,
	later: [h_mu, p_maozizuo, z_danerpang]
}
Characters[Characters.length] = {
	char: "柱",
	first: pattern_lr_left_1_right_1,
	later: [h_mu, d_zhu]
}
Characters[Characters.length] = {
	char: "柿",
	first: pattern_lr_left_1_right_1,
	later: [h_mu, d_shi]
}
Characters[Characters.length] = {
	char: "栏",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, d_lanzitou, h_three]
}
Characters[Characters.length] = {
	char: "树",
	first: pattern_lr_left_1_right_heng_2,
	later: [h_mu, z_you, h_cun]
}
Characters[Characters.length] = {
	char: "要",
	first: pattern_ud_up_1_down_1,
	later: [h_xiwuzhe, z_nv]
}
Characters[Characters.length] = {
	char: "咸",
	first: pattern_round_up,
	later: [h_xianzikuang, heng, s_kou]
}
Characters[Characters.length] = {
	char: "威",
	first: pattern_round_up,
	later: [h_xianzikuang, heng, z_nv]
}
Characters[Characters.length] = {
	char: "歪",
	first: pattern_ud_up_1_down_1,
	later: [h_bu, h_zheng]
}
Characters[Characters.length] = {
	char: "研",
	first: pattern_lr_left_1_right_1,
	later: [h_stone, h_kai]
}
Characters[Characters.length] = {
	char: "砖",
	first: pattern_lr_left_1_right_1,
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
	first: pattern_lr_left_1_right_heng_2,
	later: [h_stone, p_qi, z_dao]
}
Characters[Characters.length] = {
	char: "砍",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_stone, p_qianzitou, p_ren]
}
Characters[Characters.length] = {
	char: "面",
	first: pattern_single,
	later: [h_mian]
}
Characters[Characters.length] = {
	char: "耐",
	first: pattern_lr_left_1_right_1,
	later: [h_erqie, h_cun]
}
Characters[Characters.length] = {
	char: "耍",
	first: pattern_ud_up_1_down_1,
	later: [h_erqie, z_nv]
}
Characters[Characters.length] = {
	char: "牵",
	first: pattern_ud_up_middle_down,
	later: [h_da, d_tubaogai, p_niu]
}
Characters[Characters.length] = {
	char: "残",
	first: pattern_lr_left_1_right_1,
	later: [h_dai, h_zhan]
}
Characters[Characters.length] = {
	char: "殃",
	first: pattern_lr_left_1_right_1,
	later: [h_dai, s_yang]
}
Characters[Characters.length] = {
	char: "轻",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_che, z_jingzitou, h_gong]
}
Characters[Characters.length] = {
	char: "鸦",
	first: pattern_lr_left_1_right_1,
	later: [h_ya, p_niao]
}
Characters[Characters.length] = {
	char: "皆",
	first: pattern_ud_up_heng_2_down_1,
	later: [h_bizizuo, p_bi, p_bai]
}
Characters[Characters.length] = {
	char: "背",
	first: pattern_ud_up_heng_2_down_1,
	later: [s_beizizuo, p_bi, p_yue]
}
Characters[Characters.length] = {
	char: "战",
	first: pattern_lr_left_shu_2_right_1,
	later: [s_shangzitou, s_kou, h_ge]
}
Characters[Characters.length] = {
	char: "点",
	first: pattern_ud_up_shu_2_down_1,
	later: [s_shangzitou, s_kou, d_sidiandi]
}
Characters[Characters.length] = {
	char: "临",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_liangshu, p_zhutouban, s_daori]
}
Characters[Characters.length] = {
	char: "览",
	first: pattern_ud_up_heng_2_down_1,
	later: [s_liangshu, p_zhutouban, s_jian]
}
Characters[Characters.length] = {
	char: "竖",
	first: pattern_ud_up_heng_2_down_1,
	later: [s_liangshu, z_you, d_li]
}
Characters[Characters.length] = {
	char: "省",
	first: pattern_ud_up_1_down_1,
	later: [s_shao, s_mu]
}
Characters[Characters.length] = {
	char: "削",
	first: pattern_lr_left_shu_2_right_1,
	later: [s_guangzitou, p_yue, s_lidaopang]
}
Characters[Characters.length] = {
	char: "尝",
	first: pattern_ud_up_middle_down,
	later: [s_guangzitou, d_tubaogai, h_two, z_sigong]
}
Characters[Characters.length] = {
	char: "是",
	first: pattern_ud_up_1_down_1,
	later: [s_ri, h_shizidi]
}
Characters[Characters.length] = {
	char: "盼",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_mu, p_eight, z_dao]
}
Characters[Characters.length] = {
	char: "眨",
	first: pattern_lr_left_1_right_1,
	later: [s_mu, p_fa]
}
Characters[Characters.length] = {
	char: "哄",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_kou, h_gongzitou, p_eightdian]
}
Characters[Characters.length] = {
	char: "显",
	first: pattern_ud_up_1_down_1,
	later: [s_ri, s_ye]
}
Characters[Characters.length] = {
	char: "哑",
	first: pattern_lr_left_1_right_1,
	later: [s_kou, heng, s_ye]
}
Characters[Characters.length] = {
	char: "冒",
	first: pattern_ud_up_1_down_1,
	later: [s_ri, s_mu]
}
Characters[Characters.length] = {
	char: "映",
	first: pattern_lr_left_1_right_1,
	later: [s_ri, s_yang]
}
Characters[Characters.length] = {
	char: "星",
	first: pattern_ud_up_1_down_1,
	later: [s_ri, p_sheng]
}
Characters[Characters.length] = {
	char: "昨",
	first: pattern_lr_left_1_right_1,
	later: [s_ri, p_zha]
}
Characters[Characters.length] = {
	char: "畏",
	first: pattern_ud_up_1_down_1,
	later: [s_tian, h_weizidi]
}
Characters[Characters.length] = {
	char: "趴",
	first: pattern_lr_left_1_right_1,
	later: [s_zuzipang, p_eight]
}
Characters[Characters.length] = {
	char: "胃",
	first: pattern_ud_up_1_down_1,
	later: [s_tian, p_yue]
}
Characters[Characters.length] = {
	char: "贵",
	first: pattern_ud_up_1_down_1,
	later: [s_guizitou, s_bei]
}
Characters[Characters.length] = {
	char: "界",
	first: pattern_ud_up_1_down_shu_2,
	later: [s_tian, p_ren, p_dao]
}
Characters[Characters.length] = {
	char: "虹",
	first: pattern_lr_left_1_right_1,
	later: [s_chong, h_gong]
}
Characters[Characters.length] = {
	char: "虾",
	first: pattern_lr_left_1_right_1,
	later: [s_chong, h_xia]
}
Characters[Characters.length] = {
	char: "蚁",
	first: pattern_lr_left_1_right_1,
	later: [s_chong, d_yi]
}
Characters[Characters.length] = {
	char: "思",
	first: pattern_ud_up_1_down_1,
	later: [s_tian, d_xin]
}
Characters[Characters.length] = {
	char: "蚂",
	first: pattern_lr_left_1_right_1,
	later: [s_chong, z_ma]
}
Characters[Characters.length] = {
	char: "虽",
	first: pattern_ud_up_1_down_1,
	later: [s_kou, s_chong]
}
Characters[Characters.length] = {
	char: "品",
	first: pattern_pin,
	later: [s_kou, s_kou, s_kou]
}
Characters[Characters.length] = {
	char: "咽",
	first: pattern_lr_left_1_right_wei_2,
	later: [s_kou, s_kou, h_da]
}
Characters[Characters.length] = {
	char: "骂",
	first: pattern_ud_up_heng_2_down_1,
	later: [s_kou, s_kou, z_ma]
}
Characters[Characters.length] = {
	char: "哗",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_kou, p_danrenpang, p_qi, h_ten]
}
Characters[Characters.length] = {
	char: "咱",
	first: pattern_lr_left_1_right_1,
	later: [s_kou, p_zi]
}
Characters[Characters.length] = {
	char: "响",
	first: pattern_lr_left_1_right_wei_2,
	later: [s_kou, p_xiangzikuang, s_kou]
}
Characters[Characters.length] = {
	char: "哈",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_kou, p_ren, heng, s_kou]
}
Characters[Characters.length] = {
	char: "咬",
	first: pattern_lr_left_1_right_1,
	later: [s_kou, d_jiao]
}
Characters[Characters.length] = {
	char: "咳",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_kou, d_haizitou, p_ren]
}
Characters[Characters.length] = {
	char: "哪",
	first: pattern_lr_left_1_right_heng_2,
	later: [s_kou, z_nazizuo, z_youerpang]
}
Characters[Characters.length] = {
	char: "炭",
	first: pattern_ud_up_1_down_wei_2,
	later: [s_shan, h_hengpie, d_huo]
}
Characters[Characters.length] = {
	char: "峡",
	first: pattern_lr_left_1_right_1,
	later: [s_shan, h_jia]
}
Characters[Characters.length] = {
	char: "罚",
	first: pattern_ud_up_1_down_heng_2,
	later: [s_siwuzhe, d_yanzipang, s_lidaopang]
}
Characters[Characters.length] = {
	char: "贱",
	first: pattern_lr_left_1_right_1,
	later: [s_bei, h_zhan]
}
Characters[Characters.length] = {
	char: "贴",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_bei, s_shangzitou, s_kou]
}
Characters[Characters.length] = {
	char: "骨",
	first: pattern_ud_up_wei_2_down_1,
	later: [s_guzitou, d_tubaogai, p_yue]
}
Characters[Characters.length] = {
	char: "钞",
	first: pattern_lr_left_1_right_1,
	later: [p_jinzipang, s_shao]
}
Characters[Characters.length] = {
	char: "钟",
	first: pattern_lr_left_1_right_1,
	later: [p_jinzipang, s_zhong]
}
Characters[Characters.length] = {
	char: "钢",
	first: pattern_lr_left_1_right_wei_2,
	later: [p_jinzipang, s_tongzikuang, p_chadian]
}
Characters[Characters.length] = {
	char: "钥",
	first: pattern_lr_left_1_right_1,
	later: [p_jinzipang, p_yue]
}
Characters[Characters.length] = {
	char: "钩",
	first: pattern_lr_left_1_right_wei_2,
	later: [p_jinzipang, p_baozitou, z_sigong]
}
Characters[Characters.length] = {
	char: "卸",
	first: pattern_lr_left_1_right_1,
	later: [p_xiezizuo, z_danerpang]
}
Characters[Characters.length] = {
	char: "缸",
	first: pattern_lr_left_1_right_1,
	later: [p_gangwa, h_gong]
}
Characters[Characters.length] = {
	char: "拜",
	first: pattern_lr_left_1_right_1,
	later: [p_baizizuo, h_baiziyou]
}
Characters[Characters.length] = {
	char: "看",
	first: pattern_round_left_up,
	later: [p_baizizuo, s_mu]
}
Characters[Characters.length] = {
	char: "矩",
	first: pattern_lr_left_1_right_1,
	later: [p_shi, h_ju]
}
Characters[Characters.length] = {
	char: "怎",
	first: pattern_ud_up_1_down_1,
	later: [p_zha, d_xin]
}
Characters[Characters.length] = {
	char: "牲",
	first: pattern_lr_left_1_right_1,
	later: [p_niu, p_sheng]
}
Characters[Characters.length] = {
	char: "选",
	first: pattern_round_left_down,
	later: [p_niuwuwei, p_er, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "适",
	first: pattern_round_left_down,
	later: [p_thousand, s_kou, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "秒",
	first: pattern_lr_left_1_right_1,
	later: [p_he, s_shao]
}
Characters[Characters.length] = {
	char: "香",
	first: pattern_ud_up_1_down_1,
	later: [p_he, s_ri]
}
Characters[Characters.length] = {
	char: "种",
	first: pattern_lr_left_1_right_1,
	later: [p_he, s_zhong]
}
Characters[Characters.length] = {
	char: "秋",
	first: pattern_lr_left_1_right_1,
	later: [p_he, d_huo]
}
Characters[Characters.length] = {
	char: "科",
	first: pattern_lr_left_1_right_1,
	later: [p_he, d_dou]
}
Characters[Characters.length] = {
	char: "重",
	first: pattern_single,
	later: [p_zhong]
}
Characters[Characters.length] = {
	char: "复",
	first: pattern_ud_up_middle_down,
	later: [p_pieheng, s_ri, p_zhewen]
}
Characters[Characters.length] = {
	char: "竿",
	first: pattern_ud_up_1_down_1,
	later: [p_zhuzitou, h_gan]
}
Characters[Characters.length] = {
	char: "段",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_duanzizuo, p_ji, z_you]
}
Characters[Characters.length] = {
	char: "便",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, h_geng]
}
Characters[Characters.length] = {
	char: "俩",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, h_liang]
}
Characters[Characters.length] = {
	char: "贷",
	first: pattern_ud_up_heng_2_down_1,
	later: [p_danrenpang, h_shizikuang, s_bei]
}
Characters[Characters.length] = {
	char: "顺",
	first: pattern_lr_left_1_right_1,
	later: [p_chuan, h_ye]
}
Characters[Characters.length] = {
	char: "修",
	first: pattern_lr_left_heng_2_right_shu_2,
	later: [p_danrenpang, shu, p_zhewen, p_sanpie]
}
Characters[Characters.length] = {
	char: "保",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, s_kou, h_mu]
}
Characters[Characters.length] = {
	char: "促",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, s_kou, s_zouzidi]
}
Characters[Characters.length] = {
	char: "侮",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, p_pieheng, z_mu]
}
Characters[Characters.length] = {
	char: "俭",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, p_ren, heng, d_yingzidi]
}
Characters[Characters.length] = {
	char: "俗",
	first: pattern_lr_left_1_right_shu_many,
	later: [p_danrenpang, p_eightdian, p_ren, s_kou]
}
Characters[Characters.length] = {
	char: "俘",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, p_caizitou, z_zi]
}
Characters[Characters.length] = {
	char: "信",
	first: pattern_lr_left_1_right_shu_many,
	later: [p_danrenpang, d_liuzitou, h_two, s_kou]
}
Characters[Characters.length] = {
	char: "皇",
	first: pattern_ud_up_1_down_1,
	later: [p_bai, h_wang]
}
Characters[Characters.length] = {
	char: "泉",
	first: pattern_ud_up_1_down_1,
	later: [p_bai, z_shui]
}
Characters[Characters.length] = {
	char: "鬼",
	first: pattern_single,
	later: [p_gui]
}
Characters[Characters.length] = {
	char: "侵",
	first: pattern_lr_left_1_right_shu_many,
	later: [p_danrenpang, z_xunzitou, d_tubaogai, z_you]
}
Characters[Characters.length] = {
	char: "追",
	first: pattern_round_left_down,
	later: [p_zhuizili, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "俊",
	first: pattern_lr_left_1_right_shu_many,
	later: [p_danrenpang, z_sigong, p_eightdian, p_zhewen]
}
Characters[Characters.length] = {
	char: "盾",
	first: pattern_round_left_up,
	later: [p_fanzipang, h_ten, s_mu]
}
Characters[Characters.length] = {
	char: "待",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_shuangrenpang, h_tu, h_cun]
}
Characters[Characters.length] = {
	char: "律",
	first: pattern_lr_left_1_right_1,
	later: [p_shuangrenpang, z_yuming]
}
Characters[Characters.length] = {
	char: "很",
	first: pattern_lr_left_1_right_1,
	later: [p_shuangrenpang, z_henziyou]
}
Characters[Characters.length] = {
	char: "须",
	first: pattern_lr_left_1_right_1,
	later: [p_sanpie, h_ye]
}
Characters[Characters.length] = {
	char: "叙",
	first: pattern_lr_left_shu_2_right_1,
	later: [p_ren, h_yuzidi, z_you]
}
Characters[Characters.length] = {
	char: "剑",
	first: pattern_lr_left_shu_2_right_1,
	later: [p_ren, heng, d_yingzidi, s_lidaopang]
}
Characters[Characters.length] = {
	char: "逃",
	first: pattern_round_left_down,
	later: [p_zhaozizuo, z_zhaoziyou, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "食",
	first: pattern_ud_up_1_down_1,
	later: [p_ren, d_liang]
}
Characters[Characters.length] = {
	char: "盆",
	first: pattern_ud_up_shu_2_down_1,
	later: [p_eight, z_dao, s_minzidi]
}
Characters[Characters.length] = {
	char: "胆",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_yue, s_ri, heng]
}
Characters[Characters.length] = {
	char: "胜",
	first: pattern_lr_left_1_right_1,
	later: [p_yue, p_sheng]
}
Characters[Characters.length] = {
	char: "胞",
	first: pattern_lr_left_1_right_wei_2,
	later: [p_yue, p_baozitou, z_si]
}
Characters[Characters.length] = {
	char: "胖",
	first: pattern_lr_left_1_right_1,
	later: [p_yue, d_ban]
}
Characters[Characters.length] = {
	char: "脉",
	first: pattern_lr_left_1_right_1,
	later: [p_yue, d_yong]
}
Characters[Characters.length] = {
	char: "勉",
	first: pattern_round_left_down,
	later: [p_weizitou, s_mianzishen, z_li]
}
Characters[Characters.length] = {
	char: "狭",
	first: pattern_lr_left_1_right_1,
	later: [p_fanquanpang, h_jia]
}
Characters[Characters.length] = {
	char: "狮",
	first: pattern_lr_left_1_right_heng_2,
	later: [p_fanquanpang, s_shupie, h_hengjin]
}
Characters[Characters.length] = {
	char: "独",
	first: pattern_lr_left_1_right_1,
	later: [p_fanquanpang, s_chong]
}
Characters[Characters.length] = {
	char: "狡",
	first: pattern_lr_left_1_right_1,
	later: [p_fanquanpang, d_jiao]
}
Characters[Characters.length] = {
	char: "狱",
	first: pattern_lr_left_middle_right,
	later: [p_fanquanpang, d_yanzipang, h_quan]
}
Characters[Characters.length] = {
	char: "狠",
	first: pattern_lr_left_1_right_1,
	later: [p_fanquanpang, z_henziyou]
}
Characters[Characters.length] = {
	char: "贸",
	first: pattern_ud_up_heng_2_down_1,
	later: [p_maoshangzuo, z_dao, s_bei]
}
Characters[Characters.length] = {
	char: "怨",
	first: pattern_ud_up_heng_2_down_1,
	later: [p_xi, z_cangzidi]
}
Characters[Characters.length] = {
	char: "急",
	first: pattern_ud_up_middle_down,
	later: [p_weizitou, z_xunzitou, d_xin]
}
Characters[Characters.length] = {
	char: "饶",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_shichi, h_gewudian, h_wuzidi]
}
Characters[Characters.length] = {
	char: "蚀",
	first: pattern_lr_left_1_right_1,
	later: [p_shichi, s_chong]
}
Characters[Characters.length] = {
	char: "饺",
	first: pattern_lr_left_1_right_1,
	later: [p_shichi, d_jiao]
}
Characters[Characters.length] = {
	char: "饼",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_shichi, d_lanzitou, h_kai]
}
Characters[Characters.length] = {
	char: "弯",
	first: pattern_ud_up_1_down_1,
	later: [d_bianzitou, z_gong]
}
Characters[Characters.length] = {
	char: "将",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_jiangzipang, p_xi, h_cun]
}
Characters[Characters.length] = {
	char: "奖",
	first: pattern_ud_up_heng_2_down_1,
	later: [d_jiangzipang, p_xi, h_da]
}
Characters[Characters.length] = {
	char: "哀",
	first: pattern_ud_up_middle_down,
	later: [d_liuzitou, s_kou, p_yizidi]
}
Characters[Characters.length] = {
	char: "亭",
	first: pattern_ud_up_middle_down,
	later: [d_liuzitou, s_kou, d_tubaogai, h_ding]
}
Characters[Characters.length] = {
	char: "亮",
	first: pattern_ud_up_middle_down,
	later: [d_liuzitou, s_kou, d_tubaogai, p_ji]
}
Characters[Characters.length] = {
	char: "度",
	first: pattern_round_left_up,
	later: [d_guang, h_caoheng, z_you]
}
Characters[Characters.length] = {
	char: "迹",
	first: pattern_round_left_down,
	later: [d_yiye, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "庭",
	first: pattern_round_left_up,
	later: [d_guang, p_rengui, z_jianzidi]
}
Characters[Characters.length] = {
	char: "疮",
	first: pattern_round_left_up,
	later: [d_bingzitou, p_ren, z_cangzidi]
}
Characters[Characters.length] = {
	char: "疯",
	first: pattern_round_left_up,
	later: [d_bingzitou, p_fengzitou, p_chadian]
}
Characters[Characters.length] = {
	char: "疫",
	first: pattern_round_left_up,
	later: [d_bingzitou, p_ji, z_you]
}
Characters[Characters.length] = {
	char: "疤",
	first: pattern_round_left_up,
	later: [d_bingzitou, z_ba]
}
Characters[Characters.length] = {
	char: "姿",
	first: pattern_ud_up_heng_2_down_1,
	later: [d_liangdianshui, p_qianzitou, p_ren, z_nv]
}
Characters[Characters.length] = {
	char: "亲",
	first: pattern_ud_up_1_down_1,
	later: [d_li, h_mugou]
}
Characters[Characters.length] = {
	char: "音",
	first: pattern_ud_up_1_down_1,
	later: [d_li, s_ri]
}
Characters[Characters.length] = {
	char: "帝",
	first: pattern_ud_up_middle_down,
	later: [d_shangzitou, d_tubaogai, s_jin]
}
Characters[Characters.length] = {
	char: "施",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_fang, p_pieheng, z_ye]
}
Characters[Characters.length] = {
	char: "闻",
	first: pattern_round_up,
	later: [d_men, h_erduo]
}
Characters[Characters.length] = {
	char: "阀",
	first: pattern_round_up,
	later: [d_men, p_danrenpang, h_ge]
}
Characters[Characters.length] = {
	char: "阁",
	first: pattern_round_up,
	later: [d_men, p_zhewen, s_kou]
}
Characters[Characters.length] = {
	char: "差",
	first: pattern_ud_up_1_down_wei_2,
	later: [d_lanzitou, h_pieyangdi, h_gong]
}
Characters[Characters.length] = {
	char: "养",
	first: pattern_ud_up_shu_2_down_1,
	later: [d_lanzitou, h_yangzizh, p_dao]
}
Characters[Characters.length] = {
	char: "美",
	first: pattern_ud_up_shu_2_down_1,
	later: [d_lanzitou, h_wang, h_da]
}
Characters[Characters.length] = {
	char: "姜",
	first: pattern_ud_up_shu_2_down_1,
	later: [d_lanzitou, h_wang, z_nv]
}
Characters[Characters.length] = {
	char: "叛",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_panzizuo, p_fanzipang, z_you]
}
Characters[Characters.length] = {
	char: "送",
	first: pattern_round_left_down,
	later: [d_lanzitou, h_tian, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "类",
	first: pattern_ud_up_1_down_1,
	later: [d_mi, h_da]
}
Characters[Characters.length] = {
	char: "迷",
	first: pattern_round_left_down,
	later: [d_mi, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "前",
	first: pattern_ud_up_1_down_heng_2,
	later: [d_qianzitou, p_yue, s_lidaopang]
}
Characters[Characters.length] = {
	char: "首",
	first: pattern_ud_up_1_down_1,
	later: [d_qianzitou, p_zi]
}
Characters[Characters.length] = {
	char: "逆",
	first: pattern_round_left_down,
	later: [d_ni, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "总",
	first: pattern_ud_up_shu_2_down_1,
	later: [d_lanzitou, s_kou, d_xin]
}
Characters[Characters.length] = {
	char: "炼",
	first: pattern_lr_left_1_right_1,
	later: [d_huo, h_jianziyou]
}
Characters[Characters.length] = {
	char: "炸",
	first: pattern_lr_left_1_right_1,
	later: [d_huo, p_zha]
}
Characters[Characters.length] = {
	char: "炮",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_huo, p_baozitou, z_si]
}
Characters[Characters.length] = {
	char: "烂",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_huo, d_lanzitou, h_three]
}
Characters[Characters.length] = {
	char: "剃",
	first: pattern_lr_left_shu_2_right_1,
	later: [d_lanzitou, z_dizidi, s_lidaopang]
}
Characters[Characters.length] = {
	char: "洁",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, h_shi, s_kou]
}
Characters[Characters.length] = {
	char: "洪",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, h_gongzitou, p_eightdian]
}
Characters[Characters.length] = {
	char: "洒",
	first: pattern_lr_left_1_right_1,
	later: [d_sandianshui, h_xi]
}
Characters[Characters.length] = {
	char: "浇",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, h_gewudian, h_wuzidi]
}
Characters[Characters.length] = {
	char: "浊",
	first: pattern_lr_left_1_right_1,
	later: [d_sandianshui, s_chong]
}
Characters[Characters.length] = {
	char: "洞",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_sandianshui, s_tongzikuang, heng, s_kou]
}
Characters[Characters.length] = {
	char: "测",
	first: pattern_lr_left_1_right_heng_2,
	later: [d_sandianshui, s_bei, s_lidaopang]
}
Characters[Characters.length] = {
	char: "洗",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, p_niuwuwei, p_er]
}
Characters[Characters.length] = {
	char: "活",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, p_thousand, s_kou]
}
Characters[Characters.length] = {
	char: "派",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_sandianshui, p_fanzipang, p_paiyouli]
}
Characters[Characters.length] = {
	char: "洽",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, p_ren, heng, s_kou]
}
Characters[Characters.length] = {
	char: "染",
	first: pattern_ud_up_heng_2_down_1,
	later: [d_sandianshui, p_nine, h_mu]
}
Characters[Characters.length] = {
	char: "济",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, d_wen, p_dao]
}
Characters[Characters.length] = {
	char: "洋",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, d_lanzitou, h_yangzishen]
}
Characters[Characters.length] = {
	char: "洲",
	first: pattern_lr_left_1_right_1,
	later: [d_sandianshui, d_zhou]
}
Characters[Characters.length] = {
	char: "浑",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, d_tubaogai, h_che]
}
Characters[Characters.length] = {
	char: "浓",
	first: pattern_lr_left_1_right_1,
	later: [d_sandianshui, d_nong]
}
Characters[Characters.length] = {
	char: "津",
	first: pattern_lr_left_1_right_1,
	later: [d_sandianshui, z_yuming]
}
Characters[Characters.length] = {
	char: "恒",
	first: pattern_lr_left_1_right_shu_many,
	later: [d_shuxinpang, heng, s_ri, heng]
}
Characters[Characters.length] = {
	char: "恢",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_shuxinpang, h_hengpie, d_huo]
}
Characters[Characters.length] = {
	char: "恰",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_shuxinpang, p_ren, heng, s_kou]
}
Characters[Characters.length] = {
	char: "恼",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_shuxinpang, d_liuzitou, p_chadian, z_xiongzikuang]
}
Characters[Characters.length] = {
	char: "恨",
	first: pattern_lr_left_1_right_1,
	later: [d_shuxinpang, z_henziyou]
}
Characters[Characters.length] = {
	char: "举",
	first: pattern_ud_up_shu_2_down_1,
	later: [d_yingzidi, p_eight, h_fengzidi]
}
Characters[Characters.length] = {
	char: "觉",
	first: pattern_ud_up_middle_down,
	later: [d_xingzitou, d_tubaogai, s_jian]
}
Characters[Characters.length] = {
	char: "宣",
	first: pattern_ud_up_1_down_shu_many,
	later: [d_baogaitou, heng, s_ri, heng]
}
Characters[Characters.length] = {
	char: "室",
	first: pattern_ud_up_1_down_shu_2,
	later: [d_baogaitou, h_zhizitou, h_tu]
}
Characters[Characters.length] = {
	char: "宫",
	first: pattern_ud_up_1_down_shu_2,
	later: [d_baogaitou, s_kou, s_kou]
}
Characters[Characters.length] = {
	char: "宪",
	first: pattern_ud_up_1_down_shu_2,
	later: [d_baogaitou, p_niuwuwei, p_er]
}
Characters[Characters.length] = {
	char: "突",
	first: pattern_ud_up_1_down_1,
	later: [d_xuezitou, h_quan]
}
Characters[Characters.length] = {
	char: "穿",
	first: pattern_ud_up_1_down_1,
	later: [d_xuezitou, h_ya]
}
Characters[Characters.length] = {
	char: "窃",
	first: pattern_ud_up_1_down_heng_2,
	later: [d_xuezitou, h_qiezizuo, z_dao]
}
Characters[Characters.length] = {
	char: "客",
	first: pattern_ud_up_1_down_shu_2,
	later: [d_baogaitou, p_zhewen, s_kou]
}
Characters[Characters.length] = {
	char: "冠",
	first: pattern_ud_up_1_down_wei_2,
	later: [d_tubaogai, h_two, p_er, h_cun]
}
Characters[Characters.length] = {
	char: "语",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_yanzipang, h_five, s_kou]
}
Characters[Characters.length] = {
	char: "扁",
	first: pattern_round_left_up,
	later: [d_hu, s_bianzili]
}
Characters[Characters.length] = {
	char: "袄",
	first: pattern_lr_left_1_right_1,
	later: [d_buyipang, p_yao]
}
Characters[Characters.length] = {
	char: "祖",
	first: pattern_lr_left_1_right_1,
	later: [d_shizipang, s_qie]
}
Characters[Characters.length] = {
	char: "神",
	first: pattern_lr_left_1_right_1,
	later: [d_shizipang, s_shen]
}
Characters[Characters.length] = {
	char: "祝",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_shizipang, s_kou, p_er]
}
Characters[Characters.length] = {
	char: "误",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_yanzipang, s_kou, h_tian]
}
Characters[Characters.length] = {
	char: "诱",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_yanzipang, p_he, z_nai]
}
Characters[Characters.length] = {
	char: "说",
	first: pattern_lr_left_1_right_shu_many,
	later: [d_yanzipang, d_lanzitou, s_kou, p_er]
}
Characters[Characters.length] = {
	char: "诵",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_yanzipang, z_yongzitou, p_yong]
}
Characters[Characters.length] = {
	char: "垦",
	first: pattern_ud_up_1_down_1,
	later: [z_henziyou, h_tu]
}
Characters[Characters.length] = {
	char: "退",
	first: pattern_round_left_down,
	later: [z_henziyou, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "既",
	first: pattern_lr_left_1_right_1,
	later: [z_jizizuo, h_jiziyou]
}
Characters[Characters.length] = {
	char: "屋",
	first: pattern_round_left_up,
	later: [z_shi, h_zhizitou, h_tu]
}
Characters[Characters.length] = {
	char: "昼",
	first: pattern_ud_up_1_down_shu_2,
	later: [z_chi, s_ri, heng]
}
Characters[Characters.length] = {
	char: "费",
	first: pattern_ud_up_1_down_1,
	later: [z_fu, s_bei]
}
Characters[Characters.length] = {
	char: "陡",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_zuoerpang, h_tu, s_zouzidi]
}
Characters[Characters.length] = {
	char: "眉",
	first: pattern_round_left_up,
	later: [z_meizitou, s_mu]
}
Characters[Characters.length] = {
	char: "孩",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_zi, d_haizitou, p_ren]
}
Characters[Characters.length] = {
	char: "除",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_zuoerpang, p_ren, h_yuzidi]
}
Characters[Characters.length] = {
	char: "险",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_zuoerpang, p_ren, heng, d_yingzidi]
}
Characters[Characters.length] = {
	char: "院",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_zuoerpang, d_baogaitou, h_two, p_er]
}
Characters[Characters.length] = {
	char: "娃",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_nv, h_tu, h_tu]
}
Characters[Characters.length] = {
	char: "姥",
	first: pattern_lr_left_1_right_wei_2,
	later: [z_nv, h_laozitou, p_bi]
}
Characters[Characters.length] = {
	char: "姨",
	first: pattern_lr_left_1_right_1,
	later: [z_nv, h_yi]
}
Characters[Characters.length] = {
	char: "姻",
	first: pattern_lr_left_1_right_wei_2,
	later: [z_nv, s_kou, h_da]
}
Characters[Characters.length] = {
	char: "娇",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_nv, p_yao, p_dao]
}
Characters[Characters.length] = {
	char: "怒",
	first: pattern_ud_up_heng_2_down_1,
	later: [z_nv, z_you, d_xin]
}
Characters[Characters.length] = {
	char: "架",
	first: pattern_ud_up_heng_2_down_1,
	later: [z_li, s_kou, h_mu]
}
Characters[Characters.length] = {
	char: "贺",
	first: pattern_ud_up_heng_2_down_1,
	later: [z_li, s_kou, s_bei]
}
Characters[Characters.length] = {
	char: "盈",
	first: pattern_ud_up_wei_2_down_1,
	later: [z_nai, z_you, s_minzidi]
}
Characters[Characters.length] = {
	char: "勇",
	first: pattern_ud_up_shu_2_down_1,
	later: [z_yongzitou, p_yong, z_li]
}
Characters[Characters.length] = {
	char: "怠",
	first: pattern_ud_up_shu_2_down_1,
	later: [z_sigong, s_kou, d_xin]
}
Characters[Characters.length] = {
	char: "柔",
	first: pattern_ud_up_1_down_1,
	later: [z_mao, h_mu]
}
Characters[Characters.length] = {
	char: "垒",
	first: pattern_ud_up_shu_many_down_1,
	later: [z_sigong, z_sigong, z_sigong, h_tu]
}
Characters[Characters.length] = {
	char: "绑",
	first: pattern_lr_left_1_right_heng_2,
	later: [z_jiaosipang, h_piefeng, z_youerpang]
}
Characters[Characters.length] = {
	char: "绒",
	first: pattern_lr_left_1_right_wei_2,
	later: [z_jiaosipang, h_ge, h_hengpie]
}
Characters[Characters.length] = {
	char: "结",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_jiaosipang, h_shi, s_kou]
}
Characters[Characters.length] = {
	char: "绕",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_jiaosipang, h_gewudian, h_wuzidi]
}
Characters[Characters.length] = {
	char: "骄",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_ma, p_yao, p_dao]
}
Characters[Characters.length] = {
	char: "绘",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_jiaosipang, p_ren, h_two, z_sigong]
}
Characters[Characters.length] = {
	char: "给",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_jiaosipang, p_ren, heng, s_kou]
}
Characters[Characters.length] = {
	char: "络",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_jiaosipang, p_zhewen, s_kou]
}
Characters[Characters.length] = {
	char: "骆",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_ma, p_zhewen, s_kou]
}
Characters[Characters.length] = {
	char: "绝",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_jiaosipang, p_weizitou, z_ba]
}
Characters[Characters.length] = {
	char: "绞",
	first: pattern_lr_left_1_right_1,
	later: [z_jiaosipang, d_jiao]
}
Characters[Characters.length] = {
	char: "统",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_jiaosipang, d_chongzitou, p_er]
}

/* 十画 */
Characters[Characters.length] = {
	char: "耕",
	first: pattern_lr_left_1_right_1,
	later: [h_gengzizuo, h_jing]
}
Characters[Characters.length] = {
	char: "耗",
	first: pattern_lr_left_1_right_1,
	later: [h_gengzizuo, p_mao]
}
Characters[Characters.length] = {
	char: "艳",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_feng, p_weizitou, z_ba]
}
Characters[Characters.length] = {
	char: "泰",
	first: pattern_ud_up_1_down_1,
	later: [h_fengzitou, z_dianshui]
}
Characters[Characters.length] = {
	char: "珠",
	first: pattern_lr_left_1_right_1,
	later: [h_wang, p_zhu]
}
Characters[Characters.length] = {
	char: "班",
	first: pattern_lr_left_middle_right,
	later: [h_wang, d_dianpie, h_wang]
}
Characters[Characters.length] = {
	char: "素",
	first: pattern_ud_up_1_down_shu_2,
	later: [h_qingzitou, z_youzipang, z_xiao]
}
Characters[Characters.length] = {
	char: "蚕",
	first: pattern_ud_up_1_down_1,
	later: [h_tian, s_chong]
}
Characters[Characters.length] = {
	char: "顽",
	first: pattern_lr_left_shu_2_right_1,
	later: [h_two, p_er, h_ye]
}
Characters[Characters.length] = {
	char: "盏",
	first: pattern_ud_up_1_down_1,
	later: [h_zhan, s_minzidi]
}
Characters[Characters.length] = {
	char: "匪",
	first: pattern_round_left,
	later: [h_jiangzikuang, s_feizizuo, s_feiziyou]
}
Characters[Characters.length] = {
	char: "捞",
	first: pattern_lr_left_1_right_shu_many,
	later: [h_tishoupang, h_caozitou, d_tubaogai, z_li]
}
Characters[Characters.length] = {
	char: "栽",
	first: pattern_round_right_up,
	later: [h_zaizikuang, h_mu]
}
Characters[Characters.length] = {
	char: "捕",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, h_fudu]
}
Characters[Characters.length] = {
	char: "振",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_tishoupang, h_chang, h_two, z_sangzidi]
}
Characters[Characters.length] = {
	char: "载",
	first: pattern_round_right_up,
	later: [h_zaizikuang, h_che]
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
	first: pattern_ud_up_heng_2_down_1,
	later: [h_tu, s_bu, s_minzidi]
}
Characters[Characters.length] = {
	char: "捎",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, s_guangzitou, p_yue]
}
Characters[Characters.length] = {
	char: "捏",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, s_ri, h_tu]
}
Characters[Characters.length] = {
	char: "埋",
	first: pattern_lr_left_1_right_1,
	later: [h_tu, s_li]
}
Characters[Characters.length] = {
	char: "捉",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, s_kou, s_zouzidi]
}
Characters[Characters.length] = {
	char: "捆",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_tishoupang, s_kou, h_mu]
}
Characters[Characters.length] = {
	char: "捐",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, s_kou, p_yue]
}
Characters[Characters.length] = {
	char: "损",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, s_kou, s_bei]
}
Characters[Characters.length] = {
	char: "都",
	first: pattern_lr_left_wei_2_right_1,
	later: [h_laozitou, s_ri, z_youerpang]
}
Characters[Characters.length] = {
	char: "哲",
	first: pattern_ud_up_heng_2_down_1,
	later: [h_tishoupang, p_jin, s_kou]
}
Characters[Characters.length] = {
	char: "逝",
	first: pattern_round_left_down,
	later: [h_tishoupang, p_jin, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "捡",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, p_ren, heng, d_yingzidi]
}
Characters[Characters.length] = {
	char: "换",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, p_weizitou, s_yangwutou]
}
Characters[Characters.length] = {
	char: "挽",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, p_weizitou, s_mianzishen]
}
Characters[Characters.length] = {
	char: "热",
	first: pattern_ud_up_heng_2_down_1,
	later: [h_tishoupang, p_nawan, d_sidiandi]
}
Characters[Characters.length] = {
	char: "恐",
	first: pattern_ud_up_heng_2_down_1,
	later: [h_gong, p_fan, d_xin]
}
Characters[Characters.length] = {
	char: "壶",
	first: pattern_ud_up_middle_down,
	later: [h_shi, d_tubaogai, s_ye]
}
Characters[Characters.length] = {
	char: "挨",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, z_sigong, p_shi]
}
Characters[Characters.length] = {
	char: "耻",
	first: pattern_lr_left_1_right_1,
	later: [h_erduo, s_zhi]
}
Characters[Characters.length] = {
	char: "耽",
	first: pattern_lr_left_1_right_1,
	later: [h_erduo, d_shenziyou]
}
Characters[Characters.length] = {
	char: "恭",
	first: pattern_ud_up_shu_2_down_1,
	later: [h_gongzitou, p_eight, z_xiaodian]
}
Characters[Characters.length] = {
	char: "莲",
	first: pattern_ud_up_1_down_wei_2,
	later: [h_caozitou, h_che, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "莫",
	first: pattern_ud_up_middle_down,
	later: [h_caozitou, s_ri, h_da]
}
Characters[Characters.length] = {
	char: "荷",
	first: pattern_ud_up_1_down_heng_2,
	later: [h_caozitou, p_danrenpang, h_ding, s_kou]
}
Characters[Characters.length] = {
	char: "获",
	first: pattern_ud_up_1_down_heng_2,
	later: [h_caozitou, p_fanquanpang, h_quan]
}
Characters[Characters.length] = {
	char: "晋",
	first: pattern_ud_up_1_down_1,
	later: [h_yazhou, s_ri]
}
Characters[Characters.length] = {
	char: "恶",
	first: pattern_ud_up_1_down_1,
	later: [h_yazhou, d_xin]
}
Characters[Characters.length] = {
	char: "真",
	first: pattern_ud_up_middle_down,
	later: [h_ten, s_juzitou, p_eightdian]
}
Characters[Characters.length] = {
	char: "框",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_mu, h_jiangzikuang, h_wang]
}
Characters[Characters.length] = {
	char: "桂",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, h_tu, h_tu]
}
Characters[Characters.length] = {
	char: "档",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, s_guangzitou, z_xunzitou]
}
Characters[Characters.length] = {
	char: "桐",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_mu, s_tongzikuang, heng, s_kou]
}
Characters[Characters.length] = {
	char: "株",
	first: pattern_lr_left_1_right_1,
	later: [h_mu, p_zhu]
}
Characters[Characters.length] = {
	char: "桥",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, p_yao, p_dao]
}
Characters[Characters.length] = {
	char: "桃",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, p_zhaozizuo, z_zhaoziyou]
}
Characters[Characters.length] = {
	char: "格",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, p_zhewen, s_kou]
}
Characters[Characters.length] = {
	char: "校",
	first: pattern_lr_left_1_right_1,
	later: [h_mu, d_jiao]
}
Characters[Characters.length] = {
	char: "核",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, d_haizitou, p_ren]
}
Characters[Characters.length] = {
	char: "样",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, d_lanzitou, h_yangzishen]
}
Characters[Characters.length] = {
	char: "根",
	first: pattern_lr_left_1_right_1,
	later: [h_mu, z_henziyou]
}
Characters[Characters.length] = {
	char: "索",
	first: pattern_ud_up_middle_down,
	later: [h_ten, d_tubaogai, z_youzipang, z_xiao]
}
Characters[Characters.length] = {
	char: "哥",
	first: pattern_ud_up_wei_2_down_wei_2,
	later: [h_dingwugou, s_kou, h_ding, s_kou]
}
Characters[Characters.length] = {
	char: "速",
	first: pattern_round_left_down,
	later: [h_shufu, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "逗",
	first: pattern_round_left_down,
	later: [heng, s_kou, d_qianzitou, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "栗",
	first: pattern_ud_up_1_down_1,
	later: [h_xiwuzhe, h_mu]
}
Characters[Characters.length] = {
	char: "配",
	first: pattern_lr_left_1_right_1,
	later: [h_youxin, z_ji]
}
Characters[Characters.length] = {
	char: "翅",
	first: pattern_round_left_down,
	later: [h_ten, z_you, z_xi, z_xi]
}
Characters[Characters.length] = {
	char: "辱",
	first: pattern_round_left_up,
	later: [h_chang, h_two, z_sangzidi, h_cun]
}
Characters[Characters.length] = {
	char: "唇",
	first: pattern_round_left_up,
	later: [h_chang, h_two, z_sangzidi, s_kou]
}
Characters[Characters.length] = {
	char: "夏",
	first: pattern_ud_up_shu_2_down_1,
	later: [h_hengxiapie, s_mu, p_zhewen]
}
Characters[Characters.length] = {
	char: "础",
	first: pattern_lr_left_1_right_1,
	later: [h_stone, z_chu]
}
Characters[Characters.length] = {
	char: "破",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_stone, p_pizipang, z_you]
}
Characters[Characters.length] = {
	char: "原",
	first: pattern_round_left_up,
	later: [h_chang, p_bai, z_xiao]
}
Characters[Characters.length] = {
	char: "套",
	first: pattern_ud_up_1_down_1,
	later: [h_da, h_sizizuo]
}
Characters[Characters.length] = {
	char: "逐",
	first: pattern_round_left_down,
	later: [h_zhizhu, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "烈",
	first: pattern_ud_up_heng_2_down_1,
	later: [h_dai, s_lidaopang, d_sidiandi]
}
Characters[Characters.length] = {
	char: "殊",
	first: pattern_lr_left_1_right_1,
	later: [h_dai, p_zhu]
}
Characters[Characters.length] = {
	char: "顾",
	first: pattern_lr_left_wei_2_right_1,
	later: [h_chang, z_eti, h_ye]
}
Characters[Characters.length] = {
	char: "轿",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_che, p_yao, p_dao]
}
Characters[Characters.length] = {
	char: "较",
	first: pattern_lr_left_1_right_1,
	later: [h_che, d_jiao]
}
Characters[Characters.length] = {
	char: "顿",
	first: pattern_lr_left_1_right_1,
	later: [h_tun, h_ye]
}
Characters[Characters.length] = {
	char: "毙",
	first: pattern_ud_up_heng_2_down_shu_2,
	later: [h_bizizuo, p_bi, h_dai, p_bi]
}
Characters[Characters.length] = {
	char: "致",
	first: pattern_lr_left_shu_2_right_1,
	later: [h_zhizitou, h_tu, p_fanwenpang]
}
Characters[Characters.length] = {
	char: "柴",
	first: pattern_ud_up_heng_2_down_1,
	later: [s_zhi, p_bi, h_mu]
}
Characters[Characters.length] = {
	char: "桌",
	first: pattern_ud_up_middle_down,
	later: [s_shangzitou, s_ri, h_mu]
}
Characters[Characters.length] = {
	char: "虑",
	first: pattern_round_left_up,
	later: [s_huzipang, h_seven, d_xin]
}
Characters[Characters.length] = {
	char: "监",
	first: pattern_ud_up_heng_2_down_1,
	later: [s_liangshu, p_zhutouban, s_minzidi]
}
Characters[Characters.length] = {
	char: "紧",
	first: pattern_ud_up_heng_2_down_shu_2,
	later: [s_liangshu, z_you, z_youzipang, z_xiao]
}
Characters[Characters.length] = {
	char: "党",
	first: pattern_ud_up_middle_down,
	later: [s_guangzitou, d_tubaogai, s_kou, p_er]
}
Characters[Characters.length] = {
	char: "晒",
	first: pattern_lr_left_1_right_1,
	later: [s_ri, h_xi]
}
Characters[Characters.length] = {
	char: "眠",
	first: pattern_lr_left_1_right_1,
	later: [s_mu, z_min]
}
Characters[Characters.length] = {
	char: "晓",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_ri, h_gewudian, h_wuzidi]
}
Characters[Characters.length] = {
	char: "鸭",
	first: pattern_lr_left_1_right_1,
	later: [s_jia, p_niao]
}
Characters[Characters.length] = {
	char: "晃",
	first: pattern_ud_up_1_down_shu_2,
	later: [s_ri, s_guangzitou, h_wuzidi]
}
Characters[Characters.length] = {
	char: "晌",
	first: pattern_lr_left_1_right_wei_2,
	later: [s_ri, p_xiangzikuang, s_kou]
}
Characters[Characters.length] = {
	char: "晕",
	first: pattern_ud_up_middle_down,
	later: [s_ri, d_tubaogai, h_che]
}
Characters[Characters.length] = {
	char: "蚊",
	first: pattern_lr_left_1_right_1,
	later: [s_chong, d_wen]
}
Characters[Characters.length] = {
	char: "哨",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_kou, s_guangzitou, p_yue]
}
Characters[Characters.length] = {
	char: "哭",
	first: pattern_ud_up_heng_2_down_1,
	later: [s_kou, s_kou, h_quan]
}
Characters[Characters.length] = {
	char: "恩",
	first: pattern_ud_up_wei_2_down_1,
	later: [s_kou, h_da, d_xin]
}
Characters[Characters.length] = {
	char: "唤",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_kou, p_weizitou, s_yangwutou]
}
Characters[Characters.length] = {
	char: "啊",
	first: pattern_lr_left_1_right_heng_2,
	later: [s_kou, z_zuoerpang, h_ding, s_kou]
}
Characters[Characters.length] = {
	char: "唉",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_kou, z_sigong, p_shi]
}
Characters[Characters.length] = {
	char: "罢",
	first: pattern_ud_up_1_down_shu_2,
	later: [s_siwuzhe, h_tu, z_sigong]
}
Characters[Characters.length] = {
	char: "峰",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_shan, p_zhewen, h_feng]
}
Characters[Characters.length] = {
	char: "圆",
	first: pattern_round_whole,
	later: [s_kou, s_kou, s_bei]
}
Characters[Characters.length] = {
	char: "贼",
	first: pattern_lr_left_1_right_wei_2,
	later: [s_bei, h_ge, h_hengpie]
}
Characters[Characters.length] = {
	char: "贿",
	first: pattern_lr_left_1_right_wei_2,
	later: [s_bei, h_hengpie, p_yue]
}
Characters[Characters.length] = {
	char: "钱",
	first: pattern_lr_left_1_right_1,
	later: [p_jinzipang, h_zhan]
}
Characters[Characters.length] = {
	char: "钳",
	first: pattern_lr_left_1_right_1,
	later: [p_jinzipang, h_ganku]
}
Characters[Characters.length] = {
	char: "钻",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_jinzipang, s_shangzitou, s_kou]
}
Characters[Characters.length] = {
	char: "铁",
	first: pattern_lr_left_1_right_1,
	later: [p_jinzipang, p_shiqu]
}
Characters[Characters.length] = {
	char: "铃",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_jinzipang, p_ren, d_lingzidi]
}
Characters[Characters.length] = {
	char: "铅",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_jinzipang, p_ji, s_kou]
}
Characters[Characters.length] = {
	char: "缺",
	first: pattern_lr_left_1_right_1,
	later: [p_gangwa, z_jueziyou]
}
Characters[Characters.length] = {
	char: "氧",
	first: pattern_round_right_up,
	later: [p_qi, d_lanzitou, h_yangzishen]
}
Characters[Characters.length] = {
	char: "特",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_niu, h_tu, h_cun]
}
Characters[Characters.length] = {
	char: "牺",
	first: pattern_lr_left_1_right_1,
	later: [p_niu, h_xi]
}
Characters[Characters.length] = {
	char: "造",
	first: pattern_round_left_down,
	later: [p_niuwuwei, s_kou, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "乘",
	first: pattern_round_left_right,
	later: [p_he, s_beizizuo, p_bi]
}
Characters[Characters.length] = {
	char: "敌",
	first: pattern_lr_left_shu_2_right_1,
	later: [p_thousand, s_kou, p_fanwenpang]
}
Characters[Characters.length] = {
	char: "秤",
	first: pattern_lr_left_1_right_1,
	later: [p_he, h_ping]
}
Characters[Characters.length] = {
	char: "租",
	first: pattern_lr_left_1_right_1,
	later: [p_he, s_qie]
}
Characters[Characters.length] = {
	char: "积",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_he, s_kou, p_eightdian]
}
Characters[Characters.length] = {
	char: "秧",
	first: pattern_lr_left_1_right_1,
	later: [p_he, s_yang]
}
Characters[Characters.length] = {
	char: "秩",
	first: pattern_lr_left_1_right_1,
	later: [p_he, p_shiqu]
}
Characters[Characters.length] = {
	char: "称",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_he, p_qianzitou, z_xiao]
}
Characters[Characters.length] = {
	char: "秘",
	first: pattern_lr_left_1_right_1,
	later: [p_he, d_bi]
}
Characters[Characters.length] = {
	char: "透",
	first: pattern_round_left_down,
	later: [p_he, z_nai, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "笔",
	first: pattern_ud_up_1_down_1,
	later: [p_zhuzitou, p_mao]
}
Characters[Characters.length] = {
	char: "笑",
	first: pattern_ud_up_1_down_1,
	later: [p_zhuzitou, p_yao]
}
Characters[Characters.length] = {
	char: "笋",
	first: pattern_ud_up_1_down_1,
	later: [p_zhuzitou, z_yin]
}
Characters[Characters.length] = {
	char: "债",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, h_qingzitou, s_bei]
}
Characters[Characters.length] = {
	char: "借",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, h_gongzitou, s_ri]
}
Characters[Characters.length] = {
	char: "值",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, h_ten, s_juzitou]
}
Characters[Characters.length] = {
	char: "倚",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, h_da, h_ding, s_kou]
}
Characters[Characters.length] = {
	char: "倾",
	first: pattern_lr_left_1_right_heng_2,
	later: [p_danrenpang, h_bizizuo, h_ye]
}
Characters[Characters.length] = {
	char: "倒",
	first: pattern_lr_left_1_right_heng_2,
	later: [p_danrenpang, h_zhizitou, h_tu, s_lidaopang]
}
Characters[Characters.length] = {
	char: "倘",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, s_guangzitou, s_tongzikuang, s_kou]
}
Characters[Characters.length] = {
	char: "俱",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, s_juzitou, p_eightdian]
}
Characters[Characters.length] = {
	char: "倡",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, s_ri, s_ri]
}
Characters[Characters.length] = {
	char: "候",
	first: pattern_lr_left_heng_2_right_shu_2,
	later: [p_danrenpang, shu, z_houzitou, p_shi]
}
Characters[Characters.length] = {
	char: "俯",
	first: pattern_lr_left_1_right_wei_2,
	later: [p_danrenpang, d_guang, p_danrenpang, h_cun]
}
Characters[Characters.length] = {
	char: "倍",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, d_li, s_kou]
}
Characters[Characters.length] = {
	char: "倦",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, d_juanzitou, z_cangzidi]
}
Characters[Characters.length] = {
	char: "健",
	first: pattern_lr_left_1_right_wei_2,
	later: [p_danrenpang, z_yuming, z_jianzidi]
}
Characters[Characters.length] = {
	char: "臭",
	first: pattern_ud_up_1_down_1,
	later: [p_zi, h_quan]
}
Characters[Characters.length] = {
	char: "射",
	first: pattern_lr_left_1_right_1,
	later: [p_shen, h_cun]
}
Characters[Characters.length] = {
	char: "躬",
	first: pattern_lr_left_1_right_1,
	later: [p_shen, z_gong]
}
Characters[Characters.length] = {
	char: "息",
	first: pattern_ud_up_1_down_1,
	later: [p_zi, d_xin]
}
Characters[Characters.length] = {
	char: "徒",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_shuangrenpang, h_tu, s_zouzidi]
}
Characters[Characters.length] = {
	char: "徐",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_shuangrenpang, p_ren, h_yuzidi]
}
Characters[Characters.length] = {
	char: "舰",
	first: pattern_lr_left_1_right_1,
	later: [p_zhou, s_jian]
}
Characters[Characters.length] = {
	char: "舱",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_zhou, p_ren, z_cangzidi]
}
Characters[Characters.length] = {
	char: "般",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_zhou, p_ji, z_you]
}
Characters[Characters.length] = {
	char: "航",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_zhou, d_liuzitou, p_ji]
}
Characters[Characters.length] = {
	char: "途",
	first: pattern_round_left_down,
	later: [p_ren, h_yuzidi, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "拿",
	first: pattern_ud_up_shu_2_down_1,
	later: [p_ren, heng, s_kou, p_shou]
}
Characters[Characters.length] = {
	char: "爹",
	first: pattern_ud_up_1_down_shu_2,
	later: [p_fu, p_xi, p_xi]
}
Characters[Characters.length] = {
	char: "爱",
	first: pattern_ud_up_middle_down,
	later: [p_caizitou, d_tubaogai, h_hengpie, z_you]
}
Characters[Characters.length] = {
	char: "颂",
	first: pattern_lr_left_shu_2_right_1,
	later: [p_ren, z_sigong, h_ye]
}
Characters[Characters.length] = {
	char: "翁",
	first: pattern_ud_up_shu_2_down_heng_2,
	later: [p_ren, z_sigong, p_xi, p_xi]
}
Characters[Characters.length] = {
	char: "脆",
	first: pattern_lr_left_1_right_wei_2,
	later: [p_yue, p_weizitou, h_chang, z_cangzidi]
}
Characters[Characters.length] = {
	char: "脂",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_yue, p_bi, s_ri]
}
Characters[Characters.length] = {
	char: "胸",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_yue, p_baozitou, p_chadian, z_xiongzikuang]
}
Characters[Characters.length] = {
	char: "胳",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_yue, p_zhewen, s_kou]
}
Characters[Characters.length] = {
	char: "脏",
	first: pattern_lr_left_1_right_wei_2,
	later: [p_yue, d_guang, h_tu]
}
Characters[Characters.length] = {
	char: "胶",
	first: pattern_lr_left_1_right_1,
	later: [p_yue, d_jiao]
}
Characters[Characters.length] = {
	char: "脑",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_yue, d_liuzitou, p_chadian, z_xiongzikuang]
}
Characters[Characters.length] = {
	char: "狸",
	first: pattern_lr_left_1_right_1,
	later: [p_fanquanpang, s_li]
}
Characters[Characters.length] = {
	char: "狼",
	first: pattern_lr_left_1_right_1,
	later: [p_fanquanpang, d_liang]
}
Characters[Characters.length] = {
	char: "逢",
	first: pattern_round_left_down,
	later: [p_zhewen, h_feng, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "留",
	first: pattern_ud_up_heng_2_down_1,
	later: [p_maoshangzuo, z_dao, s_tian]
}
Characters[Characters.length] = {
	char: "皱",
	first: pattern_lr_left_shu_2_right_shu_2,
	later: [p_weizitou, z_xunzitou, p_pizipang, z_you]
}
Characters[Characters.length] = {
	char: "饿",
	first: pattern_lr_left_1_right_1,
	later: [p_shichi, p_wo]
}
Characters[Characters.length] = {
	char: "恋",
	first: pattern_ud_up_1_down_1,
	later: [d_bianzitou, d_xin]
}
Characters[Characters.length] = {
	char: "桨",
	first: pattern_ud_up_heng_2_down_1,
	later: [d_jiangzipang, p_xi, h_mu]
}
Characters[Characters.length] = {
	char: "浆",
	first: pattern_ud_up_heng_2_down_1,
	later: [d_jiangzipang, p_xi, z_shui]
}
Characters[Characters.length] = {
	char: "衰",
	first: pattern_ud_up_middle_down,
	later: [d_liuzitou, s_hguankou, p_yizidi]
}
Characters[Characters.length] = {
	char: "高",
	first: pattern_ud_up_middle_down,
	later: [d_liuzitou, s_kou, s_tongzikuang, s_kou]
}
Characters[Characters.length] = {
	char: "席",
	first: pattern_round_left_up,
	later: [d_guang, h_caoheng, s_jin]
}
Characters[Characters.length] = {
	char: "准",
	first: pattern_lr_left_1_right_1,
	later: [d_liangdianshui, p_quezipang]
}
Characters[Characters.length] = {
	char: "座",
	first: pattern_round_left_up,
	later: [d_guang, p_ren, p_ren, h_tu]
}
Characters[Characters.length] = {
	char: "脊",
	first: pattern_ud_up_1_down_1,
	later: [d_liangdianshui, p_piedian, p_ren, p_yue]
}
Characters[Characters.length] = {
	char: "症",
	first: pattern_round_left_up,
	later: [d_bingzitou, h_zheng]
}
Characters[Characters.length] = {
	char: "病",
	first: pattern_round_left_up,
	later: [d_bingzitou, h_bing]
}
Characters[Characters.length] = {
	char: "疾",
	first: pattern_round_left_up,
	later: [d_bingzitou, p_shi]
}
Characters[Characters.length] = {
	char: "疼",
	first: pattern_round_left_up,
	later: [d_bingzitou, p_zhewen, d_ldsl]
}
Characters[Characters.length] = {
	char: "疲",
	first: pattern_round_left_up,
	later: [d_bingzitou, p_pizipang, z_you]
}
Characters[Characters.length] = {
	char: "效",
	first: pattern_lr_left_1_right_1,
	later: [d_jiao, p_fanwenpang]
}
Characters[Characters.length] = {
	char: "离",
	first: pattern_ud_up_shu_2_down_wei_2,
	later: [d_liuzitou, p_chadian, z_xiongzikuang, s_tongzikuang, z_sigong]
}
Characters[Characters.length] = {
	char: "唐",
	first: pattern_round_left_up,
	later: [d_guang, z_tangzili, s_kou]
}
Characters[Characters.length] = {
	char: "资",
	first: pattern_ud_up_heng_2_down_1,
	later: [d_liangdianshui, p_qianzitou, p_ren, s_bei]
}
Characters[Characters.length] = {
	char: "凉",
	first: pattern_lr_left_1_right_shu_many,
	later: [d_liangdianshui, d_liuzitou, s_kou, z_xiao]
}
Characters[Characters.length] = {
	char: "站",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_li, s_shangzitou, s_kou]
}
Characters[Characters.length] = {
	char: "剖",
	first: pattern_lr_left_shu_2_right_1,
	later: [d_li, s_kou, s_lidaopang]
}
Characters[Characters.length] = {
	char: "竞",
	first: pattern_ud_up_middle_down,
	later: [d_li, s_kou, p_er]
}
Characters[Characters.length] = {
	char: "部",
	first: pattern_lr_left_shu_2_right_1,
	later: [d_li, s_kou, z_youerpang]
}
Characters[Characters.length] = {
	char: "旁",
	first: pattern_ud_up_middle_down,
	later: [d_shangzitou, d_tubaogai, d_fang]
}
Characters[Characters.length] = {
	char: "旅",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_fang, p_pieheng, p_paiyouli]
}
Characters[Characters.length] = {
	char: "畜",
	first: pattern_ud_up_shu_2_down_1,
	later: [d_liuzitou, z_youzipang, s_tian]
}
Characters[Characters.length] = {
	char: "阅",
	first: pattern_round_up,
	later: [d_men, d_lanzitou, s_kou, p_er]
}
Characters[Characters.length] = {
	char: "羞",
	first: pattern_ud_up_1_down_wei_2,
	later: [d_lanzitou, h_pieyangdi, z_chou]
}
Characters[Characters.length] = {
	char: "瓶",
	first: pattern_lr_left_shu_2_right_1,
	later: [d_lanzitou, h_kai, h_wa]
}
Characters[Characters.length] = {
	char: "拳",
	first: pattern_ud_up_1_down_1,
	later: [d_juanzitou, p_shou]
}
Characters[Characters.length] = {
	char: "粉",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_mi, p_eight, z_dao]
}
Characters[Characters.length] = {
	char: "料",
	first: pattern_lr_left_1_right_1,
	later: [d_mi, d_dou]
}
Characters[Characters.length] = {
	char: "益",
	first: pattern_ud_up_1_down_1,
	later: [d_yizitou, s_minzidi]
}
Characters[Characters.length] = {
	char: "兼",
	first: pattern_ud_up_1_down_1,
	later: [d_lanzitou, h_jianzishen]
}
Characters[Characters.length] = {
	char: "烤",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_huo, h_laozitou, h_qiaoziyou]
}
Characters[Characters.length] = {
	char: "烘",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_huo, h_gongzitou, p_eightdian]
}
Characters[Characters.length] = {
	char: "烦",
	first: pattern_lr_left_1_right_1,
	later: [d_huo, h_ye]
}
Characters[Characters.length] = {
	char: "烧",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_huo, h_gewudian, h_wuzidi]
}
Characters[Characters.length] = {
	char: "烛",
	first: pattern_lr_left_1_right_1,
	later: [d_huo, s_chong]
}
Characters[Characters.length] = {
	char: "烟",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_huo, s_kou, h_da]
}
Characters[Characters.length] = {
	char: "递",
	first: pattern_round_left_down,
	later: [d_lanzitou, z_dizidi, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "涛",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_sandianshui, h_piefeng, h_cun]
}
Characters[Characters.length] = {
	char: "浙",
	first: pattern_lr_left_1_right_heng_2,
	later: [d_sandianshui, h_tishoupang, p_jin]
}
Characters[Characters.length] = {
	char: "涝",
	first: pattern_lr_left_1_right_shu_many,
	later: [d_sandianshui, h_caozitou, d_tubaogai, z_li]
}
Characters[Characters.length] = {
	char: "酒",
	first: pattern_lr_left_1_right_1,
	later: [d_sandianshui, h_youxin]
}
Characters[Characters.length] = {
	char: "涉",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, s_zhi, s_shaowud]
}
Characters[Characters.length] = {
	char: "消",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, s_guangzitou, p_yue]
}
Characters[Characters.length] = {
	char: "浩",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, p_niuwuwei, s_kou]
}
Characters[Characters.length] = {
	char: "海",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, p_pieheng, z_mu]
}
Characters[Characters.length] = {
	char: "涂",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, p_ren, h_yuzidi]
}
Characters[Characters.length] = {
	char: "浴",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, p_eightdian, p_ren, s_kou]
}
Characters[Characters.length] = {
	char: "浮",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, p_caizitou, z_zi]
}
Characters[Characters.length] = {
	char: "流",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, d_chongzitou, p_liuzidi]
}
Characters[Characters.length] = {
	char: "润",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_sandianshui, d_men, h_wang]
}
Characters[Characters.length] = {
	char: "浪",
	first: pattern_lr_left_1_right_1,
	later: [d_sandianshui, d_liang]
}
Characters[Characters.length] = {
	char: "浸",
	first: pattern_lr_left_1_right_shu_many,
	later: [d_sandianshui, z_xunzitou, d_tubaogai, z_you]
}
Characters[Characters.length] = {
	char: "涨",
	first: pattern_lr_left_1_right_heng_2,
	later: [d_sandianshui, z_gong, p_chang]
}
Characters[Characters.length] = {
	char: "烫",
	first: pattern_ud_up_heng_2_down_1,
	later: [d_sandianshui, z_yangziyou, d_huo]
}
Characters[Characters.length] = {
	char: "涌",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, z_yongzitou, p_yong]
}
Characters[Characters.length] = {
	char: "悟",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_shuxinpang, h_five, s_kou]
}
Characters[Characters.length] = {
	char: "悄",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_shuxinpang, s_guangzitou, p_yue]
}
Characters[Characters.length] = {
	char: "悔",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_shuxinpang, p_pieheng, z_mu]
}
Characters[Characters.length] = {
	char: "悦",
	first: pattern_lr_left_1_right_shu_many,
	later: [d_shuxinpang, d_lanzitou, s_kou, p_er]
}
Characters[Characters.length] = {
	char: "害",
	first: pattern_ud_up_1_down_shu_2,
	later: [d_baogaitou, h_feng, s_kou]
}
Characters[Characters.length] = {
	char: "宽",
	first: pattern_ud_up_1_down_shu_2,
	later: [d_baogaitou, h_caozitou, s_jian]
}
Characters[Characters.length] = {
	char: "家",
	first: pattern_ud_up_1_down_1,
	later: [d_baogaitou, h_zhizhu]
}
Characters[Characters.length] = {
	char: "宵",
	first: pattern_ud_up_1_down_shu_2,
	later: [d_baogaitou, s_guangzitou, p_yue]
}
Characters[Characters.length] = {
	char: "宴",
	first: pattern_ud_up_1_down_shu_2,
	later: [d_baogaitou, s_ri, z_nv]
}
Characters[Characters.length] = {
	char: "宾",
	first: pattern_ud_up_1_down_shu_2,
	later: [d_baogaitou, p_qiu, p_eightdian]
}
Characters[Characters.length] = {
	char: "窄",
	first: pattern_ud_up_1_down_1,
	later: [d_xuezitou, p_zha]
}
Characters[Characters.length] = {
	char: "容",
	first: pattern_ud_up_1_down_shu_2,
	later: [d_baogaitou, p_eightdian, p_ren, s_kou]
}
Characters[Characters.length] = {
	char: "宰",
	first: pattern_ud_up_1_down_shu_2,
	later: [d_baogaitou, d_li, h_ten]
}
Characters[Characters.length] = {
	char: "案",
	first: pattern_ud_up_shu_2_down_1,
	later: [d_baogaitou, z_nv, h_mu]
}
Characters[Characters.length] = {
	char: "请",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_yanzipang, h_qingzitou, p_yue]
}
Characters[Characters.length] = {
	char: "朗",
	first: pattern_lr_left_1_right_1,
	later: [d_langzizuo, p_yue]
}
Characters[Characters.length] = {
	char: "诸",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_yanzipang, h_laozitou, s_ri]
}
Characters[Characters.length] = {
	char: "读",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_yanzipang, h_ten, henggou, d_tou]
}
Characters[Characters.length] = {
	char: "扇",
	first: pattern_round_left_up,
	later: [d_hu, z_xi, z_xi]
}
Characters[Characters.length] = {
	char: "袜",
	first: pattern_lr_left_1_right_1,
	later: [d_buyipang, h_mo]
}
Characters[Characters.length] = {
	char: "袖",
	first: pattern_lr_left_1_right_1,
	later: [d_buyipang, s_you]
}
Characters[Characters.length] = {
	char: "袍",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_buyipang, p_baozitou, z_si]
}
Characters[Characters.length] = {
	char: "被",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_buyipang, p_pizipang, z_you]
}
Characters[Characters.length] = {
	char: "祥",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_buyipang, d_lanzitou, h_yangzishen]
}
Characters[Characters.length] = {
	char: "课",
	first: pattern_lr_left_1_right_1,
	later: [d_yanzipang, s_guo]
}
Characters[Characters.length] = {
	char: "谁",
	first: pattern_lr_left_1_right_1,
	later: [d_yanzipang, p_quezipang]
}
Characters[Characters.length] = {
	char: "调",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_yanzipang, p_zhouzikuang, h_tu, s_kou]
}
Characters[Characters.length] = {
	char: "冤",
	first: pattern_ud_up_1_down_shu_2,
	later: [d_tubaogai, p_weizitou, s_tuzishen]
}
Characters[Characters.length] = {
	char: "谅",
	first: pattern_lr_left_1_right_shu_many,
	later: [d_yanzipang, d_liuzitou, s_kou, z_xiao]
}
Characters[Characters.length] = {
	char: "谈",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_yanzipang, d_huo, d_huo]
}
Characters[Characters.length] = {
	char: "谊",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_yanzipang, d_baogaitou, s_qie]
}
Characters[Characters.length] = {
	char: "剥",
	first: pattern_lr_left_shu_2_right_1,
	later: [z_luzitou, z_dianshui, s_lidaopang]
}
Characters[Characters.length] = {
	char: "恳",
	first: pattern_ud_up_1_down_1,
	later: [z_henziyou, d_xin]
}
Characters[Characters.length] = {
	char: "展",
	first: pattern_round_left_up,
	later: [z_shi, h_gongzitou, z_sangzidi]
}
Characters[Characters.length] = {
	char: "剧",
	first: pattern_lr_left_wei_2_right_1,
	later: [z_shi, h_ten, s_kou, s_lidaopang]
}
Characters[Characters.length] = {
	char: "屑",
	first: pattern_round_left_up,
	later: [z_shi, s_guangzitou, p_yue]
}
Characters[Characters.length] = {
	char: "弱",
	first: pattern_lr_left_wei_2_right_wei_2,
	later: [z_gong, d_liangdianshui, z_gong, d_liangdianshui]
}
Characters[Characters.length] = {
	char: "陵",
	first: pattern_lr_left_1_right_shu_many,
	later: [z_zuoerpang, h_tu, p_eightdian, p_zhewen]
}
Characters[Characters.length] = {
	char: "陶",
	first: pattern_lr_left_1_right_wei_2,
	later: [z_zuoerpang, p_baozitou, p_gangwa]
}
Characters[Characters.length] = {
	char: "陷",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_zuoerpang, p_weizitou, p_jiu]
}
Characters[Characters.length] = {
	char: "陪",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_zuoerpang, d_li, s_kou]
}
Characters[Characters.length] = {
	char: "娱",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_nv, s_kou, h_tian]
}
Characters[Characters.length] = {
	char: "娘",
	first: pattern_lr_left_1_right_1,
	later: [z_nv, d_liang]
}
Characters[Characters.length] = {
	char: "通",
	first: pattern_round_left_down,
	later: [z_yongzitou, p_yong, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "能",
	first: pattern_lr_left_shu_2_right_shu_2,
	later: [z_sigong, p_yue, p_bi, p_bi]
}
Characters[Characters.length] = {
	char: "难",
	first: pattern_lr_left_1_right_1,
	later: [z_you, p_quezipang]
}
Characters[Characters.length] = {
	char: "预",
	first: pattern_lr_left_1_right_1,
	later: [z_yu, h_ye]
}
Characters[Characters.length] = {
	char: "桑",
	first: pattern_ud_up_shu_many_down_1,
	later: [z_you, z_you, z_you, h_mu]
}
Characters[Characters.length] = {
	char: "绢",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_jiaosipang, s_kou, p_yue]
}
Characters[Characters.length] = {
	char: "绣",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_jiaosipang, p_he, z_nai]
}
Characters[Characters.length] = {
	char: "验",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_ma, p_ren, heng, d_yingzidi]
}
Characters[Characters.length] = {
	char: "继",
	first: pattern_lr_left_1_right_wei_2,
	later: [z_jiaosipang, d_mi, shuzheheng]
}

/* 十一画 */
Characters[Characters.length] = {
	char: "球",
	first: pattern_lr_left_1_right_1,
	later: [h_wang, h_qiu]
}
Characters[Characters.length] = {
	char: "理",
	first: pattern_lr_left_1_right_1,
	later: [h_wang, s_li]
}
Characters[Characters.length] = {
	char: "捧",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, h_fengzitou, h_fengzidi]
}
Characters[Characters.length] = {
	char: "堵",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_tu, h_laozitou, s_ri]
}
Characters[Characters.length] = {
	char: "描",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, h_caozitou, s_tian]
}
Characters[Characters.length] = {
	char: "域",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_tu, h_ge, s_kou, heng]
}
Characters[Characters.length] = {
	char: "掩",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, h_da, s_dian]
}
Characters[Characters.length] = {
	char: "捷",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, h_jieziyou]
}
Characters[Characters.length] = {
	char: "排",
	first: pattern_lr_left_1_right_heng_2,
	later: [h_tishoupang, s_feizizuo, s_feiziyou]
}
Characters[Characters.length] = {
	char: "掉",
	first: pattern_lr_left_1_right_shu_many,
	later: [h_tishoupang, s_shangzitou, s_ri, h_ten]
}
Characters[Characters.length] = {
	char: "堆",
	first: pattern_lr_left_1_right_1,
	later: [h_tu, p_quezipang]
}
Characters[Characters.length] = {
	char: "推",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, p_quezipang]
}
Characters[Characters.length] = {
	char: "掀",
	first: pattern_lr_left_1_right_heng_2,
	later: [h_tishoupang, p_jin, p_qianzitou, p_ren]
}
Characters[Characters.length] = {
	char: "授",
	first: pattern_lr_left_1_right_shu_many,
	later: [h_tishoupang, p_caizitou, d_tubaogai, z_you]
}
Characters[Characters.length] = {
	char: "教",
	first: pattern_lr_left_wei_2_right_1,
	later: [h_laozitou, z_zi, p_fanwenpang]
}
Characters[Characters.length] = {
	char: "掏",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_tishoupang, p_baozitou, p_gangwa]
}
Characters[Characters.length] = {
	char: "掠",
	first: pattern_lr_left_1_right_shu_many,
	later: [h_tishoupang, d_liuzitou, s_kou, z_xiao]
}
Characters[Characters.length] = {
	char: "培",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tu, d_li, s_kou]
}
Characters[Characters.length] = {
	char: "接",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, d_li, z_nv]
}
Characters[Characters.length] = {
	char: "控",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, d_xuezitou, h_gong]
}
Characters[Characters.length] = {
	char: "探",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, d_xuezitou, h_mu]
}
Characters[Characters.length] = {
	char: "据",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_tishoupang, z_shi, h_ten, s_kou]
}
Characters[Characters.length] = {
	char: "掘",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_tishoupang, z_shi, z_chu]
}
Characters[Characters.length] = {
	char: "职",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_erduo, s_kou, p_eightdian]
}
Characters[Characters.length] = {
	char: "基",
	first: pattern_ud_up_shu_2_down_1,
	later: [h_qizitou, p_eight, h_tu]
}
Characters[Characters.length] = {
	char: "著",
	first: pattern_ud_up_1_down_wei_2,
	later: [h_caozitou, h_laozitou, s_ri]
}
Characters[Characters.length] = {
	char: "勒",
	first: pattern_lr_left_shu_2_right_1,
	later: [h_caoheng, s_gezidi, z_li]
}
Characters[Characters.length] = {
	char: "黄",
	first: pattern_ud_up_middle_down,
	later: [h_gongzitou, s_you, p_eightdian]
}
Characters[Characters.length] = {
	char: "萌",
	first: pattern_ud_up_1_down_heng_2,
	later: [h_caozitou, s_ri, p_yue]
}
Characters[Characters.length] = {
	char: "萝",
	first: pattern_ud_up_1_down_shu_2,
	later: [h_caozitou, s_siwuzhe, p_xi]
}
Characters[Characters.length] = {
	char: "菌",
	first: pattern_ud_up_1_down_wei_2,
	later: [h_caozitou, s_kou, p_he]
}
Characters[Characters.length] = {
	char: "菜",
	first: pattern_ud_up_1_down_shu_2,
	later: [h_caozitou, p_caizitou, h_mu]
}
Characters[Characters.length] = {
	char: "萄",
	first: pattern_ud_up_1_down_wei_2,
	later: [h_caozitou, p_baozitou, p_gangwa]
}
Characters[Characters.length] = {
	char: "菊",
	first: pattern_ud_up_1_down_wei_2,
	later: [h_caozitou, p_baozitou, d_mi]
}
Characters[Characters.length] = {
	char: "萍",
	first: pattern_ud_up_1_down_heng_2,
	later: [h_caozitou, d_sandianshui, h_ping]
}
Characters[Characters.length] = {
	char: "菠",
	first: pattern_ud_up_1_down_heng_2,
	later: [h_caozitou, d_sandianshui, p_pizipang, z_you]
}
Characters[Characters.length] = {
	char: "营",
	first: pattern_ud_up_middle_down,
	later: [h_caozitou, d_tubaogai, s_kou, s_kou]
}
Characters[Characters.length] = {
	char: "械",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_mu, h_ge, h_piecao]
}
Characters[Characters.length] = {
	char: "梦",
	first: pattern_ud_up_heng_2_down_1,
	later: [h_mu, h_mu, p_xi]
}
Characters[Characters.length] = {
	char: "梢",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, s_guangzitou, p_yue]
}
Characters[Characters.length] = {
	char: "梅",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, p_pieheng, z_mu]
}
Characters[Characters.length] = {
	char: "检",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, p_ren, heng, d_yingzidi]
}
Characters[Characters.length] = {
	char: "梳",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, d_chongzitou, p_liuzidi]
}
Characters[Characters.length] = {
	char: "梯",
	first: pattern_lr_left_1_right_1,
	later: [h_mu, d_lanzitou, z_dizidi]
}
Characters[Characters.length] = {
	char: "桶",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, z_yongzitou, p_yong]
}
Characters[Characters.length] = {
	char: "救",
	first: pattern_lr_left_1_right_1,
	later: [h_qiu, p_fanwenpang]
}
Characters[Characters.length] = {
	char: "副",
	first: pattern_lr_left_shu_many_right_1,
	later: [heng, s_kou, s_tian, s_lidaopang]
}
Characters[Characters.length] = {
	char: "票",
	first: pattern_ud_up_1_down_shu_2,
	later: [h_xiwuzhe, h_two, z_xiao]
}
Characters[Characters.length] = {
	char: "戚",
	first: pattern_round_up,
	later: [h_xianzikuang, s_shang, z_xiao]
}
Characters[Characters.length] = {
	char: "爽",
	first: pattern_round_left_right,
	later: [h_da, p_chadian, p_chadian, p_chadian, p_chadian]
}
Characters[Characters.length] = {
	char: "聋",
	first: pattern_ud_up_1_down_1,
	later: [h_long, h_erduo]
}
Characters[Characters.length] = {
	char: "袭",
	first: pattern_ud_up_1_down_1,
	later: [h_long, d_yifu]
}
Characters[Characters.length] = {
	char: "盛",
	first: pattern_ud_up_1_down_1,
	later: [h_cheng, s_minzidi]
}
Characters[Characters.length] = {
	char: "雪",
	first: pattern_ud_up_1_down_1,
	later: [h_yushui, z_xunzitou]
}
Characters[Characters.length] = {
	char: "辅",
	first: pattern_lr_left_1_right_1,
	later: [h_che, h_fudu]
}
Characters[Characters.length] = {
	char: "辆",
	first: pattern_lr_left_1_right_1,
	later: [h_che, h_liang]
}
Characters[Characters.length] = {
	char: "虚",
	first: pattern_round_left_up,
	later: [s_huzipang, h_seven, s_ye]
}
Characters[Characters.length] = {
	char: "雀",
	first: pattern_ud_up_1_down_1,
	later: [z_xiao, p_quezipang]
}
Characters[Characters.length] = {
	char: "堂",
	first: pattern_ud_up_middle_down,
	later: [s_guangzitou, d_tubaogai, s_kou, h_tu]
}
Characters[Characters.length] = {
	char: "常",
	first: pattern_ud_up_middle_down,
	later: [s_guangzitou, d_tubaogai, s_kou, s_jin]
}
Characters[Characters.length] = {
	char: "匙",
	first: pattern_round_left_down,
	later: [s_ri, h_shizidi, p_bi]
}
Characters[Characters.length] = {
	char: "晨",
	first: pattern_ud_up_1_down_wei_2,
	later: [s_ri, h_chang, h_two, z_sangzidi]
}
Characters[Characters.length] = {
	char: "睁",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_mu, p_weizitou, z_zhengzidi]
}
Characters[Characters.length] = {
	char: "眯",
	first: pattern_lr_left_1_right_1,
	later: [s_mu, d_mi]
}
Characters[Characters.length] = {
	char: "眼",
	first: pattern_lr_left_1_right_1,
	later: [s_mu, z_henziyou]
}
Characters[Characters.length] = {
	char: "悬",
	first: pattern_ud_up_shu_2_down_1,
	later: [s_qie, z_sigong, d_xin]
}
Characters[Characters.length] = {
	char: "野",
	first: pattern_lr_left_1_right_1,
	later: [s_li, z_yu]
}
Characters[Characters.length] = {
	char: "啦",
	first: pattern_lr_left_1_right_heng_2,
	later: [s_kou, h_tishoupang, d_li]
}
Characters[Characters.length] = {
	char: "晚",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_ri, p_weizitou, s_mianzishen]
}
Characters[Characters.length] = {
	char: "啄",
	first: pattern_lr_left_1_right_1,
	later: [s_kou, h_zhuoziyou]
}
Characters[Characters.length] = {
	char: "距",
	first: pattern_lr_left_1_right_1,
	later: [s_zuzipang, h_ju]
}
Characters[Characters.length] = {
	char: "跃",
	first: pattern_lr_left_1_right_1,
	later: [s_zuzipang, p_yao]
}
Characters[Characters.length] = {
	char: "略",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_tian, p_zhewen, s_kou]
}
Characters[Characters.length] = {
	char: "蛇",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_chong, d_baogaitou, p_bi]
}
Characters[Characters.length] = {
	char: "累",
	first: pattern_ud_up_1_down_shu_2,
	later: [s_tian, z_youzipang, z_xiao]
}
Characters[Characters.length] = {
	char: "唱",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_kou, s_ri, s_ri]
}
Characters[Characters.length] = {
	char: "患",
	first: pattern_ud_up_1_down_1,
	later: [s_chuan, d_xin]
}
Characters[Characters.length] = {
	char: "唯",
	first: pattern_lr_left_1_right_1,
	later: [s_kou, p_quezipang]
}
Characters[Characters.length] = {
	char: "崖",
	first: pattern_ud_up_1_down_wei_2,
	later: [s_shan, h_chang, h_tu, h_tu]
}
Characters[Characters.length] = {
	char: "崭",
	first: pattern_ud_up_1_down_heng_2,
	later: [s_shan, h_che, p_jin]
}
Characters[Characters.length] = {
	char: "崇",
	first: pattern_ud_up_1_down_shu_2,
	later: [s_shan, d_baogaitou, h_two, z_xiao]
}
Characters[Characters.length] = {
	char: "圈",
	first: pattern_round_whole,
	later: [s_kou, d_juanzitou, z_cangzidi]
}
Characters[Characters.length] = {
	char: "铜",
	first: pattern_lr_left_1_right_wei_2,
	later: [p_jinzipang, s_tongzikuang, heng, s_kou]
}
Characters[Characters.length] = {
	char: "铲",
	first: pattern_lr_left_1_right_1,
	later: [p_jinzipang, d_chan]
}
Characters[Characters.length] = {
	char: "银",
	first: pattern_lr_left_1_right_1,
	later: [p_jinzipang, z_henziyou]
}
Characters[Characters.length] = {
	char: "甜",
	first: pattern_lr_left_shu_2_right_1,
	later: [p_thousand, s_kou, h_ganku]
}
Characters[Characters.length] = {
	char: "梨",
	first: pattern_ud_up_heng_2_down_1,
	later: [p_he, s_lidaopang, h_mu]
}
Characters[Characters.length] = {
	char: "犁",
	first: pattern_ud_up_heng_2_down_1,
	later: [p_he, s_lidaopang, p_niu]
}
Characters[Characters.length] = {
	char: "移",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_he, p_xi, p_xi]
}
Characters[Characters.length] = {
	char: "笨",
	first: pattern_ud_up_1_down_1,
	later: [p_zhuzitou, h_ben]
}
Characters[Characters.length] = {
	char: "笼",
	first: pattern_ud_up_1_down_1,
	later: [p_zhuzitou, h_long]
}
Characters[Characters.length] = {
	char: "笛",
	first: pattern_ud_up_1_down_1,
	later: [p_zhuzitou, s_you]
}
Characters[Characters.length] = {
	char: "符",
	first: pattern_ud_up_1_down_heng_2,
	later: [p_zhuzitou, p_danrenpang, h_cun]
}
Characters[Characters.length] = {
	char: "第",
	first: pattern_ud_up_1_down_1,
	later: [p_zhuzitou, z_dizidi]
}
Characters[Characters.length] = {
	char: "敏",
	first: pattern_lr_left_shu_2_right_1,
	later: [p_pieheng, z_mu, p_fanwenpang]
}
Characters[Characters.length] = {
	char: "做",
	first: pattern_lr_left_1_right_heng_2,
	later: [p_danrenpang, h_ten, s_kou, p_fanwenpang]
}
Characters[Characters.length] = {
	char: "袋",
	first: pattern_ud_up_heng_2_down_1,
	later: [p_danrenpang, h_shizikuang, d_yifu]
}
Characters[Characters.length] = {
	char: "悠",
	first: pattern_ud_up_heng_2_down_1,
	later: [p_danrenpang, shu, p_fanwenpang, d_xin]
}
Characters[Characters.length] = {
	char: "偿",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, s_guangzitou, d_tubaogai, h_two, z_sigong]
}
Characters[Characters.length] = {
	char: "偶",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, s_yu]
}
Characters[Characters.length] = {
	char: "偷",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, p_ren, heng, p_yue, s_lidaopang]
}
Characters[Characters.length] = {
	char: "您",
	first: pattern_ud_up_heng_2_down_1,
	later: [p_danrenpang, p_qianzitou, z_xiao, d_xin]
}
Characters[Characters.length] = {
	char: "售",
	first: pattern_ud_up_1_down_1,
	later: [p_quezipang, s_kou]
}
Characters[Characters.length] = {
	char: "停",
	first: pattern_lr_left_1_right_shu_many,
	later: [p_danrenpang, d_liuzitou, s_kou, d_tubaogai, h_ding]
}
Characters[Characters.length] = {
	char: "偏",
	first: pattern_lr_left_1_right_wei_2,
	later: [p_danrenpang, d_hu, s_bianzili]
}
Characters[Characters.length] = {
	char: "假",
	first: pattern_lr_left_1_right_heng_2,
	later: [p_danrenpang, z_jiazizuo, z_zuokai, z_you]
}
Characters[Characters.length] = {
	char: "得",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_shuangrenpang, s_ri, h_hengcun]
}
Characters[Characters.length] = {
	char: "衔",
	first: pattern_lr_left_middle_right,
	later: [p_shuangrenpang, p_jinzipang, h_xingziyou]
}
Characters[Characters.length] = {
	char: "盘",
	first: pattern_ud_up_1_down_1,
	later: [p_zhou, s_minzidi]
}
Characters[Characters.length] = {
	char: "船",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_zhou, p_ji, s_kou]
}
Characters[Characters.length] = {
	char: "斜",
	first: pattern_lr_left_shu_2_right_1,
	later: [p_ren, h_yuzidi, d_dou]
}
Characters[Characters.length] = {
	char: "盒",
	first: pattern_ud_up_shu_2_down_1,
	later: [p_ren, heng, s_kou, s_minzidi]
}
Characters[Characters.length] = {
	char: "鸽",
	first: pattern_lr_left_shu_2_right_1,
	later: [p_ren, heng, s_kou, p_niao]
}
Characters[Characters.length] = {
	char: "悉",
	first: pattern_ud_up_1_down_1,
	later: [p_fanzitou, d_xin]
}
Characters[Characters.length] = {
	char: "欲",
	first: pattern_lr_left_shu_many_right_shu_many,
	later: [p_eightdian, p_ren, s_kou, p_qianzitou, p_ren]
}
Characters[Characters.length] = {
	char: "彩",
	first: pattern_lr_left_shu_2_right_1,
	later: [p_caizitou, h_mu, p_sanpie]
}
Characters[Characters.length] = {
	char: "领",
	first: pattern_lr_left_shu_2_right_1,
	later: [p_ren, d_lingzidi, h_ye]
}
Characters[Characters.length] = {
	char: "脚",
	first: pattern_lr_left_1_right_heng_2,
	later: [p_yue, h_tu, z_sigong, z_danerpang]
}
Characters[Characters.length] = {
	char: "脖",
	first: pattern_lr_left_1_right_shu_many,
	later: [p_yue, h_ten, d_tubaogai, z_zi]
}
Characters[Characters.length] = {
	char: "脸",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_yue, p_ren, heng, d_yingzidi]
}
Characters[Characters.length] = {
	char: "脱",
	first: pattern_lr_left_1_right_shu_many,
	later: [p_yue, d_lanzitou, s_kou, p_er]
}
Characters[Characters.length] = {
	char: "象",
	first: pattern_ud_up_1_down_1,
	later: [p_weizitou, s_xiangzishen]
}
Characters[Characters.length] = {
	char: "够",
	first: pattern_lr_left_wei_2_right_shu_2,
	later: [p_baozitou, s_kou, p_xi, p_xi]
}
Characters[Characters.length] = {
	char: "猜",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_fanquanpang, h_qingzitou, p_yue]
}
Characters[Characters.length] = {
	char: "猪",
	first: pattern_lr_left_1_right_wei_2,
	later: [p_fanquanpang, h_laozitou, s_ri]
}
Characters[Characters.length] = {
	char: "猎",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_fanquanpang, h_gongzitou, s_ri]
}
Characters[Characters.length] = {
	char: "猫",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_fanquanpang, h_caozitou, s_tian]
}
Characters[Characters.length] = {
	char: "猛",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_fanquanpang, z_zi, s_minzidi]
}
Characters[Characters.length] = {
	char: "馅",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_shichi, p_weizitou, p_jiu]
}
Characters[Characters.length] = {
	char: "馆",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_shichi, d_baogaitou, s_guanzidi]
}
Characters[Characters.length] = {
	char: "凑",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_liangdianshui, h_fengzitou, h_tian]
}
Characters[Characters.length] = {
	char: "减",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_liangdianshui, h_xianzikuang, heng, s_kou]
}
Characters[Characters.length] = {
	char: "毫",
	first: pattern_ud_up_middle_down,
	later: [d_liuzitou, s_kou, d_tubaogai, p_mao]
}
Characters[Characters.length] = {
	char: "麻",
	first: pattern_round_left_up,
	later: [d_guang, h_mu, h_mu]
}
Characters[Characters.length] = {
	char: "痒",
	first: pattern_round_left_up,
	later: [d_bingzitou, d_lanzitou, h_yangzishen]
}
Characters[Characters.length] = {
	char: "痕",
	first: pattern_round_left_up,
	later: [d_bingzitou, z_henziyou]
}
Characters[Characters.length] = {
	char: "廊",
	first: pattern_round_left_up,
	later: [d_guang, d_langzizuo, z_youerpang]
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
	later: [d_guang, z_luzhongsh, h_bizizuo, p_bi]
}
Characters[Characters.length] = {
	char: "盗",
	first: pattern_ud_up_heng_2_down_1,
	later: [d_liangdianshui, p_qianzitou, p_ren, s_minzidi]
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
	first: pattern_ud_up_1_down_wei_2,
	later: [d_shangzitou, s_tongzikuang, p_eightdian, s_kou]
}
Characters[Characters.length] = {
	char: "族",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_fang, p_pieheng, p_shi]
}
Characters[Characters.length] = {
	char: "旋",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_fang, p_pieheng, z_xuanyouxia]
}
Characters[Characters.length] = {
	char: "望",
	first: pattern_ud_up_heng_2_down_1,
	later: [d_wang, p_yue, h_wang]
}
Characters[Characters.length] = {
	char: "率",
	first: pattern_ud_up_middle_down,
	later: [d_liuzitou, d_liangdianshui, z_youzipang, p_piedian]
}
Characters[Characters.length] = {
	char: "着",
	first: pattern_ud_up_1_down_wei_2,
	later: [d_lanzitou, h_pieyangdi, s_mu]
}
Characters[Characters.length] = {
	char: "盖",
	first: pattern_ud_up_shu_2_down_1,
	later: [d_lanzitou, h_wang, s_minzidi]
}
Characters[Characters.length] = {
	char: "粘",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_mi, s_shangzitou, s_kou]
}
Characters[Characters.length] = {
	char: "粗",
	first: pattern_lr_left_1_right_1,
	later: [d_mi, s_qie]
}
Characters[Characters.length] = {
	char: "粒",
	first: pattern_lr_left_1_right_1,
	later: [d_mi, d_li]
}
Characters[Characters.length] = {
	char: "断",
	first: pattern_lr_left_wei_2_right_1,
	later: [d_mi, shuzheheng, p_jin]
}
Characters[Characters.length] = {
	char: "剪",
	first: pattern_ud_up_shu_2_down_1,
	later: [d_qianzitou, p_yue, s_lidaopang, z_dao]
}
Characters[Characters.length] = {
	char: "兽",
	first: pattern_ud_up_shu_2_down_1,
	later: [d_lanzitou, s_tian, heng, s_kou]
}
Characters[Characters.length] = {
	char: "清",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, h_qingzitou, p_yue]
}
Characters[Characters.length] = {
	char: "添",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, h_tian, z_xiaodian]
}
Characters[Characters.length] = {
	char: "淋",
	first: pattern_lr_left_1_right_heng_2,
	later: [d_sandianshui, h_mu, h_mu]
}
Characters[Characters.length] = {
	char: "淹",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, h_da, s_dian]
}
Characters[Characters.length] = {
	char: "渠",
	first: pattern_ud_up_heng_2_down_1,
	later: [d_sandianshui, h_ju, h_mu]
}
Characters[Characters.length] = {
	char: "渐",
	first: pattern_lr_left_1_right_heng_2,
	later: [d_sandianshui, h_che, p_jin]
}
Characters[Characters.length] = {
	char: "混",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, s_ri, h_bizizuo, p_bi]
}
Characters[Characters.length] = {
	char: "渔",
	first: pattern_lr_left_1_right_shu_many,
	later: [d_sandianshui, p_weizitou, s_tian, heng]
}
Characters[Characters.length] = {
	char: "淘",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_sandianshui, p_baozitou, p_gangwa]
}
Characters[Characters.length] = {
	char: "液",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, d_liuzitou, p_danrenpang, p_yedian]
}
Characters[Characters.length] = {
	char: "淡",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, d_huo, d_huo]
}
Characters[Characters.length] = {
	char: "深",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, d_xuezitou, h_mu]
}
Characters[Characters.length] = {
	char: "婆",
	first: pattern_ud_up_heng_2_down_1,
	later: [d_sandianshui, p_pizipang, z_you, z_nv]
}
Characters[Characters.length] = {
	char: "梁",
	first: pattern_ud_up_heng_2_down_1,
	later: [d_sandianshui, z_liangyoush, h_mu]
}
Characters[Characters.length] = {
	char: "渗",
	first: pattern_lr_left_1_right_shu_many,
	later: [d_sandianshui, z_sigong, h_da, p_sanpie]
}
Characters[Characters.length] = {
	char: "情",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_shuxinpang, h_qingzitou, p_yue]
}
Characters[Characters.length] = {
	char: "惜",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_shuxinpang, h_gongzitou, s_ri]
}
Characters[Characters.length] = {
	char: "惭",
	first: pattern_lr_left_1_right_heng_2,
	later: [d_shuxinpang, h_che, p_jin]
}
Characters[Characters.length] = {
	char: "悼",
	first: pattern_lr_left_1_right_shu_many,
	later: [d_shuxinpang, s_shangzitou, s_ri, h_ten]
}
Characters[Characters.length] = {
	char: "惧",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_shuxinpang, s_juzitou, p_eightdian]
}
Characters[Characters.length] = {
	char: "惕",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_shuxinpang, s_ri, p_wuyao]
}
Characters[Characters.length] = {
	char: "惊",
	first: pattern_lr_left_1_right_shu_many,
	later: [d_shuxinpang, d_liuzitou, s_kou, z_xiao]
}
Characters[Characters.length] = {
	char: "惨",
	first: pattern_lr_left_1_right_shu_many,
	later: [d_shuxinpang, z_sigong, h_da, p_sanpie]
}
Characters[Characters.length] = {
	char: "惯",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_shuxinpang, s_guanzitou, s_bei]
}
Characters[Characters.length] = {
	char: "寇",
	first: pattern_ud_up_1_down_wei_2,
	later: [d_baogaitou, h_two, p_er, s_shangzitou, z_you]
}
Characters[Characters.length] = {
	char: "寄",
	first: pattern_ud_up_1_down_shu_2,
	later: [d_baogaitou, h_da, h_ding, s_kou]
}
Characters[Characters.length] = {
	char: "宿",
	first: pattern_ud_up_1_down_heng_2,
	later: [d_baogaitou, p_danrenpang, h_hundred]
}
Characters[Characters.length] = {
	char: "窑",
	first: pattern_ud_up_1_down_1,
	later: [d_xuezitou, p_gangwa]
}
Characters[Characters.length] = {
	char: "密",
	first: pattern_ud_up_middle_down,
	later: [d_baogaitou, d_bi, s_shan]
}
Characters[Characters.length] = {
	char: "谋",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_yanzipang, h_ganku, h_mu]
}
Characters[Characters.length] = {
	char: "谎",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_yanzipang, h_caozitou, d_chongzitou, p_liuzidi]
}
Characters[Characters.length] = {
	char: "祸",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_shizipang, s_kou, s_nei]
}
Characters[Characters.length] = {
	char: "谜",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_yanzipang, d_mi, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "逮",
	first: pattern_round_left_down,
	later: [z_lishu, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "敢",
	first: pattern_lr_left_1_right_1,
	later: [z_ganzizuo, p_fanwenpang]
}
Characters[Characters.length] = {
	char: "屠",
	first: pattern_round_left_up,
	later: [z_shi, h_laozitou, s_ri]
}
Characters[Characters.length] = {
	char: "弹",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_gong, d_lanzitou, s_danzidi]
}
Characters[Characters.length] = {
	char: "随",
	first: pattern_lr_left_1_right_wei_2,
	later: [z_zuoerpang, h_hengpie, p_yue, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "蛋",
	first: pattern_ud_up_1_down_1,
	later: [z_xuanyouxia, s_chong]
}
Characters[Characters.length] = {
	char: "隆",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_zuoerpang, p_zhewen, heng, p_sheng]
}
Characters[Characters.length] = {
	char: "隐",
	first: pattern_lr_left_1_right_shu_many,
	later: [z_zuoerpang, p_weizitou, z_xunzitou, d_xin]
}
Characters[Characters.length] = {
	char: "婚",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_nv, p_shizu, s_ri]
}
Characters[Characters.length] = {
	char: "婶",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_nv, d_baogaitou, s_shen]
}
Characters[Characters.length] = {
	char: "颈",
	first: pattern_lr_left_shu_2_right_1,
	later: [z_jingzitou, h_gong, h_ye]
}
Characters[Characters.length] = {
	char: "绩",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_jiaosipang, h_qingzitou, s_bei]
}
Characters[Characters.length] = {
	char: "绪",
	first: pattern_lr_left_1_right_wei_2,
	later: [z_jiaosipang, h_laozitou, s_ri]
}
Characters[Characters.length] = {
	char: "续",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_jiaosipang, s_shi, henggou, d_tou]
}
Characters[Characters.length] = {
	char: "骑",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_ma, h_da, h_ding, s_kou]
}
Characters[Characters.length] = {
	char: "绳",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_jiaosipang, s_kou, s_dian]
}
Characters[Characters.length] = {
	char: "维",
	first: pattern_lr_left_1_right_1,
	later: [z_jiaosipang, p_quezipang]
}
Characters[Characters.length] = {
	char: "绵",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_jiaosipang, p_bai, s_jin]
}
Characters[Characters.length] = {
	char: "绸",
	first: pattern_lr_left_1_right_wei_2,
	later: [z_jiaosipang, s_tongzikuang, h_tu, s_kou]
}
Characters[Characters.length] = {
	char: "绿",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_jiaosipang, z_luzitou, z_dianshui]
}

/* 十二画 */
Characters[Characters.length] = {
	char: "琴",
	first: pattern_ud_up_heng_2_down_shu_2,
	later: [h_wang, h_wang, p_ren, d_jinzidi]
}
Characters[Characters.length] = {
	char: "斑",
	first: pattern_lr_left_middle_right,
	later: [h_wang, d_wen, h_wang]
}
Characters[Characters.length] = {
	char: "替",
	first: pattern_ud_up_heng_2_down_1,
	later: [h_fu, h_fu, s_ri]
}
Characters[Characters.length] = {
	char: "款",
	first: pattern_lr_left_shu_2_right_shu_2,
	later: [h_shi, h_two, z_xiao, p_qianzitou, p_ren]
}
Characters[Characters.length] = {
	char: "堪",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tu, h_qizitou, p_eightdian, shuzheheng]
}
Characters[Characters.length] = {
	char: "搭",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, h_caozitou, p_ren, heng, s_kou]
}
Characters[Characters.length] = {
	char: "塔",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tu, h_caozitou, p_ren, heng, s_kou]
}
Characters[Characters.length] = {
	char: "越",
	first: pattern_round_left_down,
	later: [h_tu, s_zouzidi, h_yuezili]
}
Characters[Characters.length] = {
	char: "趁",
	first: pattern_round_left_down,
	later: [h_tu, s_zouzidi, p_ren, p_sanpie]
}
Characters[Characters.length] = {
	char: "趋",
	first: pattern_round_left_down,
	later: [h_tu, s_zouzidi, p_weizitou, z_xunzitou]
}
Characters[Characters.length] = {
	char: "超",
	first: pattern_round_left_down,
	later: [h_tu, s_zouzidi, z_dao, s_kou]
}
Characters[Characters.length] = {
	char: "提",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, s_ri, h_shizidi]
}
Characters[Characters.length] = {
	char: "堤",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tu, s_ri, h_shizidi]
}
Characters[Characters.length] = {
	char: "博",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_ten, h_fudu, h_cun]
}
Characters[Characters.length] = {
	char: "揭",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, s_ri, p_baozitou, p_ren, shuzheheng]
}
Characters[Characters.length] = {
	char: "喜",
	first: pattern_ud_up_middle_down,
	later: [h_shi, s_kou, d_qianzitou, s_kou]
}
Characters[Characters.length] = {
	char: "插",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, p_thousand, p_jiu]
}
Characters[Characters.length] = {
	char: "揪",
	first: pattern_lr_left_1_right_heng_2,
	later: [h_tishoupang, p_he, d_huo]
}
Characters[Characters.length] = {
	char: "搜",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, p_souzitou, z_you]
}
Characters[Characters.length] = {
	char: "煮",
	first: pattern_ud_up_wei_2_down_1,
	later: [h_laozitou, s_ri, d_sidiandi]
}
Characters[Characters.length] = {
	char: "援",
	first: pattern_lr_left_1_right_shu_many,
	later: [h_tishoupang, p_caizitou, heng, h_hengpie, z_you]
}
Characters[Characters.length] = {
	char: "裁",
	first: pattern_round_right_up,
	later: [h_zaizikuang, d_yifu]
}
Characters[Characters.length] = {
	char: "搁",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_tishoupang, d_men, p_zhewen, s_kou]
}
Characters[Characters.length] = {
	char: "搂",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, d_mi, z_nv]
}
Characters[Characters.length] = {
	char: "搅",
	first: pattern_lr_left_1_right_shu_many,
	later: [h_tishoupang, d_xingzitou, d_tubaogai, s_jian]
}
Characters[Characters.length] = {
	char: "握",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_tishoupang, z_shi, h_zhizitou, h_tu]
}
Characters[Characters.length] = {
	char: "揉",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, z_mao, h_mu]
}
Characters[Characters.length] = {
	char: "斯",
	first: pattern_lr_left_shu_2_right_1,
	later: [h_qizitou, p_eightdian, p_jin]
}
Characters[Characters.length] = {
	char: "期",
	first: pattern_lr_left_shu_2_right_1,
	later: [h_qizitou, p_eightdian, p_yue]
}
Characters[Characters.length] = {
	char: "欺",
	first: pattern_lr_left_shu_2_right_shu_2,
	later: [h_qizitou, p_eightdian, p_qianzitou, p_ren]
}
Characters[Characters.length] = {
	char: "联",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_erduo, d_lanzitou, h_tian]
}
Characters[Characters.length] = {
	char: "散",
	first: pattern_lr_left_shu_2_right_1,
	later: [h_gongzitou, p_yue, p_fanwenpang]
}
Characters[Characters.length] = {
	char: "惹",
	first: pattern_ud_up_shu_2_down_1,
	later: [h_caozitou, h_hengpie, s_kou, d_xin]
}
Characters[Characters.length] = {
	char: "葬",
	first: pattern_ud_up_middle_down,
	later: [h_caozitou, h_dai, p_bi, h_piecao]
}
Characters[Characters.length] = {
	char: "葛",
	first: pattern_ud_up_1_down_shu_2,
	later: [h_caozitou, s_ri, p_baozitou, p_ren, shuzheheng]
}
Characters[Characters.length] = {
	char: "董",
	first: pattern_ud_up_1_down_1,
	later: [h_caozitou, p_zhong]
}
Characters[Characters.length] = {
	char: "葡",
	first: pattern_ud_up_1_down_wei_2,
	later: [h_caozitou, p_baozitou, h_fudu]
}
Characters[Characters.length] = {
	char: "敬",
	first: pattern_lr_left_shu_2_right_1,
	later: [h_caozitou, p_baozitou, s_kou, p_fanwenpang]
}
Characters[Characters.length] = {
	char: "葱",
	first: pattern_ud_up_middle_down,
	later: [h_caozitou, p_congmang, d_xin]
}
Characters[Characters.length] = {
	char: "落",
	first: pattern_ud_up_1_down_heng_2,
	later: [h_caozitou, d_sandianshui, p_zhewen, s_kou]
}
Characters[Characters.length] = {
	char: "朝",
	first: pattern_lr_left_shu_many_right_1,
	later: [h_ten, s_ri, h_ten, p_yue]
}
Characters[Characters.length] = {
	char: "辜",
	first: pattern_ud_up_shu_2_down_shu_2,
	later: [h_ten, s_kou, d_li, h_ten]
}
Characters[Characters.length] = {
	char: "葵",
	first: pattern_ud_up_1_down_shu_2,
	later: [h_caozitou, z_dengshangzuo, p_dengshangyou, h_tian]
}
Characters[Characters.length] = {
	char: "棒",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, h_fengzitou, h_fengzidi]
}
Characters[Characters.length] = {
	char: "棋",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, h_qizitou, p_eightdian]
}
Characters[Characters.length] = {
	char: "植",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, h_ten, s_juzitou]
}
Characters[Characters.length] = {
	char: "森",
	first: pattern_pin,
	later: [h_mu, h_mu, h_mu]
}
Characters[Characters.length] = {
	char: "椅",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, h_da, h_ding, s_kou]
}
Characters[Characters.length] = {
	char: "椒",
	first: pattern_lr_left_1_right_heng_2,
	later: [h_mu, s_shang, z_xiao, z_you]
}
Characters[Characters.length] = {
	char: "棵",
	first: pattern_lr_left_1_right_1,
	later: [h_mu, s_guo]
}
Characters[Characters.length] = {
	char: "棍",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, s_ri, h_bizizuo, p_bi]
}
Characters[Characters.length] = {
	char: "棉",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, p_bai, s_jin]
}
Characters[Characters.length] = {
	char: "棚",
	first: pattern_lr_left_1_right_heng_2,
	later: [h_mu, p_yue, p_yue]
}
Characters[Characters.length] = {
	char: "棕",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, d_baogaitou, h_two, z_xiao]
}
Characters[Characters.length] = {
	char: "惠",
	first: pattern_ud_up_1_down_1,
	later: [h_huizitou, d_xin]
}
Characters[Characters.length] = {
	char: "惑",
	first: pattern_ud_up_wei_2_down_1,
	later: [h_shi, s_kou, heng, d_xin]
}
Characters[Characters.length] = {
	char: "逼",
	first: pattern_round_left_down,
	later: [heng, s_kou, s_tian, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "厨",
	first: pattern_round_left_up,
	later: [h_chang, heng, s_kou, d_qianzitou, h_cun]
}
Characters[Characters.length] = {
	char: "厦",
	first: pattern_round_left_up,
	later: [h_chang, h_hengxiapie, s_mu, p_zhewen]
}
Characters[Characters.length] = {
	char: "硬",
	first: pattern_lr_left_1_right_1,
	later: [h_stone, h_geng]
}
Characters[Characters.length] = {
	char: "确",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_stone, p_zhewen, p_yong]
}
Characters[Characters.length] = {
	char: "雁",
	first: pattern_round_left_up,
	later: [h_chang, p_danrenpang, p_quezipang]
}
Characters[Characters.length] = {
	char: "殖",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_dai, h_ten, s_juzitou]
}
Characters[Characters.length] = {
	char: "裂",
	first: pattern_ud_up_heng_2_down_1,
	later: [h_dai, s_lidaopang, d_yifu]
}
Characters[Characters.length] = {
	char: "雄",
	first: pattern_lr_left_wei_2_right_1,
	later: [h_hengpie, z_sigong, p_quezipang]
}
Characters[Characters.length] = {
	char: "暂",
	first: pattern_ud_up_heng_2_down_1,
	later: [h_che, p_jin, s_ri]
}
Characters[Characters.length] = {
	char: "雅",
	first: pattern_lr_left_1_right_1,
	later: [h_ya, p_quezipang]
}
Characters[Characters.length] = {
	char: "辈",
	first: pattern_ud_up_heng_2_down_1,
	later: [s_feizizuo, s_feiziyou, h_che]
}
Characters[Characters.length] = {
	char: "悲",
	first: pattern_ud_up_heng_2_down_1,
	later: [s_feizizuo, s_feiziyou, d_xin]
}
Characters[Characters.length] = {
	char: "紫",
	first: pattern_ud_up_heng_2_down_shu_2,
	later: [s_zhi, p_bi, z_youzipang, z_xiao]
}
Characters[Characters.length] = {
	char: "辉",
	first: pattern_lr_left_shu_2_right_shu_2,
	later: [s_guangzitou, h_wuzidi, d_tubaogai, h_che]
}
Characters[Characters.length] = {
	char: "敞",
	first: pattern_lr_left_shu_2_right_1,
	later: [s_guangzitou, s_tongzikuang, s_kou, p_fanwenpang]
}
Characters[Characters.length] = {
	char: "赏",
	first: pattern_ud_up_middle_down,
	later: [s_guangzitou, d_tubaogai, s_kou, s_bei]
}
Characters[Characters.length] = {
	char: "掌",
	first: pattern_ud_up_middle_down,
	later: [s_guangzitou, d_tubaogai, s_kou, p_shou]
}
Characters[Characters.length] = {
	char: "晴",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_ri, h_qingzitou, p_yue]
}
Characters[Characters.length] = {
	char: "暑",
	first: pattern_ud_up_1_down_shu_2,
	later: [s_ri, h_laozitou, s_ri]
}
Characters[Characters.length] = {
	char: "最",
	first: pattern_ud_up_1_down_wei_2,
	later: [s_ri, h_erduo, z_you]
}
Characters[Characters.length] = {
	char: "量",
	first: pattern_ud_up_middle_down,
	later: [s_ri, heng, s_li]
}
Characters[Characters.length] = {
	char: "喷",
	first: pattern_lr_left_1_right_shu_many,
	later: [s_kou, h_ten, h_caozitou, s_bei]
}
Characters[Characters.length] = {
	char: "晶",
	first: pattern_pin,
	later: [s_ri, s_ri, s_ri]
}
Characters[Characters.length] = {
	char: "喇",
	first: pattern_lr_left_1_right_heng_2,
	later: [s_kou, h_shufu, s_lidaopang]
}
Characters[Characters.length] = {
	char: "遇",
	first: pattern_round_left_down,
	later: [s_yu, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "喊",
	first: pattern_lr_left_1_right_wei_2,
	later: [s_kou, h_xianzikuang, heng, s_kou]
}
Characters[Characters.length] = {
	char: "景",
	first: pattern_ud_up_1_down_shu_many,
	later: [s_ri, d_liuzitou, s_kou, z_xiao]
}
Characters[Characters.length] = {
	char: "践",
	first: pattern_lr_left_1_right_1,
	later: [s_zuzipang, h_zhan]
}
Characters[Characters.length] = {
	char: "跌",
	first: pattern_lr_left_1_right_1,
	later: [s_zuzipang, p_shiqu]
}
Characters[Characters.length] = {
	char: "跑",
	first: pattern_lr_left_1_right_wei_2,
	later: [s_zuzipang, p_baozitou, z_si]
}
Characters[Characters.length] = {
	char: "遗",
	first: pattern_round_left_down,
	later: [s_guizitou, s_bei, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "蛙",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_chong, h_tu, h_tu]
}
Characters[Characters.length] = {
	char: "蛛",
	first: pattern_lr_left_1_right_1,
	later: [s_chong, p_zhu]
}
Characters[Characters.length] = {
	char: "蜓",
	first: pattern_lr_left_1_right_wei_2,
	later: [s_chong, p_rengui, z_jianzidi]
}
Characters[Characters.length] = {
	char: "喝",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_kou, s_ri, p_baozitou, p_ren, shuzheheng]
}
Characters[Characters.length] = {
	char: "喂",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_kou, s_tian, h_weizidi]
}
Characters[Characters.length] = {
	char: "喘",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_kou, s_shan, h_erqie]
}
Characters[Characters.length] = {
	char: "喉",
	first: pattern_lr_left_1_right_heng_2,
	later: [s_kou, p_danrenpang, z_houzitou, p_shi]
}
Characters[Characters.length] = {
	char: "幅",
	first: pattern_lr_left_1_right_shu_many,
	later: [s_jin, heng, s_kou, s_tian]
}
Characters[Characters.length] = {
	char: "帽",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_jin, s_ri, s_mu]
}
Characters[Characters.length] = {
	char: "赌",
	first: pattern_lr_left_1_right_wei_2,
	later: [s_bei, h_laozitou, s_ri]
}
Characters[Characters.length] = {
	char: "赔",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_bei, d_li, s_kou]
}
Characters[Characters.length] = {
	char: "黑",
	first: pattern_ud_up_1_down_1,
	later: [s_heizitou, d_sidiandi]
}
Characters[Characters.length] = {
	char: "铸",
	first: pattern_lr_left_1_right_wei_2,
	later: [p_jinzipang, h_piefeng, h_cun]
}
Characters[Characters.length] = {
	char: "铺",
	first: pattern_lr_left_1_right_1,
	later: [p_jinzipang, h_fudu]
}
Characters[Characters.length] = {
	char: "链",
	first: pattern_lr_left_1_right_wei_2,
	later: [p_jinzipang, h_che, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "销",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_jinzipang, s_guangzitou, p_yue]
}
Characters[Characters.length] = {
	char: "锁",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_jinzipang, s_guangzitou, s_bei]
}
Characters[Characters.length] = {
	char: "锄",
	first: pattern_lr_left_1_right_heng_2,
	later: [p_jinzipang, s_qie, z_li]
}
Characters[Characters.length] = {
	char: "锅",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_jinzipang, s_kou, s_nei]
}
Characters[Characters.length] = {
	char: "锈",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_jinzipang, p_he, z_nai]
}
Characters[Characters.length] = {
	char: "锋",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_jinzipang, p_zhewen, h_feng]
}
Characters[Characters.length] = {
	char: "锐",
	first: pattern_lr_left_1_right_shu_many,
	later: [p_jinzipang, d_lanzitou, s_kou, p_er]
}
Characters[Characters.length] = {
	char: "短",
	first: pattern_lr_left_1_right_shu_many,
	later: [p_shi, heng, s_kou, d_qianzitou]
}
Characters[Characters.length] = {
	char: "智",
	first: pattern_ud_up_heng_2_down_1,
	later: [p_shi, s_kou, s_ri]
}
Characters[Characters.length] = {
	char: "毯",
	first: pattern_round_left_down,
	later: [p_mao, d_huo, d_huo]
}
Characters[Characters.length] = {
	char: "鹅",
	first: pattern_lr_left_1_right_1,
	later: [p_wo, p_niao]
}
Characters[Characters.length] = {
	char: "剩",
	first: pattern_lr_left_wei_many_right_1,
	later: [p_he, s_beizizuo, p_bi, s_lidaopang]
}
Characters[Characters.length] = {
	char: "稍",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_he, s_guangzitou, p_yue]
}
Characters[Characters.length] = {
	char: "程",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_he, s_kou, h_wang]
}
Characters[Characters.length] = {
	char: "稀",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_he, p_chadian, h_hengpie, s_jin]
}
Characters[Characters.length] = {
	char: "税",
	first: pattern_lr_left_1_right_shu_many,
	later: [p_he, d_lanzitou, s_kou, p_er]
}
Characters[Characters.length] = {
	char: "筐",
	first: pattern_ud_up_1_down_wei_2,
	later: [p_zhuzitou, h_jiangzikuang, h_wang]
}
Characters[Characters.length] = {
	char: "等",
	first: pattern_ud_up_1_down_shu_2,
	later: [p_zhuzitou, h_tu, h_cun]
}
Characters[Characters.length] = {
	char: "筑",
	first: pattern_ud_up_1_down_heng_2,
	later: [p_zhuzitou, h_gong, p_fan]
}
Characters[Characters.length] = {
	char: "策",
	first: pattern_ud_up_1_down_1,
	later: [p_zhuzitou, h_cizizuo]
}
Characters[Characters.length] = {
	char: "筛",
	first: pattern_ud_up_1_down_heng_2,
	later: [p_zhuzitou, s_shupie, h_hengjin]
}
Characters[Characters.length] = {
	char: "筒",
	first: pattern_ud_up_1_down_wei_2,
	later: [p_zhuzitou, s_tongzikuang, heng, s_kou]
}
Characters[Characters.length] = {
	char: "答",
	first: pattern_ud_up_1_down_shu_2,
	later: [p_zhuzitou, p_ren, heng, s_kou]
}
Characters[Characters.length] = {
	char: "筋",
	first: pattern_ud_up_1_down_heng_2,
	later: [p_zhuzitou, p_yue, z_li]
}
Characters[Characters.length] = {
	char: "筝",
	first: pattern_ud_up_1_down_shu_2,
	later: [p_zhuzitou, p_weizitou, z_zhengzidi]
}
Characters[Characters.length] = {
	char: "傲",
	first: pattern_lr_left_1_right_heng_2,
	later: [p_danrenpang, h_qingzitou, z_fangzidi, p_fanwenpang]
}
Characters[Characters.length] = {
	char: "傅",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, h_fudu, h_cun]
}
Characters[Characters.length] = {
	char: "牌",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_pian, p_beizitou, h_ten]
}
Characters[Characters.length] = {
	char: "堡",
	first: pattern_ud_up_heng_2_down_1,
	later: [p_danrenpang, s_kou, h_mu, h_tu]
}
Characters[Characters.length] = {
	char: "集",
	first: pattern_ud_up_1_down_1,
	later: [p_quezipang, h_mu]
}
Characters[Characters.length] = {
	char: "焦",
	first: pattern_ud_up_1_down_1,
	later: [p_quezipang, d_sidiandi]
}
Characters[Characters.length] = {
	char: "傍",
	first: pattern_lr_left_1_right_shu_many,
	later: [p_danrenpang, d_shangzitou, d_tubaogai, d_fang]
}
Characters[Characters.length] = {
	char: "储",
	first: pattern_lr_left_1_right_heng_2,
	later: [p_danrenpang, d_yanzipang, h_laozitou, s_ri]
}
Characters[Characters.length] = {
	char: "奥",
	first: pattern_ud_up_wei_2_down_1,
	later: [p_aozikuang, d_mi, h_da]
}
Characters[Characters.length] = {
	char: "街",
	first: pattern_lr_left_middle_right,
	later: [p_shuangrenpang, h_tu, h_tu, h_xingziyou]
}
Characters[Characters.length] = {
	char: "惩",
	first: pattern_ud_up_heng_2_down_1,
	later: [p_shuangrenpang, h_zheng, d_xin]
}
Characters[Characters.length] = {
	char: "御",
	first: pattern_lr_left_1_right_heng_2,
	later: [p_shuangrenpang, p_xiezizuo, z_danerpang]
}
Characters[Characters.length] = {
	char: "循",
	first: pattern_lr_left_1_right_wei_2,
	later: [p_shuangrenpang, p_fanzipang, h_ten, s_mu]
}
Characters[Characters.length] = {
	char: "艇",
	first: pattern_lr_left_1_right_wei_2,
	later: [p_zhou, p_rengui, z_jianzidi]
}
Characters[Characters.length] = {
	char: "舒",
	first: pattern_lr_left_shu_2_right_1,
	later: [p_ren, h_gan, s_kou, z_yu]
}
Characters[Characters.length] = {
	char: "番",
	first: pattern_ud_up_1_down_1,
	later: [p_fanzitou, s_tian]
}
Characters[Characters.length] = {
	char: "释",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_fanzitou, z_you, h_fengzidi]
}
Characters[Characters.length] = {
	char: "禽",
	first: pattern_ud_up_1_down_shu_2,
	later: [p_ren, d_liuzitou, p_chadian, z_xiongzikuang, s_tongzikuang, z_sigong]
}
Characters[Characters.length] = {
	char: "腊",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_yue, h_gongzitou, s_ri]
}
Characters[Characters.length] = {
	char: "脾",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_yue, p_beizitou, h_ten]
}
Characters[Characters.length] = {
	char: "腔",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_yue, d_xuezitou, h_gong]
}
Characters[Characters.length] = {
	char: "鲁",
	first: pattern_ud_up_middle_down,
	later: [p_weizitou, s_tian, heng, s_ri]
}
Characters[Characters.length] = {
	char: "猾",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_fanquanpang, s_guzitou, d_tubaogai, p_yue]
}
Characters[Characters.length] = {
	char: "猴",
	first: pattern_lr_left_1_right_heng_2,
	later: [p_fanquanpang, p_danrenpang, z_houzitou, p_shi]
}
Characters[Characters.length] = {
	char: "然",
	first: pattern_ud_up_heng_2_down_1,
	later: [p_xidian, h_quan, d_sidiandi]
}
Characters[Characters.length] = {
	char: "馋",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_shichi, p_weizitou, s_mianzishen, d_ldsl]
}
Characters[Characters.length] = {
	char: "装",
	first: pattern_ud_up_heng_2_down_1,
	later: [d_jiangzipang, h_shi, d_yifu]
}
Characters[Characters.length] = {
	char: "蛮",
	first: pattern_ud_up_1_down_1,
	later: [d_bianzitou, s_chong]
}
Characters[Characters.length] = {
	char: "就",
	first: pattern_lr_left_shu_many_right_1,
	later: [d_liuzitou, s_kou, z_xiao, h_youqi]
}
Characters[Characters.length] = {
	char: "痛",
	first: pattern_round_left_up,
	later: [d_bingzitou, z_yongzitou, p_yong]
}
Characters[Characters.length] = {
	char: "童",
	first: pattern_ud_up_1_down_1,
	later: [d_li, s_li]
}
Characters[Characters.length] = {
	char: "阔",
	first: pattern_round_up,
	later: [d_men, d_sandianshui, p_thousand, s_kou]
}
Characters[Characters.length] = {
	char: "善",
	first: pattern_ud_up_shu_many_down_1,
	later: [d_lanzitou, h_yangzishen, d_qianzitou, s_kou]
}
Characters[Characters.length] = {
	char: "羡",
	first: pattern_ud_up_shu_2_down_heng_2,
	later: [d_lanzitou, h_wang, d_liangdianshui, p_qianzitou, p_ren]
}
Characters[Characters.length] = {
	char: "普",
	first: pattern_ud_up_shu_2_down_1,
	later: [d_lanzitou, h_yazhou, s_ri]
}
Characters[Characters.length] = {
	char: "粪",
	first: pattern_ud_up_1_down_shu_2,
	later: [d_mi, h_gongzitou, p_eightdian]
}
Characters[Characters.length] = {
	char: "尊",
	first: pattern_ud_up_shu_2_down_1,
	later: [d_lanzitou, h_youxin, h_cun]
}
Characters[Characters.length] = {
	char: "道",
	first: pattern_round_left_down,
	later: [d_qianzitou, p_zi, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "曾",
	first: pattern_ud_up_shu_2_down_1,
	later: [d_lanzitou, s_zengzizh, s_ri]
}
Characters[Characters.length] = {
	char: "焰",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_huo, p_weizitou, p_jiu]
}
Characters[Characters.length] = {
	char: "港",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, h_gongzitou, p_eight, z_si]
}
Characters[Characters.length] = {
	char: "湖",
	first: pattern_lr_left_1_right_heng_2,
	later: [d_sandianshui, h_ten, s_kou, p_yue]
}
Characters[Characters.length] = {
	char: "渣",
	first: pattern_lr_left_1_right_shu_many,
	later: [d_sandianshui, h_mu, s_ri, heng]
}
Characters[Characters.length] = {
	char: "湿",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, s_ri, s_ye]
}
Characters[Characters.length] = {
	char: "温",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, s_ri, s_minzidi]
}
Characters[Characters.length] = {
	char: "渴",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, s_ri, p_baozitou, p_ren, shuzheheng]
}
Characters[Characters.length] = {
	char: "滑",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, s_guzitou, d_tubaogai, p_yue]
}
Characters[Characters.length] = {
	char: "湾",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, d_bianzitou, z_gong]
}
Characters[Characters.length] = {
	char: "渡",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_sandianshui, d_guang, h_caoheng, z_you]
}
Characters[Characters.length] = {
	char: "游",
	first: pattern_lr_left_middle_right,
	later: [d_sandianshui, d_fang, p_pieheng, z_zi]
}
Characters[Characters.length] = {
	char: "滋",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, d_qianzitou, z_youzipang, z_youzipang]
}
Characters[Characters.length] = {
	char: "溉",
	first: pattern_lr_left_1_right_heng_2,
	later: [d_sandianshui, z_jizizuo, h_jiziyou]
}
Characters[Characters.length] = {
	char: "愤",
	first: pattern_lr_left_1_right_shu_many,
	later: [d_shuxinpang, h_ten, h_caozitou, s_bei]
}
Characters[Characters.length] = {
	char: "慌",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_shuxinpang, h_caozitou, d_chongzitou, p_liuzidi]
}
Characters[Characters.length] = {
	char: "惰",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_shuxinpang, h_hengpie, h_gong, p_yue]
}
Characters[Characters.length] = {
	char: "愧",
	first: pattern_lr_left_1_right_1,
	later: [d_shuxinpang, p_gui]
}
Characters[Characters.length] = {
	char: "愉",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_shuxinpang, p_ren, heng, p_yue, s_lidaopang]
}
Characters[Characters.length] = {
	char: "慨",
	first: pattern_lr_left_1_right_heng_2,
	later: [d_shuxinpang, z_jizizuo, h_jiziyou]
}
Characters[Characters.length] = {
	char: "割",
	first: pattern_lr_left_shu_many_right_1,
	later: [d_baogaitou, h_feng, s_kou, s_lidaopang]
}
Characters[Characters.length] = {
	char: "寒",
	first: pattern_ud_up_1_down_shu_2,
	later: [d_baogaitou, h_sanhls, p_eight, d_ldsl]
}
Characters[Characters.length] = {
	char: "富",
	first: pattern_ud_up_1_down_shu_many,
	later: [d_baogaitou, heng, s_kou, s_tian]
}
Characters[Characters.length] = {
	char: "窜",
	first: pattern_ud_up_1_down_1,
	later: [d_xuezitou, s_chuan]
}
Characters[Characters.length] = {
	char: "窝",
	first: pattern_ud_up_1_down_shu_2,
	later: [d_xuezitou, s_kou, s_nei]
}
Characters[Characters.length] = {
	char: "窗",
	first: pattern_ud_up_1_down_wei_2,
	later: [d_xuezitou, p_congzikuang, p_xichudian]
}
Characters[Characters.length] = {
	char: "遍",
	first: pattern_round_left_down,
	later: [d_hu, s_bianzili, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "裕",
	first: pattern_lr_left_1_right_shu_many,
	later: [d_buyipang, p_eightdian, p_ren, s_kou]
}
Characters[Characters.length] = {
	char: "裤",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_buyipang, d_guang, h_che]
}
Characters[Characters.length] = {
	char: "裙",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_buyipang, z_yin, s_kou]
}
Characters[Characters.length] = {
	char: "谢",
	first: pattern_lr_left_1_right_heng_2,
	later: [d_yanzipang, p_shen, h_cun]
}
Characters[Characters.length] = {
	char: "谣",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_yanzipang, p_caizitou, p_gangwa]
}
Characters[Characters.length] = {
	char: "谦",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_yanzipang, d_lanzitou, h_jianzishen]
}
Characters[Characters.length] = {
	char: "属",
	first: pattern_round_left_up,
	later: [z_shi, p_yu]
}
Characters[Characters.length] = {
	char: "屡",
	first: pattern_round_left_up,
	later: [z_shi, d_mi, z_nv]
}
Characters[Characters.length] = {
	char: "强",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_gong, s_kou, s_chong]
}
Characters[Characters.length] = {
	char: "粥",
	first: pattern_lr_left_middle_right,
	later: [z_gong, d_mi, z_gong]
}
Characters[Characters.length] = {
	char: "疏",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_shuzizuo, d_chongzitou, p_liuzidi]
}
Characters[Characters.length] = {
	char: "隔",
	first: pattern_lr_left_1_right_shu_many,
	later: [z_zuoerpang, heng, s_kou, s_tongzikuang, d_gezili]
}
Characters[Characters.length] = {
	char: "隙",
	first: pattern_lr_left_1_right_shu_many,
	later: [z_zuoerpang, z_xiao, s_ri, z_xiao]
}
Characters[Characters.length] = {
	char: "絮",
	first: pattern_ud_up_heng_2_down_shu_2,
	later: [z_nv, s_kou, z_youzipang, z_xiao]
}
Characters[Characters.length] = {
	char: "嫂",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_nv, p_souzitou, z_you]
}
Characters[Characters.length] = {
	char: "登",
	first: pattern_ud_up_heng_many_down_shu_many,
	later: [z_dengshangzuo, p_dengshangyou, heng, s_kou, d_qianzitou]
}
Characters[Characters.length] = {
	char: "缎",
	first: pattern_lr_left_1_right_heng_2,
	later: [z_jiaosipang, p_duanzizuo, p_ji, z_you]
}
Characters[Characters.length] = {
	char: "缓",
	first: pattern_lr_left_1_right_shu_many,
	later: [z_jiaosipang, p_caizitou, heng, h_hengpie, z_you]
}
Characters[Characters.length] = {
	char: "编",
	first: pattern_lr_left_1_right_wei_2,
	later: [z_jiaosipang, d_hu, s_bianzili]
}
Characters[Characters.length] = {
	char: "骗",
	first: pattern_lr_left_1_right_wei_2,
	later: [z_ma, d_hu, s_bianzili]
}
Characters[Characters.length] = {
	char: "缘",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_jiaosipang, z_yuanzitou, h_zhizhu]
}

/* 十三画 */
Characters[Characters.length] = {
	char: "瑞",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_wang, s_shan, h_erqie]
}
Characters[Characters.length] = {
	char: "魂",
	first: pattern_lr_left_shu_2_right_1,
	later: [h_two, z_sigong, p_gui]
}
Characters[Characters.length] = {
	char: "肆",
	first: pattern_lr_left_1_right_1,
	later: [h_sizizuo, z_yuming]
}
Characters[Characters.length] = {
	char: "摄",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, h_erduo, z_you, z_you]
}
Characters[Characters.length] = {
	char: "摸",
	first: pattern_lr_left_1_right_shu_many,
	later: [h_tishoupang, h_caozitou, s_ri, h_da]
}
Characters[Characters.length] = {
	char: "填",
	first: pattern_lr_left_1_right_shu_many,
	later: [h_tu, h_ten, s_juzitou, p_eightdian]
}
Characters[Characters.length] = {
	char: "搏",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, h_fudu, h_cun]
}
Characters[Characters.length] = {
	char: "塌",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tu, s_ri, z_xi, z_xi]
}
Characters[Characters.length] = {
	char: "鼓",
	first: pattern_lr_left_shu_many_right_shu_many,
	later: [h_shi, s_kou, d_qianzitou, h_ten, z_you]
}
Characters[Characters.length] = {
	char: "摆",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, s_siwuzhe, h_tu, z_sigong]
}
Characters[Characters.length] = {
	char: "携",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, p_quezipang, z_nai]
}
Characters[Characters.length] = {
	char: "搬",
	first: pattern_lr_left_1_right_heng_2,
	later: [h_tishoupang, p_zhou, p_ji, z_you]
}
Characters[Characters.length] = {
	char: "摇",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, p_caizitou, p_gangwa]
}
Characters[Characters.length] = {
	char: "搞",
	first: pattern_lr_left_1_right_shu_many,
	later: [h_tishoupang, d_liuzitou, s_kou, s_tongzikuang, s_kou]
}
Characters[Characters.length] = {
	char: "塘",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_tu, d_guang, z_tangzili, s_kou]
}
Characters[Characters.length] = {
	char: "摊",
	first: pattern_lr_left_1_right_heng_2,
	later: [h_tishoupang, z_you, p_quezipang]
}
Characters[Characters.length] = {
	char: "蒜",
	first: pattern_ud_up_1_down_heng_2,
	later: [h_caozitou, h_two, z_xiao, h_two, z_xiao]
}
Characters[Characters.length] = {
	char: "勤",
	first: pattern_lr_left_shu_2_right_1,
	later: [h_caoheng, s_jinzidi, z_li]
}
Characters[Characters.length] = {
	char: "鹊",
	first: pattern_lr_left_shu_2_right_1,
	later: [h_gongzitou, s_ri, p_niao]
}
Characters[Characters.length] = {
	char: "蓝",
	first: pattern_ud_up_1_down_shu_2,
	later: [h_caozitou, s_liangshu, p_zhutouban, s_minzidi]
}
Characters[Characters.length] = {
	char: "墓",
	first: pattern_ud_up_shu_many_down_1,
	later: [h_caozitou, s_ri, h_da, h_tu]
}
Characters[Characters.length] = {
	char: "幕",
	first: pattern_ud_up_shu_many_down_1,
	later: [h_caozitou, s_ri, h_da, s_jin]
}
Characters[Characters.length] = {
	char: "蓬",
	first: pattern_ud_up_1_down_wei_2,
	later: [h_caozitou, p_zhewen, h_feng, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "蓄",
	first: pattern_ud_up_1_down_shu_2,
	later: [h_caozitou, d_liuzitou, z_youzipang, s_tian]
}
Characters[Characters.length] = {
	char: "蒙",
	first: pattern_ud_up_middle_down,
	later: [h_caozitou, d_tubaogai, heng, h_zhizhu]
}
Characters[Characters.length] = {
	char: "蒸",
	first: pattern_ud_up_middle_down,
	later: [h_caozitou, z_le, hengzhepie, p_piena, heng, d_sidiandi]
}
Characters[Characters.length] = {
	char: "献",
	first: pattern_lr_left_shu_2_right_1,
	later: [h_ten, s_tongzikuang, d_xinzidi, h_quan]
}
Characters[Characters.length] = {
	char: "禁",
	first: pattern_ud_up_heng_2_down_shu_2,
	later: [h_mu, h_mu, h_two, z_xiao]
}
Characters[Characters.length] = {
	char: "楚",
	first: pattern_ud_up_heng_2_down_1,
	later: [h_mu, h_mu, z_xuanyouxia]
}
Characters[Characters.length] = {
	char: "想",
	first: pattern_ud_up_heng_2_down_1,
	later: [h_mu, s_mu, d_xin]
}
Characters[Characters.length] = {
	char: "槐",
	first: pattern_lr_left_1_right_1,
	later: [h_mu, p_gui]
}
Characters[Characters.length] = {
	char: "榆",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, p_ren, heng, p_yue, s_lidaopang]
}
Characters[Characters.length] = {
	char: "楼",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, d_mi, z_nv]
}
Characters[Characters.length] = {
	char: "概",
	first: pattern_lr_left_1_right_heng_2,
	later: [h_mu, z_jizizuo, h_jiziyou]
}
Characters[Characters.length] = {
	char: "赖",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_shufu, p_weizitou, s_bei]
}
Characters[Characters.length] = {
	char: "酬",
	first: pattern_lr_left_1_right_1,
	later: [h_youxin, d_zhou]
}
Characters[Characters.length] = {
	char: "感",
	first: pattern_ud_up_wei_2_down_1,
	later: [h_xianzikuang, heng, s_kou, d_xin]
}
Characters[Characters.length] = {
	char: "碍",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_stone, s_ri, heng, h_cun]
}
Characters[Characters.length] = {
	char: "碑",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_stone, p_beizitou, h_ten]
}
Characters[Characters.length] = {
	char: "碎",
	first: pattern_lr_left_1_right_shu_many,
	later: [h_stone, d_liuzitou, p_ren, p_ren, h_ten]
}
Characters[Characters.length] = {
	char: "碰",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_stone, d_lanzitou, h_yazhou]
}
Characters[Characters.length] = {
	char: "碗",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_stone, d_baogaitou, p_xi, z_cangzidi]
}
Characters[Characters.length] = {
	char: "碌",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_stone, z_luzitou, z_dianshui]
}
Characters[Characters.length] = {
	char: "雷",
	first: pattern_ud_up_1_down_1,
	later: [h_yushui, s_tian]
}
Characters[Characters.length] = {
	char: "零",
	first: pattern_ud_up_1_down_shu_2,
	later: [h_yushui, p_ren, d_lingzidi]
}
Characters[Characters.length] = {
	char: "雾",
	first: pattern_ud_up_1_down_shu_2,
	later: [h_yushui, p_zhewen, z_li]
}
Characters[Characters.length] = {
	char: "雹",
	first: pattern_ud_up_1_down_wei_2,
	later: [h_yushui, p_baozitou, z_si]
}
Characters[Characters.length] = {
	char: "输",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_che, p_ren, heng, p_yue, s_lidaopang]
}
Characters[Characters.length] = {
	char: "督",
	first: pattern_ud_up_heng_2_down_1,
	later: [s_shang, z_xiao, z_you, s_mu]
}
Characters[Characters.length] = {
	char: "龄",
	first: pattern_lr_left_shu_2_right_shu_2,
	later: [s_zhi, p_ren, z_xiongzikuang, p_ren, d_lingzidi]
}
Characters[Characters.length] = {
	char: "鉴",
	first: pattern_ud_up_heng_2_down_shu_2,
	later: [s_liangshu, p_zhutouban, p_ren, h_jinxia]
}
Characters[Characters.length] = {
	char: "睛",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_mu, h_qingzitou, p_yue]
}
Characters[Characters.length] = {
	char: "睡",
	first: pattern_lr_left_1_right_1,
	later: [s_mu, p_chui]
}
Characters[Characters.length] = {
	char: "睬",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_mu, p_caizitou, h_mu]
}
Characters[Characters.length] = {
	char: "鄙",
	first: pattern_lr_left_shu_many_right_1,
	later: [s_kou, h_ten, s_kou, s_kou, z_youerpang]
}
Characters[Characters.length] = {
	char: "愚",
	first: pattern_ud_up_1_down_1,
	later: [s_yu, d_xin]
}
Characters[Characters.length] = {
	char: "暖",
	first: pattern_lr_left_1_right_shu_many,
	later: [s_ri, p_caizitou, heng, h_hengpie, z_you]
}
Characters[Characters.length] = {
	char: "盟",
	first: pattern_ud_up_heng_2_down_1,
	later: [s_ri, p_yue, s_minzidi]
}
Characters[Characters.length] = {
	char: "歇",
	first: pattern_lr_left_shu_2_right_shu_2,
	later: [s_ri, p_baozitou, p_ren, z_xiongzikuang, p_qianzitou, p_ren]
}
Characters[Characters.length] = {
	char: "暗",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_ri, d_li, s_ri]
}
Characters[Characters.length] = {
	char: "照",
	first: pattern_ud_up_heng_2_down_1,
	later: [s_ri, z_dao, s_kou, d_sidiandi]
}
Characters[Characters.length] = {
	char: "跨",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_zuzipang, h_da, h_kui]
}
Characters[Characters.length] = {
	char: "跳",
	first: pattern_lr_left_1_right_heng_2,
	later: [s_zuzipang, p_zhaozizuo, z_zhaoziyou]
}
Characters[Characters.length] = {
	char: "跪",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_zuzipang, p_weizitou, h_chang, z_cangzidi]
}
Characters[Characters.length] = {
	char: "路",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_zuzipang, p_zhewen, s_kou]
}
Characters[Characters.length] = {
	char: "跟",
	first: pattern_lr_left_1_right_1,
	later: [s_zuzipang, z_henziyou]
}
Characters[Characters.length] = {
	char: "遣",
	first: pattern_round_left_down,
	later: [s_guizitou, s_guanzidi, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "蛾",
	first: pattern_lr_left_1_right_1,
	later: [s_chong, p_wo]
}
Characters[Characters.length] = {
	char: "蜂",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_chong, p_zhewen, h_feng]
}
Characters[Characters.length] = {
	char: "嗓",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_kou, s_kou, s_kou, s_kou, h_mu]
}
Characters[Characters.length] = {
	char: "置",
	first: pattern_ud_up_1_down_shu_2,
	later: [s_siwuzhe, h_ten, s_juzitou]
}
Characters[Characters.length] = {
	char: "罪",
	first: pattern_ud_up_1_down_heng_2,
	later: [s_siwuzhe, s_feizizuo, s_feiziyou]
}
Characters[Characters.length] = {
	char: "罩",
	first: pattern_ud_up_1_down_shu_many,
	later: [s_siwuzhe, s_shangzitou, s_ri, h_ten]
}
Characters[Characters.length] = {
	char: "错",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_jinzipang, h_gongzitou, s_ri]
}
Characters[Characters.length] = {
	char: "锡",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_jinzipang, s_ri, p_wuyao]
}
Characters[Characters.length] = {
	char: "锣",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_jinzipang, s_siwuzhe, p_xi]
}
Characters[Characters.length] = {
	char: "锤",
	first: pattern_lr_left_1_right_1,
	later: [p_jinzipang, p_chui]
}
Characters[Characters.length] = {
	char: "锦",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_jinzipang, p_bai, s_jin]
}
Characters[Characters.length] = {
	char: "键",
	first: pattern_lr_left_1_right_wei_2,
	later: [p_jinzipang, z_yuming, z_jianzidi]
}
Characters[Characters.length] = {
	char: "锯",
	first: pattern_lr_left_1_right_wei_2,
	later: [p_jinzipang, z_shi, h_ten, s_kou]
}
Characters[Characters.length] = {
	char: "矮",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_shi, p_he, z_nv]
}
Characters[Characters.length] = {
	char: "辞",
	first: pattern_lr_left_shu_2_right_shu_2,
	later: [p_thousand, s_kou, d_li, h_ten]
}
Characters[Characters.length] = {
	char: "稠",
	first: pattern_lr_left_1_right_wei_2,
	later: [p_he, p_zhouzikuang, h_tu, s_kou]
}
Characters[Characters.length] = {
	char: "愁",
	first: pattern_ud_up_heng_2_down_1,
	later: [p_he, d_huo, d_xin]
}
Characters[Characters.length] = {
	char: "筹",
	first: pattern_ud_up_1_down_wei_2,
	later: [p_zhuzitou, h_piefeng, h_cun]
}
Characters[Characters.length] = {
	char: "签",
	first: pattern_ud_up_1_down_shu_2,
	later: [p_zhuzitou, p_ren, heng, d_yingzidi]
}
Characters[Characters.length] = {
	char: "简",
	first: pattern_ud_up_1_down_wei_2,
	later: [p_zhuzitou, d_men, s_ri]
}
Characters[Characters.length] = {
	char: "毁",
	first: pattern_lr_left_shu_2_right_shu_2,
	later: [p_jiu, h_gong, p_ji, z_you]
}
Characters[Characters.length] = {
	char: "舅",
	first: pattern_ud_up_1_down_shu_2,
	later: [p_jiu, s_tian, z_li]
}
Characters[Characters.length] = {
	char: "鼠",
	first: pattern_ud_up_1_down_heng_many,
	later: [p_jiu, z_shutidd, z_shutidd, nagou]
}
Characters[Characters.length] = {
	char: "催",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, s_shan, p_quezipang]
}
Characters[Characters.length] = {
	char: "傻",
	first: pattern_lr_left_1_right_shu_many,
	later: [p_danrenpang, p_congzikuang, p_xichudian, p_eightdian, p_zhewen]
}
Characters[Characters.length] = {
	char: "像",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, p_weizitou, s_xiangzishen]
}
Characters[Characters.length] = {
	char: "躲",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_shen, p_ji, h_mu]
}
Characters[Characters.length] = {
	char: "微",
	first: pattern_lr_left_middle_right,
	later: [p_shuangrenpang, s_shan, heng, p_ji, p_fanwenpang]
}
Characters[Characters.length] = {
	char: "愈",
	first: pattern_ud_up_shu_2_down_1,
	later: [p_ren, heng, p_yue, s_lidaopang, d_xin]
}
Characters[Characters.length] = {
	char: "遥",
	first: pattern_round_left_down,
	later: [p_caizitou, p_gangwa, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "腰",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_yue, h_xiwuzhe, z_nv]
}
Characters[Characters.length] = {
	char: "腥",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_yue, s_ri, p_sheng]
}
Characters[Characters.length] = {
	char: "腹",
	first: pattern_lr_left_1_right_shu_many,
	later: [p_yue, p_pieheng, s_ri, p_zhewen]
}
Characters[Characters.length] = {
	char: "腾",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_yue, d_juanzitou, z_ma]
}
Characters[Characters.length] = {
	char: "腿",
	first: pattern_lr_left_1_right_wei_2,
	later: [p_yue, z_henziyou, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "触",
	first: pattern_lr_left_shu_2_right_1,
	later: [p_weizitou, p_yong, s_chong]
}
Characters[Characters.length] = {
	char: "解",
	first: pattern_lr_left_shu_2_right_shu_2,
	later: [p_weizitou, p_yong, z_dao, p_niu]
}
Characters[Characters.length] = {
	char: "酱",
	first: pattern_ud_up_heng_2_down_1,
	later: [d_jiangzipang, p_xi, h_youxin]
}
Characters[Characters.length] = {
	char: "痰",
	first: pattern_round_left_up,
	later: [d_bingzitou, d_huo, d_huo]
}
Characters[Characters.length] = {
	char: "廉",
	first: pattern_round_left_up,
	later: [d_guang, d_lanzitou, h_jianzishen]
}
Characters[Characters.length] = {
	char: "新",
	first: pattern_lr_left_shu_2_right_1,
	later: [d_li, h_mugou, p_jin]
}
Characters[Characters.length] = {
	char: "韵",
	first: pattern_lr_left_shu_2_right_wei_2,
	later: [d_li, s_ri, p_baozitou, d_liangdianshui]
}
Characters[Characters.length] = {
	char: "意",
	first: pattern_ud_up_middle_down,
	later: [d_li, s_ri, d_xin]
}
Characters[Characters.length] = {
	char: "粮",
	first: pattern_lr_left_1_right_1,
	later: [d_mi, d_liang]
}
Characters[Characters.length] = {
	char: "数",
	first: pattern_lr_left_shu_2_right_1,
	later: [d_mi, z_nv, p_fanwenpang]
}
Characters[Characters.length] = {
	char: "煎",
	first: pattern_ud_up_shu_2_down_1,
	later: [d_qianzitou, p_yue, s_lidaopang, d_sidiandi]
}
Characters[Characters.length] = {
	char: "塑",
	first: pattern_ud_up_heng_2_down_1,
	later: [d_ni, p_yue, h_tu]
}
Characters[Characters.length] = {
	char: "慈",
	first: pattern_ud_up_shu_2_down_1,
	later: [d_lanzitou, z_youzipang, z_youzipang, d_xin]
}
Characters[Characters.length] = {
	char: "煤",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_huo, h_ganku, h_mu]
}
Characters[Characters.length] = {
	char: "煌",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_huo, p_bai, h_wang]
}
Characters[Characters.length] = {
	char: "满",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, h_caozitou, h_liang]
}
Characters[Characters.length] = {
	char: "漠",
	first: pattern_lr_left_1_right_shu_many,
	later: [d_sandianshui, h_caozitou, s_ri, h_da]
}
Characters[Characters.length] = {
	char: "源",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_sandianshui, h_chang, p_bai, z_xiao]
}
Characters[Characters.length] = {
	char: "滤",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_sandianshui, s_huzipang, h_seven, d_xin]
}
Characters[Characters.length] = {
	char: "滥",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, s_liangshu, p_zhutouban, s_minzidi]
}
Characters[Characters.length] = {
	char: "滔",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, p_caizitou, p_jiu]
}
Characters[Characters.length] = {
	char: "溪",
	first: pattern_lr_left_1_right_shu_many,
	later: [d_sandianshui, p_caizitou, z_youzipang, h_da]
}
Characters[Characters.length] = {
	char: "溜",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, p_maozizuo, z_dao, s_tian]
}
Characters[Characters.length] = {
	char: "滚",
	first: pattern_lr_left_1_right_shu_many,
	later: [d_sandianshui, d_liuzitou, p_eight, z_sigong, p_yizidi]
}
Characters[Characters.length] = {
	char: "滨",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, d_baogaitou, p_qiu, p_eightdian]
}
Characters[Characters.length] = {
	char: "粱",
	first: pattern_ud_up_heng_2_down_1,
	later: [d_sandianshui, z_liangyoush, d_mi]
}
Characters[Characters.length] = {
	char: "滩",
	first: pattern_lr_left_1_right_heng_2,
	later: [d_sandianshui, z_you, p_quezipang]
}
Characters[Characters.length] = {
	char: "慎",
	first: pattern_lr_left_1_right_shu_many,
	later: [d_shuxinpang, h_ten, s_juzitou, p_eightdian]
}
Characters[Characters.length] = {
	char: "誉",
	first: pattern_ud_up_shu_many_down_shu_many,
	later: [d_yingzidi, p_eight, d_liuzitou, h_two, s_kou]
}
Characters[Characters.length] = {
	char: "塞",
	first: pattern_ud_up_1_down_shu_2,
	later: [d_baogaitou, h_sanhls, p_eight, h_tu]
}
Characters[Characters.length] = {
	char: "谨",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_yanzipang, h_caoheng, s_jinzidi]
}
Characters[Characters.length] = {
	char: "福",
	first: pattern_lr_left_1_right_shu_many,
	later: [d_shizipang, heng, s_kou, s_tian]
}
Characters[Characters.length] = {
	char: "群",
	first: pattern_lr_left_wei_2_right_shu_2,
	later: [z_yin, s_kou, d_lanzitou, h_yangzishen]
}
Characters[Characters.length] = {
	char: "殿",
	first: pattern_lr_left_wei_2_right_shu_2,
	later: [z_shi, h_gongzitou, p_eightdian, p_ji, z_you]
}
Characters[Characters.length] = {
	char: "辟",
	first: pattern_lr_left_wei_2_right_shu_2,
	later: [z_shi, s_kou, d_li, h_ten]
}
Characters[Characters.length] = {
	char: "障",
	first: pattern_lr_left_1_right_shu_many,
	later: [z_zuoerpang, d_li, s_ri, h_ten]
}
Characters[Characters.length] = {
	char: "嫌",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_nv, d_lanzitou, h_jianzishen]
}
Characters[Characters.length] = {
	char: "嫁",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_nv, d_baogaitou, h_zhizhu]
}
Characters[Characters.length] = {
	char: "叠",
	first: pattern_ud_up_middle_down,
	later: [z_you, z_you, z_you, d_tubaogai, s_qie]
}
Characters[Characters.length] = {
	char: "缝",
	first: pattern_lr_left_1_right_wei_2,
	later: [z_jiaosipang, p_zhewen, h_feng, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "缠",
	first: pattern_lr_left_1_right_wei_2,
	later: [z_jiaosipang, d_guang, s_li]
}

/* 十四画 */
Characters[Characters.length] = {
	char: "静",
	first: pattern_lr_left_shu_2_right_shu_2,
	later: [h_qingzitou, p_yue, p_weizitou, z_zhengzidi]
}
Characters[Characters.length] = {
	char: "碧",
	first: pattern_ud_up_heng_2_down_1,
	later: [h_wang, p_bai, h_stone]
}
Characters[Characters.length] = {
	char: "璃",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_wang, d_liuzitou, p_chadian, z_xiongzikuang, s_tongzikuang, z_sigong]
}
Characters[Characters.length] = {
	char: "墙",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tu, h_qiangzitou, s_kou, s_kou]
}
Characters[Characters.length] = {
	char: "撇",
	first: pattern_lr_left_1_right_heng_2,
	later: [h_tishoupang, d_bizizuo, p_fanwenpang]
}
Characters[Characters.length] = {
	char: "嘉",
	first: pattern_ud_up_middle_down,
	later: [h_shi, s_kou, d_qianzitou, z_li, s_kou]
}
Characters[Characters.length] = {
	char: "摧",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, s_shan, p_quezipang]
}
Characters[Characters.length] = {
	char: "截",
	first: pattern_round_right_up,
	later: [h_zaizikuang, p_quezipang]
}
Characters[Characters.length] = {
	char: "誓",
	first: pattern_ud_up_heng_many_down_shu_many,
	later: [h_tishoupang, p_jin, d_liuzitou, h_two, s_kou]
}
Characters[Characters.length] = {
	char: "境",
	first: pattern_lr_left_1_right_shu_many,
	later: [h_tu, d_li, s_ri, p_er]
}
Characters[Characters.length] = {
	char: "摘",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, d_shangzitou, s_tongzikuang, h_ten, s_kou]
}
Characters[Characters.length] = {
	char: "摔",
	first: pattern_lr_left_1_right_shu_many,
	later: [h_tishoupang, d_liuzitou, d_liangdianshui, z_youzipang, p_piedian, h_ten]
}
Characters[Characters.length] = {
	char: "聚",
	first: pattern_ud_up_heng_2_down_1,
	later: [h_erduo, z_you, p_juzidi]
}
Characters[Characters.length] = {
	char: "蔽",
	first: pattern_ud_up_1_down_heng_2,
	later: [h_caozitou, d_bizizuo, p_fanwenpang]
}
Characters[Characters.length] = {
	char: "慕",
	first: pattern_ud_up_shu_many_down_1,
	later: [h_caozitou, s_ri, h_da, z_xiaodian]
}
Characters[Characters.length] = {
	char: "暮",
	first: pattern_ud_up_shu_many_down_1,
	later: [h_caozitou, s_ri, h_da, s_ri]
}
Characters[Characters.length] = {
	char: "蔑",
	first: pattern_ud_up_middle_down,
	later: [h_caozitou, s_siwuzhe, h_wuxu, dian]
}
Characters[Characters.length] = {
	char: "模",
	first: pattern_lr_left_1_right_shu_many,
	later: [h_mu, h_caozitou, s_ri, h_da]
}
Characters[Characters.length] = {
	char: "榴",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, p_maoshangzuo, z_dao, s_tian]
}
Characters[Characters.length] = {
	char: "榜",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, d_shangzitou, d_tubaogai, d_fang]
}
Characters[Characters.length] = {
	char: "榨",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, d_xuezitou, p_zha]
}
Characters[Characters.length] = {
	char: "歌",
	first: pattern_lr_left_shu_2_right_shu_2,
	later: [h_dingwugou, s_kou, h_ding, s_kou, p_qianzitou, p_ren]
}
Characters[Characters.length] = {
	char: "遭",
	first: pattern_round_left_down,
	later: [h_caoczitou, s_ri, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "酷",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_youxin, p_niuwuwei, s_kou]
}
Characters[Characters.length] = {
	char: "酿",
	first: pattern_lr_left_1_right_1,
	later: [h_youxin, d_liang]
}
Characters[Characters.length] = {
	char: "酸",
	first: pattern_lr_left_1_right_shu_many,
	later: [h_youxin, z_sigong, p_eightdian, p_zhewen]
}
Characters[Characters.length] = {
	char: "磁",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_stone, d_qianzitou, z_youzipang, z_youzipang]
}
Characters[Characters.length] = {
	char: "愿",
	first: pattern_round_left_up,
	later: [h_chang, p_bai, z_xiao, d_xin]
}
Characters[Characters.length] = {
	char: "需",
	first: pattern_ud_up_1_down_1,
	later: [h_yushui, h_erqie]
}
Characters[Characters.length] = {
	char: "弊",
	first: pattern_ud_up_heng_2_down_1,
	later: [d_bizizuo, p_fanwenpang, h_piecao]
}
Characters[Characters.length] = {
	char: "裳",
	first: pattern_ud_up_middle_down,
	later: [s_guangzitou, d_tubaogai, s_kou, d_yifu]
}
Characters[Characters.length] = {
	char: "颗",
	first: pattern_lr_left_1_right_1,
	later: [s_guo, h_ye]
}
Characters[Characters.length] = {
	char: "嗽",
	first: pattern_lr_left_1_right_heng_2,
	later: [s_kou, h_shufu, p_qianzitou, p_ren]
}
Characters[Characters.length] = {
	char: "蜻",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_chong, h_qingzitou, p_yue]
}
Characters[Characters.length] = {
	char: "蜡",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_chong, h_gongzitou, s_ri]
}
Characters[Characters.length] = {
	char: "蝇",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_chong, s_kou, s_dian]
}
Characters[Characters.length] = {
	char: "蜘",
	first: pattern_lr_left_1_right_heng_2,
	later: [s_chong, p_shi, s_kou]
}
Characters[Characters.length] = {
	char: "赚",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_bei, d_lanzitou, h_jianzishen]
}
Characters[Characters.length] = {
	char: "锹",
	first: pattern_lr_left_1_right_heng_2,
	later: [p_jinzipang, p_he, d_huo]
}
Characters[Characters.length] = {
	char: "锻",
	first: pattern_lr_left_1_right_heng_2,
	later: [p_jinzipang, p_duanzizuo, p_ji, z_you]
}
Characters[Characters.length] = {
	char: "舞",
	first: pattern_ud_up_middle_down,
	later: [p_pieheng, h_hengsishu, heng, p_xi, h_jiangyouxia]
}
Characters[Characters.length] = {
	char: "稳",
	first: pattern_lr_left_1_right_shu_many,
	later: [p_he, p_weizitou, z_xunzitou, d_xin]
}
Characters[Characters.length] = {
	char: "算",
	first: pattern_ud_up_middle_down,
	later: [p_zhuzitou, s_mu, h_piecao]
}
Characters[Characters.length] = {
	char: "箩",
	first: pattern_ud_up_1_down_shu_2,
	later: [p_zhuzitou, s_siwuzhe, p_xi]
}
Characters[Characters.length] = {
	char: "管",
	first: pattern_ud_up_1_down_shu_2,
	later: [p_zhuzitou, d_baogaitou, s_guanzidi]
}
Characters[Characters.length] = {
	char: "僚",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, h_liaoyoush, s_ri, z_xiao]
}
Characters[Characters.length] = {
	char: "鼻",
	first: pattern_ud_up_middle_down,
	later: [p_zi, s_tian, h_piecaobuchu]
}
Characters[Characters.length] = {
	char: "魄",
	first: pattern_lr_left_1_right_1,
	later: [p_bai, p_gui]
}
Characters[Characters.length] = {
	char: "貌",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_baozipang, p_bai, p_er]
}
Characters[Characters.length] = {
	char: "膜",
	first: pattern_lr_left_1_right_shu_many,
	later: [p_yue, h_caozitou, s_ri, h_da]
}
Characters[Characters.length] = {
	char: "膊",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_yue, h_fudu, h_cun]
}
Characters[Characters.length] = {
	char: "膀",
	first: pattern_lr_left_1_right_shu_many,
	later: [p_yue, d_shangzitou, d_tubaogai, d_fang]
}
Characters[Characters.length] = {
	char: "鲜",
	first: pattern_lr_left_shu_many_right_shu_many,
	later: [p_weizitou, s_tian, heng, d_lanzitou, h_yangzishen]
}
Characters[Characters.length] = {
	char: "疑",
	first: pattern_lr_left_shu_2_right_shu_2,
	later: [p_bi, p_shi, z_yongzitou, z_xuanyouxia]
}
Characters[Characters.length] = {
	char: "馒",
	first: pattern_lr_left_1_right_shu_many,
	later: [p_shichi, s_ri, s_siwuzhe, z_you]
}
Characters[Characters.length] = {
	char: "裹",
	first: pattern_ud_up_middle_down,
	later: [d_liuzitou, s_guo, p_yizidi]
}
Characters[Characters.length] = {
	char: "敲",
	first: pattern_lr_left_shu_many_right_shu_many,
	later: [d_liuzitou, s_kou, s_tongzikuang, s_kou, s_shangzitou, z_you]
}
Characters[Characters.length] = {
	char: "豪",
	first: pattern_ud_up_middle_down,
	later: [d_liuzitou, s_kou, d_tubaogai, h_zhizhu]
}
Characters[Characters.length] = {
	char: "膏",
	first: pattern_ud_up_middle_down,
	later: [d_liuzitou, s_kou, d_tubaogai, s_kou, p_yue]
}
Characters[Characters.length] = {
	char: "遮",
	first: pattern_round_left_down,
	later: [d_guang, h_caoheng, d_sidiandi, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "腐",
	first: pattern_round_left_up,
	later: [d_guang, p_danrenpang, h_cun, s_tongzikuang, p_ren, p_ren]
}
Characters[Characters.length] = {
	char: "瘦",
	first: pattern_round_left_up,
	later: [d_bingzitou, p_souzitou, z_you]
}
Characters[Characters.length] = {
	char: "辣",
	first: pattern_lr_left_shu_2_right_1,
	later: [d_li, h_hengpie, h_shufu]
}
Characters[Characters.length] = {
	char: "竭",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_li, s_ri, p_baozitou, p_ren, z_xiongzikuang]
}
Characters[Characters.length] = {
	char: "端",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_li, s_shan, h_erqie]
}
Characters[Characters.length] = {
	char: "旗",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_fang, p_pieheng, h_qizitou, p_eightdian]
}
Characters[Characters.length] = {
	char: "精",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_mi, h_qingzitou, p_yue]
}
Characters[Characters.length] = {
	char: "歉",
	first: pattern_lr_left_shu_2_right_shu_2,
	later: [d_lanzitou, h_jianzishen, p_qianzitou, p_ren]
}
Characters[Characters.length] = {
	char: "熄",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_huo, p_zi, d_xin]
}
Characters[Characters.length] = {
	char: "熔",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_huo, d_baogaitou, p_eightdian, p_ren, s_kou]
}
Characters[Characters.length] = {
	char: "漆",
	first: pattern_lr_left_1_right_shu_many,
	later: [d_sandianshui, h_mu, p_ren, z_dianshui]
}
Characters[Characters.length] = {
	char: "漂",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, h_xiwuzhe, h_two, z_xiao]
}
Characters[Characters.length] = {
	char: "漫",
	first: pattern_lr_left_1_right_shu_many,
	later: [d_sandianshui, s_ri, s_siwuzhe, z_you]
}
Characters[Characters.length] = {
	char: "滴",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, d_shangzitou, s_tongzikuang, h_ten, s_kou]
}
Characters[Characters.length] = {
	char: "演",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, d_baogaitou, h_yinzizhong, p_eightdian]
}
Characters[Characters.length] = {
	char: "漏",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_sandianshui, z_shi, h_yushui]
}
Characters[Characters.length] = {
	char: "慢",
	first: pattern_lr_left_1_right_shu_many,
	later: [d_shuxinpang, s_ri, s_siwuzhe, z_you]
}
Characters[Characters.length] = {
	char: "寨",
	first: pattern_ud_up_1_down_shu_2,
	later: [d_baogaitou, h_sanhls, p_eight, h_mugou]
}
Characters[Characters.length] = {
	char: "赛",
	first: pattern_ud_up_1_down_shu_2,
	later: [d_baogaitou, h_sanhls, p_eight, s_bei]
}
Characters[Characters.length] = {
	char: "察",
	first: pattern_ud_up_1_down_shu_2,
	later: [d_baogaitou, p_xidian, z_jishangyou, h_two, z_xiao]
}
Characters[Characters.length] = {
	char: "蜜",
	first: pattern_ud_up_middle_down,
	later: [d_baogaitou, d_bi, s_chong]
}
Characters[Characters.length] = {
	char: "谱",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_yanzipang, d_lanzitou, h_yazhou, s_ri]
}
Characters[Characters.length] = {
	char: "嫩",
	first: pattern_lr_left_1_right_heng_2,
	later: [z_nv, h_shufu, p_fanwenpang]
}
Characters[Characters.length] = {
	char: "翠",
	first: pattern_ud_up_heng_many_down_shu_many,
	later: [z_xi, z_xi, d_liuzitou, p_ren, p_ren, h_ten]
}
Characters[Characters.length] = {
	char: "熊",
	first: pattern_ud_up_heng_2_down_1,
	later: [z_sigong, p_yue, p_bi, p_bi, d_sidiandi]
}
Characters[Characters.length] = {
	char: "凳",
	first: pattern_ud_up_shu_2_down_1,
	later: [z_dengshangzuo, p_dengshangyou, heng, s_kou, d_qianzitou, p_ji]
}
Characters[Characters.length] = {
	char: "骡",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_ma, s_tian, z_youzipang, z_xiao]
}
Characters[Characters.length] = {
	char: "缩",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_jiaosipang, d_baogaitou, p_danrenpang, h_hundred]
}

/* 十五画 */
Characters[Characters.length] = {
	char: "慧",
	first: pattern_ud_up_middle_down,
	later: [h_feng, h_feng, z_xunzitou, d_xin]
}
Characters[Characters.length] = {
	char: "撕",
	first: pattern_lr_left_1_right_heng_2,
	later: [h_tishoupang, h_qizitou, p_jin]
}
Characters[Characters.length] = {
	char: "撒",
	first: pattern_lr_left_1_right_heng_2,
	later: [h_tishoupang, h_gongzitou, p_yue, p_fanwenpang]
}
Characters[Characters.length] = {
	char: "趣",
	first: pattern_round_left_down,
	later: [h_tu, s_zouzidi, h_erduo, z_you]
}
Characters[Characters.length] = {
	char: "趟",
	first: pattern_round_left_down,
	later: [h_tu, s_zouzidi, s_guangzitou, s_tongzikuang, s_kou]
}
Characters[Characters.length] = {
	char: "撑",
	first: pattern_lr_left_1_right_shu_many,
	later: [h_tishoupang, s_guangzitou, d_tubaogai, s_kou, p_shou]
}
Characters[Characters.length] = {
	char: "播",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, p_fanzitou, s_tian]
}
Characters[Characters.length] = {
	char: "撞",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, d_li, s_li]
}
Characters[Characters.length] = {
	char: "撤",
	first: pattern_lr_left_1_right_heng_2,
	later: [h_tishoupang, d_chongzitou, p_yue, p_fanwenpang]
}
Characters[Characters.length] = {
	char: "增",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tu, d_lanzitou, s_zengzizh, s_ri]
}
Characters[Characters.length] = {
	char: "聪",
	first: pattern_lr_left_1_right_shu_many,
	later: [h_erduo, d_lanzitou, s_kou, d_xin]
}
Characters[Characters.length] = {
	char: "鞋",
	first: pattern_lr_left_shu_2_right_shu_2,
	later: [h_caoheng, s_gezidi, h_tu, h_tu]
}
Characters[Characters.length] = {
	char: "蕉",
	first: pattern_ud_up_1_down_shu_2,
	later: [h_caozitou, p_quezipang, d_sidiandi]
}
Characters[Characters.length] = {
	char: "蔬",
	first: pattern_ud_up_1_down_heng_2,
	later: [h_caozitou, z_shuzizuo, d_chongzitou, p_liuzidi]
}
Characters[Characters.length] = {
	char: "横",
	first: pattern_lr_left_1_right_shu_many,
	later: [h_mu, h_gongzitou, s_you, p_eightdian]
}
Characters[Characters.length] = {
	char: "槽",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, h_caoczitou, s_ri]
}
Characters[Characters.length] = {
	char: "樱",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, s_bei, s_bei, z_nv]
}
Characters[Characters.length] = {
	char: "橡",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, p_weizitou, s_xiangzishen]
}
Characters[Characters.length] = {
	char: "飘",
	first: pattern_lr_left_shu_2_right_wei_2,
	later: [h_xiwuzhe, h_two, z_xiao, p_fengzitou, p_chadian]
}
Characters[Characters.length] = {
	char: "醋",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_youxin, h_gongzitou, s_ri]
}
Characters[Characters.length] = {
	char: "醉",
	first: pattern_lr_left_1_right_shu_many,
	later: [h_youxin, d_liuzitou, p_ren, p_ren, h_ten]
}
Characters[Characters.length] = {
	char: "震",
	first: pattern_ud_up_1_down_wei_2,
	later: [h_yushui, h_chang, h_two, z_sangzidi]
}
Characters[Characters.length] = {
	char: "霉",
	first: pattern_ud_up_1_down_shu_2,
	later: [h_yushui, p_pieheng, z_mu]
}
Characters[Characters.length] = {
	char: "瞒",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_mu, h_caozitou, h_liang]
}
Characters[Characters.length] = {
	char: "题",
	first: pattern_round_left_down,
	later: [s_ri, h_shizidi, h_ye]
}
Characters[Characters.length] = {
	char: "暴",
	first: pattern_ud_up_middle_down,
	later: [s_ri, h_sanhls, p_eight, z_dianshui]
}
Characters[Characters.length] = {
	char: "瞎",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_mu, d_baogaitou, h_feng, s_kou]
}
Characters[Characters.length] = {
	char: "影",
	first: pattern_lr_left_shu_2_right_1,
	later: [s_ri, d_liuzitou, s_kou, z_xiao, p_sanpie]
}
Characters[Characters.length] = {
	char: "踢",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_zuzipang, s_ri, p_wuyao]
}
Characters[Characters.length] = {
	char: "踏",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_zuzipang, z_shui, s_ri]
}
Characters[Characters.length] = {
	char: "踩",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_zuzipang, p_caizitou, h_mu]
}
Characters[Characters.length] = {
	char: "踪",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_zuzipang, d_baogaitou, h_two, z_xiao]
}
Characters[Characters.length] = {
	char: "蝶",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_chong, h_shijie, h_mu]
}
Characters[Characters.length] = {
	char: "蝴",
	first: pattern_lr_left_1_right_heng_2,
	later: [s_chong, h_ten, s_kou, p_yue]
}
Characters[Characters.length] = {
	char: "嘱",
	first: pattern_lr_left_1_right_wei_2,
	later: [s_kou, z_shi, p_yu]
}
Characters[Characters.length] = {
	char: "墨",
	first: pattern_ud_up_shu_2_down_1,
	later: [s_heizitou, d_sidiandi, h_tu]
}
Characters[Characters.length] = {
	char: "镇",
	first: pattern_lr_left_1_right_shu_many,
	later: [p_jinzipang, h_ten, s_juzitou, p_eightdian]
}
Characters[Characters.length] = {
	char: "靠",
	first: pattern_ud_up_shu_2_down_heng_2,
	later: [p_niuwuwei, s_kou, s_feizizuo, s_feiziyou]
}
Characters[Characters.length] = {
	char: "稻",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_he, p_caizitou, p_jiu]
}
Characters[Characters.length] = {
	char: "黎",
	first: pattern_ud_up_heng_2_down_shu_2,
	later: [p_he, p_lishangyou, p_ren, z_dianshui]
}
Characters[Characters.length] = {
	char: "稿",
	first: pattern_lr_left_1_right_shu_many,
	later: [p_he, d_liuzitou, s_kou, s_tongzikuang, s_kou]
}
Characters[Characters.length] = {
	char: "稼",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_he, d_baogaitou, h_zhizhu]
}
Characters[Characters.length] = {
	char: "箱",
	first: pattern_ud_up_1_down_heng_2,
	later: [p_zhuzitou, h_mu, s_mu]
}
Characters[Characters.length] = {
	char: "箭",
	first: pattern_ud_up_1_down_shu_2,
	later: [p_zhuzitou, d_qianzitou, p_yue, s_lidaopang]
}
Characters[Characters.length] = {
	char: "篇",
	first: pattern_ud_up_1_down_wei_2,
	later: [p_zhuzitou, d_hu, s_bianzili]
}
Characters[Characters.length] = {
	char: "僵",
	first: pattern_lr_left_1_right_shu_many,
	later: [p_danrenpang, heng, s_tian, heng, s_tian, heng]
}
Characters[Characters.length] = {
	char: "躺",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_shen, s_guangzitou, s_tongzikuang, s_kou]
}
Characters[Characters.length] = {
	char: "僻",
	first: pattern_lr_left_1_right_heng_2,
	later: [p_danrenpang, z_shi, s_kou, d_li, h_ten]
}
Characters[Characters.length] = {
	char: "德",
	first: pattern_lr_left_1_right_shu_many,
	later: [p_shuangrenpang, h_ten, s_siwuzhe, heng, d_xin]
}
Characters[Characters.length] = {
	char: "艘",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_zhou, p_souzitou, z_you]
}
Characters[Characters.length] = {
	char: "膝",
	first: pattern_lr_left_1_right_shu_many,
	later: [p_yue, h_mu, p_ren, z_dianshui]
}
Characters[Characters.length] = {
	char: "膛",
	first: pattern_lr_left_1_right_shu_many,
	later: [p_yue, s_guangzitou, d_tubaogai, s_kou, h_tu]
}
Characters[Characters.length] = {
	char: "熟",
	first: pattern_ud_up_heng_2_down_1,
	later: [d_liuzitou, s_kou, z_zi, p_nawan, d_sidiandi]
}
Characters[Characters.length] = {
	char: "摩",
	first: pattern_round_left_up,
	later: [d_guang, h_mu, h_mu, p_shou]
}
Characters[Characters.length] = {
	char: "颜",
	first: pattern_lr_left_wei_2_right_1,
	later: [d_chan, p_sanpie, h_ye]
}
Characters[Characters.length] = {
	char: "毅",
	first: pattern_lr_left_shu_2_right_shu_2,
	later: [d_shangzitou, h_zhizhu, p_ji, z_you]
}
Characters[Characters.length] = {
	char: "糊",
	first: pattern_lr_left_1_right_heng_2,
	later: [d_mi, h_ten, s_kou, p_yue]
}
Characters[Characters.length] = {
	char: "遵",
	first: pattern_round_left_down,
	later: [d_lanzitou, h_youxin, h_cun, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "潜",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, h_fu, h_fu, s_ri]
}
Characters[Characters.length] = {
	char: "潮",
	first: pattern_lr_left_1_right_heng_2,
	later: [d_sandianshui, h_ten, s_ri, h_ten, p_yue]
}
Characters[Characters.length] = {
	char: "懂",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_shuxinpang, h_caozitou, p_zhong]
}
Characters[Characters.length] = {
	char: "额",
	first: pattern_lr_left_shu_2_right_1,
	later: [d_baogaitou, p_zhewen, s_kou, h_ye]
}
Characters[Characters.length] = {
	char: "慰",
	first: pattern_ud_up_heng_2_down_1,
	later: [z_shi, h_two, z_xiao, h_cun, d_xin]
}
Characters[Characters.length] = {
	char: "劈",
	first: pattern_ud_up_heng_2_down_1,
	later: [z_shi, s_kou, d_li, h_ten, z_dao]
}

/* 十六画 */
Characters[Characters.length] = {
	char: "操",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, s_kou, s_kou, s_kou, h_mu]
}
Characters[Characters.length] = {
	char: "燕",
	first: pattern_ud_up_middle_down,
	later: [h_caoheng, s_beizizuo, s_kou, p_bi, d_sidiandi]
}
Characters[Characters.length] = {
	char: "薯",
	first: pattern_ud_up_1_down_wei_2,
	later: [h_caozitou, s_siwuzhe, h_laozitou, s_ri]
}
Characters[Characters.length] = {
	char: "薪",
	first: pattern_ud_up_1_down_heng_2,
	later: [h_caozitou, d_li, h_mugou, p_jin]
}
Characters[Characters.length] = {
	char: "薄",
	first: pattern_ud_up_1_down_heng_2,
	later: [h_caozitou, d_sandianshui, h_fudu, h_cun]
}
Characters[Characters.length] = {
	char: "颠",
	first: pattern_lr_left_shu_many_right_1,
	later: [h_ten, s_juzitou, p_eightdian, h_ye]
}
Characters[Characters.length] = {
	char: "橘",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, z_mao, s_tongzikuang, p_eightdian, s_kou]
}
Characters[Characters.length] = {
	char: "整",
	first: pattern_ud_up_heng_2_down_1,
	later: [h_shufu, p_fanwenpang, h_zheng]
}
Characters[Characters.length] = {
	char: "融",
	first: pattern_lr_left_shu_many_right_1,
	later: [heng, s_kou, s_tongzikuang, d_gezili, s_chong]
}
Characters[Characters.length] = {
	char: "醒",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_youxin, s_ri, p_sheng]
}
Characters[Characters.length] = {
	char: "餐",
	first: pattern_ud_up_heng_2_down_shu_2,
	later: [s_shangzitou, p_xi, z_you, p_ren, d_liang]
}
Characters[Characters.length] = {
	char: "嘴",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_kou, s_zhi, p_bi, p_weizitou, p_yong]
}
Characters[Characters.length] = {
	char: "蹄",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_zuzipang, d_shangzitou, d_tubaogai, s_jin]
}
Characters[Characters.length] = {
	char: "器",
	first: pattern_ud_up_middle_down,
	later: [s_kou, s_kou, h_quan, s_kou, s_kou]
}
Characters[Characters.length] = {
	char: "赠",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_bei, d_lanzitou, s_zengzizh, s_ri]
}
Characters[Characters.length] = {
	char: "默",
	first: pattern_lr_left_shu_2_right_1,
	later: [s_heizitou, d_sidiandi, h_quan]
}
Characters[Characters.length] = {
	char: "镜",
	first: pattern_lr_left_1_right_shu_many,
	later: [p_jinzipang, d_li, s_ri, p_er]
}
Characters[Characters.length] = {
	char: "赞",
	first: pattern_ud_up_heng_2_down_1,
	later: [p_niuwuwei, p_er, p_niuwuwei, p_er, s_bei]
}
Characters[Characters.length] = {
	char: "篮",
	first: pattern_ud_up_1_down_shu_2,
	later: [p_zhuzitou, s_liangshu, p_zhutouban, s_minzidi]
}
Characters[Characters.length] = {
	char: "邀",
	first: pattern_round_left_down,
	later: [p_bai, d_fang, p_fanwenpang, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "衡",
	first: pattern_lr_left_middle_right,
	later: [p_shuangrenpang, p_weizitou, s_tian, h_da, h_xingziyou]
}
Characters[Characters.length] = {
	char: "膨",
	first: pattern_lr_left_1_right_heng_2,
	later: [p_yue, h_shi, s_kou, d_qianzitou, p_sanpie]
}
Characters[Characters.length] = {
	char: "雕",
	first: pattern_lr_left_wei_2_right_1,
	later: [p_zhouzikuang, h_tu, s_kou, p_quezipang]
}
Characters[Characters.length] = {
	char: "磨",
	first: pattern_round_left_up,
	later: [d_guang, h_mu, h_mu, h_stone]
}
Characters[Characters.length] = {
	char: "凝",
	first: pattern_lr_left_1_right_heng_2,
	later: [d_liangdianshui, p_bi, p_shi, z_yongzitou, z_xuanyouxia]
}
Characters[Characters.length] = {
	char: "辨",
	first: pattern_lr_left_middle_right,
	later: [d_li, h_ten, d_dianpie, d_li, h_ten]
}
Characters[Characters.length] = {
	char: "辩",
	first: pattern_lr_left_middle_right,
	later: [d_li, h_ten, d_yanzipang, d_li, h_ten]
}
Characters[Characters.length] = {
	char: "糖",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_mi, d_guang, z_tangzili, s_kou]
}
Characters[Characters.length] = {
	char: "糕",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_mi, d_lanzitou, h_wang, d_sidiandi]
}
Characters[Characters.length] = {
	char: "燃",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_huo, p_xidian, h_quan, d_sidiandi]
}
Characters[Characters.length] = {
	char: "澡",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, s_kou, s_kou, s_kou, h_mu]
}
Characters[Characters.length] = {
	char: "激",
	first: pattern_lr_left_1_right_heng_2,
	later: [d_sandianshui, p_bai, d_fang, p_fanwenpang]
}
Characters[Characters.length] = {
	char: "懒",
	first: pattern_lr_left_1_right_heng_2,
	later: [d_shuxinpang, h_shufu, p_weizitou, s_bei]
}
Characters[Characters.length] = {
	char: "壁",
	first: pattern_ud_up_heng_2_down_1,
	later: [z_shi, s_kou, d_li, h_ten, h_tu]
}
Characters[Characters.length] = {
	char: "避",
	first: pattern_round_left_down,
	later: [z_shi, s_kou, d_li, h_ten, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "缴",
	first: pattern_lr_left_1_right_heng_2,
	later: [z_jiaosipang, p_bai, d_fang, p_fanwenpang]
}

/* 十七画 */
Characters[Characters.length] = {
	char: "戴",
	first: pattern_round_right_up,
	later: [h_zaizikuang, s_tian, h_gongzitou, p_eightdian]
}
Characters[Characters.length] = {
	char: "擦",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, d_baogaitou, p_xidian, z_jishangyou, h_two, z_xiao]
}
Characters[Characters.length] = {
	char: "鞠",
	first: pattern_lr_left_shu_2_right_wei_2,
	later: [h_caoheng, s_gezidi, p_baozitou, d_mi]
}
Characters[Characters.length] = {
	char: "藏",
	first: pattern_ud_up_1_down_wei_2,
	later: [h_caozitou, h_zangzikuang, h_chen]
}
Characters[Characters.length] = {
	char: "霜",
	first: pattern_ud_up_1_down_heng_2,
	later: [h_yushui, h_mu, s_mu]
}
Characters[Characters.length] = {
	char: "霞",
	first: pattern_ud_up_1_down_heng_2,
	later: [h_yu, z_jiazizuo, z_zuokai, z_you]
}
Characters[Characters.length] = {
	char: "瞧",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_mu, p_quezipang, d_sidiandi]
}
Characters[Characters.length] = {
	char: "蹈",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_zuzipang, p_caizitou, p_jiu]
}
Characters[Characters.length] = {
	char: "螺",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_chong, s_tian, z_youzipang, z_xiao]
}
Characters[Characters.length] = {
	char: "穗",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_he, h_huizitou, d_xin]
}
Characters[Characters.length] = {
	char: "繁",
	first: pattern_ud_up_heng_2_down_shu_2,
	later: [p_pieheng, z_mu, p_fanwenpang, z_youzipang, z_xiao]
}
Characters[Characters.length] = {
	char: "辫",
	first: pattern_lr_left_middle_right,
	later: [d_li, h_ten, z_jiaosipang, d_li, h_ten]
}
Characters[Characters.length] = {
	char: "赢",
	first: pattern_ud_up_middle_down,
	later: [d_wang, s_kou, p_yue, s_bei, p_fan]
}
Characters[Characters.length] = {
	char: "糟",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_mi, h_caoczitou, s_ri]
}
Characters[Characters.length] = {
	char: "糠",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_mi, d_guang, z_lishu]
}
Characters[Characters.length] = {
	char: "燥",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_huo, s_kou, s_kou, s_kou, h_mu]
}
Characters[Characters.length] = {
	char: "臂",
	first: pattern_ud_up_heng_2_down_1,
	later: [z_shi, s_kou, d_li, h_ten, p_yue]
}
Characters[Characters.length] = {
	char: "翼",
	first: pattern_ud_up_middle_down,
	later: [z_xi, z_xi, s_tian, h_gongzitou, p_eightdian]
}
Characters[Characters.length] = {
	char: "骤",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_ma, h_erduo, z_you, p_juzidi]
}

/* 十八画 */
Characters[Characters.length] = {
	char: "鞭",
	first: pattern_lr_left_shu_2_right_heng_2,
	later: [h_caoheng, s_gezidi, p_danrenpang, h_geng]
}
Characters[Characters.length] = {
	char: "覆",
	first: pattern_ud_up_1_down_heng_2,
	later: [h_xiwuzhe, p_shuangrenpang, p_pieheng, s_ri, p_zhewen]
}
Characters[Characters.length] = {
	char: "蹦",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_zuzipang, s_shan, p_yue, p_yue]
}
Characters[Characters.length] = {
	char: "镰",
	first: pattern_lr_left_1_right_wei_2,
	later: [p_jinzipang, d_guang, d_lanzitou, h_jianzishen]
}
Characters[Characters.length] = {
	char: "翻",
	first: pattern_lr_left_shu_2_right_heng_2,
	later: [p_fanzitou, s_tian, z_xi, z_xi]
}
Characters[Characters.length] = {
	char: "鹰",
	first: pattern_round_left_up,
	later: [d_guang, p_danrenpang, p_quezipang, p_niao]
}

/* 十九画 */
Characters[Characters.length] = {
	char: "警",
	first: pattern_ud_up_heng_many_down_shu_many,
	later: [h_caozitou, p_baozitou, s_kou, p_fanwenpang, d_liuzitou, h_two, s_kou]
}
Characters[Characters.length] = {
	char: "攀",
	first: pattern_ud_up_heng_many_down_shu_many,
	later: [h_mu, p_chadian, p_chadian, h_mu, h_da, p_shou]
}
Characters[Characters.length] = {
	char: "蹲",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_zuzipang, d_lanzitou, h_youxin, h_cun]
}
Characters[Characters.length] = {
	char: "颤",
	first: pattern_lr_left_shu_many_right_1,
	later: [d_liuzitou, s_kou, s_kou, s_ri, heng, h_ye]
}
Characters[Characters.length] = {
	char: "瓣",
	first: pattern_lr_left_middle_right,
	later: [d_li, h_ten, p_gua, d_li, h_ten]
}
Characters[Characters.length] = {
	char: "爆",
	first: pattern_lr_left_1_right_shu_many,
	later: [d_huo, s_ri, h_gongzitou, p_eight, z_dianshui]
}
Characters[Characters.length] = {
	char: "疆",
	first: pattern_lr_left_wei_many_right_shu_many,
	later: [z_gong, h_tu, heng, s_tian, heng, s_tian, heng]
}

/* 二十画 */
Characters[Characters.length] = {
	char: "壤",
	first: pattern_lr_left_1_right_shu_many,
	later: [h_tu, d_liuzitou, s_kou, s_kou, h_sanhls, p_yizidi]
}
Characters[Characters.length] = {
	char: "耀",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_guangzitou, h_wuzidi, z_xi, z_xi, p_quezipang]
}
Characters[Characters.length] = {
	char: "躁",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_zuzipang, s_kou, s_kou, s_kou, h_mu]
}
Characters[Characters.length] = {
	char: "嚼",
	first: pattern_lr_left_1_right_shu_many,
	later: [s_kou, p_caizitou, s_siwuzhe, z_jizizuo, h_cun]
}
Characters[Characters.length] = {
	char: "嚷",
	first: pattern_lr_left_1_right_shu_many,
	later: [s_kou, d_liuzitou, s_kou, s_kou, h_sanhls, p_yizidi]
}
Characters[Characters.length] = {
	char: "籍",
	first: pattern_ud_up_1_down_heng_2,
	later: [p_zhuzitou, h_gengzizuo, h_gongzitou, s_ri]
}
Characters[Characters.length] = {
	char: "魔",
	first: pattern_round_left_up,
	later: [d_guang, h_mu, h_mu, p_gui]
}
Characters[Characters.length] = {
	char: "灌",
	first: pattern_lr_left_1_right_shu_many,
	later: [d_sandianshui, h_caozitou, s_kou, s_kou, p_quezipang]
}

/* 二十一画 */
Characters[Characters.length] = {
	char: "蠢",
	first: pattern_ud_up_shu_2_down_heng_2,
	later: [h_fengzitou, s_ri, s_chong, s_chong]
}
Characters[Characters.length] = {
	char: "霸",
	first: pattern_ud_up_1_down_heng_2,
	later: [h_yushui, h_caoheng, s_gezidi, p_yue]
}
Characters[Characters.length] = {
	char: "露",
	first: pattern_ud_up_1_down_heng_2,
	later: [h_yushui, s_zuzipang, p_zhewen, s_kou]
}

/* 二十二画 */
Characters[Characters.length] = {
	char: "囊",
	first: pattern_ud_up_middle_down,
	later: [h_nangzitou, d_tubaogai, s_kou, s_kou, h_sanhls, p_yizidi]
}

/* 二十三画 */
Characters[Characters.length] = {
	char: "罐",
	first: pattern_lr_left_1_right_shu_many,
	later: [p_gangwa, h_caozitou, s_kou, s_kou, p_quezipang]
}

/*《现代汉语常用字表》之二 次常用汉字1000字 笔画顺序表 */

/* 二画 */
Characters[Characters.length] = {
	char: "匕",
	first: pattern_single,
	later: [p_bi]
}
Characters[Characters.length] = {
	char: "刁",
	first: pattern_single,
	later: [z_diao]
}

/* 四画 */
Characters[Characters.length] = {
	char: "丐",
	first: pattern_single,
	later: [h_gai]
}
Characters[Characters.length] = {
	char: "歹",
	first: pattern_single,
	later: [h_dai]
}
Characters[Characters.length] = {
	char: "戈",
	first: pattern_single,
	later: [h_ge]
}
Characters[Characters.length] = {
	char: "夭",
	first: pattern_single,
	later: [p_yao]
}
Characters[Characters.length] = {
	char: "仑",
	first: pattern_ud_up_1_down_1,
	later: [p_ren, p_bi]
}
Characters[Characters.length] = {
	char: "讥",
	first: pattern_lr_left_1_right_1,
	later: [d_yanzipang, p_ji]
}
Characters[Characters.length] = {
	char: "冗",
	first: pattern_ud_up_1_down_1,
	later: [d_tubaogai, p_ji]
}
Characters[Characters.length] = {
	char: "邓",
	first: pattern_lr_left_1_right_1,
	later: [z_you, z_youerpang]
}

/* 五画 */
Characters[Characters.length] = {
	char: "艾",
	first: pattern_ud_up_1_down_1,
	later: [h_caozitou, p_chana]
}
Characters[Characters.length] = {
	char: "夯",
	first: pattern_ud_up_1_down_1,
	later: [h_da, z_li]
}
Characters[Characters.length] = {
	char: "凸",
	first: pattern_single,
	later: [s_tu]
}
Characters[Characters.length] = {
	char: "卢",
	first: pattern_ud_up_1_down_1,
	later: [s_shangzitou, z_shi]
}
Characters[Characters.length] = {
	char: "叭",
	first: pattern_lr_left_1_right_1,
	later: [s_kou, p_eight]
}
Characters[Characters.length] = {
	char: "叽",
	first: pattern_lr_left_1_right_1,
	later: [s_kou, p_ji]
}
Characters[Characters.length] = {
	char: "皿",
	first: pattern_single,
	later: [s_minzidi]
}
Characters[Characters.length] = {
	char: "凹",
	first: pattern_single,
	later: [s_ao]
}
Characters[Characters.length] = {
	char: "囚",
	first: pattern_round_whole,
	later: [s_kou, p_ren]
}
Characters[Characters.length] = {
	char: "矢",
	first: pattern_single,
	later: [p_shi]
}
Characters[Characters.length] = {
	char: "乍",
	first: pattern_single,
	later: [p_zha]
}
Characters[Characters.length] = {
	char: "尔",
	first: pattern_ud_up_1_down_1,
	later: [p_qianzitou, z_xiao]
}
Characters[Characters.length] = {
	char: "冯",
	first: pattern_lr_left_1_right_1,
	later: [d_liangdianshui, z_ma]
}
Characters[Characters.length] = {
	char: "玄",
	first: pattern_single,
	later: [d_xuan]
}

/* 六画 */
Characters[Characters.length] = {
	char: "邦",
	first: pattern_lr_left_1_right_1,
	later: [h_piefeng, z_youerpang]
}
Characters[Characters.length] = {
	char: "迂",
	first: pattern_round_left_down,
	later: [h_yushi, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "邢",
	first: pattern_lr_left_1_right_1,
	later: [h_kai, z_youerpang]
}
Characters[Characters.length] = {
	char: "芋",
	first: pattern_ud_up_1_down_1,
	later: [h_caozitou, h_yu]
}
Characters[Characters.length] = {
	char: "芍",
	first: pattern_ud_up_1_down_1,
	later: [h_caozitou, p_shao]
}
Characters[Characters.length] = {
	char: "吏",
	first: pattern_single,
	later: [h_li]
}
Characters[Characters.length] = {
	char: "夷",
	first: pattern_single,
	later: [h_yi]
}
Characters[Characters.length] = {
	char: "吁",
	first: pattern_lr_left_1_right_1,
	later: [s_kou, h_yushi]
}
Characters[Characters.length] = {
	char: "吕",
	first: pattern_ud_up_1_down_1,
	later: [s_kou, s_kou]
}
Characters[Characters.length] = {
	char: "吆",
	first: pattern_lr_left_1_right_1,
	later: [s_kou, z_youzipang]
}
Characters[Characters.length] = {
	char: "屹",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_shan, p_pieheng, z_yi]
}
Characters[Characters.length] = {
	char: "廷",
	first: pattern_round_left_down,
	later: [p_rengui, z_jianzidi]
}
Characters[Characters.length] = {
	char: "迄",
	first: pattern_round_left_down,
	later: [p_pieheng, z_yi, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "臼",
	first: pattern_single,
	later: [p_jiu]
}
Characters[Characters.length] = {
	char: "仲",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, s_zhong]
}
Characters[Characters.length] = {
	char: "伦",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, p_ren, p_bi]
}
Characters[Characters.length] = {
	char: "伊",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, z_yin]
}
Characters[Characters.length] = {
	char: "肋",
	first: pattern_lr_left_1_right_1,
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
	later: [p_baozitou, p_chadian, z_xiongzikuang]
}
Characters[Characters.length] = {
	char: "凫",
	first: pattern_round_right_up,
	later: [p_niaowuheng, p_ji]
}
Characters[Characters.length] = {
	char: "妆",
	first: pattern_lr_left_1_right_1,
	later: [d_jiangzipang, z_nv]
}
Characters[Characters.length] = {
	char: "亥",
	first: pattern_single,
	later: [d_hai]
}
Characters[Characters.length] = {
	char: "汛",
	first: pattern_lr_left_1_right_1,
	later: [d_sandianshui, z_xunziyou]
}
Characters[Characters.length] = {
	char: "讳",
	first: pattern_lr_left_1_right_1,
	later: [d_yanzipang, h_wei]
}
Characters[Characters.length] = {
	char: "讶",
	first: pattern_lr_left_1_right_1,
	later: [d_yanzipang, h_ya]
}
Characters[Characters.length] = {
	char: "讹",
	first: pattern_lr_left_1_right_heng_2,
	later: [d_yanzipang, p_danrenpang, p_bi]
}
Characters[Characters.length] = {
	char: "讼",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_yanzipang, p_eight, z_sigong]
}
Characters[Characters.length] = {
	char: "诀",
	first: pattern_lr_left_1_right_1,
	later: [d_yanzipang, z_jueziyou]
}
Characters[Characters.length] = {
	char: "弛",
	first: pattern_lr_left_1_right_1,
	later: [z_gong, z_ye]
}
Characters[Characters.length] = {
	char: "阱",
	first: pattern_lr_left_1_right_1,
	later: [z_zuoerpang, h_jing]
}
Characters[Characters.length] = {
	char: "驮",
	first: pattern_lr_left_1_right_1,
	later: [z_ma, h_da]
}
Characters[Characters.length] = {
	char: "驯",
	first: pattern_lr_left_1_right_1,
	later: [z_ma, p_chuan]
}
Characters[Characters.length] = {
	char: "纫",
	first: pattern_lr_left_1_right_1,
	later: [z_jiaosipang, z_ren]
}

/* 七画 */
Characters[Characters.length] = {
	char: "玖",
	first: pattern_lr_left_1_right_1,
	later: [h_wang, p_jiuyuan]
}
Characters[Characters.length] = {
	char: "玛",
	first: pattern_lr_left_1_right_1,
	later: [h_wang, z_ma]
}
Characters[Characters.length] = {
	char: "韧",
	first: pattern_lr_left_1_right_1,
	later: [h_wei, z_ren]
}
Characters[Characters.length] = {
	char: "抠",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_tishoupang, h_jiangzikuang, p_chadian]
}
Characters[Characters.length] = {
	char: "扼",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_tishoupang, h_chang, z_cangzidi]
}
Characters[Characters.length] = {
	char: "汞",
	first: pattern_ud_up_1_down_1,
	later: [h_gong, z_shui]
}
Characters[Characters.length] = {
	char: "扳",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_tishoupang, p_fanzipang, z_you]
}
Characters[Characters.length] = {
	char: "抡",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, p_ren, p_bi]
}
Characters[Characters.length] = {
	char: "坎",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tu, p_qianzitou, p_ren]
}
Characters[Characters.length] = {
	char: "坞",
	first: pattern_lr_left_1_right_1,
	later: [h_tu, p_wuya]
}
Characters[Characters.length] = {
	char: "抑",
	first: pattern_lr_left_1_right_heng_2,
	later: [h_tishoupang, p_angzizuo, z_danerpang]
}
Characters[Characters.length] = {
	char: "拟",
	first: pattern_lr_left_1_right_heng_2,
	later: [h_tishoupang, z_shutidian, p_ren]
}
Characters[Characters.length] = {
	char: "抒",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, z_yu]
}
Characters[Characters.length] = {
	char: "芙",
	first: pattern_ud_up_1_down_1,
	later: [h_caozitou, h_fu]
}
Characters[Characters.length] = {
	char: "芜",
	first: pattern_ud_up_1_down_1,
	later: [h_caozitou, h_wuyou]
}
Characters[Characters.length] = {
	char: "苇",
	first: pattern_ud_up_1_down_1,
	later: [h_caozitou, h_wei]
}
Characters[Characters.length] = {
	char: "芥",
	first: pattern_ud_up_1_down_shu_2,
	later: [h_caozitou, p_ren, p_dao]
}
Characters[Characters.length] = {
	char: "芯",
	first: pattern_ud_up_1_down_1,
	later: [h_caozitou, d_xin]
}
Characters[Characters.length] = {
	char: "芭",
	first: pattern_ud_up_1_down_1,
	later: [h_caozitou, z_ba]
}
Characters[Characters.length] = {
	char: "杖",
	first: pattern_lr_left_1_right_1,
	later: [h_mu, h_zhang]
}
Characters[Characters.length] = {
	char: "杉",
	first: pattern_lr_left_1_right_1,
	later: [h_mu, p_sanpie]
}
Characters[Characters.length] = {
	char: "巫",
	first: pattern_round_left_right,
	later: [h_gong, p_ren, p_ren]
}
Characters[Characters.length] = {
	char: "杈",
	first: pattern_lr_left_1_right_1,
	later: [h_mu, z_cha]
}
Characters[Characters.length] = {
	char: "甫",
	first: pattern_single,
	later: [h_fudu]
}
Characters[Characters.length] = {
	char: "匣",
	first: pattern_round_left,
	later: [h_jiangzikuang, s_jia]
}
Characters[Characters.length] = {
	char: "轩",
	first: pattern_lr_left_1_right_1,
	later: [h_che, h_gan]
}
Characters[Characters.length] = {
	char: "卤",
	first: pattern_ud_up_1_down_wei_2,
	later: [s_shangzitou, s_kou, p_chadian]
}
Characters[Characters.length] = {
	char: "肖",
	first: pattern_ud_up_1_down_1,
	later: [s_guangzitou, p_yue]
}
Characters[Characters.length] = {
	char: "吱",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_kou, h_ten, z_you]
}
Characters[Characters.length] = {
	char: "吠",
	first: pattern_lr_left_1_right_1,
	later: [s_kou, h_quan]
}
Characters[Characters.length] = {
	char: "呕",
	first: pattern_lr_left_1_right_wei_2,
	later: [s_kou, h_jiangzikuang, p_chadian]
}
Characters[Characters.length] = {
	char: "呐",
	first: pattern_lr_left_1_right_1,
	later: [s_kou, s_nei]
}
Characters[Characters.length] = {
	char: "吟",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_kou, p_ren, d_jinzidi]
}
Characters[Characters.length] = {
	char: "呛",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_kou, p_ren, z_cangzidi]
}
Characters[Characters.length] = {
	char: "吻",
	first: pattern_lr_left_1_right_1,
	later: [s_kou, p_wuyao]
}
Characters[Characters.length] = {
	char: "吭",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_kou, d_liuzitou, p_ji]
}
Characters[Characters.length] = {
	char: "邑",
	first: pattern_ud_up_1_down_1,
	later: [s_kou, z_ba]
}
Characters[Characters.length] = {
	char: "囤",
	first: pattern_round_whole,
	later: [s_kou, h_tun]
}
Characters[Characters.length] = {
	char: "吮",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_kou, z_sigong, p_er]
}
Characters[Characters.length] = {
	char: "岖",
	first: pattern_lr_left_1_right_wei_2,
	later: [s_shan, h_jiangzikuang, p_chadian]
}
Characters[Characters.length] = {
	char: "牡",
	first: pattern_lr_left_1_right_1,
	later: [p_niu, h_tu]
}
Characters[Characters.length] = {
	char: "佑",
	first: pattern_lr_left_1_right_wei_2,
	later: [p_danrenpang, h_hengpie, s_kou]
}
Characters[Characters.length] = {
	char: "佃",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, s_tian]
}
Characters[Characters.length] = {
	char: "伺",
	first: pattern_lr_left_1_right_wei_2,
	later: [p_danrenpang, hengzheshugou, heng, s_kou]
}
Characters[Characters.length] = {
	char: "囱",
	first: pattern_round_whole,
	later: [p_congzikuang, p_xichudian]
}
Characters[Characters.length] = {
	char: "肛",
	first: pattern_lr_left_1_right_1,
	later: [p_yue, h_gong]
}
Characters[Characters.length] = {
	char: "肘",
	first: pattern_lr_left_1_right_1,
	later: [p_yue, h_cun]
}
Characters[Characters.length] = {
	char: "甸",
	first: pattern_round_right_up,
	later: [p_baozitou, s_tian]
}
Characters[Characters.length] = {
	char: "狈",
	first: pattern_lr_left_1_right_1,
	later: [p_fanquanpang, s_bei]
}
Characters[Characters.length] = {
	char: "鸠",
	first: pattern_lr_left_1_right_1,
	later: [p_nine, p_niao]
}
Characters[Characters.length] = {
	char: "彤",
	first: pattern_lr_left_1_right_1,
	later: [p_dan, p_sanpie]
}
Characters[Characters.length] = {
	char: "灸",
	first: pattern_ud_up_1_down_1,
	later: [p_jiuyuan, d_huo]
}
Characters[Characters.length] = {
	char: "刨",
	first: pattern_lr_left_wei_2_right_1,
	later: [p_baozitou, z_si, s_lidaopang]
}
Characters[Characters.length] = {
	char: "庇",
	first: pattern_round_left_up,
	later: [d_guang, h_bizizuo, p_bi]
}
Characters[Characters.length] = {
	char: "吝",
	first: pattern_ud_up_1_down_1,
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
	first: pattern_ud_up_middle_down,
	later: [d_lanzitou, s_kou, p_er]
}
Characters[Characters.length] = {
	char: "灼",
	first: pattern_lr_left_1_right_1,
	later: [d_huo, p_shao]
}
Characters[Characters.length] = {
	char: "沐",
	first: pattern_lr_left_1_right_1,
	later: [d_sandianshui, h_mu]
}
Characters[Characters.length] = {
	char: "沛",
	first: pattern_lr_left_1_right_1,
	later: [d_sandianshui, h_shushi]
}
Characters[Characters.length] = {
	char: "汰",
	first: pattern_lr_left_1_right_1,
	later: [d_sandianshui, h_tai]
}
Characters[Characters.length] = {
	char: "沥",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_sandianshui, h_chang, z_li]
}
Characters[Characters.length] = {
	char: "沦",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, p_ren, p_bi]
}
Characters[Characters.length] = {
	char: "汹",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_sandianshui, p_chadian, z_xiongzikuang]
}
Characters[Characters.length] = {
	char: "沧",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, p_ren, z_cangzidi]
}
Characters[Characters.length] = {
	char: "沪",
	first: pattern_lr_left_1_right_1,
	later: [d_sandianshui, d_hu]
}
Characters[Characters.length] = {
	char: "忱",
	first: pattern_lr_left_1_right_1,
	later: [d_shuxinpang, d_shenziyou]
}
Characters[Characters.length] = {
	char: "诅",
	first: pattern_lr_left_1_right_1,
	later: [d_yanzipang, s_qie]
}
Characters[Characters.length] = {
	char: "诈",
	first: pattern_lr_left_1_right_1,
	later: [d_yanzipang, p_zha]
}
Characters[Characters.length] = {
	char: "罕",
	first: pattern_ud_up_1_down_1,
	later: [d_xuezitou, h_gan]
}
Characters[Characters.length] = {
	char: "屁",
	first: pattern_round_left_up,
	later: [z_shi, h_bizizuo, p_bi]
}
Characters[Characters.length] = {
	char: "坠",
	first: pattern_ud_up_heng_2_down_1,
	later: [z_zuoerpang, p_ren, h_tu]
}
Characters[Characters.length] = {
	char: "妓",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_nv, h_ten, z_you]
}
Characters[Characters.length] = {
	char: "姊",
	first: pattern_lr_left_1_right_1,
	later: [z_nv, p_zimei]
}
Characters[Characters.length] = {
	char: "妒",
	first: pattern_lr_left_1_right_1,
	later: [z_nv, d_hu]
}
Characters[Characters.length] = {
	char: "纬",
	first: pattern_lr_left_1_right_1,
	later: [z_jiaosipang, h_wei]
}

/* 八画 */
Characters[Characters.length] = {
	char: "玫",
	first: pattern_lr_left_1_right_1,
	later: [h_wang, p_fanwenpang]
}
Characters[Characters.length] = {
	char: "卦",
	first: pattern_lr_left_shu_2_right_1,
	later: [h_tu, h_tu, s_bu]
}
Characters[Characters.length] = {
	char: "坷",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_tu, h_ding, s_kou]
}
Characters[Characters.length] = {
	char: "坯",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tu, h_bu, heng]
}
Characters[Characters.length] = {
	char: "拓",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, h_stone]
}
Characters[Characters.length] = {
	char: "坪",
	first: pattern_lr_left_1_right_1,
	later: [h_tu, h_ping]
}
Characters[Characters.length] = {
	char: "坤",
	first: pattern_lr_left_1_right_1,
	later: [h_tu, s_shen]
}
Characters[Characters.length] = {
	char: "拄",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, d_zhu]
}
Characters[Characters.length] = {
	char: "拧",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, d_baogaitou, h_ding]
}
Characters[Characters.length] = {
	char: "拂",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, z_fu]
}
Characters[Characters.length] = {
	char: "拙",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, z_chu]
}
Characters[Characters.length] = {
	char: "拇",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, z_mu]
}
Characters[Characters.length] = {
	char: "拗",
	first: pattern_lr_left_1_right_heng_2,
	later: [h_tishoupang, z_youzipang, z_li]
}
Characters[Characters.length] = {
	char: "茉",
	first: pattern_ud_up_1_down_1,
	later: [h_caozitou, h_mo]
}
Characters[Characters.length] = {
	char: "昔",
	first: pattern_ud_up_1_down_1,
	later: [h_gongzitou, s_ri]
}
Characters[Characters.length] = {
	char: "苛",
	first: pattern_ud_up_1_down_wei_2,
	later: [h_caozitou, h_ding, s_kou]
}
Characters[Characters.length] = {
	char: "苫",
	first: pattern_ud_up_1_down_shu_2,
	later: [h_caozitou, s_shangzitou, s_kou]
}
Characters[Characters.length] = {
	char: "苟",
	first: pattern_ud_up_1_down_wei_2,
	later: [h_caozitou, p_baozitou, s_kou]
}
Characters[Characters.length] = {
	char: "苞",
	first: pattern_ud_up_1_down_wei_2,
	later: [h_caozitou, p_baozitou, z_si]
}
Characters[Characters.length] = {
	char: "茁",
	first: pattern_ud_up_1_down_1,
	later: [h_caozitou, z_chu]
}
Characters[Characters.length] = {
	char: "苔",
	first: pattern_ud_up_1_down_shu_2,
	later: [h_caozitou, z_sigong, s_kou]
}
Characters[Characters.length] = {
	char: "枉",
	first: pattern_lr_left_1_right_1,
	later: [h_mu, h_wang]
}
Characters[Characters.length] = {
	char: "枢",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_mu, h_jiangzikuang, p_chadian]
}
Characters[Characters.length] = {
	char: "枚",
	first: pattern_lr_left_1_right_1,
	later: [h_mu, p_fanwenpang]
}
Characters[Characters.length] = {
	char: "枫",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_mu, p_fengzitou, p_chadian]
}
Characters[Characters.length] = {
	char: "杭",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, d_liuzitou, p_ji]
}
Characters[Characters.length] = {
	char: "郁",
	first: pattern_lr_left_wei_2_right_1,
	later: [h_hengpie, p_yue, z_youerpang]
}
Characters[Characters.length] = {
	char: "矾",
	first: pattern_lr_left_1_right_1,
	later: [h_stone, p_fan]
}
Characters[Characters.length] = {
	char: "奈",
	first: pattern_ud_up_1_down_shu_2,
	later: [h_da, h_two, z_xiao]
}
Characters[Characters.length] = {
	char: "奄",
	first: pattern_ud_up_1_down_1,
	later: [h_da, s_dian]
}
Characters[Characters.length] = {
	char: "殴",
	first: pattern_lr_left_wei_2_right_shu_2,
	later: [h_jiangzikuang, p_chadian, p_ji, z_you]
}
Characters[Characters.length] = {
	char: "歧",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_zhi, h_ten, z_you]
}
Characters[Characters.length] = {
	char: "卓",
	first: pattern_ud_up_middle_down,
	later: [s_shangzitou, s_ri, h_ten]
}
Characters[Characters.length] = {
	char: "昙",
	first: pattern_ud_up_1_down_shu_2,
	later: [s_ri, h_two, z_sigong]
}
Characters[Characters.length] = {
	char: "哎",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_kou, h_caozitou, p_chana]
}
Characters[Characters.length] = {
	char: "咕",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_kou, h_ten, s_kou]
}
Characters[Characters.length] = {
	char: "呵",
	first: pattern_lr_left_1_right_wei_2,
	later: [s_kou, h_ding, s_kou]
}
Characters[Characters.length] = {
	char: "咙",
	first: pattern_lr_left_1_right_1,
	later: [s_kou, h_long]
}
Characters[Characters.length] = {
	char: "呻",
	first: pattern_lr_left_1_right_1,
	later: [s_kou, s_shen]
}
Characters[Characters.length] = {
	char: "咒",
	first: pattern_ud_up_heng_2_down_1,
	later: [s_kou, s_kou, p_ji]
}
Characters[Characters.length] = {
	char: "咆",
	first: pattern_lr_left_1_right_wei_2,
	later: [s_kou, p_baozitou, z_si]
}
Characters[Characters.length] = {
	char: "咖",
	first: pattern_lr_left_1_right_heng_2,
	later: [s_kou, z_li, s_kou]
}
Characters[Characters.length] = {
	char: "帕",
	first: pattern_lr_left_1_right_1,
	later: [s_jin, p_bai]
}
Characters[Characters.length] = {
	char: "账",
	first: pattern_lr_left_1_right_1,
	later: [s_bei, p_chang]
}
Characters[Characters.length] = {
	char: "贬",
	first: pattern_lr_left_1_right_1,
	later: [s_bei, p_fa]
}
Characters[Characters.length] = {
	char: "贮",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_bei, d_baogaitou, heng]
}
Characters[Characters.length] = {
	char: "氛",
	first: pattern_round_right_up,
	later: [p_qi, p_eight, z_dao]
}
Characters[Characters.length] = {
	char: "秉",
	first: pattern_single,
	later: [p_bingxing]
}
Characters[Characters.length] = {
	char: "岳",
	first: pattern_ud_up_1_down_1,
	later: [p_qiu, s_shan]
}
Characters[Characters.length] = {
	char: "侠",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, h_jia]
}
Characters[Characters.length] = {
	char: "侥",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, h_gewudian, h_wuzidi]
}
Characters[Characters.length] = {
	char: "侣",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, s_kou, s_kou]
}
Characters[Characters.length] = {
	char: "侈",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, p_xi, p_xi]
}
Characters[Characters.length] = {
	char: "卑",
	first: pattern_ud_up_1_down_1,
	later: [p_beizitou, h_ten]
}
Characters[Characters.length] = {
	char: "刽",
	first: pattern_lr_left_shu_2_right_1,
	later: [p_ren, h_two, z_sigong, s_lidaopang]
}
Characters[Characters.length] = {
	char: "刹",
	first: pattern_lr_left_shu_2_right_1,
	later: [p_chadian, h_mugou, s_lidaopang]
}
Characters[Characters.length] = {
	char: "肴",
	first: pattern_ud_up_1_down_wei_2,
	later: [p_chadian, h_hengpie, p_yue]
}
Characters[Characters.length] = {
	char: "觅",
	first: pattern_ud_up_1_down_1,
	later: [p_caizitou, s_jian]
}
Characters[Characters.length] = {
	char: "忿",
	first: pattern_ud_up_shu_2_down_1,
	later: [p_eight, z_dao, d_xin]
}
Characters[Characters.length] = {
	char: "瓮",
	first: pattern_ud_up_shu_2_down_1,
	later: [p_eight, z_sigong, h_wa]
}
Characters[Characters.length] = {
	char: "肮",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_yue, d_liuzitou, p_ji]
}
Characters[Characters.length] = {
	char: "肪",
	first: pattern_lr_left_1_right_1,
	later: [p_yue, d_fang]
}
Characters[Characters.length] = {
	char: "狞",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_fanquanpang, d_baogaitou, h_ding]
}
Characters[Characters.length] = {
	char: "庞",
	first: pattern_round_left_up,
	later: [d_guang, h_long]
}
Characters[Characters.length] = {
	char: "疟",
	first: pattern_round_left_up,
	later: [d_bingzitou, h_nue]
}
Characters[Characters.length] = {
	char: "疙",
	first: pattern_round_left_up,
	later: [d_bingzitou, p_pieheng, z_yi]
}
Characters[Characters.length] = {
	char: "疚",
	first: pattern_round_left_up,
	later: [d_bingzitou, p_jiuyuan]
}
Characters[Characters.length] = {
	char: "卒",
	first: pattern_ud_up_middle_down,
	later: [d_liuzitou, p_ren, p_ren, h_ten]
}
Characters[Characters.length] = {
	char: "氓",
	first: pattern_lr_left_1_right_1,
	later: [d_wang, z_min]
}
Characters[Characters.length] = {
	char: "炬",
	first: pattern_lr_left_1_right_1,
	later: [d_huo, h_ju]
}
Characters[Characters.length] = {
	char: "沽",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, h_ten, s_kou]
}
Characters[Characters.length] = {
	char: "沮",
	first: pattern_lr_left_1_right_1,
	later: [d_sandianshui, s_qie]
}
Characters[Characters.length] = {
	char: "泣",
	first: pattern_lr_left_1_right_1,
	later: [d_sandianshui, d_li]
}
Characters[Characters.length] = {
	char: "泞",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, d_baogaitou, h_ding]
}
Characters[Characters.length] = {
	char: "泌",
	first: pattern_lr_left_1_right_1,
	later: [d_sandianshui, d_bi]
}
Characters[Characters.length] = {
	char: "沼",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, z_dao, s_kou]
}
Characters[Characters.length] = {
	char: "怔",
	first: pattern_lr_left_1_right_1,
	later: [d_shuxinpang, h_zheng]
}
Characters[Characters.length] = {
	char: "怯",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_shuxinpang, h_tu, z_sigong]
}
Characters[Characters.length] = {
	char: "宠",
	first: pattern_ud_up_1_down_1,
	later: [d_baogaitou, h_long]
}
Characters[Characters.length] = {
	char: "宛",
	first: pattern_ud_up_1_down_heng_2,
	later: [d_baogaitou, p_xi, z_cangzidi]
}
Characters[Characters.length] = {
	char: "衩",
	first: pattern_lr_left_1_right_1,
	later: [d_buyipang, z_cha]
}
Characters[Characters.length] = {
	char: "祈",
	first: pattern_lr_left_1_right_1,
	later: [d_shizipang, p_jin]
}
Characters[Characters.length] = {
	char: "诡",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_yanzipang, p_weizitou, h_chang, z_cangzidi]
}
Characters[Characters.length] = {
	char: "帚",
	first: pattern_ud_up_middle_down,
	later: [z_xunzitou, d_tubaogai, s_jin]
}
Characters[Characters.length] = {
	char: "屉",
	first: pattern_round_left_up,
	later: [z_shi, h_shijie]
}
Characters[Characters.length] = {
	char: "弧",
	first: pattern_lr_left_1_right_1,
	later: [z_gong, p_gua]
}
Characters[Characters.length] = {
	char: "弥",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_gong, p_qianzitou, z_xiao]
}
Characters[Characters.length] = {
	char: "陋",
	first: pattern_lr_left_1_right_wei_2,
	later: [z_zuoerpang, h_bing, shuzheheng]
}
Characters[Characters.length] = {
	char: "陌",
	first: pattern_lr_left_1_right_1,
	later: [z_zuoerpang, h_hundred]
}
Characters[Characters.length] = {
	char: "函",
	first: pattern_round_down,
	later: [z_hanzili, z_xiongzikuang]
}
Characters[Characters.length] = {
	char: "姆",
	first: pattern_lr_left_1_right_1,
	later: [z_nv, z_mu]
}
Characters[Characters.length] = {
	char: "虱",
	first: pattern_round_right_up,
	later: [hengzhenagou, pie, s_chong]
}
Characters[Characters.length] = {
	char: "叁",
	first: pattern_ud_up_middle_down,
	later: [z_sigong, h_da, h_three]
}
Characters[Characters.length] = {
	char: "绅",
	first: pattern_lr_left_1_right_1,
	later: [z_jiaosipang, s_shen]
}
Characters[Characters.length] = {
	char: "驹",
	first: pattern_lr_left_1_right_wei_2,
	later: [z_ma, p_baozitou, s_kou]
}
Characters[Characters.length] = {
	char: "绊",
	first: pattern_lr_left_1_right_1,
	later: [z_jiaosipang, d_ban]
}
Characters[Characters.length] = {
	char: "绎",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_jiaosipang, z_you, h_fengzidi]
}

/* 九画 */
Characters[Characters.length] = {
	char: "契",
	first: pattern_ud_up_heng_2_down_1,
	later: [h_feng, z_dao, h_da]
}
Characters[Characters.length] = {
	char: "贰",
	first: pattern_round_right_up,
	later: [h_shizikuang, h_two, s_bei]
}
Characters[Characters.length] = {
	char: "玷",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_wang, s_shangzitou, s_kou]
}
Characters[Characters.length] = {
	char: "玲",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_wang, p_ren, d_lingzidi]
}
Characters[Characters.length] = {
	char: "珊",
	first: pattern_lr_left_1_right_1,
	later: [h_wang, p_ce]
}
Characters[Characters.length] = {
	char: "拭",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_tishoupang, h_shizikuang, h_gong]
}
Characters[Characters.length] = {
	char: "拷",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_tishoupang, h_laozitou, h_qiaoziyou]
}
Characters[Characters.length] = {
	char: "拱",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, h_gongzitou, p_eightdian]
}
Characters[Characters.length] = {
	char: "挟",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, h_jia]
}
Characters[Characters.length] = {
	char: "垢",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_tu, p_fanzipang, heng, s_kou]
}
Characters[Characters.length] = {
	char: "垛",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tu, p_ji, h_mu]
}
Characters[Characters.length] = {
	char: "拯",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, z_le, hengzhepie, p_piena, heng]
}
Characters[Characters.length] = {
	char: "荆",
	first: pattern_lr_left_shu_2_right_1,
	later: [h_caozitou, h_kai, s_lidaopang]
}
Characters[Characters.length] = {
	char: "茸",
	first: pattern_ud_up_1_down_1,
	later: [h_caozitou, h_erduo]
}
Characters[Characters.length] = {
	char: "茬",
	first: pattern_ud_up_1_down_wei_2,
	later: [h_caozitou, h_zaizitou, h_tu]
}
Characters[Characters.length] = {
	char: "荚",
	first: pattern_ud_up_1_down_1,
	later: [h_caozitou, h_jia]
}
Characters[Characters.length] = {
	char: "茵",
	first: pattern_ud_up_1_down_wei_2,
	later: [h_caozitou, s_kou, h_da]
}
Characters[Characters.length] = {
	char: "茴",
	first: pattern_ud_up_1_down_wei_2,
	later: [h_caozitou, s_kou, s_kou]
}
Characters[Characters.length] = {
	char: "荞",
	first: pattern_ud_up_1_down_shu_2,
	later: [h_caozitou, p_yao, p_dao]
}
Characters[Characters.length] = {
	char: "荠",
	first: pattern_ud_up_1_down_shu_2,
	later: [h_caozitou, p_ren, p_dao]
}
Characters[Characters.length] = {
	char: "荤",
	first: pattern_ud_up_middle_down,
	later: [h_caozitou, d_tubaogai, h_che]
}
Characters[Characters.length] = {
	char: "荧",
	first: pattern_ud_up_middle_down,
	later: [h_caozitou, d_tubaogai, d_huo]
}
Characters[Characters.length] = {
	char: "荔",
	first: pattern_ud_up_1_down_shu_many,
	later: [h_caozitou, z_li, z_li, z_li]
}
Characters[Characters.length] = {
	char: "栈",
	first: pattern_lr_left_1_right_1,
	later: [h_mu, h_zhan]
}
Characters[Characters.length] = {
	char: "柑",
	first: pattern_lr_left_1_right_1,
	later: [h_mu, h_ganku]
}
Characters[Characters.length] = {
	char: "栅",
	first: pattern_lr_left_1_right_1,
	later: [h_mu, p_ce]
}
Characters[Characters.length] = {
	char: "柠",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, d_baogaitou, h_ding]
}
Characters[Characters.length] = {
	char: "枷",
	first: pattern_lr_left_1_right_heng_2,
	later: [h_mu, z_li, s_kou]
}
Characters[Characters.length] = {
	char: "勃",
	first: pattern_lr_left_shu_many_right_1,
	later: [h_ten, d_tubaogai, z_zi, z_li]
}
Characters[Characters.length] = {
	char: "柬",
	first: pattern_single,
	later: [h_jian]
}
Characters[Characters.length] = {
	char: "砂",
	first: pattern_lr_left_1_right_1,
	later: [h_stone, s_shao]
}
Characters[Characters.length] = {
	char: "泵",
	first: pattern_ud_up_1_down_1,
	later: [h_stone, z_shui]
}
Characters[Characters.length] = {
	char: "砚",
	first: pattern_lr_left_1_right_1,
	later: [h_stone, s_jian]
}
Characters[Characters.length] = {
	char: "鸥",
	first: pattern_lr_left_wei_2_right_1,
	later: [h_jiangzikuang, p_chadian, p_niao]
}
Characters[Characters.length] = {
	char: "轴",
	first: pattern_lr_left_1_right_1,
	later: [h_che, s_you]
}
Characters[Characters.length] = {
	char: "韭",
	first: pattern_ud_up_heng_2_down_1,
	later: [s_feizizuo, s_feiziyou, heng]
}
Characters[Characters.length] = {
	char: "虐",
	first: pattern_round_left_up,
	later: [s_huzipang, h_seven, h_nue]
}
Characters[Characters.length] = {
	char: "昧",
	first: pattern_lr_left_1_right_1,
	later: [s_ri, h_weilai]
}
Characters[Characters.length] = {
	char: "盹",
	first: pattern_lr_left_1_right_1,
	later: [s_mu, h_tun]
}
Characters[Characters.length] = {
	char: "咧",
	first: pattern_lr_left_1_right_heng_2,
	later: [s_kou, h_dai, s_lidaopang]
}
Characters[Characters.length] = {
	char: "昵",
	first: pattern_lr_left_1_right_wei_2,
	later: [s_ri, z_shi, p_bi]
}
Characters[Characters.length] = {
	char: "昭",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_ri, z_dao, s_kou]
}
Characters[Characters.length] = {
	char: "盅",
	first: pattern_ud_up_1_down_1,
	later: [s_zhong, s_minzidi]
}
Characters[Characters.length] = {
	char: "勋",
	first: pattern_lr_left_shu_2_right_1,
	later: [s_kou, s_bei, z_li]
}
Characters[Characters.length] = {
	char: "哆",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_kou, p_xi, p_xi]
}
Characters[Characters.length] = {
	char: "咪",
	first: pattern_lr_left_1_right_1,
	later: [s_kou, d_mi]
}
Characters[Characters.length] = {
	char: "哟",
	first: pattern_lr_left_1_right_heng_2,
	later: [s_kou, z_jiaosipang, p_shao]
}
Characters[Characters.length] = {
	char: "幽",
	first: pattern_round_down,
	later: [s_shan, z_youzipang, z_youzipang]
}
Characters[Characters.length] = {
	char: "钙",
	first: pattern_lr_left_1_right_1,
	later: [p_jinzipang, h_gai]
}
Characters[Characters.length] = {
	char: "钝",
	first: pattern_lr_left_1_right_1,
	later: [p_jinzipang, h_tun]
}
Characters[Characters.length] = {
	char: "钠",
	first: pattern_lr_left_1_right_1,
	later: [p_jinzipang, s_nei]
}
Characters[Characters.length] = {
	char: "钦",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_jinzipang, p_qianzitou, p_ren]
}
Characters[Characters.length] = {
	char: "钧",
	first: pattern_lr_left_1_right_wei_2,
	later: [p_jinzipang, p_baozitou, d_liangdianshui]
}
Characters[Characters.length] = {
	char: "钮",
	first: pattern_lr_left_1_right_1,
	later: [p_jinzipang, z_chou]
}
Characters[Characters.length] = {
	char: "毡",
	first: pattern_round_left_down,
	later: [p_mao, s_shangzitou, s_kou]
}
Characters[Characters.length] = {
	char: "氢",
	first: pattern_round_right_up,
	later: [p_qi, z_jingzitou, h_gong]
}
Characters[Characters.length] = {
	char: "秕",
	first: pattern_lr_left_1_right_heng_2,
	later: [p_he, h_bizizuo, p_bi]
}
Characters[Characters.length] = {
	char: "俏",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, s_guangzitou, p_yue]
}
Characters[Characters.length] = {
	char: "俄",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, p_wo]
}
Characters[Characters.length] = {
	char: "俐",
	first: pattern_lr_left_1_right_heng_2,
	later: [p_danrenpang, p_he, s_lidaopang]
}
Characters[Characters.length] = {
	char: "侯",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, z_houzitou, p_shi]
}
Characters[Characters.length] = {
	char: "徊",
	first: pattern_lr_left_1_right_wei_2,
	later: [p_shuangrenpang, s_kou, s_kou]
}
Characters[Characters.length] = {
	char: "衍",
	first: pattern_lr_left_middle_right,
	later: [p_shuangrenpang, d_sandianshui, h_xingziyou]
}
Characters[Characters.length] = {
	char: "胚",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_yue, h_bu, heng]
}
Characters[Characters.length] = {
	char: "胧",
	first: pattern_lr_left_1_right_1,
	later: [p_yue, h_long]
}
Characters[Characters.length] = {
	char: "胎",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_yue, z_sigong, s_kou]
}
Characters[Characters.length] = {
	char: "狰",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_fanquanpang, p_weizitou, z_zhengzidi]
}
Characters[Characters.length] = {
	char: "饵",
	first: pattern_lr_left_1_right_1,
	later: [d_shizipang, h_erduo]
}
Characters[Characters.length] = {
	char: "峦",
	first: pattern_ud_up_1_down_1,
	later: [d_bianzitou, s_shan]
}
Characters[Characters.length] = {
	char: "奕",
	first: pattern_ud_up_1_down_1,
	later: [d_yiye, h_da]
}
Characters[Characters.length] = {
	char: "咨",
	first: pattern_ud_up_heng_2_down_1,
	later: [d_liangdianshui, p_qianzitou, p_ren, s_kou]
}
Characters[Characters.length] = {
	char: "飒",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_li, p_fengzitou, p_chadian]
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
	first: pattern_lr_left_1_right_1,
	later: [d_mi, z_zi]
}
Characters[Characters.length] = {
	char: "娄",
	first: pattern_ud_up_1_down_1,
	later: [d_mi, z_nv]
}
Characters[Characters.length] = {
	char: "烁",
	first: pattern_lr_left_1_right_1,
	later: [d_huo, p_le]
}
Characters[Characters.length] = {
	char: "炫",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_huo, d_liuzitou, z_youzipang]
}
Characters[Characters.length] = {
	char: "洼",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, h_tu, h_tu]
}
Characters[Characters.length] = {
	char: "柒",
	first: pattern_ud_up_heng_2_down_1,
	later: [d_sandianshui, p_bi, h_mu]
}
Characters[Characters.length] = {
	char: "涎",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_sandianshui, p_yanzili, z_jianzidi]
}
Characters[Characters.length] = {
	char: "洛",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, p_zhewen, s_kou]
}
Characters[Characters.length] = {
	char: "恃",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_shuxinpang, h_tu, h_cun]
}
Characters[Characters.length] = {
	char: "恍",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_shuxinpang, s_guangzitou, h_wuzidi]
}
Characters[Characters.length] = {
	char: "恬",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_shuxinpang, p_thousand, s_kou]
}
Characters[Characters.length] = {
	char: "恤",
	first: pattern_lr_left_1_right_1,
	later: [d_shuxinpang, pie, s_minzidi]
}
Characters[Characters.length] = {
	char: "宦",
	first: pattern_ud_up_1_down_1,
	later: [d_baogaitou, h_chen]
}
Characters[Characters.length] = {
	char: "诫",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_yanzipang, h_ge, h_piecao]
}
Characters[Characters.length] = {
	char: "诬",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_yanzipang, h_gong, p_ren, p_ren]
}
Characters[Characters.length] = {
	char: "祠",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_shizipang, hengzheshugou, heng, s_kou]
}
Characters[Characters.length] = {
	char: "诲",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_yanzipang, p_pieheng, z_mu]
}
Characters[Characters.length] = {
	char: "屏",
	first: pattern_round_left_up,
	later: [z_shi, d_lanzitou, h_kai]
}
Characters[Characters.length] = {
	char: "屎",
	first: pattern_round_left_up,
	later: [z_shi, d_mi]
}
Characters[Characters.length] = {
	char: "逊",
	first: pattern_round_left_down,
	later: [z_zi, z_xiao, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "陨",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_zuoerpang, s_kou, s_bei]
}
Characters[Characters.length] = {
	char: "姚",
	first: pattern_lr_left_1_right_heng_2,
	later: [z_nv, p_zhaozizuo, z_zhaoziyou]
}
Characters[Characters.length] = {
	char: "娜",
	first: pattern_lr_left_1_right_heng_2,
	later: [z_nv, z_nazizuo, z_youerpang]
}
Characters[Characters.length] = {
	char: "蚤",
	first: pattern_ud_up_1_down_1,
	later: [z_cha, s_chong]
}
Characters[Characters.length] = {
	char: "骇",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_ma, d_haizitou, p_ren]
}

/* 十画 */
Characters[Characters.length] = {
	char: "耘",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_gengzizuo, h_two, z_sigong]
}
Characters[Characters.length] = {
	char: "耙",
	first: pattern_lr_left_1_right_1,
	later: [h_gengzizuo, z_ba]
}
Characters[Characters.length] = {
	char: "秦",
	first: pattern_ud_up_1_down_1,
	later: [h_fengzitou, p_he]
}
Characters[Characters.length] = {
	char: "匿",
	first: pattern_round_left,
	later: [h_jiangzikuang, h_caozitou, h_hengpie, s_kou]
}
Characters[Characters.length] = {
	char: "埂",
	first: pattern_lr_left_1_right_1,
	later: [h_tu, h_geng]
}
Characters[Characters.length] = {
	char: "捂",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, h_five, s_kou]
}
Characters[Characters.length] = {
	char: "捍",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, s_ri, h_gan]
}
Characters[Characters.length] = {
	char: "袁",
	first: pattern_ud_up_middle_down,
	later: [h_tu, s_kou, p_yizidi]
}
Characters[Characters.length] = {
	char: "捌",
	first: pattern_lr_left_1_right_heng_2,
	later: [h_tishoupang, s_kou, z_li, s_lidaopang]
}
Characters[Characters.length] = {
	char: "挫",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, p_ren, p_ren, h_tu]
}
Characters[Characters.length] = {
	char: "挚",
	first: pattern_ud_up_heng_2_down_1,
	later: [h_tishoupang, p_nawan, p_shou]
}
Characters[Characters.length] = {
	char: "捣",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_tishoupang, p_niaowuheng, s_shan]
}
Characters[Characters.length] = {
	char: "捅",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, z_yongzitou, p_yong]
}
Characters[Characters.length] = {
	char: "埃",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tu, z_sigong, p_shi]
}
Characters[Characters.length] = {
	char: "耿",
	first: pattern_lr_left_1_right_1,
	later: [h_erduo, d_huo]
}
Characters[Characters.length] = {
	char: "聂",
	first: pattern_ud_up_1_down_heng_2,
	later: [h_erduo, z_you, z_you]
}
Characters[Characters.length] = {
	char: "荸",
	first: pattern_ud_up_1_down_shu_many,
	later: [h_caozitou, h_ten, d_tubaogai, z_zi]
}
Characters[Characters.length] = {
	char: "莽",
	first: pattern_ud_up_middle_down,
	later: [h_caozitou, h_quan, h_piecao]
}
Characters[Characters.length] = {
	char: "莱",
	first: pattern_ud_up_1_down_1,
	later: [h_caozitou, h_mu]
}
Characters[Characters.length] = {
	char: "莉",
	first: pattern_ud_up_1_down_heng_2,
	later: [h_caozitou, p_he, s_lidaopang]
}
Characters[Characters.length] = {
	char: "莹",
	first: pattern_ud_up_middle_down,
	later: [h_caozitou, d_tubaogai, h_yu]
}
Characters[Characters.length] = {
	char: "莺",
	first: pattern_ud_up_middle_down,
	later: [h_caozitou, d_tubaogai, p_niao]
}
Characters[Characters.length] = {
	char: "梆",
	first: pattern_lr_left_1_right_heng_2,
	later: [h_mu, h_piefeng, z_youerpang]
}
Characters[Characters.length] = {
	char: "栖",
	first: pattern_lr_left_1_right_1,
	later: [h_mu, h_xi]
}
Characters[Characters.length] = {
	char: "桦",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, p_danrenpang, p_bi, h_ten]
}
Characters[Characters.length] = {
	char: "栓",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, p_ren, h_wang]
}
Characters[Characters.length] = {
	char: "桅",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_mu, p_weizitou, h_chang, z_cangzidi]
}
Characters[Characters.length] = {
	char: "桩",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_mu, d_guang, h_tu]
}
Characters[Characters.length] = {
	char: "贾",
	first: pattern_ud_up_1_down_1,
	later: [h_xiwuzhe, s_bei]
}
Characters[Characters.length] = {
	char: "酌",
	first: pattern_lr_left_1_right_1,
	later: [h_youxin, p_shao]
}
Characters[Characters.length] = {
	char: "砸",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_stone, h_jiangzikuang, s_jin]
}
Characters[Characters.length] = {
	char: "砰",
	first: pattern_lr_left_1_right_1,
	later: [h_stone, h_ping]
}
Characters[Characters.length] = {
	char: "砾",
	first: pattern_lr_left_1_right_1,
	later: [h_stone, p_le]
}
Characters[Characters.length] = {
	char: "殉",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_dai, p_baozitou, s_ri]
}
Characters[Characters.length] = {
	char: "逞",
	first: pattern_round_left_down,
	later: [s_kou, h_wang, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "哮",
	first: pattern_lr_left_1_right_wei_2,
	later: [s_kou, h_laozitou, z_zi]
}
Characters[Characters.length] = {
	char: "唠",
	first: pattern_lr_left_1_right_shu_many,
	later: [s_kou, h_caozitou, d_tubaogai, z_li]
}
Characters[Characters.length] = {
	char: "哺",
	first: pattern_lr_left_1_right_1,
	later: [s_kou, h_fudu]
}
Characters[Characters.length] = {
	char: "剔",
	first: pattern_lr_left_shu_2_right_1,
	later: [s_ri, p_wuyao, s_lidaopang]
}
Characters[Characters.length] = {
	char: "蚌",
	first: pattern_lr_left_1_right_1,
	later: [s_chong, h_feng]
}
Characters[Characters.length] = {
	char: "蚜",
	first: pattern_lr_left_1_right_1,
	later: [s_chong, h_ya]
}
Characters[Characters.length] = {
	char: "畔",
	first: pattern_lr_left_1_right_1,
	later: [s_tian, d_ban]
}
Characters[Characters.length] = {
	char: "蚣",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_chong, p_eight, z_sigong]
}
Characters[Characters.length] = {
	char: "蚪",
	first: pattern_lr_left_1_right_1,
	later: [s_chong, d_dou]
}
Characters[Characters.length] = {
	char: "蚓",
	first: pattern_lr_left_1_right_heng_2,
	later: [s_chong, z_gong, shu]
}
Characters[Characters.length] = {
	char: "哩",
	first: pattern_lr_left_1_right_1,
	later: [s_kou, s_li]
}
Characters[Characters.length] = {
	char: "圃",
	first: pattern_round_whole,
	later: [s_kou, h_fudu]
}
Characters[Characters.length] = {
	char: "鸯",
	first: pattern_ud_up_1_down_1,
	later: [s_yang, p_niao]
}
Characters[Characters.length] = {
	char: "唁",
	first: pattern_lr_left_1_right_shu_many,
	later: [s_kou, d_liuzitou, h_two, s_kou]
}
Characters[Characters.length] = {
	char: "哼",
	first: pattern_lr_left_1_right_shu_many,
	later: [s_kou, d_liuzitou, s_kou, z_le]
}
Characters[Characters.length] = {
	char: "唆",
	first: pattern_lr_left_1_right_shu_many,
	later: [s_kou, z_sigong, p_eightdian, p_zhewen]
}
Characters[Characters.length] = {
	char: "峭",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_shan, s_guangzitou, p_yue]
}
Characters[Characters.length] = {
	char: "唧",
	first: pattern_lr_left_1_right_heng_2,
	later: [s_kou, z_jizizuo, z_danerpang]
}
Characters[Characters.length] = {
	char: "峻",
	first: pattern_lr_left_1_right_shu_many,
	later: [s_shan, z_sigong, p_eightdian, p_zhewen]
}
Characters[Characters.length] = {
	char: "赂",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_bei, p_zhewen, s_kou]
}
Characters[Characters.length] = {
	char: "赃",
	first: pattern_lr_left_1_right_wei_2,
	later: [s_bei, d_guang, h_tu]
}
Characters[Characters.length] = {
	char: "钾",
	first: pattern_lr_left_1_right_1,
	later: [p_jinzipang, s_jia]
}
Characters[Characters.length] = {
	char: "铆",
	first: pattern_lr_left_1_right_heng_2,
	later: [p_jinzipang, p_maozizuo, z_danerpang]
}
Characters[Characters.length] = {
	char: "氨",
	first: pattern_round_right_up,
	later: [p_qi, d_baogaitou, z_nv]
}
Characters[Characters.length] = {
	char: "秫",
	first: pattern_lr_left_1_right_1,
	later: [p_he, h_shufu]
}
Characters[Characters.length] = {
	char: "笆",
	first: pattern_ud_up_1_down_1,
	later: [p_zhuzitou, z_ba]
}
Characters[Characters.length] = {
	char: "俺",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, h_da, s_dian]
}
Characters[Characters.length] = {
	char: "赁",
	first: pattern_ud_up_heng_2_down_1,
	later: [p_danrenpang, p_rengui, s_bei]
}
Characters[Characters.length] = {
	char: "倔",
	first: pattern_lr_left_1_right_wei_2,
	later: [p_danrenpang, z_shi, z_chu]
}
Characters[Characters.length] = {
	char: "殷",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_yinshzizuo, p_ji, z_you]
}
Characters[Characters.length] = {
	char: "耸",
	first: pattern_ud_up_heng_2_down_1,
	later: [p_ren, p_ren, h_erduo]
}
Characters[Characters.length] = {
	char: "舀",
	first: pattern_ud_up_1_down_1,
	later: [p_caizitou, p_jiu]
}
Characters[Characters.length] = {
	char: "豺",
	first: pattern_lr_left_1_right_1,
	later: [p_baozipang, h_cai]
}
Characters[Characters.length] = {
	char: "豹",
	first: pattern_lr_left_1_right_1,
	later: [p_baozipang, p_shao]
}
Characters[Characters.length] = {
	char: "颁",
	first: pattern_lr_left_shu_2_right_1,
	later: [p_eight, z_dao, h_ye]
}
Characters[Characters.length] = {
	char: "胯",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_yue, h_da, h_kui]
}
Characters[Characters.length] = {
	char: "胰",
	first: pattern_lr_left_1_right_1,
	later: [p_yue, h_yi]
}
Characters[Characters.length] = {
	char: "脐",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_yue, d_wen, p_dao]
}
Characters[Characters.length] = {
	char: "脓",
	first: pattern_lr_left_1_right_1,
	later: [p_yue, d_nong]
}
Characters[Characters.length] = {
	char: "逛",
	first: pattern_round_left_down,
	later: [p_fanquanpang, h_wang, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "卿",
	first: pattern_lr_left_middle_right,
	later: [p_maozizuo, z_jizizuo, z_danerpang]
}
Characters[Characters.length] = {
	char: "鸵",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_niao, d_baogaitou, p_bi]
}
Characters[Characters.length] = {
	char: "鸳",
	first: pattern_ud_up_heng_2_down_1,
	later: [p_xi, z_cangzidi, p_niao]
}
Characters[Characters.length] = {
	char: "馁",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_shichi, p_caizitou, z_nv]
}
Characters[Characters.length] = {
	char: "凌",
	first: pattern_lr_left_1_right_shu_many,
	later: [d_liangdianshui, h_tu, p_eightdian, p_zhewen]
}
Characters[Characters.length] = {
	char: "凄",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_liangdianshui, h_shixue, z_nv]
}
Characters[Characters.length] = {
	char: "衷",
	first: pattern_ud_up_middle_down,
	later: [d_liuzitou, s_zhong, p_yizidi]
}
Characters[Characters.length] = {
	char: "郭",
	first: pattern_lr_left_shu_many_right_1,
	later: [d_liuzitou, s_kou, z_zi, z_youerpang]
}
Characters[Characters.length] = {
	char: "斋",
	first: pattern_ud_up_1_down_1,
	later: [d_wen, h_erqie]
}
Characters[Characters.length] = {
	char: "疹",
	first: pattern_round_left_up,
	later: [d_bingzitou, p_ren, p_sanpie]
}
Characters[Characters.length] = {
	char: "紊",
	first: pattern_ud_up_1_down_shu_2,
	later: [d_wen, z_youzipang, z_xiao]
}
Characters[Characters.length] = {
	char: "瓷",
	first: pattern_ud_up_heng_2_down_1,
	later: [d_liangdianshui, p_qianzitou, p_ren, h_wa]
}
Characters[Characters.length] = {
	char: "羔",
	first: pattern_ud_up_shu_2_down_1,
	later: [d_lanzitou, h_wang, d_sidiandi]
}
Characters[Characters.length] = {
	char: "烙",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_huo, p_zhewen, s_kou]
}
Characters[Characters.length] = {
	char: "浦",
	first: pattern_lr_left_1_right_1,
	later: [d_sandianshui, h_fudu]
}
Characters[Characters.length] = {
	char: "涡",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, s_kou, s_nei]
}
Characters[Characters.length] = {
	char: "涣",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, p_weizitou, s_yangwutou]
}
Characters[Characters.length] = {
	char: "涤",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, p_zhewen, h_mugou]
}
Characters[Characters.length] = {
	char: "涧",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_sandianshui, d_men, s_ri]
}
Characters[Characters.length] = {
	char: "涕",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, d_lanzitou, z_dizidi]
}
Characters[Characters.length] = {
	char: "涩",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, z_dao, dian, s_zhi]
}
Characters[Characters.length] = {
	char: "悍",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_shuxinpang, s_ri, h_gan]
}
Characters[Characters.length] = {
	char: "悯",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_shuxinpang, d_men, d_wen]
}
Characters[Characters.length] = {
	char: "窍",
	first: pattern_ud_up_1_down_heng_2,
	later: [d_xuezitou, h_gong, h_qiaoziyou]
}
Characters[Characters.length] = {
	char: "诺",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_yanzipang, h_caozitou, h_hengpie, s_kou]
}
Characters[Characters.length] = {
	char: "诽",
	first: pattern_lr_left_1_right_heng_2,
	later: [d_yanzipang, s_feizizuo, s_feiziyou]
}
Characters[Characters.length] = {
	char: "袒",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_buyipang, s_ri, heng]
}
Characters[Characters.length] = {
	char: "谆",
	first: pattern_lr_left_1_right_shu_many,
	later: [d_yanzipang, d_liuzitou, s_kou, z_zi]
}
Characters[Characters.length] = {
	char: "祟",
	first: pattern_ud_up_1_down_shu_2,
	later: [z_chu, h_two, z_xiao]
}
Characters[Characters.length] = {
	char: "恕",
	first: pattern_ud_up_heng_2_down_1,
	later: [z_nv, s_kou, d_xin]
}
Characters[Characters.length] = {
	char: "娩",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_nv, p_weizitou, s_mianzishen]
}
Characters[Characters.length] = {
	char: "骏",
	first: pattern_lr_left_1_right_shu_many,
	later: [z_ma, z_sigong, p_eightdian, p_zhewen]
}

/* 十一画 */
Characters[Characters.length] = {
	char: "琐",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_wang, s_guangzitou, s_bei]
}
Characters[Characters.length] = {
	char: "麸",
	first: pattern_lr_left_shu_2_right_1,
	later: [h_qingzitou, p_zhewen, h_fu]
}
Characters[Characters.length] = {
	char: "琉",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_wang, d_chongzitou, p_liuzidi]
}
Characters[Characters.length] = {
	char: "琅",
	first: pattern_lr_left_1_right_1,
	later: [h_wang, d_liang]
}
Characters[Characters.length] = {
	char: "措",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, h_gongzitou, s_ri]
}
Characters[Characters.length] = {
	char: "捺",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, h_da, h_two, z_xiao]
}
Characters[Characters.length] = {
	char: "捶",
	first: pattern_lr_left_1_right_1,
	later: [h_tishoupang, p_chui]
}
Characters[Characters.length] = {
	char: "赦",
	first: pattern_lr_left_shu_2_right_1,
	later: [h_tu, p_chizidi, p_fanwenpang]
}
Characters[Characters.length] = {
	char: "埠",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tu, p_zhuizili, h_ten]
}
Characters[Characters.length] = {
	char: "捻",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, p_ren, d_jinzidi, d_xin]
}
Characters[Characters.length] = {
	char: "掐",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, p_weizitou, p_jiu]
}
Characters[Characters.length] = {
	char: "掂",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_tishoupang, d_guang, s_shangzitou, s_kou]
}
Characters[Characters.length] = {
	char: "掖",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, d_liuzitou, p_danrenpang, p_yedian]
}
Characters[Characters.length] = {
	char: "掷",
	first: pattern_lr_left_1_right_heng_2,
	later: [h_tishoupang, d_lanzitou, h_tian, z_youerpang]
}
Characters[Characters.length] = {
	char: "掸",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, d_lanzitou, s_danzidi]
}
Characters[Characters.length] = {
	char: "掺",
	first: pattern_lr_left_1_right_shu_many,
	later: [h_tishoupang, z_sigong, h_da, p_sanpie]
}
Characters[Characters.length] = {
	char: "勘",
	first: pattern_lr_left_shu_2_right_1,
	later: [h_qizitou, p_eightdian, shuzheheng, z_li]
}
Characters[Characters.length] = {
	char: "聊",
	first: pattern_lr_left_1_right_heng_2,
	later: [h_erduo, p_maozizuo, z_danerpang]
}
Characters[Characters.length] = {
	char: "娶",
	first: pattern_ud_up_heng_2_down_1,
	later: [h_erduo, z_you, z_nv]
}
Characters[Characters.length] = {
	char: "菱",
	first: pattern_ud_up_1_down_shu_many,
	later: [h_caozitou, h_tu, p_eightdian, p_zhewen]
}
Characters[Characters.length] = {
	char: "菲",
	first: pattern_ud_up_1_down_heng_2,
	later: [h_caozitou, s_feizizuo, s_feiziyou]
}
Characters[Characters.length] = {
	char: "萎",
	first: pattern_ud_up_1_down_shu_2,
	later: [h_caozitou, p_he, z_nv]
}
Characters[Characters.length] = {
	char: "菩",
	first: pattern_ud_up_1_down_shu_2,
	later: [h_caozitou, d_li, s_kou]
}
Characters[Characters.length] = {
	char: "萤",
	first: pattern_ud_up_middle_down,
	later: [h_caozitou, d_tubaogai, s_chong]
}
Characters[Characters.length] = {
	char: "乾",
	first: pattern_lr_left_shu_many_right_shu_many,
	later: [h_ten, s_ri, h_ten, p_pieheng, z_yi]
}
Characters[Characters.length] = {
	char: "萧",
	first: pattern_ud_up_1_down_1,
	later: [h_caozitou, z_su]
}
Characters[Characters.length] = {
	char: "萨",
	first: pattern_ud_up_1_down_heng_2,
	later: [h_caozitou, z_zuoerpang, d_chan]
}
Characters[Characters.length] = {
	char: "菇",
	first: pattern_ud_up_1_down_heng_2,
	later: [h_caozitou, z_nv, h_ten, s_kou]
}
Characters[Characters.length] = {
	char: "彬",
	first: pattern_lr_left_middle_right,
	later: [h_mu, h_mu, p_sanpie]
}
Characters[Characters.length] = {
	char: "梗",
	first: pattern_lr_left_1_right_1,
	later: [h_mu, h_geng]
}
Characters[Characters.length] = {
	char: "梧",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, h_five, s_kou]
}
Characters[Characters.length] = {
	char: "梭",
	first: pattern_lr_left_1_right_shu_many,
	later: [h_mu, z_sigong, p_eightdian, p_zhewen]
}
Characters[Characters.length] = {
	char: "曹",
	first: pattern_ud_up_1_down_1,
	later: [h_caoczitou, s_ri]
}
Characters[Characters.length] = {
	char: "酝",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_youxin, h_two, z_sigong]
}
Characters[Characters.length] = {
	char: "酗",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_youxin, p_chadian, z_xiongzikuang]
}
Characters[Characters.length] = {
	char: "厢",
	first: pattern_round_left_up,
	later: [h_chang, h_mu, s_mu]
}
Characters[Characters.length] = {
	char: "硅",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_stone, h_tu, h_tu]
}
Characters[Characters.length] = {
	char: "硕",
	first: pattern_lr_left_1_right_1,
	later: [h_stone, h_ye]
}
Characters[Characters.length] = {
	char: "奢",
	first: pattern_ud_up_1_down_wei_2,
	later: [h_da, h_laozitou, s_ri]
}
Characters[Characters.length] = {
	char: "盔",
	first: pattern_ud_up_wei_2_down_1,
	later: [h_hengpie, d_huo, s_minzidi]
}
Characters[Characters.length] = {
	char: "匾",
	first: pattern_round_left,
	later: [h_jiangzikuang, d_hu, s_bianzili]
}
Characters[Characters.length] = {
	char: "颅",
	first: pattern_lr_left_1_right_1,
	later: [s_shangzitou, z_shi, h_ye]
}
Characters[Characters.length] = {
	char: "彪",
	first: pattern_round_left_down,
	later: [s_huzipang, h_seven, p_ji, p_sanpie]
}
Characters[Characters.length] = {
	char: "眶",
	first: pattern_lr_left_1_right_wei_2,
	later: [s_mu, h_jiangzikuang, h_wang]
}
Characters[Characters.length] = {
	char: "晤",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_ri, h_five, s_kou]
}
Characters[Characters.length] = {
	char: "曼",
	first: pattern_ud_up_middle_down,
	later: [s_ri, s_siwuzhe, z_you]
}
Characters[Characters.length] = {
	char: "晦",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_ri, p_pieheng, z_mu]
}
Characters[Characters.length] = {
	char: "冕",
	first: pattern_ud_up_1_down_shu_2,
	later: [s_ri, p_weizitou, s_mianzishen]
}
Characters[Characters.length] = {
	char: "啡",
	first: pattern_lr_left_1_right_heng_2,
	later: [s_kou, s_feizizuo, s_feiziyou]
}
Characters[Characters.length] = {
	char: "畦",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_tian, h_tu, h_tu]
}
Characters[Characters.length] = {
	char: "趾",
	first: pattern_lr_left_1_right_1,
	later: [s_zuzipang, s_zhi]
}
Characters[Characters.length] = {
	char: "啃",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_kou, s_zhi, p_yue]
}
Characters[Characters.length] = {
	char: "蛆",
	first: pattern_lr_left_1_right_1,
	later: [s_chong, s_qie]
}
Characters[Characters.length] = {
	char: "蚯",
	first: pattern_lr_left_1_right_1,
	later: [s_chong, p_qiu]
}
Characters[Characters.length] = {
	char: "蛉",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_chong, p_ren, d_lingzidi]
}
Characters[Characters.length] = {
	char: "蛀",
	first: pattern_lr_left_1_right_1,
	later: [s_chong, d_zhu]
}
Characters[Characters.length] = {
	char: "唬",
	first: pattern_lr_left_1_right_wei_2,
	later: [s_kou, s_huzipang, h_seven, p_ji]
}
Characters[Characters.length] = {
	char: "啰",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_kou, s_siwuzhe, p_xi]
}
Characters[Characters.length] = {
	char: "唾",
	first: pattern_lr_left_1_right_1,
	later: [s_kou, p_chui]
}
Characters[Characters.length] = {
	char: "啤",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_kou, p_beizitou, h_ten]
}
Characters[Characters.length] = {
	char: "啥",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_kou, p_ren, h_gan, s_kou]
}
Characters[Characters.length] = {
	char: "啸",
	first: pattern_lr_left_1_right_1,
	later: [s_kou, z_su]
}
Characters[Characters.length] = {
	char: "崎",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_shan, h_da, h_ding, s_kou]
}
Characters[Characters.length] = {
	char: "逻",
	first: pattern_round_left_down,
	later: [s_siwuzhe, p_xi, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "崔",
	first: pattern_ud_up_1_down_1,
	later: [s_shan, p_quezipang]
}
Characters[Characters.length] = {
	char: "崩",
	first: pattern_ud_up_1_down_heng_2,
	later: [s_shan, p_yue, p_yue]
}
Characters[Characters.length] = {
	char: "婴",
	first: pattern_ud_up_heng_2_down_1,
	later: [s_bei, s_bei, z_nv]
}
Characters[Characters.length] = {
	char: "赊",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_bei, p_ren, h_two, z_xiao]
}
Characters[Characters.length] = {
	char: "铐",
	first: pattern_lr_left_1_right_wei_2,
	later: [p_jinzipang, h_laozitou, h_qiaoziyou]
}
Characters[Characters.length] = {
	char: "铛",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_jinzipang, s_guangzitou, z_xunzitou]
}
Characters[Characters.length] = {
	char: "铝",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_jinzipang, s_kou, s_kou]
}
Characters[Characters.length] = {
	char: "铡",
	first: pattern_lr_left_1_right_heng_2,
	later: [p_jinzipang, s_bei, s_lidaopang]
}
Characters[Characters.length] = {
	char: "铣",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_jinzipang, p_niuwuwei, p_er]
}
Characters[Characters.length] = {
	char: "铭",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_jinzipang, p_xi, s_kou]
}
Characters[Characters.length] = {
	char: "矫",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_shi, p_yao, p_dao]
}
Characters[Characters.length] = {
	char: "秸",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_he, h_shi, s_kou]
}
Characters[Characters.length] = {
	char: "秽",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_he, s_shan, p_xi]
}
Characters[Characters.length] = {
	char: "笙",
	first: pattern_ud_up_1_down_1,
	later: [p_zhuzitou, p_sheng]
}
Characters[Characters.length] = {
	char: "笤",
	first: pattern_ud_up_1_down_shu_2,
	later: [p_zhuzitou, z_dao, s_kou]
}
Characters[Characters.length] = {
	char: "偎",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, s_tian, h_weizidi]
}
Characters[Characters.length] = {
	char: "傀",
	first: pattern_lr_left_1_right_1,
	later: [p_danrenpang, p_gui]
}
Characters[Characters.length] = {
	char: "躯",
	first: pattern_lr_left_1_right_wei_2,
	later: [p_shen, h_jiangzikuang, p_chadian]
}
Characters[Characters.length] = {
	char: "兜",
	first: pattern_ud_up_heng_many_down_1,
	later: [p_angzizuo, p_bai, z_zuokai, p_er]
}
Characters[Characters.length] = {
	char: "衅",
	first: pattern_lr_left_1_right_1,
	later: [pie, s_minzidi, d_ban]
}
Characters[Characters.length] = {
	char: "徘",
	first: pattern_lr_left_1_right_heng_2,
	later: [p_shuangrenpang, s_feizizuo, s_feiziyou]
}
Characters[Characters.length] = {
	char: "徙",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_shuangrenpang, s_zhi, s_zouzidi]
}
Characters[Characters.length] = {
	char: "舶",
	first: pattern_lr_left_1_right_1,
	later: [p_zhou, p_bai]
}
Characters[Characters.length] = {
	char: "舷",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_zhou, d_liuzitou, z_youzipang]
}
Characters[Characters.length] = {
	char: "舵",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_zhou, d_baogaitou, p_bi]
}
Characters[Characters.length] = {
	char: "敛",
	first: pattern_lr_left_shu_2_right_1,
	later: [p_ren, heng, d_yingzidi, heng, p_fanwenpang]
}
Characters[Characters.length] = {
	char: "翎",
	first: pattern_lr_left_shu_2_right_heng_2,
	later: [p_ren, d_lingzidi, z_xi, z_xi]
}
Characters[Characters.length] = {
	char: "脯",
	first: pattern_lr_left_1_right_1,
	later: [p_yue, h_fudu]
}
Characters[Characters.length] = {
	char: "逸",
	first: pattern_round_left_down,
	later: [p_weizitou, s_tuzishen, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "凰",
	first: pattern_round_up,
	later: [p_fengzitou, p_bai, h_wang]
}
Characters[Characters.length] = {
	char: "猖",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_fanquanpang, s_ri, s_ri]
}
Characters[Characters.length] = {
	char: "祭",
	first: pattern_ud_up_heng_2_down_1,
	later: [p_xidian, z_jishangyou, h_two, z_xiao]
}
Characters[Characters.length] = {
	char: "烹",
	first: pattern_ud_up_shu_many_down_1,
	later: [d_liuzitou, s_kou, z_le, d_sidiandi]
}
Characters[Characters.length] = {
	char: "庶",
	first: pattern_round_left_up,
	later: [d_guang, h_caoheng, d_sidiandi]
}
Characters[Characters.length] = {
	char: "庵",
	first: pattern_round_left_up,
	later: [d_guang, h_da, s_dian]
}
Characters[Characters.length] = {
	char: "痊",
	first: pattern_round_left_up,
	later: [d_bingzitou, p_ren, h_wang]
}
Characters[Characters.length] = {
	char: "阎",
	first: pattern_round_up,
	later: [d_men, p_weizitou, p_jiu]
}
Characters[Characters.length] = {
	char: "阐",
	first: pattern_round_up,
	later: [d_men, d_lanzitou, s_danzidi]
}
Characters[Characters.length] = {
	char: "眷",
	first: pattern_ud_up_1_down_1,
	later: [d_juanzitou, s_mu]
}
Characters[Characters.length] = {
	char: "焊",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_huo, s_ri, h_gan]
}
Characters[Characters.length] = {
	char: "焕",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_huo, p_weizitou, s_yangwutou]
}
Characters[Characters.length] = {
	char: "鸿",
	first: pattern_lr_left_middle_right,
	later: [d_sandianshui, h_gong, p_niao]
}
Characters[Characters.length] = {
	char: "涯",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_sandianshui, h_chang, h_tu, h_tu]
}
Characters[Characters.length] = {
	char: "淑",
	first: pattern_lr_left_1_right_heng_2,
	later: [d_sandianshui, s_shang, z_xiao, z_you]
}
Characters[Characters.length] = {
	char: "淌",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, s_guangzitou, s_tongzikuang, s_kou]
}
Characters[Characters.length] = {
	char: "淮",
	first: pattern_lr_left_1_right_1,
	later: [d_sandianshui, p_quezipang]
}
Characters[Characters.length] = {
	char: "淆",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, p_chadian, h_hengpie, p_yue]
}
Characters[Characters.length] = {
	char: "渊",
	first: pattern_lr_left_1_right_heng_many,
	later: [d_sandianshui, pie, d_mi, shu]
}
Characters[Characters.length] = {
	char: "淫",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, p_caizitou, p_rengui]
}
Characters[Characters.length] = {
	char: "淳",
	first: pattern_lr_left_1_right_shu_many,
	later: [d_sandianshui, d_liuzitou, s_kou, z_zi]
}
Characters[Characters.length] = {
	char: "淤",
	first: pattern_lr_left_1_right_heng_2,
	later: [d_sandianshui, d_fang, p_ren, d_ldsl]
}
Characters[Characters.length] = {
	char: "淀",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, d_baogaitou, h_shizidi]
}
Characters[Characters.length] = {
	char: "涮",
	first: pattern_lr_left_1_right_heng_2,
	later: [d_sandianshui, z_shi, s_jin, s_lidaopang]
}
Characters[Characters.length] = {
	char: "涵",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_sandianshui, z_le, d_liangdianshui, p_piedian, z_xiongzikuang]
}
Characters[Characters.length] = {
	char: "惦",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_shuxinpang, d_guang, s_shangzitou, s_kou]
}
Characters[Characters.length] = {
	char: "悴",
	first: pattern_lr_left_1_right_shu_many,
	later: [d_shuxinpang, d_liuzitou, p_ren, p_ren, h_ten]
}
Characters[Characters.length] = {
	char: "惋",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_shuxinpang, d_baogaitou, p_xi, z_cangzidi]
}
Characters[Characters.length] = {
	char: "寂",
	first: pattern_ud_up_1_down_heng_2,
	later: [d_baogaitou, s_shang, z_xiao, z_you]
}
Characters[Characters.length] = {
	char: "窒",
	first: pattern_ud_up_1_down_shu_2,
	later: [d_xuezitou, h_zhizitou, h_tu]
}
Characters[Characters.length] = {
	char: "谍",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_yanzipang, h_shijie, h_mu]
}
Characters[Characters.length] = {
	char: "谐",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_yanzipang, h_bizizuo, p_bi, p_bai]
}
Characters[Characters.length] = {
	char: "裆",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_buyipang, s_guangzitou, z_xunzitou]
}
Characters[Characters.length] = {
	char: "袱",
	first: pattern_lr_left_1_right_heng_2,
	later: [d_buyipang, p_danrenpang, h_quan]
}
Characters[Characters.length] = {
	char: "祷",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_shizipang, h_piefeng, h_cun]
}
Characters[Characters.length] = {
	char: "谒",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_yanzipang, s_ri, p_baozitou, p_ren, shuzheheng]
}
Characters[Characters.length] = {
	char: "谓",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_yanzipang, s_tian, p_yue]
}
Characters[Characters.length] = {
	char: "谚",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_yanzipang, d_chan, p_sanpie]
}
Characters[Characters.length] = {
	char: "尉",
	first: pattern_lr_left_wei_2_right_1,
	later: [z_shi, h_two, z_xiao, h_cun]
}
Characters[Characters.length] = {
	char: "堕",
	first: pattern_ud_up_heng_2_down_1,
	later: [z_zuoerpang, h_hengpie, p_yue, h_tu]
}
Characters[Characters.length] = {
	char: "隅",
	first: pattern_lr_left_1_right_1,
	later: [z_zuoerpang, s_yu]
}
Characters[Characters.length] = {
	char: "婉",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_nv, d_baogaitou, p_xi, z_cangzidi]
}
Characters[Characters.length] = {
	char: "颇",
	first: pattern_lr_left_wei_2_right_1,
	later: [p_pizipang, z_you, h_ye]
}
Characters[Characters.length] = {
	char: "绰",
	first: pattern_lr_left_1_right_shu_many,
	later: [z_jiaosipang, s_shangzitou, s_ri, h_ten]
}
Characters[Characters.length] = {
	char: "绷",
	first: pattern_lr_left_1_right_heng_2,
	later: [z_jiaosipang, p_yue, p_yue]
}
Characters[Characters.length] = {
	char: "综",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_jiaosipang, d_baogaitou, h_two, z_xiao]
}
Characters[Characters.length] = {
	char: "绽",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_jiaosipang, d_baogaitou, h_shizidi]
}
Characters[Characters.length] = {
	char: "缀",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_jiaosipang, z_you, z_you, z_you, z_you]
}
Characters[Characters.length] = {
	char: "巢",
	first: pattern_ud_up_1_down_1,
	later: [z_sanzhe, s_guo]
}

/* 十二画 */
Characters[Characters.length] = {
	char: "琳",
	first: pattern_lr_left_1_right_heng_2,
	later: [h_wang, h_mu, h_mu]
}
Characters[Characters.length] = {
	char: "琢",
	first: pattern_lr_left_1_right_1,
	later: [h_wang, h_zhuoziyou]
}
Characters[Characters.length] = {
	char: "琼",
	first: pattern_lr_left_1_right_shu_many,
	later: [h_wang, d_liuzitou, s_kou, z_xiao]
}
Characters[Characters.length] = {
	char: "揍",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, h_fengzitou, h_tian]
}
Characters[Characters.length] = {
	char: "堰",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_tu, h_jiangzikuang, s_ri, z_nv]
}
Characters[Characters.length] = {
	char: "揩",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, h_bizizuo, p_bi, p_bai]
}
Characters[Characters.length] = {
	char: "揽",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, s_liangshu, p_zhutouban, s_jian]
}
Characters[Characters.length] = {
	char: "揖",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, s_kou, h_erduo]
}
Characters[Characters.length] = {
	char: "彭",
	first: pattern_lr_left_shu_many_right_1,
	later: [h_shi, s_kou, d_qianzitou, p_sanpie]
}
Characters[Characters.length] = {
	char: "揣",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, s_shan, h_erqie]
}
Characters[Characters.length] = {
	char: "搀",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, p_weizitou, s_mianzishen, d_ldsl]
}
Characters[Characters.length] = {
	char: "搓",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, d_lanzitou, h_pieyangdi, h_gong]
}
Characters[Characters.length] = {
	char: "壹",
	first: pattern_ud_up_middle_down,
	later: [h_shi, d_tubaogai, heng, s_kou, d_qianzitou]
}
Characters[Characters.length] = {
	char: "搔",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, z_cha, s_chong]
}
Characters[Characters.length] = {
	char: "葫",
	first: pattern_ud_up_1_down_heng_2,
	later: [h_caozitou, h_ten, s_kou, p_yue]
}
Characters[Characters.length] = {
	char: "募",
	first: pattern_ud_up_shu_many_down_1,
	later: [h_caozitou, s_ri, h_da, z_li]
}
Characters[Characters.length] = {
	char: "蒋",
	first: pattern_ud_up_1_down_heng_2,
	later: [h_caozitou, d_jiangzipang, p_xi, h_cun]
}
Characters[Characters.length] = {
	char: "蒂",
	first: pattern_ud_up_1_down_shu_many,
	later: [h_caozitou, d_shangzitou, d_tubaogai, s_jin]
}
Characters[Characters.length] = {
	char: "韩",
	first: pattern_lr_left_shu_many_right_1,
	later: [h_ten, s_ri, h_ten, h_wei]
}
Characters[Characters.length] = {
	char: "棱",
	first: pattern_lr_left_1_right_shu_many,
	later: [h_mu, h_tu, p_eightdian, p_zhewen]
}
Characters[Characters.length] = {
	char: "椰",
	first: pattern_lr_left_1_right_heng_2,
	later: [h_mu, h_erduo, z_youerpang]
}
Characters[Characters.length] = {
	char: "焚",
	first: pattern_ud_up_heng_2_down_1,
	later: [h_mu, h_mu, d_huo]
}
Characters[Characters.length] = {
	char: "椎",
	first: pattern_lr_left_1_right_1,
	later: [h_mu, p_quezipang]
}
Characters[Characters.length] = {
	char: "棺",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, d_baogaitou, s_guanzidi]
}
Characters[Characters.length] = {
	char: "榔",
	first: pattern_lr_left_1_right_heng_2,
	later: [h_mu, d_langzizuo, z_youerpang]
}
Characters[Characters.length] = {
	char: "椭",
	first: pattern_lr_left_middle_right,
	later: [h_mu, z_zuoerpang, h_hengpie, p_yue]
}
Characters[Characters.length] = {
	char: "粟",
	first: pattern_ud_up_1_down_1,
	later: [h_xiwuzhe, d_mi]
}
Characters[Characters.length] = {
	char: "棘",
	first: pattern_lr_left_1_right_1,
	later: [h_cizizuo, h_cizizuo]
}
Characters[Characters.length] = {
	char: "酣",
	first: pattern_lr_left_1_right_1,
	later: [h_youxin, h_ganku]
}
Characters[Characters.length] = {
	char: "酥",
	first: pattern_lr_left_1_right_1,
	later: [h_youxin, p_he]
}
Characters[Characters.length] = {
	char: "硝",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_stone, s_guangzitou, p_yue]
}
Characters[Characters.length] = {
	char: "硫",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_stone, d_chongzitou, p_liuzidi]
}
Characters[Characters.length] = {
	char: "颊",
	first: pattern_lr_left_1_right_1,
	later: [h_jia, h_ye]
}
Characters[Characters.length] = {
	char: "雳",
	first: pattern_ud_up_1_down_wei_2,
	later: [h_yu, h_chang, z_li]
}
Characters[Characters.length] = {
	char: "翘",
	first: pattern_round_left_down,
	later: [h_gewudian, h_wuzidi, z_xi, z_xi]
}
Characters[Characters.length] = {
	char: "凿",
	first: pattern_ud_up_1_down_wei_2,
	later: [s_ye, d_xinzidi, z_xiongzikuang]
}
Characters[Characters.length] = {
	char: "棠",
	first: pattern_ud_up_middle_down,
	later: [s_guangzitou, d_tubaogai, s_kou, h_mu]
}
Characters[Characters.length] = {
	char: "晰",
	first: pattern_lr_left_1_right_heng_2,
	later: [s_ri, h_mu, p_jin]
}
Characters[Characters.length] = {
	char: "鼎",
	first: pattern_ud_up_1_down_heng_2,
	later: [s_mu, z_dingxiazuo, s_dingxiayou]
}
Characters[Characters.length] = {
	char: "喳",
	first: pattern_lr_left_1_right_shu_many,
	later: [s_kou, h_mu, s_ri, heng]
}
Characters[Characters.length] = {
	char: "遏",
	first: pattern_round_left_down,
	later: [s_ri, p_baozitou, p_ren, shuzheheng, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "晾",
	first: pattern_lr_left_1_right_shu_many,
	later: [s_ri, d_liuzitou, s_kou, z_xiao]
}
Characters[Characters.length] = {
	char: "畴",
	first: pattern_lr_left_1_right_wei_2,
	later: [s_tian, h_piefeng, h_cun]
}
Characters[Characters.length] = {
	char: "跋",
	first: pattern_lr_left_1_right_wei_2,
	later: [s_zuzipang, h_hengpiedian, z_you]
}
Characters[Characters.length] = {
	char: "跛",
	first: pattern_lr_left_1_right_wei_2,
	later: [s_zuzipang, p_pizipang, z_you]
}
Characters[Characters.length] = {
	char: "蛔",
	first: pattern_lr_left_1_right_wei_2,
	later: [s_chong, s_kou, s_kou]
}
Characters[Characters.length] = {
	char: "蜒",
	first: pattern_lr_left_1_right_wei_2,
	later: [s_chong, p_yanzili, z_jianzidi]
}
Characters[Characters.length] = {
	char: "蛤",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_chong, p_ren, heng, s_kou]
}
Characters[Characters.length] = {
	char: "鹃",
	first: pattern_lr_left_shu_2_right_1,
	later: [s_kou, p_yue, p_niao]
}
Characters[Characters.length] = {
	char: "喻",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_kou, p_ren, heng, p_yue, s_lidaopang]
}
Characters[Characters.length] = {
	char: "啼",
	first: pattern_lr_left_1_right_shu_many,
	later: [s_kou, d_shangzitou, d_tubaogai, s_jin]
}
Characters[Characters.length] = {
	char: "喧",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_kou, d_baogaitou, heng, s_ri, heng]
}
Characters[Characters.length] = {
	char: "嵌",
	first: pattern_ud_up_1_down_heng_2,
	later: [s_shan, h_ganku, p_qianzitou, p_ren]
}
Characters[Characters.length] = {
	char: "赋",
	first: pattern_lr_left_1_right_wei_2,
	later: [s_bei, h_wuzikuang, s_zhi]
}
Characters[Characters.length] = {
	char: "赎",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_bei, h_ten, henggou, d_tou]
}
Characters[Characters.length] = {
	char: "赐",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_bei, s_ri, p_wuyao]
}
Characters[Characters.length] = {
	char: "锉",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_jinzipang, p_ren, p_ren, h_tu]
}
Characters[Characters.length] = {
	char: "锌",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_jinzipang, d_li, h_ten]
}
Characters[Characters.length] = {
	char: "甥",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_sheng, s_tian, z_li]
}
Characters[Characters.length] = {
	char: "掰",
	first: pattern_lr_left_middle_right,
	later: [p_baizizuo, p_eight, z_dao, p_shou]
}
Characters[Characters.length] = {
	char: "氮",
	first: pattern_round_right_up,
	later: [p_qi, d_huo, d_huo]
}
Characters[Characters.length] = {
	char: "氯",
	first: pattern_round_right_up,
	later: [p_qi, z_luzitou, z_dianshui]
}
Characters[Characters.length] = {
	char: "黍",
	first: pattern_ud_up_middle_down,
	later: [p_he, p_ren, z_dianshui]
}
Characters[Characters.length] = {
	char: "筏",
	first: pattern_ud_up_1_down_heng_2,
	later: [p_zhuzitou, p_danrenpang, h_ge]
}
Characters[Characters.length] = {
	char: "牍",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_pian, h_ten, henggou, d_tou]
}
Characters[Characters.length] = {
	char: "粤",
	first: pattern_ud_up_wei_2_down_1,
	later: [p_aozikuang, d_mi, h_qiaoziyou]
}
Characters[Characters.length] = {
	char: "逾",
	first: pattern_round_left_down,
	later: [p_ren, heng, p_yue, s_lidaopang, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "腌",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_yue, h_da, s_dian]
}
Characters[Characters.length] = {
	char: "腋",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_yue, d_liuzitou, p_danrenpang, p_yedian]
}
Characters[Characters.length] = {
	char: "腕",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_yue, d_baogaitou, p_xi, z_cangzidi]
}
Characters[Characters.length] = {
	char: "猩",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_fanquanpang, s_ri, p_sheng]
}
Characters[Characters.length] = {
	char: "猬",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_fanquanpang, s_tian, p_yue]
}
Characters[Characters.length] = {
	char: "惫",
	first: pattern_ud_up_shu_2_down_1,
	later: [p_zhewen, s_tian, d_xin]
}
Characters[Characters.length] = {
	char: "敦",
	first: pattern_lr_left_shu_many_right_1,
	later: [d_liuzitou, s_kou, z_zi, p_fanwenpang]
}
Characters[Characters.length] = {
	char: "痘",
	first: pattern_round_left_up,
	later: [d_bingzitou, heng, s_kou, d_qianzitou]
}
Characters[Characters.length] = {
	char: "痢",
	first: pattern_round_left_up,
	later: [d_bingzitou, p_he, s_lidaopang]
}
Characters[Characters.length] = {
	char: "痪",
	first: pattern_round_left_up,
	later: [d_bingzitou, p_weizitou, s_yangwutou]
}
Characters[Characters.length] = {
	char: "竣",
	first: pattern_lr_left_1_right_shu_many,
	later: [d_li, z_sigong, p_eightdian, p_zhewen]
}
Characters[Characters.length] = {
	char: "翔",
	first: pattern_lr_left_shu_2_right_heng_2,
	later: [d_lanzitou, h_pieyangdi, z_xi, z_xi]
}
Characters[Characters.length] = {
	char: "奠",
	first: pattern_ud_up_shu_2_down_1,
	later: [d_lanzitou, h_youxin, h_da]
}
Characters[Characters.length] = {
	char: "遂",
	first: pattern_round_left_down,
	later: [d_lanzitou, h_zhizhu, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "焙",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_huo, d_li, s_kou]
}
Characters[Characters.length] = {
	char: "滞",
	first: pattern_lr_left_1_right_shu_many,
	later: [d_sandianshui, h_daizitou, d_tubaogai, s_jin]
}
Characters[Characters.length] = {
	char: "湘",
	first: pattern_lr_left_1_right_heng_2,
	later: [d_sandianshui, h_mu, s_mu]
}
Characters[Characters.length] = {
	char: "渤",
	first: pattern_lr_left_1_right_heng_2,
	later: [d_sandianshui, h_ten, d_tubaogai, z_zi, z_li]
}
Characters[Characters.length] = {
	char: "渺",
	first: pattern_lr_left_1_right_heng_2,
	later: [d_sandianshui, s_mu, s_shao]
}
Characters[Characters.length] = {
	char: "溃",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, s_gezidi, s_bei]
}
Characters[Characters.length] = {
	char: "溅",
	first: pattern_lr_left_1_right_heng_2,
	later: [d_sandianshui, s_bei, h_zhan]
}
Characters[Characters.length] = {
	char: "湃",
	first: pattern_lr_left_1_right_heng_2,
	later: [d_sandianshui, p_baizizuo, h_baiziyou]
}
Characters[Characters.length] = {
	char: "愕",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_shuxinpang, s_siwuzhe, h_kui]
}
Characters[Characters.length] = {
	char: "惶",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_shuxinpang, p_bai, h_wang]
}
Characters[Characters.length] = {
	char: "寓",
	first: pattern_ud_up_1_down_1,
	later: [d_baogaitou, s_yu]
}
Characters[Characters.length] = {
	char: "窖",
	first: pattern_ud_up_1_down_shu_2,
	later: [d_xuezitou, p_niuwuwei, s_kou]
}
Characters[Characters.length] = {
	char: "窘",
	first: pattern_ud_up_1_down_wei_2,
	later: [d_xuezitou, z_yin, s_kou]
}
Characters[Characters.length] = {
	char: "雇",
	first: pattern_round_left_up,
	later: [d_hu, p_quezipang]
}
Characters[Characters.length] = {
	char: "谤",
	first: pattern_lr_left_1_right_shu_many,
	later: [d_yanzipang, d_shangzitou, d_tubaogai, d_fang]
}
Characters[Characters.length] = {
	char: "犀",
	first: pattern_round_left_up,
	later: [z_shi, s_dianshui, p_niu]
}
Characters[Characters.length] = {
	char: "隘",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_zuoerpang, d_yizitou, s_minzidi]
}
Characters[Characters.length] = {
	char: "媒",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_nv, h_ganku, h_mu]
}
Characters[Characters.length] = {
	char: "媚",
	first: pattern_lr_left_1_right_wei_2,
	later: [z_nv, z_meizitou, s_mu]
}
Characters[Characters.length] = {
	char: "婿",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_nv, z_xuanyouxia, p_yue]
}
Characters[Characters.length] = {
	char: "缅",
	first: pattern_lr_left_1_right_1,
	later: [z_jiaosipang, h_mian]
}
Characters[Characters.length] = {
	char: "缆",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_jiaosipang, s_liangshu, p_zhutouban, s_jian]
}
Characters[Characters.length] = {
	char: "缔",
	first: pattern_lr_left_1_right_shu_many,
	later: [z_jiaosipang, d_shangzitou, d_tubaogai, s_jin]
}
Characters[Characters.length] = {
	char: "缕",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_jiaosipang, d_mi, z_nv]
}
Characters[Characters.length] = {
	char: "骚",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_ma, z_cha, s_chong]
}

/* 十三画 */
Characters[Characters.length] = {
	char: "瑟",
	first: pattern_ud_up_heng_2_down_1,
	later: [h_wang, h_wang, d_bi]
}
Characters[Characters.length] = {
	char: "鹉",
	first: pattern_lr_left_shu_2_right_1,
	later: [h_wuzikuang, s_zhi, p_niao]
}
Characters[Characters.length] = {
	char: "瑰",
	first: pattern_lr_left_1_right_1,
	later: [h_wang, p_gui]
}
Characters[Characters.length] = {
	char: "搪",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_tishoupang, d_guang, z_tangzili, s_kou]
}
Characters[Characters.length] = {
	char: "聘",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_erduo, s_you, h_qiaoziyou]
}
Characters[Characters.length] = {
	char: "斟",
	first: pattern_lr_left_shu_2_right_1,
	later: [h_qizitou, p_eightdian, shuzheheng, d_dou]
}
Characters[Characters.length] = {
	char: "靴",
	first: pattern_lr_left_shu_2_right_heng_2,
	later: [h_caoheng, s_gezidi, p_danrenpang, p_bi]
}
Characters[Characters.length] = {
	char: "靶",
	first: pattern_lr_left_shu_2_right_1,
	later: [h_caoheng, s_gezidi, z_ba]
}
Characters[Characters.length] = {
	char: "蓖",
	first: pattern_ud_up_1_down_shu_2,
	later: [h_caozitou, p_congzikuang, p_xichudian, h_bizizuo, p_bi]
}
Characters[Characters.length] = {
	char: "蒿",
	first: pattern_ud_up_1_down_shu_many,
	later: [h_caozitou, d_liuzitou, s_kou, s_tongzikuang, s_kou]
}
Characters[Characters.length] = {
	char: "蒲",
	first: pattern_ud_up_1_down_heng_2,
	later: [h_caozitou, d_sandianshui, h_fudu]
}
Characters[Characters.length] = {
	char: "蓉",
	first: pattern_ud_up_1_down_shu_2,
	later: [h_caozitou, d_baogaitou, p_eightdian, p_ren, s_kou]
}
Characters[Characters.length] = {
	char: "楔",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, h_feng, z_dao, h_da]
}
Characters[Characters.length] = {
	char: "椿",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, h_fengzitou, s_ri]
}
Characters[Characters.length] = {
	char: "楷",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, h_bizizuo, p_bi, p_bai]
}
Characters[Characters.length] = {
	char: "榄",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, s_liangshu, p_zhutouban, s_jian]
}
Characters[Characters.length] = {
	char: "楞",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, s_siwuzhe, d_fang]
}
Characters[Characters.length] = {
	char: "楣",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_mu, z_meizitou, s_mu]
}
Characters[Characters.length] = {
	char: "酪",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_youxin, p_zhewen, s_kou]
}
Characters[Characters.length] = {
	char: "碘",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_stone, s_dianzitou, p_eightdian]
}
Characters[Characters.length] = {
	char: "硼",
	first: pattern_lr_left_1_right_heng_2,
	later: [h_stone, p_yue, p_yue]
}
Characters[Characters.length] = {
	char: "碉",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_stone, p_zhouzikuang, h_tu, s_kou]
}
Characters[Characters.length] = {
	char: "辐",
	first: pattern_lr_left_1_right_shu_many,
	later: [h_che, heng, s_kou, s_tian]
}
Characters[Characters.length] = {
	char: "辑",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_che, s_kou, h_erduo]
}
Characters[Characters.length] = {
	char: "频",
	first: pattern_lr_left_shu_2_right_1,
	later: [s_zhi, s_shaowud, h_ye]
}
Characters[Characters.length] = {
	char: "睹",
	first: pattern_lr_left_1_right_wei_2,
	later: [s_mu, h_laozitou, s_ri]
}
Characters[Characters.length] = {
	char: "睦",
	first: pattern_lr_left_1_right_shu_many,
	later: [s_mu, h_tu, p_eightdian, h_tu]
}
Characters[Characters.length] = {
	char: "瞄",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_mu, h_caozitou, s_tian]
}
Characters[Characters.length] = {
	char: "嗜",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_kou, h_laozitou, p_bi, s_ri]
}
Characters[Characters.length] = {
	char: "嗦",
	first: pattern_lr_left_1_right_shu_many,
	later: [s_kou, h_ten, d_tubaogai, z_youzipang, z_xiao]
}
Characters[Characters.length] = {
	char: "暇",
	first: pattern_lr_left_1_right_heng_2,
	later: [s_ri, z_jiazizuo, z_zuokai, z_you]
}
Characters[Characters.length] = {
	char: "畸",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_tian, h_da, h_ding, s_kou]
}
Characters[Characters.length] = {
	char: "跷",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_zuzipang, h_gewudian, h_wuzidi]
}
Characters[Characters.length] = {
	char: "跺",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_zuzipang, p_ji, h_mu]
}
Characters[Characters.length] = {
	char: "蜈",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_chong, s_kou, h_tian]
}
Characters[Characters.length] = {
	char: "蜗",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_chong, s_kou, s_nei]
}
Characters[Characters.length] = {
	char: "蜕",
	first: pattern_lr_left_1_right_shu_many,
	later: [s_chong, d_lanzitou, s_kou, p_er]
}
Characters[Characters.length] = {
	char: "蛹",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_chong, z_yongzitou, p_yong]
}
Characters[Characters.length] = {
	char: "嗅",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_kou, p_zi, h_quan]
}
Characters[Characters.length] = {
	char: "嗡",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_kou, p_eight, z_xi, z_xi]
}
Characters[Characters.length] = {
	char: "嗤",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_kou, z_chiyoush, s_chong]
}
Characters[Characters.length] = {
	char: "署",
	first: pattern_ud_up_1_down_wei_2,
	later: [s_siwuzhe, h_laozitou, s_ri]
}
Characters[Characters.length] = {
	char: "蜀",
	first: pattern_ud_up_1_down_wei_2,
	later: [s_siwuzhe, p_baozitou, s_chong]
}
Characters[Characters.length] = {
	char: "幌",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_jin, s_ri, s_guangzitou, h_wuzidi]
}
Characters[Characters.length] = {
	char: "锚",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_jinzipang, h_caozitou, s_tian]
}
Characters[Characters.length] = {
	char: "锥",
	first: pattern_lr_left_1_right_1,
	later: [p_jinzipang, p_quezipang]
}
Characters[Characters.length] = {
	char: "锨",
	first: pattern_lr_left_1_right_heng_2,
	later: [p_jinzipang, p_jin, p_qianzitou, p_ren]
}
Characters[Characters.length] = {
	char: "锭",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_jinzipang, d_baogaitou, h_shizidi]
}
Characters[Characters.length] = {
	char: "锰",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_jinzipang, z_zi, s_minzidi]
}
Characters[Characters.length] = {
	char: "稚",
	first: pattern_lr_left_1_right_1,
	later: [p_he, p_quezipang]
}
Characters[Characters.length] = {
	char: "颓",
	first: pattern_lr_left_shu_2_right_1,
	later: [p_he, p_ji, h_ye]
}
Characters[Characters.length] = {
	char: "筷",
	first: pattern_ud_up_1_down_heng_2,
	later: [p_zhuzitou, d_shuxinpang, z_jueziyou]
}
Characters[Characters.length] = {
	char: "魁",
	first: pattern_round_left_down,
	later: [p_gui, d_dou]
}
Characters[Characters.length] = {
	char: "衙",
	first: pattern_lr_left_middle_right,
	later: [p_shuangrenpang, h_five, s_kou, h_xingziyou]
}
Characters[Characters.length] = {
	char: "腻",
	first: pattern_lr_left_1_right_wei_2,
	later: [p_yue, h_shizikuang, h_two, s_bei]
}
Characters[Characters.length] = {
	char: "腮",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_yue, s_tian, d_xin]
}
Characters[Characters.length] = {
	char: "腺",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_yue, p_bai, z_shui]
}
Characters[Characters.length] = {
	char: "鹏",
	first: pattern_lr_left_heng_2_right_1,
	later: [p_yue, p_yue, p_niao]
}
Characters[Characters.length] = {
	char: "肄",
	first: pattern_lr_left_shu_2_right_1,
	later: [p_bi, p_shi, z_yuming]
}
Characters[Characters.length] = {
	char: "猿",
	first: pattern_lr_left_1_right_shu_many,
	later: [p_fanquanpang, h_tu, s_kou, p_yizidi]
}
Characters[Characters.length] = {
	char: "颖",
	first: pattern_lr_left_shu_2_right_1,
	later: [p_bi, p_he, h_ye]
}
Characters[Characters.length] = {
	char: "煞",
	first: pattern_ud_up_heng_2_down_1,
	later: [p_weizitou, z_xunzitou, p_fanwenpang, d_sidiandi]
}
Characters[Characters.length] = {
	char: "雏",
	first: pattern_lr_left_1_right_1,
	later: [p_weizitou, z_xunzitou, p_quezipang]
}
Characters[Characters.length] = {
	char: "馍",
	first: pattern_lr_left_1_right_shu_many,
	later: [p_shichi, h_caozitou, s_ri, h_da]
}
Characters[Characters.length] = {
	char: "馏",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_shichi, p_maoshangzuo, z_dao, s_tian]
}
Characters[Characters.length] = {
	char: "禀",
	first: pattern_ud_up_middle_down,
	later: [d_liuzitou, s_kou, s_kou, h_two, z_xiao]
}
Characters[Characters.length] = {
	char: "痹",
	first: pattern_round_left_up,
	later: [d_bingzitou, s_tian, h_piecaobuchu]
}
Characters[Characters.length] = {
	char: "廓",
	first: pattern_round_left_up,
	later: [d_guang, d_liuzitou, s_kou, z_zi, z_youerpang]
}
Characters[Characters.length] = {
	char: "痴",
	first: pattern_round_left_up,
	later: [d_bingzitou, p_shi, s_kou]
}
Characters[Characters.length] = {
	char: "靖",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_li, h_qingzitou, p_yue]
}
Characters[Characters.length] = {
	char: "誊",
	first: pattern_ud_up_1_down_shu_many,
	later: [d_juanzitou, d_liuzitou, h_two, s_kou]
}
Characters[Characters.length] = {
	char: "漓",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, d_liuzitou, p_chadian, z_xiongzikuang, s_tongzikuang, z_sigong]
}
Characters[Characters.length] = {
	char: "溢",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, d_yizitou, s_minzidi]
}
Characters[Characters.length] = {
	char: "溯",
	first: pattern_lr_left_1_right_heng_2,
	later: [d_sandianshui, d_ni, p_yue]
}
Characters[Characters.length] = {
	char: "溶",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, d_baogaitou, p_eightdian, p_ren, s_kou]
}
Characters[Characters.length] = {
	char: "滓",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, d_baogaitou, d_li, h_ten]
}
Characters[Characters.length] = {
	char: "溺",
	first: pattern_lr_left_1_right_heng_2,
	later: [d_sandianshui, z_gong, d_liangdianshui, z_gong, d_liangdianshui]
}
Characters[Characters.length] = {
	char: "寞",
	first: pattern_ud_up_1_down_shu_many,
	later: [d_baogaitou, h_caozitou, s_ri, h_da]
}
Characters[Characters.length] = {
	char: "窥",
	first: pattern_ud_up_1_down_heng_2,
	later: [d_xuezitou, h_fu, s_jian]
}
Characters[Characters.length] = {
	char: "窟",
	first: pattern_ud_up_1_down_wei_2,
	later: [d_xuezitou, z_shi, z_chu]
}
Characters[Characters.length] = {
	char: "寝",
	first: pattern_ud_up_1_down_heng_2,
	later: [d_baogaitou, d_jiangzipang, z_xunzitou, d_tubaogai, z_you]
}
Characters[Characters.length] = {
	char: "褂",
	first: pattern_lr_left_1_right_heng_2,
	later: [d_buyipang, h_tu, h_tu, s_bu]
}
Characters[Characters.length] = {
	char: "裸",
	first: pattern_lr_left_1_right_1,
	later: [d_buyipang, s_guo]
}
Characters[Characters.length] = {
	char: "谬",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_yanzipang, z_xi, z_xi, p_ren, p_sanpie]
}
Characters[Characters.length] = {
	char: "媳",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_nv, p_zi, d_xin]
}
Characters[Characters.length] = {
	char: "嫉",
	first: pattern_lr_left_1_right_wei_2,
	later: [z_nv, d_bingzitou, p_shi]
}
Characters[Characters.length] = {
	char: "缚",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_jiaosipang, h_fudu, h_cun]
}
Characters[Characters.length] = {
	char: "缤",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_jiaosipang, d_baogaitou, p_qiu, p_eightdian]
}
Characters[Characters.length] = {
	char: "剿",
	first: pattern_lr_left_shu_2_right_1,
	later: [z_sanzhe, s_guo, s_lidaopang]
}

/* 十四画 */
Characters[Characters.length] = {
	char: "赘",
	first: pattern_ud_up_heng_2_down_1,
	later: [h_qingzitou, z_fangzidi, p_fanwenpang, s_bei]
}
Characters[Characters.length] = {
	char: "熬",
	first: pattern_ud_up_heng_2_down_1,
	later: [h_qingzitou, z_fangzidi, p_fanwenpang, d_sidiandi]
}
Characters[Characters.length] = {
	char: "赫",
	first: pattern_lr_left_shu_2_right_shu_2,
	later: [h_tu, p_chizidi, h_tu, p_chizidi]
}
Characters[Characters.length] = {
	char: "蔫",
	first: pattern_ud_up_1_down_shu_2,
	later: [h_caozitou, h_zheng, h_yuwuheng, d_sidiandi]
}
Characters[Characters.length] = {
	char: "摹",
	first: pattern_ud_up_shu_many_down_1,
	later: [h_caozitou, s_ri, h_da, p_shou]
}
Characters[Characters.length] = {
	char: "蔓",
	first: pattern_ud_up_1_down_shu_many,
	later: [h_caozitou, s_ri, s_siwuzhe, z_you]
}
Characters[Characters.length] = {
	char: "蔗",
	first: pattern_ud_up_1_down_wei_2,
	later: [h_caozitou, d_guang, h_caoheng, d_sidiandi]
}
Characters[Characters.length] = {
	char: "蔼",
	first: pattern_ud_up_1_down_heng_2,
	later: [h_caozitou, d_yanzipang, s_ri, p_baozitou, p_ren, shuzheheng]
}
Characters[Characters.length] = {
	char: "熙",
	first: pattern_ud_up_heng_2_down_1,
	later: [h_jimei, z_si, d_sidiandi]
}
Characters[Characters.length] = {
	char: "蔚",
	first: pattern_ud_up_1_down_heng_2,
	later: [h_caozitou, z_shi, h_two, z_xiao, h_cun]
}
Characters[Characters.length] = {
	char: "兢",
	first: pattern_lr_left_shu_many_right_shu_many,
	later: [h_ten, s_kou, p_er, h_ten, s_kou, p_er]
}
Characters[Characters.length] = {
	char: "榛",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, h_fengzitou, p_he]
}
Characters[Characters.length] = {
	char: "榕",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, d_baogaitou, p_eightdian, p_ren, s_kou]
}
Characters[Characters.length] = {
	char: "酵",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_youxin, h_laozitou, z_zi]
}
Characters[Characters.length] = {
	char: "碟",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_stone, h_shijie, h_mu]
}
Characters[Characters.length] = {
	char: "碴",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_stone, h_mu, s_ri, heng]
}
Characters[Characters.length] = {
	char: "碱",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_stone, h_xianzikuang, heng, s_kou]
}
Characters[Characters.length] = {
	char: "碳",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_stone, s_shan, h_hengpie, d_huo]
}
Characters[Characters.length] = {
	char: "辕",
	first: pattern_lr_left_1_right_shu_many,
	later: [h_che, h_tu, s_kou, p_yizidi]
}
Characters[Characters.length] = {
	char: "辖",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_che, d_baogaitou, h_feng, s_kou]
}
Characters[Characters.length] = {
	char: "雌",
	first: pattern_lr_left_heng_2_right_1,
	later: [s_zhi, p_bi, p_quezipang]
}
Characters[Characters.length] = {
	char: "墅",
	first: pattern_ud_up_heng_2_down_1,
	later: [s_li, z_yu, h_tu]
}
Characters[Characters.length] = {
	char: "嘁",
	first: pattern_lr_left_1_right_wei_2,
	later: [s_kou, h_xianzikuang, s_shang, z_xiao]
}
Characters[Characters.length] = {
	char: "踊",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_zuzipang, z_yongzitou, p_yong]
}
Characters[Characters.length] = {
	char: "蝉",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_chong, d_lanzitou, s_danzidi]
}
Characters[Characters.length] = {
	char: "嘀",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_kou, d_shangzitou, s_tongzikuang, h_ten, s_kou]
}
Characters[Characters.length] = {
	char: "幔",
	first: pattern_lr_left_1_right_shu_many,
	later: [s_jin, s_ri, s_siwuzhe, z_you]
}
Characters[Characters.length] = {
	char: "镀",
	first: pattern_lr_left_1_right_wei_2,
	later: [p_jinzipang, d_guang, h_caoheng, z_you]
}
Characters[Characters.length] = {
	char: "舔",
	first: pattern_lr_left_shu_2_right_shu_2,
	later: [p_thousand, s_kou, h_tian, z_xiaodian]
}
Characters[Characters.length] = {
	char: "熏",
	first: pattern_ud_up_1_down_1,
	later: [p_xun, d_sidiandi]
}
Characters[Characters.length] = {
	char: "箍",
	first: pattern_ud_up_1_down_heng_2,
	later: [p_zhuzitou, h_tishoupang, h_jiangzikuang, s_jin]
}
Characters[Characters.length] = {
	char: "箕",
	first: pattern_ud_up_1_down_shu_2,
	later: [p_zhuzitou, h_qizitou, p_eightdian]
}
Characters[Characters.length] = {
	char: "箫",
	first: pattern_ud_up_1_down_1,
	later: [p_zhuzitou, z_su]
}
Characters[Characters.length] = {
	char: "舆",
	first: pattern_ud_up_heng_many_down_1,
	later: [p_yushangzuo, h_che, z_yushangyou, h_hengjiatui]
}
Characters[Characters.length] = {
	char: "僧",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, d_lanzitou, s_zengzizh, s_ri]
}
Characters[Characters.length] = {
	char: "孵",
	first: pattern_lr_left_heng_2_right_shu_2,
	later: [p_maozizuo, dian, z_danerpang, dian, p_caizitou, z_zi]
}
Characters[Characters.length] = {
	char: "瘩",
	first: pattern_round_left_up,
	later: [d_bingzitou, h_caozitou, p_ren, heng, s_kou]
}
Characters[Characters.length] = {
	char: "瘟",
	first: pattern_round_left_up,
	later: [d_bingzitou, s_ri, s_minzidi]
}
Characters[Characters.length] = {
	char: "彰",
	first: pattern_lr_left_shu_many_right_1,
	later: [d_li, s_ri, h_ten, p_sanpie]
}
Characters[Characters.length] = {
	char: "粹",
	first: pattern_lr_left_1_right_shu_many,
	later: [d_mi, d_liuzitou, p_ren, p_ren, h_ten]
}
Characters[Characters.length] = {
	char: "漱",
	first: pattern_lr_left_1_right_heng_2,
	later: [d_sandianshui, h_shufu, p_fanwenpang]
}
Characters[Characters.length] = {
	char: "漩",
	first: pattern_lr_left_1_right_heng_2,
	later: [d_sandianshui, d_fang, p_pieheng, z_xuanyouxia]
}
Characters[Characters.length] = {
	char: "漾",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, d_lanzitou, h_wang, d_yong]
}
Characters[Characters.length] = {
	char: "慷",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_shuxinpang, d_guang, z_lishu]
}
Characters[Characters.length] = {
	char: "寡",
	first: pattern_ud_up_1_down_shu_2,
	later: [d_baogaitou, h_guazizhong, p_eight, z_dao]
}
Characters[Characters.length] = {
	char: "寥",
	first: pattern_ud_up_1_down_shu_2,
	later: [d_baogaitou, z_xi, z_xi, p_ren, p_sanpie]
}
Characters[Characters.length] = {
	char: "谭",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_yanzipang, h_xiwuzhe, s_ri, h_ten]
}
Characters[Characters.length] = {
	char: "褐",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_buyipang, s_ri, p_baozitou, p_ren, shuzheheng]
}
Characters[Characters.length] = {
	char: "褪",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_buyipang, z_henziyou, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "隧",
	first: pattern_lr_left_1_right_wei_2,
	later: [z_zuoerpang, d_lanzitou, h_zhizhu, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "嫡",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_nv, d_shangzitou, s_tongzikuang, h_ten, s_kou]
}
Characters[Characters.length] = {
	char: "缨",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_jiaosipang, s_bei, s_bei, z_nv]
}

/* 十五画 */
Characters[Characters.length] = {
	char: "撵",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, h_fu, h_fu, h_che]
}
Characters[Characters.length] = {
	char: "撩",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, h_liaoyoush, s_ri, z_xiao]
}
Characters[Characters.length] = {
	char: "撮",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, s_ri, h_erduo, z_you]
}
Characters[Characters.length] = {
	char: "撬",
	first: pattern_lr_left_1_right_shu_many,
	later: [h_tishoupang, p_mao, p_mao, p_mao]
}
Characters[Characters.length] = {
	char: "擒",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, p_ren, d_liuzitou, p_chadian, z_xiongzikuang, s_tongzikuang, z_sigong]
}
Characters[Characters.length] = {
	char: "墩",
	first: pattern_lr_left_1_right_heng_2,
	later: [h_tu, d_liuzitou, s_kou, z_zi, p_fanwenpang]
}
Characters[Characters.length] = {
	char: "撰",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, z_si, z_si, h_gongzitou, p_eightdian]
}
Characters[Characters.length] = {
	char: "鞍",
	first: pattern_lr_left_shu_2_right_shu_2,
	later: [h_caoheng, s_gezidi, d_baogaitou, z_nv]
}
Characters[Characters.length] = {
	char: "蕊",
	first: pattern_ud_up_1_down_shu_many,
	later: [h_caozitou, d_xin, d_xin, d_xin]
}
Characters[Characters.length] = {
	char: "蕴",
	first: pattern_ud_up_1_down_heng_2,
	later: [h_caozitou, z_jiaosipang, s_ri, s_minzidi]
}
Characters[Characters.length] = {
	char: "樊",
	first: pattern_ud_up_heng_many_down_1,
	later: [h_mu, p_chadian, p_chadian, h_mu, h_da]
}
Characters[Characters.length] = {
	char: "樟",
	first: pattern_lr_left_1_right_shu_many,
	later: [h_mu, d_li, s_ri, h_ten]
}
Characters[Characters.length] = {
	char: "橄",
	first: pattern_lr_left_1_right_heng_2,
	later: [h_mu, z_ganzizuo, p_fanwenpang]
}
Characters[Characters.length] = {
	char: "敷",
	first: pattern_lr_left_shu_2_right_1,
	later: [h_fudu, d_fang, p_fanwenpang]
}
Characters[Characters.length] = {
	char: "豌",
	first: pattern_lr_left_shu_many_right_shu_many,
	later: [heng, s_kou, d_qianzitou, d_baogaitou, p_xi, z_cangzidi]
}
Characters[Characters.length] = {
	char: "醇",
	first: pattern_lr_left_1_right_shu_many,
	later: [h_youxin, d_liuzitou, s_kou, z_zi]
}
Characters[Characters.length] = {
	char: "磕",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_stone, h_tu, z_sigong, s_minzidi]
}
Characters[Characters.length] = {
	char: "磅",
	first: pattern_lr_left_1_right_shu_many,
	later: [h_stone, d_shangzitou, d_tubaogai, d_fang]
}
Characters[Characters.length] = {
	char: "碾",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_stone, z_shi, h_gongzitou, z_sangzidi]
}
Characters[Characters.length] = {
	char: "憋",
	first: pattern_ud_up_heng_2_down_1,
	later: [d_bizizuo, p_fanwenpang, d_xin]
}
Characters[Characters.length] = {
	char: "嘶",
	first: pattern_lr_left_1_right_heng_2,
	later: [s_kou, h_qizitou, p_eightdian, p_jin]
}
Characters[Characters.length] = {
	char: "嘲",
	first: pattern_lr_left_1_right_heng_2,
	later: [s_kou, h_ten, s_ri, h_ten, p_yue]
}
Characters[Characters.length] = {
	char: "嘹",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_kou, h_liaoyoush, s_ri, z_xiao]
}
Characters[Characters.length] = {
	char: "蝠",
	first: pattern_lr_left_1_right_shu_many,
	later: [s_chong, heng, s_kou, s_tian]
}
Characters[Characters.length] = {
	char: "蝎",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_chong, s_ri, p_baozitou, p_ren, shuzheheng]
}
Characters[Characters.length] = {
	char: "蝌",
	first: pattern_lr_left_1_right_heng_2,
	later: [s_chong, p_he, d_dou]
}
Characters[Characters.length] = {
	char: "蝗",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_chong, p_bai, h_wang]
}
Characters[Characters.length] = {
	char: "蝙",
	first: pattern_lr_left_1_right_wei_2,
	later: [s_chong, d_hu, s_bianzili]
}
Characters[Characters.length] = {
	char: "嘿",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_kou, s_heizitou, d_sidiandi]
}
Characters[Characters.length] = {
	char: "幢",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_jin, d_li, s_li]
}
Characters[Characters.length] = {
	char: "镊",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_jinzipang, h_erduo, z_you, z_you]
}
Characters[Characters.length] = {
	char: "镐",
	first: pattern_lr_left_1_right_shu_many,
	later: [p_jinzipang, d_liuzitou, s_kou, s_tongzikuang, s_kou]
}
Characters[Characters.length] = {
	char: "稽",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_he, h_youqi, p_bi, s_ri]
}
Characters[Characters.length] = {
	char: "篓",
	first: pattern_ud_up_1_down_shu_2,
	later: [p_zhuzitou, d_mi, z_nv]
}
Characters[Characters.length] = {
	char: "膘",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_yue, h_xiwuzhe, h_two, z_xiao]
}
Characters[Characters.length] = {
	char: "鲤",
	first: pattern_lr_left_shu_many_right_1,
	later: [p_weizitou, s_tian, heng, s_li]
}
Characters[Characters.length] = {
	char: "鲫",
	first: pattern_lr_left_shu_many_right_heng_many,
	later: [p_weizitou, s_tian, heng, z_jizizuo, z_danerpang]
}
Characters[Characters.length] = {
	char: "褒",
	first: pattern_ud_up_middle_down,
	later: [d_liuzitou, p_danrenpang, s_kou, h_mu, p_yizidi]
}
Characters[Characters.length] = {
	char: "瘪",
	first: pattern_round_left_up,
	later: [d_bingzitou, p_zi, p_ren, p_bi]
}
Characters[Characters.length] = {
	char: "瘤",
	first: pattern_round_left_up,
	later: [d_bingzitou, p_maoshangzuo, z_dao, s_tian]
}
Characters[Characters.length] = {
	char: "瘫",
	first: pattern_round_left_up,
	later: [d_bingzitou, z_you, p_quezipang]
}
Characters[Characters.length] = {
	char: "凛",
	first: pattern_lr_left_1_right_shu_many,
	later: [d_liangdianshui, d_liuzitou, s_kou, s_kou, h_two, z_xiao]
}
Characters[Characters.length] = {
	char: "澎",
	first: pattern_lr_left_1_right_heng_2,
	later: [d_sandianshui, h_tu, s_kou, d_qianzitou, p_sanpie]
}
Characters[Characters.length] = {
	char: "潭",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, h_xiwuzhe, s_ri, h_ten]
}
Characters[Characters.length] = {
	char: "潦",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, h_liaoyoush, s_ri, z_xiao]
}
Characters[Characters.length] = {
	char: "澳",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, p_aozikuang, d_mi, h_da]
}
Characters[Characters.length] = {
	char: "潘",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, p_fanzitou, s_tian]
}
Characters[Characters.length] = {
	char: "澈",
	first: pattern_lr_left_1_right_heng_2,
	later: [d_sandianshui, d_chongzitou, p_yue, p_fanwenpang]
}
Characters[Characters.length] = {
	char: "澜",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_sandianshui, d_men, h_jian]
}
Characters[Characters.length] = {
	char: "澄",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_sandianshui, z_dengshangzuo, p_dengshangyou, heng, s_kou, d_qianzitou]
}
Characters[Characters.length] = {
	char: "憔",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_shuxinpang, p_quezipang, d_sidiandi]
}
Characters[Characters.length] = {
	char: "懊",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_shuxinpang, p_aozikuang, d_mi, h_da]
}
Characters[Characters.length] = {
	char: "憎",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_shuxinpang, d_lanzitou, s_zengzizh, s_ri]
}
Characters[Characters.length] = {
	char: "翩",
	first: pattern_lr_left_shu_2_right_heng_2,
	later: [d_hu, s_bianzili, z_xi, z_xi]
}
Characters[Characters.length] = {
	char: "褥",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_buyipang, h_chang, h_two, z_sangzidi, h_cun]
}
Characters[Characters.length] = {
	char: "谴",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_yanzipang, s_guizitou, s_guanzidi, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "鹤",
	first: pattern_lr_left_1_right_1,
	later: [d_tubaogai, p_quezipang, p_niao]
}
Characters[Characters.length] = {
	char: "憨",
	first: pattern_ud_up_heng_2_down_1,
	later: [z_ganzizuo, p_fanwenpang, d_xin]
}
Characters[Characters.length] = {
	char: "履",
	first: pattern_round_left_up,
	later: [z_shi, p_shuangrenpang, p_pieheng, s_ri, p_zhewen]
}
Characters[Characters.length] = {
	char: "嬉",
	first: pattern_lr_left_1_right_shu_many,
	later: [z_nv, h_shi, s_kou, d_qianzitou, s_kou]
}
Characters[Characters.length] = {
	char: "豫",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_yu, p_weizitou, s_xiangzishen]
}
Characters[Characters.length] = {
	char: "缭",
	first: pattern_lr_left_1_right_shu_2,
	later: [z_jiaosipang, h_liaoyoush, s_ri, z_xiao]
}

/* 十六画 */
Characters[Characters.length] = {
	char: "撼",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, h_xianzikuang, heng, s_kou, d_xin]
}
Characters[Characters.length] = {
	char: "擂",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, h_yu, s_tian]
}
Characters[Characters.length] = {
	char: "擅",
	first: pattern_lr_left_1_right_shu_many,
	later: [h_tishoupang, d_liuzitou, s_kou, s_kou, s_ri, heng]
}
Characters[Characters.length] = {
	char: "蕾",
	first: pattern_ud_up_1_down_shu_2,
	later: [h_caozitou, h_yu, s_tian]
}
Characters[Characters.length] = {
	char: "薛",
	first: pattern_ud_up_1_down_shu_2,
	later: [h_caozitou, pie, p_zhuizili, d_li, h_ten]
}
Characters[Characters.length] = {
	char: "薇",
	first: pattern_ud_up_1_down_heng_many,
	later: [h_caozitou, p_shuangrenpang, s_shan, heng, p_ji, p_fanwenpang]
}
Characters[Characters.length] = {
	char: "擎",
	first: pattern_ud_up_heng_2_down_1,
	later: [h_caozitou, p_baozitou, s_kou, p_fanwenpang, p_shou]
}
Characters[Characters.length] = {
	char: "翰",
	first: pattern_lr_left_shu_many_right_shu_many,
	later: [h_ten, s_ri, h_ten, p_ren, z_xi, z_xi]
}
Characters[Characters.length] = {
	char: "噩",
	first: pattern_round_left_right,
	later: [h_wang, s_kou, s_kou, s_kou, s_kou]
}
Characters[Characters.length] = {
	char: "橱",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_mu, h_chang, heng, s_kou, d_qianzitou, h_cun]
}
Characters[Characters.length] = {
	char: "橙",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_mu, z_dengshangzuo, p_dengshangyou, heng, s_kou, d_qianzitou]
}
Characters[Characters.length] = {
	char: "瓢",
	first: pattern_lr_left_shu_2_right_1,
	later: [h_xiwuzhe, h_two, z_xiao, p_gua]
}
Characters[Characters.length] = {
	char: "蟥",
	first: pattern_lr_left_1_right_shu_many,
	later: [s_chong, h_gongzitou, s_you, p_eightdian]
}
Characters[Characters.length] = {
	char: "霍",
	first: pattern_ud_up_1_down_1,
	later: [h_yushui, p_quezipang]
}
Characters[Characters.length] = {
	char: "霎",
	first: pattern_ud_up_1_down_shu_2,
	later: [h_yushui, d_li, z_nv]
}
Characters[Characters.length] = {
	char: "辙",
	first: pattern_lr_left_1_right_heng_2,
	later: [h_che, d_chongzitou, p_yue, p_fanwenpang]
}
Characters[Characters.length] = {
	char: "冀",
	first: pattern_ud_up_middle_down,
	later: [s_beizizuo, p_bi, s_tian, h_gongzitou, p_eightdian]
}
Characters[Characters.length] = {
	char: "踱",
	first: pattern_lr_left_1_right_wei_2,
	later: [s_zuzipang, d_guang, h_caoheng, z_you]
}
Characters[Characters.length] = {
	char: "蹂",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_zuzipang, z_mao, h_mu]
}
Characters[Characters.length] = {
	char: "蟆",
	first: pattern_lr_left_1_right_shu_many,
	later: [s_chong, h_caozitou, s_ri, h_da]
}
Characters[Characters.length] = {
	char: "螃",
	first: pattern_lr_left_1_right_shu_many,
	later: [s_chong, d_shangzitou, d_tubaogai, d_fang]
}
Characters[Characters.length] = {
	char: "螟",
	first: pattern_lr_left_1_right_shu_many,
	later: [s_chong, d_tubaogai, s_ri, d_six]
}
Characters[Characters.length] = {
	char: "噪",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_kou, s_kou, s_kou, s_kou, h_mu]
}
Characters[Characters.length] = {
	char: "鹦",
	first: pattern_lr_left_shu_2_right_1,
	later: [s_bei, s_bei, z_nv, p_niao]
}
Characters[Characters.length] = {
	char: "黔",
	first: pattern_lr_left_shu_2_right_shu_2,
	later: [s_heizitou, d_sidiandi, p_ren, d_jinzidi]
}
Characters[Characters.length] = {
	char: "穆",
	first: pattern_lr_left_1_right_shu_many,
	later: [p_he, p_bai, z_xiao, p_sanpie]
}
Characters[Characters.length] = {
	char: "篡",
	first: pattern_ud_up_middle_down,
	later: [p_zhuzitou, s_mu, h_da, z_sigong]
}
Characters[Characters.length] = {
	char: "篷",
	first: pattern_ud_up_1_down_wei_2,
	later: [p_zhuzitou, p_zhewen, h_feng, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "篙",
	first: pattern_ud_up_1_down_shu_many,
	later: [p_zhuzitou, d_liuzitou, s_kou, s_tongzikuang, s_kou]
}
Characters[Characters.length] = {
	char: "篱",
	first: pattern_ud_up_1_down_shu_2,
	later: [p_zhuzitou, d_liuzitou, p_chadian, z_xiongzikuang, s_tongzikuang, z_sigong]
}
Characters[Characters.length] = {
	char: "儒",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_danrenpang, h_yushui, h_erqie]
}
Characters[Characters.length] = {
	char: "膳",
	first: pattern_lr_left_1_right_shu_many,
	later: [p_yue, d_lanzitou, h_yangzishen, d_qianzitou, s_kou]
}
Characters[Characters.length] = {
	char: "鲸",
	first: pattern_lr_left_shu_many_right_shu_many,
	later: [p_weizitou, s_tian, heng, d_liuzitou, s_kou, z_xiao]
}
Characters[Characters.length] = {
	char: "瘾",
	first: pattern_round_left_up,
	later: [d_bingzitou, z_zuoerpang, p_weizitou, z_xunzitou, d_xin]
}
Characters[Characters.length] = {
	char: "瘸",
	first: pattern_round_left_up,
	later: [d_bingzitou, z_li, s_kou, s_tongzikuang, p_ren, p_ren]
}
Characters[Characters.length] = {
	char: "糙",
	first: pattern_lr_left_1_right_wei_2,
	later: [d_mi, p_niuwuwei, s_kou, d_zouzhidi]
}
Characters[Characters.length] = {
	char: "燎",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_huo, h_liaoyoush, s_ri, z_xiao]
}
Characters[Characters.length] = {
	char: "濒",
	first: pattern_lr_left_1_right_heng_2,
	later: [d_sandianshui, s_zhi, s_shaowud, h_ye]
}
Characters[Characters.length] = {
	char: "憾",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_shuxinpang, h_xianzikuang, heng, s_kou, d_xin]
}
Characters[Characters.length] = {
	char: "懈",
	first: pattern_lr_left_1_right_heng_2,
	later: [d_shuxinpang, p_weizitou, p_yong, z_dao, p_niu]
}
Characters[Characters.length] = {
	char: "窿",
	first: pattern_ud_up_1_down_heng_2,
	later: [d_xuezitou, z_zuoerpang, p_zhewen, heng, p_sheng]
}
Characters[Characters.length] = {
	char: "缰",
	first: pattern_lr_left_1_right_shu_many,
	later: [z_jiaosipang, heng, s_tian, heng, s_tian, heng]
}

/* 十七画 */
Characters[Characters.length] = {
	char: "壕",
	first: pattern_lr_left_1_right_shu_many,
	later: [h_tu, d_liuzitou, s_kou, d_tubaogai, h_zhizhu]
}
Characters[Characters.length] = {
	char: "藐",
	first: pattern_ud_up_1_down_heng_2,
	later: [h_caozitou, p_baozitou, p_bai, p_er]
}
Characters[Characters.length] = {
	char: "檬",
	first: pattern_lr_left_1_right_shu_many,
	later: [h_mu, h_caozitou, d_tubaogai, heng, h_zhizhu]
}
Characters[Characters.length] = {
	char: "檐",
	first: pattern_lr_left_1_right_wei_2,
	later: [h_mu, p_weizitou, h_chang, p_eightdian, d_liuzitou, h_two, s_kou]
}
Characters[Characters.length] = {
	char: "檩",
	first: pattern_lr_left_1_right_shu_many,
	later: [h_mu, d_liuzitou, s_kou, s_kou, h_two, z_xiao]
}
Characters[Characters.length] = {
	char: "檀",
	first: pattern_lr_left_1_right_shu_many,
	later: [h_mu, d_liuzitou, s_kou, s_kou, s_ri, heng]
}
Characters[Characters.length] = {
	char: "礁",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_stone, p_quezipang, d_sidiandi]
}
Characters[Characters.length] = {
	char: "磷",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_stone, d_mi, p_xi, h_jiangyouxia]
}
Characters[Characters.length] = {
	char: "瞭",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_mu, h_liaoyoush, s_ri, z_xiao]
}
Characters[Characters.length] = {
	char: "瞬",
	first: pattern_lr_left_1_right_shu_many,
	later: [s_mu, p_caizitou, d_tubaogai, p_xi, h_jiangyouxia]
}
Characters[Characters.length] = {
	char: "瞳",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_mu, d_li, s_li]
}
Characters[Characters.length] = {
	char: "瞪",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_mu, z_dengshangzuo, p_dengshangyou, heng, s_kou, d_qianzitou]
}
Characters[Characters.length] = {
	char: "曙",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_ri, s_siwuzhe, h_laozitou, s_ri]
}
Characters[Characters.length] = {
	char: "蹋",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_zuzipang, s_ri, z_xi, z_xi]
}
Characters[Characters.length] = {
	char: "蟋",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_chong, p_fanzitou, d_xin]
}
Characters[Characters.length] = {
	char: "蟀",
	first: pattern_lr_left_1_right_shu_many,
	later: [s_chong, d_liuzitou, d_liangdianshui, z_youzipang, p_piedian, h_ten]
}
Characters[Characters.length] = {
	char: "嚎",
	first: pattern_lr_left_1_right_shu_many,
	later: [s_kou, d_liuzitou, s_kou, d_tubaogai, h_zhizhu]
}
Characters[Characters.length] = {
	char: "赡",
	first: pattern_lr_left_1_right_wei_2,
	later: [s_bei, p_weizitou, h_chang, p_eightdian, d_liuzitou, h_two, s_kou]
}
Characters[Characters.length] = {
	char: "镣",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_jinzipang, h_liaoyoush, s_ri, z_xiao]
}
Characters[Characters.length] = {
	char: "魏",
	first: pattern_lr_left_shu_2_right_1,
	later: [p_he, z_nv, p_gui]
}
Characters[Characters.length] = {
	char: "簇",
	first: pattern_ud_up_1_down_heng_2,
	later: [p_zhuzitou, d_fang, p_pieheng, p_shi]
}
Characters[Characters.length] = {
	char: "儡",
	first: pattern_lr_left_1_right_shu_many,
	later: [p_danrenpang, s_tian, s_tian, s_tian]
}
Characters[Characters.length] = {
	char: "徽",
	first: pattern_lr_left_middle_right,
	later: [p_shuangrenpang, s_shan, heng, z_youzipang, z_xiao, p_fanwenpang]
}
Characters[Characters.length] = {
	char: "爵",
	first: pattern_ud_up_middle_down,
	later: [p_caizitou, s_siwuzhe, z_jizizuo, h_cun]
}
Characters[Characters.length] = {
	char: "朦",
	first: pattern_lr_left_1_right_shu_many,
	later: [p_yue, h_caozitou, d_tubaogai, heng, h_zhizhu]
}
Characters[Characters.length] = {
	char: "臊",
	first: pattern_lr_left_1_right_shu_many,
	later: [p_yue, s_kou, s_kou, s_kou, h_mu]
}
Characters[Characters.length] = {
	char: "鳄",
	first: pattern_lr_left_shu_many_right_shu_many,
	later: [p_weizitou, s_tian, heng, s_kou, s_kou, h_kui]
}
Characters[Characters.length] = {
	char: "糜",
	first: pattern_round_left_up,
	later: [d_guang, h_mu, h_mu, d_mi]
}
Characters[Characters.length] = {
	char: "癌",
	first: pattern_round_left_up,
	later: [d_bingzitou, s_kou, s_kou, s_kou, s_shan]
}
Characters[Characters.length] = {
	char: "懦",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_shuxinpang, h_yushui, h_erqie]
}
Characters[Characters.length] = {
	char: "豁",
	first: pattern_lr_left_shu_many_right_shu_many,
	later: [d_baogaitou, h_feng, s_kou, p_eightdian, p_ren, s_kou]
}
Characters[Characters.length] = {
	char: "臀",
	first: pattern_ud_up_heng_2_down_1,
	later: [z_shi, h_gongzitou, p_eightdian, p_ji, z_you, p_yue]
}

/* 十八画 */
Characters[Characters.length] = {
	char: "藕",
	first: pattern_ud_up_1_down_heng_2,
	later: [h_caozitou, h_gengzizuo, s_yu]
}
Characters[Characters.length] = {
	char: "藤",
	first: pattern_ud_up_1_down_heng_2,
	later: [h_caozitou, p_yue, d_juanzitou, z_dianshui]
}
Characters[Characters.length] = {
	char: "瞻",
	first: pattern_lr_left_1_right_wei_2,
	later: [s_mu, p_weizitou, h_chang, p_eightdian, d_liuzitou, h_two, s_kou]
}
Characters[Characters.length] = {
	char: "嚣",
	first: pattern_ud_up_middle_down,
	later: [s_kou, s_kou, h_ye, s_kou, s_kou]
}
Characters[Characters.length] = {
	char: "鳍",
	first: pattern_lr_left_1_right_shu_2,
	later: [p_weizitou, s_tian, heng, h_laozitou, p_bi, s_ri]
}
Characters[Characters.length] = {
	char: "癞",
	first: pattern_round_left_up,
	later: [d_bingzitou, h_shufu, p_weizitou, s_bei]
}
Characters[Characters.length] = {
	char: "瀑",
	first: pattern_lr_left_1_right_shu_many,
	later: [d_sandianshui, s_ri, h_gongzitou, p_eight, z_dianshui]
}
Characters[Characters.length] = {
	char: "襟",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_buyipang, h_mu, h_mu, h_two, z_xiao]
}
Characters[Characters.length] = {
	char: "璧",
	first: pattern_ud_up_heng_2_down_1,
	later: [z_shi, s_kou, d_li, h_ten, h_yu]
}
Characters[Characters.length] = {
	char: "戳",
	first: pattern_lr_left_shu_2_right_1,
	later: [z_xi, z_xi, p_quezipang, h_ge]
}

/* 十九画 */
Characters[Characters.length] = {
	char: "攒",
	first: pattern_lr_left_1_right_shu_2,
	later: [h_tishoupang, p_niuwuwei, p_er, p_niuwuwei, p_er, s_bei]
}
Characters[Characters.length] = {
	char: "孽",
	first: pattern_ud_up_middle_down,
	later: [h_caozitou, pie, p_zhuizili, d_li, h_ten, z_zi]
}
Characters[Characters.length] = {
	char: "蘑",
	first: pattern_ud_up_1_down_wei_2,
	later: [h_caozitou, d_guang, h_mu, h_mu, h_stone]
}
Characters[Characters.length] = {
	char: "藻",
	first: pattern_ud_up_1_down_heng_2,
	later: [h_caozitou, d_sandianshui, s_kou, s_kou, s_kou, h_mu]
}
Characters[Characters.length] = {
	char: "鳖",
	first: pattern_ud_up_heng_many_down_shu_many,
	later: [d_bizizuo, p_fanwenpang, p_weizitou, s_tian, heng]
}
Characters[Characters.length] = {
	char: "蹭",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_zuzipang, d_lanzitou, s_zengzizh, s_ri]
}
Characters[Characters.length] = {
	char: "蹬",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_zuzipang, z_dengshangzuo, z_dengshangzuo, heng, s_kou, d_qianzitou]
}
Characters[Characters.length] = {
	char: "簸",
	first: pattern_ud_up_1_down_heng_2,
	later: [p_zhuzitou, h_qizitou, p_eightdian, p_pizipang, z_you]
}
Characters[Characters.length] = {
	char: "簿",
	first: pattern_ud_up_1_down_heng_2,
	later: [p_zhuzitou, d_sandianshui, h_fudu, h_cun]
}
Characters[Characters.length] = {
	char: "蟹",
	first: pattern_ud_up_heng_2_down_1,
	later: [p_weizitou, p_yong, z_dao, p_niu, s_chong]
}
Characters[Characters.length] = {
	char: "靡",
	first: pattern_round_left_up,
	later: [d_guang, h_mu, h_mu, s_feizizuo, s_feiziyou]
}
Characters[Characters.length] = {
	char: "癣",
	first: pattern_round_left_up,
	later: [d_bingzitou, p_weizitou, s_tian, heng, d_lanzitou, h_yangzishen]
}
Characters[Characters.length] = {
	char: "羹",
	first: pattern_ud_up_shu_2_down_shu_2,
	later: [d_lanzitou, h_wang, d_sidiandi, d_lanzitou, h_wang, h_da]
}

/* 二十画 */
Characters[Characters.length] = {
	char: "鬓",
	first: pattern_ud_up_heng_2_down_shu_2,
	later: [h_sizizuo, p_sanpie, d_baogaitou, p_qiu, p_eightdian]
}
Characters[Characters.length] = {
	char: "攘",
	first: pattern_lr_left_1_right_shu_many,
	later: [h_tishoupang, d_liuzitou, s_kou, s_kou, h_sanhls, p_yizidi]
}
Characters[Characters.length] = {
	char: "蠕",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_chong, h_yushui, h_erqie]
}
Characters[Characters.length] = {
	char: "巍",
	first: pattern_ud_up_1_down_heng_2,
	later: [s_shan, p_he, z_nv, p_gui]
}
Characters[Characters.length] = {
	char: "鳞",
	first: pattern_lr_left_shu_many_right_shu_many,
	later: [p_weizitou, s_tian, heng, d_mi, p_xi, h_jiangyouxia]
}
Characters[Characters.length] = {
	char: "糯",
	first: pattern_lr_left_1_right_shu_2,
	later: [d_mi, h_yushui, h_erqie]
}
Characters[Characters.length] = {
	char: "譬",
	first: pattern_ud_up_heng_many_down_shu_many,
	later: [z_shi, s_kou, d_li, h_ten, d_liuzitou, h_two, s_kou]
}

/* 二十一画 */
Characters[Characters.length] = {
	char: "霹",
	first: pattern_ud_up_1_down_heng_2,
	later: [h_yushui, z_shi, s_kou, d_li, h_ten]
}
Characters[Characters.length] = {
	char: "躏",
	first: pattern_lr_left_1_right_shu_2,
	later: [s_zuzipang, h_caozitou, d_men, p_quezipang]
}
Characters[Characters.length] = {
	char: "髓",
	first: pattern_lr_left_shu_2_right_wei_2,
	later: [s_guzitou, d_tubaogai, p_yue, h_hengpie, h_gong, p_yue, d_zouzhidi]
}

/* 二十二画 */
Characters[Characters.length] = {
	char: "蘸",
	first: pattern_ud_up_1_down_heng_2,
	later: [h_caozitou, h_youxin, p_quezipang, d_sidiandi]
}
Characters[Characters.length] = {
	char: "镶",
	first: pattern_lr_left_1_right_shu_many,
	later: [p_jinzipang, d_liuzitou, s_kou, s_kou, h_sanhls, p_yizidi]
}
Characters[Characters.length] = {
	char: "瓤",
	first: pattern_lr_left_shu_many_right_1,
	later: [d_liuzitou, s_kou, s_kou, h_sanhls, p_yizidi, p_gua]
}

/* 二十四画 */
Characters[Characters.length] = {
	char: "矗",
	first: pattern_pin,
	later: [h_ten, s_juzitou, h_ten, s_juzitou, h_ten, s_juzitou]
}
