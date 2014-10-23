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
	this.dostat = func;
	this.total = total;
	this.stats = new Array();
}

Stat.prototype.print = function()
{
	var j = 1;
	print("\n\nNo\t\t\t\t" + this.name + "\t\t\t\tCount\t\t\t\tRatio(Total: " + this.total + ")");
	for (var i in this.stats) {
		print((j++) + "\t\t\t\t"
				+ this.nv[i] + "\t\t\t\t"
				+ this.stats[i] + "\t\t\t\t"
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

var pattern_stat = new Stat("Pattern", pattern_nv, function () {
	var stats = this.stats;
	for (var i in pattern_nv) {
		stats[i] = 0;
	}

	for (var i in Characters) {
		var c = Characters[i];
		add_one(stats, c.first);
	}
}, Characters.length);
pattern_stat.dostat();
pattern_stat.print();

/* stat all the appearences of a
 * stroke in a character */
var stroke_stat = new Stat("Stroke", stroke_nv, function () {
	var stats = this.stats;
	for (var i in Characters) {
		var c = Characters[i];
		for (var j in c.later) {
			var s = c.later[j];
			if (s > 1000) {
				var p = partial_strokes[partial_nv[s]];
				for (var k in p) {
					s = p[k];
					add_one(stats, s);
					this.total++;
				}
			} else {
				add_one(stats, s);
				this.total++;
			}
		}
	}
}, 0);
stroke_stat.dostat();
stroke_stat.print();

var partial_stat = new Stat("Partial", partial_nv, function () {
	for (var i in Characters) {
		var c = Characters[i];
		for (var j in c.later) {
			var s = c.later[j];
			if (s > 1000) {
				add_one(this.stats, s);
				this.total++;
			}
		}
	}
}, 0);
partial_stat.dostat();
partial_stat.print();

