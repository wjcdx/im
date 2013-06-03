#! /usr/bin/awk -f
# script to generate variable sequence

BEGIN {
}

{
	print "Chars8k3[\"" $1 "\"] = 1;";
}

END {
}

