<?php

require("../../common/php/connection.php");

$connection = new ConnectionMySQL();
$pdo = $connection->getConnection();

$json = file_get_contents("php://input");
$data = json_decode($json);
$currentId = $data->currentElementId;

$query = $pdo->prepare("SELECT * FROM tabella WHERE tabella.id =:currentId");
$query->execute(['currentId' => $currentId]);
$currentElement = $query->fetch();
$result = null;

if($currentElement != null) {
    $result = array(
        'data' => json_encode($currentElement),
        'status' => 'success',
    );
}else{
    $result = array(
        'data' => null,
        'status' => 'error',
    );
}

echo json_encode($result);
