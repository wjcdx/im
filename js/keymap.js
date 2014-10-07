/* 键盘映射表 */
var pattern_maps = {
	'F': [pattern_lr_left_1_right_1],
	'T': [
			pattern_lr_left_middle_right,
			pattern_lr_left_1_right_heng_2,
			pattern_lr_left_heng_2_right_1,
			pattern_lr_left_heng_2_right_heng_2,
			pattern_lr_left_heng_2_right_shu_2,
			pattern_lr_left_heng_2_right_wei_2,
			pattern_lr_left_shu_2_right_heng_2,
			pattern_lr_left_wei_2_right_heng_2,
			pattern_lr_left_1_right_heng_many,
			pattern_lr_left_heng_many_right_1,
			pattern_lr_left_heng_many_right_heng_many,
			pattern_lr_left_heng_many_right_shu_many,
			pattern_lr_left_heng_many_right_wei_many,
			pattern_lr_left_shu_many_right_heng_many,
			pattern_lr_left_wei_many_right_heng_many,
		 ],
	'A': [
			pattern_lr_left_1_right_shu_2,
			pattern_lr_left_1_right_wei_2,
			pattern_lr_left_1_right_shu_many,
			pattern_lr_left_1_right_wei_many,
		 ],
	'Y': [
			pattern_lr_left_shu_2_right_shu_2,
			pattern_lr_left_shu_2_right_wei_2,
			pattern_lr_left_wei_2_right_shu_2,
			pattern_lr_left_wei_2_right_wei_2,
			pattern_lr_left_shu_many_right_shu_many,
			pattern_lr_left_shu_many_right_wei_many,
			pattern_lr_left_wei_many_right_shu_many,
			pattern_lr_left_wei_many_right_wei_many,
		 ],
	'X': [
			pattern_lr_left_shu_2_right_1,
			pattern_lr_left_wei_2_right_1,
			pattern_lr_left_shu_many_right_1,
			pattern_lr_left_wei_many_right_1,
		 ],

	'N': [pattern_ud_up_1_down_1],
	'Q': [
			pattern_ud_up_middle_down,
			pattern_ud_up_1_down_shu_2,
			pattern_ud_up_shu_2_down_1,
			pattern_ud_up_heng_2_down_shu_2,
			pattern_ud_up_shu_2_down_heng_2,
			pattern_ud_up_shu_2_down_shu_2,
			pattern_ud_up_shu_2_down_wei_2,
			pattern_ud_up_wei_2_down_shu_2,
			pattern_ud_up_1_down_shu_many,
			pattern_ud_up_shu_many_down_1,
			pattern_ud_up_heng_many_down_shu_many,
			pattern_ud_up_shu_many_down_heng_many,
			pattern_ud_up_shu_many_down_shu_many,
			pattern_ud_up_shu_many_down_wei_many,
			pattern_ud_up_wei_many_down_shu_many,
		 ],
	'V': [
			pattern_pin,
			pattern_ud_up_1_down_heng_2,
			pattern_ud_up_1_down_wei_2,
			pattern_ud_up_1_down_heng_many,
	//	 ],
	//'B': [
			pattern_ud_up_heng_2_down_1,
			pattern_ud_up_wei_2_down_1,
			pattern_ud_up_heng_many_down_1,

			pattern_ud_up_heng_2_down_heng_2,
			pattern_ud_up_heng_2_down_wei_2,
			pattern_ud_up_wei_2_down_heng_2,
			pattern_ud_up_wei_2_down_wei_2,
			pattern_ud_up_heng_many_down_heng_many,
			pattern_ud_up_heng_many_down_wei_many,
			pattern_ud_up_wei_many_down_heng_many,
			pattern_ud_up_wei_many_down_wei_many,
		 ],
	
	'D': [pattern_single],

	'W': [pattern_round_left_up],
	'C': [pattern_round_left_down],
	'M': [
			pattern_round_whole,
			pattern_round_up,
			pattern_round_down,
			pattern_round_right_up,
			pattern_round_left,
			pattern_round_right,
			pattern_round_left_right,
		 ],

};

var bushou_maps = {};
// pfs: partial first stroke
var partial_first_stroke_maps = {
	'G': [heng, liaheng],
	'H': [shu],
	'E': [pie],
	'U': [dian],
	'K': [hengzheshu, hengzheshugou, shugou, hengzhepie, shuwanhenggou,
			henggou, shuzheheng, shuzheti, piezheheng, piezhedian, wanshugou, nagou,
			hengzheshuzheheng, hengzheshuzheti, hengzhenagou, shuzhehengzheshu,
			shuzhehengzhepie, hengzheshuzhehengzheshu, hengzheshuzhehengzhepie,
			hengzheshuwanhenggou, hengzhepiezhewanshugou, shuzhehengzheshugou,
			hengzheshuzhehengzheshugou],
};

var stroke_maps = {
	'B': [heng, liaheng, shu, pie, na, dian],
	'K': [hengzheshu],
	'L': [hengzheshugou],
	'P': [ti],
	'J': [shugou],
	'I': [hengzhepie],
	'Z': [shuwanhenggou],
	'O': [henggou],
	'S': [shuzheheng, shuzheti, piezheheng, piezhedian, wanshugou, nagou,
			hengzheshuzheheng, hengzheshuzheti, hengzhenagou, shuzhehengzheshu,
			shuzhehengzhepie, hengzheshuzhehengzheshu, hengzheshuzhehengzhepie,
			hengzheshuwanhenggou, hengzhepiezhewanshugou, shuzhehengzheshugou,
			hengzheshuzhehengzheshugou],
};

var offen_use_bushou_mapping = {};
