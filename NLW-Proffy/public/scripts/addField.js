document.querySelector("#add-time").addEventListener('click', cloneField)

function cloneField () {
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    const fields = newFieldContainer.querySelectorAll('input')
    fields.forEach(selectTime => {
        selectTime.value = ''
    })
    document.querySelector('#schedule-itens').appendChild(newFieldContainer)
}