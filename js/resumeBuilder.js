/*
This is empty on purpose! Your code to build the resume will go here.
 */
$(document).click(function(loc) {
    // your code goes here
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});
// BIO info in NON-JSON format
var bio = {
    "name": "Bharathi A",
    "age": 35,
    "role": "Web Ninja",
    "contacts": {
        "mobile": "+919886644840",
        "email": "a.bharathi@gmail.com",
        "github": "rathisoft",
        //"twitter":"Yet to become a twitteratti",
        "location": "HSR Layout, Bengaluru"
    },
    "welcomeMessage": "Welcome to Bharthi's Online Resume",
    "skills": ["HTML", "css", "JS"],
    "biopic": "images/Bharathi_Profile_Pic_updated.jpg"
};

bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);

    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedlocation);

    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBiopic);

    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedwelcomeMsg);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var formattedSkills;
        for (i = 0; i < bio.skills.length; i += 1) {
            formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkills);
        }
    }

};
bio.display();


// Education section in JSON FORMAT and validated with JSON Lint on Feb 02, 2017
var education = {
    "schools": [{
            "name": "Coimbatore Institute of Technology",
            "location": "Coimbatore,Tamilnadu,India",
            "degree": "B.E",
            "majors": "Electronics and Communication",
            "dates": "2004",
            "url": "http://www.cit.edu.in/"
        },
        {
            "name": "Thiagrajar Polytechnic",
            "location": "Salem,Tamilnadu,India",
            "degree": "Diploma",
            "majors": "Computer Technology",
            "dates": "2000",
            "url": "http://www.tpt.edu.in/"
        },
        {
            "name": "Govt. Hr. Sec. School",
            "location": "Raispuram,Tamilnadu,India",
            "degree": "S.S.L.C",
            "majors": ["Tamil", "English", "Maths", "Science", "Social Studies"],
            "dates": "1997",
            "url": "https://www.linkedin.com/in/government-high-school-ss-salai-rasipuram-133a8544/"
        }
    ],
    "onlineCourses": [{
        "title": "Introduction to HTML",
        "school": "Udacity",
        "dates": "2016",
        "url": "httlps://Udacity.com"
    }]
};
education.display = function() {
    if (education.schools.length > 0) {
        var formattedName;
        var formattedDegree;
        var formattedDates;
        var formattedCity;
        var formattedMajors;

        for (i = 0; i < education.schools.length; i += 1) {
            $("#education").append(HTMLschoolStart);
            formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
            formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            formattedCity = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors);

            $(".education-entry:last").append(formattedName);
            $(".education-entry:last").append(formattedCity);
            $(".education-entry:last").append(formattedMajors);
            $(".education-entry:last").append(formattedDegree);
            $(".education-entry:last").append(formattedDates);
        }
    }
    //if (education.onlineCourses.length > 0) {

        for (i = 0; i < education.onlineCourses.length; i += 1) {
        var formattedSchool;
        var formattedURL;
        var formattedTitle;
        var formattedOdates;

            $("#online-education").append(HTMLonlineClasses);

            formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            //formattedURL = HTMLonlineURL.replace("#", education.onlineCourses[i].url).replace("%data%", "see profile");
            formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
            formattedOdates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
            formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

            $(".education-entry:last").append(formattedTitle);
            $(".education-entry:last").append(formattedSchool);
            $(".education-entry:last").append(formattedOdates);
            $(".education-entry:last").append(formattedURL);

        }
   // }
};
education.display();


// Jobs section in JSON FORMAT and validated with JSON Lint on Feb 02, 2017
var work = {
    "jobs": [{
            "employer": "AT&T",
            "title": "Principal",
            "dates": "Jan 2012 to future...",
            "location": "Outer ring road, Bengaluru",
            "description": "Supporting Ericsson elements of at&t"
        },
        {
            "employer": "Anritsu",
            "title": "Senior Consultant",
            "dates": "Jun 2005 to Dec 2010...",
            "location": "Indira Nagara, Bengaluru",
            "description": "Worked with leading edge simulators"
        },
        {
            "employer": "Accenture",
            "title": "Junior Software Engineer",
            "dates": "Jul 2004 to Jun 2005...",
            "location": "Vikrohli, Mumbai",
            "description": "Worked for client JP Morgan"
        }
    ]
};

