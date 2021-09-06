// interface

interface Point {
    calc(): number
}

interface Point {
    something(): number
}

// With interfaces you can add them to classes with the keyword
// implements

type message = "success" | "failure"
interface Send {
    data: string
    send(): message
}

// getMessage
interface GetMessage {
    myMessage(): string
}

class Mail implements Send{ // implements enforce particular contracts
    private _password: string | undefined
    
    constructor(
        public data: string // "public" can be accessed anywhere without any restrictions
        ){
            this._password = undefined
        } 

    set password(x: string | undefined){
        this._password = x
    }

    get password(): string | undefined {
        return this._password
    }

    send(): message {
        let returnValue: message = "success"
        return returnValue
    }
}

class Email implements Send, GetMessage {
    data
    constructor(data: string){
        this.data = data
    }
    send(): message {
        let returnValue: message = "success"
        return returnValue
    }
    myMessage(): string {
        return JSON.stringify(this)
    }
}

const messages = [
    new Mail("Hello from snail mail"), 
    new Email("Hello can you see me in the inbox")]

messages.forEach(m => m.send())
let email = new Email("Hey!")
console.log(email.myMessage())