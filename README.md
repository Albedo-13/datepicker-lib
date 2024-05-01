# библиотека Modsen DatePicker (by Albedo-13)

## Деплой

📍 chromatic: https://www.chromatic.com/library?appId=662fdd927f92803bfd81fa4d

📍 npm: https://www.npmjs.com/package/datepicker-lib-albedo

## Быстрый старт


Добавьте в свой проект пакет datepicker-lib-albedo (in React project)
```js
npm i datepicker-lib-albedo
```

Импортируйте один из компонентов
```js
import { DatePicker } from "datepicker-lib-albedo";
// OR
import { RangePicker } from "datepicker-lib-albedo";
// OR
import { TodoPicker } from "datepicker-lib-albedo";
```

Вызовите один из компонентов 
```js
<DatePicker />
// OR
<RangePicker />
// OR
<TodoPicker />
```

Опционально добавьте аргументы к компоненту (все параметры являются необязательными): 
```js
<DatePicker
    value={"19/12/2024"}      // string, формат дд/мм/гггг
    maxValue={"10/01/2026"}   // string, формат дд/мм/гггг
    minValue={"20/02/2020"}   // string, формат дд/мм/гггг
    startFromMonday={true}    // boolean
    isHolidaysVisible={true}  // boolean
    isWeekendsVisible={true}  // boolean
/>
```

## Содержание

- [Техническое задание](#Техническое-задание)
- [Используемые технологии](#Используемые-технологии)
- [Структура проекта](#Структура-проекта)
- [Тестирование](#Тестирование)
- [Как начать](#Как-начать)
- [Полезные ссылки](#Полезные-ссылки)


## Описание

***DatePicker*** - библиотека для работы с различными видами календаря.

#### Функционал:


- Просмотр календаря;
- Выбор диапазона для календаря;
- Дефолтный календарь с заранее установленным диапазоном;
- Возможность выбора начала недели(с понедельника или воскресенья);
- Выбор вида календаря (по неделям, месяцам и т.д.);
- Реализовать возможность при клике на определенный день добавлять список задач и
сохранять их в localStorage;
- Возможность переключения на предыдущий(ую)/следующий(ую) неделю/месяц/год;
- Возможность выбора максимальной даты календаря;
- Возможность выбора минимальной даты для календаря;
- Возможность скрывать/показывать выходные дни и выделять праздничные дни другим цветом;
- Возможность перейти в календаре на введенную пользователем дату;
- Стилизация календаря.


#### Макет:

Ссылка на макет: [Макет "DatePicker"](https://www.figma.com/file/PGg4P38QaPjUzasxC2GSkv/Modsen-Datepicker?node-id=0%3A1&t=dWZj8oM41qBje0bv-0).


## Используемые технологии


### Для react
- ***node.js*** - программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код);
- ***babel*** - транспайлер, преобразующий код из одного стандарта в другой;
- ***eslint*** - линтер для JavaScript кода;
- ***npm*** - менеджер пакетов;
- ***rollup*** - сборщик ES-модулей;
- ***storybook*** - инструмент, используемый для разработки компонентов пользовательского интерфейса в изоляции;
- ***react*** - JavaScript-библиотека для создания пользовательских интерфейсов;
- ***typescript*** - типизация для Javascript;
- ***styled-components*** - система стилизации react компонентов;
- ***jest*** — интеграционное тестирование (rtl) + unit-тестирование.


## Полезные ссылки


[React](https://reactjs.org/docs/getting-started.html)


[Rollup](https://rollupjs.org/guide/en/)


[Storybook](https://storybook.js.org/docs/basics/introduction/)


[Eslint](https://eslint.org/docs/user-guide/configuring)


[Babel](https://babeljs.io/docs/en/configuration)


[Тестирование Jest](https://jestjs.io/ru/docs/getting-started)


[Styled-components](https://www.styled-components.com/docs)


[Husky](https://dev.to/ivadyhabimana/setup-eslint-prettier-and-husky-in-a-node-project-a-step-by-step-guide-946)



