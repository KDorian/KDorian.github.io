var bio = {
  "name": "Dorian Kucharski",
  "role": "Front-End Developer",
  "contacts": {
    "mobile": "+48 785 691 806",
    "email": "dorian.kucharski@gmail.com",
    "github": "KDorian",
    "location": "Warsaw",
  },
  "welcomeMessage": "Welcome to my resume!",
  "skills": ["HTML5", "CSS3", "JavaScript", "jQuery", "Java", "Android", "Git"],
  "gallupStrengths": ["Learner", "Analytical", "Harmony", "Discipline", "Responsibility"],
  "biopic": "images/dk2.jpg",
  "alt": "My photo",
  "display": function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName, formattedRole);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
    $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
    var formattedPic = HTMLbioPic.replace("%data%",bio.biopic);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#photo").append(formattedPic);
    $("#welcome").append(formattedWelcome);
    if (bio.skills.length > 0) {
      $("#skill").append(HTMLskillsStart);
      for (i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
      }
    }
    if (bio.gallupStrengths.length > 0) {
      $("#skill").append(HTMLgallupStart);
      for (i = 0; i < bio.gallupStrengths.length; i++) {
        var formattedGallup = HTMLgallup.replace("%data%", bio.gallupStrengths[i]);
        $("#gallup").append(formattedGallup);
      }
    }
  }
};



var work = {
  "jobs": [
    {
      "employer": "Kradex",
      "title": "CAD Drawer",
      "location": "Naddnieprzańska 32, Warsaw",
      "city": "Warsaw",
      "dates": "07-09.2016",
      "description": "I was responsible for: creating and updating technical documentation of details, designing new details for production and programming numerically-controlled machines.",
      "url": "https://www.kradex.com.pl/"
    },
    {
      "employer": "Festo",
      "title": "Assistant at Production Process Management Department",
      "location": "Mszczonowska 7, Raszyn",
      "city": "Raszyn",
      "dates": "03.2015-06.2016",
      "description": "I was resposible for distribution of materials, parts need for completing projects at Production Process Management Department.",
      "url": "https://www.festo.com/cms/pl_pl/index.htm"
    }
  ],
  "display": function() {
    work.jobs.forEach(function(job) {
      $("#workExperience").append(HTMLworkStart);
      var formattedUrl = HTMLworkUrl.replace("#", job.url);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
      var formattedEmployerTitle = formattedUrl + formattedEmployer + formattedTitle;
      var formattedDates = HTMLworkDates.replace("%data%", job.dates);
      var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
      var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.city);
      $(".work-entry:last").append(formattedEmployerTitle, formattedDates, formattedWorkLocation, formattedWorkDescription);
    });
  }
};

