//for local development
//var api_url = "https://widgets.dellin.ru";
//var main_site_url = "https://dellin.ru";
var api_url = window.location.origin;
var main_site_url = 'https://' + api_url.match(/\w*(dellin[0-9]*).([a-z])*$/g)[0];

function sendGAQuery(category,action,label)
{
  var actionGA = '',labelGA = label;
  switch(action)
  {
    case 'derival_point_cod':
      actionGA = 'Город отправки';
    break;
    case 'arrival_point_cod':
      actionGA = 'Город доставки';
    break;
    case 'sized_weight':
      actionGA = 'Вес';
    break;
    case 'sized_volume':
      actionGA = 'Объем';
    break;
    case 'vesn':
      actionGA = 'Есть негабаритные места';
      labelGA = 'Вес';
    break;
    case 'obne':
      actionGA = 'Есть негабаритные места';
      labelGA = 'Объем';
    break;
    case 'strah2':
      actionGA = 'Страхование';
    break;
  }

  try{
          _gaq.push(['_trackEvent', category, actionGA,labelGA]);
       } catch(e) { }
}

$(document).ready(function(){
if(navigator.appVersion.match(/MSIE [\d.]+/) || !!navigator.userAgent.match(/Trident\/7\./))
  {
    var placeholderTextarr = 'Город отправки';
    $('#derival_point_cod').val(placeholderTextarr).addClass('grayplace');
    $('#derival_point_cod').blur(function(){
        $(this).val() == '' ? $(this).val(placeholderTextarr).addClass('grayplace') : false;
    });
    $('#derival_point_cod').focus(function(){
        $(this).val() == placeholderTextarr ? $(this).val('').removeClass('grayplace') : false;
    });
	    var placeholderTextder = 'Город доставки';
    $('#arrival_point_cod').val(placeholderTextder).addClass('grayplace');
    $('#arrival_point_cod').blur(function(){
        $(this).val() == '' ? $(this).val(placeholderTextder).addClass('grayplace') : false;
    });
    $('#arrival_point_cod').focus(function(){
        $(this).val() == placeholderTextder ? $(this).val('').removeClass('grayplace') : false;
    });
	 var placeholderTextweight = 'Вес';
    $('#sized_weight').val(placeholderTextweight).addClass('grayplace');
    $('#sized_weight').blur(function(){
        $(this).val() == '' ? $(this).val(placeholderTextweight).addClass('grayplace') : false;
    });
    $('#sized_weight').focus(function(){
        $(this).val() == placeholderTextweight ? $(this).val('').removeClass('grayplace') : false;
    });
	 var placeholderTextvolume = 'Объем';
    $('#sized_volume').val(placeholderTextvolume).addClass('grayplace');
    $('#sized_volume').blur(function(){
        $(this).val() == '' ? $(this).val(placeholderTextvolume).addClass('grayplace') : false;
    });
    $('#sized_volume').focus(function(){
        $(this).val() == placeholderTextvolume ? $(this).val('').removeClass('grayplace') : false;
    });
	 var placeholderTextvolumeneg = 'Объем';
    $('#volume_neg').val(placeholderTextvolumeneg).addClass('grayplace');
    $('#volume_neg').blur(function(){
        $(this).val() == '' ? $(this).val(placeholderTextvolumeneg).addClass('grayplace') : false;
    });
    $('#volume_neg').focus(function(){
        $(this).val() == placeholderTextvolumeneg ? $(this).val('').removeClass('grayplace') : false;
    });
	 var placeholderTextweightneg = 'Вес';
    $('#sized_neg').val(placeholderTextweightneg).addClass('grayplace');
    $('#sized_neg').blur(function(){
        $(this).val() == '' ? $(this).val(placeholderTextweightneg).addClass('grayplace') : false;
    });
    $('#sized_neg').focus(function(){
        $(this).val() == placeholderTextweightneg ? $(this).val('').removeClass('grayplace') : false;
    });
}
$('#form').keydown(function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        return false;
    }
    });
	$('#example21, #example22').click(function(){
var arr_rez = ($('#arrival_checkbox').prop('checked'))?'toDoor':'terminal';
var der_rez = ($('#derival_checkbox').prop('checked'))?'toDoor':'terminal';
//var str_rez = ($('#check').attr('checked'))?'1':'0';
var str_rez = '1';

		$hr = main_site_url + '/requests/?' +'arrival_point_code='+ $('input[name=arrival_point_code]').val()  +'&derival_point_code=' + $('input[name=derival_point_code]').val() +'&sized_volume='+ $('input[name=sized_volume]').val() +'&sized_weight='+ $('input[name=sized_weight]').val() + '&arrival_variant=' + arr_rez + '&derival_variant=' + der_rez + '&insurance=' + str_rez +'&stated_value=' + $('input[name=strah2]').autoNumeric('get') + '&packages=' + $('select[name=upakovka1]').val();
		$(this).attr('href', $hr);


		return true;

	});


