document.body.appendChild(document.createElement('script')).src='//code.jquery.com/jquery-1.9.1.min.js';
setTimeout(function(){
    $(".s label:last-child").each(
        function(){
            $(this).click();
        });
    $(".j-textarea").each(
        function(){
            $(this).val("ȫ��ֺ���"); //�����ǵ���������
        });
},2000)

