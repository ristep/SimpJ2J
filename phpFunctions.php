<?php

function phpTestPrintout($inp){
	$info = (object) [
		title => "Test RPC",
		desc => "Dummy Function"
	]; 
	return (object) array_merge( (array) $info, (array) $inp );
}

// place for rpc declarations 
?>