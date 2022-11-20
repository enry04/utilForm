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
    <main>
        <div class="main-container">
            <div class="form-container">
                <div class="top-container">
                    <h2>Aggiungi un record</h2>
                </div>
                <div class="items-container">
                    <form method="post">
                        <div class="first-row-container row">
                            <div class="input-container">
                                <input type="text" name="textBox" required="required">
                                <span>text</span>
                            </div>
                            <div class="input-container">
                                <input type="number" name="numberBox" required="required">
                                <span>number</span>
                            </div>
                        </div>
                        <div class="second-row-container row">
                            <div class="input-container">
                                <input type="date" required="required">
                                <span>date</span>
                            </div>
                            <div class="input-container">
                                <input type="file">
                                <span>file</span>
                            </div>
                            <div class="input-container">
                                <select>
                                    <option value="1">1</option>
                                    <option value="1">1</option>
                                    <option value="1">1</option>
                                    <option value="1">1</option>
                                </select>
                            </div>
                        </div>
                        <div class="third-row-container row">
                            <input type="radio" name="radio" required="required">
                            <input type="radio" name="radio" required="required">
                            <input type="radio" name="radio" required="required">
                            <input type="radio" name="radio" required="required">
                            <input type="checkbox">
                        </div>
                        <div class="fourth-row-container row">
                            <input type="submit">
                        </div>
                    </form>
                </div>
                </form>
            </div>
        </div>
        </div>
    </main>
</body>

</html>