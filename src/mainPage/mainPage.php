<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Backoffice</title>
    <link rel="stylesheet" href="../common/css/pageStyle.css">
    <link rel="stylesheet" href="css/mainPageStyle.css">
</head>

<body>
    <div class="header-container">
        <h1 class="title-name">Backoffice</h1>
    </div>
    <div class="search-add-container">
        <form method="post">
            <input type="text" placeholder="Cerca record..." required="required">
            <input type="submit" value="Conferma">
        </form>
        <a href="../formPage/formPage.php">
            <input type="button" value="Aggiungi record" class="add-record-btn">
        </a>
    </div>

    <main>
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Testo</th>
                        <th>Data</th>
                        <th>Camposn</th>
                        <th>Numero</th>
                        <th>Percorso</th>
                        <th>IdSupporto</th>
                        <th>IdRadioet</th>
                        <th>Modifica</th>
                        <th>Elimina</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>ssdsd</td>
                        <td>323/32/3232</td>
                        <td>1</td>
                        <td>434343</td>
                        <td>C:/djnd/dshdb/djsdn</td>
                        <td>1</td>
                        <td>4</td>
                        <td><input type="button" value="modifica" class="modify-btn"></td>
                        <td><input type="button" value="elimina" class="remove-btn"></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>ssdsd</td>
                        <td>323/32/3232</td>
                        <td>1</td>
                        <td>34344</td>
                        <td>C:/djnd/dshdb/djsdn</td>
                        <td>1</td>
                        <td>4</td>
                        <td><input type="button" value="modifica"class="modify-btn"></td>
                        <td><input type="button" value="elimina" class="remove-btn"></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>ssdsd</td>
                        <td>323/32/3232</td>
                        <td>1</td>
                        <td>34344</td>
                        <td>C:/djnd/dshdb/djsdn</td>
                        <td>1</td>
                        <td>4</td>
                        <td><input type="button" value="modifica"class="modify-btn"></td>
                        <td><input type="button" value="elimina" class="remove-btn"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
</body>

</html>