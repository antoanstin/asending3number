var a=10,b=30,c=20;
   if(a<b)
   {
	   if(a<c)
	   {
		   if(b<c)
		   {
		   console.log(a,b,c)
		   }
		else
		{
			console.log(a,c,b)
		}   
	   }
   }
   if(b<a)
   {
	   if(b<c)
	   {
		   if(a<c)
		   {
		   console.log(b,a,c)
		   }
		else
		{
			console.log(b,c,a)
		}			
	   }
   }
   if(c<a)
   {
	   if(c<b)
	   {
		   if(a<b)
		   {
		   console.log(c,a,b)
		   }
		else
		{
			console.log(c,b,a)
		}			
	   }
   }
   