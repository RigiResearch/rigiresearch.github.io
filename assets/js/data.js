$(document).ready(function() {

var html_articles = "";
$.each(articles, function (i, rart) {
    _rA(rart.img, rart.title, rart.desc, rart.more, function(result){
      html_articles += result;
    });
    $('#research_summary').html(html_articles);
 });

 var html_rigiPeople = "";
 $.each(people, function (i, part) {
     _pA(part.img, part.name, part.desc, part.website, function(result){
       html_rigiPeople += result;
     });
     $('#people_summary').html(html_rigiPeople);
  });

});

function _rA(img, title, desc, more, callback){
  if(!desc) desc="";
  var html_article = "";
    html_article += "<article>";
    html_article += "<a href='#' class='image'><img src='"+img+"' alt='' /></a>";
    html_article += "<h3>"+title+"</h3>";
    html_article += "<p>"+desc+"</p>";
    html_article += "<ul class='actions'>";
    html_article += "<li><a href='"+more+"' class='button'>Project website</a></li>";
    html_article += "</ul>";
    html_article += "</article>";

  callback(html_article);
}

function _pA(img, name, desc, website, callback){
  var html_people = "<article>";
      html_people += "<a href='"+website+"' ><img class='img-face' src='"+img+"' alt='' /></a>";
      html_people += "<div class='content'>";
      html_people += "<h3>"+name+"</h3>";
      html_people += "<p>"+desc+"</p>";
      html_people += "</div>";
      html_people += "</article>";
  callback(html_people);
}

var articles = [
{  img :  "http://rigiresearch.com/images/wearables.jpg",
  title : "Smart Cyber-Physical-Human Systems",
  desc :  "Users have shown to be active elements with their daily applications, the boundaries that separate users with their devices are rapidly fading as the components become smarter and more knowledgeable about the users. It is pertinent that software engineers look at the role of users as first class elements on the systems that are being designed, going further when it comes to personalization, tailoring applications to fit users' dynamic lives. We envision that users will be sharing their technological presence through virtual personalities, and situations will be the ones to determine the boundaries of the context of each of them. We envision, CPS to be improved with situation-aware self-adaptive applications to provide users truly personalised functionalities and features.",
  more :  "http://rigiresearch.com/research/pit/"
},{
  img : "http://rigiresearch.com/images/face.jpg",
  title : "CAVA: Context-ware Real-time Video Analytics",
  desc :  "Cameras are found everywhere in the Internet of Things (IoT). We propose a scalable platform using SAVI for the continuous collection of context-aware processed video from mobile devices. Users can perform efficient context-based searches on the total collection of labeled videos. In this project we discuss the challenges and benefit.s for video upload, video labeling and context-based search on the SAVI network",
  more :  "http://rigiresearch.com/research/crva/"
},{

  img: "http://rigiresearch.com/images/plane.jpg",
    title: "Smart Autoflight Control System",
    desc : "The visioned concept particularly aims at integrating Air Traffic Control (ATC) and the operational environment into the automatic decision making process. Suitable Artificial Intelligence (AI) methods and algorithms shall be studied and evaluated on a small commercially available Unmanned Air Vehicle (UAV). The Unmanned Aircraft System (UAS) will be extended to support simulated interactions with ATC and mission control. The resulting system shall be able to perform missions on the basis of abstract goal descriptions that may change during the flight and require revised online flight planning and an adapted aircraft systems configuration in a hard real-time environment constrained by bounded rationality and bounded reactivity.",
    more: "http://rigiresearch.com/research/iris-smart-autoflight-control-system/"
  },{
  img: "http://rigiresearch.com/images/salad.jpg",
    title: "CAPRecipes: Context-Aware Personalized Recipe Recommender",
    desc : "CAPRecipes is our context-aware recommender system, which provides personalized meal recipes to users by leveraging their personal context (i.e., preferences, and health goals) and the information in their instrumented refrigerator and pantry (i.e., available food in the users’ homee CAPRecipes operates around the following three concerns of users: (1) preparing a tasty and healthy meal; (2) minimizing food wastage at home; and (3) consideration of their taste preferences, allergies, and other restrictions when selecting a proper recipe. CAPRecipes automatically searches personal recipes while adapting to dynamic changes in their context.",
    more: "http://rigiresearch.com/research/paltask"
  },{

  img: "http://rigiresearch.com/images/bots.jpg",
    title: "Foodie Cognitive Bot",
    desc : "Foodie is a smart conversational agent that helps users in the kitchen by interacting with them about their dietary preferences, needs, constraints and goals. Foodie accomplishes this by making use of IBM Watson’s Conversation Platform API10 to recognise users’ intent, and understand events related to the users and their context.  To support the knowledge base for conversations, Foodie uses various services including Spoonacular, FoodEssentials, and Watson services through their REST APIs. Users ideally interact with Foodie via a hybrid interface (i.e., voice and text) and can be integrated with services, such as Slack, Facebook Messenger, Google Assistant or Siri.",
    more: "#"
  },{
    img: "http://rigiresearch.com/images/computer.jpg",
    title: "DevOps",
    desc : "",
    more: "#"
  },
  {
    title : "Paltask",
    more : "http://rigiresearch.com/research/paltask/"
  },
  {
    title : "Lively Web",
    more : "http://rigiresearch.com/research/livelyweb/"
  },
  {
    title: "SmarterContext",
    more : "http://rigiresearch.com/research/ibm-cas/"
  },
  {
    title:  "Context Face Recognition",
    more: "http://rigiresearch.com/research/cfr/"
  },
  {
    title : "Personalized Web-Tasking",
    more : "http://rigiresearch.com/research/pwt/"
  },
  {
    title: "SAVI Quacopters",
    more : "http://rigiresearch.com/research/savi-quadcopters"
  },
  {
    title : "Yakkit",
    more : "http://rigiresearch.com/research/yakkit-location-based-messaging"
  }

];

