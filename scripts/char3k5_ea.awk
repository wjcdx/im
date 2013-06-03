#! /usr/bin/awk -f
# script to generate variable sequence

BEGIN {
	print "var Chars3k5 = new Array();";
}

{
	print "Chars3k5[\"" $1 "\"] = 1;";
}

END {
}

