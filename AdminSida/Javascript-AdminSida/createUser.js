
    var FName;
    var LName;
    var classname;
    var mail;
    var password;

   $("#createUser").click(function () {

        FName = ($("#firstname").val());
        LName = ($("#lastname").val());
        classname = ($("#klass").val());
        mail = ($("#email").val());
        password = ($("#password").val());

        if (mail.indexOf('@') != -1) {
            if (mail.indexOf('.') != -1) {
            var users = JSON.parse(localStorage.getItem("users"));
            if(users==null){
                var admin = {
                    "firstName": [["admin"]],
                    "lastName": [["admin"]],
                    "className": [[""]],
                    "mail": [["admin@admin.se"]],
                    "password": [["password"]]
                };
                localStorage.setItem("users",JSON.stringify(admin));
                users = JSON.parse(localStorage.getItem("users"));
            }
                var FNameA =new Array();
                var LNameA = new Array();
                var classnameA = new Array();
                var mailA = new Array();
                var passwordA = new Array();

                FNameA.push(FName);
                LNameA.push(LName);
                classnameA.push(classname);
                mailA.push(mail);
                passwordA.push(password);

            users.firstName.push(FNameA);
            users.lastName.push(LNameA);
            users.className.push(classnameA);
            users.mail.push(mailA);
            users.password.push(passwordA);

            localStorage.setItem("users",JSON.stringify(users));

            }
        }

    });