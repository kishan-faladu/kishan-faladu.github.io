const getHomeContent = () => {
    return `
    <div class="home-container">
        <div class="home-left-image">
            <img src="https://cdn.yourpng.com/uploads/preview/white-moon-transparent-hd-png-images-download-47-11616579121urffvcc2ya.png" alt="animatedmoon" />
        </div>
        <div class="home">
            <div class="home-title">Heya! It is <span class="home-head">Kishan</span> here~</div>
            <br><br>
            <div class="home-title">
                And I am a/an,
                <div class="home-text-point">Otaku</div>
                <div class="home-text-point">Gamer</div>
                <div class="home-text-point">Problem Solver</div>
                <div class="home-text-point">Quick Learner</div>
            </div>
        </div>
    </div>
    `;
}

const getAboutContent = () => {
    return `
    <div class="about">
        <h1>About Me</h1>
        <img class="profile-image" src="https://lh3.googleusercontent.com/pw/AM-JKLXljP_w4mwHZBtat3c8CYsM1x0zcPRpcBvsMbyOCp5QyZnWsECdPvfKmsVyX3nKrLd2iHH5a0T_b42J25JG33Q1ijHSsUdKVSTcwEx6hABpQjPPmZIFU4nH2ZiuYk6DO1epWXbj-W39984rg5wRqQK_=w677-h903-no?authuser=0" alt="Profile Image" height="250px" width="200px" />
        <div class="details">
            <div class="para">
                Ever since I was a kid, I was always interested in computer. My parents got me one when I was in 3'<sup>rd</sup> standard which soaked up all my free hours
                thereafter . My interest in the field kept growing (and so did my gaming addiction). I took computer science as my elective in highschool where I learnt C and CPP 
                programming for the first time. All this made me want to pursue a career in Computer Science and I am still working hard for it.

            </div>
            
            <div class="para">
                I finished my BTech in CSE from
                <a href="https://nirmauni.ac.in/" target="_blank">
                    <span class="link-label">Nirma University, Ahmedabad</span>
                </a>
                in 2020, which formed a strong base of the basic concepts of computer science and some advanced topics too which I took as electives. But I still wanted to 
                gain deeper knowledge and started preparing for MTech which led me to 
                <a href="https://www.iiit.ac.in/" target="_blank">
                    <span class="link-label">IIIT-Hyderabad</span>
                </a>. I am currently a first-year MTech CSIS student.

            </div>

            <div class="para">
                <p>My hobbies are watching anime, playing video games(any console except for XBox), playing/watching football and reading fiction novels. </p>
                <p>I am a major otaku and have watched almost all major anime titles and many underrated titles too. Favourite anime is Sword Art Online, just the concept of VR MMORPG 
                of such calibur makes me excited.</p>
                <p>Faourite game is Dota 2. Have 3k+ hours on the game and the playtime will keep increasing.</p>
                <p>Favourite football player is Lionel Messi(not a Ronaldo hater though). And Favourite novel is Neuromancer by William Gibson, highly recommend it if you are into sci-fi fiction.
            </div>
        </div>
    </div>
    `;
}

const skillPic = {
    cpp: "https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png",
    c: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png",
    html: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
    css: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    python: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
};

const skills = [
    {name: 'C++', pic: skillPic.cpp, star:4 },
    {name: 'C', pic: skillPic.c, star:4 },
    {name: 'HTML', pic: skillPic.html, star:3 },
    {name: 'CSS', pic: skillPic.css, star:3 },
    {name: 'PYTHON', pic: skillPic.python, star:2.5 }   
];


const getSkillsContent = () => {
    let cnt = ``;
    for(let s of skills){
        cnt += `
        <div class="card">
            <div class="card-container">
                <div class="card-heading">
                    <img class="card-image" src="${s.pic}" alt="${s.name} Logo">
                    ${s.name}
                </div>
                <div class="card-footer">
                    <div class="stars">
                        ${s.star}/5
                    </div>
                </div>
            </div>
        </div>
        `;
    }

    return `
        <div class="skills">
            <div class="courses">
                <h1>Education : </h1>
                <table class = "edu">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name of School/University</th>
                            <th>Board/Course</th>
                            <th>Year of Passing</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th rowspan="2">School</th>
                            <td rowspan="2"><a href="https://www.bhavansbaroda.org/" target="_blank"><span class="link-label">Bhartiya Vidya Bhavans, Vadodara</span></a></td>
                            <td> 10'th, CBSE</td>
                            <td> 2014 </td>
                        </tr>
                        <tr>
                            <td>12'th Science, CBSE</td>
                            <td>2016</td>
                        </tr>
                        <tr>
                            <th rowspan="2">University</th>
                            <td><a href="https://nirmauni.ac.in/" target="_blank"><span class="link-label">Nirma University, Ahmedabad</span></a></td>
                            <td>B.Tech CSE</td>
                            <td>2020</td>    
                        </tr>
                        <tr>
                            <td><a href="https://www.iiit.ac.in/" target="_blank"><span class="link-label">IIIT, Hyderabad</span></a></td>
                            <td>M.Tech CSIS</td>
                            <td>2023</td> 
                        </tr>
                    </tbody>
                </table>
            </div>
            <br>

            <h1>Languages I can work on : </h1>
                <div class="card-group">
                    ${cnt}
                </div>
            </h1>
        </div>
    `;
}

