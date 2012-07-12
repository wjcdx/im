/* 键盘映射表 */
var pattern_maps = {
	'F': [pattern_lr_left_1_right_1_left_big, pattern_lr_left_1_right_1_right_big],
	'R': [pattern_lr_left_1_right_2],
	'V': [pattern_lr_left_1_right_many],
	'M': [pattern_lr_left_2_right_2, pattern_lr_left_middle_right, pattern_lr_left_2_right_1,
			pattern_lr_left_many_right_1, pattern_lr_left_many_right_many],

	'A': [pattern_ud_up_1_down_1_up_big, pattern_ud_up_1_down_1_down_big],
	'Q': [pattern_ud_up_2_down_1],
	'S': [pattern_ud_up_middle_down],
	'Z': [pattern_ud_up_2_down_2, pattern_ud_up_1_down_2, pattern_ud_up_1_down_many,
			pattern_ud_up_many_down_1, pattern_ud_up_many_down_many],
	
	'D': [pattern_single],

	'E': [pattern_round_left_up],
	'C': [pattern_round_left_down],
	'X': [pattern_round_whole, pattern_round_up, pattern_round_down, pattern_round_right_up,
			pattern_round_left, pattern_round_right],

	'P': [pattern_pin],
};

var bushou_maps = {};

var stroke_maps = {
	'G': [heng],
	'H': [shu],
	'T': [pie],
	'Y': [na],
	'U': [dian],
	'K': [hengzheshu],
	'L': [hengzheshugou],
	'B': [ti],
	'J': [shugou],
	'I': [hengzhepie],
	'V': [shuwanhenggou],
	'O': [henggou],
	'N': [shuzheheng, shuzheti, piezheheng, piezhedian, wanshugou, nagou,
			hengzheshuzheheng, hengzheshuzheti, hengzhenagou, shuzhehengzheshu,
			shuzhehengzhepie, hengzheshuzhehengzheshu, hengzheshuzhehengzhepie,
			hengzheshuwanhenggou, hengzhepiezhewanshugou, shuzhehengzheshugou,
			hengzheshuzhehengzheshugou],
};

var offen_use_bushou_mapping = {};
