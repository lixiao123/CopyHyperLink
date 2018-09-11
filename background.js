/*
 * get_title.js
 * Copyright (C) 2018 foree <foree@foree-pc>
 *
 * Distributed under terms of the MIT license.
 */

document.write("<script type='text/javascript' src='clipboard.min.js'></script>")

chrome.contextMenus.create({
  title: "CopyHyperLink",
  onclick: copyBack
});

function copyBack(){
    chrome.tabs.getSelected(function(tab){

        var a = document.createElement('a');
        var attr_href = document.createAttribute('href');
        attr_href.value = tab.url;
        var textNode = document.createTextNode(tab.title);

        a.appendChild(textNode);
        a.setAttributeNode(attr_href);
        a.setAttribute('id', 'target');
        document.body.appendChild(a);

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
