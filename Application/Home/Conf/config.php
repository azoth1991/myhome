<?php
return array(
    'URL_ROUTER_ON'   => true,

    'URL_ROUTE_RULES'=>array(
        array('news$', 'Index/index', '', array('method'=>'get')),
        array('news/:id$', 'Index/getNewsById', '', array('method'=>'get')),
        array('news/:id$', 'Index/editNews', '', array('method'=>'put')),
    ),
);