const moment = require('moment');
const chartJs = require('chart.js');
const lightGallery = require('lightgallery.js');

//вывод даты moment
const date = moment().format('MMMM Do YYYY, h:mm:ss a');
document.getElementById('dateDashboard').innerHTML = date;
//console.log(date);

//функции, чтобы менять графики в расходах вб
const line = document.getElementById('line');
const bar = document.getElementById('bar');

function changeLine() {
    const updateType = 'line';
    myChart.config.type = updateType;
    myChart.update();
    //console.log(myChart.config.type)
};

function changeBar() {
    const updateType = 'bar';
    myChart.config.type = updateType;
    myChart.update();
    //console.log(myChart.config.type)
};

line.addEventListener('click', changeLine);
bar.addEventListener('click', changeBar);

//график расходы вб
const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June'
];

const data = {
    labels: labels,
    datasets: [{
        label: 'Amount of orders including discounts',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [355943, 289196, 207448, 348775, 284575, 404080],
    }, {
        label: 'Amount of payments including commissions',
        backgroundColor: 'rgb(255, 127, 80)',
        borderColor: 'rgb(255, 127, 80)',
        data: [314261, 245964, 180865, 287824, 234108, 366482],

    }, {
        label: 'Gross profit',
        backgroundColor: 'rgb(60, 179, 113)',
        borderColor: 'rgb(60, 179, 113)',
        data: [31046, 56727, 78810, 90639, 48394, 60723],

    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.getElementById('wbCosts'),
    config
);

        //Предметы 4teen
        const labelsGoods = [
            'Платья',
            'Юбки',
            'Пиджаки',
            'Юбки',
            'Полупальто',
            'Шорты',
            'Леггинсы'
        ];

        //console.log(labelsGoods);

        const dataGoods = {
            labels: labelsGoods,
            datasets: [{
                label: 'Структура товарной матрицы',
                backgroundColor: ['rgb(255, 0, 0)', 'rgb(255, 69, 0)', 'rgb(255, 255, 0)',
            'rgb(255, 0, 255)',
            'rgb(0, 255, 255)', 'rgb(0, 0, 255)', 'rgb(128, 0, 128)'
        ],
        borderColor: ['rgb(255, 0, 0)', 'rgb(255, 69, 0)', 'rgb(255, 255, 0)',
            'rgb(255, 0, 255)',
            'rgb(0, 255, 255)', 'rgb(0, 0, 255)', 'rgb(128, 0, 128)'
        ],
                data: [46, 21, 12, 7, 5, 5, 4],
            }]
        };

        const configGoods = {
            type: 'doughnut',
            data: dataGoods,
            options: {}
        };

        const myChartGoods = new Chart(
            document.getElementById('wbGoods'),
            configGoods
        );

//функции, чтобы менять графики в предметах
const doughnut = document.getElementById('doughnut');
const polararea = document.getElementById('polararea');

function changeDoughnut() {
    const updateType = 'doughnut';
    myChartGoods.config.type = updateType;
    myChartGoods.update();
    //console.log(myChart.config.type)
};

function changePolarArea() {
    const updateType = 'polarArea';
    myChartGoods.config.type = updateType;
    myChartGoods.update();
    //console.log(myChart.config.type)
};

doughnut.addEventListener('click', changeDoughnut);
polararea.addEventListener('click', changePolarArea);

lightGallery(document.getElementById('aniimated-thumbnials'), {
    thumbnail:true
}); 



