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
                                <input type="number" name="numberBox" required="required" onkeydown="javascript: return ['Backspace','Delete','ArrowLeft','ArrowRight'].includes(event.code) ? true : !isNaN(Number(event.key)) && event.code!=='Space'">
                                <span>number</span>
                            </div>
                        </div>
                        <div class="second-row-container row">
                            <div class="input-container">
                                <input type="date" required="required">
                                <span>date</span>
                            </div>
                            <div class="input-container">
                                <input type="file" required="required" id="btnFile">
                                <span id="currentFile">Choose file</span>
                            </div>
                        </div>
                        <div class="third-row-container row">
                            <div class="input-container radio-container">
                                <input type="radio" name="radio" id="1" required="required">
                                <label for="1">diksmdn</label>
                            </div>
                            <div class="input-container radio-container">
                                <input type="radio" name="radio" id="2" required="required">
                                <label for="2">diksmdn</label>
                            </div>
                            <div class="input-container radio-container">
                                <input type="radio" name="radio" id="3" required="required">
                                <label for="3">diksmdn</label>
                            </div>
                            <div class="input-container radio-container">
                                <input type="radio" name="radio" id="4" required="required">
                                <label for="4">diksmdn</label>
                            </div>
                        </div>
                        <div class="fourth-row-container row">
                            <div class="input-container">
                                <select>
                                    <option hidden disabled></option>
                                    <option value="1">wfvwrvwv</option>
                                    <option value="1">dadf</option>
                                    <option value="1">nencej</option>
                                    <option value="1">1ìkdmekfdm</option>
                                </select>
                            </div>
                        </div>
                        <div class="fifth-row-container row">
                            <div class="input-container checkbox-container">
                                <input type="checkbox">
                                <span></span>
                            </div>
                            <div class="input-container">
                                <input type="submit">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>
</body>

</html>