// Чистим скрытое поле КЛАДР при изменении видимого инпута
	$('input[name=arrival_point_cod]').change(function(){
	    var cityAPI =  $('input[name=arrival_point_code]').data('city');
	    var cityKLADR = $('input[name=arrival_point_code]');
	    var cityInput = $('input[name=arrival_point_cod]').val();
		//if(cityAPI!=cityInput){cityKLADR.val('');}
	});
	$('input[name=derival_point_cod]').change(function(){
    	var cityAPI = $('input[name=derival_point_code]').data('city');
    	var cityKLADR = $('input[name=derival_point_code]');
    	var cityInput = $('input[name=derival_point_cod]').val();
		//if(cityAPI!=cityInput){cityKLADR.val('');}
	});
	//при фокусе показать только название города
	$('input[name=arrival_point_cod]').focus(function(){
	    var datacity = $('input[name=arrival_point_code]').data('datacity');
	    var cityInput = $('input[name=arrival_point_cod]');
        cityInput.val(datacity);
    });

	$('input[name=derival_point_cod]').focus(function(){
	    var datacity = $('input[name=derival_point_code]').data('datacity');
	    var cityInput = $('input[name=derival_point_cod]');
        cityInput.val(datacity);
    });

    $('input[name=arrival_point_cod]').focusout(function(){
	    var cityAPI =  $('input[name=arrival_point_code]').data('city');
	    var cityInput = $('input[name=arrival_point_cod]');
        cityInput.val(cityAPI);
    });

	$('input[name=derival_point_cod]').focusout(function(){
	    var cityAPI =  $('input[name=derival_point_code]').data('city');
	    var cityInput = $('input[name=derival_point_cod]');
        cityInput.val(cityAPI);
    });
//
$('.rem').focus(function(){
$(this).removeClass('place').removeClass('place2');
});
});
   var priceSet;

    priceSet = function(data){
               var price       = Number.prototype.toFixed.call(parseFloat(data) || 0, 0),
            //заменяем точку на запятую
            price_sep   = price.replace(/(\D)/g, ","),
            //добавляем пробел как разделитель в целых
            price_sep   = price_sep.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");

        return price_sep + ' руб.';
    };

function startLoadingAnimation() // - функция запуска анимации
{
  // найдем элемент с изображением загрузки и уберем невидимость:
  var imgObj = $("#loadImg");
  $("#over").show();
  imgObj.show();

  // вычислим в какие координаты нужно поместить изображение загрузки,
  // чтобы оно оказалось в серидине страницы:
  var centerY = $(form).scrollTop() + ($(form).height() + imgObj.height())/2 -50;
  var centerX = $(form).scrollLeft() + ($(form).width() + imgObj.width())/2 - 170;

  // поменяем координаты изображения на нужные:
  imgObj.offset({top:centerY, left:centerX});
  setTimeout(function(){
 $("#over").hide();
  $("#loadImg").hide();
  }, 10000);
}



function stopLoadingAnimation() // - функция останавливающая анимацию
{
    $("#over").hide();
  $("#loadImg").hide();
  $('#lab').text('Пожалуйста, подождите');
    $('#exampleModal1').arcticmodal();
}

