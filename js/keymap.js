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
