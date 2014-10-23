load("js/pattern.js");
load("js/stroke.js");
load("js/partials.js");
load("js/charset.js");
load("js/partial_nv.js");
load("js/pattern_nv.js");
load("js/stroke_nv.js");

function isUndefined(v)
{
	if (v == undefined)
		return true;
	return false;
}

function Stat(name, nv, func, total)
{
	this.name = name;
	this.nv = nv;
	this.add = func;
	this.total = total;
	this.stats = new Array();
}

Stat.prototype.dostat = function ()
{
	var stats = this.stats;
	for (var i in Characters) {
		var c = Characters[i];
		this.add(c.later);
	}
}

String.prototype.wrap = function (length)
{
	if (this.length > length)
		return;

	var str = this;
	for (var i = str.length; i < length; i++) {
		str += " ";
	}
	return str;
}

Stat.prototype.print = function()
{
	var j = 1;
	print("\n\nNo\t" + this.name.wrap(30) + "\tCount\tRatio(Total: " + this.total + ")");
	for (var i in this.stats) {
		print((j++) + "\t"
				+ this.nv[i].wrap(30) + "\t"
				+ this.stats[i] + "\t"
				+ this.stats[i] * 100 /this.total);
	}
}

function add_one(stats, s)
{
	if (!isUndefined(stats[s])) {
		stats[s]++;
	} else {
		stats[s] = 1;
	}
}

function has_part(part)
{
	for (var i in part) {
		var s = part[i];
		if (s > 1000) {
			return true;
		}
	}
	
	return false;
}

var first_stroke_stat = new Stat("First Stroke", stroke_nv, function (part) {
	if (typeof(part) == "object") {
		if (part.length == 0) {
			return;
		}

		if (!has_part(part)) {
			this.add(part[0]);
			return;
		}

		for (var i in part) {
			var s = part[i];
			if (s > 1000) {
				var p = partial_strokes[partial_nv[s]];
				this.add(p);
			} else {
				this.add(s);
			}
		}
	} else {
		var s = part;
		add_one(this.stats, s);
		this.total++;
	}
}, 0);

first_stroke_stat.dostat();
first_stroke_stat.print();

var none_first_stroke_stat = new Stat("None First Stroke", stroke_nv, function (part) {
	if (typeof(part) == "object") {
		if (part.length <= 1) {
			return;
		}

		for (var i = 0; i < part.length; i++) {
			var s = part[i];

			if (i == 0 && s < 1000)
				continue;

			if (s > 1000) {
				var p = partial_strokes[partial_nv[s]];
				this.add(p);
			} else {
				this.add(s);
			}
		}
	} else {
		var s = part;
		add_one(this.stats, s);
		this.total++;
	}
}, 0);

none_first_stroke_stat.dostat();
none_first_stroke_stat.print();

