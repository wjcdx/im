#! /usr/bin/awk -f
# script to generate variable sequence
# ARGV[0]: awk
# ARGV[1]: input file
# ARGV[2]: field number of which to be matched
# ARGV[3]: pattern match the field
# ARGV[4]: field number to be set as sequence number
# ARGV[5]: first sequence number



BEGIN {
	if (ARGC < 6) {
		print "Usage: " ARGV[0] " input-file field-no-1 pattern field-no-2 index-start-number";
		exit 0
	} else {
		FIN = ARGV[1];
		FOUT = FIN ".2";
		fn1 = strtonum(ARGV[2]);
		fn2 = strtonum(ARGV[4]);
		pattern = ARGV[3];
		idx=strtonum(ARGV[5]);
		ARGC=2;
		print FOUT, idx, ARGC;
		printf "" > FOUT;
	}
}

{
	if (NF < fn1 || NF < fn2) {
		printf $0 "\n" > FOUT;
		next;
	}

	if ($fn1 !~ pattern) {
		printf $0 "\n" > FOUT;
		next;
	}

	printf "%s %-16s %s", $1, $2, $3 >> FOUT;
	printf " %d; ", idx >> FOUT;
	for (i=5; i<= NF; i++) {
		printf " %s", $i >> FOUT;
	}
	printf "\n" >> FOUT;
	idx++;
}


