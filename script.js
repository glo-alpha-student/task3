'use strict';


let askProject = prompt('Как называется ваш проект?');
let title = askProject;


let askMonitor = prompt('Какие типы экранов нужно разработать?');
let screens = askMonitor;


let askPrice = prompt('Сколько будет стоить данная работа?');
let screenPrice = parseInt(askPrice);


let askAdaptive = prompt('Нужен ли адаптив на сайте? \n да/нет');
let adaptive;
switch (askAdaptive) {
    case 'да':
        adaptive = true;
        break;
    case 'нет':
    default: adaptive = false;
}


let askService1 = prompt('Какой дополнительный тип услуги нужен?');
let service1 = askService1;

let askService2 = prompt('Какой дополнительный тип услуги нужен?');
let service2 = askService2;

let askServicePrice1 = prompt('Сколько это будет стоить?');
let servicePrice1 = parseInt(askServicePrice1);

let askServicePrice2 = prompt('Сколько это будет стоить?');
let servicePrice2 = parseInt(askServicePrice2);

const fullPrice = screenPrice + servicePrice1 + servicePrice2;

const servicePercentPrice = Math.ceil(fullPrice);
console.log(servicePercentPrice + ' рублей');

if (fullPrice > 30000) {
    console.log('Даем скидку в 10%');
} else if (15000 < fullPrice && fullPrice < 30000) {
    console.log('Даем скидку в 5%');
} else if (15000 > fullPrice && fullPrice > 0) {
    console.log('Скидка не предусмотрена');
} else {
    console.log('Что-то пошло не так');
}



