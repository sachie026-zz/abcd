//wp = white box position -- user condition
		//document.cookie="best_score=0";
		// bs = getCookie("best_score");
		var started = 0;
		var last = 3;
		var ec = 0, tc = 0, mc = 1; 			//ec = easy clicked and tc = tough clicked
		var points = 0;
		var wp = 3;
		var rnd_cnt = 0;
		rand_check = new Array(4);		// to get four different random numbers
		
		rand_check[0] = 0;
		rand_check[1] = 0;
		rand_check[2] = 0;
		rand_check[3] = 0;


		rand_col = new Array(4);
		rand_col[0] = "#d0d0d0";
		rand_col[1] = "#b0b0b0";
		rand_col[2] = "#FCE5B0";
		rand_col[3] = "#F8D191";
		
		col_alpha = new Array(4);			//to store the letters
		
		col_alpha[0] = "a";
		col_alpha[1] = "b";
		col_alpha[2] = "c";
		col_alpha[3] = "d";
		col = new Array(40);
		col_val = new Array(40);		// to check if all are same
		var frame = 0;
		var timeout_state = null, j  = 1;
		var timeout_state1 = null;
		var timeout_state2 = null;
		var key_set = 0;
		var pause_down = 0;
		var easy = 0 , tough  = 0, time_slap = 15000;
		var xDown = null;                                                        
		var yDown = null;                                                        

		function get_random( c,r)		// c = cnt, r = random
		{
			rnd_cnt++;
			if(rand_check[r] == 0)
			{
				rand_check[r] = 1;
				return r;
			}
			else
			{
				if(r == 0)
				{
					var left = 3;
					var right = (r + 1)%4;	
				}
				else
				{
					var left = (r - 1)%4;
					var right = (r + 1)%4;
				}
				if(rand_check[left] == 0)
				{
					rand_check[left] = 1;
					return left;
				}
				else if(rand_check[right] == 0)
				{
					rand_check[right] = 1;
					return right;
				}
				else
				{
					for(var k = 0; k < 4; k++)
					{
						if(rand_check[k] == 0)
						{
							rand_check[k] = 1;
							return k;
						}			
					}	
				}
			}
			
		}
		function best_update()
		{
			var current_score = document.getElementById("kj").innerHTML;
			var last_best_score = document.getElementById("best").innerHTML;
			//alert(last_best_score);
			if(check_bs <= points)
			{
				document.getElementById("best").innerHTML = points;
				localStorage.setItem("best_score", points);
			}
			timeout_state2 = setTimeout("best_update()", 20);
		}
		function set()
		{
			document.getElementById("kj").innerHTML = 0;
			document.getElementById("best").innerHTML = check_bs;
			document.getElementById("ml").style.background = "#85aaff";
			document.addEventListener('touchstart', handleTouchStart, false);        
			document.addEventListener('touchmove', handleTouchMove, false);

		}
		function easy_()
		{
			if(key_set == 0)
			{
				ec =1;
				tc = 0;
				mc = 0;
			}
			else
			{
				ec= 1;
			}
			 time_slap = 22000;
			 document.getElementById("el").style.background = "#85aaff";
			 document.getElementById("tl").style.background = "#606060";
			 document.getElementById("ml").style.background = "#606060";
		}
		function medium_()
		{
			if(key_set == 0)
			{
				mc =1;
				tc = 0;
				ec = 0;
			}
			else
			{
				mc= 1;
			}
			 time_slap = 14000;
			 document.getElementById("ml").style.background = "#85aaff";
			 document.getElementById("tl").style.background = "#606060";
			 document.getElementById("el").style.background = "#606060";
		}
		function tough_()
		{
			 if(key_set == 0)
			{
				tc =1;
				ec = 0;
				mc = 0;
			}
			else
			{
				//ec= 1;
				tc= 1;
			}	
			 time_slap = 5000;
			  document.getElementById("tl").style.background = "#85aaff";
			  document.getElementById("el").style.background = "#606060";
			  document.getElementById("ml").style.background = "#606060";
		}
		
		function best_update()
		{
			var current_score = document.getElementById("kj").innerHTML;
			var last_best_score = document.getElementById("best").innerHTML;
			//alert(last_best_score);
			if(check_bs <= points)
			{
				document.getElementById("best").innerHTML = points;
				localStorage.setItem("best_score", points);
			}
			timeout_state2 = setTimeout("best_update()", 20);
		}
		function init()
		{
			if(started == 0)
			{
				key_set = 1;
			
				document.getElementById("0").style.background = rand_col[0];
				document.getElementById("0").innerHTML = "a";
				col[0] = rand_col[0];
				col_val[0] = "a";
				document.getElementById("1").style.background = rand_col[2];
				document.getElementById("1").innerHTML = "c";
				col[1] = rand_col[2];
				col_val[1] = "c";
				document.getElementById("2").style.background = rand_col[3];
				document.getElementById("2").innerHTML = "d";
				col[2] = rand_col[3];
				col_val[2] = "d";
				document.getElementById("3").style.background = "white";
				document.getElementById("3").innerHTML = "&nbsp;";
				col[3] = "white";
				col_val[3] = "&nbsp;";
			
				timeout_state1 = setTimeout("vanish()", 100);
				timeout_state = setTimeout("animator()", 2000);
				timeout_state2 = setTimeout("best_update()", 200);
				started = 1;
			}	
		}
		
		function vanish()
		{
			var k = j - 1;
			while(k >= 0)
			{
				var ones = 0, zeros = 0;
				var value  = 0;
				var abcd = 0;
				for(i = 0 ; i < 4; i++)
			 	{
			 		var num = k*4 + i;
			 		//add = add + col_val[num];
			 		//value = value + col_val[num] * Math.pow(2, 3 - i); 
			 		if(col_val[num] == col_alpha[i])
			 		{
			 			abcd++;
			 		}
				}
				/*if(value == 10)
				{
					alert("binary ten");
				}*/
				if(abcd == 4)
				{
					points = points + 4;
					document.getElementById("kj").innerHTML = points;
					//alert(k); 
					clearTimeout(timeout_state);
					pause_down = 1; 
					timeout_state = setTimeout("animator()", 4000);
					//vanish
					// vanish k'th row
					var st = k.toString().concat(" ").concat(j.toString());
					//alert(st); 
					//document.getElementById("kj").innerHTML = st;
					var till = k; 
					while(till < (j-1) )
				 	{
					 	for(i = 0 ; i < 4; i++)
					 	{
					 		//var k = j;
					 		var num = till*4 + i;
					 		var elem = num.toString();
					 		col[num] = col[ ((till+1)*4) + i];
					 		col_val[num] = col_val[ ((till+1)*4) + i];
					 		document.getElementById(elem).style.background = col[ ((till+1)*4) + i ];
					 		if(col_val[ ((till+1)*4) + i ] == 2)
					 		{
					 			document.getElementById(elem).innerHTML = "&nbsp;";
							}
							else
							{
								document.getElementById(elem).innerHTML = col_val[ ((till+1)*4) + i ];
							}
							
						}
						till++;
					}
					// to assign new colors for last row - at the end 
					for(i = 0 ; i < 4; i++)
				 	{
				 		var num =  (j-1)*4 + i;
				 		var rnd = Math.floor((Math.random()*2)+0); 
				 		var elem = num.toString();
				 		col[num] = "";
				 		col_val[num] =  "" ;
				 		document.getElementById(elem).style.background = "#f0f0f0";
				 		document.getElementById(elem).innerHTML = "";
					}
					last = (j- 2) * 4 + 3;
					j--; 
					 if(wp > (k*4 + 0) && wp > (k*4 + 3))
					 {
					 	var tp  = wp - 4;
						wp = tp;	
					 }
					
				}
				k--;
			}
			
			timeout_state1 = setTimeout("vanish()", 10);
		}
		
		
		//touch


