<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $topic = $_POST['topic'];
    $content = $_POST['content'];

    $email_from = 'nghugare2@outlook.com';
    $email_subject = 'New Contact Message';
    $email_body = "New contact message recieved:\nName: $name\nEmail: $email\nSubject: $subject\nTopic: $topic\nContent: $content";
?>