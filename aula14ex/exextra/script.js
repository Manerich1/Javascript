function tabuada() {
    let num1 = document.getElementById('txt1')
    let num2 = document.getElementById('txt2')
    let tab = document.getElementById('seltab')

    if (num1.value.length == 0 && num2.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n1 = Number(num1.value)
        let n2 = Number(num2.value)
        
        tab.innerHTML = ``

        while (n1 <= 10) {
            let item = document.createElement('option')
            item.text = `${n1} x ${n2} = ${n1 * n2}`
            item.value = `tab${n2}`
            tab.appendChild(item)
            n1++;
        }
    }
}