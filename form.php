<?php
    $to = "nasya008@yandex.ru";

    $name = $_REQUEST['fio'];
    $phone = $_REQUEST['phone'];
    $message = $_REQUEST['message'];
    $tech = $_REQUEST['tech'];

    $subject = "Оформление заявки от ".date('j.m.Y')." в ".date('H:i');
    $headers = "From: ТК Авангард Манипуляторы";
    $mailText = "Добавлена новая заявка.
    
Имя отправителя: $name 
Номер телефона: $phone 
Выбранная техника: $tech
Комментарий к заказу: $message"; 
 

if (!empty($name) && !empty($phone) && !empty($message)) {
    mail($to, $subject, $mailText, $headers);
    header("Location: https://tkavangard.ru/tkavangard/index.html");
}
?>