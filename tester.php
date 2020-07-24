<?php	
	header('Content-Type: application/json');

	require_once "functions.php";
	require_once "phpFunctions.php";
	
	$cn = require "conn.php";
	//print_r($cn);

	$jsnq = [ 
	(object) [ 
			table => 'lekovi', 
			cmd => 'select', 
			filter => ['atc_kod,sw,G04CB','and',['id,gt,40','or','id,eq,560']], 
			limit =>  [5, 120] 
	],
	( object )[
		table => 'foods',
		cmd => 'select',
		fields => [
			'id',
			'name'
		]
		],
		(object)[
				table => 'foods',
				cmd => 'update',
				data => [name => 'Updated food name'],
				keyData => [id => 980]
		],
		(object)[ 
			table => 'lekovi', 
			cmd => 'select', 
			limit => [5, 12]
		],
		(object)[
			phpFunction => "phpTestPrintout"
		]
];
	
$prarr = array();

foreach($jsnq as $key => $value ){	
	array_push($prarr, (object)[ "JSON-".$key => $value], (object) [ "Output-".$key => build_sql($value) ]);
}

echo json_encode( $prarr );

?>