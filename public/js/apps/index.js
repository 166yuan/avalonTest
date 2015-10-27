define(['jquery','avalon', "domReady!"],function  ($) {
    // body...
    var avalonData = null;
    var model = {
        navMenu:["文章","分类","标签","收藏","关于"]
    };

    var fn = {
        login:function(){

        }
    };

    return {
        init: function(conf){
            avalonData = avalon.define($.extend(conf,model,fn));
            avalon.scan();
        },
        prepare: {

        }
    };
});