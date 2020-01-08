export const simulateRequest = data => {
  var promise = new Promise(function(resolve) {
    window.setTimeout(function() {
      resolve({ data })
    }, 3000)
  })
  return promise
}

export function getMoney(str) {
  return parseInt(str.replace(/[\D]+/g, ''))
}

export function formatReal(int) {
  let tmp = getMoney(int) + ''
  if (tmp === 'NaN') tmp = '0'
  if (tmp.length === 1 && tmp !== '0') tmp = '00' + tmp
  if (tmp.length === 2) tmp = '0' + tmp
  tmp = tmp.replace(/([0-9]{2})$/g, ',$1')
  if (tmp.length > 6) tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2')

  return tmp
}
