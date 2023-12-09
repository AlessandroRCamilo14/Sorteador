function generateNumber() {
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)
    

    if (min >= max) {
        alert("O número inicial precisa ser menor do que o numero final!")
    }
    else
        if (min <= -1) {
            alert("O número inicial precisa ser maior ou igual a 0")

        }
        else
            if (max <= -1) {
                alert("O número final precisa ser maior ou igual a 0")

            }
            else 
            if (min + max < 10)    {
                alert("A soma entre o número inicial e o número final precisa ser maior ou igual a 10")
            }
            else {
                const result = Math.floor(Math.random() * (max - min + 1)) + min
                sortNumber.innerHTML = result
            }
}

