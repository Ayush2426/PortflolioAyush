<?php
$con = mysqli_connect("localhost", "root", "", "ayush");
$sql = "select * from myayushdb";
$rs = mysqli_query($con, $sql);
$row = mysqli_fetch_assoc($rs);
print_r($rs + "<br");
?>