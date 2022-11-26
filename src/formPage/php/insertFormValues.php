<?php

require("../../common/php/connection.php");

$connection = new ConnectionMySQL();
$pdo = $connection->getConnection();

$json = file_get_contents("php://input");
$data = json_decode($json);

$testo = $data->text;
$date = $data->date;
$camposn = $data->checkBox;
$numero = $data->number;
$percorso = $data->file;
$idSupporto = $data->idSelect;
$idRadioet = $data->idRadio;
$result = null;

try {

    $query = $pdo->prepare("INSERT INTO tabella (testo,data,camposn,numero,percorso,idSupporto,idRadioet) VALUES (:testo,:data,:camposn,:numero,:percorso,:idSupporto,:idRadioet)");
    $query->execute(['testo' => $testo, 'data' => $date, 'camposn' => $camposn, 'numero' => $numero, 'percorso' => $percorso, 'idSupporto' => $idSupporto, 'idRadioet' => $idRadioet]);
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
