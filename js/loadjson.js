// Documentation available @ http://api.jquery.com/jquery.getjson/
$(document).ready(function () {

        console.log('We are going to read data from AuroraDB');

        var html = '';
        var showData1 = $('#show-player-data');

        // $.getJSON('example2.json', function (data) {
    var loadToken = localStorage.getItem('sessionToken');
        $.ajaxSetup({
            headers: {
                sectoken: loadToken
            }
        });
        $.getJSON("https://y3op33lkfd.execute-api.eu-central-1.amazonaws.com/PROD/out", function (data) {

                console.log('Now getting into JSON')
                var response = JSON.parse(data.body);
                console.log(response);
                // console.log(response.Item);

                // Might be necessary to create tables containing data, simple list is not enough
                // Display card pictures


                html += '<div class="col-sm-5 offset-sm-5 center" style="background: #f0f0f0; width: 30%; border-radius: 10px;">';
                    html += '<div class="panel panel-default">';
                        // html += '<img src="img/user-card-theme-1.png" class="img-responsive">';
                        html += '<img src="img/4_-Rock-Paper-Scissors-World-Championship-300x199.jpg" class="img-responsive" style="width: 100%;">';
                        html += '<img src="img/user-picture.png" class="img-circle" style="display: block; width: 80px; margin: -40px auto 0; border-radius: 5px;">';

                        html += '<div class="panel-body">';
                            html += '<p class="lead text-center"><h2>' + response.Item.user + '</h2></p>';

                            html += '<div class="row">';
                                html += '<div class="col offset-md-2 col-md-3" style="background: #41cc35; border-radius: 5px;"> Wins : ' + response.Item.wins +' </div>';
                                html += '<div class="col col-md-3"> Draw : ' + response.Item.draw +' </div>';
                                html += '<div class="col col-md-3" style="background: #cc3100; border-radius: 5px;"> Lose : ' + response.Item.lose +' </div>';
                            html += '</div> </br> <hr />';

                    html += '<div class="col col-md-12"><b> Last match </b><br>' + response.Item.history.Player1.name +' VS ' + response.Item.history.Player2.name + '</div> </br>';
            html += '<div class="row">';
                    html += '<div class="col offset-md-1 col-md-5">';
                            html += '<img src="img/' + response.Item.history.Player1.card1 + '.png" height="15px" width="15px" align="center">';
                            html += '<img src="img/' + response.Item.history.Player1.card2 + '.png" height="15px" width="15px" align="center">';
                            html += '<img src="img/' + response.Item.history.Player1.card3 + '.png" height="15px" width="15px" align="center">';
                            html += '<img src="img/' + response.Item.history.Player1.card4 + '.png" height="15px" width="15px" align="center">';
                            html += '<img src="img/' + response.Item.history.Player1.card5 + '.png" height="15px" width="15px" align="center">';
                    html += '</div>';
                    html += '<div class="col col-md-5">';
                            html += '<img src="img/' + response.Item.history.Player2.card1 + '.png" height="15px" width="15px" align="center">';
                            html += '<img src="img/' + response.Item.history.Player2.card2 + '.png" height="15px" width="15px" align="center">';
                            html += '<img src="img/' + response.Item.history.Player2.card3 + '.png" height="15px" width="15px" align="center">';
                            html += '<img src="img/' + response.Item.history.Player2.card4 + '.png" height="15px" width="15px" align="center">';
                            html += '<img src="img/' + response.Item.history.Player2.card5 + '.png" height="15px" width="15px" align="center">';
                    html += '</div>';
            html += '</div>';
                html += '</div> </br>';
                html += '</div>';
            html += '</div>';

                showData1.empty();

                // var content = '<li href="#" class="list-group-item">' + player.join('</li><li href="#" class="list-group-item">') + '</li>';
                var list = $('<table class="table">').html(html);

                showData1.append(list);
            });
        });

        // showData1.text('Loading the JSON file.')

// });