function handleTouchStart(evt) {                                         
    xDown = evt.touches[0].clientX;                                      
    yDown = evt.touches[0].clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */ 
            //alert("left");
            if((wp % 4) != 0 && key_set == 1) 
            {
		var num = wp - 1;
		var num1 = wp;
		var tc = col[wp - 1];
		col[wp - 1] = col[wp];
		col[wp ] = tc;

		var tcv = col_val[wp - 1];
		col_val[wp - 1] = col_val[wp];
		col_val[wp ] = tcv;

		wp = wp - 1;


		var elem = num.toString();
		var elem1 = num1.toString();
		document.getElementById(elem).style.background = col[ num ];
		document.getElementById(elem1).style.background = col[ num1 ];
		document.getElementById(elem).innerHTML = "&nbsp;";
		document.getElementById(elem1).innerHTML = col_val[ num1 ];
	   }
        } 
        else {
            /* right swipe */
           // alert("right");
           if((wp % 4) != 3 && key_set == 1)
           {
		   var num = wp + 1;
		var num1 = wp;
		var tc = col[wp + 1];
		col[wp + 1] = col[wp];
		col[wp ] = tc;

		var tcv = col_val[wp + 1];
		col_val[wp + 1] = col_val[wp];
		col_val[wp ] = tcv;

		wp = wp + 1;

		var elem = num.toString();
		var elem1 = num1.toString();
		//col[num] = ;
		document.getElementById(elem).style.background = col[ num ];
		document.getElementById(elem1).style.background = col[ num1 ];
		document.getElementById(elem).innerHTML = "&nbsp;";
		document.getElementById(elem1).innerHTML = col_val[ num1 ];
        	}
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */ 
            if((wp != 0) && (wp != 1) && (wp != 2) && (wp != 3) && key_set == 1)
            {
		    var num = wp - 4;
			var num1 = wp;
			var tc = col[wp - 4];
			col[wp - 4] = col[wp];
			col[wp ] = tc;
	
			var tcv = col_val[wp - 4];
			col_val[wp - 4] = col_val[wp];
			col_val[wp ] = tcv;
	
			wp = wp - 4;
	
			var elem = num.toString();
			var elem1 = num1.toString();
	 		//col[num] = ;
	 		document.getElementById(elem).style.background = col[ num ];
	 		document.getElementById(elem1).style.background = col[ num1 ];
	 		document.getElementById(elem).innerHTML = "&nbsp;";
	 		document.getElementById(elem1).innerHTML = col_val[ num1 ];
	 	}	
        }
         else 
         { 
            /* down swipe */
            if(j > 1 && (wp < (last - 3) ) && key_set == 1)
            {
		    var num = wp + 4;
			var num1 = wp;
			var tc = col[wp + 4];
			col[wp + 4] = col[wp];
			col[wp ] = tc;
	
			var tcv = col_val[wp + 4];
			col_val[wp + 4] = col_val[wp];
			col_val[wp ] = tcv;
	
			wp = wp + 4;
	
			var elem = num.toString();
			var elem1 = num1.toString();
	 		//col[num] = ;
	 		document.getElementById(elem).style.background = col[ num ];
	 		document.getElementById(elem1).style.background = col[ num1 ];
	 		document.getElementById(elem).innerHTML = "&nbsp;";
	 		document.getElementById(elem1).innerHTML = col_val[ num1 ];
	 	}
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};

		
		function animator() 
		{
			//alert(j);
			//pause_down = 0;
			
		 	//frame = frame + 1;
		 	var i ;
		 	var k = j;
		 	// to assign colors to all the rows except first one
		 	while(k >=1 )
		 	{
			 	for(i = 0 ; i < 4; i++)
			 	{
			 		//var k = j;
			 		var num = k*4 + i;
			 		var elem = num.toString();
			 		col[num] = col[ ((k-1)*4) + i];
			 		col_val[num] = col_val[ ((k-1)*4) + i];
			 		document.getElementById(elem).style.background = col[ ((k-1)*4) + i ];
			 		if(col_val[ ((k-1)*4) + i ] == "&nbsp;")
			 		{
			 			document.getElementById(elem).innerHTML = "&nbsp;";
			 		}
			 		else 
			 		{
			 			document.getElementById(elem).innerHTML = col_val[ ((k-1)*4) + i ];
					}
				}
				k--;
			}
			// to assign new colors for first row - at the end 
			for(i = 0 ; i < 4; i++)
		 	{
		 		
		 		var num =  i;
		 		var rnd = get_random(rnd_cnt, Math.floor((Math.random()*4)+0));
		 		
		 		//alert(rnd);
		 		if(rnd_cnt == 4)
		 		{
		 			rnd_cnt = 0;
		 			rand_check[0] = 0;	rand_check[1] = 0;
					rand_check[2] = 0;	rand_check[3] = 0;
		 		}
		 		var elem = num.toString();
		 		col[num] = rand_col[ rnd ];
		 		col_val[num] =  col_alpha[rnd] ;
		 		document.getElementById(elem).style.background = rand_col[ rnd ];
		 		document.getElementById(elem).innerHTML = col_alpha[rnd];
			}
			last = j * 4 + 3;
			j++; 
			 var tp  = 4 + wp;
			 //alert(j);
			wp = tp;
			if(j >= 9)
			{
				
				//document.getElementById("kj").innerHTML = points;
				var sp = "speed used : ";
				if(tc == 1)
				{
					sp = sp.concat(" fast");
				}
				if(ec == 1)
				{
					sp = sp.concat(" easy");
				}
				if(mc == 1)
				{
					sp = sp.concat(" medium ");
				}
				var total = "GAME OVER\n\n".concat(sp).concat("\nTotal points ".concat(points.toString()));
				
				if(document.getElementById("best").innerHTML <= points)
				{
					document.getElementById("best").innerHTML = points;
					localStorage.setItem("best_score", points);	
				}
				
				alert(total);
				clearTimeout(timeout_state);
				clearTimeout(timeout_state1);
				window.location = "play.html";
				//exit(0);
			}
			timeout_state = setTimeout("animator()", time_slap);
		}	
		function reload()
		{
			window.location = "play.html";
		}
