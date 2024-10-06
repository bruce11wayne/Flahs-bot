let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^احا$/i.test(m.text)) { 
     responses = [ 
 '*احـم احـم 😳*'  
     ]; 
} else if (/^سلام عليكم|السلام عليكم ورحمه الله وبركاته|السلام عليكم$/i.test(m.text)) { 
     responses = [ 
       '*وعـلـيـكـم الـسـلام مـنـور/ه ♥*',  
     ];
   }else if (/^بروس$/i.test(m.text)) { 
     responses = [ 
'*مـطـوري وعـمكـم كـمـان 🤭🤍*'
     ]; 
 }else if (/^شحالك|كيفك$/i.test(m.text)) { 
     responses = [ 
'*بـخـيـر دامـك بـخـيـر*'
     ]; 
   }else if (/^حبيبي|اموت فيك|يا حب|حبيبتي|مزتي|تحبيني؟|تحبيني$/i.test(m.text)) { 
     responses = [ 
'*عـيـب بـتـكـسـف 🙈🤭*'
   ]; 
   }else if (/^احهههه$/i.test(m.text)) { 
     responses = [ 
'*دوم يـا عـيـون اونـوهـانـا 🫰🏻❤️‍🩹*',
]; 
   }else if (/^تتجوزيني|تتقوزيني$/i.test(m.text)) { 
     responses = [ 
'*اذا مـطـوري وافـق انـا مـوافـقـه 🙈*',
     
     ]; 
     
     }else if (/^هاي|هالو|أهلاً$/i.test(m.text)) { 
     responses = [ 
       '*هلا هلا نورت/ي*',  

     ]; 
}else if (/^احبك|بحبك/i.test(m.text)) { 
     responses = [ 
       '*عـيـب هـقـول لـمـطـوري 😶‍🌫️*',  

     ]; 
   }else if (/^فلسطين|غزه|🇵🇸$/i.test(m.text)) { 
     responses = [ 
'*اهـلـنـا و حـبـايـبـنـا*'
     ]; 
   } else if (/^معطوب$/i.test(m.text)) { 
     responses = [ 
'*هـهـهـهـه شـايـفـنـي شـبـهـك يـا مـعـطـوب 😂*'
     ]; 
     }else if (/^لوفي$/i.test(m.text)) { 
     responses = [ 
       '*مـلـك الـقـراصـنـة 🎩*',  

     ];
     }else if (/^زورو$/i.test(m.text)) { 
     responses = [ 
       '*صـائـد الـقـراصـنـة ⚔️*',  

     ];
     }else if (/^منور|نورت|نورتي|منوره$/i.test(m.text)) { 
     responses = [ 
       '*ايـه الـنـور ده كـلـه نـورتـنـا 🙈*',  

     ];
     }else if (/^اتفق$/i.test(m.text)) { 
     responses = [ 
       '*و انـا بـتـفـق مـعك بـس بـمـقـابـل 🙉*',  

     ];
     }else if (/^حب|بيحب|بيحبها|بيعشقها$/i.test(m.text)) { 
     responses = [ 
       '*زي بـروس بـيـحـب وحـده ومـيـت فـي دبـاديـبـهـا 🙉*',  

     ];
     }else if (/^محمد|النبي محمد|النبي$/i.test(m.text)) { 
     responses = [ 
       '*الـلـهـم صـل وسـلـم عـلـى نـبـيـنـا مـحـمـد🤍*',  
  
     ]; 
     }else if (/^مساء|مساء الخير$/i.test(m.text)) { 
     responses = [ 
       '*مـسـاء الـتـوت يـا حـلـو يـا كـيـوت 🌹🌚*',  

     ];
     }else if (/^صباح|صباح الخير$/ .test(m.text)) { 
     responses = [ 
       '*صـبـاحـك انـا 🧸🫦*',  
     ];
       }else if (/كلب|حيوان|عرص|كل زق|معفن|قبيح|وصخ|حيوانت^$/i.test(m.text)) { 
     responses = [ 
       '*بـطـل تـنـمـر يـا ويـلـك مـن الـلـه 🐦‍⬛🐦*',  
     ];
            }else if (/^همممم$/i.test(m.text)) { 
     responses = [ 
       '*مـش مـرتـاح لـيـك 🤨😐*',  
     ];
            }else if (/^مرحباً|مرحبا$/i.test(m.text)) { 
     responses = [ 
       '*مـرحـبـاً 🧸*',  
     ];
            }else if (/^اه$/i.test(m.text)) { 
     responses = [ 
       '*الـشـارع الـي وراه 🤭*',  
     ];
             }else if (/^نعم$/i.test(m.text)) { 
     responses = [ 
       '*احـد نـاداك يـا حـيـشـري 🤨؟؟ *',  
     ];
           }else if (/^ملل$/i.test(m.text)) { 
     responses = [ 
       '*عـارفـه والـلـه فـا اسـكـت 🤐*',  
     ];
            }else if (/^اخرس|اخرسي|اسكتي|اسكت$/i.test(m.text)) { 
     responses = [ 
       '*مـيـن انـت يـا عـفـن 🤨*',  
     ];

   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
