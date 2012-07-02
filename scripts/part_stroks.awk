#! /bin/awk -f

BEGIN {
	if (ARGC < 2) {
		print "Usage: " $ARGV[1] " input-file";
		exit 0
	} else {
		out=ARGV[1] ".ptl";
		printf "" > out;
	}
}

{
	printf "\t%s: [], /* %s ", substr($4, 1, length($4) - 1), $2 >> out;
	for (i=6; i<= NF; i++) {
		printf " %s", $i >> out;
	}
	printf "\n" >> out;
}


