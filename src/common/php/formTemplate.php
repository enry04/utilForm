<div class="go-back-container"></div>
<main>
    <div class="main-container">
        <div class="form-container">
            <div class="top-container">
                <h2 class="title-text"></h2>
            </div>
            <div class="items-container">
                <form method="post">
                    <div class="first-row-container row">
                        <div class="input-container">
                            <input type="text" name="textBox" class="input-text" required="required">
                            <span>Testo</span>
                        </div>
                        <div class="input-container">
                            <input type="number" name="numberBox" class="input-number" required="required" onkeydown="javascript: return ['Backspace','Delete','ArrowLeft','ArrowRight'].includes(event.code) ? true : !isNaN(Number(event.key)) && event.code!=='Space'">
                            <span>Numero</span>
                        </div>
                    </div>
                    <div class="second-row-container row">
                        <div class="input-container">
                            <input type="date" class="input-date" required="required">
                            <span>Data</span>
                        </div>
                        <div class="input-container">
                            <input type="text" class="input-file" id="input-file" required="required">
                            <span>File</span>
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
                            <input type="submit" value="Conferma" class="btn-send">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</main>