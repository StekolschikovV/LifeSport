class Chat {
    constructor(){
        this.isShowSmile = true
        this.inputLength = 0
        this.inputText = ''
        this.listeners()
        this.showHideSmile()
        this.inputLengthShow()
        this.scrollToBottom()
    }
    listeners(){
        document.querySelector('.add-message').onsubmit = (e) => {
            this.addMess()
            return false
        }
        document.querySelector('.add-message input[type=text]').oninput = (e) => {
            this.onInput(e)
        }
        document.querySelector('.add-message input[type=submit]').onclick = (e) => {
            this.addMess()
        }
        document.querySelector('.add-message button').onclick = () => {
            this.showHideSmile()
        }
    }
    showHideSmile(){
        this.isShowSmile = !this.isShowSmile
        document.querySelector('.smilies-container').style.display = this.isShowSmile ? 'block' : 'none' 
    }
    onInput(e){
        this.inputLength = e.target.value.toString().length
        this.inputText = e.target.value.toString()
        this.inputLengthShow()
        this.isShowSmile = true
        this.showHideSmile()
    }
    inputLengthShow(){
        document.querySelector('.length span').innerHTML = this.inputLength
    }
    scrollToBottom(){
        let el = document.querySelector(".show-message")
        el.scrollTop = el.scrollHeight
    }
    addMess(){
        if(this.inputLength > 0){
            let e = document.createElement('div')
            e.classList += 'mess'
            e.innerHTML = `
                <div class="left">
                    <div style="background-image: url(./img/avatars/anonim.jpg);" class="ava"></div>
                </div>
                <div class="right">
                    <div class="name">Незарегистрированный пользователь </div><div class="text">${this.inputText}</div>
                </div>
            `
            document.querySelector('.show-message-container').appendChild(e)
            this.scrollToBottom()
            this.inputLength = 0
            this.inputText = ''
            document.querySelector('.add-message input[type=text]').value = ''
        }

    }
}

window.chat = new Chat()