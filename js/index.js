window.onload = function () {

    var userForm = document.getElementById('userdata');
    userForm.onsubmit = function (e) {
        e.preventDefault();
        var userEmail = userForm.email.value;
        userForm.reset();
        postUserData(userEmail);
    };


    var postUserData = function (email) {

        var http = new XMLHttpRequest();

        if (http.readyState == 4){
            // console.log(http.response);
        }

        http.open('POST',
            'https://woxcutapi.herokuapp.com/user/create?email=' + email + '&ip=192.168.1.1',
            true);

        http.send();
    };

};
