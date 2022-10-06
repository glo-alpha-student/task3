'use strict';


const title = prompt('Как называется ваш проект?');
console.log(title);
const screens = prompt('Какие типы экранов нужно разработать?');
console.log(screens);
const screenPrice = +prompt('Сколько будет стоить данная работа?');
console.log(parseInt(screenPrice));
const adaptive = prompt('Нужен ли адаптив на сайте?');
console.log(Boolean(adaptive));

const service1 = prompt('Какой дополнительный тип услуги нужен?');
console.log(service1);
const servicePrice1 = +prompt('Сколько это будет стоить?');
console.log(parseInt(servicePrice1));
const service2 = prompt('Какой дополнительный тип услуги нужен?');
console.log(service2);
const servicePrice2 = +prompt('Сколько это будет стоить?');
console.log(parseInt(servicePrice2));

let rollback = Math.random() * 99;

const fullPrice = screenPrice + servicePrice1 + servicePrice2;
const servicePercentPrice = fullPrice - (fullPrice * (rollback / 100));
console.log(Math.ceil(servicePercentPrice) + ' рублей');

if (fullPrice > 30000) {
    console.log('Даем скидку в 10%');
} else if (fullPrice > 15000) {
    console.log('Даем скидку в 5%');
} else if (fullPrice > 0) {
    console.log('Скидка не предусмотрена');
} else {
    console.log('Что-то пошло не так');
}



