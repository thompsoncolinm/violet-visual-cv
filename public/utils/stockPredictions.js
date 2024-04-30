import { dates } from './dates.js'
console.log('stockPredictions.js loaded')

const stockPredictions = {
    init() {
        
        const generateReportBtn = document.querySelector('.generate-report-btn')
        
        generateReportBtn.addEventListener('click', stockPredictions.fetchStockData)
        
        document.getElementById('ticker-input-form').addEventListener('submit', (e) => {
            e.preventDefault()
            const tickerInput = document.getElementById('ticker-input')
            if (tickerInput.value.length > 2) {
                generateReportBtn.disabled = false
                const newTickerStr = tickerInput.value
                stockPredictions.tickersArr.push(newTickerStr.toUpperCase())
                tickerInput.value = ''
                stockPredictions.renderTickers()
            } else {
                const label = document.getElementsByTagName('label')[0]
                label.style.color = 'red'
                label.textContent = 'You must add at least one ticker. A ticker is a 3 letter or more code for a stock. E.g TSLA for Tesla.'
            }
        })
    },
    tickersArr: [],
    loadingArea: document.querySelector('.loading-panel'),
    renderTickers() {
        const tickersDiv = document.querySelector('.ticker-choice-display')
        tickersDiv.innerHTML = ''
        stockPredictions.tickersArr.forEach((ticker) => {
            const newTickerSpan = document.createElement('span')
            newTickerSpan.textContent = ticker
            newTickerSpan.classList.add('ticker')
            tickersDiv.appendChild(newTickerSpan)
        })
    },
    async fetchStockData() {
        document.querySelector('.action-panel').style.display = 'none'
        const apiMessage = document.getElementById('api-message')
        stockPredictions.loadingArea.style.display = 'flex'
        try {
            const stockData = await Promise.all(stockPredictions.tickersArr.map(async (ticker) => {
                const url = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${dates.startDate}/${dates.endDate}?apiKey=${import.meta.env.PUBLIC_POLYGON_API_KEY}`
                const response = await fetch(url)
                const data = await response.text()
                const status = await response.status
                if (status === 200) {
                    apiMessage.innerText = 'Creating report...'
                    return data
                } else {
                    loadingArea.innerText = 'There was an error fetching stock data.'
                }
            }))
            stockPredictions.fetchReport(stockData.join(''))
        } catch(err) {
            stockPredictions.loadingArea.innerText = 'There was an error fetching stock data.'
            console.error('error: ', err)
        }
    },
    async fetchReport(data) {
        /** AI goes here **/
    },
    renderReport(output) {
        stockPredictions.loadingArea.style.display = 'none'
        const outputArea = document.querySelector('.output-panel')
        const report = document.createElement('p')
        outputArea.appendChild(report)
        report.textContent = output
        outputArea.style.display = 'flex'
    }
}
stockPredictions.init();