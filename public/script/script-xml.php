<?php 
$xml = file_get_contents('https://ginionusedcars.be/data/export_ginion.xml');
file_put_contents('../data.xml', $xml);
?>
