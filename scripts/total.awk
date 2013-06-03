#! /usr/bin/awk -f
# script to generate variable sequence
# ARGV[0]: awk


BEGIN {
	for (i = 0; i <= 26; i++) {
		j = 26 - i;
		printf "%-2d * %-2d * %-2d * %-2d = %-8d\n", i, j, j, j, i*j*j*j;
	}
	exit 0;
}
