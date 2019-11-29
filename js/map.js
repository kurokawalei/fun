// JavaScript Document design by kuro



  
            $('#map-direction-01').tinyMap({
                
                'center': '台中市北區中清路一段369號',
                'zoom': 13,
                'direction': [
                    {
                        'from': '台中市大里區',
                        'to': '台中市太平區',
                        'waypoint': [
                            
                            '台中棒球場',
                            '台中國家歌劇院',
                            '台中市南屯區五權西路二段368號'
                           
                        ],
                        'travel': 'driving',
                         // 自訂路徑顏色
                            'polylineOptions': {
                            'strokeColor': '#e5004f',
                            'strokeOpacity': 1
                        }
                      
                    },
                    
                     {
                        'from': '台中市南區高工路366號 ',
                        'to': '台中市西屯區河南路三段120號B1',
                        'waypoint': [
                            
                            '南投縣集集鎮成功路18號',
                            '南投縣魚池鄉水社村中山路163號2樓'
                          
                        ],
                        'travel': 'driving',
                        // 自訂路徑顏色
                            'polylineOptions': {
                            'strokeColor': '#000',
                            'strokeOpacity': 1
                        }
                        
                   
                     
                    }
                    
                    
                    
                ],
               
                
            });
            
            
           


















      var map = $('#map-direction-01');
        
    
    $('#start').on('click', function () {
    // 取得 tinyMap 實例
    var m = map.data('tinyMap'),
        d = m.getDirectionsInfo(),
        i = 0,
        j = 0,
        distance = 0,
        duration = 0,
        html = [],
        info = $('#direction-info');

    for (i = 0; i < d.length; i += 1) {
        if (d[i]) {
            html.push('<li>');
            html.push('<div><strong>這是路徑啦 ' + (i + 1) + '</strong></div>');
            html.push('<ol>');
            distance = 0;
            duration = 0;
            for (j = 0; j < d[i].length; j += 1) {
                if (d[i][j].hasOwnProperty('distance')) {
                    html.push('<li><span class="from">' + d[i][j].from + '</span> - <span class="to">' + d[i][j].to + '</span> (' + d[i][j].distance.text + ' / ' + d[i][j].duration.text + ')</li>');
                    distance += d[i][j].distance.value;
                    duration += d[i][j].duration.value;
                }
            }
            html.push('</ol>');
            html.push('<p>距離: ' + Math.ceil(distance / 1000, 10) + ' 公里，');
            html.push('約需: ' + Math.ceil(duration / 60, 10) + ' 分鐘</p>');
            html.push('</li>');
        }
    }
    info.empty().html(html.join(''));
});
    
    
    
    
    
    
    
    
    
    
    