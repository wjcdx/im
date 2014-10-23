load("js/pattern.js");
load("js/stroke.js");
load("js/partials.js");
load("js/keymap.js");
load("js/charset.js");
load("js/partial_nv.js");
load("js/im.js");

function CharStat()
{
	this.rpt = 0;
	this.codes = new Array();
}

function CodeStat()
{
	this.code = "";
	/* the index of the candinate char */
	this.cand = new Array();
}

function CodeLengthStat()
{
	this.codeLen = 0;
	this.charSign = new Array();
	this.repeatCodeNo = 0;
	this.codeCharNumAry = [ 0, 0, 0, 0];
	this.totalCodeNo = 0;
}

function initPatternChars(pc)
{
	for (var p in pattern_maps) {
		pc.push(p);
	}
}

function initStrokeChars(sc)
{
	for (var s in partial_first_stroke_maps) {
		sc.push(s);
	}

	for (var s in stroke_maps) {
		sc.push(s);
	}
}

function getCand4Scode(cand, scode)
{
	var patterns = pattern_maps[scode.charAt(0).toUpperCase()];

	if (isUndefined(patterns)) {
		return;
	}
	if (scodeNotInLaterMap(scode.substring(1))) {
		return;
	}

	for (var i in Characters) {
		var c = Characters[i];
		if (!inArray(c.first, patterns)) {
			continue;
		}
		if (scode.length == 1) {
			cand.push(i);
		} else if (scodeMatchesLater(c.later, scode.substring(1))) {
			cand.push(i);
		}
	}
}

function print_scode_stat(codeStat, no)
{
	if (codeStat == null)
		return;
	
	print("\t\t" + no + "\t" + codeStat.code + "\t" + codeStat.cand.length);
}

function add_cscode_stat(codeStat, codeLenStat)
{
	if (codeStat == null)
		return;
	
	codeLenStat.totalCodeNo++;

	if (codeStat.cand.length == 0) {
		codeLenStat.codeCharNumAry[0]++;
		return;
	}
	
	if (codeStat.cand.length == 1) {
		codeLenStat.codeCharNumAry[1]++;
	} else if (codeStat.cand.length == 2) {
		codeLenStat.codeCharNumAry[2]++;
		codeLenStat.repeatCodeNo++;
	} else if (codeStat.cand.length > 1) {
		codeLenStat.repeatCodeNo++;
	}

	var csign = codeLenStat.charSign;
	for (var i in codeStat.cand) {
		var cidx = codeStat.cand[i];
		if (isUndefined(csign[cidx])) {
			csign[cidx] = 1;
		} else {
			csign[cidx]++;
		}
	}
}

function statCountStrokes(scode, count, strkChars, codeLenStat)
{
	if (count > 0) {
		for (var i in strkChars) {
			var code = scode + strkChars[i];
			statCountStrokes(code, count-1, strkChars, codeLenStat);
		}
	} else { /* count == 0 */
		/* certain scode */
		var codeStat = new CodeStat();
		codeStat.code = scode;
		
		getCand4Scode(codeStat.cand, scode);
		print_scode_stat(codeStat, codeLenStat.totalCodeNo);
		add_cscode_stat(codeStat, codeLenStat);
	}
}

function print_cscode_stat(codeLenStat)
{
	print("Ratio(空码率): " + codeLenStat.codeCharNumAry[0]
			+ " / " + codeLenStat.totalCodeNo + " = "
			+ codeLenStat.codeCharNumAry[0]/codeLenStat.totalCodeNo);
	print("Ratio(单字码率): "
			+ codeLenStat.codeCharNumAry[1] + " / " + codeLenStat.totalCodeNo + " = "
			+ codeLenStat.codeCharNumAry[1] / codeLenStat.totalCodeNo);
	print("Ratio(双字码率): "
			+ codeLenStat.codeCharNumAry[2] + " / " + codeLenStat.totalCodeNo + " = "
			+ codeLenStat.codeCharNumAry[2] / codeLenStat.totalCodeNo);
	print("Ratio(重码率): "
			+ codeLenStat.repeatCodeNo + " / " + codeLenStat.totalCodeNo + " = "
			+ codeLenStat.repeatCodeNo / codeLenStat.totalCodeNo);
	print("Ratio(覆盖率): " + codeLenStat.charSign.length
			+ " / " + Characters.length + " = "
			+ codeLenStat.charSign.length / Characters.length);
}

function stat_print()
{
	var patnChars = new Array();
	var strkChars = new Array();

	initPatternChars(patnChars);
	initStrokeChars(strkChars);

	for (var i = 1; i < 3; i++) {
		var codeLenStat = new CodeLengthStat();
		codeLenStat.codeLen = i;
		/* iterate all patterns */
		for (var j in patnChars) {
			var scode = "" + patnChars[j];
			/* iterate all strokes count times */
			statCountStrokes(scode, i, strkChars, codeLenStat);
		}
		/* print stats for count scode */
		print_cscode_stat(codeLenStat);
	}
}

stat_print();