function kladrToSiteDerival(dataKLADR){

  $.ajax({
                 url: api_url + "/api/",
                 type: "POST",
				 dataType: "json",
                 data:{ code: dataKLADR},
                 success: function(data){
				$('#derival_point_cod').val(data[0]['aString']);
                 },
				  error: function(jqXHR, exception) {

			$('#erro').html('Сервис временно недоступен, попробуйте пожалуйста позже.');
			$('#modal2, #modal1').hide();
			$('#modal3').show();
			$("#over").show();
			$('#mod_con').show();
			$('#exampleModal1').show();
			stopLoadingAnimation();

            }
              });

}


function kladrToSiteArrival(dataKLADR){

  $.ajax({
                 url: api_url + "/api/",
                 type: "POST",
				 dataType: "json",
                 data:{ code: dataKLADR},
                 success: function(data){
				$('#arrival_point_cod').val(data[0]['aString']);
                 },
				  error: function(jqXHR, exception) {

			$('#erro').html('Сервис временно недоступен, попробуйте пожалуйста позже.');
			$('#modal2, #modal1').hide();
			$('#modal3').show();
			$("#over").show();
			$('#mod_con').show();
			$('#exampleModal1').show();
			stopLoadingAnimation();

            }
              });

}






$(function() {



$('input[name=arrival_point_cod]').autocomplete({
          autoFocus : true,
          source: function(request, response){

              $.ajax({
                 url: api_url + "/api/",
                 type: "POST",
                 dataType: "json",
                 data:{ q: request.term},
                 success: function(data){
				   response($.map( data, function(item){
                         return {label: item.aString,  datacode: item.code, datacity: item.searchString}
                     }));

                 }
              });
          },

    select: function( event, ui ) {
        // по выбору - перейти на страницу товара
        // Вы можете делать вывод результата на экран
		$('input[name=arrival_point_code]').val(ui.item.datacode);
        $('input[name=arrival_point_code]').data('city', ui.item.label);
		$('input[name=arrival_point_code]').data('datacity', ui.item.datacity);
        return true;
    },

            open: function(){
                $('.ui-autocomplete').css('max-width', '300px');},
          minLength: 2
      });

});

$(function() {

$('input[name=derival_point_cod]').autocomplete({
			autoFocus : true,
          source: function(request, response){

              $.ajax({
                 url: api_url + "/api/",
                 type: "POST",
                 dataType: "json",
                 data:{ q: request.term},
                 success: function(data){
				   response($.map( data, function(item){
                         return {label: item.aString,  datacode: item.code, datacity: item.searchString}
                     }));

                 }
              });
          },

    select: function( event, ui ) {
        // по выбору - перейти на страницу товара
        // Вы можете делать вывод результата на экран
		$('input[name=derival_point_code]').val(ui.item.datacode);
			$('input[name=derival_point_code]').data('city', ui.item.label);
			$('input[name=derival_point_code]').data('datacity', ui.item.datacity);
        return true;
    },
	 open: function(){
                $('.ui-autocomplete').css('max-width', '300px');},
          minLength: 2
      });

});

 $(function () {





        $("#tooltip-right").tooltip();
        $("#tooltip-left").tooltip();

    });

$(document).ready(function(){
   $('input[name=strah2]').autoNumeric('init', {
       aDec: '.',
       aSep: ' ',
       vMin: ' ',
       vMax: '300000000.00',
       aPad: false,
       wEmpty: 'zero',
       lZero: 'deny'
   });
});


function trim( str, charlist ) { // аналог PHP функции trim()
	charlist = !charlist ? ' \\s\xA0' : charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '\$1');
	var re = new RegExp('^[' + charlist + ']+|[' + charlist + ']+$', 'g');
	return str.replace(re, '');
}

