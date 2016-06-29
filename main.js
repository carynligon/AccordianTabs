var $filesDropdown = $('#files-dropdown');
var $mailDropdown = $('#mail-dropdown');
var $cloudDropdown = $('#cloud-dropdown');
var $filesCategory = $('#files .first');
var $mailCategory = $('#mail .first');
var $cloudCategory = $('#cloud .first');
var $allDropdowns = $('.dropdown');

$filesDropdown.addClass('dropdown-hide');
$mailDropdown.addClass('dropdown-hide');
$cloudDropdown.addClass('dropdown-hide');

$filesCategory.on('click', function () {
  $filesDropdown.toggleClass('dropdown-hide');
  $mailDropdown.addClass('dropdown-hide');
  $cloudDropdown.addClass('dropdown-hide');
});

$mailCategory.on('click', function () {
  $mailDropdown.toggleClass('dropdown-hide');
  $filesDropdown.addClass('dropdown-hide');
  $cloudDropdown.addClass('dropdown-hide');
});

$cloudCategory.on('click', function () {
  $cloudDropdown.toggleClass('dropdown-hide');
  $mailDropdown.addClass('dropdown-hide');
  $filesDropdown.addClass('dropdown-hide');
});
