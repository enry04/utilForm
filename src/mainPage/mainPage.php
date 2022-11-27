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
            <input type="button" value="Aggiungi record">
        </a>
    </div>

    <main>
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>testo</th>
                        <th>data</th>
                        <th>camposn</th>
                        <th>numero</th>
                        <th>percorso</th>
                        <th>idSupporto</th>
                        <th>idRadioet</th>
                        <th>modifica</th>
                        <th>elimina</th>
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
                        <td>modifica</td>
                        <td>elimina</td>
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
                        <td>modifica</td>
                        <td>elimina</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
</body>

</html>