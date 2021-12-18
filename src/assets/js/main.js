// $(document).ready(function(){
//     $('#action_menu_btn').click(function(){
//         $('.action_menu').toggle();
//     });
//         });
        
           
        //     actionMenu.click(()=>{
        //             action.toggle()
        //    })
           function toggle(){
            // var x = document.getElementById("myDIV");
            // var actionMenu=document.getElementById('action_menu_btn');
            var action=document.querySelector('.action_menu');
        //   actionMenu.onclick = function() {
            if (action.style.display == "none") {
              action.style.display = "block";
            } else {
              action.style.display = "none";
            }
        }

        