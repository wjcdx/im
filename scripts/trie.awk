#! /usr/bin/awk -f
# script to generate variable sequence
# ARGV[0]: awk
# ARGV[1]: input file
# ARGV[2]: output file
# ARGV[3]: beginning of word id number



BEGIN {
	if (ARGC < 4) {
		print "Usage: " ARGV[0] " input-file output-file begin-word-id";
		exit 0
	}

#	FIN = ARGV[1];
	FOUT = ARGV[2];
	wid = strtonum(ARGV[3]);
	ARGC=2;
	print FOUT, ARGC;
	printf "" > FOUT;
}

{
	printf "%s %d %s\n", $1, wid++, $2 >> FOUT;
}

END {
}

