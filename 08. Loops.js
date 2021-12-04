<div class="sec">
<h2>While Loop</h2>
<div class="bod">
    <script>
        var i = 1;
        // Loop
        while (i <=5 ) {
            document.write('Hello World');
                document.write('<br>');
                
            i++;                    
        }
        
        //loop
        var a = 1;

        while (a <= 10) {
            document.write(a + " ");
            a++;
            
        }
            document.write('<br>');
            
        //loop 
        var b = 1;

        while (b <= 5) {
            if (b === 1) {
                document.write('Borhan');
                
            }
            if (b == 2) {
                document.write('hello dear');
                console.log('hello dear');
                
                
            }

            console.log(b);
            document.write( b+ '<br>');
            
            b++;
            
        }

        //Lop Jog kora
        var c = 1;
        var sum = 0;
        var product = '1'; 
        

        while (c <= 10) {
            sum = sum + c;                    
            product = product * c;                    
            c++                  
        }
        document.write("Result: " + sum + "<br>");
        document.write("Result: " + product);
    </script>
</div>
</div>


<div class="sec">
<h2>For Loop</h2>
<div class="bod">
    <script>
        //for loop
        for (let c = 1; c <= 5; c++) {
            
            document.write(c + "<br>"); 
        }

        for (let d = 4; d >= 1; d--) {
            
            document.write(d + "<br>"); 
        }
       
    </script>
</div>
</div>

<div class="sec">
<h2>Break & Continue</h2>
<div class="bod">
    <script>
        //Break
        //Out of code
        for( var e = 1; e <= 5 ;e++){
            
            if(e ==3){
                break;
            }
            document.write(e + "<br>");
        }
                document.write("<br>");
                document.write("<br>");
                document.write("<br>");

        //Continue
        //Moment Skip
        for(var f = 20; f <= 25; f++){
            if(f == 23){
               continue; 
            }
            document.write(f+ "<br>");
        }

        document.write("<br>");

        for(var g = 30; g <= 40; g++){
            if( g % 2 == 1){
               continue; 
            }
            document.write(g+ "<br>");
        }


        document.write("<br>");

        for(var h = 30; h <= 40; h++){
            if( h % 2 == 0){
               continue; 
            }
            document.write(h+ "<br>");
        }
    </script>
</div>
</div>

<div class="sec">
<h2>String and Array_Loop</h2>
<div class="bod">
    <script>
        //Strings
        let name = "Borhan Uddin";
        let food = ["Cake", "Chokolate", "Ice Cream"];
        let len = name.length;
        let lenf = food.length;


        for(var h = 0; h < len; h++){
            // document.write(name[h]);
            document.write(name[h]);
           
            

        }               
            document.write('<br>');
            
        for(var g = 0; g < lenf; g++){
            // document.write(name[h]);
            document.write(food[g] + "<br>");
            
            

        }               
        
    </script>
</div>
</div>

<div class="sec">
<h2>Loop_For-IN/For-OF</h2>
<div class="bod">
    <script>
        let names = 'Iam a learning Javascript'; 
        let foods = ["Cake", "Chokolate", "Ice-cream"];
        let  person = {
            name: "Borhan Uddin",
            profession: "WebDEsigner",
            team: "codestrickz",
            age: 25,
        } 
        
        //in for index
        for( var x in names){
            document.write(x+ " ");
                    
        }
            document.write('<br>');

        for( var x in names){
        document.write(`Index: ${x} Iteam: ${names[x]} <br>`);      
        }

        // of for iteam/value
        for( var x of names){
            document.write(x+ " ");         
        }

            document.write('<br>');
        
        //
        for ( var y in foods){
            document.write(`index: ${y} iteam: ${foods[y]} <br>`);
        }


        //
        for ( var z of foods){
            document.write(z + " ");
        }

            document.write('<br>');

        // 
        for ( var b in person){
            //document.write(b + "<br>");
            document.write(`Property: ${b} 
            value: ${person[b]}<br>`);
        }


        for ( var z of person){
            document.write(z + " ");
        }
    </script>
</div>
</div>
