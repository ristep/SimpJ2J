<?php

/* Template function for defining custom procedures
** input parametar is usualy data from post request
** returns PHP object 
*/
function phpTestPrintout($inp){
	$info = (object) [
		title => "Test RPC",
		desc => "Dummy Function"
	]; 
	return (object) array_merge( (array) $info, (array) $inp );
}

// place for rpc declarations 
?>