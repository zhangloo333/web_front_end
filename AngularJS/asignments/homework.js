/**
 * Created by lei on 2015/11/19.
 */
var myapp=angular.module("samepleApp",[]);
myapp.controller("firCtr", function ($scope) {
    $scope.imgArry=['150.jpg','Logo.png','myicon.png'];
    var imgArry1=['150.jpg','Logo.png','myicon.png'];
//        $scope.red1= function () {
//            $scope.imgSrc=imgArry[0];
//        };
//
    $scope.amber= function () {
        $scope.imgSrc=imgArry1[1];
    };
//        $scope.green= function () {
//            $scope.imgSrc=imgArry[2];
//        };
    $scope.enable= function (i) {
        if(i==2)
        {
            $scope.eb=true;

        }
        else
        {
            $scope.eb=false;

        }
    };

    $scope.fade= function (i) {
        if(i==1)
        {
            $scope.addClass="img";

        }
        else
        {
            $scope.addClass="img1";

        }
    };

    $scope.inputList=['one','two','three'];
    $scope.telphone=['First','second','third'];
    //$scope.telphone={};
    $scope.inum=[3,3,4];
    //$scope.number = 3;

});

myapp.controller("Q9", function ($scope) {
    $scope.tel=function(){
        var len = $scope.in.length;
        console.log(len);
        if( len == 3 || len == 7)
        {
            $scope.in = $scope.in + "-";
        }
        if(len == 12)
        {
            $("#as").blur();
            //添加watch去解决focus和blur的问题
            //http://blog.ejci.net/2013/08/06/dealing-with-focus-and-blur-in-angularjs-directives/
        }
    }
});

myapp.controller("Q10", function ($scope) {
    var gar1=[];
    $("#in1").blur(function () {
        var getin = $("#in1").val();
        console.log(getin);
        gar1 = getin.split(",");
         sum =0;
           for(var i = 0;i<gar1.length;i++)
           {
               gar1[i]=parseInt(gar1[i]);
               sum+=gar1[i];
           }
            sum+=(gar1.length-1);
        console.log("sum="+sum);
        console.log(gar1);
    });

    $scope.$watch(
        function () {
            return $scope.intxt
        },
        function (n,o) {
            if(n != o)
            {
                var len = $scope.intxt.length;
                console.log(len);
                if( len == gar1[0] || len == gar1[0]+1+gar1[1])
                {
                    $scope.intxt = $scope.intxt + "-";
                }
                if(len == sum)
                {
                    $("#in2").blur();
                }
            }
        }
    )


});


myapp.controller("Q11", function ($scope) {
    app.directive("numinput", function () {
        return{
            restrict:"E",
            templateUrl:""
        }
    });
});

$("#tel").keyup(function () {
    var len =[]
    len[0]=$("#tel :nth-child(1)").val().length;
    len[1]=$("#tel :nth-child(2)").val().length;
    len[2]=$("#tel :nth-child(3)").val().length;
    console.log(len);
    if(len[0] >= 3)
    {
        //$("#tel :nth-child(2)").blur();
        $("#tel :nth-child(2)").focus();
    }
    if(len[1] >=3)
    {
        $("#tel :nth-child(3)").focus();
    }
    if(len[2] >= 4){
        $("#tel :nth-child(3)").blur();

    }
});

//$("#tw").attr(autofocus,false);