#! /usr/bin/awk -f
# script to generate variable sequence

BEGIN {
	print "var Chars8k3 = new Array();";
}

{
	print "Chars8k3[Chars8k3.length] = \"" $1 "\";";
}

END {
}