const getContactContent = () => {
    return `
    <div class="contact">
        <div class="block">
            <div class="title">Leave a Message!</div>
            <form class="form" name="contactForm">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="Enter your name" />
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email" placeholder="Enter your email" />
                </div>
                <div class="form-group">
                    <label for="msg">Message</label>
                    <textarea type="text" name="msg" id="msg" placeholder="Enter message"></textarea>
                </div>
                <div class="btn-group">
                    <button onclick="submitForm()">Send</button>
                </div>
            </form>
        </div>
        <div class="block">
            <div class="title">Some details about me</div>
            <div class="list">
                <div class="list-item">
                    <i class="fa fa-user-circle-o"></i>
                    <div class="data">
                        <label>Name</label>
                        <div>Kishan Faladu</div>
                    </div>
                </div>
                <div class="list-item">
                    <i class="fa fa-map-marker"></i>
                    <div class="data">
                        <label>Location</label>
                        <div>Vadodara, Gujarat, India</div>
                    </div>
                </div>
                <div class="list-item">
                    <i class="fa fa-envelope"></i>
                    <div class="data">
                        <label>Email</label>
                        <div>kishan.faldu27@gmail.com</div>
                    </div>
                </div>
                <div class="list-item">
                    <i class="fa fa-phone"></i>
                    <div class="data">
                        <label>Phone</label>
                        <div>+91-9909938265</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}

const menuItems = [
    { name: 'HOME', id: 0, callback: getHomeContent },
    { name: 'ABOUT', id: 1, callback: getAboutContent },
    { name: 'SKILLS', id: 2, callback: getSkillsContent },
    { name: 'CONTACT', id: 3, callback: getContactContent }
];

var view = document.getElementById("main");
var nav = document.querySelector(".navbar .nav-item-group");
var dateElem = document.querySelector(".time-container #time");

function onLoad(){
    for(let item of menuItems){
        let node = document.createElement("div");
        node.className = "nav-item";
        node.id = "menu-"+item.id;
        node.addEventListener("click", function (){
            navigateTo(item.id)
        });
        node.innerHTML = item.name;
        nav.appendChild(node);
    }

    navigateTo(0);
    getTime();

}

const getTime = () => {
    setInterval(() => {
        let date = new Date().toString().split(" ");
        let str = "";
        for(let i=0; i<date.length; i++)
            if(i!=5)
                str += date[i] + " ";
        dateElem.innerHTML = str;
    }, 950);
}

const navigateTo = (optn) => {
    let menuList = document.getElementsByClassName("nav-item");
    for(let m of menuList){
        m.className = "nav-item";
    }
    let elem = document.querySelector(".nav-item#menu-"+optn);
    elem.className += " active";

    view.innerHTML = menuItems[optn].callback.call(); //getHomeContent.call()

    document.title = menuItems[optn].name + " | Kishan Faladu";

    let hem = document.getElementById("hamburger");
    if(hem.className!="fa fa-bars"){
        hamburgerHandler();
    }

    let body = document.getElementsByTagName("body")[0];
    if(optn==0){
        body.className += " home-active";
    }
    else{
        body.className = "";
    }
}

const submitForm = () => {
    let name = document.forms["contactForm"]["name"].value;
    let email = document.forms["contactForm"]["email"].value;
    let msg = document.forms["contactForm"]["msg"].value;

    if(name!="" && email != "" && msg != ""){
        alert('I will get back to you asap!');
        document.forms["contactForm"].reset();
    }
    else{
        alert("Fill all necessary details!");
    }

    event.preventDefault();
    
}

const hamburgerHandler = () => {
    let hem = document.getElementById("hamburger");
    if(hem.className=="fa fa-bars"){
        hem.className = "fa fa-times";
        let menuList = document.getElementsByClassName("nav-item");
        for(let m of menuList){
            m.style.display = "block";
        }
    }
    else{
        hem.className = "fa fa-bars";
        let menuList = document.getElementsByClassName("nav-item");
        for(let m of menuList){
            m.style.display = "none";
        }
    }
}
