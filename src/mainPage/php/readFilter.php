<?php

require("../../common/php/connection.php");

$connection = new ConnectionMySQL();
$pdo = $connection->getConnection();

$json = file_get_contents("php://input");
$data = json_decode($json);

$currentSearch = "%". $data->currentSearch ."%";

$query = $pdo->prepare("SELECT tabella.id, testo, data, camposn, numero, percorso, supporto.etichetta AS supportoEtichetta, radioet.etichetta AS radioetEtichetta FROM tabella INNER JOIN supporto ON tabella.idSupporto = supporto.id INNER JOIN radioet ON tabella.idRadioet = radioet.id WHERE testo LIKE :currentSearch");
$query->execute(['currentSearch' => $currentSearch]);
$dataList = $query->fetchAll();
$result = null;

if($dataList != null){
    $result = array(
        "data" => json_encode($dataList),
        "status" => "success",
    );
}else {
    $result = array(
        "data" => null,
        "status" => "error",
    );
}

echo json_encode($result);

?>