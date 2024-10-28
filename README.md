# Форматирование даты публикации

Есть страница, содержащая список видеозаписей. 
У каждого блока есть дата публикации. 

![Relative Time](./pic/time.png)

В данный момент выводится просто текущее значение. Пример: `2017-09-01 14:15:10`. 
Решено изменять представление даты следующим образом в зависимости от его значения:
* `12 минут назад` - если прошло меньше часа,
* `5 часов назад` - если прошло больше часа,
* `7 дней назад` - если больше суток.

## Реализация

Используя HOC, обернуть `DateTime` в компонент `DateTimePretty` так, чтобы он преобразовывал дату в нужный вид.

Воспользуйтесь готовым файлом `App.js` и стилями `css/index.css` в качестве отправной точки.