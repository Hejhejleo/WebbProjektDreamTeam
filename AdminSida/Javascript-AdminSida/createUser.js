
   $("#createUser").click(function () {
       var FName;
       var LName;
       var classname;
       var mail;
       var password;
       console.log("create")
        FName = ($("#firstname").val());
        LName = ($("#lastname").val());
        classname = ($("#klass").val());
        mail = ($("#email").val().toLowerCase());
        password = ($("#password").val());
       console.log("get value")
        if (mail.indexOf('@') != -1) {
            if (mail.indexOf('.') != -1) {
            var users = JSON.parse(localStorage.getItem("users"));
            if(users==null){
                console.log("null")
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
                console.log("cretea A")
                FNameA.push(FName);
                LNameA.push(LName);
                classnameA.push(classname);
                mailA.push(mail);
                passwordA.push(password);
                console.log("push ->A");
            users.firstName.push(FNameA);
            users.lastName.push(LNameA);
            users.className.push(classnameA);
            users.mail.push(mailA);
            users.password.push(passwordA);

                $("#firstname").val("");
                $("#lastname").val("");
                $("#klass").val("");
                $("#email").val("");
                $("#password").val("");
   console.log("empty");
            localStorage.setItem("users",JSON.stringify(users));
            alert("Nu har en ny användare skapats( "+FName+" "+LName+" )");

            }
        }

    });