function displayWork() {
    if (work.jobs.length > 0) {
            for (var jobs = 0; jobs < work.jobs.length; jobs += 1){
            $("#workExperience").append(HTMLworkStart);
            var formattedEmpolyer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmpolyerTitle = formattedEmpolyer + formattedTitle;
            $(".work-entry:last").append(formattedEmpolyerTitle);

            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $(".work-entry:last").append(formattedDates);

            var formattedLocation = HTMLlocation.replace("%data%", work.jobs[job].location);
            $(".work-entry:last").append(formattedLocation);

            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedDescription);
        }
    }
}
displayWork();

/* function locationizer(work_obj) {

    var locationArr = [];
    for (job in work_obj.jobs){
        var newLoc = work_obj.jobs[job].location;
        locationArr.push(newLoc);
    }
    return locationArr;
}
*/


// Project section in JSON FORMAT and validated with JSON Lint on Feb 02, 2017
var projects = {
    "projects": [{
            "title": "Sample 1",
            "dates": "2016",
            "description": "My First Nanodegree project",
            "images": ["http://placehold.it/350x150", "http://placehold.it/350x150"]
        },
        {
            "title": "Sample Project 2",
            "dates": "2017",
            "description": "My Portfolio Project",
            "images": ["http://placehold.it/350x150", "http://placehold.it/350x150"]
        }
    ]
};

projects.display = function() {
    //if (projects.projects.length > 0) {
        //for (var project in projects.projects)
        for (var projects = 0; projects < projects.projects.length; projects += 1) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedDescription);
            if (projects.projects[project].images.length > 0) {
                //for (var image in projects.projects[project].images)
                for (var image = 0; image < projects.projects[project].images; image += 1){
                    var formattedprojectImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                    $(".project-entry:last").append(formattedprojectImages);
                }
            }
        }
    //}
};
projects.display();

$("#mapDiv").append(googleMap);


/* NON JSON format code - kept here for future reference
var work = {
    "workTitle": "Principal",
    "workEmployer" : "at&t",
    "workStart" : "Jan 2011",
    "workDates" :"5 years and ongoing",
    "workLocation" : "Bengaluru",
    "workDescription": "Supporting Ericsson elements of at&t"
}; */



/* NON JSON format
var education = {
    "eduSchoolName" : {
        ["eduSchoolName1"]:"Coimbatore Institute of Technology",
        ["eduSchoolName2"]: "Thiagrajar Polytechnic",
        ["eduSchoolName3"]: "Govt. Hr. Sec. School",
                        },
 "schoolDates": "2001 - 2004",
        "schoolLocation2":"Coimbatore"
                };

*/

/*
// While loop practice
var bharathi = {};
bharathi.job = "Course Developer";
var courseCounter = 0;
var makeCourse = function() {
    console.log("made a course");
}
while (bharathi.job === "Course Developer")
{
    makeCourse();
    courseCounter++;
    if(courseCounter === 10)
        {
            bharathi.job="Learning Specialist";
        }
}

console.log(bharathi.job);

//$("#main").append("Bharathi Athinarayanan");
//var age = 35;
//var awesomethoughts;
//awesomethoughts = "I am Bharathi and I am awesome";
//funthoughts = awesomethoughts.replace("awesome", "fun");
//var email = "rathisoft@lycos.com";
//var newemail = email.replace("lycos", "gmail")
//console.log(awesomethoughts);
//console.log(funthoughts);
//console.log(email);
//console.log(newemail);
//$("#main").append(funthoughts);
//var name = "Bharathi Athinarayanan";
//var formattedname = HTMLheaderName.replace("%data%", name);
//var role = "Web Developer";
//var formattedrole = HTMLheaderRole.replace("%data%", role);
//$("#header").prepend(formattedrole);
// $("#header").prepend(formattedname);
//var skills = ["JS", "HTML", "CSS"]
//$("#main").append(skills);
//$("#main").append(skills[0]);
//console.log("Array Length"+skills.length);

*/