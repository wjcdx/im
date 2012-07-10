
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


