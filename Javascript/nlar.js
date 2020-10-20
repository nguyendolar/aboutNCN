var app = angular.module('myApp',[]);
app.controller('myController', function($scope) {
	$scope.abm = "About Me";
	$scope.updateInfo = "Updated 20 minuted ago";
	$scope.verify = "Verify";
	$scope.des = "Description about me !";
	$scope.cv = "Công việc";
	$scope.job1 = "";
	$scope.job2 = "";
	$scope.contact = "Thông tin liên lạc";
	$scope.contact1 = "nguyencaonguyencmu@gmail.com";
	$scope.contact2 = "fb.com/nguyennguyenas";
	$scope.contactmi = " LIÊN HỆ TÔI";
	$scope.ifyou = "";
	$scope.modal1 = "Facebook";
	$scope.modal2 = "Zalo";
	$scope.modal3 = "SnapChat";
	$scope.modal4 = "Email";
	$scope.modal5 = "Sms";
	$scope.linkfb = "https://fb.com/nguyennguyenas";
	$scope.linkzl = "";
	$scope.linksc = "";
	$scope.linkgm = "nguyencaonguyencmu@gmail.com";
	$scope.phonenumber = "0394073759 - Vietel";
	$scope.email = "nguyencaonguyencmu@gmail.com";
	$scope.title2 = "My Story";
	$scope.contentStory1 = "";
	$scope.contentStory2 = "";
	$scope.storytitle1 = "";
	$scope.storytitle2 = "";
	$scope.nothinglikeus = "Thank for watching";
	$scope.thankall = "Cảm ơn mọi người đã ủng hộ";
	$scope.au = "Lmint";
	$scope.phone = false;
	$scope.reverse = function () {
		$scope.phone= !$scope.phone;
	}
	$scope.gmail = false;
	$scope.reverse2 = function () {
		$scope.gmail= !$scope.gmail;
	};
});