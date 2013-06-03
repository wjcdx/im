#! /usr/bin/awk -f
# script to generate variable sequence
# ARGV[0]: awk
# ARGV[1]: input file
# ARGV[2]: field number of which to be matched
# ARGV[3]: pattern match the field
# ARGV[4]: field number to be set as sequence number
# ARGV[5]: struct name
# ARGV[6]: name field number
# ARGV[7]: value field number
# ARGV[8]: biggest number of digits in a seq-number



BEGIN {
	if (ARGC < 6) {
		print "Usage: " ARGV[0] " input-file output-file pattern-field-no " \
			"pattern struct-name name-prefix value-field-no";
		exit 0
	}

	FIN = ARGV[1];
	FOUT = ARGV[2];
	pfn = strtonum(ARGV[3]);
	pattern = ARGV[4];
	struct = ARGV[5];
	prefix = ARGV[6];
	vfn = strtonum(ARGV[7]);
	dnum = ARGV[8];
	ARGC=2;
	print FOUT, ARGC;
	printf "" > FOUT;
	printf "/* Don't EDIT, It's auto generated! */\n\n" > FOUT;
	printf "var " struct " = new Array();\n\n" >> FOUT;
	printf struct " = {\n" >> FOUT;
}

{
	if (NF < pfn || NF < nfn || NF < vfn) {
		next;
	}

	if ($pfn !~ pattern) {
		next;
	}

	printf "\t%d: \"%s%0" dnum "d\",\n", $vfn, prefix, $vfn >> FOUT;
}

END {
	printf "}\n" >> FOUT;
}

