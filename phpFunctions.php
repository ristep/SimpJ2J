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
			} catch (PDOException $e) {
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
	if(isset($inp->userId)){
		if($tokenData->name != $inp->userName || $tokenData->id != $inp->userId ){
			return [
				'OK' => false,
				'errorType' => 'fakeRquest',
				'code' => 477,
				'message' => "Fake request Error!"
			];
		};
	};	

	$sth = $conn->prepare("SELECT `password` FROM `users` WHERE `id`=:userId");
	$sth->bindParam('userId', $inp->userId);
	$sth->execute();
	$result = $sth->fetch(PDO::FETCH_OBJ);
	if( $inp->oldPassword != $result->password ){
		return [
			// 'oldp' =>  $inp->oldPassword,
			// 'dnOld' => $result->password,
			'OK' => false,
			'errorType' => 'oldPasswordErr',
			'code' => 401,
			'message' => "Current Password is Incorrect!"
		];
	}

	$sth2 = $conn->prepare("UPDATE `users` SET `password` = :userPassword WHERE `users`.`id` = :userId;");
	$sth2->bindParam('userPassword', $inp->newPassword);
	$sth2->bindParam('userId', $inp->userId);
	try{
		$sth2->execute();
		$ret = [
			'OK' => true,
			'message' => "Password changed!" ,
//		"data" => $result
// 		"fileds" => $fields
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

function photoList()
{
	$ok = true;
	$dir="./images/slikca";
	$array = [];
  $link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://" . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; 

  foreach (new DirectoryIterator($dir) as $fileInfo) {
      if ($fileInfo->getExtension() == 'jpg' ) {
				array_push($array, $link.'images/slikca/'.$fileInfo->getFilename());
			};
	}
	$ret = [
		'OK' => true,
		'dataSet' => 'photoList',
		'data' => $array
	];
	return ($ret);	
}

// place for rpc declarations 
?>
