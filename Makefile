
all: partial_all partial_nv pattern_nv stroke_nv

SEQUENCE_AWK = scripts/sequence.awk
PARTIAL_DIR = meta/partials

partial_all:
	$(SEQUENCE_AWK) $(PARTIAL_DIR)/1.heng 1 var 4 1001
	$(SEQUENCE_AWK) $(PARTIAL_DIR)/2.shu 1 var 4 2001
	$(SEQUENCE_AWK) $(PARTIAL_DIR)/3.pie 1 var 4 3001
	$(SEQUENCE_AWK) $(PARTIAL_DIR)/4.na 1 var 4 4001
	$(SEQUENCE_AWK) $(PARTIAL_DIR)/5.zhe 1 var 4 5001
	echo "/* Don't EDIT, It's auto generated! */" > js/partials.js
	cat $(PARTIAL_DIR)/*.2 >> js/partials.js
	rm -rf $(PARTIAL_DIR)/*.2

NAMVAL_AWK = scripts/namval.awk
ABBR_AWK = scripts/abbr.awk

partial_nv:
	$(NAMVAL_AWK) js/partials.js js/partial_nv.js 1 var partial_nv 2 4

pattern_nv:
	$(NAMVAL_AWK) js/pattern.js js/pattern_nv.js 1 var pattern_nv 2 4

stroke_nv:
	$(NAMVAL_AWK) js/stroke.js js/stroke_nv.js 1 var stroke_nv 2 4

pattern_abbr:
	$(ABBR_AWK) js/pattern.js js/pattern_abbr.js 1 var pattern_abbrs P 4

stroke_abbr:
	$(ABBR_AWK) js/stroke.js js/stroke_abbr.js 1 var stroke_abbrs S 4

abbrs: pattern_abbr stroke_abbr

TRIE_AWK = scripts/trie.awk

trie:
	$(TRIE_AWK) data/allabbrs.dat data/dict.utf8.xh 100
	