var projects = {
  "projects": [
    {
      "title": "Pixel Art Maker",
      "dates": 2017,
      "description": "Make your own icon. Pick the size of grid and then you can color every cell of it.",
      "images": ["images/projects/pixel-art-maker/pixelartmaker1.png", "images/projects/pixel-art-maker/pixelartmaker2.png", "images/projects/pixel-art-maker/pixelartmaker3.png", "images/projects/pixel-art-maker/pixelartmaker4.png"],
      "alt": ["Pixel Art Maker"],
      "url": "https://github.com/KDorian/Pixel-Art-Maker"
    },
    {
      "title": "To Do List",
      "dates": 2017,
      "description": "Simple To Do List in JavaScript. It works after refreshing page.",
      "images": ["images/projects/to-do-list/todolist1.png", "images/projects/to-do-list/todolist2.png", "images/projects/to-do-list/todolist3.png"],
      "alt": ["To Do List"],
      "url": "https://github.com/KDorian/ToDo-List"
    },
    {
      "title": "My portfolio",
      "dates": 2017,
      "description": "My portfolio",
      "images": ["images/projects/portfolio/portfolio1.jpg"],
      "alt": ["My portfolio"],
      "url": "https://kdorian.github.io/My-portfolio"
    },
    {
      "title": "Weather Forecast App",
      "dates": 2017,
      "description": "Weather forecast app from OpenWeatherMap API using Volley Library",
      "images": ["images/projects/weather-app/weatherapp1.png", "images/projects/weather-app/weatherapp2.png"],
      "alt": ["Weather Forecast App"],
      "url": "https://github.com/KDorian/Weather-Forecast-App"
    },
    {
      "title": "Got App",
      "dates": 2016,
      "description": "Game of Thrones mini encyclopedia application for Android - little wikipedia of popular TV series.",
      "images": ["images/projects/got-app/gotapp1.png", "images/projects/got-app/gotapp2.png", "images/projects/got-app/gotapp3.png"],
      "alt": ["Main screen of Got App", "Screen of Great Houses", "Screen with decription of House Greyjoy"],
      "url": "https://github.com/KDorian/GoT-app"
    },
    {
      "title": "Prof Goethe",
      "dates": 2016,
      "description": "German cheat sheet application for Android - display of german grammar and commucation phrases.",
      "images": ["images/projects/prof-goethe/profgoethe1.png", "images/projects/prof-goethe/profgoethe3.png", "images/projects/prof-goethe/profgoethe4.png"],
      "alt": ["Main screen of Prof Goethe application", "Screen of sidebar with helps with the choosing of unit", "Screen that is showing unit 4th"],
      "url": "https://github.com/KDorian/Prof-Goethe"
    },
    {
      "title": "Blackjack",
      "dates": 2017,
      "description": "Blackjack game in Java (used BreezySwing library).",
      "images": ["images/projects/blackjack/blackjack1.png", "images/projects/blackjack/blackjack2.png", "images/projects/blackjack/blackjack3.png", "images/projects/blackjack/blackjack4.png", "images/projects/blackjack/blackjack5.png"],
      "alt": ["Starting sceen of Tic TAc Toe", "Screen presenting the game", "Screen showing the winning screen"],
      "url": "https://github.com/KDorian/Tic-tac-toe"
    },
    {
      "title": "Tic Tac Toe",
      "dates": 2017,
      "description": "Popular game tic tac toe, which recognises winner.",
      "images": ["images/projects/tic-tac-toe/tictactoe1.png", "images/projects/tic-tac-toe/tictactoe2.png", "images/projects/tic-tac-toe/tictactoe3.png"],
      "alt": ["Starting sceen of Tic TAc Toe", "Screen presenting the game", "Screen showing the winning screen"],
      "url": "https://github.com/KDorian/Tic-tac-toe"
    },
    {
      "title": "Drukomatic",
      "dates": "2014-2015",
      "description": "Project of 3D printer for Robomatic scientific circle. I was responsible for the programming aspect of this project.",
      "images": ["images/projects/drukomatic/drukomatic1.png", "images/projects/drukomatic/drukomatic2.png", "images/projects/drukomatic/drukomatic3.png"],
      "alt": ["Drukomatic during assembly", "Drukomatic's work area", "Drukomatic while printing"],
      "url": "-"
    },
    {
      "title": "Robomaticon",
      "dates": "2013-2015",
      "description": "All-Poland Mobile Robots Tournament",
      "images": ["images/projects/robomaticon/robomaticon2014.jpg", "images/projects/robomaticon/robomaticon2015.jpg"],
      "url": "https://www.robomaticon.pl/"
    },
  ],
  "display": function() {
    projects.projects.forEach(function(project) {
      $("#projects").append(HTMLprojectStart);
      var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
      var formattedDate = HTMLprojectDates.replace("%data%", project.dates);
      if (project.title === "Drukomatic") {
        var formattedTitleWithoutUrl = HTMLprojectTitleWithoutUrl.replace("%data%", project.title);
        $(".project-entry:last").append(formattedTitleWithoutUrl, formattedDate, formattedDescription);
      } else {
        var formattedUrl = HTMLprojectUrl.replace("#", project.url);
        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedUrlTitle = formattedUrl + formattedTitle;
        $(".project-entry:last").append(formattedUrlTitle, formattedDate, formattedDescription);
      }
      if (project.images.length > 0) {
        for (i = 0; i < project.images.length; i++) {
          var formattedImage = HTMLprojectImage.replace("%data%", project.images[i]);
          $(".project-entry:last").append(formattedImage);
        }
      }
    });
  }
};

var education = {
  "schools": [
    {
        "name": "Nicolaus Copernicus Bilingual School",
        "location": "Bema 76, Warsaw",
        "city": "Warsaw",
        "degree": "High school diploma",
        "majors": ["Mathematics", "History", "Geography"],
        "dates": "2006-2009",
        "url": "https://www.kopernik.edu.pl/",
      },
      {
        "name": "Military University of Technology",
        "location": "Kaliskiego 2, Warsaw",
        "city": "Warsaw",
        "degree": "Almost engineering degree :)",
        "majors": ["Mechatronics and Aerospace: Robotics & Automatics"],
        "dates": "2010-2014",
        "url": "http://www.wat.edu.pl/"
      }
    ],
    "courses": [
      {
        "title": "Android Study Jam: Android for beginners",
        "school": "Udacity",
        "dates": "03.2016",
        "url": "https://www.udacity.com/course/android-development-for-beginners--ud837",
      },
      {
        "title": "Java Bootcamp",
        "school": "Akademia kodu",
        "dates": "03-04.2017",
        "url": "http://www.akademiakodu.pl/",
      },
      {
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "04.2017 - currently",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
      },
      {
        "title": "Course of german language - currently B2.3 level",
        "school": "Goethe Institute in Warsaw",
        "dates": "10.2014 - currently",
        "url": "https://www.goethe.de/ins/pl/pl/sta/war.html",
      },
      {
        "title": "Google Developer Challenge Scholarship: the Android Developer track",
        "school": "Udacity",
        "dates": "11.2017 - currently",
        "url": "https://www.udacity.com/google-scholarships",
      }
    ],
    "display": function() {
      education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolUrl = HTMLschoolUrl.replace("#", school.url);
        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedSchoolUrlName = formattedSchoolUrl + formattedSchoolName;
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.city);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
        $(".education-entry:last").append(formattedSchoolUrlName, formattedSchoolDates, formattedSchoolLocation, formattedSchoolMajor, formattedSchoolDegree);
      });
      education.courses.forEach(function(course) {
        $("#courses").append(HTMLcourseStart);
        var formattedCourseUrl = HTMLcourseUrl.replace("#", course.url);
        var formattedCourseTitle = HTMLcourseTitle.replace("%data%", course.title);
        var formattedCourseUrlTitle = formattedCourseUrl + formattedCourseTitle;
        var formattedCourseDates = HTMLcourseDates.replace("%data%", course.dates);
        var formattedCourseSchool = HTMLcourseSchool.replace("%data%", course.school);
        $(".courses-entry:last").append(formattedCourseUrlTitle, formattedCourseDates, formattedCourseSchool);
      });
    }
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
