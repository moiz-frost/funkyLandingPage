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
        // $("#myModal").modal('show');
        postUserData(userEmail);
    };


    var postUserData = function (email) {

        var http = new XMLHttpRequest();

        if (http.readyState == 4){
            // console.log(http.response);
        }

        // http.onreadystatechange = function() {
        //     if (http.readyState === 4) {
        //         var response = JSON.parse(http.responseText);
        //         if (http.status === 200 && response.status === 'OK') {
        //             console.log('successful');
        //         } else {
        //             console.log('failed');
        //         }
        //     }
        //     }

        http.open('POST',
            'https://woxcutapi.herokuapp.com/user/create?email=' + email + '&ip=192.168.1.1',
            true);

        http.send();
    };
        
};

var onClick = function () {

};
