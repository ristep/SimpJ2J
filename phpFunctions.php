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

function getUserData($inp, $conn){
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
			$ret = [
				'OK' => true,
				'dataSet' => $inp->dataSet,
				'message' => $sth->rowCount()==1 ? 'UserData OK' : 'User not Found!' ,
				"data" => $result
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