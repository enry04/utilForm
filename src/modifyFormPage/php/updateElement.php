<?php

require("../../common/php/connection.php");

$connection = new ConnectionMySQL();
$pdo = $connection->getConnection();

$json = file_get_contents("php://input");
$data = json_decode($json);

$currentId = $data->currentId;
$testo = $data->text;
$date = $data->date;
$camposn = $data->checkBox;
$numero = $data->number;
$percorso = $data->file;
$idSupporto = $data->idSelect;
$idRadioet = $data->idRadio;
$result = null;

try {

    $query = $pdo->prepare("UPDATE tabella SET testo=:testo, data=:data, camposn=:camposn, numero=:numero, percorso=:percorso, idSupporto=:idSupporto, idRadioet=:idRadioet WHERE id=:currentId");
    $query->execute(['currentId' => $currentId, 'testo' => $testo, 'data' => $date, 'camposn' => $camposn, 'numero' => $numero, 'percorso' => $percorso, 'idSupporto' => $idSupporto, 'idRadioet' => $idRadioet]);
    $result = array(
        'data' => null,
        'status' => "success",
    );
} catch (PDOException $e) {
    $result = array(
        'data' => $e,
        'status' => "error",
    );
}

echo json_encode($result);
