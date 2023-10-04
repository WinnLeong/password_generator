import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  length = 0
  includeLetters = false
  includeUppercase = false
  includeNumbers = false
  includeSymbols = false
  password = ''

  onChangeLength(eventTarget: EventTarget): void {
    const value: string = (<HTMLInputElement>eventTarget).value
    const parsedValue = parseInt(value)

    if (!isNaN(parsedValue)) {
      this.length = parsedValue
    }
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters
  }

  onChangeUseUppercase() {
    this.includeUppercase = !this.includeUppercase
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols
  }

  // onClick event
  onButtonClick() {
    const numbers = '1234567890'
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const symbols = '!@#$%^&*(){},.[]'

    let validChars = ''

    if (this.includeLetters) {
      validChars += letters
    }
    if (this.includeUppercase) {
      validChars += uppercase
    }
    if (this.includeNumbers) {
      validChars += numbers
    }
    if (this.includeSymbols) {
      validChars += symbols
    }

    let generatedPassword = ''
    for (let i = 0; i < this.length; i += 1) {
      const index = Math.floor(Math.random() * validChars.length)
      generatedPassword += validChars[index]
    }
    this.password = generatedPassword
  }
}