function checkOut() { // Наша функция
var plu = ($('input[name=obne]').prop('maxlength'))? 1:0
var plu3 = ($('input[name=vesn]').prop('maxlength'))? 1:0
var plu1 = ($('input[name=derival_point_cod]').prop('maxlength'))? 1:0
var plu2 = ($('input[name=arrival_point_cod]').prop('maxlength'))? 1:0
var plu4 = ($('input[name=sized_weight]').prop('maxlength'))? 1:0
var plu5 = ($('input[name=sized_volume]').prop('maxlength'))? 1:0
var plu6 = ($('input[name=strah2]').prop('maxlength'))? 1:0
var form = '#form'; // идентификатор (#id) или класс (.class) формы
var err =3+plu6+plu+plu1+plu2+plu3+plu4+plu5;	// количество проверяемых полей, input'ов и textarea
var isErr = 0;

if(navigator.appVersion.match(/MSIE [\d.]+/) || !!navigator.userAgent.match(/Trident\/7\./))
{
      $('input[name=obne]').val()=="Объем" ? $('input[name=obne]').val(''):'';
      $('input[name=vesn]').val()=="Вес" ? $('input[name=vesn]').val(''):'';
      $('input[name=sized_weight]').val()=="Вес" ? $('input[name=sized_weight]').val(''):'';
      $('input[name=sized_volume]').val()=="Объем" ? $('input[name=sized_volume]').val(''):'';
      $('input[name=derival_point_cod]').val()=="Город отправки" ? $('input[name=derival_point_cod]').val(''):'';
      $('input[name=arrival_point_cod]').val()=="Город доставки" ? $('input[name=arrival_point_cod]').val(''):'';
}
$('input[type=text]', $(form)).each(function (indx) { 	// проверяем textarea, input
	if (trim($(this).attr('value')).length < $(this).attr('minlength'))
  { // проверка количества символов

      $(this).attr('id', 'err');	// вешаем идентификатор #err, в качестве стилизации рамки
      $(this).addClass('place');
      $(this).addClass('place2');
  		err++;

      //20-08-2015, Logunov: отправка запрос в google-analitics
      isErr = 1;
      sendGAQuery('Калькулятор новый виджет',$(this).attr('name'),"Ошибка заполнения: "+$(this).val());
	}
	else
  {
    $(this).removeAttr('id').removeClass('place').removeClass('place2');  err--;  // в этом элементе нет ошибок, чистим идентифкатор #err, уменьшаем счетчик ошибок

    //20-08-2015, Logunov: отправка запрос в google-analitic
    sendGAQuery('Калькулятор новый виджет',$(this).attr('name'),'');
  }

	if (($('input[name=arrival_point_code]').attr('value')).length < 1)
  {
	 $('input[name=arrival_point_cod]').addClass('place2').addClass('place')
	}

	if (($('input[name=derival_point_code]').attr('value')).length < 1)
  {
	 $('input[name=derival_point_cod]').addClass('place2').addClass('place')
	}

    // проверка, что цена от 1 до 300 000 000
    if ($('#check').prop('checked') && parseInt($('input[name=strah2]').autoNumeric('get')) < 0 || parseInt($('input[name=strah2]').autoNumeric('get')) > 300000000) {
        $('input[name=strah2]').addClass('place2').addClass('place');
        err++;
    }

  if(isErr == 0)
  {
      try{
              _gaq.push(['_trackEvent', 'Калькулятор новый виджет', 'Кнопка Стоимость и срок доставки', '' ]);
           } catch(e) {}
  }
  else
  {
    try{
              _gaq.push(['_trackEvent', 'Калькулятор новый виджет', 'Кнопка Стоимость и срок доставки', 'Некорректно заполнены поля' ]);
           } catch(e) {}
  }

});


			if(navigator.appVersion.match(/MSIE [\d.]+/) || !!navigator.userAgent.match(/Trident\/7\./))
  {

$('input[name=sized_weight]').val()==''? $('input[name=sized_weight]').addClass('place').addClass('place2').val("Вес"):'';
$('input[name=obne]').val()==''? $('input[name=obne]').addClass('place').addClass('place2').val("Объем"):'';
$('input[name=vesn]').val()=='' ? $('input[name=vesn]').val("Вес").addClass('place').addClass('place2'):'';
$('input[name=sized_volume]').val()=='' ? $('input[name=sized_volume]').val("Объем").addClass('place').addClass('place2'):'';
$('input[name=derival_point_cod]').val()=='' ? $('input[name=derival_point_cod]').val('Город отправки').addClass('place').addClass('place2'):'';
$('input[name=arrival_point_cod]').val()=='' ? $('input[name=arrival_point_cod]').val('Город доставки').addClass('place').addClass('place2'):'';
};
if (err==0)
{
  if ($('input[name=sized_volume]').val()>80 && $('input[name=sized_weight]').val()>20000) {
  $('#erro').text('Для расчёта перевозки груза весом более 20т и объемом более 80 м3 обратитесь к нашим специалистам');
  $('#modal2').css({display: 'none' });
  $('#modal1').css({display: 'none' });
  $('#modal3').css({display: 'block' });
  $('#exampleModal1').arcticmodal();
  }
  else if ($('input[name=arrival_point_code]').val()=='2500000100000000000000000' && ($('input[name=sized_volume]').val()>45 || $('input[name=sized_weight]').val()>10000 ) ) {
  $('#erro').text('Необходимо разделить груз на несколько отправок при перевозке груза более 10 тонн или 45м3 с терминала во Владивостоке');
  $('#modal2').css({display: 'none' });
  $('#modal1').css({display: 'none' });
  $('#modal3').css({display: 'block' });
  $('#exampleModal1').arcticmodal();
  }
  else if ($('input[name=sized_weight]').val()>20000) {
  $('#erro').text('Для расчёта перевозки груза весом более 20т обратитесь к нашим специалистам');
  $('#modal2').css({display: 'none' });
  $('#modal1').css({display: 'none' });
  $('#modal3').css({display: 'block' });
  $('#exampleModal1').arcticmodal();
  }
  else if ($('input[name=sized_volume]').val()>80) {
  $('#erro').text('Для расчёта перевозки груза объемом более 80 м3 обратитесь к нашим специалистам');
  $('#modal2').css({display: 'none' });
  $('#modal1').css({display: 'none' });
  $('#modal3').css({display: 'block' });
  $('#exampleModal1').arcticmodal();
  }
  if ($('input[name=obne]').val()>80 && $('input[name=vesn]').val()>20000) {
  $('#erro').text('Для расчёта перевозки груза весом более 20т и объемом более 80 м3 обратитесь к нашим специалистам');
  $('#modal2').css({display: 'none' });
  $('#modal1').css({display: 'none' });
  $('#modal3').css({display: 'block' });
  $('#exampleModal1').arcticmodal();
  } else if ($('input[name=vesn]').val()>20000) {
  $('#erro').text('Для расчёта перевозки груза весом более 20т обратитесь к нашим специалистам');
  $('#modal2').css({display: 'none' });
  $('#modal1').css({display: 'none' });
  $('#modal3').css({display: 'block' });
  $('#exampleModal1').arcticmodal();
  }
  else if ($('input[name=obne]').val()>80) {
  $('#erro').text('Для расчёта перевозки груза объемом более 80 м3 обратитесь к нашим специалистам');
  $('#modal2').css({display: 'none' });
  $('#modal1').css({display: 'none' });
  $('#modal3').css({display: 'block' });
  $('#exampleModal1').arcticmodal();
  }

  else {
  	if(navigator.appVersion.match(/MSIE [\d.]+/) || !!navigator.userAgent.match(/Trident\/7\./))
    {
  $('input[name=obne]').val()=='Объем'? $('input[name=obne]').val(''):'';
  $('input[name=vesn]').val()=='Вес' ? $('input[name=vesn]').val(''):'';
  }
$('#modal3').css({display: 'none' });
	var arrival_checkbox = ($('#arrival_checkbox').prop('checked'))?'True':'False';
			var derival_checkbox = ($('#derival_checkbox').prop('checked'))?'True':'False';
var arrival_point_code = $('input[name=arrival_point_code]').val();
var derival_point_code = $('input[name=derival_point_code]').val();
var sized_volume = $('input[name=sized_volume]').val();
var sized_weight = $('input[name=sized_weight]').val();
var strah2 = ($('#check').prop('checked')) ? $('input[name=strah2]').autoNumeric('get') : null;
if ($('select[name=upakovka1]').val()){
var upakovka1 = $('select[name=upakovka1]').val();
};
var vesn = $('input[name=vesn]').val();
var obne = $('input[name=obne]').val();
var length = $('input[name=length]').val();
var width = $('input[name=width]').val();
var height = $('input[name=height]').val();

var $dataText = {
"login":" ",
"password":" ",
"request": "calc",
"derivalPoint":  derival_point_code,
"arrivalPoint": arrival_point_code,
"arrivalDoor": arrival_checkbox,
"derivalDoor": derival_checkbox,
"sizedVolume": sized_volume,
"sizedWeight": sized_weight,
"oversizedVolume":  obne,
"oversizedWeight":  vesn,
"statedValue": strah2,
"packages": upakovka1,
"length": length,
"width": width,
"height": height
};

        $.ajax({
          type: 'POST',
          url: api_url + '/api/',
		  dataType: 'json',

		          data: $dataText,

          success: function(data) {
		 		   stopLoadingAnimation();

		   if	(data['errors']){
			$('#erro').text(data['errors']['message']);
			$('#modal2').css({display: 'none' });
$('#modal1').css({display: 'none' });
$('#modal3').css({display: 'block' });
$('#exampleModal1').arcticmodal();
			}
		  else if (data['price'] == undefined){
		  $('#erro').text('Извините, сервис временно недоступен. Попробуйте оформить заказ позже');
$('#modal2').css({display: 'none' });
$('#modal1').css({display: 'none' });
$('#modal3').css({display: 'block' });
$('#exampleModal1').arcticmodal();
			}
						else if	(data['price']==0){
			$('#erro').text('Извините, сервис временно недоступен. Попробуйте оформить заказ позже');
$('#modal2').css({display: 'none' });
$('#modal1').css({display: 'none' });
$('#modal3').css({display: 'block' });
$('#exampleModal1').arcticmodal();
			}


			else{
			if ($('#modal2').is(':visible')){
		$('#modal1').css({display: 'none' });
		$('#modal3').css({display: 'none' });
		}
		else {
			$('#modal1').css({display: 'block' });
			}
            $('.pr1').text(priceSet(data['price'] ));
			$('.pr2').text('от ' + data['time']['genitive']);
				if (data['time']['value']=='0'){
			$('#ifzero').hide();
			$('.pr2').hide();
				}
				else{
					$('#ifzero').show();
					$('.pr2').show();
				}
			}
          },
          error:  function(xhr, str){

            }
        });

   startLoadingAnimation();


}  // Если нет ошибок - отправляем данные.
}
}

