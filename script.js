const Modal = {
    open(){
      document
        .querySelector('.model-overlay') //Vai pegar o primeiro elemento no documento com a classe = ".model-overlay"
        .classList.add('active') // Adiciona uma nova classe no elemento descoberto
    },
    close(){
      document
        .querySelector('.model-overlay')
        .classList.remove('active')
    }
  }

  const transations = [{
      id:1,
      description:'Manisa',
      amount:1200000,
      date:'13/04/2020',
  },
  {
      id:2,
      description:'Compra de Curso',
      amount:-5900,
      date:'10/04/2020',
  },
  {
      id:3,
      description:'Pagamento de notebook',
      amount:-120000,
      date:'27/03/2020',
  },
  {
      id:4,
      description:'Compra de água',
      amount:-540000,
      date:'15/03/2020',
  }
]

  const Transaction = {
      incomes(){
          return "R$ 12.000";
      },
      expenses(){
          return "R$ 6.659"
      },
      total(){
          return "R$ 5.341"

      }
  }

  const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),
    addTransaction(transations, index){
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transations)
        DOM.transactionsContainer.appendChild(tr)
    },
    innerHTMLTransaction(transations){ 
          CssClass = transations.amount > 0 ? "positive" : "negative"
          const amount = Utils.formatCurrency(transations.amount)
          const html = `
          <tr>
              <td class="description">${transations.description}</td>
              <td class="${CssClass}">${amount}</td>
              <td class="date">${transations.date}</td>
              <td>
                <img src="./assets/minus.svg" alt="">
              </td>
            </tr>
          ` 
          
        return html
      },
      updateBalance(){
        document.getElementById('SaidasDisplay').innerHTML=Transaction.expenses()
        document.getElementById('EntradasDisplay').innerHTML=Transaction.incomes()
        document.getElementById('TotalDisplay').innerHTML=Transaction.total()
      }
  }

  const Utils = {
    formatCurrency(value){
      const signal = Number(value) < 0 ? "-" : ""
      value = String(value).replace(/\D/g, "")
      value = Number(value) / 100
      value = value.toLocaleString("pt-BR",{
        style:"currency",
        currency:"BRL"
      })
      return signal+value

    }
  }

transations.forEach(function(transations){
  DOM.addTransaction(transations)
})

DOM.updateBalance()
