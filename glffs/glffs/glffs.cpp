

#include"stdafx.h"
#include"bass.h"

#include<fstream>

#pragma comment(lib, "bass.lib")
#pragma comment(lib, "OpenGL32.lib")
#pragma comment(lib, "glfw3.lib")
#pragma comment(lib, "glew32s.lib")

#define GLEW_STATIC
#include"glew.h" 
#include"glfw3.h"

#include<cstdlib>
#include<iostream>
#include<sstream>
#include<string>


double timer = 0;
int gameState =0;

bool moveL = false;
bool moveR = false;
double x = 0;
double xa = 0;
double score = 0;

static void error_callback(int error, const char* description){
	glfwTerminate();
	std::cout<<description<<std::endl;
	exit(1);
}

void killPlayer(){
	gameState = 2;
}
void spawnPlayer(){
	x = 0;
	xa = 0;
	timer = 0;
	moveL = false;
	moveR = false;
	score = 0;
	gameState = 1;
	timer = glfwGetTime();
}

static void key_callback(GLFWwindow* window, int key, int scancode, int action, int mods){
    if (key == GLFW_KEY_ESCAPE && action == GLFW_PRESS)
        glfwSetWindowShouldClose(window, GL_TRUE);

	if(key == GLFW_KEY_LEFT) moveL = action != GLFW_RELEASE;
	if(key == GLFW_KEY_RIGHT) moveR = action != GLFW_RELEASE;

	if(key == GLFW_KEY_ENTER && action == GLFW_RELEASE){
		if(gameState == 1) {
			killPlayer();
		} else {
			spawnPlayer();
		}
	}

}


int width = 1280/2, height = 720/2;
bool fullscreen = true;

void loadShader(int a, int b, std::ifstream &ifs, std::string prep=""){
	
	
	std::ostringstream vert;
	std::string tmp;
	while(ifs){
		std::getline(ifs, tmp);
		if(ifs) vert<<tmp<<"\n";
	}

	std::string c = prep+vert.str();


	auto f = glCreateShader(b);

	auto p = c.c_str();
	auto l = c.length();

	glShaderSource(f, 1, &p, (GLint *)&l);
	glCompileShader(f);
	glAttachShader(a, f);


	char q[8192];
	int len;

	glGetShaderInfoLog(f, 8192, &len, q);
	std::cout<<"shaderinfo:"<<q<<std::endl;
}

