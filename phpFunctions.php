<?php
/* Template function for defining custom procedures
** input parameter is usually data from post request
** returns PHP object 
*/
function phpTestPrintout($inp, $conn){
	$info =  (object)[
		'title' => "Test RPC",
		'desc' => "Dummy Function"
	]; 
	return (object) array_merge( (array) $info, (array) $inp );
}

function getUserData($inp, $conn, $tokenData){
		if(isset($inp->userId)){
			$sth = $conn->prepare("SELECT * FROM `users` WHERE `id`=:userId");
			$sth->bindParam('userId', $inp->userId);
		}else{
			$sth = $conn->prepare("SELECT * FROM `users` WHERE `name`=:name");
			$sth->bindParam('name', $inp->userName);
		}
		try{
			$sth->execute();
			$result = $sth->fetch(PDO::FETCH_OBJ);
			$sth2 = $conn->prepare('SHOW FIELDS FROM users');
			$sth2->execute();
//			$fields = $sth2->fetchAll(PDO::FETCH_OBJ);
			$ret = [
				'OK' => true,
				'dataSet' => $inp->dataSet,
				'table' => 'users',
				'message' => $sth->rowCount()==1 ? 'UserData OK' : 'User not Found!' ,
				"data" => $result
//				"fileds" => $fields
			];
			}catch (PDOException $e) {
				$ret = [
					'OK' => false,
					'errorType' => 'DataBase',
					'code' => 416,
					'message' => "Data Base Error!",
					'PDO' => $e,
					"userData" => false
				];
			}		

		return $ret;	
}

function changePassword($inp, $conn, $tokenData){
	if($tokenData->name != $inp->userName || $tokenData->id != $inp->userId ){
		return [
			'OK' => false,
			'errorType' => 'fakeRquest',
			'code' => 477,
			'message' => "Fake request Error!",
			'tUserId' =>  $tokenData->id,
			'iUserId' =>  $inp->userId
		];
	}

	if(isset($inp->userId)){
		$sth = $conn->prepare("SELECT * FROM `users` WHERE `id`=:userId"  );
		$sth->bindParam('userId', $inp->userId);
	}else{
		$sth = $conn->prepare("SELECT * FROM `users` WHERE `name`=:name");
		$sth->bindParam('name', $inp->userName);
	}
	try{
		$sth->execute();
		$result = $sth->fetch(PDO::FETCH_OBJ);
		$ret = [
			'OK' => true,
			'dataSet' => $inp->dataSet,
			'table' => 'users',
			'message' => "Password changed!" ,
			"data" => $result
//				"fileds" => $fields
		];
		}catch (PDOException $e) {
			$ret = [
				'OK' => false,
				'errorType' => 'DataBase',
				'code' => 416,
				'message' => "Data Base Error!",
				'PDO' => $e,
				"userData" => false
			];
		}		

	return $ret;	
}

// place for rpc declarations 
?>
