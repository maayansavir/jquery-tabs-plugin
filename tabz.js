(function ($) {


    $.fn.tabs = function (settings) {

        var
            //buttons hold ana array of the contents buttons/controllers
            buttons = this.find(" > ul > li"),

            //contents holds the contents with the content
            contents = this.find('div.content'),

            //random num to be used in several places, changes on every invocation of the contents function
            random = Math.random(),

            //random names for the methods that comes from the settings
            showTab = 'showTab' + random,

            firstShown = settings.firstShown - 1 || 0;




        handleActiveState(buttons[0]);




        //checks the settings object and apply settings depend on its values
        if(settings){

            //show and hide - fade in or normal
            if(settings.fade){
                $.fn[showTab] = $.fn.fadeIn;
            }
            else{
                $.fn[showTab] = $.fn.show;
            }


            if(settings.transition){
                activateTabsTransition(settings.transition);
            }

            //first shown tab
            var first = $(contents[firstShown]).attr('data-tab');
            changeTab(first);





        }




        //defaults css hover on buttons to cursor
        $(buttons).css('cursor', 'pointer');

        //binding the click events to the buttons
        buttons.on('click',function (event) {
            var elementClicked = event.target;
            var name = $(elementClicked).attr('data-tab');
            changeTab(name);
            handleActiveState(elementClicked)
        });


        //handle the tab change when matching bottom was clicked
        function changeTab (name) {
            for (var i = 0; i < contents.length; i++) {
                var current = contents[i];
                if ($(current).attr('data-tab') === name) {
                    $(current)[showTab]();
                }

                else {
                    $(current).hide();
                }
            }
        }


        //when page is loaded, we will initialize the contents section and show only the first one
        function handleActiveState  (elementClicked) {
            for (var i = 0; i < buttons.length; i++) {
                $(buttons[i]).removeClass('active');
            }
            $(elementClicked).addClass('active');
        }


        function activateTabsTransition(time){
            var counter = 0;
                setInterval(function(){
                    var currentTabToBeShown = contents[counter % contents.length],
                        wantedTabName = $(currentTabToBeShown).attr('data-tab'),
                        matchingTabButton =$("li[data-tab='" + wantedTabName + "']");

                changeTab(wantedTabName);
                handleActiveState(matchingTabButton);
                ++counter;
            }, time * 1000)
        }

        return this;

    };




    $(".container").tabs({
        fade : true,
       firstShown : 2,
     });


})(jQuery);






