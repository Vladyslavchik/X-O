const div1 = document.querySelectorAll('div')
let counter = 0
console.dir(div1)

for (let i = 0; i < div1.length-1; i++) {
    const kv = div1[i]
    div1[i].onclick = function () {
        if (counter === 0) {
            if (kv.textContent === 'O') {
                return
            }
            kv.textContent = 'X'
            kv.style.color = 'white'
            counter = ++counter
            if (div1[0].textContent === 'X' && div1[1].textContent === 'X' && div1[2].textContent === 'X') {
                alert('Peremoha X')
            } else if (div1[3].textContent === 'X' && div1[4].textContent === 'X' && div1[5].textContent === 'X') {
                alert('Peremoha X')
            } else if (div1[6].textContent === 'X' && div1[7].textContent === 'X' && div1[8].textContent === 'X') {
                alert('Peremoha X')
            } else if (div1[0].textContent === 'X' && div1[3].textContent === 'X' && div1[6].textContent === 'X') {
                alert('Peremoha X')
            } else if (div1[1].textContent === 'X' && div1[4].textContent === 'X' && div1[7].textContent === 'X') {
                alert('Peremoha X')
            } else if (div1[2].textContent === 'X' && div1[5].textContent === 'X' && div1[8].textContent === 'X') {
                alert('Peremoha X')
            } else if (div1[0].textContent === 'X' && div1[4].textContent === 'X' && div1[8].textContent === 'X') {
                alert('Peremoha X')
            } else if (div1[2].textContent === 'X' && div1[4].textContent === 'X' && div1[6].textContent === 'X') {
                alert('Peremoha X')
            }
        }  else if (counter === 1) {
            if (kv.textContent === 'X') {
                return
            }
            kv.textContent = 'O'
            kv.style.color = 'white'
            counter = --counter

            if (div1[0].textContent === 'O' && div1[1].textContent === 'O' && div1[2].textContent === 'O') {
                alert('Peremoha O')
            } else if (div1[3].textContent === 'O' && div1[4].textContent === 'O' && div1[5].textContent === 'O') {
                alert('Peremoha O')
            } else if (div1[6].textContent === 'O' && div1[7].textContent === 'O' && div1[8].textContent === 'O') {
                alert('Peremoha O')
            } else if (div1[0].textContent === 'O' && div1[3].textContent === 'O' && div1[6].textContent === 'O') {
                alert('Peremoha O')
            } else if (div1[1].textContent === 'O' && div1[4].textContent === 'O' && div1[7].textContent === 'O') {
                alert('Peremoha O')
            } else if (div1[2].textContent === 'O' && div1[5].textContent === 'O' && div1[8].textContent === 'O') {
                alert('Peremoha O')
            } else if (div1[0].textContent === 'O' && div1[4].textContent === 'O' && div1[8].textContent === 'O') {
                alert('Peremoha O')
            } else if (div1[2].textContent === 'O' && div1[4].textContent === 'O' && div1[6].textContent === 'O') {
                alert('Peremoha O')
            }
        }
        console.log(counter)
    }
    div1[9].onclick = function () {
        for (const kv of div1) {
            kv.textContent = ''
            div1[9].textContent = 'Ще раз'
            counter = 0
        }
    }
}
