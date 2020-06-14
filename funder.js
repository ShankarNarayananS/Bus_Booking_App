(function () {
  let timeout;

  function init(attempts) {
    clearTimeout(timeout)
    attempts = attempts || 1
    if (attempts > 3) return
    if (typeof CodeFundAd === 'undefined') {
      timeout = setTimeout(function () { init(attempts + 1) }, 350)
      return
    }
    new CodeFundAd({"selector":"#codefund_ad","template":"bottom-bar","theme":"light","fallback":false,"urls":{"impression":"","campaign":"","poweredBy":"","adblock":"https://cdn2.codefund.app/assets/px.js","uplift":""},"creative":{"name":null,"headline":null,"body":null,"cta":"Learn more","imageUrls":{"icon":null,"small":null,"large":null,"wide":null}}})
  }

  const codefundThemeName = 'light'
  const codefundStylesheetId = 'codefund-style'
  const codefundScriptId = 'codefund-script'

  if (!document.getElementById(codefundStylesheetId) && codefundThemeName !== 'unstyled') {
    const stylesheet = document.createElement('link')
    stylesheet.setAttribute('id', codefundStylesheetId)
    stylesheet.setAttribute('rel', 'stylesheet')
    stylesheet.setAttribute('media', 'all')
    stylesheet.setAttribute('href', 'https://codefund.io/packs/css/code_fund_ad-a345d6c3.css')
    stylesheet.addEventListener('load', init)
    document.head.appendChild(stylesheet)
  }

  if (document.getElementById(codefundScriptId)) {
    init()
  } else {
    const script = document.createElement('script')
    script.setAttribute('id', codefundScriptId)
    script.setAttribute('type', 'text/javascript')
    script.setAttribute('src', 'https://codefund.io/packs/js/code_fund_ad-c5122a9eb2cf2a34fc49.js')
    script.addEventListener('load', init)
    document.head.appendChild(script)
  }
})()
