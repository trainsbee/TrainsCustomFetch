<?php
if (isset($_SERVER['REQUEST_METHOD']) && $_SERVER['REQUEST_METHOD'] === 'GET') {
    getUsers();
}else{
    postUser();
}


function getUsers() {
    $users = file_get_contents('db.json');
    $data = json_decode($users, true);

    echo json_encode(array("status" => "success", "type" => "get", "data" => $data));
}

function postUser() { 
    $users = file_get_contents('db.json');
    $data = json_decode($users, true);
    echo json_encode(array("status" => "success", "type" => "post", "data" => $data));

}