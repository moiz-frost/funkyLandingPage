window.onload = function () {

	console.log = function(){};

	var userForm = document.getElementById('userdata');
    userForm.onsubmit = function (e) {
        e.preventDefault();
        var userEmail = userForm.email.value;
        userForm.reset();
        postUserData(userEmail);
    };

    var userForm2 = document.getElementById('userdata2');
    userForm2.onsubmit = function (e) {
        e.preventDefault();
        var userEmail = userForm2.email.value;
        userForm2.reset();
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

var onClick = function () {

};
