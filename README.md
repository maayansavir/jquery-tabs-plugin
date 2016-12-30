# jquery-tabs-plugin
<p>
This is a very simple, liteweight and esasy to handle jqUery tabs plugin.
first, you will need your html to look like that :
</p>
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

<p>
And all you need to to is to call the tabs function like this :
</p>

<p>
$(".wrapper").tabs();
</p>
<h4>
Other options :
</h4>

<h6> adds fading effect the tabs </h6>
$(".wrapper").tabs({<br>
    fade : true <br>
});


<h6>determines which tabs and content will be shown first </h6>
$(".wrapper").tabs({<br>
    firstShown : 2 <br>
});

<h6> changes tabs and content automatically every X seconds (in this example every two second) </h6>
$(".wrapper").tabs({ <br>
    transition : 2 <br>
});








