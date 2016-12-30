# jquery-tabs-plugin

This is a very simple, liteweight and esasy to handle jqUery tabs plugin.
first, you will need your html to look like that :
```html
<div class='wrapper'>
    <ul>
        <li data-tab='tab-1'> tab-1 </li>
        <li data-tab='tab-2'> tab-2 </li>
        <li data-tab='tab-3'> tab-3 </li>
    </ul>

    <div data-tab="tab-1" class="content"></div>
    <div data-tab="tab-2" class="content"></div>
    <div data-tab="tab-3" class="content"></div>
</div>
```


And all youe need to to is to call the tabs function like this :

$(".wrapper").tabs();

Other options :

adds fading effect the tabs
$(".wrapper").tabs({
    fade : true
});


determines which tabs and content will be shown first
$(".wrapper").tabs({
    firstShown : 2
});


changes tabs and content automatically every X seconds (in this example every two second)
$(".wrapper").tabs({
    transition : 2
});








