//keyboard movement

function move(event)
{
	if(key_set)
	{
		var key = event.keyCode;
		//alert(key);
		//tc = temp color
		//tcv = temp column value
		if(key == 37 && ((wp % 4) != 0))
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
	 		//col[num] = ;
	 		document.getElementById(elem).style.background = col[ num ];
	 		document.getElementById(elem1).style.background = col[ num1 ];
	 		document.getElementById(elem).innerHTML = "&nbsp;";
	 		document.getElementById(elem1).innerHTML = col_val[ num1 ];
		}
		else if(key == 39 && ((wp % 4) != 3))
		{
			//alert(wp);
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
		else if(key == 38 && ((wp != 0) && (wp != 1) && (wp != 2) && (wp != 3) ) )
		{
			//alert(wp);
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
		else if(key == 40 && j > 1 && (wp < (last - 3) ) )
		{
			//alert(last - 7);
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
