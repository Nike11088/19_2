export default class App {
  #cookieInfoHiddenName = 'cookieInfoHidden'
  
  init() {    
    const cookieInfoHidden = localStorage.getItem(this.#cookieInfoHiddenName)
    if (cookieInfoHidden) {
      const cookieContainer = document.querySelector('.cookie-consent')
      cookieContainer.style.display = 'none' 
    } else {
      const acceptCookieButton = document.querySelector('.cookie-consent__button')
      acceptCookieButton.addEventListener('click', () => this.#hideCookieInfo())
    }  
  } 

  #hideCookieInfo() {
    const cookieContainer = document.querySelector('.cookie-consent')
    cookieContainer.style.display = 'none' 
    localStorage.setItem(this.#cookieInfoHiddenName, true)
  }
}

