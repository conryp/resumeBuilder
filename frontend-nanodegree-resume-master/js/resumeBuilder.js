/*
This is empty on purpose! Your code to build the resume will go here.
 */


var skills = ["programming","bilingual","organization","strong work ethic","time management"];

var bio = {
 	"name" : "Patima Conry",
 	"role" : "\nWeb Developer\n",
 	"contacts":{
 		"telephone" : "720-244-9419",
 		"email" : "noon@conryservices.com",
 		"github" : "conryp",
 		"location" : "Washington, DC"
 	},
 	"welcomeMessage" : "Welcome to my first profile.",
 	"skills" : skills /*[
 		"programming", "bilingual", "organization", "strong work ethic", "time management"
 		]*/,
 	"image" : "images/bella.jpg",
 	display : function() {
		 if (bio.image){
		 	var formattedbioPic = HTMLbioPic.replace("%data%", bio.image);
		 	$("#header").append(formattedbioPic);
		 }

		 if (bio.contacts){
		 	/*
		 	var formattedContact = HTMLmobile.replace("%data%",bio.contactInfo.telephone);
		 	$("#topContacts").append(formattedContact);
		 	formattedContact = HTMLemail.replace("%data%",bio.contactInfo.email);
		 	$("#topContacts").append(formattedContact);
		 	formattedContact = HTMLgithub.replace("%data%",bio.contactInfo.github);
		 	$("#topContacts").append(formattedContact);
		 	formattedContact = HTMLlocation.replace("%data%",bio.contactInfo.location);
		 	$("#topContacts").append(formattedContact);
		 	*/


		 	var formattedMobileContact = HTMLmobile.replace("%data%",bio.contacts.telephone);
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
		 	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
		 	$("#skills").append(formattedSkill);
		 	formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
		 	$("#skills").append(formattedSkill);
		 	formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
		 	$("#skills").append(formattedSkill);
		 	formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
		 	$("#skills").append(formattedSkill);
		 	formattedSkill = HTMLskills.replace("%data%",bio.skills[4]);
			$("#skills").append(formattedSkill);
		 }
	 }
}


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
		for (i in education.schools){
			$("#education").append(HTMLschoolStart);
				
			var formattedSchool = HTMLschoolName.replace("%data%",education.schools[i].name);
			var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
			var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
			var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[i].majors.join(','));
			var formattedDate = HTMLschoolDates.replace("%data%",education.schools[i].dates);
			var formattedEducation = formattedSchool + formattedLocation + formattedDegree + formattedDate + formattedMajor;

			$(".education-entry:last").append(formattedEducation);
		}
			
		$("#education").append(HTMLonlineClasses);

		for (i in education.onlineCourses){
			$("#education").append(HTMLschoolStart);

			var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);
			var formattedDate = HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates);
			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
			var formattedOnline = formattedTitle + formattedSchool + formattedDate + formattedURL;

			$(".education-entry:last").append(formattedOnline);
			
		}
	}
}

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
		for (job in work.jobs){
			$("#workExperience").append(HTMLworkStart);
		
			var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);

			var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);

			var formattedEmployerTitle = formattedEmployer + formattedTitle;

			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
			var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
			var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

			var formattedLocDatDesp = formattedLocation + formattedDates + formattedDescription;
			$(".work-entry:last").append(formattedLocDatDesp);
		}
	}
}

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
		for(pro in projects.projects){
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[pro].title);
			var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[pro].dates);
			var formattedDesp = HTMLprojectDescription.replace("%data%",projects.projects[pro].description);
			var formattedPic = HTMLprojectImage.replace("%data%",projects.projects[pro].images);

			var formattedProjects = formattedTitle + formattedDates + formattedDesp + formattedPic;

			$(".project-entry:last").append(formattedProjects);

		}
	}
}



function setUpPage() {

	var name = "Patima Conry";
	var role = "Web Developer";
	 
	var formattedName = HTMLheaderName.replace("%data%", name);
	var formattedRole = HTMLheaderRole.replace("%data%",role);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	$("mapDiv").append(googleMap);

	projects.display();
	education.display();
	work.display();
	bio.display();
}

function inName(name) 
{
	var names = name.split(' ');
	names[names.length-1] = names[names.length-1].toUpperCase();
	return names.join(' ');
}

setUpPage();






