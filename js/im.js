var MAGIC = 1000;

function isDefined(v)
{
	if (v != undefined)
		return true;
	return false;
}

function isUndefined(v)
{
	if (v == undefined)
		return true;
	return false;
}

function inArray(ele, array)
{
	for (var i in array) {
		if (array[i] == ele)
			return true;
	}
	return false;
}

function isPartial(later)
{
	return later > MAGIC;
}

function StrokeIndex()
{
	this.partialIndex = -1;
	this.strokeIndex = -1;
}

StrokeIndex.prototype.set = function (pi, si)
{
	this.partialIndex = pi;
	this.strokeIndex = si;
}

StrokeIndex.prototype.assign = function (strokeIndex)
{
	this.partialIndex = strokeIndex.partialIndex;
	this.strokeIndex = strokeIndex.strokeIndex;
}

StrokeIndex.prototype.empty = function ()
{
	return (this.partialIndex == -1 && this.strokeIndex == -1);
}

StrokeIndex.prototype.partialInc = function ()
{
	this.partialIndex++;
	this.strokeIndex = 0;
}

StrokeIndex.prototype.strokeInc = function ()
{
	this.strokeIndex++;
}

StrokeIndex.prototype.equalWith = function (strokeIndex)
{
	if (strokeIndex == null || strokeIndex.empty()) {
				return true;
	}

	return (this.partialIndex == strokeIndex.partialIndex
		&& this.strokeIndex == strokeIndex.strokeIndex);
}

StrokeIndex.prototype.after = function (strokeIndex)
{
	if (strokeIndex == null || strokeIndex.empty()) {
		return false;
	}

	return ((this.partialIndex * MAGIC + this.strokeIndex) >
			(strokeIndex.partialIndex * MAGIC + strokeIndex.strokeIndex));
}

function getNextPartialFirstStroke(later, strokeIndex)
{
	if (later == null || strokeIndex == null || strokeIndex.empty())
		return new StrokeIndex();

	strokeIndex.partialInc();

	if (later.length <= strokeIndex.partialIndex)
		return new StrokeIndex();

	return strokeIndex;
}

function getNextStroke(later, strokeIndex)
{
	if (later == null || strokeIndex == null || strokeIndex.empty())
		return new StrokeIndex();

	strokeIndex.strokeInc();

	if (later.length <= strokeIndex.partialIndex)
		return new StrokeIndex();

	var p = later[strokeIndex.partialIndex];
	if (isPartial(p)) {
		if (p.length <= strokeIndex.strokeIndex)
			return new StrokeIndex();
	} else {
		if (strokeIndex.strokeIndex != 0)
			return new StrokeIndex();
	}

	return strokeIndex;
}

function getStrokeOfIndex(later, strokeIndex)
{
	if (later == null || strokeIndex == null || strokeInde.empty())
		return null;

	var c = null;

	var p = later[strokeIndex.partialIndex];
	if (isUndefined(p)) {
		return null;
	}

	if (isPartial(p)) {

		c = partial_strokes[strokeIndex.strokeIndex];
		if (isUndefined(s))
			return null;

	} else {

		c = p;
		if (strokeIndex.strokeIndex != 0)
			return null;
	}

	return c;
}

//find cnow in [a,b];
function findStrokeInRange(later, start, stop, cnow)
{
	if (later == null
			|| start == null || start.empty()
			|| stop == null || stop.empty()) {
		return new StrokeIndex();
	}

	do {
		var c = getStrokeOfIndex(later, start);

		if (c == null)
			break;

		if (c == cnow)
			return start;

		start = getNextStroke(later, start);
	} while (!start.after(stop));

	return new StrokeIndex();
}

function scodeMatchesLater(later, scode)
{
	var cnow = 0;
	var start = new StrokeIndex();
	var stop = new StrokeIndex();

	for (var i = 0; i < scode.length; i++) {
		
		cnow = scode.charAt(i).toUpperCase();
		stop = getNextPartialFirstStroke(later, start);
		
		if (isDefined(partial_first_stroke_maps[cnow])) {
			start = stop;
		} else if (isDefined(stroke_maps[cnow])) {
			// do nothing, just search from start to stop
			start = getNextStroke(later, start);
		}

		start = findStrokeInRange(later, start, stop, cnow);
		if (start.empty()) {
			return false;
		}
	}
	return true;
}

function scodeNotInLaterMap(scode)
{
	for (var i = scode.length-1; i >= 0; i--) {
		cnow = scode.charAt(i).toUpperCase();
		if (isUndefined(partial_first_stroke_maps[cnow])
				&& isUndefined(stroke_maps[cnow])) {
			return true;
		}
	}
	return false;
}

