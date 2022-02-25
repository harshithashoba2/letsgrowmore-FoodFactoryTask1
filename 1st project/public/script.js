
function validate() 
{
   
if( document.myForm.name.value == "" ) {
alert( "Please provide your name!" );
document.myForm.name.focus() ;
return false;
}
if( document.myForm.email.value == "" ) {
alert( "Please provide your Email!" );
document.myForm.email.focus() ;
return false;
}
if( document.myForm.phone.value == "" ) {
alert( "Please provide your Contact Number!" );
document.myForm.phone.focus() ;
return false;
}
if( document.myForm.msg.value == "" ) {
    alert( "Please provide your Message!" );
    document.myForm.msg.focus() ;
    return false;
    }
    
alert("Details sent successfully!");



}
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  }
