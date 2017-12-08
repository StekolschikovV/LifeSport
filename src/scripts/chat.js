class Chat {
    constructor() {
        this.isShowSmile = true
        this.inputLength = 0
        this.inputText = ''
        this.listeners()
        this.showHideSmile()
        this.inputLengthShow()
        this.scrollToBottom()
    }
    listeners() {
        document.querySelector('.add-message').onsubmit = (e) => {
            return false
        }
        document.querySelector('.add-message input[type=text]').oninput = (e) => {
            this.onInput(e)
        }
        document.querySelector('.add-message input[type=submit]').onclick = (e) => {
            this.addMess()
        }
        document.querySelector('.add-message button').onclick = (e) => {
            console.log(e)
            this.showHideSmile()
        }
    }
    showHideSmile() {
        this.isShowSmile = !this.isShowSmile
        document.querySelector('.smilies-container').style.display = this.isShowSmile ? 'block' : 'none'
    }
    addSmile(e) {
        this.inputText += `::${e}::`
        document.querySelector('.add-message input[type=text]').value = this.inputText
        this.onPastSmile()
    }
    textToSmile(text) {
        let t = text
        let smiles = ['cool', 'crying', 'girl', 'happy', 'kiss', 'muted', 'nervous', 'sad', 'sick', 'surprised', 'tongue', 'wink'].forEach(function (item, i, arr) {
            let n = t.search(`::${item}::`)
            if (n !== -1) {
                console.log(item)
                t = t.substr(0, n) + `<img src="./img/smilies/${item}.svg">` + t.substr(n + `::${item}::`.length);
            }
        });
        return t
    }
    onInput(e) {
        this.inputLength = e.target.value.toString().length
        this.inputText = e.target.value.toString()
        this.inputLengthShow()
    }
    onPastSmile() {
        let el = document.querySelector('.add-message input[type=text]')
        this.inputLength = el.value.length
        this.inputText = el.value.toString()
        this.inputLengthShow()
    }
    inputLengthShow() {
        document.querySelector('.length span').innerHTML = this.inputLength
    }
    scrollToBottom() {
        let el = document.querySelector(".show-message")
        el.scrollTop = el.scrollHeight
    }
    addMess() {
        if (this.inputLength > 0) {
            let e = document.createElement('div')
            let text = this.textToSmile(this.inputText)
            e.classList += 'mess'
            e.innerHTML = `
                <div class="left">
                    <div style="background-image: url(./img/avatars/anonim.jpg);" class="ava"></div>
                </div>
                <div class="right">
                    <div class="name">Незарегистрированный пользователь </div><div class="text">${text}</div>
                </div>
            `
            document.querySelector('.show-message-container').appendChild(e)
            this.scrollToBottom()
            this.inputLength = 0
            this.inputText = ''
            document.querySelector('.add-message input[type=text]').value = ''
            this.inputLengthShow()
        }
    }
}

var chat = new Chat()