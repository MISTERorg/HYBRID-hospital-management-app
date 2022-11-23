import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MomoService {

  constructor() { }
//   $(function() {
//     var params = {
//         // Request parameters
//     };
  
//     $.ajax({
//         url: "https://sandbox.momodeveloper.mtn.com/collection/v2_0/requesttowithdraw?" + $.param(params),
//         beforeSend: function(xhrObj){
//             // Request headers
//             xhrObj.setRequestHeader("Authorization","");
//             xhrObj.setRequestHeader("X-Callback-Url","");
//             xhrObj.setRequestHeader("X-Reference-Id","");
//             xhrObj.setRequestHeader("X-Target-Environment","");
//             xhrObj.setRequestHeader("Content-Type","application/json");
//             xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","{subscription key}");
//         },
//         type: "POST",
//         // Request body
//         data: "{body}",
//     })
//     .done(function(data) {
//         alert("success");
//     })
//     .fail(function() {
//         alert("error");
//     });
// });
}
