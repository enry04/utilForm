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
            <input type="text" placeholder="Cerca record..." required="required" class="search-text">
            <input type="button" value="Conferma" class="confirm-btn">
        <a href="../formPage/formPage.php">
            <input type="button" value="Aggiungi record" class="add-record-btn">
        </a>
    </div>

    <main>
        <div class="table-container">
            <table>
                <thead>
                </thead>
            </table>
        </div>
    </main>
    <script type="module" src="js/mainView.js"></script>
    <?php
    require("../common/php/popupTemplate.php");
    ?>
</body>

</html>