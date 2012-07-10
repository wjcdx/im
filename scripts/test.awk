#! /bin/awk -f
# script to generate variable sequence
# ARGV[0]: awk
# ARGV[1]: input file
# ARGV[2]: field number of which to be matched
# ARGV[3]: pattern match the field
# ARGV[4]: field number to be set as sequence number
# ARGV[5]: struct name
# ARGV[6]: name field number
# ARGV[7]: value field number



BEGIN {
	i = 0;
	for (i=0; i<=ARGC; i++) {
		printf "$" i ":" $i "\n";
	}
	ARGC = 1;
}

{
}

