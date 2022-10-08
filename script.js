'use strict';


let rollback = Math.random() * 99;

const title = prompt('Как называется ваш проект?');
const screens = prompt('Какие типы экранов нужно разработать?');
const screenPrice = +prompt('Сколько будет стоить данная работа?');
const adaptive = prompt('Нужен ли адаптив на сайте?');
const service1 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice1 = +prompt('Сколько это будет стоить?');
const service2 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice2 = +prompt('Сколько это будет стоить?');

const fullPrice = screenPrice + servicePrice1 + servicePrice2;
const servicePercentPrice = fullPrice - (fullPrice * (rollback / 100));


if (fullPrice > 30000) {
    console.log('Даем скидку в 10%');
} else if (fullPrice > 15000) {
    console.log('Даем скидку в 5%');
} else if (fullPrice > 0) {
    console.log('Скидка не предусмотрена');
} else {
    console.log('Что-то пошло не так');
}

console.log(title);
console.log(screens);
console.log(parseInt(screenPrice));

console.log(Boolean(adaptive));

console.log(service1);
console.log(parseInt(servicePrice1));
console.log(service2);
console.log(parseInt(servicePrice2));

console.log(Math.ceil(servicePercentPrice) + ' рублей');



