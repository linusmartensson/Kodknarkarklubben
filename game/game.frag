precision mediump float; 
uniform vec2 res; 
uniform float t;
uniform float xpos;
uniform float xacc;

vec3 o;
float l;


vec3 ahsv2rgb(float h, float s, float v){
 return (clamp(abs(fract(h+vec3(1.0,0.6666667,0.3333333)) * 6.0 - 3.0) -1.0, 0.0, 1.0)-1.0)*s*v+v;	
}


vec3 mod289(vec3 x) {return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 mod289(vec4 x) {return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec2 mod289(vec2 x) {return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 permute(vec4 x) {return mod289(((x*34.0)+1.0)*x);}
vec3 permute(vec3 x) {return mod289(((x*34.0)+1.0)*x);}

vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
float snoise(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                     -0.577350269189626,  // -1.0 + 2.0 * C.x
                      0.024390243902439); // 1.0 / 41.0
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i); // Avoid truncation effects in permutation
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
		+ i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
float snoise(vec3 v){ 
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y
  i = mod289(i); 
  vec4 p = permute( permute( permute( 
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)
  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                dot(p2,x2), dot(p3,x3) ) );
  }
float smin( float a, float b, float k )
{
    float h = clamp( 0.5+0.5*(b-a)/k, 0.0, 1.0 );
    return mix( b, a, h ) - k*h*(1.0-h);
}
float rand(float a){
	return fract(mod(a*90327.12312+1230.0,(sin(a)+1.0)*10351.023));
}

float noise(float a){
	return mix(rand(floor(a)-1.0), rand(floor(a)), 1.0-(cos(fract(a)*3.14159)*0.5+0.5));
}


void rot(inout vec2 v, in float t){
	float c = cos(t);
	float s = sin(t);
	v *= mat2(c, -s, s, c);
}


float groundheight(vec3 pos){
	return pos.y + snoise(pos.zx*0.001)*30.0;
}
 
float box(vec3 p, vec3 b){
	vec3 d = abs(p) - b;
	return min(max(d.x,max(d.y,d.z)),0.0) + length(max(d,0.0));
}

float cylinder(vec3 p, float w){
	return length(p.xz)-w;
}


#define STARTSPEED 150.0

float ship(vec3 p){

	vec3 oo = vec3(xpos,7.3,t*STARTSPEED+t*t+4.0);

	oo.y -= groundheight(oo)-5.5;

	vec3 po = p-oo;


	rot(po.zy, 0.1);
	rot(po.xz, xacc*0.01);
	rot(po.yx, xacc*-0.1);
	vec3 poo = po;
	vec3 pooo = po+vec3(0.0,0.0,-2.0);
	rot(po.yx, 3.14159-0.3);
	float mm = (po.z)*0.2;
	float p1 = box(po, vec3(2.0,0.3,3.0));
	rot(po.yx, 3.14159+0.6);
	float p2 = box(po, vec3(2.0,0.3,3.0));


	float k = 1.0;

	rot(poo.xz, k);
	float p3 = box(poo, vec3(0.9,1.0,3.3));
	rot(poo.xz, -k*2.0);
	p3 = max(box(poo, vec3(0.9,1.0,3.3)),p3);
	
	return min(max(p3,min(p1,p2)), box(pooo, vec3(0.4,0.4,2.0)))+0.3;
}

float grounddetail(vec3 p){
	float k = 2.0*l/(100.0+l)+1.0;
	return noise(p.z*0.1+sin(p.x*0.01)*1.0)*10.0/k+noise(p.z*0.3+sin(p.x*0.01)*1.0)*3.0/k-1.5;
}

float d(vec3 pos){
	
	vec3 p = pos;

 
	float rr = rand(floor((p.z)/10.0));

	float state = max(0.0,sin(p.z*0.001));
	float istate = 1.0-state;

	float startup = p.z / (1000.0+p.z);
	float istartup = 1.0-startup;

	float kstate = max(0.0, -sin(p.z*0.0004));
	float ikstate = 1.0-kstate;
	
	float z = 100000000.0;
	float gh = groundheight(p)+grounddetail(p);
	z = min(z,gh+state*300.0);
//	p.x += sin(p.z*0.001+sin(p.z*0.0012))*300.0 * startup;
 	p.y += gh-p.y;
	z = smin(z, 0.45*(snoise(p.xyz*vec3(0.007,0.004,0.0021))*100.0 - length(p.xy)*0.3+state*100.0 + 80.0 + max(150.0-p.z*0.1,0.0))+kstate*100.0, 1.01);

	

	p.y = pos.y;
	p.x += sin(p.z*0.005)*50.0*startup;
	rot(p.xy, floor(p.z/50.0)*0.25);
	p.z = mod(p.z, 50.0)-25.0;
	p.xy = mod(p.xy, 200.0+istate*400.0)-100.0-istate*200.0;
	z = min(z, cylinder(p, 10.0-istate*16.0 - istartup*16.0)+kstate*100.0);
	z = min(z, cylinder(p.yxz, 10.0-istate*16.0- istartup*16.0)+kstate*100.0);

	p = pos-o;
	
	p.x += sin(pos.z*0.003)*100.0;
	rot(p.xz, sin(pos.z*0.005)*0.3);
        p += o;
	p.xz = mod(p.xz, 200.0)-100.0;
	rot(p.zy, sin(p.z*0.01)*0.3);
	z = min(z, ikstate*100.0 + box(p.xyz, vec3(30.0-ikstate*100.0,500.0,10.0-ikstate*100.0)));

	return z;
}

float da(vec3 pp){
	return min(d(pp), ship(pp));	
}

vec3 norm(vec3 p){
	vec2 e = vec2(1.0,0.0);

	return normalize(vec3(
		da(p+e.xyy)-da(p-e.xyy),
		da(p+e.yxy)-da(p-e.yxy),
		da(p+e.yyx)-da(p-e.yyx)
			));
}


void main(){ 
	l = 0.0;
	o = vec3(xpos,0.0,t*STARTSPEED+t*t);
	vec3 dir = vec3((gl_FragCoord.xy/res.xy*2.0-1.0)/vec2(res.y/res.x,1.0),1.0);



	rot(dir.xz,-(xacc*0.04));
	vec2 rd = vec2(atan(dir.x,dir.y), sqrt(dir.x*dir.x+dir.y*dir.y)*1.0);
	dir.xy = vec2(sin(rd.x)*rd.y, cos(rd.x)*rd.y);
	rot(dir.yx, xacc*0.02);

	dir = normalize(dir);
	o.y -= groundheight(o)-6.5;

	vec3 pp = vec3(0.0);


	float j = 0.0;
	gl_FragColor = vec4(0.0,0.0,0.0,1.0);
	float dt = 1.0; 
	float ml = 0.0;
	for(int i=0;i<50;++i){
		if((dt) < 0.025+ml*10.0+j*0.01 || l > 700.0){
			continue;
		}
		ml = clamp(l/700.0,0.0,1.0);
		j = float(i);
		pp = o+dir*l;
#ifdef COLLISION
		dt = max(d(pp), ship(pp));
#else
		dt = min(d(pp), ship(pp));
#endif
		l += dt;
		
	}
	gl_FragColor = vec4(0.0,0.0,0.0,1.0);
	if((dt) < 0.025+ml*10.0+j*0.01) {
		vec3 n = norm(pp);
		vec3 li = vec3(dot(n, normalize(vec3(sin(t),cos(t),-3.0))));
		
		gl_FragColor.rgb = mix(li,gl_FragColor.rgb, ml);
	}

	// noise it :)
#ifndef COLLISION
	float g = dot(gl_FragColor.rgb,vec3(0.21,0.72,0.07))+max(0.0,1.5-t);
	float q2 = rand(t+dir.x*900.0+10000.5);
	float q1 = rand(t+dir.y*900.0+10000.0);
	float l = mod(floor(t*0.15),2.0)*0.66;
	gl_FragColor.rgb = ahsv2rgb(0.0+l,1.0,g)+ahsv2rgb(l+0.33,1.0,q1)+ahsv2rgb(l+0.66,1.0,q2);
#endif
} 