var people = [
    {
        website: "http://webhome.cs.uvic.ca/~hausi/",
        img : "http://rigiresearch.com/images/hausi.jpg",
        name: "Hausi A. Müller",
        desc : "Professor, Associate Dean Research PhD PEng FCAE <br>Faculty of Engineering <br>Department of Computer Science <br>University of Victoria"
      },{
        website: "lorena-castaneda.html",
        img : "http://rigiresearch.com/images/lc.jpg",
        name : "Lorena Castañeda PhD",
        desc : " <strong>Postdoctoral Fellow</strong><ul><li>Cyber-Physical-Human Systems</li><li>Models at Runtime</li><li>Self-AdaptiveSystems</li> </ul>     "
      },{
        website : "miguel-jimenez.html",
        img: "http://rigiresearch.com/images/mj.png",
        name: "Miguel Jimenez",
        desc : "<strong>PhD Student</strong></p>         <ul>         <li>DevOps</li>        <li>Models at Runtime</li>        </ul>"

      },{
        website : "nina-taherimakhsousi.html",
        img : "http://rigiresearch.com/images/nt.jpg",
        name : "Nina Taherimakhsousi",
        desc : " <strong>PhD Candidate</strong></p> <ul> <li>Context-Based Face Recognition</li> <li>Self-Adaptive Systems</li> </ul> "

      },{
        website : "stephan-heinemann.html",
        img : "http://rigiresearch.com/images/sh.jpg",
        name : "Stephan Heinemann",
        desc : " <strong>PhD Candidate</strong></p> <ul> <li>Self-Adaptive Systems</li> </ul>         </div> "
      },{
        website : "priya-angara.html",
        img : "http://rigiresearch.com/images/pa.jpg",
        name : "Prashanti Priya Angara",
        desc : " <strong>MSc Student</strong></p> <ul> <li>Cognitive Computing</li> <li>Cyber-Physical Systems</li> </ul> "

      },{
        website : "harshit-jain.html",
        img : "http://rigiresearch.com/images/hj.jpg",
        name : "Harshit Jain",
        desc : " <strong>MSc Student</strong></p> <ul> <li>Smart Health Maven</li> </ul>         </div> "
},{
        website : "roshni-jain.html",
        img : "http://rigiresearch.com/images/rj.jpg",
        name : "Roshni Jain",
        desc : " <strong>MSc Student</strong></p> <ul> <li>Smart Health Maven</li> </ul>         </div> "

    },{
            website : "alexandra-deane.html",
            img : "http://rigiresearch.com/images/ad.jpg",
            name : "Alexandra Deane",
            desc : " <strong>Undergraduate Student</strong><p>NSERC Undergraduate Research Award recipient</p> <ul> <li>Machine Learning</li> </ul>         </div> "

        }

]
