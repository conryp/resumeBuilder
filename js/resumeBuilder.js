/*
This is empty on purpose! Your code to build the resume will go here.
 */


var skills = ["programming","bilingual","organization","strong work ethic","time management"];

var bio = {
 	"name" : "Patima Conry",
 	"role" : "\nWeb Developer\n",
 	"contacts":{
 		"mobile" : "720-244-9419",
 		"email" : "noon@conryservices.com",
 		"github" : "conryp",
 		"location" : "Washington, DC"
 	},
 	"welcomeMessage" : "Welcome to my first profile.",
 	"skills" : skills, 
 	"biopic" : "images/bella.jpg",
 	display : function() {

		var name = "Patima Conry";
		var role = "Web Developer";
		 
		var formattedName = HTMLheaderName.replace("%data%", name);
		var formattedRole = HTMLheaderRole.replace("%data%",role);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		if (bio.biopic){
			var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
			$("#header").append(formattedbioPic);
		}

		if (bio.contacts){

			var formattedMobileContact = HTMLmobile.replace("%data%",bio.contacts.mobile);
			var formattedEmailContact = HTMLemail.replace("%data%",bio.contacts.email);
			var formattedGithubContact = HTMLgithub.replace("%data%",bio.contacts.github);
			var formattedLocationContact = HTMLlocation.replace("%data%",bio.contacts.location);

			//first the header
			$("#topContacts").append(formattedMobileContact);
			$("#topContacts").append(formattedEmailContact);
			$("#topContacts").append(formattedGithubContact);
			$("#topContacts").append(formattedLocationContact);

			//then the footer
			$("#footerContacts").append(formattedMobileContact);
			$("#footerContacts").append(formattedEmailContact);
			$("#footerContacts").append(formattedGithubContact);
			$("#footerContacts").append(formattedLocationContact);
		}

		if (bio.welcomeMessage){
		var formattedMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
		$("#header").append(formattedMsg);
		}

		if (bio.skills.length > 0){

			$("#header").append(HTMLskillsStart);
			bio.skills.forEach(function(skill){
		    var formattedSkill = HTMLskills.replace('%data%',skill);
		    $("#skills").append(formattedSkill);
		});
		}
	 }
};


var education = {
	"schools" : [
		{
			"name" : "Rangsit University ",
			"location" : "Bangkok, Thailand",
			"degree" : "Undergraduate, Bachelor of Art",
			"majors" : ["English"],
			"dates" : "2007-2012",
			"url" : "https://www.rsu.ac.th/home"
		},
		{
			"name" : "University of Colorado ",
			"location" : "Denver, CO, US ",
			"degree" : "Undergraduate ",
			"majors" : ["Mathematics","Computer Science"],
			"dates" : "2012-2014",
			"url" : "http://www.ucdenver.edu/pages/ucdwelcomepage.aspx"
		},
		{
			"name" : "South Seattle College",
			"location" : "Seattle, WA, US ",
			"degree" : "Undergraduate ",
			"majors" : ["Mathematics"],
			"dates" : "2014-2016",
			"url" : "http://www.southseattle.edu/"
		}
	],
	"onlineCourses" : [
		{
			"title" : " Web Developer ",
			"school" : " Udacity ",
			"dates" : " 2016-now ",
			"url" : "https://www.udacity.com"
		}
	],
	display : function() {
		education.schools.forEach(function(school){
			$("#education").append(HTMLschoolStart);
			var formattedSchool = HTMLschoolName.replace("%data%",school.name).replace('#', school.url);
			var formattedLocation = HTMLschoolLocation.replace("%data%",school.location);
			var formattedDegree = HTMLschoolDegree.replace("%data%",school.degree);
			var formattedMajor = HTMLschoolMajor.replace("%data%",school.majors.join(','));
			var formattedDate = HTMLschoolDates.replace("%data%",school.dates);
			var formattedEducation = formattedSchool + formattedLocation + formattedDegree + formattedDate + formattedMajor;

			$(".education-entry:last").append(formattedEducation);
		});
			
		$("#education").append(HTMLonlineClasses);

		education.onlineCourses.forEach(function(course){
			$("#education").append(HTMLschoolStart);

			var formattedTitle = HTMLonlineTitle.replace("%data%",course.title);
			var formattedSchool = HTMLonlineSchool.replace("%data%",course.school);
			var formattedDate = HTMLonlineDates.replace("%data%",course.dates);
			var formattedURL = HTMLonlineURL.replace("%data%", course.url);
			var formattedOnline = formattedTitle + formattedSchool + formattedDate + formattedURL;

			$(".education-entry:last").append(formattedOnline);
			
		});
	}
};

var work = {
	"jobs" :[
		{
			"employer" : "Swing Thai",
			"title" : "Cashier, server",
			"location" : "Denver, CO, US",
			"dates" : "2011-2013",
			"description" : "I loved serving food and meeting people while I work at the Thai restaurant!\
			 I met new people all the time and I got to hang out with my thai friends too!!  "
		},
		{
			"employer" : "Emma's Espresso and Wine Bar",
			"title" : "Barista, Cashier",
			"location" : "Alexandria, VA, US",
			"dates" : "2016",
			"description" : "Good coffee with good company are the best to work with:) "
		}
	],
	display : function(){
		work.jobs.forEach(function(job){
			$("#workExperience").append(HTMLworkStart);
		
			var formattedEmployer = HTMLworkEmployer.replace("%data%",job.employer);

			var formattedTitle = HTMLworkTitle.replace("%data%",job.title);

			var formattedEmployerTitle = formattedEmployer + formattedTitle;

			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedLocation = HTMLworkLocation.replace("%data%",job.location);
			var formattedDates = HTMLworkDates.replace("%data%",job.dates);
			var formattedDescription = HTMLworkDescription.replace("%data%",job.description);

			var formattedLocDatDesp = formattedLocation + formattedDates + formattedDescription;
			$(".work-entry:last").append(formattedLocDatDesp);
		});
	}
};

var projects = {
	"projects" : [
		{
			"title" : "Resume Project",
			"dates" : "2016",
			"description" : "Writing a Resume using a Template that leverages, JQuery, JSON, Javascript, HTML and CSS",
			"images" : [
			"images/image.axd.jpeg"
			]
		}
	],
	display : function(){
		projects.projects.forEach(function(project){
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%",project.title);
			var formattedDates = HTMLprojectDates.replace("%data%",project.dates);
			var formattedDesp = HTMLprojectDescription.replace("%data%",project.description);
			var formattedPic = HTMLprojectImage.replace("%data%",project.images);

			var formattedProjects = formattedTitle + formattedDates + formattedDesp + formattedPic;

			$(".project-entry:last").append(formattedProjects);

		});
	}
};



function setUpPage() {

	$("mapDiv").append(googleMap);

	projects.display();
	education.display();
	work.display();
	bio.display();
}

setUpPage();