function checkon(){
  $('#check').attr('checked','');
}

 function proverka(val) {
		var reg = [/^\D+/, /[^.,\d]+/g, /[\.,]+/, /([\d]*\.\d{1,2}).*$/],
        ch = val.replace(reg[0], '').replace(reg[1], '').replace(reg[2], '.').replace(reg[3], '$1');
        return ch;
    };
function open(){


}


function parseGetParams() {
   var $_GET = {};
   var __GET = window.location.search.substring(1).split("&");
   for(var i=0; i<__GET.length; i++) {
      var getVar = __GET[i].split("=");
      $_GET[getVar[0]] = typeof(getVar[1])=="undefined" ? "" : getVar[1];
   }
   return $_GET;

}
$(window).load(function(){
$("#upakovka1").click(function(){
var rt = $("#upakovka1 option:selected").html();
if(rt == "Воздушно-пузырьковая пленка"){
$("#upakovka1 option:selected").html("Воздушно-пузырьковая...");
}
else if (rt == "Воздушно-пузырьковая..."){
$("#upakovka1 option:selected").html("Воздушно-пузырьковая пленка");
}
});


var i=0;
var y=0;
var GETArr = parseGetParams();
	if (GETArr['arrival_point_code']){
		kladrToSiteDerival(GETArr['arrival_point_code']);
		$('#arrival_point_code').val(GETArr['arrival_point_code']);
		$('#arrival_point_cod').attr('maxlength','36').attr('minlength','0');
	}
	if (GETArr['arrival_point']){
		kladrToSiteArrival(GETArr['arrival_point']);
		$('#arrival_point_code').val(GETArr['arrival_point']);
		$('#arrival_point_cod').attr('maxlength','36').attr('minlength','0');
	}
	if (GETArr['derival_point_code']){
		kladrToSiteArrival(GETArr['derival_point_code']);
		$('#derival_point_code').val(GETArr['derival_point_code']);
		$('#derival_point_cod').attr('maxlength','36').attr('minlength','0');
	}
		if (GETArr['derival_point']){
		kladrToSiteDerival(GETArr['derival_point']);
		$('#derival_point_code').val(GETArr['derival_point']);
		$('#derival_point_cod').attr('maxlength','36').attr('minlength','0');
	}
if (GETArr['derival_checkbox']=="on"){
$('#derival_checkbox').attr('checked','');
}
if (GETArr['derival_checkbox']=="off"){
$('#derival_checkbox').removeAttr('checked');
}
if (GETArr['arrival_checkbox']=="on"){
$('#arrival_checkbox').attr('checked','');
}
if (GETArr['arrival_checkbox']=="off"){
$('#arrival_checkbox').removeAttr('checked','');
}

if (GETArr['derival_to_door']=="on"){
$('#derival_checkbox').attr('checked','');
}
if (GETArr['derival_to_door']=="off"){
$('#derival_checkbox').removeAttr('checked');
}
if (GETArr['arrival_to_door']=="on"){
$('#arrival_checkbox').attr('checked','');
}
if (GETArr['arrival_to_door']=="off"){
$('#arrival_checkbox').removeAttr('checked','');
}

if (GETArr['sized_weight']){
$('#sized_weight').val(GETArr['sized_weight']);
}
if (GETArr['sized_volume']){
$('#sized_volume').val(GETArr['sized_volume']);
}
if (GETArr['length']){
$('#length').val(GETArr['length']);
}
if (GETArr['width']){
$('#width').val(GETArr['width']);
}if (GETArr['length']){
$('#height').val(GETArr['height']);
}
if (GETArr['sized_over']){
$('#negab').show(0);
$('#sized_neg').val(GETArr['sized_over']);
}
if (GETArr['volume_over']){
$('#negab').show(0);
$('#volume_neg').val(GETArr['volume_over']);
}


if (GETArr['insurance_checkbox']=="off"){
    $('#check').prop('checked', false);
}
if (GETArr['insurance_checkbox_2']=="on"){

}
if (GETArr['disabled_calculation']=="on"){
$('#example2, #example22').hide();
		$('#just, #just2').css('height','20px').css('margin-top' , '20px');
		$('#modal1').css('height','110px');
		$('#modal2').css('height','85px');
}
if (GETArr['insurance']){
var min = GETArr['insurance'];
var min1 = min.replace(/^\.|\d+\..*\.|[^\d\.{1}]/g,"");
$('#strah').val(min1);
}
var change = GETArr['package'];
if (change){
$('#upakovka1').find('#'+change).attr('selected','selected');
}



if (GETArr['group1']=="hide"){
i++;
$('#derival_point').css({display: 'none'});
}
if (GETArr['group2']=="hide"){
i++;
$('#arrival_point').css({display: 'none'});
}
if (GETArr['group3']=="hide"){
i++;
$('#sized_negab').css({display: 'none'});
$('#sized').css({display: 'none'});
}
if (GETArr['group4']=="hide"){
i++;
$('#strahovka').css({display: 'none'});
	if (GETArr['group5']!="hide"){
	$('.strah').css({height: '10px'})
	}
}
if (GETArr['group5']=="hide"){
i++;
$('#upakovka').css({display: 'none'});
$('.strah').css({height: '0px'})
	if (GETArr['group4']!="hide"){
	$('.strah').css({height: '85px'})
	}
}
if (GETArr['group1']=="disabled"){
y++;
$('#derival_point_cod').attr('disabled','').attr('title','Нельзя редактировать').css({color: '#AAAAAA'});
$('#derival_point_cod').removeAttr('maxlength').removeAttr('minlength');
}

if (GETArr['group11']=="disabled"){
y++;
$('#derival_checkbox').attr('disabled','').attr('title','Нельзя редактировать');
$('#derival_label').css({opacity: '0.5', color: '#AAAAAA'}).attr('title','Нельзя редактировать');
}
if (GETArr['group2']=="disabled"){
y++;
$('#arrival_point_cod').attr('disabled','').attr('title','Нельзя редактировать').css({color: '#AAAAAA'});
$('#arrival_point_cod').removeAttr('maxlength').removeAttr('minlength');
}
if (GETArr['group21']=="disabled"){
y++;
$('#arrival_checkbox').attr('disabled','').attr('title','Нельзя редактировать').css({color: '#AAAAAA'});
$('#arrival_label').css({opacity: '0.5', color: '#AAAAAA'}).attr('title','Нельзя редактировать');
}
if (GETArr['group3']=="disabled"){
y++;
$('#sized_weight').attr('disabled','').attr('title','Нельзя редактировать').css({color: '#AAAAAA'});
$('#sized_volume').attr('disabled','').attr('title','Нельзя редактировать').css({color: '#AAAAAA'});
$('#kg').css({opacity: '0.5', color: '#AAAAAA'}).attr('title','Нельзя редактировать');
$('#m3').css({opacity: '0.5', color: '#AAAAAA'}).attr('title','Нельзя редактировать');
$('#sized_neg').attr('disabled','').css({color: '#AAAAAA'});
$('#volume_neg').attr('disabled','').css({color: '#AAAAAA'});
$('#s_kg').css({opacity: '0.5', color: '#AAAAAA'}).attr('title','Нельзя редактировать');
$('#s_m3').css({opacity: '0.5', color: '#AAAAAA'}).attr('title','Нельзя редактировать');
$('#sized_negab').css({opacity: '0.5'}).attr('title','Нельзя редактировать');
$('#hre').removeAttr("onclick","$('#negab').hide(0);").attr('title','Нельзя редактировать');
}
if (GETArr['group4']=="disabled"){
y++;
$('#rub').css({opacity: '0.5', color: '#AAAAAA'}).attr('title','Нельзя редактировать');
$('#dis').css({opacity: '0.5', color: '#AAAAAA'}).attr('title','Нельзя редактировать');
$('#dis2').css({opacity: '0.5', color: '#AAAAAA'}).attr('title','Нельзя редактировать');
$('#abz1').css({opacity: '0.5', color: '#AAAAAA'}).attr('title','Нельзя редактировать');
$('#check').attr('disabled','');
$('#strah').attr('disabled','').attr('title','Нельзя редактировать');
$('#check').attr('title','Нельзя редактировать');
$('#strah').attr('title','Нельзя редактировать');
}
if (GETArr['group5']=="disabled"){
y++;
$('#upakovka1').attr('disabled','').attr('title','Нельзя редактировать').css({color: '#AAAAAA'});
$('#abz2').css({opacity: '0.5', color: '#AAAAAA'}).attr('title','Нельзя редактировать');
}
if (i==1){
$('#vert').css({margin: '120px 11px 0' });
}
if (i==2){
$('#vert').css({margin: '60px 11px 0' });
}
if (i==3){
$('#vert').css({margin: '0px 11px 0' });
}
if (i==4){
$('#vert').css({margin: '0px 11px 0' });
$('#modal2').css({display: 'block' });
$('#modal1').css({display: 'none' });
$('#modal3').css({display: 'none' });
}
if (i==5){
$('#vert').css({margin: '20px 11px 0' });
$('#modal2').css({display: 'none' });
$('#modal3').css({display: 'none' });
$('#modal1').css({display: 'block' });
$('#close').css({display: 'none' });
$('#main').css({opacity:  '0.5', height: '214px' });
}
if (y==7){
$('#vert').css({margin: '0px 11px 0' });
$('#modal2').css({display: 'none' });
$('#modal3').css({display: 'none' });
$('#modal1').css({display: 'block' });
$('#close').css({display: 'none' });
$('#main').css({opacity:  '0' });
}
if (y+i==7 || i==5 || y==2 && i==4){
$('.arcticmodal-overlay').css({height : '200px'});
checkOut();
}
if (y+i==7 || i==5 || y==2 && i==4){
$('.arcticmodal-overlay').css({height : '200px'});
}
});
