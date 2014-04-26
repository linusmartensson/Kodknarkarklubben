var fb = gl.createFramebuffer();
var cb = gl.createTexture();
fb.width = 32;
fb.height = 32;
var pixels = new Uint8Array(fb.width*fb.height*4);
gl.bindTexture(cb);
gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, fb.width, fb.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, rttTexture, 0);
gl.bindTexture(0);

function collision(var draw)
{
	gl.bindFramebuffer(gl.FRAMEBUFFER,framebuffer);
	draw();
	gl.readPixels(0,0,fb.width,fb.height,gl.GL_RGBA,gl.UNSIGNED_BYTE,pixels);
	gl.bindFramebuffer(gl.FRAMEBUFFER,0);
	for(var i=0;i<fb.width*fb.height*4;i++)
		if(pixels[i]>0)
		return true;
	return false;
}