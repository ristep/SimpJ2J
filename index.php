<?php
// Headers not tested quite well
header("Content-Type: application/json");
header('Access-Control-Allow-Origin: *');
//header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
// Only post request is valid
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization, X-Requested-With');

//
// this prevent errors from some browsers preflight OPTIONS request
// some illuminations here https://smanzary.sman.cloud/cors-nightmare-in-spa-applications/
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') die();
 
require_once "functions.php";
$cn = require "conn.php";

$method = $_SERVER['REQUEST_METHOD'];

$input  = file_get_contents("php://input");
//file_put_contents('inputDump.txt', $input, FILE_APPEND); // uncomment for debugging
$input = json_decode($input);

$userData = require_once('tokento.php'); // for user validation uncomment

switch ($method) {
	case 'POST': // update, insert, delete and select 
		if(isset($input->phpFunction)){
			require_once "phpFunctions.php";
			if(function_exists($input->phpFunction)) {
				$result = ($input->phpFunction)($input);
				$ret = [ 
					'OK' => 'true',
					'error' => false,
					'message' => "RPC called successfully!",
					'rpcName' => $input->phpFunction,
					'data' => $result
				];
			}else{
				$ret = (object)[
					'OK' => false,
					'error' => true,
					'rpcName' => $input->phpFunction,
					'message' => "RPC call error! function $input->phpFunction  doesn't  exist! ",
					'data' => (object)[]
				];
			}
		}else
			if(isset($input->sqlStatement))
				try{
					$sql = build_sql($input);  // imported function from functions.php
					$sth = $cn->prepare($sql);
					$sth->execute((array)$input->data);
					if($input->sqlStatement == 'select' ){
						$result = $sth->fetchAll(PDO::FETCH_ASSOC);
					}else 
						$result = (object)[];	
					$ret = [
						'OK' => true,
						'error' => false,
						'message' => "$input->cmd successfully!",
						'SQL' => $sql,
						'count' => $sth->rowCount(),
						"data" => $result
						];
				} catch (PDOException $e) {
					$ret = (object)[
						'error' => 'DataBase',
						'code' => 416,
						'message' => "$input->cmd error!?!?",
						'PDO' => $e,
						'SQL' => $sql
					];
				}
  break;
  case 'PUT':
	case 'GET':
  case 'DELETE':
  case 'PATCH':
  default:
  		http_response_code(417);
			$ret = ((object)[
	    	'error' => "$method method forbidden",
      	'code' => 417,
      	'message' => "$method - Not implemented use POST",
				'Info' => "This is test endpoint for RP_JSON-PHP-API. If you don't know what is this? You are here probably by mistake",
      	'InputData' => $input
    ]);
}
echo json_encode($ret, JSON_NUMERIC_CHECK + JSON_PRESERVE_ZERO_FRACTION);

?>
