<?php
$emailObj = new Email;
$emailObj->sendEmail($_POST);
final class Email{
  public static function sendEmail($data){
    $to='library@latrobe.edu.au';
    $cc = $data['email'];
    $from = 'noreply@latrobeebureau.latrobe.edu.au';
    $subject = "La Trobe eBureau - Tell us what you think";
    $message = "<div style='font:12px Helvetica'>From: <b>". $data['name']."</b><br><br>Message:<br><br>". $data['message']."<div>";
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= 'From: '.$from."\r\n";
    $headers .= 'Cc: '.$cc . "\r\n";
    $ok = mail($to,$subject,$message,$headers);
    if($ok) echo json_encode(array("result"=>true));
    else echo json_encode(array("result"=>false));
  }
}
?>
