var bio = {
    "name": "DIVYA KOLAMKAR",
    "role": "front end developer",
    "welcomeMessage": "hello! welcome",
    "skills": ["c", "c++", "java", "html", "javascript"],
    "biopic": "images/fry.jpg",
    "contacts": {
        "email": "divyakolamkar93@gmail.com",
        "mobile": "9611519804",
        "facebook": "divya kolamkar",
        "twitter": "no account",
        "github": "will update it soon",
        "location": "karwar"
    },
    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").append(formattedName);
        var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").append(formattedHeaderRole);
        var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcomeMessage);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#header").append(formattedMobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#header").append(formattedEmail);
        var formattedFacebook = HTMLfacebook.replace("%data%", bio.contacts.facebook);
        $("#header").append(formattedFacebook);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#header").append(formattedTwitter);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#header").append(formattedGithub);
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedBioPic);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

        if (bio.skills.length > 0) {
            $("#skills").append(HTMLskillsStart);
            for (skil = 0; skil < bio.skills.length; skil++) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[skil]);
                $("#skills").append(formattedSkill);
            }
        }
        $("#footerContacts").append(formattedLocation + formattedMobile + formattedFacebook + formattedTwitter + formattedGithub);
    }
};


var work = {
    "jobs": [{
        "start": 2016,
        "employer": "udacity",
        "title": "front end developer",
        "dates": "aug 21",
        "location": "karwar karnataka-581301",
        "description": "developing the front end"
    }, {
        "start": 2017,
        "employer": "infosys",
        "title": "front end developer",
        "dates": "aug 21",
        "location": "bangaluru-560007",
        "description": "developing the front end"
    }],
    "display": function() {
        for (job = 0; job < work.jobs.length; job++) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;
            $(".work-entry:last").append(formattedEmployerTitle);
        }
    }
};

var projects = {
    "projects": [{
        "start": "2014",
        "title": "finite automata",
        "dates": "2014",
        "description": "given a string all the tokens were passed back as an output.given a string all the tokens were passed back as an output.given a string all the tokens were passed back as an output.given a string all the tokens were passed back as an output.given a string all the tokens were passed back as an output.given a string all the tokens were passed back as an output.given a string all the tokens were passed back as an output.given a string all the tokens were passed back as an output.given a string all the tokens were passed back as an output.given a string all the tokens were passed back as an output.given a string all the tokens were passed back as an output.given a string all the tokens were passed back as an output.given a string all the tokens were passed back as an output.given a string all the tokens were passed back as an output.given a string all the tokens were passed back as an output.given a string all the tokens were passed back as an output.given a string all the tokens were passed back as an output.given a string all the tokens were passed back as an output.given a string all the tokens were passed back as an output.given a string all the tokens were passed back as an output.given a string all the tokens were passed back as an output.",
        "images": ["images/fry.jpg", "images/fry.jpg"]
    }, {
        "start": "2015",
        "title": "computer graphics-halloween night",
        "dates": "2015",
        "description": "a witch that is inactive at the day and active in the night.a witch that is inactive at the day and active in the night.a witch that is inactive at the day and active in the night.a witch that is inactive at the day and active in the night.a witch that is inactive at the day and active in the night.a witch that is inactive at the day and active in the night.a witch that is inactive at the day and active in the night.a witch that is inactive at the day and active in the night.a witch that is inactive at the day and active in the night.a witch that is inactive at the day and active in the night.a witch that is inactive at the day and active in the night.a witch that is inactive at the day and active in the night.a witch that is inactive at the day and active in the night.a witch that is inactive at the day and active in the night.a witch that is inactive at the day and active in the night.a witch that is inactive at the day and active in the night.a witch that is inactive at the day and active in the night.a witch that is inactive at the day and active in the night.a witch that is inactive at the day and active in the night.a witch that is inactive at the day and active in the night.a witch that is inactive at the day and active in the night.",
        "images": ["images/fry.jpg", "images/fry.jpg"]
    }, {
        "start": "2015",
        "title": "addressing auto insurance customer attrition problem using business intelligence",
        "dates": "2016",
        "description": "given the data available of a company it gives insight about the number of customer might risk at leaving the company.given the data available of a company it gives insight about the number of customer might risk at leaving the company.given the data available of a company it gives insight about the number of customer might risk at leaving the company.given the data available of a company it gives insight about the number of customer might risk at leaving the company.given the data available of a company it gives insight about the number of customer might risk at leaving the company.given the data available of a company it gives insight about the number of customer might risk at leaving the company.given the data available of a company it gives insight about the number of customer might risk at leaving the company.given the data available of a company it gives insight about the number of customer might risk at leaving the company.given the data available of a company it gives insight about the number of customer might risk at leaving the company.given the data available of a company it gives insight about the number of customer might risk at leaving the company.given the data available of a company it gives insight about the number of customer might risk at leaving the company.",
        "images": ["images/fry.jpg", "images/fry.jpg"]
    }],
    "display": function() {
        for (var pro = 0; pro < projects.projects.length; pro++) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[pro].title);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[pro].dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[pro].description);
            $(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription);
            for (img = 0; img < projects.projects[pro].images.length; img++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[pro].images[img]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

var education = {
    "schools": [{
        "start": "1996",
        "name": "st. micheals convent school",
        "degree": "sslc",
        "dates": "1996-2010",
        "location": "Dandeli, Karnataka",
        "majors": ["sslc"],
        "url": "www.school.com"
    }, {
        "start": "2010",
        "name": "canara pre-university",
        "degree": "puc",
        "dates": "2011-2012",
        "location": "Kodialbail, Mangaluru, Karnataka",
        "majors": ["puc"],
        "url": "www.school.com"
    }, {
        "start": "2012",
        "name": "canara engineering",
        "degree": "B.E",
        "dates": "2012-2016",
        "location": "bantwal, Mangaluru, Karnataka",
        "majors": ["computer science"],
        "url": "www.engineeing.com"
    }],

    "onlineCourses": [{
        "title": "front end web developer",
        "school": "udacity",
        "dates": "2016",
        "url": "www.udacity.com"
    }],
    "display": function() {
        for (var edu = 0; edu < education.schools.length; edu++) {
            $("#education").append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[edu].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
            var formattedUrl = HTMLschoolUrl.replace("%data%", education.schools[edu].url);
            $(".education-entry:last").append(formattedSchoolName + formattedDegree + formattedDates + formattedLocation + formattedUrl);
            for (maj = 0; maj < education.schools[edu].majors.length; maj++) {
                var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].majors[maj]);
                $(".education-entry:last").append(formattedMajor);
            }
        }

        for (var oli = 0; oli < education.onlineCourses.length; oli++) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[oli].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[oli].school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[oli].dates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[oli].url);
            $(".education-entry:last").append(HTMLonlineClasses + formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL);
        }
    }
};

education.display();
projects.display();
bio.display();
work.display();

$("#mapDiv").append(googleMap);