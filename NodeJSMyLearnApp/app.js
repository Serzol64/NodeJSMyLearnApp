'use strict';

function getLatestsMoleculeWeight(weight, i = weight.length - 1) {
    const current = weight.length - 1 == i; //Ищем самые тяжёлые молекулы.

    if (i === 0) {
        return weight[0]; //Если молекулы одинаковы с нулём, то мы получаем вес самого первого молекула
    }

    weight.sort((a, b) => a - b);
    weight[i - 1] = (weight[i] === weight[i - 1]) ? 0 : weight[i] - weight[i - 1]; 

    return getLatestsMoleculeWeight(weight, i - 1);
}


console.log("Осталось весов молекул: " + getLatestsMoleculeWeight([2, 7, 4, 1, 8, 1])); // Вносим молекулы с их весами и получаем остаток весов молекулов;-)