<?php
#include <claves.txt>
$mysql = mysqli -> ($host, $user, $pass, $base);

$mslql -> querry ("create table persona (name varchar(50), description text, id not null primary key auto_increment)");

?>