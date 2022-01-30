InboxSDK.load(2, 'YOUR_APP_ID_HERE').then(function(sdk){
    // the SDK has been loaded, now do something with it!
    sdk.Compose.registerComposeViewHandler(function(composeView){
        // a compose view has come into existence, do something with it!
        composeView.addButton({
            title: "My templates!",
            iconUrl: 'http://localhost:3000/ic-template.png',
            onClick: function(event) {
                console.log(event);

                var dropdown = event.dropdown;
                dropdown.el.innerHTML = '<iframe style="width: 350px; height: 400px;" frameBorder="0" src="http://localhost:3000/" title="description"></iframe>';
                dropdown.setPlacementOptions({
                    position: 'top',
                    hAlign  : 'left',
                    forcePosition: true,
                    forceHAlign: true,
                });

                window.onmessage = function(e) {
                    if (e.origin === "http://localhost:3000") {
                        // When you click one of the templates in the list, 
                        // it will insert the text of the template into the body of the draft (replacing any existing text there).
                        event.composeView.setBodyText(e.data);
                        //event.composeView.insertTextIntoBodyAtCursor(e.data);
                        dropdown.close();
                    }
                };

                /*
                var modal = sdk.Widgets.showModalView({
                    title: 'Templates',
                    //'el': '<div id="inbox-sdk-template-modal">teste</div>',
                    'el': '<iframe style="width: 640px; height: 480px;" frameBorder="0" src="http://localhost:3000/" title="description"></iframe>'
                });
                */
            },
            hasDropdown: true
        });
    });
});