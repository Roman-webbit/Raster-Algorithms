# Курсова робота з растрових алгоритмів

Дошка задач в Trello - https://trello.com/invite/b/HEVzGKVo/ATTIcb50be74b300df431ed16c0886bdecf941CD1EA7/курсова-робота-з-растрових-алгор

Цей проект демонструє різні растрові алгоритми для малювання ліній і фігур на веб-сторінці. Він включає реалізації наступних алгоритмів:
1. Алгоритм Брезенхема для відрізка
2. Алгоритм Брезенхема для кола
3. Інкрементний алгоритм виведення еліпса
4. Інкрементний метод Жордана
5. Алгоритм DDA-лінії
6. Алгоритм Ву

## Використання веб-сторінки

1. ### Відкриття веб-сторінки
- Відкрийте браузер.
- Перейдіть до папки з файлами проекту.
- Двічі клацніть на файл `index.html`, щоб відкрити його в браузері.

2. ### Вибір алгоритму
- У верхній частині веб-сторінки є випадаючий список (dropdown menu) з назвою "Select Algorithm".
- Натисніть на випадаючий список, щоб побачити доступні алгоритми.
- Оберіть один з наступних алгоритмів:
  - Алгоритм Брезенхема для відрізка
  - Алгоритм Брезенхема для кола
  - Інкрементний алгоритм виведення еліпса
  - Інкрементний метод Жордана
  - Алгоритм DDA-лінії
  - Алгоритм Ву

3. ### Натискання кнопки "Draw"
- Після вибору алгоритму натисніть кнопку "Draw", яка знаходиться поруч з випадаючим списком.
- Вибраний алгоритм почне малювати на полотні (canvas), яке розташоване в центрі веб-сторінки.

4. ### Перегляд результату
- На полотні з'явиться графічне зображення лінії або фігури, згенерованої обраним алгоритмом.
- Ви можете повторити процес для інших алгоритмів, просто обравши інший алгоритм і натиснувши кнопку "Draw".

## Пояснення кожного алгоритму

### Алгоритм Брезенхема для відрізка
- Використовується для малювання прямих ліній на растровому екрані.
- Працює за принципом обчислення найкоротшого шляху між двома точками.
- Використовує цілочисельні обчислення для підвищення ефективності, що дозволяє малювати лінії з високою швидкістю і точністю.
- Алгоритм визначає, яку з сусідніх точок екрану треба зафарбувати, щоб лінія була найбільш прямою.

### Алгоритм Брезенхема для кола
- Використовується для малювання кругів.
- Використовує симетрію кола для зменшення кількості необхідних обчислень.
- Цілочисельні обчислення забезпечують високу швидкість і точність малювання.
- Алгоритм визначає точки, які повинні бути зафарбовані для утворення кругової форми.

### Інкрементний алгоритм виведення еліпса
- Використовується для малювання еліпсів.
- Використовує інкрементний підхід, де обчислення нових точок базується на попередньо обчислених точках.
- Цей метод дозволяє швидко і точно малювати еліпси, зберігаючи симетрію і пропорції.

### Інкрементний метод Жордана
- Використовується для малювання відрізків.
- Цей метод також використовує інкрементний підхід, але з дробовими координатами для підвищення точності.
- Алгоритм визначає точки, які повинні бути зафарбовані, щоб лінія була найбільш прямою і гладкою.

### Алгоритм DDA-лінії
- Digital Differential Analyzer (DDA) використовується для малювання прямих ліній.
- Використовує рівномірне збільшення координат для визнач

## Внесення змін та керування версіями

Проект структурований таким чином, щоб було легко вносити зміни та додавати нові функції. Код для кожного алгоритму знаходиться в окремому файлі в папці `algorithms`.

### Гілки на GitHub
- Кожен алгоритм реалізований у власній гілці на GitHub.
- Ви можете переглядати та вносити зміни до коду кожного алгоритму окремо.

### Внесення змін
- Внесіть зміни до файлів в папці `algorithms`.
- Виконайте коміт з чітким повідомленням про зміни.
- Відправте зміни на відповідну гілку на GitHub.

## Автори
- Габнюк Роман

## Ліцензія
Цей проект ліцензований на умовах ліцензії MIT.

# Coursework on raster algorithms

Task board in Trello - https://trello.com/invite/b/HEVzGKVo/ATTIcb50be74b300df431ed16c0886bdecf941CD1EA7/курсова-робота-з-растрових-алгор

This project demonstrates various raster algorithms for drawing lines and shapes on a web page. It includes implementations of the following algorithms:
1. Brezhenham's algorithm for a line segment
2. Brezhenham's algorithm for a circle
3. Incremental algorithm for drawing an ellipse
4. Jordan's incremental method
5. DDA line algorithm
6. Wu's algorithm

## Using the web page

1. ### Opening the web page
- Open your browser.
- Go to the folder containing the project files.
- Double-click on the `index.html` file to open it in your browser.

2. ### Selecting an algorithm
- At the top of the web page, there is a dropdown menu labeled “Select Algorithm.”
- Click on the dropdown menu to see the available algorithms.
- Select one of the following algorithms:
- Bresenham's algorithm for a line segment
- Bresenham's algorithm for a circle
- Incremental algorithm for drawing an ellipse
- Jordan's incremental method
- DDA line algorithm
  - Wu's algorithm

3. ### Clicking the “Draw” button
- After selecting an algorithm, click the “Draw” button next to the drop-down list.
- The selected algorithm will start drawing on the canvas located in the center of the web page.

4. ### Viewing the result
- A graphic image of a line or shape generated by the selected algorithm will appear on the canvas.
- You can repeat the process for other algorithms by simply selecting a different algorithm and clicking the “Draw” button.

## Explanation of each algorithm

### Brezhenham algorithm for a segment
- Used to draw straight lines on a raster screen.
- Works by calculating the shortest path between two points.
- Uses integer calculations to improve efficiency, allowing lines to be drawn with high speed and accuracy.
- The algorithm determines which of the neighboring points on the screen should be filled in to make the line as straight as possible.

### Bresenham's algorithm for circles
- Used for drawing circles.
- Uses the symmetry of the circle to reduce the number of calculations required.
- Integer calculations ensure high speed and accuracy of drawing.
- The algorithm determines the points that must be filled in to form a circular shape.

### Incremental algorithm for drawing an ellipse
- Used for drawing ellipses.
- Uses an incremental approach, where the calculation of new points is based on previously calculated points.
- This method allows you to quickly and accurately draw ellipses while maintaining symmetry and proportions.

### Jordan's incremental method
- Used for drawing segments.
- This method also uses an incremental approach, but with fractional coordinates to improve accuracy.
- The algorithm determines the points that must be filled in to make the line as straight and smooth as possible.

### DDA line algorithm
- Digital Differential Analyzer (DDA) is used to draw straight lines.
- Uses uniform coordinate increments to determine

## Making changes and version control

The project is structured in such a way that it is easy to make changes and add new features. The code for each algorithm is located in a separate file in the `algorithms` folder.

### Branches on GitHub
- Each algorithm is implemented in its own branch on GitHub.
- You can view and make changes to the code for each algorithm separately.

### Making changes
- Make changes to the files in the `algorithms` folder.
- Commit with a clear message about the changes.
- Send the changes to the corresponding branch on GitHub.

## Authors
- Roman Gabnyuk

## License
This project is licensed under the MIT license.
