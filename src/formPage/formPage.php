<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>util form</title>
    <link rel="stylesheet" href="./css/formPageStyle.css">
    <link rel="stylesheet" href="../common/css/pageStyle.css">
</head>

<body>

    <div class="go-back-container"></div>
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
                                <input type="text" name="textBox" class="input-text" required="required">
                                <span>text</span>
                            </div>
                            <div class="input-container">
                                <input type="number" name="numberBox" class="input-number" required="required" onkeydown="javascript: return ['Backspace','Delete','ArrowLeft','ArrowRight'].includes(event.code) ? true : !isNaN(Number(event.key)) && event.code!=='Space'">
                                <span>number</span>
                            </div>
                        </div>
                        <div class="second-row-container row">
                            <div class="input-container">
                                <input type="date" class="input-date" required="required">
                                <span>date</span>
                            </div>
                            <div class="file-container input-container">
                                <input type="file" class="input-file" required="required">
                                <span id="current-file">Choose file</span>
                            </div>
                        </div>
                        <div class="third-row-container row">
                        </div>
                        <div class="fourth-row-container row">
                            <div class="input-container">
                                <select class="input-select">
                                </select>
                            </div>
                        </div>
                        <div class="fifth-row-container row">
                            <div class="input-container checkbox-container">
                                <input type="checkbox" class="input-checkBox">
                                <span></span>
                            </div>
                            <div class="input-container">
                                <input type="submit" value="conferma" class="btn-send">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>
    <script type ="module" src="js/formView.js"></script>
    <div id="popup1" class="popup-overlay">
	<div class="popup-container">
    <h2 class="popup-content"></h2>
	<a class="close" href="#">&times;</a>
	</div>
</div>
</body>

</html>