var ki = "<span >shubham@khurana</span>:<span style=\"color:red\"><b> Hey !!</b></span><br><span >shubham@khurana</span>:<span style=\"color:red\"><b> exec About me</b></span><br><br><br><span style=\"color:green\">This is Shubham Khurana, currently a computer science graduate student from <span style=\"color:cyan\">Univeristy at Buffalo, New York</span>.<br><br>I have 4 years of full-stack development experience using Java, Javascript, Python, SQL<br><br> My area of interest include : Distributed Systems, Cloud Computing & Backend Engineering </span><br><br> <span >shubham@khurana</span>: exec shubham github <br><br><a style=\"color:green\" href=\"https://github.com/ShubhamKhurana63\">./github.out</a><br><br><span >shubham@khurana</span>: exec shubham linkedin <br><br><a style=\"color:green\" href=\"https://www.linkedin.com/in/shubhamkhurana25/\">./linkedin.out</a><br><br><span >shubham@khurana</span>: exec shubham facebook <br><br><a style=\"color:green\" href=\"https://www.facebook.com/shubham.khurana.184/\">./facebook.out</a><br><br><span >shubham@khurana</span>: exec shubham leetcode <br><br><a style=\"color:green\" href=\"https://leetcode.com/shubhamkhurana/\">./leetcode.out</a><br><br><span >shubham@khurana</span>: cd /projects<br><br><span >shubham@khurana/projects</span>: ls -la <br><ol style=\"color:green\"><li>Implemented a Dynamo styled key-value storage system using Java Sockets, multithreading & Android Virtual devices, which powers the e-commerce application with simultaneous availability and linearizability guarantees</li><br><li>Group Messenger that multicast a message to all app instances maintaing TOTAL and FIFO ordering guarantees.</li><br><li> Developed a distributed caching system using CHORD protocol. </li><br><li> Designed and contributed as a developer to passenger complaint system for NFTA. (Android, Swift, Nodejs)</li><br><li>Airline consortium on Blockchain (Node.js, Express.js, Bootstrap, Web3, MongoDb, Ganache, Solidity)</li></ol><br><span >shubham@khurana</span>: <span style=\"color:cyan\"> Software Developer 2 @ Oracle Cloud Infrastructure. </span>"

var Typer={
	text: ki,
	accessCountimer:null,
	index:0, 
	speed:4,
	// file:"", 
	accessCount:0,
	deniedCount:0, 
	init: function(){
		accessCountimer=setInterval(function(){Typer.updLstChr();},500); 
		// $.get(Typer.file,function(data){
		// 	Typer.text=ki;
		// 	Typer.text = Typer.text.slice(0, Typer.text.length-1);
		// });
	},
 
	content:function(){
		return $("#console").html();
	},
 
	write:function(str){
		$("#console").append(str);
		return false;
	},
 
	addText:function(key){
		
		if(key.keyCode==18){
			Typer.accessCount++; 
			
			if(Typer.accessCount>=3){
				Typer.makeAccess(); 
			}
		}
		
    		else if(key.keyCode==20){
			Typer.deniedCount++; 
			
			if(Typer.deniedCount>=3){
				Typer.makeDenied(); 
			}
		}
		
    		else if(key.keyCode==27){ 
			Typer.hidepop(); 
		}
		
    		else if(Typer.text){ 
			var cont=Typer.content(); 
			if(cont.substring(cont.length-1,cont.length)=="|") 
				$("#console").html($("#console").html().substring(0,cont.length-1)); 
			if(key.keyCode!=8){ 
				Typer.index+=Typer.speed;	
			}
      		else {
			if(Typer.index>0) 
				Typer.index-=Typer.speed;
			}
			var text=Typer.text.substring(0,Typer.index)
			var rtn= new RegExp("\n", "g"); 
	
			$("#console").html(text.replace(rtn,"<br/>"));
			window.scrollBy(0,50); 
		}
		
		if (key.preventDefault && key.keyCode != 122) { 
			key.preventDefault()
		};  
		
		if(key.keyCode != 122){ // otherway prevent keys default behavior
			key.returnValue = false;
		}
	},
 
	updLstChr:function(){ 
		var cont=this.content(); 
		
		if(cont.substring(cont.length-1,cont.length)=="|") 
			$("#console").html($("#console").html().substring(0,cont.length-1)); 
		
		else
			this.write("|"); // else write it
	}
}

function replaceUrls(text) {
	var http = text.indexOf("http://");
	var space = text.indexOf(".me ", http);
	
	if (space != -1) { 
		var url = text.slice(http, space-1);
		return text.replace(url, "<a href=\""  + url + "\">" + url + "</a>");
	} 
	
	else {
		return text
	}
}

Typer.speed=3;
// Typer.file="viral.txt"; // add your own name here
Typer.init();
 
var timer = setInterval("t();", 30);
function t() {
	Typer.addText({"keyCode": 123748});
	
	if (Typer.index > Typer.text.length) {
		clearInterval(timer);
	}
}


