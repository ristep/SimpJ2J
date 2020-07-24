<?php

function photoList()
{
	$ok = true;
	$dir=".";
	$array = [];
	$sizes = [];
	$exif = [];
  $link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://" . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; 

  foreach (new DirectoryIterator($dir) as $fileInfo) {
      if ($fileInfo->getExtension() == 'jpg' ) {
				array_push($array, $fileInfo->getFilename());
				array_push($sizes, getimagesize ( $fileInfo->getFilename() ));
				array_push($exif,  exif_read_data( $fileInfo->getFilename()) );
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

print JSON_encode( photoList() );

//				print_r(getimagesize ( $fileInfo->getFilename()) );
				// array_push( $dim, getimagesize ( $fileInfo->getFilename() ) );
				// array_push( $array,$_SERVER['REQUEST_URI'].$fileInfo->getFilename());

// $link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 
//                 "https" : "http") . "://" . $_SERVER['HTTP_HOST'] .  
//                 $_SERVER['REQUEST_URI']; 
  
// print_r(REQUEST); 

// if ($fileInfo->isDir()) {
// listFolderFiles($fileInfo->getPathname());

?>