int main(int argc, char* argv[])
{
	GLFWwindow *w;
	if(!glfwInit()) exit(1);
	auto s = glfwGetVideoMode(glfwGetPrimaryMonitor());
	glfwSetErrorCallback(&error_callback);
	glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 4);
	glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 1);
	glfwWindowHint(GLFW_DECORATED, 0);
	if(!(w=glfwCreateWindow(width, height, "fonttest", fullscreen?glfwGetPrimaryMonitor():0, 0))) exit(1);
	glfwGetFramebufferSize(w, &width, &height);
	glfwSetKeyCallback(w, &key_callback);
	glfwSetInputMode(w, GLFW_CURSOR, GLFW_CURSOR_DISABLED);
	glfwMakeContextCurrent(w);
	if(!fullscreen)
		glfwSetWindowPos(w, (s->width-width)/2, (s->height-height)/2);
	else
		glfwSwapInterval(1);
	
	glewExperimental = true;
	if(glewInit() != GL_NO_ERROR) exit(1);
	std::cout<<glGetError()<<std::endl;

	
	unsigned int cfbo, ctex;

	glGenFramebuffers(1, &cfbo);
	glGenTextures(1, &ctex);
	
	glBindFramebuffer(GL_FRAMEBUFFER, cfbo);
	glBindTexture(GL_TEXTURE_2D, ctex);
	glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);
	glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);
	glTexImage2D(GL_TEXTURE_2D, 0, GL_RGBA, 32, 32, 0, GL_RGBA, GL_UNSIGNED_BYTE, 0);
	glFramebufferTexture2D(GL_FRAMEBUFFER, GL_COLOR_ATTACHMENT0, GL_TEXTURE_2D, ctex, 0);
	glBindTexture(GL_TEXTURE_2D, 0);
	glBindFramebuffer(GL_FRAMEBUFFER, 0);

	BASS_Init(-1,48000,BASS_DEVICE_SPEAKERS,0,0);

	auto collisionProgram = glCreateProgram();
	auto gameProgram = glCreateProgram();
	
	
	{
		std::ifstream ifsv("game.vert");
		std::ifstream ifsf("game.frag");
		loadShader(gameProgram, GL_VERTEX_SHADER, ifsv);
		loadShader(gameProgram, GL_FRAGMENT_SHADER, ifsf);
	}
	
	{
		std::ifstream ifsv("game.vert");
		std::ifstream ifsf("game.frag");	
		loadShader(collisionProgram, GL_VERTEX_SHADER, ifsv);
		loadShader(collisionProgram, GL_FRAGMENT_SHADER, ifsf, "#define COLLISION\n");
	}
	glLinkProgram(gameProgram);
	
	char tmp[8192];
	int len;

	glGetProgramInfoLog(gameProgram, 8192, &len, tmp);
	std::cout<<"program: "<<tmp<<std::endl;
	glLinkProgram(collisionProgram);

	glGetProgramInfoLog(gameProgram, 8192, &len, tmp);
	std::cout<<"program: "<<tmp<<std::endl;
	timer = glfwGetTime();

	
	GLuint vbo = 0;
	GLuint arr = 0;
	glGenVertexArrays(1, &arr);
	glBindVertexArray(arr);
	glGenBuffers(1, &vbo);
	glBindBuffer(GL_ARRAY_BUFFER, vbo);
	float qq[] = {0.0,0.0,   1.0,0.0,    0.0,1.0,   1.0,1.0};
	glBufferData(GL_ARRAY_BUFFER, 8*4, qq, GL_STATIC_DRAW);

	glEnableVertexAttribArray(0);
	glVertexAttribPointer(0,2,GL_FLOAT,GL_FALSE,0,0);
	

	unsigned char collisionData[32*32*4];

	while(!glfwWindowShouldClose(w)){
		if(moveL) xa-=1.0;
		if(moveR) xa+=1.0;
		if(glfwJoystickPresent(0)){
			int a;
			auto b = glfwGetJoystickAxes(0, &a);
			
			xa += b[0];

			auto c = glfwGetJoystickButtons(0, &a);
			if(c[0] != 0){
				if(gameState == 1) {
					killPlayer();
				} else {
					spawnPlayer();
				}
			}
		}

		xa*=0.9;
		x+=xa*0.5;

		double t = glfwGetTime();

		if(gameState == 1){
			
			score = 532.0*(t-timer);


			glBindFramebuffer(GL_FRAMEBUFFER, cfbo);
			glUseProgram(collisionProgram);
			glUniform2f(glGetUniformLocation(collisionProgram, "res"), 32, 32);
			glUniform1f(glGetUniformLocation(collisionProgram, "t"), (float)(t-timer));
			glUniform1f(glGetUniformLocation(collisionProgram, "xpos"), (float)x);
			glUniform1f(glGetUniformLocation(collisionProgram, "xacc"), (float)xa);
			glDrawArrays(GL_TRIANGLE_STRIP, 0, 4);
			glReadPixels(0,0,32,32,GL_RGBA, GL_UNSIGNED_BYTE, collisionData);
			for(int i=0;i<32*32*4;i+=4){
				if(collisionData[i] > 0 && (t-timer) > 2.0){
					killPlayer();
				}
			}
			glBindFramebuffer(GL_FRAMEBUFFER, 0);
			glUseProgram(gameProgram);
			glUniform2f(glGetUniformLocation(gameProgram, "res"), width,height);
			glUniform1f(glGetUniformLocation(gameProgram, "t"), (float)(t-timer));
			glUniform1f(glGetUniformLocation(gameProgram, "xpos"), (float)x);
			glUniform1f(glGetUniformLocation(gameProgram, "xacc"), (float)xa);
			glDrawArrays(GL_TRIANGLE_STRIP, 0, 4);
	
 		glfwSwapBuffers(w);
		} else if(gameState == 2) {

		} else {
			
 		glfwSwapBuffers(w);
		}

		glfwPollEvents();
	}

	return 0;
}

