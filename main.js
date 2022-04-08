quick_draw_data_set=["aircraft carrier","airplane","alarm clock","ambulance","angel","animal migration","ant","anvil","apple","arm","asparagus","axe","backpack","banana",
"bandage","barn","baseball","baseball bat","basket","basketball","bat","bathtub","beach","bear","beard","bed","bee","belt","bench","bicycle","binoculars","bird",
"birthday cake","blackberry","blueberry","book","boomerang","bottlecap","bowtie","bracelet","brain","bread","bridge","broccoli","broom","bucket","bulldozer","bus","bush",
"butterfly","cactus","cake","calculator","calendar","camel","camera","camouflage","campfire","candle","cannon","canoe","car","carrot","castle","cat","ceiling fan","cello",
"cell phone","chair","chandelier","church","circle","clarinet","clock","cloud","coffee cup","compass","computer","cookie","cooler","couch","cow","crab","crayon","crocodile",
"crown","cruise ship","cup","diamond","dishwasher","diving board","dog","dolphin","donut","door","dragon","dresser","drill","drums","duck","dumbbell","ear", "elbow","elephant",
"envelope","eraser","eye","eyeglasses","face","fan","feather","fence","finger","fire hydrant","fireplace","firetruck","fish","flamingo","flashlight","flip flops","floor lamp",
"flower","flying saucer","foot","fork","frog","frying pan","garden","garden hose","giraffe","goatee","golf club","grapes","grass","guitar","hamburger","hammer","hand","harp",
"hat","headphones","hedgehog","helicopter","helmet","hexagon","hockey puck","hockey stick","horse","hospital","hot air balloon","hot dog","hot tub","hourglass","house",
"house plant","hurricane","ice cream","jacket","jail","kangaroo","key","keyboard","knee","knife","ladder","lantern","laptop","leaf","leg","light bulb","lighter","lighthouse",
"lightning","line","lion","lipstick","lobster","lollipop","mailbox","map","marker","matches","megaphone","mermaid","microphone","microwave","monkey","moon","mosquito",
"motorbike","mountain","mouse","moustache","mouth","mug","mushroom","nail","necklace","nose","ocean","octagon","octopus","onion","oven","owl","paintbrush","paint can",
"palm tree","panda","pants","paper clip","parachute","parrot","passport","peanut","pear","peas","pencil","penguin","piano","pickup truck","picture frame","pig","pillow",
"pineapple","pizza","pliers","police car","pond","pool","popsicle","postcard","potato","power outlet","purse","rabbit","raccoon","radio","rain","rainbow","rake",
"remote control","rhinoceros","rifle","river","roller coaster","rollerskates","sailboat","sandwich","saw","saxophone","school bus","scissors","scorpion","screwdriver",
"sea turtle","see saw","shark","sheep","shoe","shorts","shovel","sink","skateboard","skull","skyscraper","sleeping bag","smiley face","snail","snake","snorkel","snowflake",
"snowman","soccer ball","sock","speedboat","spider","spoon","spreadsheet","square","squiggle","squirrel","stairs","star","steak","stereo","stethoscope","stitches","stop sign",
"stove","strawberry","streetlight","string bean","submarine","suitcase","sun","swan","sweater","swingset","sword","syringe","table","teapot","teddy-bear","telephone",
"television","tennis racquet","tent","The Eiffel Tower","The Great Wall of China","The Mona Lisa","tiger","toaster","toe","toilet","tooth","toothbrush","toothpaste","tornado",
"tractor","traffic light","train","tree","triangle","trombone","truck","trumpet","tshirt","umbrella","underwear","van","vase","violin","washing machine","watermelon",
"waterslide","whale","wheel","windmill","wine bottle","wine glass","wristwatch","yoga","zebra","zigzag"]


random_number= Math.floor((Math.random(quick_draw_data_set)*quick_draw_data_set.length)+1);
console.log(random_number);
elementOfArray=quick_draw_data_set[random_number];
document.getElementById("p3").innerHTML="Sketch to be drawn is "+elementOfArray;
sketchToBeChecked=elementOfArray;

timer_counter=0;
timer_check="";
drawn_sketch="";
answer_holder="";
score=0;
color=0;
function preload(){

    classifier=ml5.imageClassifier('DoodleNet');

}

function setup(){

    canvas=createCanvas(500,500);
    canvas.position(715,375);
    background("white");
    canvas.mouseReleased(classifycanvas);
    synth = window.speechSynthesis;
}
function colorRed(){

    color=255,0,0;
    console.log(color);
}

function colorBlue(){

    color=0,0,255;
    console.log(color);
}

function colorGreen(){

    color=0,255,0;
    console.log(color);
}

function updateCanvas(){

    background("white");
    random_number=Math.floor((Math.random(quick_draw_data_set)*array_1.length)+1);
    console.log(random_number);
    elementOfArray=quick_draw_data_set[random_number];
    document.getElementById("p3").innerHTML="Sketch to be drawn is "+elementOfArray;
    sketchToBeChecked=elementOfArray;  
 
}

function preload(){

    classifier=ml5.imageClassifier('DoodleNet');

}

function draw(){
    strokeWeight(10);
    stroke(0);
    if(mouseIsPressed){

        line(pmouseX,pmouseY,mouseX,mouseY);

    }
    check_sketch();
    if(drawn_sketch==sketchToBeChecked){

        answer_holder="set";
        score=score+1;
        document.getElementById("pScoreValue").innerHTML=score;
    
    }    

}

function check_sketch(){

    if(drawn_sketch!=sketchToBeChecked){
        
        timer_counter++

    }
    document.getElementById("pTimerValue").innerHTML=timer_counter;
    console.log(timer_counter);
    if(timer_counter>399){

        timer_counter=0;
        timer_check="completed";

    }
    if(timer_check=="completed" || answer_holder=="set"){

        timer_check="";
        answer_holder="";
        document.getElementById("pTimerValue").innerHTML=timer_counter;
        updateCanvas();
       
    }

}

function classifycanvas(){

    classifier.classify(canvas,gotResults);

}

function gotResults(results){

    if(error){

        console.error(error);

    }
    if(results){

        console.log(results);
        drawn_sketch=results[0].label;
        document.getElementById("p1").innerHTML="Your sketch: "+drawn_sketch;
        document.getElementById("p2").innerHTML="Confidence: "+Math.round(results[0].confidence*100)+"%";
    }

}


