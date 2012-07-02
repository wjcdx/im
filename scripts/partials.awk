#! /bin/awk -f

BEGIN {
	if (ARGC < 3) {
		print "Usage: " $ARGV[1] " input-file index-start-number";
		exit 0
	} else {
		out=ARGV[1] ".out";
		idx=strtonum(ARGV[2]);
		ARGC=2;
		print out, idx, ARGC;
		printf "" > out;
	}
}

{
	printf "%s %-16s%s", $1, $2, $3 >> out;
#	printf "%s %-32s%s", $1, $2, $3 >> out;
	printf " %d; ", idx >> out;
	for (i=5; i<= NF; i++) {
		printf " %s", $i >> out;
	}
	printf "\n" >> out;
	idx++;
}


