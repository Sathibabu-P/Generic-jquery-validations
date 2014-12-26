/*
  Jquery validation file.
  Author:****
  CopyRight:@nyros
*/
$(document).ready(function (){


var email = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
var numeric = /^\d*(?:\.\d\d)?$/;
var alphanumeric = /^(?=.*[a-zA-Z])(?=.*[0-9]).+$/;
var string = /^[a-zA-Z]*$/;
//var bool=/[0]{1,1}/;
var count=0;
var style="background-color: rgb(204, 62, 62); color: white; padding: 5px; position: absolute; border-radius: 5px; display: inline; margin: 0px;";
var close="border: 1px solid rgb(204, 204, 204); padding: 2px; cursor: pointer; margin-left: 6px;";    


/*loop multiple forms*/
  $("form").each(function () {
    var $this = $(this);
    var $parent = $this.parent();
     $this.submit(function (e) { //submit each form
    
   
            count=0;
 

   
          $(this).find("input[required=true], select[required=true], textarea[required=true], input[min], input[max]").each(function(){
            
                var min=$(this).attr('min');
                var max=$(this).attr('max');
                var length=$.trim($(this).val()).length;  
                var classname=$(this).attr('isvalidate'); 
                var msg=$(this).attr('msg'); 
                var type=$(this).attr('type'); 
           
               
            
            if(!$.trim($(this).val())){ //if this field is empty            

                $(this).focus();            
                $(this).attr('placeholder',$(this).attr('name') + ' is required'); 
                $(this).next('p').hide();  
                $(this).after( "<p style='"+style+"'>This filed is required<span id='close_box' style='"+close+"'>X</span></p>" );                
                $(this).css('outline','1px');
                count++;
                return false;
                //set do not proceed flag
            } else  if($.trim($(this).val()) &&  classname=="string"){ //if classname is string         
                
                if(!string.test($.trim($(this).val()))){
                $(this).next('p').hide();  
               $(this).after( "<p style='"+style+"'>"+msg+"<span id='close_box' style='"+close+"'>X</span></p>" ); 
                $(this).focus();    
                count++;
                return false;  } 
            } else if($.trim($(this).val()) &&  classname=="email"){ //if classname is email          
                 
                if(!email.test($.trim($(this).val()))){
                $(this).next('p').hide();  
               $(this).after( "<p style='"+style+"'>"+msg+"<span id='close_box' style='"+close+"'>X</span></p>" ); 
                $(this).focus();    
                count++;
                return false;  } 
            } else if($.trim($(this).val()) &&  classname=="alphanumeric"){ //if classname is alphanumeric         
                
                if(!alphanumeric.test($.trim($(this).val()))){
                $(this).next('p').hide();  
               $(this).after( "<p style='"+style+"'>"+msg+"<span id='close_box' style='"+close+"'>X</span></p>" ); 
                $(this).focus();    
                count++;
                return false;    }  
            } else if($.trim($(this).val()) &&  classname=="numeric"){ //if classname is numeric      
                
                if(!numeric.test($.trim($(this).val()))){
                $(this).next('p').hide();  
               $(this).after( "<p style='"+style+"'>"+msg+"<span id='close_box' style='"+close+"'>X</span></p>" ); 
                $(this).focus();    
                count++;
                return false;  
                }  
            }  else if($.trim($(this).val()) &&  classname=="bool"){ //if classname is boolean         
              
                if(!numeric.test($.trim($(this).val()))){
                $(this).next('p').hide();  
               $(this).after( "<p style='"+style+"'>"+msg+"<span id='close_box' style='"+close+"'>X</span></p>" ); 
                $(this).focus();    
                count++;
                return false;  } 
            } else if($.trim($(this).val())>0 &&  !classname){ //if classname is empty             
                             
               var check=checklength(min,max,length);             
               if(check==0) { $(this).next('p').hide();  
               $(this).after( "<p style='"+style+"'>"+msg+"<span id='close_box' style='"+close+"'>X</span></p>" ); 
                $(this).focus();    
                count++;
                return false;}

            } 
            if($.trim($(this).val())== "on" && type=="radio") //radio button validation
            {
              
              var name= $(this).attr("name");                  
              if (check_check(type,name)==0) {
              $(this).focus();    
              count++;                
              return false;
             }
           }  

           if($.trim($(this).val())== "on" && type=="checkbox")  //check button validation
            {
              
              var name= $(this).attr("name");                  
              if (check_check(type,name)==0) {
              $(this).focus();    
              count++;                
              return false;
             }
           } 

            if($.trim($(this).val())  && (min>0 || max>0)){ //if this field is notempty          
                        
               var check=checklength(min,max,length);
              
               if(check==0) { $(this).next('p').hide();  
               $(this).after( "<p style='"+style+"'>"+msg+"<span id='close_box' style='"+close+"'>X</span></p>" ); 
                $(this).focus();    
                count++;
                return false;} else $(this).next('p').hide(); 
            
            }
           

          });

            
         
           if(count==0) alert('sucessfully submitted'); else return false;
            
          
  });
 }); 
          /*function for check min and max length input fields*/
          function checklength(min,max,val)
          {

                      if(min>0 && max>0){              
                          if(val < min || val > max)
                           return 0;   else return 1; 
                       } else if(min>0 && !max){              
                          if(val < min)
                          return 0; else return 1; 
                      } else if(max>0 && !min){              
                          if(val > max)
                          return 0;  else return 1;                   
                      } else return 1;
                    
          }

            /*function for radio and checkbox length*/
           function check_check(type,name){

           
              if ($('input[name='+ name +']:checked').length && $('input[type='+ type +']:checked').length) {
                   // at least one of the radio buttons was checked
                   return 1; // allow whatever action would normally happen to continue
              }
              else {
                   // no radio button was checked
                   return 0; // stop whatever action would normally happen
              }
            }
            /*on change validation*/

        $('form select,form input[type=radio],form input[type=checkbox],form textarea,form input').on('change', function() {
       
                if($.trim($(this).val())){ 
                $(this).next('p').hide();  
                  
                 }
         
          
            }); 


              //onkeyup validation//

        
      
         $('form input,form select, form textarea').on('keyup blur focus', function() {
 
            

                var min=$(this).attr('min');
                var max=$(this).attr('max');
                var length=$.trim($(this).val()).length;  
                var classname=$(this).attr('isValidate'); 
                var msg=$(this).attr('msg'); 
                var type=$(this).attr('type');

          
           if($.trim($(this).val())!="on" &&  !classname){ //if this field is empty    
               
                             
               var check=checklength(min,max,length);
                $(this).next('p').hide(); 
               if(check==0) { $(this).next('p').hide();  
               $(this).after( "<p style='"+style+"'>"+msg+"<span id='close_box' style='"+close+"'>X</span></p>" ); 
                $(this).focus();    
               
                return false; }               
           
            }  else if($.trim($(this).val()) &&  classname=="string"){ //string validation check         
                
                if(!string.test($.trim($(this).val()))){
                $(this).next('p').hide();  
               $(this).after( "<p style='"+style+"'>"+msg+"<span id='close_box' style='"+close+"'>X</span></p>" ); 
                $(this).focus();  
                return false;  } else $(this).next('p').hide(); 
            } else if($.trim($(this).val()) &&  classname=="email"){ //mail validation check            
               
                if(!email.test($.trim($(this).val()))){
                $(this).next('p').hide();  
               $(this).after( "<p style='"+style+"'>"+msg+"<span id='close_box' style='"+close+"'>X</span></p>" ); 
                $(this).focus();    
               
                return false;  } else $(this).next('p').hide(); 
            } else if($.trim($(this).val()) &&  classname=="alphanumeric"){ //alphanumeric validation check          
                
                if(!alphanumeric.test($.trim($(this).val()))){
                $(this).next('p').hide();  
               $(this).after( "<p style='"+style+"'>"+msg+"<span id='close_box' style='"+close+"'>X</span></p>" ); 
                $(this).focus();    
               
                return false;    }  else $(this).next('p').hide(); 
            } else if($.trim($(this).val()) &&  classname=="bool"){ //numeric validation check         
                
                if(!bool.test($.trim($(this).val()))){
                $(this).next('p').hide();  
               $(this).after( "<p style='"+style+"'>"+msg+"<span id='close_box' style='"+close+"'>X</span></p>" ); 
                $(this).focus();    
                
                return false;  
                }  else $(this).next('p').hide(); 
            }  else if($.trim($(this).val()) &&  classname=="numeric"){ //boolean validation check         
               
                if(!numeric.test($.trim($(this).val()))){
                $(this).next('p').hide();  
               $(this).after( "<p style='"+style+"'>"+msg+"<span id='close_box' style='"+close+"'>X</span></p>" ); 
                $(this).focus();    
                
                return false;  
                }  else $(this).next('p').hide(); 
            } 
             if($.trim($(this).val())  && (min>0 || max>0)){ //if this field is notempty          
                        
               var check=checklength(min,max,length);
              
               if(check==0) { $(this).next('p').hide();  
               $(this).after( "<p style='"+style+"'>"+msg+"<span id='close_box' style='"+close+"'>X</span></p>" ); 
                $(this).focus();    
                count++;
                return false;} else $(this).next('p').hide(); 
            
            }
               

   }); 

});
$(document).on('click','#close_box',function(){
    $(this).parent().remove();
});

 