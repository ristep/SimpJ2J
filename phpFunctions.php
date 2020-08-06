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
//Checking the validity of the username, new or changed one
function validNewUserName($inp,$conn,$tokenData){
	if(isset($inp->userId) && isset($inp->oldUserName) && isset($inp->newUserName)){
		try{
			$sth = $conn->prepare("SELECT count(id) `count` FROM `users` WHERE id!=:userId and name=:newUserName");
			$sth->bindParam('userId', $inp->userId);
			$sth->bindParam('newUserName', $inp->newUserName);
			$sth->execute();
			$result = $sth->fetch(PDO::FETCH_OBJ);		
			$data = $result->count == 0;
			if($data)
				//$message='Valid new Username';
				$message = '';
			else 
				$message="Username is already taken!";
			return [
				'OK' => true,
				'code' => 200,
				'message' => $message,
				'data' => $data
			];	
		} catch (PDOException $e){
			return [
				'OK' => false,
				'errorType' => 'Some server ERROR!',
				'code' => 500,
				'PDO' => $e,
				'message' => "Internal RPC server error!"
			];
		}
	}else{
		return [
			'OK' => false,
			'errorType' => 'Bad Request!',
			'code' => 400,
			'message' => "Wrong input parametars!"
		];
	}
}

// Change password function
function changePassword($inp, $conn, $tokenData){
	if(isset($inp->userId)){
		if($tokenData->name != $inp->userName || $tokenData->id != $inp->userId ){
			return [
				'OK' => false,
				'errorType' => 'fakeRquest',
				'code' => 477,
				'message' => "Fake request Error! $tokenData->name != $inp->userName || $tokenData->id != $inp->userId"
			];
		};
	};	

	$sth = $conn->prepare("SELECT `password` FROM `users` WHERE `id`=:userId");
	$sth->bindParam('userId', $inp->userId);
	$sth->execute();
	$result = $sth->fetch(PDO::FETCH_OBJ);
	if( $inp->oldPassword != $result->password ){
		return [
			'oldp' =>  $inp->oldPassword,
			 'dnOld' => $result->password,
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

// Getting photo list from a folder on the server, just for an example
function photoList()
{
	$ok = true;
	$dir="./images/slikca";
	$array = [];
	$sizes = [];
  $link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://" . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; 

  foreach (new DirectoryIterator($dir) as $fileInfo) {
      if ($fileInfo->getExtension() == 'jpg' ) {
				$fl ='images/slikca/'.$fileInfo->getFilename();
				array_push($array, $link.$fl);
				array_push($sizes, getimagesize( $fl ));
			};
	}
	$ret = [
		'OK' => true,
		'dataSet' => 'photoList',
		'data' => $array,
		'sizes' => $sizes
	];
	return ($ret);	
}
// photo list with exif data from photos
function photoListExif()
{
	$ok = true;
	$dir="./images/slikca";
	$array = [];
	$sizes = [];
	$exif = [];
  $link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://" . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; 

  foreach (new DirectoryIterator($dir) as $fileInfo) {
		if ($fileInfo->getExtension() == 'jpg' ) {
			$fl ='images/slikca/'.$fileInfo->getFilename();
			array_push($array, $link.$fl);
			array_push($sizes, getimagesize( $fl ));
			array_push($exif,  exif_read_data( $fl) );
			};
	}
	$ret = [
		'OK' => true,
		'dataSet' => 'photoList',
		'data' => $array,
		'sizes' => $sizes,
		'exif' => $exif
	];
	return ($ret);	
}

// place for rpc declarations 
?>
