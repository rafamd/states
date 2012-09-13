var $ = jQuery.noConflict();
$(document).ready(function() {

$('a.tab-us').click(function() {
  $('#edit-field-measure-system-und-us').click();
});

$('a.tab-uk').click(function() {
$('#edit-field-measure-system-und-uk').click();
});

$('a.tab-metric').click(function() {
  $('#edit-field-measure-system-und-metric').click();
});

});
