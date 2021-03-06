/*
 * get_title.js
 * Copyright (C) 2018 foree <foree@foree-pc>
 *
 * Distributed under terms of the MIT license.
 */

onload=function(){
    chrome.tabs.getSelected(function(tab){
        var a = document.createElement('a');
        var attr_href = document.createAttribute('href');
        attr_href.value = tab.url;
        var textNode = document.createTextNode(tab.title);

        a.appendChild(textNode);
        a.setAttributeNode(attr_href);
        a.setAttribute('target', '_blank');
        a.setAttribute('id', 'target');

        var div = document.getElementById('content');
        div.appendChild(a);
        //document.getElementById('title').innerHTML = tab.title;
        //document.getElementById('content').innerHTML = tab.url;

        //document.getElementById('add_to_sheets').onclick = function() {

        //};
        //
        /*document.getElementById("add_to_sheets").onclick=
            function(){ 
                const input = document.createElement('input');
                document.body.appendChild(input);

                input.setAttribute('value', a.outerHTML);
                //alert(a.innerHTML);
                input.focus();
                input.select();
                if(document.execCommand('copy')){
                    document.execCommand('copy');
                    console.log('copy success');
                }

                document.body.removeChild(input);
            };

        */
        // use clipboard
        // create a agent button
        agent_button = document.createElement('button');
        document.body.appendChild(agent_button);

        var clipboard = new ClipboardJS(agent_button, {
            target: function() {
                return document.getElementById('target');
            }
        });


        clipboard.on('success', function(e) {
            console.log(e);
        });

        clipboard.on('error', function(e) {
            console.log(e);
        });


        agent_button.click();


        document.body.removeChild(agent_button);
    });
}


