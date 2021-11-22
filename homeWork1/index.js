var vm =new Vue({
    el:'.img_container',
    data: {
        imgs:[
            "imgs/img1.jpeg",
            "imgs/img2.jpeg",
            "imgs/img3.jpeg",
            "imgs/img4.jpeg",
            "imgs/img5.jpeg",
        ],
        activeIndex:1,

        imgClasses:[
           1,2,3,4,5
        ],

    },
    methods:{
        onLastImage(){
            this.imgClasses=this.rollList('up',this.imgClasses);
            console.log('click lastimg btn');
        },
        onNextImage(){
            this.imgClasses=this.rollList('down',this.imgClasses);
            console.log('click nextimg btn');

        },
        rollList(direction,list){
            if(direction==='up'){
                let templist=list.slice(1,list.length);
                templist.push(list[0]);
                return templist;
            }else if(direction==='down'){
                let templist=list.slice(0,list.length-1);
                templist = [list[list.length-1]].concat(templist);
                return templist;
            }
        },
        getPoision(index){
            return "position"+this.imgClasses[index];
        },
    }
});




