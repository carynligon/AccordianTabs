var $filesDropdown = $('#files-dropdown');
var $mailDropdown = $('#mail-dropdown');
var $cloudDropdown = $('#cloud-dropdown');
var $filesCategory = $('#files .first');
var $mailCategory = $('#mail .first');
var $cloudCategory = $('#cloud .first');
var $allDropdowns = $('.dropdown');
var $allCategories = $('.first');

$filesDropdown.addClass('dropdown-hide');
$mailDropdown.addClass('dropdown-hide');
$cloudDropdown.addClass('dropdown-hide');

$filesCategory.on('click', function () {
  $(this).toggleClass('active');
  $mailCategory.removeClass('active');
  $cloudCategory.removeClass('active');
  $filesDropdown.toggleClass('dropdown-hide');
  $mailDropdown.addClass('dropdown-hide');
  $cloudDropdown.addClass('dropdown-hide');
});

$mailCategory.on('click', function () {
  $(this).toggleClass('active');
  $filesCategory.removeClass('active');
  $cloudCategory.removeClass('active');
  $mailDropdown.toggleClass('dropdown-hide');
  $filesDropdown.addClass('dropdown-hide');
  $cloudDropdown.addClass('dropdown-hide');
});

$cloudCategory.on('click', function () {
  $(this).toggleClass('active');
  $mailCategory.removeClass('active');
  $filesCategory.removeClass('active');
  $cloudDropdown.toggleClass('dropdown-hide');
  $mailDropdown.addClass('dropdown-hide');
  $filesDropdown.addClass('dropdown-hide');
});
