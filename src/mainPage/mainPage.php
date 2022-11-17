<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>util form</title>
    <link rel="stylesheet" href="./css/mainPageStyle.css">
    <link rel="stylesheet" href="../common/css/pageStyle.css">
</head>
<body>
    <header>
        <div class="header-container">
            <div class="title-container">
                <h1 class="title-text">backoffice exercise</h1>
            </div>
        </div>
    </header>
    <main>
        <div class="form-container">
            <h2>form</h2>
            <form method="post">
                <div class="items-container">
                    <div class="item">
                        <input type="text" placeholder="some text" name="textBox">
                        <label for="textBox">text</label>
                    </div>
                    <div class="item">
                        <input type="number" placeholder="some numbers" name="numberBox">
                        <label for="numberBox">number</label>
                    </div>
                </div>
                <div class="items-container">
                    <div class="item">
                        <input type="date" name="dateBox">
                        <label for="dateBox">date</label>
                        <select>
                            <option value="">default</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    </main>
</body>
</html>