/**
 * Created by Administrator on 2016/10/17.
 */

function openScanner(){
   summer.openScanner({
        callback : function (args){
            $summer.alert(args)
        }
    });
}




function openTwocode(){
    var twocodepath=summer.generateQRCode({
        size : 30,//二维码正方形的宽高
        content : "text"//生成二维码所需的源文字 string类型
    });
    var qq = twocodepath;		//string 图片路径
    $('.pic').attr('src',qq);
}


