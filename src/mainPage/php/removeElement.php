<?php

require("../../common/php/connection.php");

$connection = new ConnectionMySQL();
$pdo = $connection->getConnection();

$json = file_get_contents("php://input");
$data = json_decode($json);

$currentId = $data->currentId;


try {
    $query = $pdo->prepare("DELETE FROM tabella WHERE tabella.id=:currentId");
    $query->execute(['currentId' => $currentId]);
    $result = null;
    $result = array(
        'status' => "removed"
    );
} catch (PDOException) {
    $result = array(
        'status' => "error"
    );
}

echo json_encode($result);
