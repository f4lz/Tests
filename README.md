# Комментарии к заданиям))

## 1. Верстка блока (ветка main)
В этом задании с версткой не использовал Js, так как посчитал, что задание с версткой должно быть выполнено версткой ;) 

## 2. Таблица на странице (ветка table)
Тут я написал все в комментарии кода, но продублирую еще раз. 

/* ФИКС 

РАЗРЕШЕНИЕ 375px потому что предыдущее задание было расчитано на такой размер экрана */

Padding(вообще можно поставить его поменьше, не убирать полностью, но с паддингом 15px слева справа таблица чуть шире, чем надо), и в свойстве width, жестких размеров лучше избегать, потому что возникают вот такие случаи))), именно поэтому задал ему max-width  */
 
## 3. Билеты на событие

Честно говоря немного не понял задание, думал в phpMyAdmin делать, потому что из прочитанного подумал что это просто база данных, но решил сделать через Js, что-то похожее, ушло достаточное кол-во времени на понимание задания, не уверен в том правильно я его понял или нет по итогу, но сделал как понял, так же момент с баркодом, если там стоит задача каждый билет, то есть условно у нас есть 1 десткий билет и 2 взрослых, то каждому в этой базе добавить случайное число, для этого тогда нужно будет считать кол-во билетов и выводит в бд кол-во Math.random, чисел, которое у нас есть, с доп проверкой на то, чтобы они не повторялись,  ну и наверное больше 0, и с ограничениям по знаков после запятой toFixed()
