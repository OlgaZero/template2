/* Описание скрипта
код, который будет проверять содержимое текстового поля на наличие фрагмента "код 2025". В зависимости от результата проверки, будет выводиться соответствующее сообщение в окне оповещения при нахождении "Письмо отправлено!" (и загружаться файл gift.pdf), при отсутствии - "Код введён неверный! Пройди квест для получения кода!", и в любом случае после щелчка по кнопке - очищаться все текстовые поля формы.
 */

// Получаем элементы
const button = document.querySelector(".btn");
const textarea = document.getElementById("exampleFormControlTextarea1");
const inputField = document.getElementById("exampleFormControlInput1");

// Добавляем обработчик события клика
button.addEventListener("click", function () {
  // Получаем текст из текстового поля
  const userInput = inputField.value;

  // Проверяем наличие фрагмента "код 12345"
  if (userInput.includes("код 12345")) {
    alert("Код Lorem с письмом отправлен!");
    // Загружаем файл gift.jpg
    //window.location.href = "gift.jpg";
  } else {
    alert("Код Lorem введён неверный!");
  }

  // Очищаем текстовые поля
  inputField.value = "";
  textarea.value = "";
});
