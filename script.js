'use strict';


const title = prompt('Как называется ваш проект?');


const screens = prompt('Какие типы экранов нужно разработать?');



const screenPrice = +prompt('Сколько будет стоить данная работа?');
parseInt(screenPrice);


let adaptive = prompt('Нужен ли адаптив на сайте?');

const service1 = prompt('Какой дополнительный тип услуги нужен?');

const service2 = prompt('Какой дополнительный тип услуги нужен?');

const servicePrice1 = +prompt('Сколько это будет стоить?');
parseInt(servicePrice1);

const servicePrice2 = +prompt('Сколько это будет стоить?');
parseInt(servicePrice2);

const fullPrice = screenPrice + servicePrice1 + servicePrice2;

const servicePercentPrice = Math.ceil(fullPrice);
console.log(servicePercentPrice + ' рублей');

if (fullPrice > 30000) {
    console.log('Даем скидку в 10%');
} else if (fullPrice > 15000) {
    console.log('Даем скидку в 5%');
} else if (fullPrice > 0) {
    console.log('Скидка не предусмотрена');
} else {
    console.log('Что-то пошло не так');
}



