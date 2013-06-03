#! /usr/bin/awk -f

BEGIN {
	if (ARGC < 2) {
		print "Usage: " $ARGV[0] " input-file";
		exit 0
	} else {
		out=ARGV[1] ".ptl";
		printf "" > out;
	}
}

{
	printf "\t%-16s: [], ", $2 >> out;
	for (i=5; i<= NF; i++) {
		printf " %s", $i >> out;
	}
	printf "\n" >> out;
}


