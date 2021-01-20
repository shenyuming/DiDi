<template>
    <div>
        <div class="homeWrap">
            <head-component></head-component>
            <div class="main">
                <ul>
                    <li>
                        <div class="inner">
                            <div class="imgCenter">
                                <img src="../assets/image/item1.png" alt="">
                            </div>
                            <p class="brand">NIKE GRADE SCHOOL AIR MAX 90 LTR</p>
                            <div class="detail">
                                <p>Grade School Air Max 90 sihouette</p>
                                <p>Leather upper</p>
                                <p>Suede overlayes</p>
                                <p>Padded collar</p>
                                <p>TPU eyelets</p>
                                <p>Nike Swoosh patch on tongue</p>
                                <p>Air Max branding on side panel</p>
                                <p>Rubberized Nike Air patch on heel</p>
                                <p>Flat cotton laces</p>
                                <!-- <p>Visible sole unit</p>
                                    <p>Foam midsole</p>
                                    <p>Rubber waffle outsole</p> -->
                            </div>
                            <div class="price">
                                80 usd
                            </div>
                            <div class="subInfo">
                                <p>Style:NKCD6864-102</p>
                                <p>Color:White/Particle Grey/Light Smoke</p>
                                <p>Material:Leather/Suede</p>
                            </div>
                            <div class="operate">
                                <p @mouseover="showDetail()" class="likeSize">Size</p>
                                <p class="buyInfo">Buy</p>
                            </div>
                        </div>
                        <div class="size" v-if="showFlag">
                            <div class="likeUl" v-for="(item,index) in sizeList" :key="index">
                                <p :class="{'active': index == activeLinkId}">{{item.name}}</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="inner">
                            <div class="imgCenter">
                                <img src="../assets/image/item2.png" alt="">
                            </div>
                            <p class="brand">CONVERSE X FENG CHEN WANG JACK PURCELL MID</p>
                            <div class="detail">
                                <p>Jack Purcell Mid sihouette</p>
                                <p>PU coated nubuck leather upper</p>
                                <p>Feng Chen Wang branding on lateral heel</p>
                                <p>Converse Jack Purcell On rear</p>
                                <p>Tonal stitching</p>
                                <p>Flat cotton laces</p>
                                <p>Matte rubber foxing</p>
                                <p>Rubber outsole</p>
                            </div>
                            <div class="price">
                                120 usd
                            </div>
                            <div class="subInfo">
                                <p>Style:CN169008C</p>
                                <p>Color:Obsidian/Sea Salt/Black</p>
                                <p>Material:Leather/Nubuck</p>
                            </div>
                            <div class="operate">
                                <p @mouseover="showDetail1()" class="likeSize">Size</p>
                                <p class="buyInfo">Buy</p>
                            </div>
                            <div class="size" v-if="showFlag1">
                                <div class="likeUl" v-for="(item,index) in sizeList1" :key="index">
                                    <p :class="{'active': index == activeLinkId1}">{{item.name}}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="inner">
                            <div class="imgCenter">
                                <img src="../assets/image/item3.png" alt="">
                            </div>
                            <p class="brand">ADIDAS CONSORTIUM X HUMAN MADE CAMPUS</p>
                            <div class="detail">
                                <p>Grade School Air Max 90 sihouette</p>
                                <p>Leather upper</p>
                                <p>Suede overlayes</p>
                                <p>Padded collar</p>
                                <p>TPU eyelets</p>
                                <p>Rubberized Nike Air patch on heel</p>
                                <p>Flat cotton laces</p>
                                <p>Visible sole unit</p>
                                <p>Foam midsole</p>
                                <p>Rubber waffle outsole</p>
                            </div>
                            <div class="price">
                                150 usd
                            </div>
                            <div class="subInfo">
                                <p>Style:NKCD6864-102</p>
                                <p>Color:White/Particle Grey/Light Smoke</p>
                                <p>Material:Leather/Suede</p>
                            </div>
                            <div class="operate">
                                <p @mouseover="showDetail2()" class="likeSize">Size</p>
                                <p class="buyInfo">Buy</p>
                            </div>
                            <div class="size" v-if="showFlag2">
                                <div class="likeUl" v-for="(item,index) in sizeList2" :key="index">
                                    <p :class="{'active': index == activeLinkId2}">{{item.name}}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>
    import headComponent from "@/components/headComponent";
    import Utils from "@/utils/util";
    export default {
        name: "home",
        data() {
            return {
                sizeList: [{
                        name: 35.5,
                        id: 0
                    },
                    {
                        name: 36,
                        id: 1
                    },
                    {
                        name: 36.5,
                        id: 2
                    },
                    {
                        name: 37,
                        id: 3
                    },
                    {
                        name: 37.5,
                        id: 4
                    },
                    {
                        name: 38,
                        id: 5
                    },
                    {
                        name: 38.5,
                        id: 6
                    },
                    {
                        name: 39,
                        id: 7
                    },
                    {
                        name: 39.5,
                        id: 8
                    },
                    {
                        name: 40,
                        id: 9
                    },
                    {
                        name: 41,
                        id: 10
                    },
                    {
                        name: 42,
                        id: 11
                    },
                    {
                        name: 43,
                        id: 12
                    },
                    {
                        name: 44,
                        id: 13
                    },
                    {
                        name: 45,
                        id: 14
                    }
                ],
                activeLinkId: 0,
                showFlag: false,
                sizeList1: [{
                        name: 35.5,
                        id: 0
                    },
                    {
                        name: 36,
                        id: 1
                    },
                    {
                        name: 36.5,
                        id: 2
                    },
                    {
                        name: 37,
                        id: 3
                    },
                    {
                        name: 37.5,
                        id: 4
                    },
                    {
                        name: 38,
                        id: 5
                    },
                    {
                        name: 38.5,
                        id: 6
                    },
                    {
                        name: 39,
                        id: 7
                    },
                    {
                        name: 39.5,
                        id: 8
                    },
                    {
                        name: 40,
                        id: 9
                    },
                    {
                        name: 41,
                        id: 10
                    },
                    {
                        name: 42,
                        id: 11
                    },
                    {
                        name: 43,
                        id: 12
                    },
                    {
                        name: 44,
                        id: 13
                    },
                    {
                        name: 45,
                        id: 14
                    },
                    {
                        name: 46,
                        id: 15
                    },
                    {
                        name: 47,
                        id: 16
                    },
                    {
                        name: 48,
                        id: 17
                    },
                    {
                        name: 49,
                        id: 18
                    }
                ],
                activeLinkId1: 0,
                showFlag1: false,
                sizeList2: [{
                        name: 35.5,
                        id: 0
                    },
                    {
                        name: 36,
                        id: 1
                    },
                    {
                        name: 37,
                        id: 2
                    },
                    {
                        name: 37.5,
                        id: 3
                    },
                    {
                        name: 38,
                        id: 4
                    },
                    {
                        name: 39,
                        id: 5
                    },
                    {
                        name: 39.5,
                        id: 6
                    },
                    {
                        name: 40,
                        id: 7
                    },
                    {
                        name: 40.5,
                        id: 8
                    },
                    {
                        name: 41,
                        id: 9
                    },
                    {
                        name: 42,
                        id: 10
                    },
                    {
                        name: 43,
                        id: 11
                    },
                    {
                        name: 43.5,
                        id: 12
                    },
                    {
                        name: 44.5,
                        id: 13
                    },
                    {
                        name: 45,
                        id: 14
                    },
                    {
                        name: 46,
                        id: 15
                    },
                    {
                        name: 46.5,
                        id: 16
                    },
                    {
                        name: 47,
                        id: 17
                    }
                ],
                activeLinkId2: 0,
                showFlag2: false
            };
        },
        components: {
            headComponent
        },
        methods: {
            showDetail() {
                this.showFlag = !this.showFlag;
            },
            showDetail1() {
                this.showFlag1 = !this.showFlag1;
            },
            showDetail2() {
                this.showFlag2 = !this.showFlag2;
            }
        },
        computed: {},
        created() {}
    };
