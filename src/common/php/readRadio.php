<?php

require("../../common/php/connection.php");

$connection = new ConnectionMySQL();
$pdo = $connection->getConnection();

$query = $pdo->query("SELECT * FROM radioet");
$dataList = $query->fetchAll();
$result = null;

if($dataList != null) {
    $result = array(
        'data' => json_encode($dataList),
        'status' => 'success',
    );
}else{
    $result = array(
        'data' => null,
        'status' => 'error',
    );
}

echo json_encode($result);

?>