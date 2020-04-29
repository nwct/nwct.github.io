var eleTextarea = document.querySelector('textarea');
var eleButton = document.querySelector('input[type="button"]');

	// 下载文件方法
	var funDownload = function (content, filename) {
    var eleLink = document.createElement('a');
    eleLink.download = filename;
    eleLink.style.display = 'none';
    // 字符内容转变成blob地址
    var blob = new Blob([content]);
    eleLink.href = URL.createObjectURL(blob);
    // 触发点击
    document.body.appendChild(eleLink);
    eleLink.click();
    // 然后移除
    document.body.removeChild(eleLink);
};

if ('download' in document.createElement('a')) {
	// 作为frps.ini文件下载
	eleButton.addEventListener('click', function () {
		funDownload(eleTextarea.value, 'frps.ini');	
	});
} else {
	eleButton.onclick = function () {
		alert('浏览器不支持,请更换浏览器或者手动复制生成的内容并保存！');	
	};
}