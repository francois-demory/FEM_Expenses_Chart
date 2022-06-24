import datas from '../data.json' assert {type : 'json',};

function drawChart() {
    const chart = document.querySelector('.main__chart');
    datas.forEach(data => {
        const container = document.createElement('div');
        const day = document.createElement('div');
        const chartDatas = document.createElement('div');

        container.classList.add('chart__container');
        day.classList.add('chart__day');
        chartDatas.classList.add('chart__datas');

        day.innerHTML = `${data.day}`;
        const chartHeight = (data.amount * 300)/100;
        chartDatas.style.height = chartHeight + 'px';

        if (day.innerHTML === 'wed') {
            chartDatas.classList.add('chart__datas--wed');
        }

        chart.appendChild(container);
        container.appendChild(chartDatas);
        container.appendChild(day);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    drawChart();
});