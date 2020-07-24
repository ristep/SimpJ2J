<?php

function listFolderFiles($dir)
{
	$array = [];
  foreach (new DirectoryIterator($dir) as $fileInfo) {
      if ($fileInfo->getExtension() == 'jpg' ) {
				array_push( $array,$_SERVER['REQUEST_URI'].$fileInfo->getFilename());
			};
	}
	return $array;
}

// print( JSON_encode( listFolderFiles('.') ));

// $link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 
//                 "https" : "http") . "://" . $_SERVER['HTTP_HOST'] .  
//                 $_SERVER['REQUEST_URI']; 
  
// print_r(REQUEST); 

// if ($fileInfo->isDir()) {
// listFolderFiles($fileInfo->getPathname());

?>