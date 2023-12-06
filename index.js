async function getApiFinance(){
    const resolved = await fetch('http://localhost:3000/users')
    const response = await resolved.json()
    return response.map(renderHTML)
}

function renderHTML(user_id){
    const divContent = document.createElement('div')
    divContent.classList.add('divContent')

    const nameH2 = document.createElement('h2')
    nameH2.innerText = user_id.name

    const balance = document.createElement('h3')
    balance.innerText = `${user_id.balance},00`
    user_id.balance > 0 ? balance.classList.add('positive') : balance.classList.add('negative') 

    divContent.append(nameH2, balance)
    document.querySelector('#financeAll').append(divContent)
}

getApiFinance()