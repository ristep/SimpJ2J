<?php
header("Content-Type: application/json");
header('Access-Control-Allow-Origin: *');
//header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization, X-Requested-With');

// this prevent errors from browsers prefeatch request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') die();
 
//require_once "echoErr.php";
require_once "functions.php";
$cn = require "conn.php";

$method = $_SERVER['REQUEST_METHOD'];

$input  = file_get_contents("php://input");
//file_put_contents('inputDump.txt', $input, FILE_APPEND); // uncoment for debugging
$input = json_decode($input);

$userData = require_once('tokento.php'); // for user validation uncoment

switch ($method) {
	case 'POST': // update, insert, delete and select 
		try{
			$sql = build_sql($input);  // imported function from functions.php
			$sth = $cn->prepare($sql);
			$sth->execute((array)$input->data);
			if($input->cmd == 'select' ){
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
	    	'error' => "$method method forbiden",
      	'code' => 417,
      	'message' => "$method - Not implemented use POST",
				'Info' => "This is test endpoint for RP_JSON-PHP-API. If you don't know what is this? You are here probably by mistake",
      	'InputData' => $input
    ]);
}
echo json_encode($ret, JSON_NUMERIC_CHECK + JSON_PRESERVE_ZERO_FRACTION);
