var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";

function player_update()
{
	fabric.Image.fromURL("jogador.png", function(Img) {
	player_object = Img;
	player_object.scaleToWidth(100);
	player_object.scaleToHeight(110);
	player_object.set({top:player_y,left:player_x});
	canvas.add(player_object);
	});
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;
	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({top:player_y,left:player_x});
	canvas.add(block_image_object);
	});

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '69')
{
	console.log("E e Shift pressionadas ao mesmo tempo");
	block_image_width = block_image_width + 10;
	block_image_height = block_image_height + 10;
	document.getElementById("currentWidth").innerHTML = block_image_width;
	document.getElementById("currentHeight").innerHTML = block_image_height;	
}
if(e.shiftKey && keyPressed == '81')
{
	console.log("Q e Shift pressionadas ao mesmo tempo");
	block_image_width = block_image_width - 10;
	block_image_height = block_image_height - 10;
	document.getElementById("currentWidth").innerHTML = block_image_width;
	document.getElementById("currentHeight").innerHTML = block_image_height;
}

	if(keyPressed == '38')
	{
		up();
		console.log("cima");
	}
	if(keyPressed == '40')
	{
		down();
		console.log("baixo");
	}
	if(keyPressed == '37')
	{
		left();
		console.log("esquerda");
	}
	if(keyPressed == '39')
	{
		right();
		console.log("direita");
	}
	if(keyPressed == '80')
	{
		new_image('88bae0c349f7417f64658ff971451e2b5df46009.jpeg'); 
		console.log("p");
	}
	if(keyPressed == '71')
	{
		new_image('8517e6c1fe3c561a3d2c14f7c907ef54fb303ab2.png'); 
		console.log("g");
	}
	if(keyPressed == '86')
	{
		new_image('download (2).jpg'); 
		console.log("v");
	}
	if(keyPressed == '77')
	{
		new_image('download (4).jpg'); 
		console.log("m");
	}
	if(keyPressed == '84')
	{
		new_image('download (5).jpg'); 
		console.log("t");
	}
	if(keyPressed == '65')
	{
		new_image('download (6).jpg'); 
		console.log("a");
	}
	if(keyPressed == '90')
	{
		new_image('e61eae8e2c6eb2db5fe13ff03ad5fd727f2769b3_2_500x500.png'); 
		console.log("z");
	}
	
	
}
function up()
{
	if(player_y >=0)
	{
		player_y = player_y - block_image_height;
		console.log("altura da imagem do bloco = " + block_image_height);
		console.log("Quando a seta para cima é pressionada, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function down()
{
	if(player_y <=500)
	{
		player_y = player_y + block_image_height;
		console.log("altura da imagem do bloco = " + block_image_height);
		console.log("Quando a seta para baixo é pressionada, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function left()
{
	if(player_x >0)
	{
		player_x = player_x - block_image_width;
		console.log("largura da imagem do bloco = " + block_image_width);
		console.log("Quando a seta esquerda é pressionada, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function right()
{
	if(player_x <=850)
	{
		player_x = player_x + block_image_width;
		console.log("largura da imagem do bloco = " + block_image_width);
		console.log("Quando a seta direita é pressionada, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}
