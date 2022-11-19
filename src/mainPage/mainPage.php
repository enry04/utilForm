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
                            <input type="date">
                            <span>date</span>
                            <input type="file">
                            <span>file</span>
                            <select>
                                <option value="1">1</option>
                                <option value="1">1</option>
                                <option value="1">1</option>
                                <option value="1">1</option>
                            </select>
                        </div>
                        <div class="third-row-container row">
                            <input type="radio">
                            <input type="radio">
                            <input type="radio">
                            <input type="radio">
                            <input type="checkbox">
                        </div>
                        <div class="fourth-row-container row">
                            <input type="submit">
                        </div>
                    </form>
                </div>
                <!-- <div class="inputs-container">
                    <form method="post">
                        <div class="items-container">
                            <div class="item">
                                <input type="text" placeholder="text" name="textBox">
                            </div>
                            <div class="item">
                                <input type="number" placeholder="number" name="numberBox">
                            </div>
                        </div> -->
                <!-- <div class="items-container">
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
                        <div class="radio-check-container">
                                <input type="file" name="fileBox" id="fileBox">
                                <label for="fileBox">file</label>
                                <input type="radio" name="radio" value="1">
                                <label for="1">1</label>
                                <input type="radio" name="radio" value="2">
                                <label for="2">2</label>
                                <input type="radio" name="radio" value="3">
                                <label for="3">3</label>
                                <input type="radio" name="radio" value="4">
                                <label for="4">4</label>
                            </div> -->
                </form>
            </div>
        </div>
        </div>
    </main>
</body>

</html>