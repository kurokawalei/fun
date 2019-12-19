// JavaScript Document design by kuro




function waether() {


    var xhr = new XMLHttpRequest();

    xhr.open('get', 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-11AD035A-8FDB-4AFB-BC5F-CB24CFB20141&format=JSON&elementName=T,Wx', true);


    xhr.send(null);


    xhr.onload = function () {

        var str = JSON.parse(xhr.responseText);

        console.log( str );
      
      
        
       // console.log(city[0].locationName);
        //22個縣市

        var city = str.records.locations[0].location;

        var citytotal = str.records.locations[0].location.length;

        for (i = 0; i < citytotal; i++) {

            //22個縣市的溫度
            var allt = city[i].weatherElement[0].time[0].elementValue[0].value;

            //22個縣市的天氣預報
            var allw = city[i].weatherElement[1].time[2].elementValue[0].value;

        }


        //(日期抓7天-非變數)
        var day1 = str.records.locations[0].location[0].weatherElement[0].time[0].startTime;
        var day2 = str.records.locations[0].location[0].weatherElement[0].time[2].startTime;
        var day3 = str.records.locations[0].location[0].weatherElement[0].time[4].startTime
        var day4 = str.records.locations[0].location[0].weatherElement[0].time[6].startTime
        var day5 = str.records.locations[0].location[0].weatherElement[0].time[8].startTime
        var day6 = str.records.locations[0].location[0].weatherElement[0].time[10].startTime
        var day7 = str.records.locations[0].location[0].weatherElement[0].time[12].startTime


        //今天日期(非變數)
        var d1box = document.querySelector('.area-data');
        var day1Text = day1.substring(0, day1.length - 9);
        d1box.textContent = '日期：' + day1Text;


        //其他6天日期 (非變數)

        var d2box = document.querySelector('.day2');
        var day2Text = day2.substring(0, day2.length - 9);
        var d3box = document.querySelector('.day3');
        var day3Text = day3.substring(0, day3.length - 9);
        var d4box = document.querySelector('.day4');
        var day4Text = day4.substring(0, day4.length - 9);
        var d5box = document.querySelector('.day5');
        var day5Text = day5.substring(0, day5.length - 9);
        var d6box = document.querySelector('.day6');
        var day6Text = day6.substring(0, day6.length - 9);
        var d7box = document.querySelector('.day7');
        var day7Text = day7.substring(0, day7.length - 9);


        d2box.textContent = day2Text;
        d3box.textContent = day3Text;
        d4box.textContent = day4Text;
        d5box.textContent = day5Text;
        d6box.textContent = day6Text;
        d7box.textContent = day7Text;



        //溫度(第一筆)
        var t1 = str.records.locations[0].location[17].weatherElement[0].time[0].elementValue[0].value;

        var t2 = str.records.locations[0].location[17].weatherElement[0].time[2].elementValue[0].value;

        var t3 = str.records.locations[0].location[17].weatherElement[0].time[4].elementValue[0].value;

        var t4 = str.records.locations[0].location[17].weatherElement[0].time[6].elementValue[0].value;


        var t5 = str.records.locations[0].location[17].weatherElement[0].time[8].elementValue[0].value;


        var t6 = str.records.locations[0].location[17].weatherElement[0].time[10].elementValue[0].value;


        var t7 = str.records.locations[0].location[17].weatherElement[0].time[12].elementValue[0].value;



        //氣象(第一筆雲林)


        var w1 = str.records.locations[0].location[17].weatherElement[1].time[0].elementValue[0].value;

        var w2 = str.records.locations[0].location[17].weatherElement[1].time[2].elementValue[0].value;

        var w3 = str.records.locations[0].location[17].weatherElement[1].time[4].elementValue[0].value;

        var w4 = str.records.locations[0].location[17].weatherElement[1].time[6].elementValue[0].value;

        var w5 = str.records.locations[0].location[17].weatherElement[1].time[8].elementValue[0].value;

        var w6 = str.records.locations[0].location[17].weatherElement[1].time[10].elementValue[0].value;

        var w7 = str.records.locations[0].location[17].weatherElement[1].time[12].elementValue[0].value;


        //其他6天的天氣預報

        var theweatherbox = document.querySelectorAll('.theweather');


        theweatherbox[0].textContent = w2;
        theweatherbox[1].textContent = w3;
        theweatherbox[2].textContent = w4;
        theweatherbox[3].textContent = w5;
        theweatherbox[4].textContent = w6;
        theweatherbox[5].textContent = w7;


        //今天的天氣預報

        var w1box = document.querySelector('.area-weather');
        w1box.textContent = w1;


        //今天的溫度
        var t1box = document.querySelector('.area-temperature');
        t1box.textContent = t1 + '℃';

        //其他6天的溫度

        var temperaturebox = document.querySelectorAll('.temperature');


        temperaturebox[0].textContent = t2 + '℃';
        temperaturebox[1].textContent = t3 + '℃';
        temperaturebox[2].textContent = t4 + '℃';
        temperaturebox[3].textContent = t5 + '℃';
        temperaturebox[4].textContent = t6 + '℃';
        temperaturebox[5].textContent = t7 + '℃';

       
        

        
        //判斷今日天氣現象代碼
        var weatherinfo =
        str.records.locations[0].location[17].weatherElement[1].time[0].elementValue[1].value;

        
       // console.log(weatherinfo)
     

        var winfo = $('#weatherimages');

        switch (weatherinfo) {

            case '01':
            case '24':
            case '25':
            case '26':

                $(winfo).attr('src', 'images/weather_01.png');

                break;

            case '02':
            case '03':
            case '04':
            case '05':
            case '06':
            case '07':
            case '27':
            case '28':

                $(winfo).attr('src', 'images/weather_02.png');

                break;

            case '08':
            case '09':
            case '10':
            case '19':
            case '20':
            case '30':
            case '37':
            case '38':
            case '39':
            case '40':
            case '41':

                $(winfo).attr('src', 'images/weather_03.png');

                break;


            case '15':
            case '16':
            case '17':
            case '18':
            case '21':
            case '22':
            case '33':
            case '34':
            case '35':
            case '36':

                $(winfo).attr('src', 'images/weather_04.png');

                break;

            case '陰短暫雨':

                $(winfo).attr('src', 'images/weather_05.png');

                break;

            case '11':
            case '12':
            case '13':
            case '14':
            case '23':
            case '29':
            case '31':
            case '32':

                $(winfo).attr('src', 'images/weather_06.png');

                break;


        }
      

    }


}



//預設抓台中市

waether();




//切換行為   

function change() {

    var vv = $('#select :selected').val();


    if (vv == 0) {

     
        
      swal("雲林縣", "為您查詢雲林縣未來一周的天氣預報！", "success");

        var xhr = new XMLHttpRequest();

        xhr.open('get', 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-11AD035A-8FDB-4AFB-BC5F-CB24CFB20141&format=JSON&elementName=T,Wx', true);

        xhr.send(null);

        xhr.onload = function () {

            var str = JSON.parse(xhr.responseText);

            //溫度(雲林)

            var t1 = str.records.locations[0].location[0].weatherElement[0].time[0].elementValue[0].value;

            var t2 = str.records.locations[0].location[0].weatherElement[0].time[2].elementValue[0].value;

            var t3 = str.records.locations[0].location[0].weatherElement[0].time[4].elementValue[0].value;

            var t4 = str.records.locations[0].location[0].weatherElement[0].time[6].elementValue[0].value;


            var t5 = str.records.locations[0].location[0].weatherElement[0].time[8].elementValue[0].value;


            var t6 = str.records.locations[0].location[0].weatherElement[0].time[10].elementValue[0].value;


            var t7 = str.records.locations[0].location[0].weatherElement[0].time[12].elementValue[0].value;


            //氣象(雲林)


            var w1 = str.records.locations[0].location[0].weatherElement[1].time[0].elementValue[0].value;

            var w2 = str.records.locations[0].location[0].weatherElement[1].time[2].elementValue[0].value;

            var w3 = str.records.locations[0].location[0].weatherElement[1].time[4].elementValue[0].value;

            var w4 = str.records.locations[0].location[0].weatherElement[1].time[6].elementValue[0].value;

            var w5 = str.records.locations[0].location[0].weatherElement[1].time[8].elementValue[0].value;

            var w6 = str.records.locations[0].location[0].weatherElement[1].time[10].elementValue[0].value;

            var w7 = str.records.locations[0].location[0].weatherElement[1].time[12].elementValue[0].value;



            //其他6天的天氣預報

            var theweatherbox = document.querySelectorAll('.theweather');

            theweatherbox[0].textContent = w2;
            theweatherbox[1].textContent = w3;
            theweatherbox[2].textContent = w4;
            theweatherbox[3].textContent = w5;
            theweatherbox[4].textContent = w6;
            theweatherbox[5].textContent = w7;


            //今天的天氣預報

            var w1box = document.querySelector('.area-weather');

            w1box.textContent = w1;


            //今天的溫度
            var t1box = document.querySelector('.area-temperature');
            t1box.textContent = t1 + '℃';


            //其他6天的溫度

            var temperaturebox = document.querySelectorAll('.temperature');


            temperaturebox[0].textContent = t2 + '℃';
            temperaturebox[1].textContent = t3 + '℃';
            temperaturebox[2].textContent = t4 + '℃';
            temperaturebox[3].textContent = t5 + '℃';
            temperaturebox[4].textContent = t6 + '℃';
            temperaturebox[5].textContent = t7 + '℃';

          
                
                 
        //判斷今日天氣現象代碼
        var weatherinfo =
        str.records.locations[0].location[0].weatherElement[1].time[0].elementValue[1].value;

      

        var winfo = $('#weatherimages');

        switch (weatherinfo) {

            case '01':
            case '24':
            case '25':
            case '26':

                $(winfo).attr('src', 'images/weather_01.png');

                break;

            case '02':
            case '03':
            case '04':
            case '05':
            case '06':
            case '07':
            case '27':
            case '28':

                $(winfo).attr('src', 'images/weather_02.png');

                break;

            case '08':
            case '09':
            case '10':
            case '19':
            case '20':
            case '30':
            case '37':
            case '38':
            case '39':
            case '40':
            case '41':

                $(winfo).attr('src', 'images/weather_03.png');

                break;


            case '15':
            case '16':
            case '17':
            case '18':
            case '21':
            case '22':
            case '33':
            case '34':
            case '35':
            case '36':

                $(winfo).attr('src', 'images/weather_04.png');

                break;

            case '陰短暫雨':

                $(winfo).attr('src', 'images/weather_05.png');

                break;

            case '11':
            case '12':
            case '13':
            case '14':
            case '23':
            case '29':
            case '31':
            case '32':

                $(winfo).attr('src', 'images/weather_06.png');

                break;


        }
      

            
            

        }

    }

    if (vv == 1) {

      

   swal("南投縣", "為您查詢南投縣未來一周的天氣預報！", "success");

        var xhr = new XMLHttpRequest();

        xhr.open('get', 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-11AD035A-8FDB-4AFB-BC5F-CB24CFB20141&format=JSON&elementName=T,Wx', true);

        xhr.send(null);

        xhr.onload = function () { 

            var str = JSON.parse(xhr.responseText);
            

            //溫度(南投)
            var t1 = str.records.locations[0].location[1].weatherElement[0].time[0].elementValue[0].value;

            var t2 = str.records.locations[0].location[1].weatherElement[0].time[2].elementValue[0].value;

            var t3 = str.records.locations[0].location[1].weatherElement[0].time[4].elementValue[0].value;

            var t4 = str.records.locations[0].location[1].weatherElement[0].time[6].elementValue[0].value;

            var t5 = str.records.locations[0].location[1].weatherElement[0].time[8].elementValue[0].value;

            var t6 = str.records.locations[0].location[1].weatherElement[0].time[10].elementValue[0].value;

            var t7 = str.records.locations[0].location[1].weatherElement[0].time[12].elementValue[0].value;


            //氣象(南投)     

            var w1 = str.records.locations[0].location[1].weatherElement[1].time[0].elementValue[0].value;

            var w2 = str.records.locations[0].location[1].weatherElement[1].time[2].elementValue[0].value;

            var w3 = str.records.locations[0].location[1].weatherElement[1].time[4].elementValue[0].value;

            var w4 = str.records.locations[0].location[1].weatherElement[1].time[6].elementValue[0].value;

            var w5 = str.records.locations[0].location[1].weatherElement[1].time[8].elementValue[0].value;

            var w6 = str.records.locations[0].location[1].weatherElement[1].time[10].elementValue[0].value;

            var w7 = str.records.locations[0].location[1].weatherElement[1].time[12].elementValue[0].value;



            //其他6天的天氣預報

            var theweatherbox = document.querySelectorAll('.theweather');

            theweatherbox[0].textContent = w2;
            theweatherbox[1].textContent = w3;
            theweatherbox[2].textContent = w4;
            theweatherbox[3].textContent = w5;
            theweatherbox[4].textContent = w6;
            theweatherbox[5].textContent = w7;


            //今天的天氣預報

            var w1box = document.querySelector('.area-weather');

            w1box.textContent = w1;


            //今天的溫度
            var t1box = document.querySelector('.area-temperature');
            t1box.textContent = t1 + '℃';


            //其他6天的溫度

            var temperaturebox =
                document.querySelectorAll('.temperature');

            temperaturebox[0].textContent = t2 + '℃';
            temperaturebox[1].textContent = t3 + '℃';
            temperaturebox[2].textContent = t4 + '℃';
            temperaturebox[3].textContent = t5 + '℃';
            temperaturebox[4].textContent = t6 + '℃';
            temperaturebox[5].textContent = t7 + '℃';

               
                 
        //判斷今日天氣現象代碼
        var weatherinfo =
        str.records.locations[0].location[1].weatherElement[1].time[0].elementValue[1].value;

       

        var winfo = $('#weatherimages');

        switch (weatherinfo) {

            case '01':
            case '24':
            case '25':
            case '26':

                $(winfo).attr('src', 'images/weather_01.png');

                break;

            case '02':
            case '03':
            case '04':
            case '05':
            case '06':
            case '07':
            case '27':
            case '28':

                $(winfo).attr('src', 'images/weather_02.png');

                break;

            case '08':
            case '09':
            case '10':
            case '19':
            case '20':
            case '30':
            case '37':
            case '38':
            case '39':
            case '40':
            case '41':

                $(winfo).attr('src', 'images/weather_03.png');

                break;


            case '15':
            case '16':
            case '17':
            case '18':
            case '21':
            case '22':
            case '33':
            case '34':
            case '35':
            case '36':

                $(winfo).attr('src', 'images/weather_04.png');

                break;

            case '陰短暫雨':

                $(winfo).attr('src', 'images/weather_05.png');

                break;

            case '11':
            case '12':
            case '13':
            case '14':
            case '23':
            case '29':
            case '31':
            case '32':

                $(winfo).attr('src', 'images/weather_06.png');

                break;


        }
      


        }

    }

    if (vv == 2) {
      
        swal("連江縣", "為您查詢連江縣未來一周的天氣預報！", "success");


        var xhr = new XMLHttpRequest();

        xhr.open('get', 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-11AD035A-8FDB-4AFB-BC5F-CB24CFB20141&format=JSON&elementName=T,Wx', true);

        xhr.send(null);

        xhr.onload = function () {

            var str = JSON.parse(xhr.responseText);



            //溫度(連江)
            var t1 = str.records.locations[0].location[2].weatherElement[0].time[0].elementValue[0].value;

            var t2 = str.records.locations[0].location[2].weatherElement[0].time[2].elementValue[0].value;

            var t3 = str.records.locations[0].location[2].weatherElement[0].time[4].elementValue[0].value;

            var t4 = str.records.locations[0].location[2].weatherElement[0].time[6].elementValue[0].value;


            var t5 = str.records.locations[0].location[2].weatherElement[0].time[8].elementValue[0].value;


            var t6 = str.records.locations[0].location[2].weatherElement[0].time[10].elementValue[0].value;


            var t7 = str.records.locations[0].location[2].weatherElement[0].time[12].elementValue[0].value;


            //氣象

            var w1 = str.records.locations[0].location[2].weatherElement[1].time[0].elementValue[0].value;

            var w2 = str.records.locations[0].location[2].weatherElement[1].time[2].elementValue[0].value;

            var w3 = str.records.locations[0].location[2].weatherElement[1].time[4].elementValue[0].value;

            var w4 = str.records.locations[0].location[2].weatherElement[1].time[6].elementValue[0].value;

            var w5 = str.records.locations[0].location[2].weatherElement[1].time[8].elementValue[0].value;

            var w6 = str.records.locations[0].location[2].weatherElement[1].time[10].elementValue[0].value;

            var w7 = str.records.locations[0].location[2].weatherElement[1].time[12].elementValue[0].value;



            //其他6天的天氣預報

            var theweatherbox = document.querySelectorAll('.theweather');

            theweatherbox[0].textContent = w2;
            theweatherbox[1].textContent = w3;
            theweatherbox[2].textContent = w4;
            theweatherbox[3].textContent = w5;
            theweatherbox[4].textContent = w6;
            theweatherbox[5].textContent = w7;


            //今天的天氣預報

            var w1box = document.querySelector('.area-weather');

            w1box.textContent = w1;


            //今天的溫度
            var t1box = document.querySelector('.area-temperature');
            t1box.textContent = t1 + '℃';


            //其他6天的溫度

            var temperaturebox = document.querySelectorAll('.temperature');


            temperaturebox[0].textContent = t2 + '℃';
            temperaturebox[1].textContent = t3 + '℃';
            temperaturebox[2].textContent = t4 + '℃';
            temperaturebox[3].textContent = t5 + '℃';
            temperaturebox[4].textContent = t6 + '℃';
            temperaturebox[5].textContent = t7 + '℃';

        
                 
        //判斷今日天氣現象代碼
        var weatherinfo =
        str.records.locations[0].location[2].weatherElement[1].time[0].elementValue[1].value;

      

        var winfo = $('#weatherimages');

        switch (weatherinfo) {

            case '01':
            case '24':
            case '25':
            case '26':

                $(winfo).attr('src', 'images/weather_01.png');

                break;

            case '02':
            case '03':
            case '04':
            case '05':
            case '06':
            case '07':
            case '27':
            case '28':

                $(winfo).attr('src', 'images/weather_02.png');

                break;

            case '08':
            case '09':
            case '10':
            case '19':
            case '20':
            case '30':
            case '37':
            case '38':
            case '39':
            case '40':
            case '41':

                $(winfo).attr('src', 'images/weather_03.png');

                break;


            case '15':
            case '16':
            case '17':
            case '18':
            case '21':
            case '22':
            case '33':
            case '34':
            case '35':
            case '36':

                $(winfo).attr('src', 'images/weather_04.png');

                break;

            case '陰短暫雨':

                $(winfo).attr('src', 'images/weather_05.png');

                break;

            case '11':
            case '12':
            case '13':
            case '14':
            case '23':
            case '29':
            case '31':
            case '32':

                $(winfo).attr('src', 'images/weather_06.png');

                break;


        }
      


         

        }


    }

    if (vv == 3) {
     
        swal("台東縣", "為您查詢台東縣未來一周的天氣預報！", "success");


        var xhr = new XMLHttpRequest();

        xhr.open('get', 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-11AD035A-8FDB-4AFB-BC5F-CB24CFB20141&format=JSON&elementName=T,Wx', true);

        xhr.send(null);

        xhr.onload = function () {

            var str = JSON.parse(xhr.responseText);


            //溫度
            var t1 = str.records.locations[0].location[3].weatherElement[0].time[0].elementValue[0].value;

            var t2 = str.records.locations[0].location[3].weatherElement[0].time[2].elementValue[0].value;

            var t3 = str.records.locations[0].location[3].weatherElement[0].time[4].elementValue[0].value;

            var t4 = str.records.locations[0].location[3].weatherElement[0].time[6].elementValue[0].value;


            var t5 = str.records.locations[0].location[3].weatherElement[0].time[8].elementValue[0].value;

            var t6 = str.records.locations[0].location[3].weatherElement[0].time[10].elementValue[0].value;


            var t7 = str.records.locations[0].location[3].weatherElement[0].time[12].elementValue[0].value;


            //氣象


            var w1 = str.records.locations[0].location[3].weatherElement[1].time[0].elementValue[0].value;

            var w2 = str.records.locations[0].location[3].weatherElement[1].time[2].elementValue[0].value;

            var w3 = str.records.locations[0].location[3].weatherElement[1].time[4].elementValue[0].value;

            var w4 = str.records.locations[0].location[3].weatherElement[1].time[6].elementValue[0].value;

            var w5 = str.records.locations[0].location[3].weatherElement[1].time[8].elementValue[0].value;

            var w6 = str.records.locations[0].location[3].weatherElement[1].time[10].elementValue[0].value;

            var w7 = str.records.locations[0].location[3].weatherElement[1].time[12].elementValue[0].value;



            //其他6天的天氣預報

            var theweatherbox = document.querySelectorAll('.theweather');

            theweatherbox[0].textContent = w2;
            theweatherbox[1].textContent = w3;
            theweatherbox[2].textContent = w4;
            theweatherbox[3].textContent = w5;
            theweatherbox[4].textContent = w6;
            theweatherbox[5].textContent = w7;


            //今天的天氣預報

            var w1box = document.querySelector('.area-weather');

            w1box.textContent = w1;


            //今天的溫度
            var t1box = document.querySelector('.area-temperature');
            t1box.textContent = t1 + '℃';


            //其他6天的溫度

            var temperaturebox = document.querySelectorAll('.temperature');


            temperaturebox[0].textContent = t2 + '℃';
            temperaturebox[1].textContent = t3 + '℃';
            temperaturebox[2].textContent = t4 + '℃';
            temperaturebox[3].textContent = t5 + '℃';
            temperaturebox[4].textContent = t6 + '℃';
            temperaturebox[5].textContent = t7 + '℃';

                
                 
        //判斷今日天氣現象代碼
        var weatherinfo =
        str.records.locations[0].location[3].weatherElement[1].time[0].elementValue[1].value;

     

        var winfo = $('#weatherimages');

        switch (weatherinfo) {

            case '01':
            case '24':
            case '25':
            case '26':

                $(winfo).attr('src', 'images/weather_01.png');

                break;

            case '02':
            case '03':
            case '04':
            case '05':
            case '06':
            case '07':
            case '27':
            case '28':

                $(winfo).attr('src', 'images/weather_02.png');

                break;

            case '08':
            case '09':
            case '10':
            case '19':
            case '20':
            case '30':
            case '37':
            case '38':
            case '39':
            case '40':
            case '41':

                $(winfo).attr('src', 'images/weather_03.png');

                break;


            case '15':
            case '16':
            case '17':
            case '18':
            case '21':
            case '22':
            case '33':
            case '34':
            case '35':
            case '36':

                $(winfo).attr('src', 'images/weather_04.png');

                break;

            case '陰短暫雨':

                $(winfo).attr('src', 'images/weather_05.png');

                break;

            case '11':
            case '12':
            case '13':
            case '14':
            case '23':
            case '29':
            case '31':
            case '32':

                $(winfo).attr('src', 'images/weather_06.png');

                break;


        }
      


        }



    }

    if (vv == 4) {
      
       swal("金門縣", "為您查詢金門縣未來一周的天氣預報！", "success");

        var xhr = new XMLHttpRequest();

        xhr.open('get', 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-11AD035A-8FDB-4AFB-BC5F-CB24CFB20141&format=JSON&elementName=T,Wx', true);

        xhr.send(null);

        xhr.onload = function () {


            var str = JSON.parse(xhr.responseText);



            //溫度
            var t1 = str.records.locations[0].location[4].weatherElement[0].time[0].elementValue[0].value;

            var t2 = str.records.locations[0].location[4].weatherElement[0].time[2].elementValue[0].value;

            var t3 = str.records.locations[0].location[4].weatherElement[0].time[4].elementValue[0].value;

            var t4 = str.records.locations[0].location[4].weatherElement[0].time[6].elementValue[0].value;


            var t5 = str.records.locations[0].location[4].weatherElement[0].time[8].elementValue[0].value;


            var t6 = str.records.locations[0].location[4].weatherElement[0].time[10].elementValue[0].value;


            var t7 = str.records.locations[0].location[4].weatherElement[0].time[12].elementValue[0].value;


            //氣象


            var w1 = str.records.locations[0].location[4].weatherElement[1].time[0].elementValue[0].value;

            var w2 = str.records.locations[0].location[4].weatherElement[1].time[2].elementValue[0].value;

            var w3 = str.records.locations[0].location[4].weatherElement[1].time[4].elementValue[0].value;

            var w4 = str.records.locations[0].location[4].weatherElement[1].time[6].elementValue[0].value;

            var w5 = str.records.locations[0].location[4].weatherElement[1].time[8].elementValue[0].value;

            var w6 = str.records.locations[0].location[4].weatherElement[1].time[10].elementValue[0].value;

            var w7 = str.records.locations[0].location[4].weatherElement[1].time[12].elementValue[0].value;



            //其他6天的天氣預報

            var theweatherbox = document.querySelectorAll('.theweather');

            theweatherbox[0].textContent = w2;
            theweatherbox[1].textContent = w3;
            theweatherbox[2].textContent = w4;
            theweatherbox[3].textContent = w5;
            theweatherbox[4].textContent = w6;
            theweatherbox[5].textContent = w7;


            //今天的天氣預報

            var w1box = document.querySelector('.area-weather');

            w1box.textContent = w1;


            //今天的溫度
            var t1box = document.querySelector('.area-temperature');
            t1box.textContent = t1 + '℃';


            //其他6天的溫度

            var temperaturebox = document.querySelectorAll('.temperature');


            temperaturebox[0].textContent = t2 + '℃';
            temperaturebox[1].textContent = t3 + '℃';
            temperaturebox[2].textContent = t4 + '℃';
            temperaturebox[3].textContent = t5 + '℃';
            temperaturebox[4].textContent = t6 + '℃';
            temperaturebox[5].textContent = t7 + '℃';

                
                 
        //判斷今日天氣現象代碼
        var weatherinfo =
        str.records.locations[0].location[4].weatherElement[1].time[0].elementValue[1].value;

      

        var winfo = $('#weatherimages');

        switch (weatherinfo) {

            case '01':
            case '24':
            case '25':
            case '26':

                $(winfo).attr('src', 'images/weather_01.png');

                break;

            case '02':
            case '03':
            case '04':
            case '05':
            case '06':
            case '07':
            case '27':
            case '28':

                $(winfo).attr('src', 'images/weather_02.png');

                break;

            case '08':
            case '09':
            case '10':
            case '19':
            case '20':
            case '30':
            case '37':
            case '38':
            case '39':
            case '40':
            case '41':

                $(winfo).attr('src', 'images/weather_03.png');

                break;


            case '15':
            case '16':
            case '17':
            case '18':
            case '21':
            case '22':
            case '33':
            case '34':
            case '35':
            case '36':

                $(winfo).attr('src', 'images/weather_04.png');

                break;

            case '陰短暫雨':

                $(winfo).attr('src', 'images/weather_05.png');

                break;

            case '11':
            case '12':
            case '13':
            case '14':
            case '23':
            case '29':
            case '31':
            case '32':

                $(winfo).attr('src', 'images/weather_06.png');

                break;


        }
      


        }


    }

    if (vv == 5) {
     
        swal("宜蘭縣", "為您查詢宜蘭縣未來一周的天氣預報！", "success");


        var xhr = new XMLHttpRequest();

        xhr.open('get', 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-11AD035A-8FDB-4AFB-BC5F-CB24CFB20141&format=JSON&elementName=T,Wx', true);

        xhr.send(null);

        xhr.onload = function () {

            var str = JSON.parse(xhr.responseText);


            //溫度
            var t1 = str.records.locations[0].location[5].weatherElement[0].time[0].elementValue[0].value;

            var t2 = str.records.locations[0].location[5].weatherElement[0].time[2].elementValue[0].value;

            var t3 = str.records.locations[0].location[5].weatherElement[0].time[4].elementValue[0].value;

            var t4 = str.records.locations[0].location[5].weatherElement[0].time[6].elementValue[0].value;


            var t5 = str.records.locations[0].location[5].weatherElement[0].time[8].elementValue[0].value;


            var t6 = str.records.locations[0].location[5].weatherElement[0].time[10].elementValue[0].value;


            var t7 = str.records.locations[0].location[5].weatherElement[0].time[12].elementValue[0].value;


            //氣象


            var w1 = str.records.locations[0].location[5].weatherElement[1].time[0].elementValue[0].value;

            var w2 = str.records.locations[0].location[5].weatherElement[1].time[2].elementValue[0].value;

            var w3 = str.records.locations[0].location[5].weatherElement[1].time[4].elementValue[0].value;

            var w4 = str.records.locations[0].location[5].weatherElement[1].time[6].elementValue[0].value;

            var w5 = str.records.locations[0].location[5].weatherElement[1].time[8].elementValue[0].value;

            var w6 = str.records.locations[0].location[5].weatherElement[1].time[10].elementValue[0].value;

            var w7 = str.records.locations[0].location[5].weatherElement[1].time[12].elementValue[0].value;



            //其他6天的天氣預報

            var theweatherbox = document.querySelectorAll('.theweather');

            theweatherbox[0].textContent = w2;
            theweatherbox[1].textContent = w3;
            theweatherbox[2].textContent = w4;
            theweatherbox[3].textContent = w5;
            theweatherbox[4].textContent = w6;
            theweatherbox[5].textContent = w7;


            //今天的天氣預報

            var w1box = document.querySelector('.area-weather');

            w1box.textContent = w1;


            //今天的溫度
            var t1box = document.querySelector('.area-temperature');
            t1box.textContent = t1 + '℃';


            //其他6天的溫度

            var temperaturebox = document.querySelectorAll('.temperature');


            temperaturebox[0].textContent = t2 + '℃';
            temperaturebox[1].textContent = t3 + '℃';
            temperaturebox[2].textContent = t4 + '℃';
            temperaturebox[3].textContent = t5 + '℃';
            temperaturebox[4].textContent = t6 + '℃';
            temperaturebox[5].textContent = t7 + '℃';
            
            
                
                 
        //判斷今日天氣現象代碼
        var weatherinfo =
        str.records.locations[0].location[5].weatherElement[1].time[0].elementValue[1].value;

       
        var winfo = $('#weatherimages');

        switch (weatherinfo) {

            case '01':
            case '24':
            case '25':
            case '26':

                $(winfo).attr('src', 'images/weather_01.png');

                break;

            case '02':
            case '03':
            case '04':
            case '05':
            case '06':
            case '07':
            case '27':
            case '28':

                $(winfo).attr('src', 'images/weather_02.png');

                break;

            case '08':
            case '09':
            case '10':
            case '19':
            case '20':
            case '30':
            case '37':
            case '38':
            case '39':
            case '40':
            case '41':

                $(winfo).attr('src', 'images/weather_03.png');

                break;


            case '15':
            case '16':
            case '17':
            case '18':
            case '21':
            case '22':
            case '33':
            case '34':
            case '35':
            case '36':

                $(winfo).attr('src', 'images/weather_04.png');

                break;

            case '陰短暫雨':

                $(winfo).attr('src', 'images/weather_05.png');

                break;

            case '11':
            case '12':
            case '13':
            case '14':
            case '23':
            case '29':
            case '31':
            case '32':

                $(winfo).attr('src', 'images/weather_06.png');

                break;


        }
      

            
            


        }





    }

    if (vv == 6) {
        
           swal("屏東縣", "為您查詢屏東縣未來一周的天氣預報！", "success");
     


        var xhr = new XMLHttpRequest();

        xhr.open('get', 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-11AD035A-8FDB-4AFB-BC5F-CB24CFB20141&format=JSON&elementName=T,Wx', true);

        xhr.send(null);

        xhr.onload = function () {



            var str = JSON.parse(xhr.responseText);



            //溫度
            var t1 = str.records.locations[0].location[6].weatherElement[0].time[0].elementValue[0].value;

            var t2 = str.records.locations[0].location[6].weatherElement[0].time[2].elementValue[0].value;

            var t3 = str.records.locations[0].location[6].weatherElement[0].time[4].elementValue[0].value;

            var t4 = str.records.locations[0].location[6].weatherElement[0].time[6].elementValue[0].value;


            var t5 = str.records.locations[0].location[6].weatherElement[0].time[8].elementValue[0].value;


            var t6 = str.records.locations[0].location[6].weatherElement[0].time[10].elementValue[0].value;


            var t7 = str.records.locations[0].location[6].weatherElement[0].time[12].elementValue[0].value;


            //氣象


            var w1 = str.records.locations[0].location[6].weatherElement[1].time[0].elementValue[0].value;

            var w2 = str.records.locations[0].location[6].weatherElement[1].time[2].elementValue[0].value;

            var w3 = str.records.locations[0].location[6].weatherElement[1].time[4].elementValue[0].value;

            var w4 = str.records.locations[0].location[6].weatherElement[1].time[6].elementValue[0].value;

            var w5 = str.records.locations[0].location[6].weatherElement[1].time[8].elementValue[0].value;

            var w6 = str.records.locations[0].location[6].weatherElement[1].time[10].elementValue[0].value;

            var w7 = str.records.locations[0].location[6].weatherElement[1].time[12].elementValue[0].value;



            //其他6天的天氣預報

            var theweatherbox = document.querySelectorAll('.theweather');

            theweatherbox[0].textContent = w2;
            theweatherbox[1].textContent = w3;
            theweatherbox[2].textContent = w4;
            theweatherbox[3].textContent = w5;
            theweatherbox[4].textContent = w6;
            theweatherbox[5].textContent = w7;


            //今天的天氣預報

            var w1box = document.querySelector('.area-weather');

            w1box.textContent = w1;


            //今天的溫度
            var t1box = document.querySelector('.area-temperature');
            t1box.textContent = t1 + '℃';


            //其他6天的溫度

            var temperaturebox = document.querySelectorAll('.temperature');


            temperaturebox[0].textContent = t2 + '℃';
            temperaturebox[1].textContent = t3 + '℃';
            temperaturebox[2].textContent = t4 + '℃';
            temperaturebox[3].textContent = t5 + '℃';
            temperaturebox[4].textContent = t6 + '℃';
            temperaturebox[5].textContent = t7 + '℃';

                
                 
        //判斷今日天氣現象代碼
        var weatherinfo =
        str.records.locations[0].location[6].weatherElement[1].time[0].elementValue[1].value;

     

        var winfo = $('#weatherimages');

        switch (weatherinfo) {

            case '01':
            case '24':
            case '25':
            case '26':

                $(winfo).attr('src', 'images/weather_01.png');

                break;

            case '02':
            case '03':
            case '04':
            case '05':
            case '06':
            case '07':
            case '27':
            case '28':

                $(winfo).attr('src', 'images/weather_02.png');

                break;

            case '08':
            case '09':
            case '10':
            case '19':
            case '20':
            case '30':
            case '37':
            case '38':
            case '39':
            case '40':
            case '41':

                $(winfo).attr('src', 'images/weather_03.png');

                break;


            case '15':
            case '16':
            case '17':
            case '18':
            case '21':
            case '22':
            case '33':
            case '34':
            case '35':
            case '36':

                $(winfo).attr('src', 'images/weather_04.png');

                break;

            case '陰短暫雨':

                $(winfo).attr('src', 'images/weather_05.png');

                break;

            case '11':
            case '12':
            case '13':
            case '14':
            case '23':
            case '29':
            case '31':
            case '32':

                $(winfo).attr('src', 'images/weather_06.png');

                break;


        }
      


        }





    }

    if (vv == 7) {
     
        
   swal("苗栗縣", "為您查詢苗栗縣未來一周的天氣預報！", "success");


        var xhr = new XMLHttpRequest();

        xhr.open('get', 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-11AD035A-8FDB-4AFB-BC5F-CB24CFB20141&format=JSON&elementName=T,Wx', true);

        xhr.send(null);

        xhr.onload = function () {



            var str = JSON.parse(xhr.responseText);



            //溫度
            var t1 = str.records.locations[0].location[7].weatherElement[0].time[0].elementValue[0].value;

            var t2 = str.records.locations[0].location[7].weatherElement[0].time[2].elementValue[0].value;

            var t3 = str.records.locations[0].location[7].weatherElement[0].time[4].elementValue[0].value;

            var t4 = str.records.locations[0].location[7].weatherElement[0].time[6].elementValue[0].value;


            var t5 = str.records.locations[0].location[7].weatherElement[0].time[8].elementValue[0].value;


            var t6 = str.records.locations[0].location[7].weatherElement[0].time[10].elementValue[0].value;


            var t7 = str.records.locations[0].location[7].weatherElement[0].time[12].elementValue[0].value;


            //氣象


            var w1 = str.records.locations[0].location[7].weatherElement[1].time[0].elementValue[0].value;

            var w2 = str.records.locations[0].location[7].weatherElement[1].time[2].elementValue[0].value;

            var w3 = str.records.locations[0].location[7].weatherElement[1].time[4].elementValue[0].value;

            var w4 = str.records.locations[0].location[7].weatherElement[1].time[6].elementValue[0].value;

            var w5 = str.records.locations[0].location[7].weatherElement[1].time[8].elementValue[0].value;

            var w6 = str.records.locations[0].location[7].weatherElement[1].time[10].elementValue[0].value;

            var w7 = str.records.locations[0].location[7].weatherElement[1].time[12].elementValue[0].value;



            //其他6天的天氣預報

            var theweatherbox = document.querySelectorAll('.theweather');

            theweatherbox[0].textContent = w2;
            theweatherbox[1].textContent = w3;
            theweatherbox[2].textContent = w4;
            theweatherbox[3].textContent = w5;
            theweatherbox[4].textContent = w6;
            theweatherbox[5].textContent = w7;


            //今天的天氣預報

            var w1box = document.querySelector('.area-weather');

            w1box.textContent = w1;


            //今天的溫度
            var t1box = document.querySelector('.area-temperature');
            t1box.textContent = t1 + '℃';


            //其他6天的溫度

            var temperaturebox = document.querySelectorAll('.temperature');


            temperaturebox[0].textContent = t2 + '℃';
            temperaturebox[1].textContent = t3 + '℃';
            temperaturebox[2].textContent = t4 + '℃';
            temperaturebox[3].textContent = t5 + '℃';
            temperaturebox[4].textContent = t6 + '℃';
            temperaturebox[5].textContent = t7 + '℃';

                
                 
        //判斷今日天氣現象代碼
        var weatherinfo =
        str.records.locations[0].location[7].weatherElement[1].time[0].elementValue[1].value;

      

        var winfo = $('#weatherimages');

        switch (weatherinfo) {

            case '01':
            case '24':
            case '25':
            case '26':

                $(winfo).attr('src', 'images/weather_01.png');

                break;

            case '02':
            case '03':
            case '04':
            case '05':
            case '06':
            case '07':
            case '27':
            case '28':

                $(winfo).attr('src', 'images/weather_02.png');

                break;

            case '08':
            case '09':
            case '10':
            case '19':
            case '20':
            case '30':
            case '37':
            case '38':
            case '39':
            case '40':
            case '41':

                $(winfo).attr('src', 'images/weather_03.png');

                break;


            case '15':
            case '16':
            case '17':
            case '18':
            case '21':
            case '22':
            case '33':
            case '34':
            case '35':
            case '36':

                $(winfo).attr('src', 'images/weather_04.png');

                break;

            case '陰短暫雨':

                $(winfo).attr('src', 'images/weather_05.png');

                break;

            case '11':
            case '12':
            case '13':
            case '14':
            case '23':
            case '29':
            case '31':
            case '32':

                $(winfo).attr('src', 'images/weather_06.png');

                break;


        }
      


        }





    }

    if (vv == 8) {

     
   swal("澎湖縣", "為您查詢澎湖縣未來一周的天氣預報！", "success");


        var xhr = new XMLHttpRequest();

        xhr.open('get', 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-11AD035A-8FDB-4AFB-BC5F-CB24CFB20141&format=JSON&elementName=T,Wx', true);

        xhr.send(null);

        xhr.onload = function () {



            var str = JSON.parse(xhr.responseText);



            //溫度
            var t1 = str.records.locations[0].location[8].weatherElement[0].time[0].elementValue[0].value;

            var t2 = str.records.locations[0].location[8].weatherElement[0].time[2].elementValue[0].value;

            var t3 = str.records.locations[0].location[8].weatherElement[0].time[4].elementValue[0].value;

            var t4 = str.records.locations[0].location[8].weatherElement[0].time[6].elementValue[0].value;


            var t5 = str.records.locations[0].location[8].weatherElement[0].time[8].elementValue[0].value;


            var t6 = str.records.locations[0].location[8].weatherElement[0].time[10].elementValue[0].value;


            var t7 = str.records.locations[0].location[8].weatherElement[0].time[12].elementValue[0].value;


            //氣象


            var w1 = str.records.locations[0].location[8].weatherElement[1].time[0].elementValue[0].value;

            var w2 = str.records.locations[0].location[8].weatherElement[1].time[2].elementValue[0].value;

            var w3 = str.records.locations[0].location[8].weatherElement[1].time[4].elementValue[0].value;

            var w4 = str.records.locations[0].location[8].weatherElement[1].time[6].elementValue[0].value;

            var w5 = str.records.locations[0].location[8].weatherElement[1].time[8].elementValue[0].value;

            var w6 = str.records.locations[0].location[8].weatherElement[1].time[10].elementValue[0].value;

            var w7 = str.records.locations[0].location[8].weatherElement[1].time[12].elementValue[0].value;



            //其他6天的天氣預報

            var theweatherbox = document.querySelectorAll('.theweather');

            theweatherbox[0].textContent = w2;
            theweatherbox[1].textContent = w3;
            theweatherbox[2].textContent = w4;
            theweatherbox[3].textContent = w5;
            theweatherbox[4].textContent = w6;
            theweatherbox[5].textContent = w7;


            //今天的天氣預報

            var w1box = document.querySelector('.area-weather');

            w1box.textContent = w1;


            //今天的溫度
            var t1box = document.querySelector('.area-temperature');
            t1box.textContent = t1 + '℃';


            //其他6天的溫度

            var temperaturebox = document.querySelectorAll('.temperature');


            temperaturebox[0].textContent = t2 + '℃';
            temperaturebox[1].textContent = t3 + '℃';
            temperaturebox[2].textContent = t4 + '℃';
            temperaturebox[3].textContent = t5 + '℃';
            temperaturebox[4].textContent = t6 + '℃';
            temperaturebox[5].textContent = t7 + '℃';

                
                 
        //判斷今日天氣現象代碼
        var weatherinfo =
        str.records.locations[0].location[8].weatherElement[1].time[0].elementValue[1].value;

    

        var winfo = $('#weatherimages');

        switch (weatherinfo) {

            case '01':
            case '24':
            case '25':
            case '26':

                $(winfo).attr('src', 'images/weather_01.png');

                break;

            case '02':
            case '03':
            case '04':
            case '05':
            case '06':
            case '07':
            case '27':
            case '28':

                $(winfo).attr('src', 'images/weather_02.png');

                break;

            case '08':
            case '09':
            case '10':
            case '19':
            case '20':
            case '30':
            case '37':
            case '38':
            case '39':
            case '40':
            case '41':

                $(winfo).attr('src', 'images/weather_03.png');

                break;


            case '15':
            case '16':
            case '17':
            case '18':
            case '21':
            case '22':
            case '33':
            case '34':
            case '35':
            case '36':

                $(winfo).attr('src', 'images/weather_04.png');

                break;

            case '陰短暫雨':

                $(winfo).attr('src', 'images/weather_05.png');

                break;

            case '11':
            case '12':
            case '13':
            case '14':
            case '23':
            case '29':
            case '31':
            case '32':

                $(winfo).attr('src', 'images/weather_06.png');

                break;


        }
      


        }


    }

    if (vv == 9) {

      
   swal("台北市", "為您查詢台北市未來一周的天氣預報！", "success");


        var xhr = new XMLHttpRequest();

        xhr.open('get', 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-11AD035A-8FDB-4AFB-BC5F-CB24CFB20141&format=JSON&elementName=T,Wx', true);

        xhr.send(null);

        xhr.onload = function () {



            var str = JSON.parse(xhr.responseText);



            //溫度
            var t1 = str.records.locations[0].location[9].weatherElement[0].time[0].elementValue[0].value;

            var t2 = str.records.locations[0].location[9].weatherElement[0].time[2].elementValue[0].value;

            var t3 = str.records.locations[0].location[9].weatherElement[0].time[4].elementValue[0].value;

            var t4 = str.records.locations[0].location[9].weatherElement[0].time[6].elementValue[0].value;


            var t5 = str.records.locations[0].location[9].weatherElement[0].time[8].elementValue[0].value;


            var t6 = str.records.locations[0].location[9].weatherElement[0].time[10].elementValue[0].value;


            var t7 = str.records.locations[0].location[9].weatherElement[0].time[12].elementValue[0].value;


            //氣象


            var w1 = str.records.locations[0].location[9].weatherElement[1].time[0].elementValue[0].value;

            var w2 = str.records.locations[0].location[9].weatherElement[1].time[2].elementValue[0].value;

            var w3 = str.records.locations[0].location[9].weatherElement[1].time[4].elementValue[0].value;

            var w4 = str.records.locations[0].location[9].weatherElement[1].time[6].elementValue[0].value;

            var w5 = str.records.locations[0].location[9].weatherElement[1].time[8].elementValue[0].value;

            var w6 = str.records.locations[0].location[9].weatherElement[1].time[10].elementValue[0].value;

            var w7 = str.records.locations[0].location[9].weatherElement[1].time[12].elementValue[0].value;



            //其他6天的天氣預報

            var theweatherbox = document.querySelectorAll('.theweather');

            theweatherbox[0].textContent = w2;
            theweatherbox[1].textContent = w3;
            theweatherbox[2].textContent = w4;
            theweatherbox[3].textContent = w5;
            theweatherbox[4].textContent = w6;
            theweatherbox[5].textContent = w7;


            //今天的天氣預報

            var w1box = document.querySelector('.area-weather');

            w1box.textContent = w1;


            //今天的溫度
            var t1box = document.querySelector('.area-temperature');
            t1box.textContent = t1 + '℃';


            //其他6天的溫度

            var temperaturebox = document.querySelectorAll('.temperature');


            temperaturebox[0].textContent = t2 + '℃';
            temperaturebox[1].textContent = t3 + '℃';
            temperaturebox[2].textContent = t4 + '℃';
            temperaturebox[3].textContent = t5 + '℃';
            temperaturebox[4].textContent = t6 + '℃';
            temperaturebox[5].textContent = t7 + '℃';

                
                 
        //判斷今日天氣現象代碼
        var weatherinfo =
        str.records.locations[0].location[9].weatherElement[1].time[0].elementValue[1].value;

       

        var winfo = $('#weatherimages');

        switch (weatherinfo) {

            case '01':
            case '24':
            case '25':
            case '26':

                $(winfo).attr('src', 'images/weather_01.png');

                break;

            case '02':
            case '03':
            case '04':
            case '05':
            case '06':
            case '07':
            case '27':
            case '28':

                $(winfo).attr('src', 'images/weather_02.png');

                break;

            case '08':
            case '09':
            case '10':
            case '19':
            case '20':
            case '30':
            case '37':
            case '38':
            case '39':
            case '40':
            case '41':

                $(winfo).attr('src', 'images/weather_03.png');

                break;


            case '15':
            case '16':
            case '17':
            case '18':
            case '21':
            case '22':
            case '33':
            case '34':
            case '35':
            case '36':

                $(winfo).attr('src', 'images/weather_04.png');

                break;

            case '陰短暫雨':

                $(winfo).attr('src', 'images/weather_05.png');

                break;

            case '11':
            case '12':
            case '13':
            case '14':
            case '23':
            case '29':
            case '31':
            case '32':

                $(winfo).attr('src', 'images/weather_06.png');

                break;


        }
      


        }





    }

    if (vv == 10) {

      
   swal("新竹縣", "為您查詢新竹縣未來一周的天氣預報！", "success");


        var xhr = new XMLHttpRequest();

        xhr.open('get', 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-11AD035A-8FDB-4AFB-BC5F-CB24CFB20141&format=JSON&elementName=T,Wx', true);

        xhr.send(null);

        xhr.onload = function () {



            var str = JSON.parse(xhr.responseText);



            //溫度
            var t1 = str.records.locations[0].location[10].weatherElement[0].time[0].elementValue[0].value;

            var t2 = str.records.locations[0].location[10].weatherElement[0].time[2].elementValue[0].value;

            var t3 = str.records.locations[0].location[10].weatherElement[0].time[4].elementValue[0].value;

            var t4 = str.records.locations[0].location[10].weatherElement[0].time[6].elementValue[0].value;


            var t5 = str.records.locations[0].location[10].weatherElement[0].time[8].elementValue[0].value;


            var t6 = str.records.locations[0].location[10].weatherElement[0].time[10].elementValue[0].value;


            var t7 = str.records.locations[0].location[10].weatherElement[0].time[12].elementValue[0].value;


            //氣象


            var w1 = str.records.locations[0].location[10].weatherElement[1].time[0].elementValue[0].value;

            var w2 = str.records.locations[0].location[10].weatherElement[1].time[2].elementValue[0].value;

            var w3 = str.records.locations[0].location[10].weatherElement[1].time[4].elementValue[0].value;

            var w4 = str.records.locations[0].location[10].weatherElement[1].time[6].elementValue[0].value;

            var w5 = str.records.locations[0].location[10].weatherElement[1].time[8].elementValue[0].value;

            var w6 = str.records.locations[0].location[10].weatherElement[1].time[10].elementValue[0].value;

            var w7 = str.records.locations[0].location[10].weatherElement[1].time[12].elementValue[0].value;



            //其他6天的天氣預報

            var theweatherbox = document.querySelectorAll('.theweather');

            theweatherbox[0].textContent = w2;
            theweatherbox[1].textContent = w3;
            theweatherbox[2].textContent = w4;
            theweatherbox[3].textContent = w5;
            theweatherbox[4].textContent = w6;
            theweatherbox[5].textContent = w7;


            //今天的天氣預報

            var w1box = document.querySelector('.area-weather');

            w1box.textContent = w1;


            //今天的溫度
            var t1box = document.querySelector('.area-temperature');
            t1box.textContent = t1 + '℃';


            //其他6天的溫度

            var temperaturebox = document.querySelectorAll('.temperature');


            temperaturebox[0].textContent = t2 + '℃';
            temperaturebox[1].textContent = t3 + '℃';
            temperaturebox[2].textContent = t4 + '℃';
            temperaturebox[3].textContent = t5 + '℃';
            temperaturebox[4].textContent = t6 + '℃';
            temperaturebox[5].textContent = t7 + '℃';


                          
        //判斷今日天氣現象代碼
        var weatherinfo =
        str.records.locations[0].location[10].weatherElement[1].time[0].elementValue[1].value;

       

        var winfo = $('#weatherimages');

        switch (weatherinfo) {

            case '01':
            case '24':
            case '25':
            case '26':

                $(winfo).attr('src', 'images/weather_01.png');

                break;

            case '02':
            case '03':
            case '04':
            case '05':
            case '06':
            case '07':
            case '27':
            case '28':

                $(winfo).attr('src', 'images/weather_02.png');

                break;

            case '08':
            case '09':
            case '10':
            case '19':
            case '20':
            case '30':
            case '37':
            case '38':
            case '39':
            case '40':
            case '41':

                $(winfo).attr('src', 'images/weather_03.png');

                break;


            case '15':
            case '16':
            case '17':
            case '18':
            case '21':
            case '22':
            case '33':
            case '34':
            case '35':
            case '36':

                $(winfo).attr('src', 'images/weather_04.png');

                break;

            case '陰短暫雨':

                $(winfo).attr('src', 'images/weather_05.png');

                break;

            case '11':
            case '12':
            case '13':
            case '14':
            case '23':
            case '29':
            case '31':
            case '32':

                $(winfo).attr('src', 'images/weather_06.png');

                break;


        }
      

        }





    }

    if (vv == 11) {

      
        
   swal("花蓮縣", "為您查詢花蓮縣未來一周的天氣預報！", "success");


        var xhr = new XMLHttpRequest();

        xhr.open('get', 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-11AD035A-8FDB-4AFB-BC5F-CB24CFB20141&format=JSON&elementName=T,Wx', true);

        xhr.send(null);

        xhr.onload = function () {



            var str = JSON.parse(xhr.responseText);



            //溫度
            var t1 = str.records.locations[0].location[11].weatherElement[0].time[0].elementValue[0].value;

            var t2 = str.records.locations[0].location[11].weatherElement[0].time[2].elementValue[0].value;

            var t3 = str.records.locations[0].location[11].weatherElement[0].time[4].elementValue[0].value;

            var t4 = str.records.locations[0].location[11].weatherElement[0].time[6].elementValue[0].value;


            var t5 = str.records.locations[0].location[11].weatherElement[0].time[8].elementValue[0].value;


            var t6 = str.records.locations[0].location[11].weatherElement[0].time[10].elementValue[0].value;


            var t7 = str.records.locations[0].location[11].weatherElement[0].time[12].elementValue[0].value;


            //氣象


            var w1 = str.records.locations[0].location[11].weatherElement[1].time[0].elementValue[0].value;

            var w2 = str.records.locations[0].location[11].weatherElement[1].time[2].elementValue[0].value;

            var w3 = str.records.locations[0].location[11].weatherElement[1].time[4].elementValue[0].value;

            var w4 = str.records.locations[0].location[11].weatherElement[1].time[6].elementValue[0].value;

            var w5 = str.records.locations[0].location[11].weatherElement[1].time[8].elementValue[0].value;

            var w6 = str.records.locations[0].location[11].weatherElement[1].time[10].elementValue[0].value;

            var w7 = str.records.locations[0].location[11].weatherElement[1].time[12].elementValue[0].value;



            //其他6天的天氣預報

            var theweatherbox = document.querySelectorAll('.theweather');

            theweatherbox[0].textContent = w2;
            theweatherbox[1].textContent = w3;
            theweatherbox[2].textContent = w4;
            theweatherbox[3].textContent = w5;
            theweatherbox[4].textContent = w6;
            theweatherbox[5].textContent = w7;


            //今天的天氣預報
            var w1box = document.querySelector('.area-weather');

            w1box.textContent = w1;


            //今天的溫度
            var t1box = document.querySelector('.area-temperature');
            t1box.textContent = t1 + '℃';


            //其他6天的溫度

            var temperaturebox = document.querySelectorAll('.temperature');


            temperaturebox[0].textContent = t2 + '℃';
            temperaturebox[1].textContent = t3 + '℃';
            temperaturebox[2].textContent = t4 + '℃';
            temperaturebox[3].textContent = t5 + '℃';
            temperaturebox[4].textContent = t6 + '℃';
            temperaturebox[5].textContent = t7 + '℃';

                          
        //判斷今日天氣現象代碼
        var weatherinfo =
        str.records.locations[0].location[11].weatherElement[1].time[0].elementValue[1].value;

       

        var winfo = $('#weatherimages');

        switch (weatherinfo) {

            case '01':
            case '24':
            case '25':
            case '26':

                $(winfo).attr('src', 'images/weather_01.png');

                break;

            case '02':
            case '03':
            case '04':
            case '05':
            case '06':
            case '07':
            case '27':
            case '28':

                $(winfo).attr('src', 'images/weather_02.png');

                break;

            case '08':
            case '09':
            case '10':
            case '19':
            case '20':
            case '30':
            case '37':
            case '38':
            case '39':
            case '40':
            case '41':

                $(winfo).attr('src', 'images/weather_03.png');

                break;


            case '15':
            case '16':
            case '17':
            case '18':
            case '21':
            case '22':
            case '33':
            case '34':
            case '35':
            case '36':

                $(winfo).attr('src', 'images/weather_04.png');

                break;

            case '陰短暫雨':

                $(winfo).attr('src', 'images/weather_05.png');

                break;

            case '11':
            case '12':
            case '13':
            case '14':
            case '23':
            case '29':
            case '31':
            case '32':

                $(winfo).attr('src', 'images/weather_06.png');

                break;


        }
      

        }





    }

    if (vv == 12) {

    

   swal("高雄市", "為您查詢高雄市未來一周的天氣預報！", "success");

        var xhr = new XMLHttpRequest();

        xhr.open('get', 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-11AD035A-8FDB-4AFB-BC5F-CB24CFB20141&format=JSON&elementName=T,Wx', true);

        xhr.send(null);

        xhr.onload = function () {



            var str = JSON.parse(xhr.responseText);



            //溫度
            var t1 = str.records.locations[0].location[12].weatherElement[0].time[0].elementValue[0].value;

            var t2 = str.records.locations[0].location[12].weatherElement[0].time[2].elementValue[0].value;

            var t3 = str.records.locations[0].location[12].weatherElement[0].time[4].elementValue[0].value;

            var t4 = str.records.locations[0].location[12].weatherElement[0].time[6].elementValue[0].value;


            var t5 = str.records.locations[0].location[12].weatherElement[0].time[8].elementValue[0].value;


            var t6 = str.records.locations[0].location[12].weatherElement[0].time[10].elementValue[0].value;


            var t7 = str.records.locations[0].location[12].weatherElement[0].time[12].elementValue[0].value;


            //氣象


            var w1 = str.records.locations[0].location[12].weatherElement[1].time[0].elementValue[0].value;

            var w2 = str.records.locations[0].location[12].weatherElement[1].time[2].elementValue[0].value;

            var w3 = str.records.locations[0].location[12].weatherElement[1].time[4].elementValue[0].value;

            var w4 = str.records.locations[0].location[12].weatherElement[1].time[6].elementValue[0].value;

            var w5 = str.records.locations[0].location[12].weatherElement[1].time[8].elementValue[0].value;

            var w6 = str.records.locations[0].location[12].weatherElement[1].time[10].elementValue[0].value;

            var w7 = str.records.locations[0].location[12].weatherElement[1].time[12].elementValue[0].value;



            //其他6天的天氣預報

            var theweatherbox = document.querySelectorAll('.theweather');

            theweatherbox[0].textContent = w2;
            theweatherbox[1].textContent = w3;
            theweatherbox[2].textContent = w4;
            theweatherbox[3].textContent = w5;
            theweatherbox[4].textContent = w6;
            theweatherbox[5].textContent = w7;


            //今天的天氣預報

            var w1box = document.querySelector('.area-weather');

            w1box.textContent = w1;


            //今天的溫度
            var t1box = document.querySelector('.area-temperature');
            t1box.textContent = t1 + '℃';


            //其他6天的溫度

            var temperaturebox = document.querySelectorAll('.temperature');


            temperaturebox[0].textContent = t2 + '℃';
            temperaturebox[1].textContent = t3 + '℃';
            temperaturebox[2].textContent = t4 + '℃';
            temperaturebox[3].textContent = t5 + '℃';
            temperaturebox[4].textContent = t6 + '℃';
            temperaturebox[5].textContent = t7 + '℃';

                         
        //判斷今日天氣現象代碼
        var weatherinfo =
        str.records.locations[0].location[12].weatherElement[1].time[0].elementValue[1].value;

       

        var winfo = $('#weatherimages');

        switch (weatherinfo) {

            case '01':
            case '24':
            case '25':
            case '26':

                $(winfo).attr('src', 'images/weather_01.png');

                break;

            case '02':
            case '03':
            case '04':
            case '05':
            case '06':
            case '07':
            case '27':
            case '28':

                $(winfo).attr('src', 'images/weather_02.png');

                break;

            case '08':
            case '09':
            case '10':
            case '19':
            case '20':
            case '30':
            case '37':
            case '38':
            case '39':
            case '40':
            case '41':

                $(winfo).attr('src', 'images/weather_03.png');

                break;


            case '15':
            case '16':
            case '17':
            case '18':
            case '21':
            case '22':
            case '33':
            case '34':
            case '35':
            case '36':

                $(winfo).attr('src', 'images/weather_04.png');

                break;

            case '陰短暫雨':

                $(winfo).attr('src', 'images/weather_05.png');

                break;

            case '11':
            case '12':
            case '13':
            case '14':
            case '23':
            case '29':
            case '31':
            case '32':

                $(winfo).attr('src', 'images/weather_06.png');

                break;


        }
      

        }




    }

    if (vv == 13) {

     

   swal("彰化縣", "為您查詢彰化縣未來一周的天氣預報！", "success");

        var xhr = new XMLHttpRequest();

        xhr.open('get', 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-11AD035A-8FDB-4AFB-BC5F-CB24CFB20141&format=JSON&elementName=T,Wx', true);

        xhr.send(null);

        xhr.onload = function () {



            var str = JSON.parse(xhr.responseText);



            //溫度
            var t1 = str.records.locations[0].location[13].weatherElement[0].time[0].elementValue[0].value;

            var t2 = str.records.locations[0].location[13].weatherElement[0].time[2].elementValue[0].value;

            var t3 = str.records.locations[0].location[13].weatherElement[0].time[4].elementValue[0].value;

            var t4 = str.records.locations[0].location[13].weatherElement[0].time[6].elementValue[0].value;


            var t5 = str.records.locations[0].location[13].weatherElement[0].time[8].elementValue[0].value;


            var t6 = str.records.locations[0].location[13].weatherElement[0].time[10].elementValue[0].value;


            var t7 = str.records.locations[0].location[13].weatherElement[0].time[12].elementValue[0].value;


            //氣象


            var w1 = str.records.locations[0].location[13].weatherElement[1].time[0].elementValue[0].value;

            var w2 = str.records.locations[0].location[13].weatherElement[1].time[2].elementValue[0].value;

            var w3 = str.records.locations[0].location[13].weatherElement[1].time[4].elementValue[0].value;

            var w4 = str.records.locations[0].location[13].weatherElement[1].time[6].elementValue[0].value;

            var w5 = str.records.locations[0].location[13].weatherElement[1].time[8].elementValue[0].value;

            var w6 = str.records.locations[0].location[13].weatherElement[1].time[10].elementValue[0].value;

            var w7 = str.records.locations[0].location[13].weatherElement[1].time[12].elementValue[0].value;



            //其他6天的天氣預報

            var theweatherbox = document.querySelectorAll('.theweather');

            theweatherbox[0].textContent = w2;
            theweatherbox[1].textContent = w3;
            theweatherbox[2].textContent = w4;
            theweatherbox[3].textContent = w5;
            theweatherbox[4].textContent = w6;
            theweatherbox[5].textContent = w7;



            //今天的天氣預報

            var w1box = document.querySelector('.area-weather');

            w1box.textContent = w1;


            //今天的溫度
            var t1box = document.querySelector('.area-temperature');
            t1box.textContent = t1 + '℃';


            //其他6天的溫度

            var temperaturebox = document.querySelectorAll('.temperature');


            temperaturebox[0].textContent = t2 + '℃';
            temperaturebox[1].textContent = t3 + '℃';
            temperaturebox[2].textContent = t4 + '℃';
            temperaturebox[3].textContent = t5 + '℃';
            temperaturebox[4].textContent = t6 + '℃';
            temperaturebox[5].textContent = t7 + '℃';

                         
        //判斷今日天氣現象代碼
        var weatherinfo =
        str.records.locations[0].location[13].weatherElement[1].time[0].elementValue[1].value;

       

        var winfo = $('#weatherimages');

        switch (weatherinfo) {

            case '01':
            case '24':
            case '25':
            case '26':

                $(winfo).attr('src', 'images/weather_01.png');

                break;

            case '02':
            case '03':
            case '04':
            case '05':
            case '06':
            case '07':
            case '27':
            case '28':

                $(winfo).attr('src', 'images/weather_02.png');

                break;

            case '08':
            case '09':
            case '10':
            case '19':
            case '20':
            case '30':
            case '37':
            case '38':
            case '39':
            case '40':
            case '41':

                $(winfo).attr('src', 'images/weather_03.png');

                break;


            case '15':
            case '16':
            case '17':
            case '18':
            case '21':
            case '22':
            case '33':
            case '34':
            case '35':
            case '36':

                $(winfo).attr('src', 'images/weather_04.png');

                break;

            case '陰短暫雨':

                $(winfo).attr('src', 'images/weather_05.png');

                break;

            case '11':
            case '12':
            case '13':
            case '14':
            case '23':
            case '29':
            case '31':
            case '32':

                $(winfo).attr('src', 'images/weather_06.png');

                break;


        }
      

        }





    }

    if (vv == 14) {

   

   swal("新竹市", "為您查詢新竹市未來一周的天氣預報！", "success");

        var xhr = new XMLHttpRequest();

        xhr.open('get', 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-11AD035A-8FDB-4AFB-BC5F-CB24CFB20141&format=JSON&elementName=T,Wx', true);

        xhr.send(null);

        xhr.onload = function () {



            var str = JSON.parse(xhr.responseText);



            //溫度
            var t1 = str.records.locations[0].location[14].weatherElement[0].time[0].elementValue[0].value;

            var t2 = str.records.locations[0].location[14].weatherElement[0].time[2].elementValue[0].value;

            var t3 = str.records.locations[0].location[14].weatherElement[0].time[4].elementValue[0].value;

            var t4 = str.records.locations[0].location[14].weatherElement[0].time[6].elementValue[0].value;


            var t5 = str.records.locations[0].location[14].weatherElement[0].time[8].elementValue[0].value;


            var t6 = str.records.locations[0].location[14].weatherElement[0].time[10].elementValue[0].value;


            var t7 = str.records.locations[0].location[14].weatherElement[0].time[12].elementValue[0].value;


            //氣象


            var w1 = str.records.locations[0].location[14].weatherElement[1].time[0].elementValue[0].value;

            var w2 = str.records.locations[0].location[14].weatherElement[1].time[2].elementValue[0].value;

            var w3 = str.records.locations[0].location[14].weatherElement[1].time[4].elementValue[0].value;

            var w4 = str.records.locations[0].location[14].weatherElement[1].time[6].elementValue[0].value;

            var w5 = str.records.locations[0].location[14].weatherElement[1].time[8].elementValue[0].value;

            var w6 = str.records.locations[0].location[14].weatherElement[1].time[10].elementValue[0].value;

            var w7 = str.records.locations[0].location[14].weatherElement[1].time[12].elementValue[0].value;



            //其他6天的天氣預報

            var theweatherbox = document.querySelectorAll('.theweather');

            theweatherbox[0].textContent = w2;
            theweatherbox[1].textContent = w3;
            theweatherbox[2].textContent = w4;
            theweatherbox[3].textContent = w5;
            theweatherbox[4].textContent = w6;
            theweatherbox[5].textContent = w7;


            //今天的天氣預報

            var w1box = document.querySelector('.area-weather');

            w1box.textContent = w1;


            //今天的溫度
            var t1box = document.querySelector('.area-temperature');
            t1box.textContent = t1 + '℃';


            //其他6天的溫度

            var temperaturebox = document.querySelectorAll('.temperature');


            temperaturebox[0].textContent = t2 + '℃';
            temperaturebox[1].textContent = t3 + '℃';
            temperaturebox[2].textContent = t4 + '℃';
            temperaturebox[3].textContent = t5 + '℃';
            temperaturebox[4].textContent = t6 + '℃';
            temperaturebox[5].textContent = t7 + '℃';


                          
        //判斷今日天氣現象代碼
        var weatherinfo =
        str.records.locations[0].location[14].weatherElement[1].time[0].elementValue[1].value;

       

        var winfo = $('#weatherimages');

        switch (weatherinfo) {

            case '01':
            case '24':
            case '25':
            case '26':

                $(winfo).attr('src', 'images/weather_01.png');

                break;

            case '02':
            case '03':
            case '04':
            case '05':
            case '06':
            case '07':
            case '27':
            case '28':

                $(winfo).attr('src', 'images/weather_02.png');

                break;

            case '08':
            case '09':
            case '10':
            case '19':
            case '20':
            case '30':
            case '37':
            case '38':
            case '39':
            case '40':
            case '41':

                $(winfo).attr('src', 'images/weather_03.png');

                break;


            case '15':
            case '16':
            case '17':
            case '18':
            case '21':
            case '22':
            case '33':
            case '34':
            case '35':
            case '36':

                $(winfo).attr('src', 'images/weather_04.png');

                break;

            case '陰短暫雨':

                $(winfo).attr('src', 'images/weather_05.png');

                break;

            case '11':
            case '12':
            case '13':
            case '14':
            case '23':
            case '29':
            case '31':
            case '32':

                $(winfo).attr('src', 'images/weather_06.png');

                break;


        }
      
        }


    }

    if (vv == 15) {

    

   swal("新北市", "為您查詢新北市未來一周的天氣預報！", "success");

        var xhr = new XMLHttpRequest();

        xhr.open('get', 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-11AD035A-8FDB-4AFB-BC5F-CB24CFB20141&format=JSON&elementName=T,Wx', true);

        xhr.send(null);

        xhr.onload = function () {



            var str = JSON.parse(xhr.responseText);



            //溫度
            var t1 = str.records.locations[0].location[15].weatherElement[0].time[0].elementValue[0].value;

            var t2 = str.records.locations[0].location[15].weatherElement[0].time[2].elementValue[0].value;

            var t3 = str.records.locations[0].location[15].weatherElement[0].time[4].elementValue[0].value;

            var t4 = str.records.locations[0].location[15].weatherElement[0].time[6].elementValue[0].value;


            var t5 = str.records.locations[0].location[15].weatherElement[0].time[8].elementValue[0].value;


            var t6 = str.records.locations[0].location[15].weatherElement[0].time[10].elementValue[0].value;


            var t7 = str.records.locations[0].location[15].weatherElement[0].time[12].elementValue[0].value;


            //氣象


            var w1 = str.records.locations[0].location[15].weatherElement[1].time[0].elementValue[0].value;

            var w2 = str.records.locations[0].location[15].weatherElement[1].time[2].elementValue[0].value;

            var w3 = str.records.locations[0].location[15].weatherElement[1].time[4].elementValue[0].value;

            var w4 = str.records.locations[0].location[15].weatherElement[1].time[6].elementValue[0].value;

            var w5 = str.records.locations[0].location[15].weatherElement[1].time[8].elementValue[0].value;

            var w6 = str.records.locations[0].location[15].weatherElement[1].time[10].elementValue[0].value;

            var w7 = str.records.locations[0].location[15].weatherElement[1].time[12].elementValue[0].value;



            //其他6天的天氣預報

            var theweatherbox = document.querySelectorAll('.theweather');

            theweatherbox[0].textContent = w2;
            theweatherbox[1].textContent = w3;
            theweatherbox[2].textContent = w4;
            theweatherbox[3].textContent = w5;
            theweatherbox[4].textContent = w6;
            theweatherbox[5].textContent = w7;


            //今天的天氣預報

            var w1box = document.querySelector('.area-weather');

            w1box.textContent = w1;


            //今天的溫度
            var t1box = document.querySelector('.area-temperature');
            t1box.textContent = t1 + '℃';


            //其他6天的溫度

            var temperaturebox = document.querySelectorAll('.temperature');


            temperaturebox[0].textContent = t2 + '℃';
            temperaturebox[1].textContent = t3 + '℃';
            temperaturebox[2].textContent = t4 + '℃';
            temperaturebox[3].textContent = t5 + '℃';
            temperaturebox[4].textContent = t6 + '℃';
            temperaturebox[5].textContent = t7 + '℃';

                          
        //判斷今日天氣現象代碼
        var weatherinfo =
        str.records.locations[0].location[15].weatherElement[1].time[0].elementValue[1].value;

       

        var winfo = $('#weatherimages');

        switch (weatherinfo) {

            case '01':
            case '24':
            case '25':
            case '26':

                $(winfo).attr('src', 'images/weather_01.png');

                break;

            case '02':
            case '03':
            case '04':
            case '05':
            case '06':
            case '07':
            case '27':
            case '28':

                $(winfo).attr('src', 'images/weather_02.png');

                break;

            case '08':
            case '09':
            case '10':
            case '19':
            case '20':
            case '30':
            case '37':
            case '38':
            case '39':
            case '40':
            case '41':

                $(winfo).attr('src', 'images/weather_03.png');

                break;


            case '15':
            case '16':
            case '17':
            case '18':
            case '21':
            case '22':
            case '33':
            case '34':
            case '35':
            case '36':

                $(winfo).attr('src', 'images/weather_04.png');

                break;

            case '陰短暫雨':

                $(winfo).attr('src', 'images/weather_05.png');

                break;

            case '11':
            case '12':
            case '13':
            case '14':
            case '23':
            case '29':
            case '31':
            case '32':

                $(winfo).attr('src', 'images/weather_06.png');

                break;


        }
      

        }





    }

    if (vv == 16) {

     
        
   swal("基隆市", "為您查詢基隆市未來一周的天氣預報！", "success");


        var xhr = new XMLHttpRequest();

        xhr.open('get', 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-11AD035A-8FDB-4AFB-BC5F-CB24CFB20141&format=JSON&elementName=T,Wx', true);

        xhr.send(null);

        xhr.onload = function () {

            var str = JSON.parse(xhr.responseText);

            //溫度
            var t1 = str.records.locations[0].location[16].weatherElement[0].time[0].elementValue[0].value;

            var t2 = str.records.locations[0].location[16].weatherElement[0].time[2].elementValue[0].value;

            var t3 = str.records.locations[0].location[16].weatherElement[0].time[4].elementValue[0].value;

            var t4 = str.records.locations[0].location[16].weatherElement[0].time[6].elementValue[0].value;


            var t5 = str.records.locations[0].location[16].weatherElement[0].time[8].elementValue[0].value;


            var t6 = str.records.locations[0].location[16].weatherElement[0].time[10].elementValue[0].value;


            var t7 = str.records.locations[0].location[16].weatherElement[0].time[12].elementValue[0].value;


            //氣象


            var w1 = str.records.locations[0].location[16].weatherElement[1].time[0].elementValue[0].value;

            var w2 = str.records.locations[0].location[16].weatherElement[1].time[2].elementValue[0].value;

            var w3 = str.records.locations[0].location[16].weatherElement[1].time[4].elementValue[0].value;

            var w4 = str.records.locations[0].location[16].weatherElement[1].time[6].elementValue[0].value;

            var w5 = str.records.locations[0].location[16].weatherElement[1].time[8].elementValue[0].value;

            var w6 = str.records.locations[0].location[16].weatherElement[1].time[10].elementValue[0].value;

            var w7 = str.records.locations[0].location[16].weatherElement[1].time[12].elementValue[0].value;



            //其他6天的天氣預報

            var theweatherbox = document.querySelectorAll('.theweather');

            theweatherbox[0].textContent = w2;
            theweatherbox[1].textContent = w3;
            theweatherbox[2].textContent = w4;
            theweatherbox[3].textContent = w5;
            theweatherbox[4].textContent = w6;
            theweatherbox[5].textContent = w7;


            //今天的天氣預報

            var w1box = document.querySelector('.area-weather');

            w1box.textContent = w1;


            //今天的溫度
            var t1box = document.querySelector('.area-temperature');
            t1box.textContent = t1 + '℃';


            //其他6天的溫度

            var temperaturebox = document.querySelectorAll('.temperature');


            temperaturebox[0].textContent = t2 + '℃';
            temperaturebox[1].textContent = t3 + '℃';
            temperaturebox[2].textContent = t4 + '℃';
            temperaturebox[3].textContent = t5 + '℃';
            temperaturebox[4].textContent = t6 + '℃';
            temperaturebox[5].textContent = t7 + '℃';

                 
        //判斷今日天氣現象代碼
        var weatherinfo =
        str.records.locations[0].location[16].weatherElement[1].time[0].elementValue[1].value;

     

        var winfo = $('#weatherimages');

        switch (weatherinfo) {

            case '01':
            case '24':
            case '25':
            case '26':

                $(winfo).attr('src', 'images/weather_01.png');

                break;

            case '02':
            case '03':
            case '04':
            case '05':
            case '06':
            case '07':
            case '27':
            case '28':

                $(winfo).attr('src', 'images/weather_02.png');

                break;

            case '08':
            case '09':
            case '10':
            case '19':
            case '20':
            case '30':
            case '37':
            case '38':
            case '39':
            case '40':
            case '41':

                $(winfo).attr('src', 'images/weather_03.png');

                break;


            case '15':
            case '16':
            case '17':
            case '18':
            case '21':
            case '22':
            case '33':
            case '34':
            case '35':
            case '36':

                $(winfo).attr('src', 'images/weather_04.png');

                break;

            case '陰短暫雨':

                $(winfo).attr('src', 'images/weather_05.png');

                break;

            case '11':
            case '12':
            case '13':
            case '14':
            case '23':
            case '29':
            case '31':
            case '32':

                $(winfo).attr('src', 'images/weather_06.png');

                break;


        }
      


        }


    }

    if (vv == 17) {

   
   swal("台中市", "為您查詢台中市未來一周的天氣預報！", "success");

        waether();





    }

    if (vv == 18) {

     

   swal("台南市", "為您查詢台南市未來一周的天氣預報！", "success");

        var xhr = new XMLHttpRequest();

        xhr.open('get', 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-11AD035A-8FDB-4AFB-BC5F-CB24CFB20141&format=JSON&elementName=T,Wx', true);

        xhr.send(null);

        xhr.onload = function () {



            var str = JSON.parse(xhr.responseText);



            //溫度
            var t1 = str.records.locations[0].location[18].weatherElement[0].time[0].elementValue[0].value;

            var t2 = str.records.locations[0].location[18].weatherElement[0].time[2].elementValue[0].value;

            var t3 = str.records.locations[0].location[18].weatherElement[0].time[4].elementValue[0].value;

            var t4 = str.records.locations[0].location[18].weatherElement[0].time[6].elementValue[0].value;


            var t5 = str.records.locations[0].location[18].weatherElement[0].time[8].elementValue[0].value;


            var t6 = str.records.locations[0].location[18].weatherElement[0].time[10].elementValue[0].value;


            var t7 = str.records.locations[0].location[18].weatherElement[0].time[12].elementValue[0].value;


            //氣象


            var w1 = str.records.locations[0].location[18].weatherElement[1].time[0].elementValue[0].value;

            var w2 = str.records.locations[0].location[18].weatherElement[1].time[2].elementValue[0].value;

            var w3 = str.records.locations[0].location[18].weatherElement[1].time[4].elementValue[0].value;

            var w4 = str.records.locations[0].location[18].weatherElement[1].time[6].elementValue[0].value;

            var w5 = str.records.locations[0].location[18].weatherElement[1].time[8].elementValue[0].value;

            var w6 = str.records.locations[0].location[18].weatherElement[1].time[10].elementValue[0].value;

            var w7 = str.records.locations[0].location[18].weatherElement[1].time[12].elementValue[0].value;



            //其他6天的天氣預報

            var theweatherbox = document.querySelectorAll('.theweather');

            theweatherbox[0].textContent = w2;
            theweatherbox[1].textContent = w3;
            theweatherbox[2].textContent = w4;
            theweatherbox[3].textContent = w5;
            theweatherbox[4].textContent = w6;
            theweatherbox[5].textContent = w7;


            //今天的天氣預報

            var w1box = document.querySelector('.area-weather');

            w1box.textContent = w1;


            //今天的溫度
            var t1box = document.querySelector('.area-temperature');
            t1box.textContent = t1 + '℃';


            //其他6天的溫度

            var temperaturebox = document.querySelectorAll('.temperature');


            temperaturebox[0].textContent = t2 + '℃';
            temperaturebox[1].textContent = t3 + '℃';
            temperaturebox[2].textContent = t4 + '℃';
            temperaturebox[3].textContent = t5 + '℃';
            temperaturebox[4].textContent = t6 + '℃';
            temperaturebox[5].textContent = t7 + '℃';

                          
        //判斷今日天氣現象代碼
        var weatherinfo =
        str.records.locations[0].location[18].weatherElement[1].time[0].elementValue[1].value;

       

        var winfo = $('#weatherimages');

        switch (weatherinfo) {

            case '01':
            case '24':
            case '25':
            case '26':

                $(winfo).attr('src', 'images/weather_01.png');

                break;

            case '02':
            case '03':
            case '04':
            case '05':
            case '06':
            case '07':
            case '27':
            case '28':

                $(winfo).attr('src', 'images/weather_02.png');

                break;

            case '08':
            case '09':
            case '10':
            case '19':
            case '20':
            case '30':
            case '37':
            case '38':
            case '39':
            case '40':
            case '41':

                $(winfo).attr('src', 'images/weather_03.png');

                break;


            case '15':
            case '16':
            case '17':
            case '18':
            case '21':
            case '22':
            case '33':
            case '34':
            case '35':
            case '36':

                $(winfo).attr('src', 'images/weather_04.png');

                break;

            case '陰短暫雨':

                $(winfo).attr('src', 'images/weather_05.png');

                break;

            case '11':
            case '12':
            case '13':
            case '14':
            case '23':
            case '29':
            case '31':
            case '32':

                $(winfo).attr('src', 'images/weather_06.png');

                break;


        }
      

        }





    }

    if (vv == 19) {

       
        
   swal("桃園市", "為您查詢桃園市未來一周的天氣預報！", "success");


        var xhr = new XMLHttpRequest();

        xhr.open('get', 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-11AD035A-8FDB-4AFB-BC5F-CB24CFB20141&format=JSON&elementName=T,Wx', true);

        xhr.send(null);

        xhr.onload = function () {



            var str = JSON.parse(xhr.responseText);



            //溫度
            var t1 = str.records.locations[0].location[19].weatherElement[0].time[0].elementValue[0].value;

            var t2 = str.records.locations[0].location[19].weatherElement[0].time[2].elementValue[0].value;

            var t3 = str.records.locations[0].location[19].weatherElement[0].time[4].elementValue[0].value;

            var t4 = str.records.locations[0].location[19].weatherElement[0].time[6].elementValue[0].value;


            var t5 = str.records.locations[0].location[19].weatherElement[0].time[8].elementValue[0].value;


            var t6 = str.records.locations[0].location[19].weatherElement[0].time[10].elementValue[0].value;


            var t7 = str.records.locations[0].location[19].weatherElement[0].time[12].elementValue[0].value;


            //氣象


            var w1 = str.records.locations[0].location[19].weatherElement[1].time[0].elementValue[0].value;

            var w2 = str.records.locations[0].location[19].weatherElement[1].time[2].elementValue[0].value;

            var w3 = str.records.locations[0].location[19].weatherElement[1].time[4].elementValue[0].value;

            var w4 = str.records.locations[0].location[19].weatherElement[1].time[6].elementValue[0].value;

            var w5 = str.records.locations[0].location[19].weatherElement[1].time[8].elementValue[0].value;

            var w6 = str.records.locations[0].location[19].weatherElement[1].time[10].elementValue[0].value;

            var w7 = str.records.locations[0].location[19].weatherElement[1].time[12].elementValue[0].value;



            //其他6天的天氣預報

            var theweatherbox = document.querySelectorAll('.theweather');

            theweatherbox[0].textContent = w2;
            theweatherbox[1].textContent = w3;
            theweatherbox[2].textContent = w4;
            theweatherbox[3].textContent = w5;
            theweatherbox[4].textContent = w6;
            theweatherbox[5].textContent = w7;


            //今天的天氣預報

            var w1box = document.querySelector('.area-weather');

            w1box.textContent = w1;


            //今天的溫度
            var t1box = document.querySelector('.area-temperature');
            t1box.textContent = t1 + '℃';


            //其他6天的溫度

            var temperaturebox = document.querySelectorAll('.temperature');


            temperaturebox[0].textContent = t2 + '℃';
            temperaturebox[1].textContent = t3 + '℃';
            temperaturebox[2].textContent = t4 + '℃';
            temperaturebox[3].textContent = t5 + '℃';
            temperaturebox[4].textContent = t6 + '℃';
            temperaturebox[5].textContent = t7 + '℃';


                         
        //判斷今日天氣現象代碼
        var weatherinfo =
        str.records.locations[0].location[19].weatherElement[1].time[0].elementValue[1].value;

       

        var winfo = $('#weatherimages');

        switch (weatherinfo) {

            case '01':
            case '24':
            case '25':
            case '26':

                $(winfo).attr('src', 'images/weather_01.png');

                break;

            case '02':
            case '03':
            case '04':
            case '05':
            case '06':
            case '07':
            case '27':
            case '28':

                $(winfo).attr('src', 'images/weather_02.png');

                break;

            case '08':
            case '09':
            case '10':
            case '19':
            case '20':
            case '30':
            case '37':
            case '38':
            case '39':
            case '40':
            case '41':

                $(winfo).attr('src', 'images/weather_03.png');

                break;


            case '15':
            case '16':
            case '17':
            case '18':
            case '21':
            case '22':
            case '33':
            case '34':
            case '35':
            case '36':

                $(winfo).attr('src', 'images/weather_04.png');

                break;

            case '陰短暫雨':

                $(winfo).attr('src', 'images/weather_05.png');

                break;

            case '11':
            case '12':
            case '13':
            case '14':
            case '23':
            case '29':
            case '31':
            case '32':

                $(winfo).attr('src', 'images/weather_06.png');

                break;


        }
      


        }





    }

    if (vv == 20) {

      

   swal("嘉義縣", "為您查詢嘉義縣未來一周的天氣預報！", "success");

        var xhr = new XMLHttpRequest();

        xhr.open('get', 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-11AD035A-8FDB-4AFB-BC5F-CB24CFB20141&format=JSON&elementName=T,Wx', true);

        xhr.send(null);

        xhr.onload = function () {



            var str = JSON.parse(xhr.responseText);



            //溫度
            var t1 = str.records.locations[0].location[20].weatherElement[0].time[0].elementValue[0].value;

            var t2 = str.records.locations[0].location[20].weatherElement[0].time[2].elementValue[0].value;

            var t3 = str.records.locations[0].location[20].weatherElement[0].time[4].elementValue[0].value;

            var t4 = str.records.locations[0].location[20].weatherElement[0].time[6].elementValue[0].value;


            var t5 = str.records.locations[0].location[20].weatherElement[0].time[8].elementValue[0].value;


            var t6 = str.records.locations[0].location[20].weatherElement[0].time[10].elementValue[0].value;


            var t7 = str.records.locations[0].location[20].weatherElement[0].time[12].elementValue[0].value;


            //氣象


            var w1 = str.records.locations[0].location[20].weatherElement[1].time[0].elementValue[0].value;

            var w2 = str.records.locations[0].location[20].weatherElement[1].time[2].elementValue[0].value;

            var w3 = str.records.locations[0].location[20].weatherElement[1].time[4].elementValue[0].value;

            var w4 = str.records.locations[0].location[20].weatherElement[1].time[6].elementValue[0].value;

            var w5 = str.records.locations[0].location[20].weatherElement[1].time[8].elementValue[0].value;

            var w6 = str.records.locations[0].location[20].weatherElement[1].time[10].elementValue[0].value;

            var w7 = str.records.locations[0].location[20].weatherElement[1].time[12].elementValue[0].value;



            //其他6天的天氣預報

            var theweatherbox = document.querySelectorAll('.theweather');

            theweatherbox[0].textContent = w2;
            theweatherbox[1].textContent = w3;
            theweatherbox[2].textContent = w4;
            theweatherbox[3].textContent = w5;
            theweatherbox[4].textContent = w6;
            theweatherbox[5].textContent = w7;


            //今天的天氣預報

            var w1box = document.querySelector('.area-weather');

            w1box.textContent = w1;


            //今天的溫度
            var t1box = document.querySelector('.area-temperature');
            t1box.textContent = t1 + '℃';


            //其他6天的溫度

            var temperaturebox = document.querySelectorAll('.temperature');


            temperaturebox[0].textContent = t2 + '℃';
            temperaturebox[1].textContent = t3 + '℃';
            temperaturebox[2].textContent = t4 + '℃';
            temperaturebox[3].textContent = t5 + '℃';
            temperaturebox[4].textContent = t6 + '℃';
            temperaturebox[5].textContent = t7 + '℃';


                          
        //判斷今日天氣現象代碼
        var weatherinfo =
        str.records.locations[0].location[20].weatherElement[1].time[0].elementValue[1].value;

       

        var winfo = $('#weatherimages');

        switch (weatherinfo) {

            case '01':
            case '24':
            case '25':
            case '26':

                $(winfo).attr('src', 'images/weather_01.png');

                break;

            case '02':
            case '03':
            case '04':
            case '05':
            case '06':
            case '07':
            case '27':
            case '28':

                $(winfo).attr('src', 'images/weather_02.png');

                break;

            case '08':
            case '09':
            case '10':
            case '19':
            case '20':
            case '30':
            case '37':
            case '38':
            case '39':
            case '40':
            case '41':

                $(winfo).attr('src', 'images/weather_03.png');

                break;


            case '15':
            case '16':
            case '17':
            case '18':
            case '21':
            case '22':
            case '33':
            case '34':
            case '35':
            case '36':

                $(winfo).attr('src', 'images/weather_04.png');

                break;

            case '陰短暫雨':

                $(winfo).attr('src', 'images/weather_05.png');

                break;

            case '11':
            case '12':
            case '13':
            case '14':
            case '23':
            case '29':
            case '31':
            case '32':

                $(winfo).attr('src', 'images/weather_06.png');

                break;


        }
      
        }





    }

    if (vv == 21) {

    

   swal("嘉義市", "為您查詢嘉義市未來一周的天氣預報！", "success");

        var xhr = new XMLHttpRequest();

        xhr.open('get', 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-11AD035A-8FDB-4AFB-BC5F-CB24CFB20141&format=JSON&elementName=T,Wx', true);

        xhr.send(null);

        xhr.onload = function () {



            var str = JSON.parse(xhr.responseText);



            //溫度
            var t1 = str.records.locations[0].location[21].weatherElement[0].time[0].elementValue[0].value;

            var t2 = str.records.locations[0].location[21].weatherElement[0].time[2].elementValue[0].value;

            var t3 = str.records.locations[0].location[21].weatherElement[0].time[4].elementValue[0].value;

            var t4 = str.records.locations[0].location[21].weatherElement[0].time[6].elementValue[0].value;


            var t5 = str.records.locations[0].location[21].weatherElement[0].time[8].elementValue[0].value;


            var t6 = str.records.locations[0].location[21].weatherElement[0].time[10].elementValue[0].value;


            var t7 = str.records.locations[0].location[21].weatherElement[0].time[12].elementValue[0].value;


            //氣象


            var w1 = str.records.locations[0].location[21].weatherElement[1].time[0].elementValue[0].value;

            var w2 = str.records.locations[0].location[21].weatherElement[1].time[2].elementValue[0].value;

            var w3 = str.records.locations[0].location[21].weatherElement[1].time[4].elementValue[0].value;

            var w4 = str.records.locations[0].location[21].weatherElement[1].time[6].elementValue[0].value;

            var w5 = str.records.locations[0].location[21].weatherElement[1].time[8].elementValue[0].value;

            var w6 = str.records.locations[0].location[21].weatherElement[1].time[10].elementValue[0].value;

            var w7 = str.records.locations[0].location[21].weatherElement[1].time[12].elementValue[0].value;



            //其他6天的天氣預報

            var theweatherbox = document.querySelectorAll('.theweather');

            theweatherbox[0].textContent = w2;
            theweatherbox[1].textContent = w3;
            theweatherbox[2].textContent = w4;
            theweatherbox[3].textContent = w5;
            theweatherbox[4].textContent = w6;
            theweatherbox[5].textContent = w7;


            //今天的天氣預報

            var w1box = document.querySelector('.area-weather');

            w1box.textContent = w1;


            //今天的溫度
            var t1box = document.querySelector('.area-temperature');
            t1box.textContent = t1 + '℃';


            //其他6天的溫度

            var temperaturebox = document.querySelectorAll('.temperature');


            temperaturebox[0].textContent = t2 + '℃';
            temperaturebox[1].textContent = t3 + '℃';
            temperaturebox[2].textContent = t4 + '℃';
            temperaturebox[3].textContent = t5 + '℃';
            temperaturebox[4].textContent = t6 + '℃';
            temperaturebox[5].textContent = t7 + '℃';

                         
        //判斷今日天氣現象代碼
        var weatherinfo =
        str.records.locations[0].location[21].weatherElement[1].time[0].elementValue[1].value;

       

        var winfo = $('#weatherimages');

        switch (weatherinfo) {

            case '01':
            case '24':
            case '25':
            case '26':

                $(winfo).attr('src', 'images/weather_01.png');

                break;

            case '02':
            case '03':
            case '04':
            case '05':
            case '06':
            case '07':
            case '27':
            case '28':

                $(winfo).attr('src', 'images/weather_02.png');

                break;

            case '08':
            case '09':
            case '10':
            case '19':
            case '20':
            case '30':
            case '37':
            case '38':
            case '39':
            case '40':
            case '41':

                $(winfo).attr('src', 'images/weather_03.png');

                break;


            case '15':
            case '16':
            case '17':
            case '18':
            case '21':
            case '22':
            case '33':
            case '34':
            case '35':
            case '36':

                $(winfo).attr('src', 'images/weather_04.png');

                break;

            case '陰短暫雨':

                $(winfo).attr('src', 'images/weather_05.png');

                break;

            case '11':
            case '12':
            case '13':
            case '14':
            case '23':
            case '29':
            case '31':
            case '32':

                $(winfo).attr('src', 'images/weather_06.png');

                break;


        }
      

        }





    }


}