</script>

<style lang="scss" scoped>
    .homeWrap {
        .likeSize {
            height: 30px;
            line-height: 30px;
            width: 60px;
            text-align: center;
            background-color: #4A0DC8;
            border-radius: 30px;
             cursor: pointer;
        }
        .buyInfo {
            height: 30px;
            line-height: 30px;
            width: 60px;
            text-align: center;
            background-color: #4A0DC8;
            border-radius: 30px;
            cursor: pointer;
        }
        .main {
            width: 1060px;
            margin: 0 auto;
            padding-bottom: 200px;
            ul {
                display: flex;
                justify-content: space-between;
                li {
                    background-color: #f5fbfe;
                    border-radius: 20px;
                    padding: 25px 25px 0px 25px;
                    width: 280px;
                    position: relative;
                    .inner {
                        background: linear-gradient(#fefdeb, #fcfdef);
                    }
                    .imgCenter {
                        text-align: center;
                        background-color: #fff;
                        height: 200px;
                        width: 100%;
                        overflow: hidden;
                        img {
                            width: 240px;
                        }
                    }
                    .brand {
                        padding: 10px 0;
                        margin: 0 20px;
                        height: 40px;
                        font-weight: bold;
                        color: #6a6a6a;
                        font-size: 20px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                    }
                    .detail {
                        height: 150px;
                        p {
                            color: #babbb4;
                            padding: 0 20px;
                            font-size: 12px;
                        }
                    }
                    .price {
                        color: red;
                        padding-left: 30px;
                        font-size: 18px;
                    }
                    .subInfo {
                        margin: 10px 0;
                        p {
                            padding: 0 20px;
                            color: #4A0DC8;
                        }
                    }
                    .operate {
                        display: flex;
                        justify-content: space-between;
                        padding: 10px;
                        img {
                            cursor: pointer;
                        }
                    }
                    .size {
                        position: absolute;
                        bottom: 50px;
                        left: 50px;
                        background: url("../assets/image/sizeBor.png") no-repeat;
                        width: 167px;
                        background-size: 100%;
                        height: 167px;
                        display: flex;
                        justify-content: flex-start;
                        flex-wrap: wrap;
                        padding: 10px;
                        .likeUl {
                            p {
                                color: #6d6d6d;
                                background-color: #fff;
                                width: 28px;
                                height: 28px;
                                line-height: 28px;
                                text-align: center;
                                border-radius: 28px;
                                cursor: pointer;
                                margin: 0 5px;
                                position: relative;
                                font-size: 12px;
                                &::before {
                                    content: "";
                                    position: absolute;
                                    top: 22px;
                                    left: 6px;
                                    width: 15px;
                                    height: 1px;
                                    background-color: #6d6d6d;
                                }
                                &:active {
                                    color: #fff;
                                    background-color: #4A0DC8;
                                }
                                &:hover {
                                    color: #fff;
                                    background-color: #4A0DC8;
                                }
                            }
                            .active {
                                color: #fff;
                                background-color: #4A0DC8;
                                &::before {
                                    background-color: #fff;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>

