canvas=document.getElementById("myCanvas");  

ctx=canvas.getContext("2d"); 

background_image="racing.jpg";

car_1_width=120; 

car_1_height=70;

car_1_image="car1.png";

car_1_X=10; 

car_1_Y=10;



car_2_width=120; 

car_2_height=70;

car_2_image="car2.png";

car_2_X=10; 

car_2_Y=100;


function add(){

background_imgTag= new Image();

background_imgTag.onload=uploadBackground;

background_imgTag.src=background_image; 

car_1_imgTag= new Image();

car_1_imgTag.onload=uploadCar1;

car_1_imgTag.src=car_1_image; 



car_2_imgTag= new Image();

car_2_imgTag.onload=uploadCar2;

car_2_imgTag.src=car_2_image; 
}

function uploadBackground() {
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height); 



}

function uploadCar1() {
    ctx.drawImage(car_1_imgTag, car_1_X, car_1_Y, car_1_width, car_1_height); 
    

    }

    function uploadCar2() {
        ctx.drawImage(car_2_imgTag, car_2_X, car_2_Y, car_2_width, car_2_height); 
        
    
        }

    window.addEventListener("keydown",my_keydown);

    function my_keydown(e){
    
keyPressed=e.keyCode; 
console.log(keyPressed); 
if(keyPressed=='38'){
car_1_up(); 
console.log("up");
}

if(keyPressed=='40'){
    car_1_down(); 
    console.log("down");
    }

    if(keyPressed=='37'){
        car_1_left(); 
        console.log("left");
        }

        if(keyPressed=='39'){
           car_1_right(); 
            console.log("right");
            }

            if(keyPressed=='87'){
                car_2_up(); 
                console.log("keyw");
                }    

                if(keyPressed=='65'){
                    car_2_left(); 
                    console.log("keya");
                    }
                    
                    if(keypressed=='83'){
                        car_2_down(); 
                        console.log("keys");
                        } 
                        
                        if(keypressed=='68'){
                            car_2_right(); 
                            console.log("keyd");
                            }  
                            
       if (car_1_X>700)   {

    console.log("car1");

    document.getElementById("game_status").innerHTML="Car1 wins!";
       }      
       
       else if (car_2_X>700)   {

        console.log("car2");
    
        document.getElementById("game_status").innerHTML="Car2 wins!";
           }   
           
        
    

    }

    function car_1_up() {

    if (car_1_Y>=0) {

    car_1_Y=car_1_Y-10; 

    console.log("When up arrow is pressed,X="+car_1_X+",Y="+car_1_Y);

    uploadBackground();
uploadCar1();
uploadCar2();

    }   


    }

    function car_1_down() {

        if (car_1_Y<=500) {
    
        car_1_Y=car_1_Y+10; 
    
        console.log("When down arrow is pressed,X="+car_1_X+",Y="+car_1_Y);
    
        uploadBackground();
    uploadCar1();
    uploadCar2();
    
        }   
    
    
        }

        function car_1_left() {

            if (car_1_X>=0) {
        
            car_1_X=car_1_X-10; 
        
            console.log("When left arrow is pressed,X="+car_1_X+",Y="+car_1_Y);
        
            uploadBackground();
        uploadCar1();
        uploadCar2();
        
            }   
        
        
            }

            function car_1_right() {

                if (car_1_X<=700) {
            
                car_1_X=car_1_X+10; 
            
                console.log("When right arrow is pressed,X="+car_1_X+",Y="+car_1_Y);
            
                uploadBackground();
            uploadCar1();
            uploadCar2();
            
                }   
            
            
                }




                function car_2_up() {

                    if (car_2_Y>=0) {
                
                    car_2_Y=car_2_Y-10; 
                
                    console.log("When up arrow is pressed,X="+car_2_X+",Y="+car_2_Y);
                
                    uploadBackground();
                uploadCar1();
                uploadCar2();
                
                    }   
                
                
                    }
                
                    function car_2_down() {
                
                        if (car_2_Y<=500) {
                    
                        car_2_Y=car_2_Y+10; 
                    
                        console.log("When down arrow is pressed,X="+car_2_X+",Y="+car_2_Y);
                    
                        uploadBackground();
                    uploadCar1();
                    uploadCar2();
                    
                        }   
                    
                    
                        }
                
                        function car_2_left() {
                
                            if (car_2_X>=0) {
                        
                            car_2_X=car_2_X-10; 
                        
                            console.log("When left arrow is pressed,X="+car_2_X+",Y="+car_2_Y);
                        
                            uploadBackground();
                        uploadCar1();
                        uploadCar2();
                        
                            }   
                        
                        
                            }
                
                            function car_2_right() {
                
                                if (car_2_X<=700) {
                            
                                car_2_X=car_2_X+10; 
                            
                                console.log("When right arrow is pressed,X="+car_2_X+",Y="+car_2_Y);
                            
                                uploadBackground();
                            uploadCar1();
                            uploadCar2();
                            
                                }   
                            
                            
                                }
                

                
                
            
        
    


    

    